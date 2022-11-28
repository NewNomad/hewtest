import { Box, Button, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ShowMordal } from '../1atoms/ShowModal'

export const SelectElMoney = () => {
    return (
        <ShowMordal >
            <Divider />
            <Container>
                <Grid container textAlign="center">
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
                    </Grid>
            </Container>
        </ShowMordal>
    )
}