import { Box, Divider, List, ListItem, Modal, Paper, Button } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import Link from 'next/link'
import { Header } from '../components/2molecules/Header'
import { ShowMordal } from '../components/1atoms/ShowModal'


type Props = { OpenMEl: () => void }
type Props = { OpenMQr: () => void }

export const SelectPayInfo = () => {

  const [mordalEl, setmordalEl] = useState<boolean>(false) // 購入確認画面
  const [mordalQr, setmordalQr] = useState<boolean>(false) // 購入確認画面

  const OpenMEl = () => setmordalEl(true); // 商品詳細画面の切り替え
  const CloseMEl = () => setmordalEl(false); // 商品詳細画面の切り替え

  const OpenMQr = () => setmordalQr(true); // 商品詳細画面の切り替え
  const CloseMQr = () => setmordalQr(false); // 商品詳細画面の切り替え

  return (
    <div>
      <Header></Header>

      <Link href="src\pages\CheckPay.tsx">
        <Button variant='contained' color='primary'>現金</Button>
      </Link>

      <Button variant='contained' color='secondary' onClick={OpenMEl}>電子マネー</Button>
      <Button variant='contained' color='secondary' onClick={OpenMQr}>QRコード</Button>

      <Modal open={mordalEl} onClose={CloseMEl} >
        <ShowModalEl></ShowModalEl>
      </Modal>
      <Modal open={mordalEl} onClose={CloseMQr} >
        <ShowModalQr></ShowModalQr>
      </Modal>
    </div>
  )
}