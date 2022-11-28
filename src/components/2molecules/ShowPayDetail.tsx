import { Grid, Button }                 from '@mui/material'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowAmountRemain }     from '../1atoms/ShowAmountRemain'
import { ShowChange }           from '../1atoms/ShowChange'
import { LinkButton }           from '../1atoms/LinkButton'
import Router               from 'next/router'

const handler = (path:any) => Router.push(path)

export const ShowPayDetail = () =>{
    return (
        <>
            <ShowAmount/>
            <ShowAmountRemain/>
            <ShowChange/>

            <Grid container textAlign="center">
                <Grid item xs={6}>
                    <Button variant='contained' color='secondary' onClick={()=>handler('/SelectPayInfo')}>戻る</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained' color='primary' onClick={()=>handler('/CompPay')}>決定</Button>
                </Grid>
            </Grid>
        </>
    )
}