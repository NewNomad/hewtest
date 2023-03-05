import { Box, Button, Modal, Paper, Typography } from '@mui/material'
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
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { backgroundState, TypeBackground } from '../components/types/TypeBackground'
import { ShowModal } from '../components/1atoms/ShowModal'
import Webcam from 'react-webcam'
import { motion } from "framer-motion"
import html2canvas from 'html2canvas'
import { css } from '@emotion/react'

// DB操作系
const insertReceiptURL = "/api/insertReceipt"

export default function CheckPay() {

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------

    //5秒後に商品一覧画面へ
    const router = useRouter()
    // useEffect(() => {
    //     setTimeout(() => {
    //         homejump()
    //         // }, 8000);
    //     }, 60000);
    // }, [])
    // const homejump = () => {
    //     router.push("/")
    // }

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

    let total = useRecoilValue(totalPriceSelector)
    total = Math.min(100000, total)
    const picture = ""
    const [modal, setmodal] = useState<boolean>(false)
    const webcamRef = useRef<Webcam>(null)


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

    // 撮影ボタン
    const handlePicture = () => {
        console.log(1);

        const target = document.getElementById("webcam") as HTMLElement
        html2canvas(target, {
            scale: 2
        }).then(canvas => {
            const targetImgUri = canvas.toDataURL("img/jpeg")
            fetch('/api/save-canvas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ targetImgUri })
            });
        })
    }

    return (
        <>
            <HeadInfo title='mopacal | 入金完了' />

            <Box sx={{ flexGrow: 1 }} >
                <Header />

                <Container sx={{ pt: 8 }} >
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
                    }}
                    >
                        <img
                            src={"/movemopa.gif"}
                            height={500}
                            width={500}
                            style={{
                                objectFit: "contain"
                            }}
                            // objectFit="contain"
                            alt="logo"
                            onClick={() => router.push("/")}
                        />
                    </Box>

                    {/* <BtnLink onClick={() => router.push("/")}>時間経過(未実装)で商品一覧に戻ります</BtnLink> */}
                    <Button variant="contained" sx={{ alignSelf: "center" }} size="large"
                        onClick={() => setmodal(true)}
                    >記念撮影する！！</Button>
                    <Modal open={modal} onClose={() => setmodal(false)}>
                        <ShowModal closeModal={() => setmodal(false)}>
                            <Box
                                id='webcam'
                            >
                                <Webcam
                                    style={{
                                        width: 820,
                                        borderRadius: 4
                                    }}
                                    audio={false}
                                    ref={webcamRef}
                                />
                                <motion.div
                                    drag
                                    style={{
                                        position: "absolute",
                                        bottom: 200
                                    }}
                                // dragConstraints={{
                                //     top: 800,
                                //     left: 0,
                                //     right: 0,
                                //     bottom: 0
                                // }}
                                >
                                    <Image
                                        src={"/mopaLR.png"}
                                        width={200}
                                        height={204}
                                        draggable={false}
                                        className='container'

                                    />
                                </motion.div>
                                {/* <motion.div
                                    drag
                                    style={{
                                        position: "absolute",
                                        bottom: 200,
                                        left: 200,
                                    }}
                                > */}
                                    <Image
                                        src={"/paca.png"}
                                        width={200}
                                        height={204}
                                        draggable={false}
                                        className='container'
                                        style={{
                                            position:"absolute",
                                            top:100
                                        }}
                                    />
                                {/* </motion.div> */}
                            </Box>
                            <Button
                                variant="contained" size='large' sx={{
                                    marginLeft: 45
                                }}
                                onClick={handlePicture}
                            >撮影</Button>

                            <Typography>※しばらくはみんなに見られます</Typography>
                        </ShowModal>
                    </Modal>
                </Container>

            </Box >

        </>
    )
}

