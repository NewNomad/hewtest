import { ShoppingCartCheckout }                 from '@mui/icons-material'
import { Box, Button, Container, Typography }   from '@mui/material'
import React from 'react'
type Props = {
    OpenMConfirm: () => void
}

// ======================================================
// 会計画面遷移ボタン
// ======================================================

export const BtnTotalAmount = ({ OpenMConfirm }: Props) => {
    return (
        // <Container sx={{ textAlign: "center" }}>
        <Button
            variant="contained"
            color='primary'

            sx={{
                width: "100%",
                color: "#fff"

            }}
            endIcon={<ShoppingCartCheckout fontSize='large' />}
            onClick={OpenMConfirm}
        >
            会計

        </Button>
        // </Container>
    )
}
