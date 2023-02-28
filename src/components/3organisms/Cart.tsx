import { Box, Button, Divider, List, ListItem, Modal, Paper, Typography } from '@mui/material'
import { Delete, ShoppingCart } from '@mui/icons-material'
import { Container } from '@mui/system'
import { BtnTotalAmount } from '../1atoms/BtnTotalAmount'
import { CartItem } from '../2molecules/CartItem'
import { ShowModalConfirm } from '../2molecules/ShowModalConfirm'
import { cartState, totalPriceSelector, useCart } from '../types/TypeCart'
import { useRecoilState, useRecoilValue } from 'recoil'
import React, { useState, useRef } from 'react'
import { motion }from "framer-motion"

// ====================================
// カート
// ====================================
const Cart = () => {

    const [mordalConfirm, setmordalConfirm] = useState<boolean>(false)  // 購入確認画面(モーダル)

    const OpenMConfirm = () => setmordalConfirm(true);                  // 購入確認画面(モーダル)開く
    const CloseMConfirm = () => setmordalConfirm(false);                // 購入確認画面(モーダル)閉じる

    const cart = useRecoilValue(cartState)
    const totalPrice = useRecoilValue(totalPriceSelector)
    const { removeAllCart } = useCart()

    const items = [...cart.products].reverse()

    return (
        <Paper>


            <Container sx={{ padding: 2 }}>

                <Typography variant='h4' fontWeight={"bold"}>
                    <ShoppingCart />
                    カート</Typography>

                <List
                    sx={{
                        height: 435,
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

                <ListItem>
                    <Button onClick={removeAllCart}
                        variant="outlined"
                    >
                        <Delete />
                        <Typography variant='h6'>すべて削除</Typography>
                    </Button>
                </ListItem>

                <Typography variant='h4' fontWeight="bold" textAlign="right"
                    // component={motion}
                >合計：{totalPrice}円</Typography>

                <BtnTotalAmount OpenMConfirm={OpenMConfirm} totalPrice={totalPrice} />

            </Container>

            {/* 購入確認画面(モーダル) */}
            <Modal open={mordalConfirm} onClose={CloseMConfirm}>
                <ShowModalConfirm closeModal={CloseMConfirm} />
            </Modal>

        </Paper>
    )
}

export default Cart