import { Box, Button, Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { type } from 'os'
import { Header } from '../components/2molecules/Header'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import { Products } from '../components/3organisms/Products'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <Box>
      <HeadInfo title='インデックス' />
      <Box sx={{ flexGrow: 1 }} bgcolor="#ccc">
        <Header></Header>

        {/* <Container component="main" sx={{ height: "100vh",mt:10}} >1 */}

        <Grid container direction="column" sx={{ height: "100vh", pt: 8 }}>{/* 縦並び */}
          {/* justify:horizon alighitem:vertical */}
          <Grid item xs={11}>
            <Grid container spacing={0} justifyItems="center"> {/* 横並び */}

              <Grid item xs={9}>
                <Products></Products>
              </Grid>
              <Grid item xs={3}>
                cart
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            案内
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
    </Box>
  )
}

export default Home
