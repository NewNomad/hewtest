import { Box, Button, Paper, Typography, Grid } from '@mui/material'
import { TextTitle }            from '../1atoms/TextTitle'
import { LinkButton }           from '../1atoms/BtnLink'
import { GridItem }             from '../1atoms/GridItem'
import { ShowPayDetail }        from '../2molecules/ShowPayDetail'
import React  from 'react';

type Props = {
    sum: number
    costs: number
    request: number,
    change: number
    ClickMinus: () => void
    ClickPlus: () => void
}

export const PayDetail = ( props:Props ) =>{

    const { sum, costs, request, change, ClickMinus, ClickPlus } = props

    return (

        <Box sx={{ my:5, mx:20 }}>

            <Grid container spacing={3}>
                <Grid item xs={12} textAlign="center">
                    <TextTitle>入金処理を行っています…</TextTitle>
                </Grid>

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
                                    <LinkButton url="/SelectPayInfo">戻る</LinkButton>
                                </GridItem>
                                <GridItem button>
                                    <LinkButton url="/CompPay" primary disabled={request > 0}>支払う</LinkButton>
                                </GridItem>
                            </Grid>
                        </Box>

                    </Paper>
                </Grid>

            </Grid>

        </Box>
    )
}