import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export const PayInfo = () => {
    return (
        <Container sx={{ textAlign: "center" }}>
            <ul>
                <li>
                    <Button onClick={}>現金</Button>
                    <Button onClick={}>電子マネー</Button>
                    <Button onClick={}>QRコード</Button>
                </li>
            </ul>
        </Container>
    )
}