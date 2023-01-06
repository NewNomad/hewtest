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

    const { children, title, button } = props

    // ----------------------------------------------
    // 比率設定
    // ----------------------------------------------
    let setXs:number = 7
    if(title) setXs = 5             // title:item = 5:7
    else if(button) setXs = 6;      // button:button = 6:6

    return (
        <Grid item xs={ setXs } height={70}>
            { children }
        </Grid>
    )
}

GridItem.defaultProps = {
    title: false,
    button: false,
}