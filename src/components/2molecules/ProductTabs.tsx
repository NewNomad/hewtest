import { LocalDrink } from '@mui/icons-material'
import { Tab, Tabs } from '@mui/material'
import React from 'react'

export const ProductTabs = () => {
    return (
        <Tabs value={null} onChange={() => null} centered variant='fullWidth' sx={{ bgColor: "secondary" }}>
            <Tab icon={<LocalDrink />} label="商品1" iconPosition='start' />
            <Tab icon={<LocalDrink />} label="商品2" iconPosition='start' />
            <Tab icon={<LocalDrink />} label="商品3" iconPosition='start' />
        </Tabs>)
}
