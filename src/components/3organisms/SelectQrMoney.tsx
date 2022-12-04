import { Container, Grid }  from '@mui/material'
import { BtnSelectPayInfo } from '../1atoms/BtnSelectPayInfo'
import { ShowMordal }       from '../1atoms/ShowModal'
import { TextTitle }        from '../1atoms/TextTitle'
import { useRouter } from 'next/router'
// import Link from 'next/link'
import React from 'react'

// ==================================================
// QRコード選択画面
// ==================================================
export const SelectQrMoney = () => {

    const router = useRouter()

    return (
        <ShowMordal>
            <Container>

                <TextTitle>お支払い方法の選択</TextTitle>

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