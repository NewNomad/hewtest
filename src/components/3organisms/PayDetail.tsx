import { Box, Button, Paper, Typography, Grid } from '@mui/material'
import { ShowPayDetail }        from '../2molecules/ShowPayDetail'
import { ButtonsPayOrReturn }   from '../2molecules/ButtonsPayOrReturn'

let sumPay:number       = 1000;
let requestPay:number   = 0;
let change:number       = 100;

export const PayDetail = () =>{
    return (
        <Box sx={{ padding:10 }}>

            <Grid container>
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
                            <ShowPayDetail 
                                sumPay={sumPay}
                                requestPay={requestPay}
                                change={change}/>
                        </Box>

                        <ButtonsPayOrReturn />
                    </Paper>
                </Grid>

            </Grid>

        </Box>
    )
}