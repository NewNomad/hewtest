import { Box }                  from '@mui/material'
import { Container }            from '@mui/system'
import { TextTitle }            from '../components/1atoms/TextTitle'
import { BtnLink }              from '../components/1atoms/BtnLink'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { useRouter }            from 'next/router'
import { cartState, TypeCart }  from '../components/types/TypeCart'
import { TypeProducts }         from '../components/types/TypeProducts'
import { useRecoilState, useRecoilValue } from 'recoil'
// import useSWR from 'swr'
import axios from "axios"
import { useEffect } from 'react'
import { paymentState, TypePayment } from '../components/types/TypePayment'
// import { TypePayInfos } from '../components/types/TypePayInfos'

const updateStockURL    = "/api/updateStock"
const insertReceiptURL  = "/api/insertReceipt"
// const fetcher = (url: string) => fetch(url).then(response => response.json());

export default function CheckPay() {

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    // -----------------------------------------------
    // 在庫管理
    // -----------------------------------------------
    const updateStock = (products: TypeProducts[]) => {
        let id      = ""            // 商品ID
        let stock   = ""            // 現在の在庫数

        products.map(product => {
            id      = id + product.id + ","                                 // 商品ID
            stock   = stock + (product.stock - product.quantity) + ","      // 現在の在庫数
        })

        id      = id.slice(0, -1)
        stock   = stock.slice(0, -1)

        axios.post(updateStockURL, {
            id: id,
            stock: stock
        }).then((res) => {
            console.log("success to update Stocks");
        }).catch((e) => {
            console.log(e);
        })
    }

    // -----------------------------------------------
    // 購入履歴管理
    // -----------------------------------------------
    const insertReceipt = (cart: TypeCart, paymentInfo: TypePayment) => {
        const { products } = cart
        const { payment, payInfoId } = paymentInfo

        let product_id  = ""        // 商品ID
        let quantity    = ""        // 取引個数
        let pay_value   = ""        // 入金額
        let amount      = ""        // 売値

        products.map(product => {
            product_id  = product_id + product.id + ","                 // 商品ID
            quantity    = quantity + (product.quantity) + ","           // 取引個数
            pay_value   = pay_value + payment + ","                     // 入金額
            amount      = amount + product.price + ","                  // 売値
        })

        product_id  = product_id.slice(0, -1)
        quantity    = quantity.slice(0, -1)
        pay_value   = pay_value.slice(0, -1)
        amount      = amount.slice(0, -1)

        axios.post(insertReceiptURL, {
            product_id: product_id,
            quantity: quantity,
            pay_value: pay_value,
            amount: amount
        }).then((res) => {
            console.log("success to input receipt");
        }).catch((e) => {
            console.log(e);
        })
    }

    const [cart, setCart] = useRecoilState(cartState)
    const [payment, setPaymant] = useRecoilState(paymentState)

    useEffect(() => {
        console.log(cart);

        setCart({ products: [], payInfoId: 0 })
        setPaymant({ payment: 0, payInfoId: 0 })

        updateStock(cart.products)
        insertReceipt(cart, payment)
    }, [])

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