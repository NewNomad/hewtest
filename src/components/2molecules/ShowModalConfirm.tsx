import { Box, Button, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { ShowMordal }           from '../1atoms/ShowModal'
import { ModalConfirmProduct }  from '../1atoms/ModalConfirmProduct'
import Link from 'next/link'
import React from 'react'

export const ShowModalConfirm = () => {
    return (
        <ShowMordal >
            <Box height={530} sx={{position: "flex", overflow: "scroll", overflowY: "scroll", padding: 3}}>
                <ModalConfirmProduct />
                <ModalConfirmProduct />
                <ModalConfirmProduct />
            </Box>

            {/* 仕切り線 */}
            <Divider />

            <Container>
                <Typography textAlign="right">合計1100円</Typography>
                <Typography textAlign="center" variant='h5' color="red">以上２点でよろしいですか？</Typography>

                <Grid container textAlign="center">
                    <Grid item xs={6}>
                        <Button variant='contained' color='secondary'>戻る</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href="/SelectPayInfo">
                            <Button variant='contained' color='primary'>決定</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </ShowMordal>
    )
}
