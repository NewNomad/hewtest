import { Grid, Typography } from '@mui/material'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowPrice }            from '../1atoms/ShowPrice'
import React, { useState }      from "react";

export const ShowPayDetail = ( props:{sumPay:number} ) =>{
    const { sumPay } = props

    const [costs, setCosts]             = useState(0);
    // const [requestPay, setRequestPay]   = useState(0);
    // const [change, setChange]           = useState(1000);

    const requestPay = (sumPay - costs) > 0? (sumPay - costs): 0;
    const change = (costs - sumPay)>0? (costs - sumPay): 0;

    const ClickMinus = () => { setCosts(costs - 100); };
    const ClickPlus = () => { setCosts(costs + 100); };

    return (
        <>
            <Grid container textAlign="center">
                <Grid item xs={5} height={70}>
                    <Typography>合計金額</Typography>
                </Grid>
                <Grid item xs={7} textAlign='right'>
                    <ShowPrice>{sumPay}</ShowPrice>
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
                    <ShowPrice>{requestPay}</ShowPrice>
                </Grid>

                <Grid item xs={5} height={70}>
                    <Typography>おつり</Typography>
                </Grid>
                <Grid item xs={7} textAlign='right'>
                    <ShowPrice>{change}</ShowPrice>
                </Grid>
            </Grid>

        </>
    )
}