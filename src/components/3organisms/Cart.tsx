import { Box, Button, Divider, List, ListItem, Modal, Paper, Typography } from '@mui/material'
import { Delete, ShoppingCart } from '@mui/icons-material'
import { Container } from '@mui/system'
import { BtnTotalAmount } from '../1atoms/BtnTotalAmount'
import { CartItem } from '../2molecules/CartItem'
import { ShowModalConfirm } from '../2molecules/ShowModalConfirm'
import { cartState, totalPriceSelector, useCart } from '../types/TypeCart'
import { useRecoilState, useRecoilValue } from 'recoil'
import React, { useState, useRef } from 'react'
import { motion } from "framer-motion"

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
        <Paper
            component={motion.div}
            variants={
                {
                    initial: { y: -1000, opacity: 0.5 },
                    animate: { y: 0, opacity: 1 },
                    exit: { y: -1000, opacity: 0.5 },
                }
            }
            whileHover={{ scale: 1. }}
            id='cart'
            drag
            dragSnapToOrigin
        >
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
                    component={motion.div}
                >{items.map((product) => (
                    <Box key={product.id}>
                        <ListItem>
                            <motion.div
               
                            >
                                <CartItem product={product} />
                            </motion.div>
                        </ListItem>
                        <Divider />

                    </Box>
                ))
                    }</List>

                <Divider />

                <ListItem>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                    >
                        <Button onClick={removeAllCart}
                            variant="outlined"
                        >
                            <Delete />
                            <Typography variant='h6'>すべて削除</Typography>
                        </Button>
                    </motion.div>
                </ListItem>

                <Typography variant='h4' fontWeight="bold" textAlign="right"
                // component={motion}
                >合計：{totalPrice}円</Typography>

                <motion.div
                    whileHover={{ scale: 1.0 }}
                >
                    <BtnTotalAmount OpenMConfirm={OpenMConfirm} totalPrice={totalPrice} />
                </motion.div>
            </Container>

            {/* 購入確認画面(モーダル) */}
            <Modal open={mordalConfirm} onClose={CloseMConfirm}>
                <ShowModalConfirm closeModal={CloseMConfirm} />
            </Modal>

        </Paper>
    )
}

export default Cart