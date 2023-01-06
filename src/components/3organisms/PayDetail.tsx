import { Box, Paper, Grid }     from '@mui/material'
import { BtnLink }              from '../1atoms/BtnLink'
import { GridItem }             from '../1atoms/GridItem'
import { ShowPayDetail }        from '../2molecules/ShowPayDetail'
import { useRouter }            from 'next/router'
import React  from 'react';

// ---------------------------------------------------
// 型宣言
// ---------------------------------------------------
type Props = {
    price: {
        payType: number             // 支払方法区分
        sum: number                 // 合計金額
        costs: number               // 預かり金額
        request: number             // 不足額
        change: number              // おつり
    }
    url:{
        next: string                // 次ページURL
        back: string                // 前ページURL
    }
    ClickMinus: () => void          // クリックイベント(マイナスボタン押下時)
    ClickPlus: () => void           // クリックイベント(プラスボタン押下時)
}

export const PayDetail = ( props:Props ) =>{

    const { price, url, ClickMinus, ClickPlus } = props

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    return (                
        <>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Box sx={{width: '100%', height: 600, padding: 10, backgroundColor: 'primary.main'}}>
                        [ここに画像]
                    </Box>
                </Grid>

                <Grid item xs={5} textAlign="center">
                    <Paper sx={{width: '100%', height: 600}}>

                        <Box height={500} sx={{padding: 10}}>
                            {/* TODO: [入金方法] この画面でも決済方法の明記がある方が親切かもしれない */}
                            {/* <Grid container textAlign="center" spacing={1} >
                                <GridItem title>決済方法</GridItem>
                                <GridItem>sample</GridItem>
                            </Grid> */}

                            <ShowPayDetail
                                {...price}
                                ClickMinus={ClickMinus}
                                ClickPlus={ClickPlus} />

                            <Grid container textAlign="center" spacing={1} >
                                <GridItem title>
                                    <BtnLink onClick={() => router.push(url.back)}>戻る</BtnLink>
                                </GridItem>
                                <GridItem>
                                    <BtnLink onClick={() => router.push(url.next)} primary disabled={price.request > 0}>支払う</BtnLink>
                                </GridItem>
                            </Grid>
                        </Box>

                    </Paper>
                </Grid>

        </Grid>
        </>
    )
}