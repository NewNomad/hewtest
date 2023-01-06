import { LocalDrink }       from '@mui/icons-material'
import { Paper,Tab, Tabs }  from '@mui/material'
import React from 'react'

// TODO: [タブ] 未実装
// TODO: [顔認証/おすすめ表示] 未実装
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
