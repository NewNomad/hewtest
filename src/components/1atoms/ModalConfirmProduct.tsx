import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { TypeProducts } from '../types/TypeProducts'

type Props = {
    product: TypeProducts
}

export const ModalConfirmProduct = ({ product }: Props) => {
    return (
        <Paper elevation={0} variant="outlined" sx={{ marginTop: 2,p:2 }}>
            <Typography color="primary" fontWeight="bold">
                {product.name}
            </Typography>
            <Grid container alignItems="center" padding={3}>
                <Grid item xs={4}>
                    <Image src={"/" + product.imageURL} width={200} height={120} objectFit="contain" alt=""></Image>

                </Grid>
                <Grid item xs={4} >
                    <Typography variant='h5' color="primary">
                        ×{product.quantity}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h3'>
                        ¥{product.price * product.quantity}
                    </Typography>

                </Grid>
            </Grid>
        </Paper>

    )
}
