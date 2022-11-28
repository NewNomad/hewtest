import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const ModalConfirmProduct = () => {
    return (
        <Paper elevation={3} sx={{
marginTop:2
}}>
            <Grid container alignItems="center" padding={3}>
                <Grid item xs={4}>
                    <Image src="/fanta.png" width={200} height={200} objectFit="contain"></Image>

                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h2' color="red">×3</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h2'>¥360</Typography>

                </Grid>
            </Grid>
        </Paper>

    )
}
