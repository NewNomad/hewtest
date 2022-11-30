import { Box, Typography, Button, Grid }                  from '@mui/material'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { Footer }               from '../components/2molecules/Footer'

export default function Advertisment(){
    return (
        <>
            <HeadInfo title='mopacal | 地図' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap />

                <Box sx={{ pt: 8 }}>
                    <Box sx={{width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 0.6}}>
                        <Typography>地図表示</Typography>
                        [ここに画像]
                    </Box>
                </Box>
            </Box>

        </>
    )
}