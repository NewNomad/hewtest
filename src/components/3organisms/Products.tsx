import { LocalDrink } from '@mui/icons-material'
import { Grid, Modal, Paper, } from '@mui/material'
import React, { useState } from 'react'
import Product from '../2molecules/Product'
import { ProductTabs } from '../2molecules/ProductTabs'
import { ShowModalInfo } from '../2molecules/ShowModalInfo'

export const Products = () => {
    const [mordalConfirm, setmordalConfirm] = useState<boolean>(false) // 購入確認画面
    const [mordalInfo, setmordalInfo] = useState<boolean>(false) // 商品詳細画面

    const OpenMConfirm = () => setmordalConfirm(true); // 購入確認画面の切り替え
    const CloseMConfirm = () => setmordalConfirm(false); // 購入確認画面の切り替え
    const OpenMInfo = () => setmordalInfo(true); // 商品詳細画面の切り替え
    const CloseMInfo = () => setmordalInfo(false); // 商品詳細画面の切り替え

    return (
        // <Container>
        // <Paper>
        <>
            <Grid container direction="column" spacing={0} padding={0}>
                {[...Array(3)].map((e, i) => (

                    <Grid key={i} item xs={4} sx={{ height: "100%" }} container spacing={1} padding={4} paddingTop={3} paddingBottom={0}>
                        {[...Array(12)].map((item, i) => (
                            <Grid key={i} item xs={1}>
                                <Product
                                    OpenMInfo={OpenMInfo}
                                />
                            </Grid>
                        )

                        )}

                    </Grid>
                ))}
                <Grid item xs={1} paddingTop={3}>
                    <ProductTabs />
                </Grid>
            </Grid>
            {/* 商品詳細画面のモーダル */}
            <Modal
                open={mordalInfo}
                onClose={CloseMInfo}

            >
                <ShowModalInfo></ShowModalInfo>
            </Modal>
        </>
        // </Paper>
        // </Container>
    )
}
