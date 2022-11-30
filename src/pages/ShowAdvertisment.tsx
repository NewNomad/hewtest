import { Box, Typography, Button, Grid }                  from '@mui/material'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { LinkButton }           from '../components/1atoms/BtnLink'

export default function ShowAdvertisment(){
    return (
        <>
            <HeadInfo title='mopacal | 広告' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap/>

                <Box sx={{ pt: 8 }}>
                    <Box sx={{width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 0.6}}>
                        <Typography>広告表示</Typography>
                        [ここに画像]
                    </Box>
                </Box>

                <LinkButton btnName='タップで商品一覧表示に戻ります(未実装)' url='/' />
            </Box>

        </>
    )
}