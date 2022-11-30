import { AddCircle, RemoveCircle }          from '@mui/icons-material'
import { IconButton, Grid, Typography }     from '@mui/material'
import { ShowPrice }                        from '../1atoms/ShowPrice'

export const ShowAmount = ({costs, ClickMinus, ClickPlus}) =>{
    return (
        <>
            <IconButton aria-label='remove' size='large' onClick={ClickMinus}><RemoveCircle fontSize='large' /></IconButton>
            {costs}
            <IconButton aria-label='add'  onClick={ClickPlus}><AddCircle fontSize='large' /></IconButton>
        </>
    )
}