import { Container, Grid, Paper } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const Products = () => {
    return (
        // <Container>
        <Grid container alignItems="center" spacing={0.5} padding={1}>
            {[...Array(12)].map((e) => (
                <Grid item xs={1}>
                    <Paper elevation={0} variant="outlined" key={0}
                        sx={{
                            borderRadius: 5,
                            backgroundColor: "rgba(0,0,0,0)",
                            border: "3px solid #FFF"
                        }}>
                        <Image src="" height={300} width={200} objectFit="contain"></Image>
                        <Container
                            sx={{
                                backgroundColor: "red",
                                borderRadius: 5
                            }}
                        >
                            140円
                        </Container>

                    </Paper>
                </Grid>
            )

            )}

        </Grid>
        // </Container>
    )
}
