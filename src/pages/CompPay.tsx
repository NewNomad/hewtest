import { Box, Button, Grid }                  from '@mui/material'
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

                <Box sx={{ pt: 8 }}>
                    入金完了
                </Box>


            </Box>

        </>
    )
}