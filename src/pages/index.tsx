import { Box, Button, Grid }    from '@mui/material'
import { BtnLink }              from '../components/1atoms/BtnLink'
import { Header }               from '../components/2molecules/Header'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Products }             from '../components/3organisms/Products'
// import { Cart } from '../components/3organisms/Cart'
const Cart = dynamic(() => import("../components/3organisms/Cart"), { ssr: false })
import { ThreeBackground }      from '../components/3organisms/ThreeBackground'
import { marketingDataState }   from '../components/types/TypeMarketingData'
import type { NextPage }        from 'next'
import { useRouter }            from 'next/router'
import dynamic                  from 'next/dynamic'
import { useRecoilState }       from 'recoil'
import React, { useEffect }     from 'react'
import { motion }               from 'framer-motion'
import { fadeIn, fadeInPopup, indexTransition, walletTransition } from '../animation/animation'

// ---------------------------------------------------
// 定数
// ---------------------------------------------------
const mapUrl: string = "/ShowAdvertisment"

function compDigit(value:number, digit:number){ return ("00"+ value).slice( digit * -1 ) }

// ===================================================
// 商品一覧画面
// ===================================================
const Home: NextPage = () => {

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    // -----------------------------------------------
    //30秒経過で広告画面へ
    // -----------------------------------------------
    // useEffect(() => {
    //     setTimeout(() => {
    //         homejump()
    //     }, 30000);
    // }, [])
    const homejump = () => {
        router.push("/ShowAdvertisment")
    }

    const [marketingData, setMarketingData] = useRecoilState(marketingDataState)

    useEffect(() => {
        const date      = new Date()
        const year      = date.getFullYear().toString()
        const month     = compDigit((date.getMonth() + 1), 2).toString()
        const day       = compDigit(date.getDate(), 2).toString()
        const hour      = compDigit(date.getHours() , 2).toString()
        const min       = compDigit(date.getMinutes(), 2).toString()
        const sec       = compDigit(date.getSeconds(), 2).toString()
        const startTime = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec

        setMarketingData({ 
            customerId: 1, 
            temperature: marketingData.temperature, 
            humidity: marketingData.humidity, 
            getDataDt: startTime } );
        console.log(`【取得】顧客:1/開始時間:${startTime}`)
    },[])

    return (
        <Box>
                <ThreeBackground />
            <motion.div
                {...indexTransition}
            >
                <HeadInfo title='mopacal | インデックス' />
                <Box sx={{ flexGrow: 1 }}>
                    <motion.div
                    >
                        <Header onMap />
                    </motion.div>
                    {/* <Container component="main" sx={{ height: "100vh",mt:10}} >1 */}

                    <Grid container direction="column" height="100vh" sx={{ pt: 10 }}>{/* 縦並び */}
                        {/* justify:horizon alighitem:vertical */}

                        <Grid item xs={12} container spacing={2} padding={2} justifyItems="center"> {/* 横並び */}

                            {/* 商品 */}
                            <Grid item xs={9}>
                                {/* <Paper elevation={10} sx={{bgcolor:"#fff"}}> */}
                                <motion.div
                                    {...walletTransition}
                                >
                                    <Products />
                                </motion.div>
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
            </motion.div>
        </Box>
    )
}

export default Home
