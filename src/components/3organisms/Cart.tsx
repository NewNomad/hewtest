import { Divider, List, ListItem } from '@mui/material'
import React from 'react'
import { CartItem } from '../2molecules/CartItem'

export const Cart = () => {
    return (
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
    )
}
