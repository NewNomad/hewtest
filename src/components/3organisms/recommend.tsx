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

const fetchProduct = "/api/fetchProducts"
const fetcher = (url: string) => fetch(url).then(response => response.json());


export const Recommend = () => {
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

    useEffect(() => {
        const timer = setInterval(async () => {
            const detectionsWithGenderNet = await faceDetectHandler()
            console.log(detectionsWithGenderNet);
        }, 1000)
        return () => clearInterval(timer)
    }, [])



    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
            />
        </>
    )
}
