import { Box, Typography, Paper, Button, Grid, Backdrop } from '@mui/material'
import { TextTitle }    from '../components/1atoms/TextTitle'
import { BtnLink }      from '../components/1atoms/BtnLink'
import { HeadInfo }     from '../components/2molecules/HeadInfo'
import { Header }       from '../components/2molecules/Header'
import { useRouter }    from 'next/router'
import { cartState } from '../components/types/TypeCart'
import useSWR from 'swr'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

const updateStock = "/api/updateStock"
const fetcher = (url: string) => fetch(url).then(response => response.json());

export default function CheckPay() {

    // const { data, error } = useSWR(updateStock, fetcher);

    // if (!data) return (<Backdrop
    //     sx={{
    //         color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1
    //     }}
    //     open={true}></Backdrop>)
    // if (error) return ("エラーです")

    // const [cart, setCart] = useRecoilState(cartState)

    // useEffect(() => {
    //     setCart({
    //         products: []
    //     })
    // }, [])

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    return (
        <>
            <HeadInfo title='mopacal | 入金完了' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Box textAlign="center" sx={{ margin: 5, padding: 10, pt: 8 }}>
                    <TextTitle primary>ありがとうございました！</TextTitle>

                    <Box sx={{ width: '100%', height: 600, padding: 10, backgroundColor: 'primary.main' }}>
                        [ここに画像]
                    </Box>

                    <BtnLink onClick={() => router.push("/")}>タップ/時間経過(未実装)で商品一覧に戻ります</BtnLink>

                </Box>

            </Box>

        </>
    )
}