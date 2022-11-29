import { ShoppingCartCheckout } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
type Props = {
    OpenMConfirm: () => void
}

// ======================================================
// 会計画面遷移ボタン
// ======================================================

export const BtnTotalAmount = ({ OpenMConfirm }: Props) => {
    const size = 50

    return (
        // <Container sx={{ textAlign: "center" }}>
        <Button
            variant="contained"
            color='primary'

            sx={{
                width: "100%",
                // padding: 5,
                fontSize: size,
                marginBottom: 3,
                marginTop: 2,
                borderRadius:50,

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
