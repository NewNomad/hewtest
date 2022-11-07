import { LocalDrink } from '@mui/icons-material'
import { Grid, Tab, Tabs } from '@mui/material'
import React from 'react'
import Product from '../2molecules/Product'

export const Products = () => {
    return (
        // <Container>
        <Grid container direction="column" spacing={2} padding={2}>
            {[...Array(3)].map((e) => (
                <Grid item xs={6} sx={{ height: "100%" }} container spacing={2} padding={0}>
                    {[...Array(12)].map((e) => (
                        <Grid item xs={1}>
                            <Product />
                        </Grid>
                    )

                    )}

                </Grid>
            ))}
            <Grid item xs={2} sx={{bgcolor:"secondary"}}>
                <Tabs value={null}  onChange={() => null} centered variant='fullWidth' sx={{bgColor:"secondary"}}>
                    <Tab icon={<LocalDrink/>} label="商品1"/>
                    <Tab icon={<LocalDrink/>}  label="商品2"/>
                    <Tab icon={<LocalDrink/>}  label="商品3"/>
                </Tabs>
            </Grid>
        </Grid>

        // </Container>
    )
}
