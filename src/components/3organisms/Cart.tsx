import { Box, Divider, List, ListItem, Modal, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { BtnTotalAmount } from '../1atoms/BtnTotalAmount'
import { CartItem } from '../2molecules/CartItem'
import { ShowModalConfirm } from '../2molecules/ShowModalConfirm'
import { cartState } from '../globalstate/cart'

// ====================================
// カート
// ====================================

export type Cart = {
    id: number,
    name: string,
    count: number,
    image: string
}

export const Cart = () => {

    const [mordalConfirm, setmordalConfirm] = useState<boolean>(false)  // 購入確認画面(モーダル)

    const OpenMConfirm = () => setmordalConfirm(true);                  // 購入確認画面(モーダル)開く
    const CloseMConfirm = () => setmordalConfirm(false);                // 購入確認画面(モーダル)閉じる

    const [cart, setCart] = useRecoilState<Cart>(cartState)
    setCart({
        id: 1,
        name: "aa",
        count: 1,
        image: "string",
    })
    return (
        <Paper>

            <Container>
                <List>{
                    [...Array(3)].map((e, i) => (
                        <Box key={i}>
                            <ListItem>
                                <CartItem />
                            </ListItem>
                            <Divider />
                        </Box>
                    ))
                }</List>

                <BtnTotalAmount OpenMConfirm={OpenMConfirm} />
            </Container>

            {/* 購入確認画面(モーダル) */}
            <Modal open={mordalConfirm} onClose={CloseMConfirm}>
                <ShowModalConfirm closeModal={CloseMConfirm} />
            </Modal>

        </Paper>
    )
}
