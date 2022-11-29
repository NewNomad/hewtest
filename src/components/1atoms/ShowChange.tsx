import { Grid, Typography }   from '@mui/material'

export const ShowChange = ({ change=0 }) =>{
    return (
        <Grid container textAlign="center">
            <Grid item xs={5}>
                <Typography>おつり</Typography>
            </Grid>
            <Grid item xs={7}>
               <Typography>{ change }円</Typography>
            </Grid>
        </Grid>
    )
}