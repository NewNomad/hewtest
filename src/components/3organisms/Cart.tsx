import { Box, Divider, List, ListItem, Modal, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { BtnTotalAmount } from '../1atoms/BtnTotalAmount'
import { CartItem } from '../2molecules/CartItem'
import { ShowModalConfirm } from '../2molecules/ShowModalConfirm'

// ====================================
// カート
// ====================================
export const Cart = () => {
    const [mordalConfirm, setmordalConfirm] = useState<boolean>(false)  // 購入確認画面(モーダル)

    const OpenMConfirm = () => setmordalConfirm(true);                  // 購入確認画面(モーダル)開く
    const CloseMConfirm = () => setmordalConfirm(false);                // 購入確認画面(モーダル)閉じる
    return (
        <Paper>

            <Container>
                <List>{
                        [...Array(3)].map( (e, i) => (
                            <Box key={i}>
                                <ListItem><CartItem /></ListItem>
                                <Divider />
                            </Box>
                        ) )
                }</List>
                <BtnTotalAmount OpenMConfirm={OpenMConfirm} />
            </Container>

            {/* 購入確認画面(モーダル) */}
            <Modal open={mordalConfirm} onClose={CloseMConfirm}>
                <ShowModalConfirm />
            </Modal>

        </Paper>
    )
}
