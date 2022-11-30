import { Button }           from '@mui/material'
import Router               from 'next/router'

type Props = {
    children: React.ReactNode
    url: string
    primary: boolean
    disabled: boolean
}

// =================================================
// 画面遷移用ボタン(プロトタイピング用)
// =================================================
const handler = (path:string) => Router.push(path)

export const LinkButton = ( props:Props ) =>{

    const { children, url, primary, disabled } = props

    return (
        <Button
            variant='contained'
            color={ primary?'primary':'secondary' }
            onClick={()=>handler(url)}
            sx={{ width: 1, height: 1, fontSize: 20}}
            disabled={ disabled }>
            { children }
        </Button>
    )
}

LinkButton.defaultProps = {
    primary: false,
    disabled: false 
}