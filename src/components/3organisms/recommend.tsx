import { LocalDrink, RecommendOutlined } from '@mui/icons-material'
import { Button, CircularProgress, Container, Grid, Modal, Paper, Tab, Tabs, Typography } from '@mui/material'
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

export const Recommend = () => {
    const [user, setuser] = useState<User>(undefinedUser)


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
        const result = await (await fetch(`api/pythonAI?age=${age}&gender=${gender}&temp=${temp}&humidity=${humidity}`)).json()
        console.log(result);

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
            }

        }, 5000)
        return () => clearInterval(timer)
    }, [])

    console.log(user);


    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
            />
            <Typography>
                {user?.age + user?.gendar}
            </Typography>
        </>
    )
}
