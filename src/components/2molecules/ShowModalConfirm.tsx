import { Box, Button, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import { ShowMordal } from '../1atoms/ShowModal'
import { ModalConfirmProduct } from '../1atoms/ModalConfirmProduct'
import { cartState, totalPriceSelector } from '../types/TypeCart'
import { useRecoilValue } from 'recoil'
import Link from 'next/link'
import React from 'react'


type Props = {
    closeModal: () => void
    ref?: React.RefObject<HTMLDivElement>
}

// export const ShowModalConfirm = ({ closeModal, ref }: Props) => {
export const ShowModalConfirm = React.forwardRef<HTMLDivElement, Props>(
    function ShowModalConfirm ({ closeModal, ref }: Props) {

        const cart = useRecoilValue(cartState)
        const total = useRecoilValue(totalPriceSelector)
        const totalProducts: number = cart.products.reduce((result: number, product) => {
            return result + product.quantity
        }, 0)

        return (
            <ShowMordal closeModal={closeModal} ref={ref}>
                <Box height={520} width={720} sx={{
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
                    <Typography textAlign="right" variant='h4' marginTop={2}>
                        合計{total}円
                    </Typography>

                    <Typography textAlign="center" variant='h5' color="primary" fontWeight="bold" marginBottom={1}>
                        以上{totalProducts}点でよろしいですか？
                    </Typography>

                    <Grid container textAlign="center">
                        <Grid item xs={6}>
                            <Button variant='contained' color='secondary' onClick={closeModal}>
                                <Typography variant='h2' padding={1}>戻る</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Link href="/SelectPayInfo">
                                <Button variant='contained' color='primary'>
                                    <Typography variant='h2' padding={1}>決定</Typography>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                </Container>

            </ShowMordal>
        )
    }
)