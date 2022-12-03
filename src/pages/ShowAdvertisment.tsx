import { Box, Typography, Button, Grid }                  from '@mui/material'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { LinkButton }           from '../components/1atoms/BtnLink'

export default function ShowAdvertisment() {
    return (
        <>
            <HeadInfo title='mopacal | 広告' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap/>

                <Box sx={{ pt: 8 }}>
                    <Box sx={{ width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 1.0 }}>
                        {/* <Typography>広告表示</Typography> */}
                        <React.StrictMode>
                            <video controls loop autoPlay muted width="100%" height="100%">
                                <source src="CM.mp4" type="video/mp4" />
                                <p>Your browser doesn't support HTML5 video.</p>
                            </video>
                        </React.StrictMode>
                    </Box>
                </Box>

                <LinkButton url='/'>タップで商品一覧表示に戻ります(未実装)</LinkButton>

            </Box>

        </>
    )
}