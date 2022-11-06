import { Grid } from '@mui/material'
import React from 'react'
import Product from '../2molecules/Product'

export const Products = () => {
    return (
        // <Container>
        <Grid container direction="column" spacing={1} padding={2}>
            {[...Array(3)].map((e) => (
                <Grid item xs={4} sx={{ height: "100%" }} container spacing={1} padding={0}>
                    {[...Array(12)].map((e) => (
                        <Grid item xs={1}>
                            <Product />
                        </Grid>
                    )

                    )}

                </Grid>
            ))}
        </Grid>

        // </Container>
    )
}
