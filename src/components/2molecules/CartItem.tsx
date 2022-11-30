import { Add, AddCircle, LocalDrink, Remove, RemoveCircle } from '@mui/icons-material'
import { Button, Grid, IconButton, List, ListItemAvatar, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import QuantityButton from '../1atoms/QuantityButton'

// ====================================
// カート内アイテム情報
// ====================================
export const CartItem = () => {
    return (
        <Grid container padding={3} spacing={0} alignItems="center">
            <Grid item xs={4}>
                <Paper sx={{
                    padding: 1
                }}>
                    <Image src="/fanta.png" height={130} width={100} objectFit="contain"></Image>
                </Paper>
            </Grid>
            <Grid item xs={8} textAlign="center">
                <Typography variant='h5' fontWeight="bold">
                    <LocalDrink />ファンタ
                </Typography>

                <Container>
                    {/* <IconButton aria-label='remove' size='large'>
                        <RemoveCircle fontSize='large' />
                    </IconButton>
                    {152}
                    <IconButton aria-label='add'>
                        <AddCircle fontSize='large' />
                    </IconButton> */}
                    {/* <QuantityButton/> */}
                    合計¥1400
                </Container>
            </Grid>

        </Grid>
    )
}
