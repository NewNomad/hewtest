import { Box, Grid, Modal }     from '@mui/material'
import { Container }            from '@mui/system'
import { TextTitle }            from '../components/1atoms/TextTitle'
import { BtnLink }              from '../components/1atoms/BtnLink'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { ModalPayType }         from '../components/3organisms/ModalPayType'
import { TypePayInfos }         from '../components/types/TypePayInfos'
import { paymentState }         from '../components/types/TypePayment'
import { useRouter }            from 'next/router'
import { useRecoilState }       from 'recoil'
import React, { useState }      from 'react'
import useSWR from 'swr'

type Props = { ElProps: any, QrProps: any }

// ---------------------------------------------------
// 定数
// ---------------------------------------------------
const payTypeCoins: number = 1
const nextUrl: string = "/CheckPay"                 // 決済確認画面
const backUrl: string = "/"                         // 商品一覧画面
const fetchPayInfos = "/api/fetchPayInfos"          // 決済方法一覧取得

const fetcher = (url: string) => fetch(url).then(response => response.json());

// ===================================================
// 入金確認画面
// ===================================================
export default function SelectPayInfo() {

    // -----------------------------------------------
    // 電子マネー決済選択(モーダル)
    // -----------------------------------------------
    const [mordalEl, setMordalEl] = useState<boolean>(false)
    const OpenMEl = () => setMordalEl(true)                     // 開く
    const CloseMEl = () => setMordalEl(false)                   // 閉じる

    // -----------------------------------------------
    // QRコード決済選択(モーダル)
    // -----------------------------------------------
    const [mordalQr, setMordalQr] = useState<boolean>(false)
    const OpenMQr = () => setMordalQr(true)                     // 開く
    const CloseMQr = () => setMordalQr(false)                   // 閉じる

    // -----------------------------------------------
    // 決済方法選択
    // -----------------------------------------------
    const [pay, setPay] = useRecoilState(paymentState)
    const getPayInfoId = ( id:number, type:number ) => {
        setPay({ payment: 0, payInfoId: id, payInfoType:type });
        router.push(nextUrl)
    }

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    // -----------------------------------------------
    // 支払方法情報の取得
    // -----------------------------------------------
    const { data, error } = useSWR<TypePayInfos[]>(fetchPayInfos, fetcher)
    if (error) return <TextTitle>決済方法表示：エラー発生</TextTitle>
    if (data == undefined) return <TextTitle>決済方法表示：データがありません</TextTitle>

    return (

        <>
            <HeadInfo title='mopacal | 決済方法選択' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Container sx={{ pt: 8 }}>

                    <TextTitle primary>お支払方法を選択してください</TextTitle>

                    <Grid container textAlign="center" height={700} paddingBottom={5} spacing={1}>
                        <Grid item xs={6}>
                            <BtnLink onClick={ () => getPayInfoId(data[0].pay_info_id, data[0].pay_info_type) } primary>
                                {data[0].pay_info_type == payTypeCoins ? data[0].pay_info_name : '設定エラー'}
                            </BtnLink>
                        </Grid>

                        <Grid container item xs={6} direction="column" spacing={1}>
                            <Grid item xs={6}>
                                <BtnLink onClick={OpenMEl} primary>電子マネー</BtnLink>
                            </Grid>
                            <Grid item xs={6}>
                                <BtnLink onClick={OpenMQr} primary>QRコード決済</BtnLink>
                            </Grid>
                        </Grid>
                    </Grid>

                    <BtnLink onClick={() => router.push(backUrl)}>商品一覧に戻る</BtnLink>

                </Container>

                {/* 電子マネー決済選択 */}
                <Modal open={mordalEl} onClose={CloseMEl} >
                    <ModalPayType payType='El' nextUrl={ nextUrl } closeModal={ CloseMEl }>{ data }</ModalPayType>
                </Modal>

                {/* QRコード決済選択 */}
                <Modal open={mordalQr} onClose={CloseMQr} >
                    <ModalPayType payType='QR' nextUrl={ nextUrl } closeModal={ CloseMQr }>{ data }</ModalPayType>
                </Modal>

            </Box>
        </>

    )
}