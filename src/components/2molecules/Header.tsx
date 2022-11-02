import { AppBar,  Toolbar } from '@mui/material'
import { ShowDate }         from '../1atoms/ShowDate'

import React from 'react'


// ===================================================
// ヘッダー
// ===================================================
export const Header = () => {
  return (
    <AppBar position='fixed'
            color='primary'
            // sx={{ borderBottom: (t) => `1px solid #ccc` }}
    >
        <Toolbar>
            <ShowDate />
        </Toolbar>
    </AppBar>
  )
}