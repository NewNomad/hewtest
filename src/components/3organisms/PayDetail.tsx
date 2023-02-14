import { Box, Paper, Grid }     from '@mui/material'
import { BtnLink }              from '../1atoms/BtnLink'
import { GridItem }             from '../1atoms/GridItem'
import { ShowPayDetail }        from '../2molecules/ShowPayDetail'
import { useRouter }            from 'next/router'
import React  from 'react';
import Image from 'next/image'

// ---------------------------------------------------
// 型宣言
// ---------------------------------------------------
type Props = {
    payInfoName: string
    price: {
        payType: number             // 支払方法区分
        sum: number                 // 合計金額
        costs: number               // 預かり金額
        request: number             // 不足額
        change: number              // おつり
        isNumeric: boolean
    }
    url:{
        next: string                // 次ページURL
        back: string                // 前ページURL
    }
    onChange: (event:any) => void
}

export const PayDetail = ( props:Props ) =>{

    const { payInfoName, price, url, onChange } = props

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    return (
        <Grid container spacing={3}>

            <Grid item xs={7}>
                <Box sx={{width: '100%', height: 600, padding: 10, backgroundColor: 'rgba(0,0,0,0)'}}>      
                <Image
                            src={"/mopacalwhite.png"}
                            height={500}
                            width={500}
                            objectFit="contain"
                            alt="logo" />
                </Box>
            </Grid>

            <Grid item xs={5} textAlign="center">
                <Paper sx={{width: '100%', height: 600}}>

                    <Box height={500} sx={{padding: 10}}>

                        <Grid container textAlign="center" spacing={1} >
                            <GridItem title>決済方法</GridItem>
                            <GridItem>{ payInfoName }</GridItem>
                        </Grid>

                        {/* 諸金額 */}
                        <ShowPayDetail price={price} onChange={onChange} />

                        {/* 戻る/支払 ボタン */}
                        <Grid container textAlign="center" spacing={1} >
                            <GridItem title>
                                <BtnLink onClick={() => router.push(url.back)}>戻る</BtnLink>
                            </GridItem>
                            <GridItem>
                                <BtnLink onClick={() => router.push(url.next)} primary disabled={ price.request > 0 }>支払う</BtnLink>
                            </GridItem>
                        </Grid>
                    </Box>

                </Paper>
            </Grid>

        </Grid>
    )
}