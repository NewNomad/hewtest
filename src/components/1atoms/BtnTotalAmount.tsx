import { ShoppingCartCheckout } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
type Props = {
    OpenMConfirm: () => void;
    totalPrice: number
}

// ======================================================
// 会計画面遷移ボタン
// ======================================================

export const BtnTotalAmount = ({ OpenMConfirm, totalPrice }: Props) => {
    const size = 50

    return (
        // <Container sx={{ textAlign: "center" }}>
        <Button
            variant="contained"
            color='primary'
            disabled={totalPrice>0?false:true}
            sx={{
                width: "100%",
                // padding: 5,
                fontSize: size,
                marginBottom: 1,
                marginTop: 2,
                borderRadius: 50,

            }}
            endIcon={<ShoppingCartCheckout sx={{
                width: size,
                height: size
            }} />}
            onClick={OpenMConfirm}
        >
            会計

        </Button>
        // </Container>
    )
}
