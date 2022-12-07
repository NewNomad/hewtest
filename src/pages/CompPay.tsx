import { Box, Backdrop } from '@mui/material'
import { Container } from '@mui/system'
import { TextTitle } from '../components/1atoms/TextTitle'
import { BtnLink } from '../components/1atoms/BtnLink'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import { Header } from '../components/2molecules/Header'
import { useRouter } from 'next/router'
import { cartState } from '../components/types/TypeCart'
import useSWR from 'swr'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useEffect } from 'react'
import axios from "axios"
import { TypeProducts } from '../components/types/TypeProducts'

const updateStockURL = "/api/updateStock"
const fetcher = (url: string) => fetch(url).then(response => response.json());

export default function CheckPay() {

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    // ↓：一旦コメントアウトしています
    // const { data, error } = useSWR(updateStock, fetcher);

    // if (!data) return (<Backdrop
    //     sx={{
    //         color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1
    //     }}
    //     open={true}></Backdrop>)
    // if (error) return ("エラーです")

    const updateStock = (products: TypeProducts[]) => {
        let id = ""
        let stock = ""
        products.map(product => {
            id = id + product.id + ","
            stock = stock + (product.stock - product.quantity) + ","
        })
        id = id.slice(0, -1)
        stock = stock.slice(0, -1)


        axios.post(updateStockURL, {
            id: id,
            stock: stock
        }).then((res) => {
            console.log("success to update Stocks");

        }).catch((e) => {
            console.log(e);
        })
    }



    const [cart, setCart] = useRecoilState(cartState)

    useEffect(() => {
        setCart({
            products: []
        })
        updateStock(cart.products)
    }, [])

    // -----------------------------------------------
    // 在庫管理
    // -----------------------------------------------
    const { data, error } = useSWR(updateStock, fetcher);

    if (!data) return (<Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true} />)
    if (error) return ("エラーです")

    return (
        <>
            <HeadInfo title='mopacal | 入金完了' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Container sx={{ pt: 8 }}>
                    <TextTitle primary>ありがとうございました！</TextTitle>

                    <Box sx={{ width: '100%', height: 600, padding: 10, backgroundColor: 'primary.main' }}>
                        [ここに画像]
                    </Box>

                    <BtnLink onClick={() => router.push("/")}>タップ/時間経過(未実装)で商品一覧に戻ります</BtnLink>

                </Container>

            </Box>

        </>
    )
}