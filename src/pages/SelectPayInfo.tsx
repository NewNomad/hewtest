import { Box, Grid, Modal, Paper, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { LinkButton } from '../components/1atoms/LinkButton'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import { Header } from '../components/2molecules/Header'
import { SelectElMoney } from '../components/3organisms/SelectElMoney'
import { SelectQrMoney } from '../components/3organisms/SelectQrMoney'
import { type } from 'os'
import Link from 'next/link'
import React, { useState } from 'react'
import { BtnSelectPayInfo } from '../components/1atoms/BtnSelectPayInfo'
import { useRouter } from 'next/router'

type Props = { ElProps: any, QrProps: any }

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
        {/* <Box sx={{ pt: 8 }}>
          <Paper sx={{ margin: 5, padding: 10 }}>
            <Typography variant='h4' color='primary' textAlign='center'>お支払方法を選択してください</Typography>
            <Grid container textAlign='center'>
              <Grid item xs={3}>
                <LinkButton btnName={'現金'} url={'/CheckPay'} primary />
              </Grid>
              <Grid item xs={3}>
                <Button variant='contained' color='secondary' onClick={OpenMEl}>電子マネー</Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant='contained' color='secondary' onClick={OpenMQr}>QRコード</Button>
              </Grid>
            </Grid>



            {/* 電子マネー決済選択 */}
        {/* <Modal open={mordalEl} onClose={CloseMEl} >
              <SelectElMoney />
            </Modal> */}

        {/* QRコード決済選択 */}
        {/* <Modal open={mordalQr} onClose={CloseMQr} >
              <SelectQrMoney />
            </Modal>
          </Paper> */}
        {/* </Box> */}


        {/* 中尾案 */}

        <Container sx={{ pt: 8 }}>
          <Grid container textAlign="center" height={800} paddingTop={15} spacing={1}>
            <Grid item xs={6}>
              <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="現金"></BtnSelectPayInfo>
            </Grid>
            <Grid container item xs={6} direction="column" spacing={1}>
              <Grid item xs={6}>
                <BtnSelectPayInfo onClick={OpenMEl} name="電子マネー"></BtnSelectPayInfo>
              </Grid>
              <Grid item xs={6}>
                <BtnSelectPayInfo onClick={OpenMQr} name="QRコード決済"></BtnSelectPayInfo>
              </Grid>
            </Grid>
          </Grid>
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