import { Box }                  from '@mui/material'
import { Container }            from '@mui/system'
import { TextTitle }            from '../components/1atoms/TextTitle'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { PayDetail }            from '../components/3organisms/PayDetail'
import { totalPriceSelector }   from '../components/types/TypeCart'
import { paymentState }         from '../components/types/TypePayment'
import { useRecoilValue, useRecoilState } from 'recoil'
import React, { useState } from 'react';

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
    const [isNumeric, setIsNumeric] = useState(true);                              // お預かり入力の整合性チェック

    const cost = costs.payInfo.type == payTypeCoins? costs.payment: cardBalance      // お預かり(現金)
    const request   = ( sum - cost ) > 0? ( sum - cost ): 0                         // 残り金額
    const change    = ( cost - sum ) > 0? ( cost - sum ): 0                         // おつり

    // イベント
    const ChangePrice  = (event:any) => {
        if( RegExp(/^[1-9]+\d*$/).test(event.target.value) ) {
            setIsNumeric(true)
        }
        else {
            // 数字以外は入力不可
            setIsNumeric(false)
            return
        }
        setCosts({ payment: event.target.value, payInfo: costs.payInfo });
    }

    const infoPrice = { 
        payType: costs.payInfo.type,
        sum: sum,
        costs: cost,
        request: request,
        change: change,
        isNumeric: isNumeric
    }
    const infoUrl = {
        next: nextUrl,
        back: backUrl
    }

    return (
        <>
            <HeadInfo title='mopacal | 入金確認' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Container sx={{ pt: 9 }}>

                    <TextTitle primary>{ costs.payInfo.type == payTypeCoins ? 'お金を投入してください': '入金処理を行っています…' }</TextTitle>

                    <PayDetail
                        payInfoName={ costs.payInfo.name }
                        price={ infoPrice }
                        url={ infoUrl }
                        onChange={ ChangePrice } />

                </Container>

            </Box>
        </>
    )
}