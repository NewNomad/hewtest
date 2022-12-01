import { Typography }   from '@mui/material'
import React            from 'react'

type Props = {
    children: React.ReactNode
    primary: boolean
}

// ================================================
// 金額テキスト
// ================================================
export const ShowPrice = ( props: Props ) =>{

    const { children, primary } = props

    return <Typography
                variant='h6'
                color={primary?'primary':'#000'}>
                { children }円
            </Typography>
}

ShowPrice.defaultProps = {
    primary: false,
}