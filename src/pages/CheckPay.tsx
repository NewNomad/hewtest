import { Box }                  from '@mui/material'
import { Container }            from '@mui/system'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { PayDetail }            from '../components/3organisms/PayDetail'
import React, { useState }      from 'react';
import { useRecoilValue, useRecoilState }       from 'recoil'
import { totalPriceSelector }   from '../components/types/TypeCart'
import { paymentState } from '../components/types/TypePayment'

// ===================================================
// 入金確認画面
// ===================================================
export default function CheckPay(){

    // 値取得
    const sum                   = useRecoilValue(totalPriceSelector)            // 合計金額
    const [costs, setCosts]     = useRecoilState(paymentState)                  // お預かり(投入金額, 支払方法)
    const request   = (sum - costs.payment ) > 0? (sum - costs.payment): 0      // 残り金額
    const change    = (costs.payment - sum) > 0? (costs.payment - sum): 0       // おつり

    // イベント
    const ClickMinus    = () => { setCosts({ payment: costs.payment - 100, payInfoId: costs.payInfoId }); };
    const ClickPlus     = () => { setCosts({ payment: costs.payment + 100, payInfoId: costs.payInfoId }); };

    return (
        <>
            <HeadInfo title='mopacal | 入金確認' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Container sx={{ pt: 8 }}>
                    <PayDetail
                        sum={sum}
                        costs={costs.payment}
                        request={request}
                        change={change}
                        ClickMinus={ClickMinus}
                        ClickPlus={ClickPlus} />
                </Container>

            </Box>
        </>
    )
}