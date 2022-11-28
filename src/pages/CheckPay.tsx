import { Box }                  from '@mui/material'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { PayDetail }            from '../components/3organisms/PayDetail'

// ===================================================
// 入金確認画面
// ===================================================
export default function CheckPay(){
    return (
        <>
            <HeadInfo title='mopacal | 入金確認' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />
                <PayDetail/>
            </Box>
        </>
    )
}