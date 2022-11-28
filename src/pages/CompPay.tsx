import { Box, Typography, Button, Grid }                  from '@mui/material'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { GoCompPay }            from '../components/1atoms/GoCompPay'
import { ShowAmount }           from '../components/1atoms/ShowAmount'
import { ShowAmountRemain }     from '../components/1atoms/ShowAmountRemain'
import { ShowChange }           from '../components/1atoms/ShowChange'
import react from 'react'

export default function CheckPay(){
    return (
        <>
            <HeadInfo title='mopacal | 入金完了' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Box textAlign="center" sx={{ pt: 8, margin:5, padding:10}}>
                    <Typography variant="h3" color="primary">ありがとうございました！</Typography>

                    <Box sx={{width: '100%', height: 400, padding: 10, backgroundColor: 'primary.main', opacity: 0.6}}>
                            [ここに画像]
                    </Box>

                    <Typography>画面タッチで商品画面に戻ります(未実装)</Typography>
                </Box>


            </Box>

        </>
    )
}