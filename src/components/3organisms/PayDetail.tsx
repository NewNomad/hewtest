import { Box, Button, Paper, Typography, Grid } from '@mui/material'
import { ShowPayDetail }        from '../2molecules/ShowPayDetail'
import React, { useState }      from "react";

let sumPay:number       = 1000;

export const PayDetail = () =>{

    const [costs, setCosts]                 = useState(0);
    // const [requestPay, setRequestPay]    = useState(0);
    // const [change, setChange]            = useState(1000);

    const requestPay = (sumPay - costs) > 0? (sumPay - costs): 0;
    const change = (costs - sumPay) > 0? (costs - sumPay): 0;

    const ClickMinus = () => { setCosts(costs - 100); };
    const ClickPlus = () => { setCosts(costs + 100); };

    return (

        <Box sx={{ padding:10 }}>

            <Grid container spacing={3}>
                <Grid item xs={12} textAlign="center">
                    <Typography
                        variant="h3"
                        color='primary'
                        textAlign="center"
                        paddingBottom={3}>入金処理を行っています…</Typography>
                </Grid>

                <Grid item xs={7}>
                    <Box sx={{width: '100%', height: 600, padding: 10, backgroundColor: 'primary.main'}}>
                        [ここに画像]
                    </Box>
                </Grid>

                <Grid item xs={5} textAlign="center">
                    <Paper  sx={{width: '100%', height: 600}}>

                        <Box height={500} sx={{padding: 10}}>
                            <ShowPayDetail sumPay={sumPay} costs={costs} requestPay={requestPay} change={change} ClickMinus={ClickMinus} ClickPlus={ClickPlus} />
                        </Box>

                    </Paper>
                </Grid>

            </Grid>

        </Box>
    )
}