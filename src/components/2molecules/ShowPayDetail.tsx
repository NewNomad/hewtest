import { Alert, Grid, Typography }     from '@mui/material'
import { GridItem }             from '../1atoms/GridItem'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowPrice }            from '../1atoms/ShowPrice'
import React from "react";

type Props = {
    payType: number             // 支払方法区分
    sum: number                 // 合計金額
    costs: number               // 預かり金額
    request: number             // 不足額
    change: number              // おつり
    ClickMinus: () => void      // クリックイベント(マイナスボタン押下時)
    ClickPlus: () => void       // クリックイベント(プラスボタン押下時)
}

// ===================================================
// 入金確認画面 金額表示
// ===================================================-
export const ShowPayDetail = ( props:Props ) =>{

    const { payType, sum, costs, request, change, ClickMinus, ClickPlus } = props

    return (
        <>
            <Grid container sx={{ marginBottom: 5, textAlign: "center" }}>
                <GridItem title>
                    <Typography>合計金額</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice>{ sum }</ShowPrice>
                </GridItem>

                <GridItem title>
                    <Typography>{ payType == 1? 'お預かり': '残高' }</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice>
                        { payType == 1? (<ShowAmount costs={ costs } ClickMinus={ ClickMinus } ClickPlus={ ClickPlus } />): costs }
                    </ShowPrice>
                </GridItem>

                <GridItem title>
                    <Typography>残り金額</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice primary={ request > 0 } >{ request }</ShowPrice>
                </GridItem>

                {
                    payType != 1 && request > 0 ? 
                        ( <Grid item xs={12}><Alert severity='warning'>残高が不足しています。</Alert></Grid> ):
                        ( <>
                            <GridItem title>
                                <Typography>{ payType == 1? 'おつり': '支払後残高' }</Typography>
                            </GridItem>
                            <GridItem>
                                <ShowPrice>{ change }</ShowPrice>
                            </GridItem>
                        </>)
                }

            </Grid>

           
        </>
    )
}