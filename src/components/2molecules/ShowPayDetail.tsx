import { Grid }                 from '@mui/material'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowAmountRemain }     from '../1atoms/ShowAmountRemain'
import { ShowChange }           from '../1atoms/ShowChange'
import { LinkButton }           from '../1atoms/LinkButton'

export const ShowPayDetail = () =>{
    return (
        <>
            <ShowAmount/>
            <ShowAmountRemain/>
            <ShowChange/>

            <Grid container textAlign="center">
                <Grid item xs={6}>
                    <LinkButton btnName="戻る" url="/SelectPayInfo" />
                </Grid>
                <Grid item xs={6}>
                    <LinkButton btnName="支払う" url="/CompPay" primary />
                </Grid>
            </Grid>
        </>
    )
}