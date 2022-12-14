import { Info }                     from '@mui/icons-material';
import { AppBar, Button, Toolbar }  from '@mui/material'
import { ShowDate }       from '../1atoms/ShowDate'
import { ShowWeather }    from '../1atoms/ShowWeather'
import { BtnShowInfo }    from '../1atoms/BtnShowInfo';
import { useRouter }      from 'next/router';
import React from 'react'

// 自販機の設置場所
const machinePlace: string = "名古屋";

// ===================================================
// ヘッダー
// ===================================================
export const Header = ({onMap = false}) => {
  const router = useRouter();

  return (
    <AppBar position='fixed' color='secondary'>
      <Toolbar>
        <ShowWeather place={machinePlace} />
        <ShowDate />
        {onMap && 
          (router.pathname != "/ShowInfo"
          ? <BtnShowInfo link='/ShowInfo' name='地図を見る' />
          : <BtnShowInfo link='/' name='メイン画面に戻る' />)
        }
      </Toolbar>
    </AppBar>
  )
}
