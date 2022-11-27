import { ShoppingCartCheckout }                 from '@mui/icons-material'
import { Box, Button, Container, Typography }   from '@mui/material'
import React from 'react'

// ======================================================
// 会計画面遷移ボタン
// ======================================================
export const BtnTotalAmount = () => {
    return (
        <Container sx={{ textAlign: "center" }}>
            <Button
                variant="contained"
                color='primary'
                endIcon={<ShoppingCartCheckout fontSize='large' />}
            >
                会計
            </Button>
        </Container>
    )
}
