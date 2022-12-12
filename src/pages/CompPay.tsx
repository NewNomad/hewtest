import { Box }                          from '@mui/material'
import { Container }                    from '@mui/system'
import { TextTitle }                    from '../components/1atoms/TextTitle'
import { BtnLink }                      from '../components/1atoms/BtnLink'
import { HeadInfo }                     from '../components/2molecules/HeadInfo'
import { Header }                       from '../components/2molecules/Header'
import { cartState, TypeCart }          from '../components/types/TypeCart'
import { paymentState, TypePayment }    from '../components/types/TypePayment'
import { useRouter }        from 'next/router'
import { useRecoilState }   from 'recoil'
import axios from "axios"
// import useSWR from 'swr'
import { useEffect } from 'react'

// DB操作系
const insertReceiptURL  = "/api/insertReceipt"

export default function CheckPay() {

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    // -----------------------------------------------
    // 購入履歴管理
    // -----------------------------------------------
    const insertReceipt = (cart: TypeCart, paymentInfo: TypePayment) => {
        const { products } = cart
        const { payment, payInfoId } = paymentInfo

        axios.post(insertReceiptURL, {
            products: products,
            payment: payment,
            payInfoId: payInfoId,
        }).then((res) => {
            console.log("success to input receipt");
        }).catch((e) => {
            console.log(e);
        })
    }

    const [cart, setCart]       = useRecoilState(cartState)
    const [payment, setPaymant] = useRecoilState(paymentState)

    useEffect(() => {
        // 初期化
        setCart({ products: [], payInfoId: 0 })
        setPaymant({ payment: 0, payInfoId: 0 })

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