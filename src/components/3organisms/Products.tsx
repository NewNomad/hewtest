import { AcUnit } from '@mui/icons-material'
import { Button, Container, Grid, Paper, Tooltip } from '@mui/material'
import { width } from '@mui/system'
import Image from 'next/image'
import React from 'react'

export const Products = () => {
    return (
        // <Container>
        <Grid container alignItems="center" spacing={1} padding={3}>
            {[...Array(12)].map((e) => (
                <Grid item xs={1}>
                    <Paper elevation={0} variant="outlined" key={0}
                        sx={{
                            borderRadius: 3,
                            backgroundColor: "rgba(0,0,0,0)",
                            border: "3px solid #FFF"
                        }}>
                        <Tooltip title="詳細" arrow>
                            <Button
                                sx={{
                                    borderRadius: 2,
                                    width: 1,
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                }}>
                                <Image src="" height={300} width={200} objectFit="contain"></Image>
                            </Button>
                        </Tooltip>

                        <Tooltip title="カートに追加" arrow>
                            <Button color='secondary' variant='contained' disableElevation startIcon={<AcUnit />}
                                sx={{
                                    borderRadius: 2,
                                    width: 1,
                                    borderStartEndRadius: 0,
                                    borderStartStartRadius: 0
                                }}>
                                ¥140

                            </Button>
                        </Tooltip>

                    </Paper>
                </Grid>
            )

            )}

        </Grid>
        // </Container>
    )
}
