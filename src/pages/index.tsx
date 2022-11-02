import { Box, Button, Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { type } from 'os'
import { Header } from '../components/2molecules/Header'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <Box>
      <HeadInfo title='インデックス' />
      <Box sx={{ flexGrow: 1 }} bgcolor="#ccc">
        <Header></Header>

        <Container component="main" >

        </Container>
      </Box>
    </Box>
  )
}

export default Home
