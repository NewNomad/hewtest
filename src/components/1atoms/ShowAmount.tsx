import { AddCircle, RemoveCircle }  from '@mui/icons-material'
import { IconButton }               from '@mui/material'


type Props = {
    costs: number
    ClickMinus: () => void
    ClickPlus: () => void
}

export const ShowAmount = ( props:Props ) =>{

    const { costs, ClickMinus, ClickPlus } = props

    return (
        <>
            <IconButton 
                aria-label='remove'
                size='large'
                onClick={ClickMinus}
                disabled={costs <= 0}>
                <RemoveCircle fontSize='large' />
            </IconButton>
            {costs}
            <IconButton
                aria-label='add'
                onClick={ClickPlus}>
                <AddCircle fontSize='large' />
            </IconButton>
        </>
    )
}