import { AppBar,  Toolbar } from '@mui/material'
import { ShowDate }         from '../1atoms/ShowDate'
import { ShowWeather }       from '../1atoms/ShowWeather'

import React from 'react'

// ===================================================
// ヘッダー
// ===================================================
export const Header = () => {

  return (
    <AppBar
      position='fixed'
      color='secondary'
      // sx={{ borderBottom: (t) => `1px solid #ccc` }}
      >
      	<Toolbar>
            <ShowWeather />
            <ShowDate />
      	</Toolbar>
    </AppBar>
  )
}
