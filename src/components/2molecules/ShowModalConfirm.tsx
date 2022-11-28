import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ShowMordal } from '../1atoms/ShowModal'

export const ShowModalConfirm = () => {
    return (
        <ShowMordal>
            <Paper>
                <Grid container alignItems="center">
                    <Grid item xs={4}>
                        <Image src="/fanta.png" width={300} height={500} objectFit="contain"></Image>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h2' color="red">×３</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h2'>¥360</Typography>

                    </Grid>
                </Grid>
            </Paper>

        </ShowMordal>
    )
}
