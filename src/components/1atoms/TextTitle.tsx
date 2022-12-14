import { Typography, Divider }   from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode,
    primary: boolean
}

// =========================================================
// ページ 大見出しを表示
// =========================================================
export const TextTitle = ( props: Props ) =>{

    const { children, primary } = props

    // ----------------------------------------------
    // paddingbottomの設定
    // ----------------------------------------------
    let setPb:number = 1                // モーダル見出し
    if(primary) setPb = 3               // 画面見出し

    return (
        <>
            <Typography
                variant="h4"
                color={primary?'primary':'#000'}
                textAlign="center"
                paddingTop={5}
                paddingBottom={ setPb }>{ children }</Typography>
            {!primary && (<Divider />)}
        </>
        
    )
}

TextTitle.defaultProps = {
    primary: false,
}