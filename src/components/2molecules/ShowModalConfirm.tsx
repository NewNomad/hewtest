import { Box, Button, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { ShowMordal }           from '../1atoms/ShowModal'
import { ModalConfirmProduct }  from '../1atoms/ModalConfirmProduct'
import Link from 'next/link'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartState, totalPriceSelector } from '../types/TypeCart'

type Props = {
    closeModal: () => void
}

export const ShowModalConfirm = ({ closeModal }: Props) => {
    const cart = useRecoilValue(cartState)
    const total = useRecoilValue(totalPriceSelector)

    return (
        <ShowMordal closeModal={closeModal}>
            <Box height={530} sx={{
                position: "flex",
                overflow: "scroll",
                overflowY: "scroll",
                padding: 3,
                overflowX: "hidden"
            }}>
                {cart.products.map((product) => (
                    <ModalConfirmProduct product={product} key={product.id} />
                ))}
            </Box>

            {/* 仕切り線 */}
            <Divider />

            <Container>
                <Typography textAlign="right">
                    合計{total}円
                </Typography>

                <Typography textAlign="center" variant='h5' color="red">
                    以上{cart.products.length}点でよろしいですか？
                </Typography>

                <Grid container textAlign="center">
                    <Grid item xs={6}>
                        <Button variant='contained' color='secondary' onClick={closeModal}>戻る</Button>
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
