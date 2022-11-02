import { AppBar,  Toolbar } from '@mui/material'
import React from 'react'
import { ShowDate } from '../1atoms/ShowDate'

export const Header = () => {


  return (
    <AppBar
      position='fixed'
      color='primary'
      // sx={{ borderBottom: (t) => `1px solid #ccc` }}
      >
      <Toolbar>
          <ShowDate />
      </Toolbar>
    </AppBar>
  )
}