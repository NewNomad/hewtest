import { LocalDrink }       from '@mui/icons-material'
import { Paper,Tab, Tabs }  from '@mui/material'
import React from 'react'

export const ProductTabs = () => {
    return (
        <Paper>
            <Tabs value={0} onChange={() => null} centered variant='fullWidth' sx={{ bgColor: "secondary" }}>
                <Tab icon={<LocalDrink />} label="商品一覧" iconPosition='start' />
                <Tab icon={<LocalDrink />} label="おすすめ" iconPosition='start' />
                {/* <Tab icon={<LocalDrink />} label="商品3" iconPosition='start' /> */}
            </Tabs>
        </Paper>
    )
}
