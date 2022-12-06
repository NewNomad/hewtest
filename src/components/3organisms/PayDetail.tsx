import { Box, Paper, Grid }     from '@mui/material'
import { TextTitle }            from '../1atoms/TextTitle'
import { BtnLink }              from '../1atoms/BtnLink'
import { GridItem }             from '../1atoms/GridItem'
import { ShowPayDetail }        from '../2molecules/ShowPayDetail'
import { useRouter }            from 'next/router'
import React  from 'react';

// ---------------------------------------------------
// 定数
// ---------------------------------------------------
const nextUrl:string = "/CompPay"
const backUrl:string = "/SelectPayInfo"

// ---------------------------------------------------
// 型宣言
// ---------------------------------------------------
type Props = {
    sum: number
    costs: number
    request: number
    change: number
    ClickMinus: () => void
    ClickPlus: () => void
}

export const PayDetail = ( props:Props ) =>{

    const { sum, costs, request, change, ClickMinus, ClickPlus } = props

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    return (                
        <>
            <TextTitle primary>入金処理を行っています…</TextTitle>

            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Box sx={{width: '100%', height: 600, padding: 10, backgroundColor: 'primary.main'}}>
                        [ここに画像]
                    </Box>
                </Grid>

                <Grid item xs={5} textAlign="center">
                    <Paper sx={{width: '100%', height: 600}}>

                        <Box height={500} sx={{padding: 10}}>
                            <ShowPayDetail
                                sum={sum}
                                costs={costs}
                                request={request}
                                change={change}
                                ClickMinus={ClickMinus}
                                ClickPlus={ClickPlus} />

                            <Grid container textAlign="center" padding={1} spacing={1} >
                                <GridItem button>
                                    <BtnLink onClick={() => router.push(backUrl)}>戻る</BtnLink>
                                </GridItem>
                                <GridItem button>
                                    <BtnLink onClick={() => router.push(nextUrl)} primary disabled={request > 0}>支払う</BtnLink>
                                </GridItem>
                            </Grid>
                        </Box>

                    </Paper>
                </Grid>

        </Grid>
        </>
    )
}