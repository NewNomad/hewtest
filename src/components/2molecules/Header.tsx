import { AppBar,  Toolbar }   from '@mui/material'
import { ShowDate }           from '../1atoms/ShowDate'
import { ShowWeather }        from '../1atoms/ShowWeather'

import React from 'react'

// 自販機の設置場所
const machinePlace:string = "名古屋";

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
            <ShowDate />
            <ShowWeather place={machinePlace} />
        </Toolbar>
    </AppBar>
  )
}
