import { Box, Divider, List, ListItem, Modal, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { BtnTotalAmount } from '../1atoms/BtnTotalAmount'
import { CartItem } from '../2molecules/CartItem'
import { ShowModalConfirm } from '../2molecules/ShowModalConfirm'
import { cartState, totalPriceSelector } from '../types/TypeCart'
import { useRecoilState, useRecoilValue } from 'recoil'
import React, { useState } from 'react'

// ====================================
// カート
// ====================================

export const Cart = () => {

    const [mordalConfirm, setmordalConfirm] = useState<boolean>(false)  // 購入確認画面(モーダル)

    const OpenMConfirm = () => setmordalConfirm(true);                  // 購入確認画面(モーダル)開く
    const CloseMConfirm = () => setmordalConfirm(false);                // 購入確認画面(モーダル)閉じる

    const cart = useRecoilValue(cartState)
    const totalPrice = useRecoilValue(totalPriceSelector)

    const items = [...cart.products].reverse()

    return (
        <Paper>

            <Container sx={{
                padding: 2
            }}>
                <Typography variant='h3'>カート</Typography>
                <List
                    sx={{
                        height: 500,
                        position: "flex",
                        overflow: "scroll",
                        overflowY: "scroll",
                        // padding: 3,
                        overflowX: "hidden"
                    }}

                >{items.map((product) => (
                    <Box key={product.id}>
                        <ListItem>
                            <CartItem product={product} />
                        </ListItem>
                        <Divider />
                    </Box>
                ))
                    }</List>
                <Divider />
                <Typography variant='h5' fontWeight="bold" textAlign="right">合計：{totalPrice}円</Typography>
                <BtnTotalAmount OpenMConfirm={OpenMConfirm} totalPrice={totalPrice} />
            </Container>

            {/* 購入確認画面(モーダル) */}
            <Modal open={mordalConfirm} onClose={CloseMConfirm}>
                <ShowModalConfirm closeModal={CloseMConfirm} />
            </Modal>

        </Paper>
    )
}
