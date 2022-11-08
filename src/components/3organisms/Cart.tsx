import { Divider, List, ListItem, Paper } from '@mui/material'
import React from 'react'
import { CartItem } from '../2molecules/CartItem'

export const Cart = () => {
    return (
        <Paper>
            <List>
                {[...Array(3)].map((e) => (
                    <>
                        <ListItem>
                            <CartItem />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}