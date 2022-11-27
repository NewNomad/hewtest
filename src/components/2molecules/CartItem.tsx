import { Add, AddCircle, LocalDrink, Remove, RemoveCircle }             from '@mui/icons-material'
import { Button, Grid, IconButton, List, ListItemAvatar, Typography }   from '@mui/material'
import { Box, Container }                                               from '@mui/system'
import Image from 'next/image'
import React from 'react'

// ====================================
// カート内アイテム情報
// ====================================
export const CartItem = () => {
    return (
        <Grid container padding={3} spacing={0} alignItems="center">

            <Grid item xs={4}>
                <Image src="/fanta.png" height={200} width={200} objectFit="contain"></Image>
            </Grid>

            <Grid item xs={8} textAlign="center">
                <Typography variant='h5' fontWeight="bold">
                    <LocalDrink />ファンタ
                </Typography>

                <Container>
                    <IconButton aria-label='remove' size='large'>
                        <RemoveCircle fontSize='large' />
                    </IconButton>
                    {152}
                    <IconButton aria-label='add'>
                        <AddCircle fontSize='large' />
                    </IconButton>
                    合計¥1400
                </Container>
            </Grid>

        </Grid>
    )
}
