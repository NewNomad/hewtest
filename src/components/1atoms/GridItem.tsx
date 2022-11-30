import { Grid, Typography }     from '@mui/material'
import React        from 'react'

type Props = {
    children: React.ReactNode
    title: boolean
    button: boolean
}

export const GridItem = ( props: Props ) =>{

    const { children, title, button } = props

    return (
        <Grid item xs={ title?5: button?6: 7} height={70}>
            { children }
        </Grid>
    )
}

GridItem.defaultProps = {
    title: false,
    button: false,
}