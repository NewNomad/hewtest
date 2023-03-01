import { LocalDrink, RecommendOutlined } from '@mui/icons-material'
import { Button, CircularProgress, Container, Grid, Modal, Paper, Tab, Tabs, Typography, colors } from '@mui/material'
import Product from '../2molecules/Product'
import { ProductTabs } from '../2molecules/ProductTabs'
import { ShowModalInfo } from '../2molecules/ShowModalInfo'
import { TypeProducts } from '../types/TypeProducts'
import { cartState } from '../types/TypeCart'
import { useRecoilState } from 'recoil'
import React, { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import RecommendProduct from '../2molecules/RecommendProduct'
import Webcam from 'react-webcam'
import * as faceapi from "face-api.js"
import Weather from '../../pages/api/weather.json'
import { log } from 'console'
import { motion } from 'framer-motion'
import { walletTransition } from '../../animation/animation'


const fetchProduct = "/api/fetchProducts"
const fetcher = (url: string) => fetch(url).then(response => response.json());


type User = {
    age: number
    gendar: faceapi.Gender
}
const undefinedUser: User = {
    age: 9999,
    gendar: faceapi.Gender.FEMALE
}

type RecommendIds = {
    f_product_ids: Array<number>
}

export const Recommend = () => {
    const [user, setuser] = useState<User>(undefinedUser) // ユーザーの年齢や性別
    const { data, error } = useSWR<TypeProducts[]>(fetchProduct, fetcher);
    const [cart] = useRecoilState(cartState)
    const [recommend, setrecommend] = useState<TypeProducts[]>()

    // face-api
    const webcamRef = useRef<Webcam>(null)
    const loadModels = async () => {
        const MODEL_URL = "/weights"
        await Promise.all([
            faceapi.nets.tinyFaceDetector.load(MODEL_URL),
            faceapi.nets.ageGenderNet.load(MODEL_URL),
            // faceapi.nets.faceExpressionNet.load(MODEL_URL)
        ])
    }

    const faceDetectHandler = async () => {
        await loadModels()
        if (webcamRef.current) { // + canvas 
            const webcam = webcamRef.current.video as HTMLVideoElement
            const video = webcamRef.current.video as HTMLVideoElement
            const detectionsWithGenderNet = await faceapi
                .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                .withAgeAndGender();
            return detectionsWithGenderNet

        }
    }

    // おすすめのidをpythonからとってくる
    const fetchRecommend = async () => {
        const age = user.age
        const gender = user.gendar == faceapi.Gender.FEMALE ? 0 : 1
        const temp = 27
        const humidity = 50
        const result: RecommendIds = await (await fetch(`api/pythonAI?age=${age}&gender=${gender}&temp=${temp}&humidity=${humidity}`)).json()
        // console.log(result);
        // おすすめ商品のproduct情報
        const recommend = data?.filter(product => {
            return result.f_product_ids.includes(product.id)
        })
        // console.log(recommend);
        setrecommend(recommend)
    }

    useEffect(() => {
        const timer = setInterval(async () => {
            const detectionsWithGenderNet = (await faceDetectHandler()) as
                faceapi.WithAge<faceapi.WithGender<{ detection: faceapi.FaceDetection; }>>[]

            // 存在するなら
            if (detectionsWithGenderNet?.length > 0) {
                const user: User = {
                    age: Math.round(detectionsWithGenderNet[0]!.age),
                    gendar: detectionsWithGenderNet[0].gender
                }
                setuser(user)
                fetchRecommend()
            } else { // 存在しないなら
                setuser(undefinedUser)
                setrecommend(undefined)
            }

        }, 5000)
        return () => clearInterval(timer)
    }, [])

    console.log(user);


    return (
        <>
            <motion.div
                {...walletTransition}
                drag
                dragSnapToOrigin
                whileHover={{ scale: 0.9 }}
            >
                <Paper
                    sx={{
                        width: 500,
                        position: "absolute"
                    }}
                >
                    <Webcam
                        style={{
                            width: "100%",
                            borderRadius: 4
                        }}
                        audio={false}
                        ref={webcamRef}
                    />
                    <Typography variant="h5" textAlign="center" color={colors.amber[900]} fontWeight="bold">
                        {
                            user != undefinedUser ?
                                "推定年齢:" + user?.age + ", 性別:" + user?.gendar
                                : "顔をかざしてね"
                        }
                    </Typography>
                </Paper>
            </motion.div>
            {recommend &&
                <Grid container spacing={1}
                    sx={{
                        position: "relative",
                        left: 700,
                        // top: 0,
                        width: 500
                    }}
                >
                    <Grid container item direction="row" spacing={1} >
                        <Grid item xs={6}>
                            <Product proinfo={recommend![0]} cart={cart} />
                        </Grid>
                        <Grid item xs={6}>
                            <Product proinfo={recommend![1]} cart={cart} />
                        </Grid>
                    </Grid>
                    <Grid container item direction="row" spacing={1}>
                        <Grid item xs={6}>
                            <Product proinfo={recommend![2]} cart={cart} />
                        </Grid>
                        <Grid item xs={6}>
                            <Product proinfo={recommend![3]} cart={cart} />
                        </Grid>
                    </Grid>
                    <Typography color={colors.amber[900]} textAlign="center" variant='h4' fontWeight="bold">おすすめ</Typography>
                </Grid>
            }

        </>
    )
}
