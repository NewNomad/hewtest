import { ShoppingCartCheckout } from '@mui/icons-material'
import { Box, Button, Container } from '@mui/material'
import React from 'react'

export const BtnTotalAmount = () => {
    return (
        <Container sx={{ textAlign: "center" }}>
            <Button
                variant="contained"
                color='secondary'
                sx={{
                    width: 200,
                    height:100
                }}
                endIcon={<ShoppingCartCheckout/>}
            >
                aaa
            </Button>
        </Container>
    )
}
