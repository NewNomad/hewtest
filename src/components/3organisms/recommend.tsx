import { LocalDrink, RecommendOutlined } from '@mui/icons-material'
import { CircularProgress, Container, Grid, Modal, Paper, Tab, Tabs, Typography } from '@mui/material'
import Product from '../2molecules/Product'
import { ProductTabs } from '../2molecules/ProductTabs'
import { ShowModalInfo } from '../2molecules/ShowModalInfo'
import { TypeProducts } from '../types/TypeProducts'
import { cartState } from '../types/TypeCart'
import { useRecoilState } from 'recoil'
import React, { useState } from 'react'
import useSWR from 'swr'
import RecommendProduct from '../2molecules/RecommendProduct'

const fetchProduct = "/api/fetchProducts"
const fetcher = (url: string) => fetch(url).then(response => response.json());


export const Recommend = () => {

    const [tabval, settabval] = useState<number>(0)
    const { data, error } = useSWR<TypeProducts[]>(fetchProduct, fetcher);
    const [cart] = useRecoilState(cartState)

    const handleTabVal = (event: any, newtabindex: number) => {
        settabval(newtabindex)
    }

    if (error) return (<>商品表示：エラーが発生しました。管理者へ連絡してください</>)

    return (
        <>
            <Grid container direction="column" spacing={0.5} padding={3} sx={{backgroundColor:"#FFA00"}}>
                {tabval == 0 ?
                    [...Array(1)].map((e, i) => (

                        <Grid key={i} item xs={4} sx={{ height: "100%" }} container spacing={0.5} padding={0} paddingTop={0} paddingBottom={0}>

                            {[...Array(4)].map((item, j) => (
                                <Grid key={j} item xs={3}>
                                    {data ?
                                            <RecommendProduct
                                                proinfo={data![j + 12 * i]}
                                                cart={cart}
                                                key={data![j + 12 * i].id}
                                                rank={j+1}
                                            />
                                        :
                                        <CircularProgress />
                                    }
                                </Grid>
                            ))}
                        </Grid>
                    ))
                    : <Typography>おすすめ準備中</Typography>
                }
            </Grid>
        </>
    )
}
