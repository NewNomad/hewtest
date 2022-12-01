import { Box }                  from '@mui/material'
import { HeadInfo }             from '../components/2molecules/HeadInfo'
import { Header }               from '../components/2molecules/Header'
import { PayDetail }            from '../components/3organisms/PayDetail'
import React, { useState }  from 'react';

// 変数
let sum:number       = 1000;         // 合計金額

// ===================================================
// 入金確認画面
// ===================================================
export default function CheckPay(){
    const [costs, setCosts]                 = useState(0);
    // const [requestPay, setRequestPay]    = useState(0);
    // const [change, setChange]            = useState(1000);

    const request = (sum - costs) > 0? (sum - costs): 0;
    const change = (costs - sum) > 0? (costs - sum): 0;

    const ClickMinus = () => { setCosts(costs - 100); };
    const ClickPlus = () => { setCosts(costs + 100); };

    return (
        <>
            <HeadInfo title='mopacal | 入金確認' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Box sx={{ pt: 8 }}>
                    <PayDetail
                        sum={sum}
                        costs={costs}
                        request={request}
                        change={change}
                        ClickMinus={ClickMinus}
                        ClickPlus={ClickPlus} />
                </Box>

            </Box>
        </>
    )
}