import { LocalDrink } from '@mui/icons-material'
import { Grid, Paper, Tab, Tabs } from '@mui/material'
import React from 'react'
import Product from '../2molecules/Product'
import { ProductTabs } from '../2molecules/ProductTabs'

export const Products = () => {
    return (
        // <Container>
        <Paper>
            <Grid container direction="column" spacing={0} padding={0}>
                {[...Array(3)].map((e,i) => (

                    <Grid key={i} item xs={4} sx={{ height: "100%" }} container spacing={0.5} padding={4} paddingTop={3} paddingBottom={0}>
                        {[...Array(12)].map((item,i) => (
                            <Grid key={i} item xs={1}>
                                <Product />
                            </Grid>
                        )

                        )}

                    </Grid>
                ))}
                <Grid item xs={1} paddingTop={3}>
                    <ProductTabs />
                </Grid>
            </Grid>
        </Paper>
        // </Container>
    )
}
