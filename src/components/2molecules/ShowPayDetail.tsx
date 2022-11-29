import { Grid, Typography } from '@mui/material'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowAmountRemain }     from '../1atoms/ShowAmountRemain'
import { ShowChange }           from '../1atoms/ShowChange'
import  React                   from 'react'

export const ShowPayDetail = ( props:{requestPay:number, change:number} ) =>{
    const { requestPay, change } = props

    return (
        <>
            <Grid container textAlign="right">
                <Grid item xs={5}>
                    <Typography>合計金額</Typography>
                </Grid>
                <Grid item xs={7}>
                <Typography>1000円</Typography>
                </Grid>
            </Grid>
            <ShowAmount/>
            <ShowAmountRemain requestPay={requestPay} />
            <ShowChange change={change} />
        </>
    )
}