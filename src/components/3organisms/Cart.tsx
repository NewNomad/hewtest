import { Box, Divider, List, ListItem, Paper } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { BtnTotalAmount } from '../1atoms/BtnTotalAmount'
import { CartItem } from '../2molecules/CartItem'

export const Cart = () => {
    return (
        <Paper>
            <Container>
                <List>
                    {[...Array(3)].map((e, i) => (
                        <Box key={i}>
                            <ListItem>
                                <CartItem />
                            </ListItem>
                            <Divider />
                        </Box>
                    ))}
                </List>
                    <BtnTotalAmount />
            </Container>
        </Paper>
    )
}
