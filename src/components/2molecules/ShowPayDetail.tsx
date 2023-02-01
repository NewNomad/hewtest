import { Alert, Grid, Typography }     from '@mui/material'
import { GridItem }             from '../1atoms/GridItem'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowPrice }            from '../1atoms/ShowPrice'
import React from "react";

type Props = {
    price: {
        payType: number             // 支払方法区分
        sum: number                 // 合計金額
        costs: number               // 預かり金額
        request: number             // 不足額
        change: number              // おつり
        isNumeric: boolean
    }
    onChange: (event:any) => void
}

// ===================================================
// 入金確認画面 金額表示
// ===================================================-
export const ShowPayDetail = ( props:Props ) =>{

    const { price, onChange } = props

    return (
        <>
            <Grid container sx={{ marginBottom: 0, textAlign: "center" }}>
                <GridItem title>
                    <Typography>合計金額</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice>{ price.sum }</ShowPrice>
                </GridItem>

                <GridItem title>
                    <Typography>{ price.payType == 1? 'お預かり': '残高' }</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice>
                        { price.payType == 1? (<ShowAmount costs={ price.costs } onChange={ onChange } error={ !price.isNumeric } />): price.costs }
                    </ShowPrice>
                </GridItem>

                <GridItem title>
                    <Typography>残り金額</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice primary={ price.request > 0 } >{ price.request }</ShowPrice>
                </GridItem>

                {
                    price.payType != 1 && price.request > 0 ? 
                        ( <Grid item xs={12}><Alert severity='warning'>残高が不足しています。</Alert></Grid> ):
                        ( <>
                            <GridItem title>
                                <Typography>{ price.payType == 1? 'おつり': '支払後残高' }</Typography>
                            </GridItem>
                            <GridItem>
                                <ShowPrice>{ price.change }</ShowPrice>
                            </GridItem>
                        </> )
                }

            </Grid>

           
        </>
    )
}