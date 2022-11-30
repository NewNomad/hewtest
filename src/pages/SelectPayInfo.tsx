import { Box, Grid, Modal, Paper, Button, Typography }  from '@mui/material'
import { Container }            from '@mui/system'
import { BtnSelectPayInfo }     from '../components/1atoms/BtnSelectPayInfo'
import { LinkButton }              from '../components/1atoms/BtnLink'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { SelectElMoney }        from '../components/3organisms/SelectElMoney'
import { SelectQrMoney }        from '../components/3organisms/SelectQrMoney'
import { useRouter }            from 'next/router'
import React, { useState }      from 'react'

type Props = { ElProps: any, QrProps: any }

// ===================================================
// 入金確認画面
// ===================================================
export default function SelectPayInfo() {

  const [mordalEl, setMordalEl] = useState<boolean>(false)    // 電子マネー決済選択(モーダル)
  const [mordalQr, setMordalQr] = useState<boolean>(false)    // QRコード決済選択(モーダル)

  const OpenMEl = () => setMordalEl(true);                    // 電子マネー決済選択(モーダル)開く
  const CloseMEl = () => setMordalEl(false);                  // 電子マネー決済選択(モーダル)閉じる

  const OpenMQr = () => setMordalQr(true);                    // QRコード決済選択(モーダル)開く
  const CloseMQr = () => setMordalQr(false);                  // QRコード決済選択(モーダル)閉じる

  const router = useRouter()

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

                <LinkButton btnName='商品一覧に戻る' url='/' />
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