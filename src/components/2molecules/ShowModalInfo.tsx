import { Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { ShowMordal } from '../1atoms/ShowModal'
import React from 'react'

export const ShowModalInfo = () => {
    return (
        <ShowMordal>
            <Grid container direction="column" spacing={0}>
                {/* 上 */}
                <Grid container item xs={8}>
                    <Grid item xs={4}>
                        <Image src="/fanta.png" height={1800} width={800} objectFit="contain"></Image>
                    </Grid>
                    <Grid item xs={8}>
                        <Container>
                            <Typography variant='h1' >ファンタ</Typography>
                            <Typography variant='h2'>120円</Typography>
                            <Typography color="blue" variant='h4'>#甘い</Typography>
                            <Typography color="blue" variant='h4'>#炭酸</Typography>
                            <Typography>アレルギー表示</Typography>
                            <Typography>なし</Typography>

                        </Container>
                    </Grid>

                </Grid>
                {/* した */}
                <Grid container item xs={4} paddingTop={2} sx={{ width: "100%" }} textAlign="center">

                    <Grid item xs={8}>

                        カート：2個
                        <Button>-</Button>
                        1
                        <Button>+</Button>

                    </Grid>
                    <Grid item xs={4}>
                        <Button color='primary' variant="contained" >カートに追加</Button>
                    </Grid>
                </Grid>
            </Grid>
        </ShowMordal>
    )
}
