import { Grid }                 from '@mui/material'
import { LinkButton }           from '../1atoms/LinkButton'

export const ButtonsPayOrReturn = () =>{
    return (
        <Grid container textAlign="center">
            <Grid item xs={6}>
                <LinkButton btnName="戻る" url="/SelectPayInfo" />
            </Grid>
            <Grid item xs={6}>
                <LinkButton btnName="支払う" url="/CompPay" primary />
            </Grid>
        </Grid>
    )
}