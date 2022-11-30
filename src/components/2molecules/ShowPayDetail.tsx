import { Grid, Typography } from '@mui/material'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowPrice }            from '../1atoms/ShowPrice'
import { LinkButton }           from '../1atoms/BtnLink'
import React, { useState }      from "react";

export const ShowPayDetail = ( props:{sumPay:number, costs: number, requestPay:number, change:number, ClickMinus, ClickPlus} ) =>{

    const { sumPay, costs, requestPay, change, ClickMinus, ClickPlus } = props

    return (
        <>
            <Grid container textAlign="center">
                <Grid item xs={5} height={70}>
                    <Typography>合計金額</Typography>
                </Grid>
                <Grid item xs={7} textAlign='right'>
                    <ShowPrice>{ sumPay }</ShowPrice>
                </Grid>

                <Grid item xs={5} height={70}>
                    <Typography>お預かり</Typography>
                </Grid>
                <Grid item xs={7} textAlign='right'>
                    <ShowPrice>
                        <ShowAmount costs={costs} ClickMinus={ClickMinus} ClickPlus={ClickPlus} />
                    </ShowPrice>
                </Grid>

                <Grid item xs={5} height={70}>
                    <Typography>残り金額</Typography>
                </Grid>
                <Grid item xs={7}  textAlign='right'>
                    <ShowPrice primary={requestPay > 0} >{ requestPay }</ShowPrice>
                </Grid>

                <Grid item xs={5} height={70}>
                    <Typography>おつり</Typography>
                </Grid>
                <Grid item xs={7} textAlign='right'>
                    <ShowPrice>{ change }</ShowPrice>
                </Grid>
            </Grid>


            <Grid container textAlign="center" padding={1} spacing={1} >
            <Grid item xs={6}>
                <LinkButton btnName="戻る" url="/SelectPayInfo" />
            </Grid>
            <Grid item xs={6}>
                <LinkButton btnName="支払う" url="/CompPay" primary disabled={requestPay > 0} />
            </Grid>
        </Grid>

        </>
    )
}