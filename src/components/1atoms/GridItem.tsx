import { Grid }     from '@mui/material'
import React        from 'react'

type Props = {
    children: React.ReactNode
    title: boolean
    button: boolean
}

// =================================================
// グリッドの子要素
// =================================================
export const GridItem = ( props: Props ) =>{

    const { children, title } = props

    return (
        <Grid item xs={ title? 5: 7 } height={75}>
            { children }
        </Grid>
    )
}

GridItem.defaultProps = {
    title: false,
    button: false,
}