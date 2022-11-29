import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BtnSelectPayInfo } from '../1atoms/BtnSelectPayInfo'
import { ShowMordal } from '../1atoms/ShowModal'

export const SelectQrMoney = () => {
    const router = useRouter()

    return (
        <ShowMordal >
            <Divider />
            <Container>
                {/* <Grid container textAlign="center">
                        <Link href="src\pages\CheckPay.tsx">
                            <Button variant='contained' color='primary'>1</Button>
                        </Link>
                        <Link href="src\pages\CheckPay.tsx">
                            <Button variant='contained' color='primary'>2</Button>
                        </Link>
                        <Link href="src\pages\CheckPay.tsx">
                            <Button variant='contained' color='primary'>3</Button>
                        </Link>
                        <Link href="src\pages\CheckPay.tsx">
                            <Button variant='contained' color='primary'>4</Button>
                        </Link>
                        <Link href="src\pages\CheckPay.tsx">
                            <Button variant='contained' color='primary'>5</Button>
                        </Link>
                        <Link href="src\pages\CheckPay.tsx">
                            <Button variant='contained' color='primary'>6</Button>
                        </Link>
                        <Link href="src\pages\CheckPay.tsx">
                            <Button variant='contained' color='primary'>7</Button>
                        </Link>
                    </Grid> */}

                <Typography textAlign="center" variant='h3'>お支払い方法の選択</Typography>
                <Grid container textAlign="center" spacing={1} height={500} width={1000} paddingTop={3}>
                    <Grid container item xs={4} direction="column" spacing={1}>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="Paypay" />
                        </Grid>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="LinePay" />
                        </Grid>

                    </Grid>
                    <Grid container item xs={4} direction="column" spacing={1}>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="d払い" />
                        </Grid>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="auPAY" />
                        </Grid>

                    </Grid>
                    <Grid container item xs={4} direction="column"  spacing={1}>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="PAY" />
                        </Grid>
                        <Grid item xs={6}>
                            <BtnSelectPayInfo onClick={() => router.push("/CheckPay")} name="?" />
                        </Grid>

                    </Grid>
                </Grid>

            </Container>
        </ShowMordal>
    )
}