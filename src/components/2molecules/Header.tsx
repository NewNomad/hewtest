// import { Info }                     from '@mui/icons-material';
import { AppBar, Toolbar, Grid }    from '@mui/material'
import { ShowDate }                 from '../1atoms/ShowDate'
import { ShowWeather }              from '../1atoms/ShowWeather'
import { BtnShowInfo }              from '../1atoms/BtnShowInfo';
import { useRouter }                from 'next/router';
import React from 'react'

// ===================================================
// ヘッダー
// ===================================================
export const Header = ({ onMap = false }) => {
  const router = useRouter();

  return (
    <AppBar position='fixed' color='secondary'>
      <Toolbar>
        <Grid container sx={{ paddingTop:1, paddingBottom:1 }}>

            <Grid item xs={5}>
                <ShowWeather />
            </Grid>

            <Grid item xs={2} sx={{ paddingTop:1, paddingBottom:1, textAlign:'center' }}>
                <ShowDate />
            </Grid>

            <Grid item xs={5} sx={{ paddingTop:1, paddingLeft:65, paddingBottom:1, textAlign:'center' }}>
            { onMap && 
                (router.pathname != "/ShowInfo"
                ? <BtnShowInfo link='/ShowInfo' name='地図を見る' />
                : <BtnShowInfo link='/' name='メイン画面に戻る' />)
            }
            </Grid>
          
        </Grid>
        
      </Toolbar>
    </AppBar>
  )
}
