import { Box, Grid, Modal, Paper, Button, Typography }  from '@mui/material'
import { Container }            from '@mui/system'
import { BtnSelectPayInfo }     from '../components/1atoms/BtnSelectPayInfo'
import { LinkButton }           from '../components/1atoms/BtnLink'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { SelectElMoney }        from '../components/3organisms/SelectElMoney'
import { SelectQrMoney }        from '../components/3organisms/SelectQrMoney'
import { TypePayInfos }         from '../components/types/TypeProducts'
import { useRouter }            from 'next/router'
import React, { useState }      from 'react'
import useSWR from 'swr'

type Props = { ElProps: any, QrProps: any }

// 決済方法取得
const fetchPayInfos = "/api/fetchPayInfos"
const fetcher = (url: string) => fetch(url).then(response => response.json());

// ===================================================
// 入金確認画面
// ===================================================
export default function SelectPayInfo() {

    // -----------------------------------------------
    // 電子マネー決済選択(モーダル)
    // -----------------------------------------------
    const [mordalEl, setMordalEl] = useState<boolean>(false)
    const OpenMEl = () => setMordalEl(true);                    // 開く
    const CloseMEl = () => setMordalEl(false);                  // 閉じる

    // -----------------------------------------------
    // QRコード決済選択(モーダル)
    // -----------------------------------------------
    const [mordalQr, setMordalQr] = useState<boolean>(false)
    const OpenMQr = () => setMordalQr(true);                    // 開く
    const CloseMQr = () => setMordalQr(false);                  // 閉じる

    // ルーティング
    const router = useRouter()

    // -----------------------------------------------
    // 支払方法情報の取得
    // -----------------------------------------------
    const { data, error } = useSWR<TypePayInfos[]>(fetchPayInfos, fetcher)
    if (error) return <Typography>決済方法表示：エラー発生</Typography>

    return (

        <>
            <HeadInfo title='mopacal | 決済方法選択' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Container sx={{ pt: 8 }}>

                    <Typography variant='h4' color='primary' textAlign='center'  paddingTop={5}>お支払方法を選択してください</Typography>

                    <Grid container textAlign="center" height={700} paddingTop={5} paddingBottom={5} spacing={1}>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="現金" />
                        </Grid>

                        <Grid container item xs={6} direction="column" spacing={1}>
                            <Grid item xs={6}>
                                <BtnSelectPayInfo onClick={OpenMEl} name="電子マネー" />
                            </Grid>
                            <Grid item xs={6}>
                                <BtnSelectPayInfo onClick={OpenMQr} name="QRコード決済" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <LinkButton url='/'>商品一覧に戻る</LinkButton>

                </Container>

                {/* 電子マネー決済選択 */}
                <Modal open={mordalEl} onClose={CloseMEl} >
                    <SelectElMoney />
                </Modal>

                {/* QRコード決済選択 */}
                <Modal open={mordalQr} onClose={CloseMQr} >
                    <SelectQrMoney />
                </Modal>

        </Box>
    </>

  )
}