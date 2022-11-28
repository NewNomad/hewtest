import { Box, Button, Grid, Typography } from '@mui/material'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowAmountRemain }     from '../1atoms/ShowAmountRemain'
import { ShowChange }           from '../1atoms/ShowChange'

export const ShowCheckPayInfo = () =>{
    return (
        <Box>
            <ShowAmount/>
            <ShowAmountRemain/>
            <ShowChange/>
        </Box>
    )
}