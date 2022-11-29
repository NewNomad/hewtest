import { Box, Button, Container, Divider, Grid} from '@mui/material'
import { ShowMordal }       from '../1atoms/ShowModal'
import { LinkButton }       from '../1atoms/LinkButton'
// import Link     from 'next/link'
import React    from 'react'

export const SelectElMoney = () => {
    return (
        <ShowMordal >
            <Container>
                <Grid container textAlign="center">
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
                </Grid>
            </Container>
        </ShowMordal>
    )
}