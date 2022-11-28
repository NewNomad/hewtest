import { Button }           from '@mui/material'
import Router               from 'next/router'

// =================================================
// 画面遷移用ボタン(未完成)
// =================================================

const handler = (path:any) => Router.push(path)

export const LinkButton = ({ props:any} ) =>{

    const[color, nextPage, title] = props

    return (
        <Button variant='contained' color={color} onClick={()=>handler(nextPage)}>{ title }</Button>
    )
}