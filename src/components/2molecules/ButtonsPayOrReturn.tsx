import { Grid }                 from '@mui/material'
import { LinkButton }           from '../1atoms/BtnLink'

export const ButtonsPayOrReturn = () =>{
    return (
        <Grid container textAlign="center" padding={1} spacing={1} >
            <Grid item xs={6}>
                <LinkButton btnName="戻る" url="/SelectPayInfo" />
            </Grid>
            <Grid item xs={6}>
                <LinkButton btnName="支払う" url="/CompPay" primary />
            </Grid>
        </Grid>
    )
}