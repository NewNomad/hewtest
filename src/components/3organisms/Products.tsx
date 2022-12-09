import { LocalDrink } from '@mui/icons-material'
import { CircularProgress, Grid, Modal, Paper } from '@mui/material'
import Product from '../2molecules/Product'
import { ProductTabs } from '../2molecules/ProductTabs'
import { ShowModalInfo } from '../2molecules/ShowModalInfo'
import React, { useState } from 'react'
import useSWR from 'swr'
import { TypeProducts } from '../types/TypeProducts'
import { useRecoilState } from 'recoil'
import { cartState } from '../types/TypeCart'

const fetchProduct = "/api/fetchProducts"
const fetcher = (url: string) => fetch(url).then(response => response.json());

export const Products = () => {

    const { data, error } = useSWR<TypeProducts[]>(fetchProduct, fetcher);
    if (error) return (<>商品表示：エラーが発生しました。管理者へ連絡してください</>)
    const [cart] = useRecoilState(cartState)

    return (
        // <Container>
        // <Paper>
        <>
            <Grid container direction="column" spacing={0.5} padding={0}>

                {
                    [...Array(3)].map((e, i) => (

                        <Grid key={i} item xs={4} sx={{ height: "100%" }} container spacing={0.5} padding={0} paddingTop={0} paddingBottom={0}>
                            {[...Array(12)].map((item, j) => (
                                <Grid key={j} item xs={1}>
                                    {data ?

                                        <Product
                                            proinfo={data![j + 12 * i]}
                                            cart={cart}
                                            key={data![j + 12 * i].id}
                                        />
                                        : <CircularProgress />}
                                </Grid>
                            ))}
                        </Grid>
                    ))
                }
                <Grid item xs={1} marginTop={2}>
                    <ProductTabs />
                </Grid>
            </Grid>

        </>
        // </Paper>
        // </Container>
    )
}
