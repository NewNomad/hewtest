import { LocalDrink} from '@mui/icons-material'
import { CircularProgress, Container, Grid, Modal, Paper, Tab, Tabs } from '@mui/material'
import Product from '../2molecules/Product'
import { ProductTabs } from '../2molecules/ProductTabs'
import { ShowModalInfo } from '../2molecules/ShowModalInfo'
import { TypeProducts } from '../types/TypeProducts'
import { cartState } from '../types/TypeCart'
import { useRecoilState } from 'recoil'
import React, { useState } from 'react'
import useSWR from 'swr'
import { Recommend } from './Recommend'

const fetchProduct = "/api/fetchProducts"
const fetcher = (url: string) => fetch(url).then(response => response.json());


export const Products = () => {

    const [tabval, settabval] = useState<number>(0)
    const { data, error } = useSWR<TypeProducts[]>(fetchProduct, fetcher);
    const [cart] = useRecoilState(cartState)

    const handleTabVal = (event: any, newtabindex: number) => {
        settabval(newtabindex)
    }

    if (error) return (<>商品表示：エラーが発生しました。管理者へ連絡してください</>)

    return (
        //<Container>
        //<Paper>
        <>
            <Grid container direction="column" spacing={0.5} padding={0}>
                {tabval == 0 ?
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

                    // -----------------------------------------------
                    // おすすめタブ
                    // -----------------------------------------------
                    :<Paper><Recommend /></Paper>

                }
                <Grid item xs={1} marginTop={2}>
                    {/* <ProductTabs />
                     */}
                    <Paper>
                        <Tabs value={tabval} onChange={handleTabVal} centered variant='fullWidth' sx={{ bgColor: "secondary" }}>
                            <Tab icon={<LocalDrink />} label="商品一覧" iconPosition='start' />
                            <Tab icon={<LocalDrink />} label="おすすめ" iconPosition='start' />
                            {/* <Tab icon={<LocalDrink />} label="商品3" iconPosition='start' /> */}
                        </Tabs>
                    </Paper>
                </Grid>
            </Grid>

        </>
        //</Paper>
        //</Container>
    )
}
