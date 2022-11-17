import React from 'react'
import { Box, Button, Container, Grid, Paper } from '@mui/material'
import { Header } from '../components/2molecules/Header'
import { PayInfo } from '../components/3organisms/PayInfo'
import { BackButton } from '../components/1atoms/Backbutton'

export const SelectPayInfo = () => {
  return (
    <div>
      <Header />

      お支払方法の選択
      <PayInfo />
      <BackButton />


    </div>
  )
}
