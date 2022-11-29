import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import { ShowMordal } from '../1atoms/ShowModal'
import { LinkButton } from '../1atoms/LinkButton'
// import Link     from 'next/link'
import React from 'react'
import { BtnSelectPayInfo } from '../1atoms/BtnSelectPayInfo'
import { useRouter } from 'next/router'

export const SelectElMoney = () => {
    const router = useRouter()

    return (
        <ShowMordal >
            <Container>
                {/* <Grid container textAlign="center">
                    <Grid item xs={3}>
                        <LinkButton btnName={'交通系電子マネー'} url={'/CheckPay'} primary />
                    </Grid>
                    <Grid item xs={3}>
                        <LinkButton btnName={'WAON'} url={'/CheckPay'} primary />
                    </Grid>
                    <Grid item xs={3}>
                        <LinkButton btnName={'ID'} url={'/CheckPay'} primary />
                    </Grid>
                    <Grid item xs={3}>
                        <LinkButton btnName={'QUICPay'} url={'/CheckPay'} primary />
                    </Grid>
                    <Grid item xs={3}>
                        <LinkButton btnName={'楽天Edy'} url={'/CheckPay'} primary />
                    </Grid>
                </Grid> */}
                <Typography textAlign="center" variant='h3'>お支払い方法の選択</Typography>
                <Grid container textAlign="center" spacing={1} height={500} width={1000} paddingTop={3}>
                    <Grid container item xs={4} direction="column" spacing={1}>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="WAON" />
                        </Grid>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="ID" />
                        </Grid>

                    </Grid>
                    <Grid container item xs={4} direction="column" spacing={1}>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="QUICPay" />
                        </Grid>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="楽天Edy" />
                        </Grid>

                    </Grid>
                    <Grid container item xs={4} direction="column" >
                        <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="交通系電子マネー" />


                    </Grid>
                </Grid>

            </Container>
        </ShowMordal >
    )
}