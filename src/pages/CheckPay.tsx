import { Box, Button, Grid, Typography } from '@mui/material'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { ShowCheckPayInfo }     from '../components/2molecules/ShowCheckPayInfo'
import { GoCompPay }            from '../components/1atoms/GoCompPay'
import Router                   from 'next/router'
import react from 'react'

const handler = (path:any) => Router.push(path)

export default function CheckPay(){
    return (
        <>
            <HeadInfo title='mopacal | 入金確認' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Box sx={{ pt: 8 }}>
                    <Typography>[画像]</Typography>
                    <ShowCheckPayInfo/>

                    <Button variant='contained' color='secondary' onClick={()=>handler('/SelectPayInfo')}>戻る</Button>
                    <Button variant='contained' color='primary' onClick={()=>handler('/CompPay')}>決定</Button>

                </Box>


            </Box>

        </>
    )
}