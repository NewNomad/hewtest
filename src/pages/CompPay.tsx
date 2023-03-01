import { Box } from '@mui/material'
import { Container } from '@mui/system'
import { TextTitle } from '../components/1atoms/TextTitle'
import { BtnLink } from '../components/1atoms/BtnLink'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import { Header } from '../components/2molecules/Header'
import { cartState, totalPriceSelector, TypeCart } from '../components/types/TypeCart'
import { paymentState, TypePayment } from '../components/types/TypePayment'
import { TypeMarketingData, marketingDataState } from '../components/types/TypeMarketingData'
import { useRouter } from 'next/router'
import { useRecoilState, useRecoilValue } from 'recoil'
import axios from "axios"
import { useEffect } from 'react'
import Image from 'next/image'
import { backgroundState, TypeBackground } from '../components/types/TypeBackground'

// DB操作系
const insertReceiptURL = "/api/insertReceipt"

export default function CheckPay() {

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------

    //5秒後に商品一覧画面へ
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            homejump()
        }, 8000);
    }, [])
    const homejump = () => {
        router.push("/")
    }

    // -----------------------------------------------
    // 購入履歴管理
    // -----------------------------------------------
    const insertReceipt = (cart: TypeCart, paymentInfo: TypePayment, marketingData: TypeMarketingData) => {
        const { products } = cart
        const { payment, payInfo } = paymentInfo

        axios.post(insertReceiptURL, {
            products: products,
            payment: payment,
            payInfo: payInfo.id,
            marketing: marketingData
        }).then((res) => {
            console.log(`【登録成功】`);
        }).catch((e) => {
            console.log(`【登録失敗】${e}`);
        })
    }

    const [cart, setCart] = useRecoilState(cartState)
    const [payment, setPaymant] = useRecoilState(paymentState)
    const [marketingData, setMarketingData] = useRecoilState(marketingDataState)
    const [background, setBackground] = useRecoilState(backgroundState)

    const total = useRecoilValue(totalPriceSelector)
    const picture = ""

    useEffect(() => {
        insertReceipt(cart, payment, marketingData)

        // backgroundにお金たす
        const setbackground: TypeBackground = {
            money: total,
            pictures: [...background.pictures, picture]
        }
        setBackground(setbackground)

        // 初期化
        setCart({ products: [] })
        setPaymant({ payment: 0, payInfo: { id: 0, name: "", type: 0, image: "" } })
        setMarketingData({ customerId: 1, temperature: "", humidity: "", getDataDt: "" })


    }, [])

    return (
        <>
            <HeadInfo title='mopacal | 入金完了' />

            <Box sx={{ flexGrow: 1 }} onClick={() => router.push("/")}>
                <Header />

                <Container sx={{ pt: 8 }}>
                    <TextTitle primary>ありがとうございました！</TextTitle>

                    <Box sx={{
                        width: '100%',
                        height: 600,
                        padding: 10,
                        margin: 'auto',
                        backgroundColor: 'rgba(0,0,0,0)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            src={"/movemopa.gif"}
                            height={500}
                            width={500}
                            objectFit="contain"
                            alt="logo" />
                    </Box>

                    {/* <BtnLink onClick={() => router.push("/")}>時間経過(未実装)で商品一覧に戻ります</BtnLink> */}

                </Container>

            </Box>

        </>
    )
}