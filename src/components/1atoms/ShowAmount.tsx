import { AddCircle, RemoveCircle }        from '@mui/icons-material'
import { IconButton, Grid, Typography }   from '@mui/material'

export const ShowAmount = () =>{
    return (
        <Grid container textAlign="right">
            <Grid item xs={5}>
                <Typography>お預かり</Typography>
            </Grid>
            <Grid item xs={7}>
            <IconButton aria-label='remove' size='large'><RemoveCircle fontSize='large' /></IconButton>
                {1100}
                <IconButton aria-label='add'><AddCircle fontSize='large' /></IconButton>
                円
            </Grid>
        </Grid>
    )
}