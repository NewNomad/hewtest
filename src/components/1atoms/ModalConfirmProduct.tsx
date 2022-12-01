import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { TypeProducts } from '../types/TypeProducts'

type Props = {
    product: TypeProducts
}

export const ModalConfirmProduct = ({ product }: Props) => {
    return (
        <Paper elevation={3} sx={{ marginTop: 2 }}>
            <Grid container alignItems="center" padding={3}>
                <Grid item xs={4}>
                    <Image src={"/" + product.imageURL} width={200} height={200} objectFit="contain"></Image>

                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h2' color="red">
                        ×{product.quantity}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h2'>
                        ¥{product.price * product.quantity}
                    </Typography>

                </Grid>
            </Grid>
        </Paper>

    )
}
