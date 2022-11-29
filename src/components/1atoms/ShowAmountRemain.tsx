import { Grid, Typography }   from '@mui/material'

export const ShowAmountRemain = ({ requestPay=0 }) =>{
    return (
        <Grid container textAlign="center">
            <Grid item xs={5}>
                <Typography>残り金額</Typography>
            </Grid>
            <Grid item xs={7}>
               <Typography>{ requestPay }円</Typography>
            </Grid>
        </Grid>
    )
}