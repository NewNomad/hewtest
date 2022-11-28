import { Box, Button, Container, Grid, Paper } from '@mui/material'
import type { NextPage }  from 'next'
import Head               from 'next/head'
import Image              from 'next/image'
import { type }           from 'os'
import { Header }         from '../components/2molecules/Header'
import { HeadInfo }       from '../components/2molecules/HeadInfo'
import { Cart }           from '../components/3organisms/Cart'
import { Products }       from '../components/3organisms/Products'
import { BgParticle }     from '../components/libs/BgParticle'      // パーティクル
import styles             from '../styles/Home.module.css'          // 書式

const Home: NextPage = () => {

  return (
    <Box>
      <HeadInfo title='mopacal | インデックス' />

      <Box sx={{ flexGrow: 1 }}>
        <Header />

        {/* <Container component="main" sx={{ height: "100vh",mt:10}} >1 */}

        <Grid container direction="column" height="100vh" sx={{ pt: 8 }}>{/* 縦並び */}
            {/* justify:horizon alighitem:vertical */}

            <Grid item xs={12} container spacing={4} padding={4} justifyItems="center"> {/* 横並び */}

                {/* 商品 */}
                <Grid item xs={9}>
                {/* <Paper elevation={10} sx={{bgcolor:"#fff"}}> */}
                    <Products />
                {/* </Paper> */}
                </Grid>

                {/* カート */}
                <Grid item xs={3}>
                    <Cart />
                </Grid>

            </Grid>

            {/* <Grid item xs={1}>案内</Grid> */}

        </Grid>

        {/* </Container> */}

      </Box>

    </Box>
  )
}

export default Home
