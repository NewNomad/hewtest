import { Box, Typography, Paper, Button, Grid }    from '@mui/material'
import { HeadInfo }     from '../components/2molecules/HeadInfo'
import { Header }       from '../components/2molecules/Header'
import Link             from 'next/link'

export default function CheckPay(){
    return (
        <>
            <HeadInfo title='mopacal | 入金完了' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Box textAlign="center" sx={{ margin:5, padding:10, pt: 8 }}>
                        <Typography variant="h3" color="primary">ありがとうございました！</Typography>

                        <Box sx={{width: '100%', height: 600, padding: 10, backgroundColor: 'primary.main'}}>
                                [ここに画像]
                        </Box>

                        <Paper>
                            <Link href='/'>画面タッチで商品画面に戻ります(未実装)</Link>
                        </Paper>

                </Box>

            </Box>

        </>
    )
}