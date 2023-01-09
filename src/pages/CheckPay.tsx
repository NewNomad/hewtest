import { Box }                  from '@mui/material'
import { Container }            from '@mui/system'
import { TextTitle }            from '../components/1atoms/TextTitle'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { PayDetail }            from '../components/3organisms/PayDetail'
import { totalPriceSelector }   from '../components/types/TypeCart'
import { paymentState }         from '../components/types/TypePayment'
import { useRecoilValue, useRecoilState } from 'recoil'
import React from 'react';

// ---------------------------------------------------
// 定数
// ---------------------------------------------------
const nextUrl:string = "/CompPay"           // 次ページURL
const backUrl:string = "/SelectPayInfo"     // 前ページURL
const payTypeCoins: number = 1              // 決済方法区分(入金 = 1)
const cardBalance: number = 1000;           // 電子マネー/QRコードのカード残高(1000円と仮定)

// ===================================================
// 入金確認画面
// ===================================================
export default function CheckPay(){

    // 値取得
    const sum:number            = useRecoilValue(totalPriceSelector)                // 合計金額
    const [costs, setCosts]     = useRecoilState(paymentState)                      // お預かり(投入金額, 支払方法)

    const cost = costs.payInfoType == payTypeCoins? costs.payment: cardBalance;     // お預かり(現金)
    const request   = ( sum - cost ) > 0? ( sum - cost ): 0                         // 残り金額
    const change    = ( cost - sum ) > 0? ( cost - sum ): 0                         // おつり

    const infoPrice = { 
        payType: costs.payInfoType,
        sum: sum,
        costs: cost,
        request: request,
        change: change
    }
    const infoUrl = { next: nextUrl, back: backUrl }

    const strTitle = costs.payInfoType == payTypeCoins ? 'お金を投入してください': '入金処理を行っています…';

    // イベント
    const ClickMinus    = () => { setCosts({ payment: costs.payment - 100, payInfoId: costs.payInfoId, payInfoType: costs.payInfoType }); };
    const ClickPlus     = () => { setCosts({ payment: costs.payment + 100, payInfoId: costs.payInfoId, payInfoType: costs.payInfoType }); };

    return (
        <>
            <HeadInfo title='mopacal | 入金確認' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Container sx={{ pt: 8 }}>
                    <TextTitle primary>{ strTitle }</TextTitle>

                    <PayDetail
                        price = { infoPrice }
                        url={ infoUrl }
                        ClickMinus={ ClickMinus }
                        ClickPlus={ ClickPlus } />
                </Container>

            </Box>
        </>
    )
}