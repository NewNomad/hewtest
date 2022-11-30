import { Box, Typography, Paper, Button, Grid }    from '@mui/material'
import { TextTitle }    from '../components/1atoms/TextTitle'
import { HeadInfo }     from '../components/2molecules/HeadInfo'
import { Header }       from '../components/2molecules/Header'
import { LinkButton }   from '../components/1atoms/BtnLink'
import Link             from 'next/link'

export default function CheckPay(){
    return (
        <>
            <HeadInfo title='mopacal | 入金完了' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Box textAlign="center" sx={{ margin:5, padding:10, pt: 8 }}>
                    <TextTitle>ありがとうございました！</TextTitle>

                    <Box sx={{width: '100%', height: 600, padding: 10, backgroundColor: 'primary.main'}}>
                        [ここに画像]
                    </Box>

                    <LinkButton btnName='タップで商品一覧に戻ります(未実装)' url='/' />

                </Box>

            </Box>

        </>
    )
}