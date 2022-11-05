import { Button, Container, Grid, Paper } from '@mui/material'
import { width } from '@mui/system'
import Image from 'next/image'
import React from 'react'

export const Products = () => {
    return (
        // <Container>
        <Grid container alignItems="center" spacing={0.5} padding={1}>
            {[...Array(12)].map((e) => (
                <Grid item xs={1}>
                    <Paper elevation={0}  variant="outlined" key={0}
                        sx={{
                            borderRadius: 3,
                            backgroundColor: "rgba(0,0,0,0)",
                            border: "3px solid #FFF"
                        }}>
                        <Image src="" height={300} width={200} objectFit="contain"></Image>
                        <Button color='secondary' variant='contained' disableElevation
                            sx={{
                                borderRadius: 2,
                                width: 1,
                            }}>
                            140円

                        </Button>
                    </Paper>
                </Grid>
            )

            )}

        </Grid>
        // </Container>
    )
}
