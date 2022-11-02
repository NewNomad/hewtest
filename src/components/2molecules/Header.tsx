import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ShowDate } from '../1atoms/showDate'

export const Header = () => {


  return (
    <AppBar
      position='relative'
      color='primary'
      sx={{ borderBottom: (t) => `1px solid #ccc` }}>
      <Toolbar>

        <ShowDate />

      </Toolbar>
    </AppBar>
  )
}