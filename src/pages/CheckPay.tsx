import { Box }                  from '@mui/material'
import { Container }            from '@mui/system'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { PayDetail }            from '../components/3organisms/PayDetail'
import React, { useState }      from 'react';
import { useRecoilValue }       from 'recoil'
import { totalPriceSelector }   from '../components/types/TypeCart'
import { paymentState, totalPaymentSelector } from '../components/types/TypePayment'

// ===================================================
// 入金確認画面
// ===================================================
export default function CheckPay(){

    const sum = useRecoilValue(totalPriceSelector)          // 合計金額

    const [costs, setCosts]                 = useState(0);  // お預かり
    // const [requestPay, setRequestPay]    = useState(0);
    // const [change, setChange]            = useState(1000);

    const request = (sum - costs) > 0? (sum - costs): 0;    // 残り金額
    const change = (costs - sum) > 0? (costs - sum): 0;     // おつり

    // ここから↓の処理をTypePaymentに移す？
    const ClickMinus = () => { setCosts(costs - 100); };
    const ClickPlus = () => { setCosts(costs + 100); };

    const payment = useRecoilValue(paymentState)
    const totalPayment = useRecoilValue(totalPaymentSelector)

    return (
        <>
            <HeadInfo title='mopacal | 入金確認' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Container sx={{ pt: 8 }}>
                    <PayDetail
                        sum={sum}
                        costs={costs}
                        request={request}
                        change={change}
                        ClickMinus={ClickMinus}
                        ClickPlus={ClickPlus} />
                </Container>

            </Box>
        </>
    )
}