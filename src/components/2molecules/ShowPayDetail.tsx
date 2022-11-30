import { Grid, Typography } from '@mui/material'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowAmountRemain }     from '../1atoms/ShowAmountRemain'
import { ShowChange }           from '../1atoms/ShowChange'
import  React                   from 'react'

export const ShowPayDetail = ( props:{sumPay:number, requestPay:number, change:number} ) =>{
    const { sumPay, requestPay, change } = props

    return (
        <>
            <Grid container textAlign="center">
                <Grid item xs={5} height={70}>
                    <Typography>合計金額</Typography>
                </Grid>
                <Grid item xs={7} textAlign='right'>
                    <ShowAmountRemain price={sumPay} />
                </Grid>

                <Grid item xs={5} height={70}>
                    <Typography>お預かり</Typography>
                </Grid>
                <Grid item xs={7} textAlign='right'>
                    <ShowAmount/>
                </Grid>

                <Grid item xs={5} height={70}>
                    <Typography>残り金額</Typography>
                </Grid>
                <Grid item xs={7}  textAlign='right'>
                    <ShowAmountRemain price={requestPay} />
                </Grid>

                <Grid item xs={5} height={70}>
                    <Typography>おつり</Typography>
                </Grid>
                <Grid item xs={7} textAlign='right'>
                    <ShowAmountRemain price={change} />
                </Grid>
            </Grid>

        </>
    )
}