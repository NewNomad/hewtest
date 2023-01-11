import { Box, Button, Container, Grid, Paper } from '@mui/material'
import { BtnLink } from '../components/1atoms/BtnLink'
import { Header } from '../components/2molecules/Header'
import { HeadInfo } from '../components/2molecules/HeadInfo'
// import { Cart } from '../components/3organisms/Cart'
const Cart = dynamic(() => import("../components/3organisms/Cart"), { ssr: false })
import { Products } from '../components/3organisms/Products'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { BgParticle } from '../components/libs/BgParticle'      // パーティクル
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// ---------------------------------------------------
// 定数
// ---------------------------------------------------
const mapUrl: string = "/ShowAdvertisment"

// ===================================================
// 商品一覧画面
// ===================================================
const Home: NextPage = () => {

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    //30秒経過で広告画面へ
    // useEffect(() => {
    //     setTimeout(() => {
    //         homejump()
    //     }, 30000);
    // }, [])
    const homejump = () => {
        router.push("/ShowAdvertisment")
    }

    return (
        <Box>
            <HeadInfo title='mopacal | インデックス' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap />

                {/* <Container component="main" sx={{ height: "100vh",mt:10}} >1 */}

                <Grid container direction="column" height="100vh" sx={{ pt: 8 }}>{/* 縦並び */}
                    {/* justify:horizon alighitem:vertical */}

                    <Grid item xs={12} container spacing={2} padding={2} justifyItems="center"> {/* 横並び */}

                        {/* 商品 */}
                        <Grid item xs={9}>
                            {/* <Paper elevation={10} sx={{bgcolor:"#fff"}}> */}
                            <Products />
                            {/* </Paper> */}
                        </Grid>

                        {/* カート */}
                        <Grid item xs={3}>
                            <Cart />
                        </Grid>

                    </Grid>

                    {/* <Grid item xs={1}>案内</Grid> */}

                </Grid>

                {/* </Container> */}
                {/* <BtnLink onClick={() => router.push(mapUrl)}>一定時間未操作(未実装)で広告表示に移ります</BtnLink> */}

            </Box>

        </Box>
    )
}

export default Home
