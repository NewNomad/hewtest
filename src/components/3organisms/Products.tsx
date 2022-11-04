import { Container, Grid, Paper } from '@mui/material'
import React from 'react'

export const Products = () => {
    return (
        // <Container>
        <Grid container alignItems="center" spacing={0} padding={1}>
            {[...Array(12)].map((e) => (
                <Grid item xs={1}>
                    <Paper elevation={0} variant="outlined" key={0}>Name</Paper>
                </Grid>
            )

            )}

        </Grid>
        // </Container>
    )
}
