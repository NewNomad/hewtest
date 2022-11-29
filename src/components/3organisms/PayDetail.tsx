import { Box, Button, Paper, Typography, Grid } from '@mui/material'
import { ShowPayDetail }        from '../2molecules/ShowPayDetail'
import { ButtonsPayOrReturn }   from '../2molecules/ButtonsPayOrReturn'

let requestPay:number  = 0;
let change:number      = 100;

export const PayDetail = () =>{
    return (
        <Box sx={{ margin:5, padding:10 }}>

            <Grid container>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h3" textAlign="center" color='primary'>入金処理を行っています…</Typography>
                </Grid>

                <Grid item xs={7}>
                    <Box sx={{width: '100%', height: 400, padding: 10, backgroundColor: 'primary.main'}}>
                        [ここに画像]
                    </Box>
                </Grid>

                <Grid item xs={5} textAlign="center">
                    <Paper  sx={{width: '100%', height: 400}}>
                        <Box sx={{padding: 10}}>
                            <ShowPayDetail 
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