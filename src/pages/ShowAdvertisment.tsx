import { Box, Typography, Button, Grid } from '@mui/material'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { BtnLink }              from '../components/1atoms/BtnLink'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function ShowAdvertisment() {

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()
    // useEffect(() => {
    //     setTimeout(() => {
    //         homejump()
    //     }, 3000);
    // }, [])
    // const homejump=()=>{
    //     router.push("/")
    // }

    return (
        <>
            <HeadInfo title='mopacal | 広告' />

            <Box sx={{ flexGrow: 1 }} onClick={() => router.push("/")}>
                <Header onMap/>

                <Box sx={{ pt: 9 }}>
                    <Box sx={{ width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 1.0 }}>
                        {/* <Typography>広告表示</Typography> */}
                        <React.StrictMode>
                            <video loop autoPlay muted width="100%" height="100%">
                                <source src="CM.mp4" type="video/mp4" />
                                <p>Your browser doesn&apos;t support HTML5 video.</p>
                            </video>
                        </React.StrictMode>
                    </Box>
                </Box>

                <BtnLink onClick={() => router.push("/")}>商品一覧表示に戻ります</BtnLink>

            </Box>

        </>
    )
}