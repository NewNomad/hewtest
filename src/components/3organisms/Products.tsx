import { LocalDrink }           from '@mui/icons-material'
import { Grid, Modal, Paper }   from '@mui/material'
import Product                  from '../2molecules/Product'
import { ProductTabs }          from '../2molecules/ProductTabs'
import { ShowModalInfo }        from '../2molecules/ShowModalInfo'
import React, { useState }      from 'react'

export const Products = () => {
    const [mordalInfo, setmordalInfo] = useState<boolean>(false)    // 商品詳細画面

    const OpenMInfo = () => setmordalInfo(true);                    // 商品詳細画面(モーダル)開く
    const CloseMInfo = () => setmordalInfo(false);                  // 商品詳細画面(モーダル)閉じる

    return (
        // <Container>
        // <Paper>
        <>
            <Grid container direction="column" spacing={3} padding={0}>
                {[...Array(3)].map((e, i) => (

                    <Grid key={i} item xs={4} sx={{ height: "100%" }} container spacing={2} padding={0} paddingTop={2} paddingBottom={0}>
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

            {/* 商品詳細画面(モーダル) */}
            <Modal open={mordalInfo} onClose={CloseMInfo} >
                <ShowModalInfo />
            </Modal>
        </>
        // </Paper>
        // </Container>
    )
}
