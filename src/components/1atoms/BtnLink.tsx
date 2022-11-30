import { Button }           from '@mui/material'
import Router               from 'next/router'

// =================================================
// 画面遷移用ボタン(プロトタイピング用)
// =================================================
const handler = (path:string) => Router.push(path)

export const LinkButton = ({ btnName="", url="", primary=false }) =>{

    return (
        <Button
            variant='contained'
            color={primary?'primary':'secondary'}
            onClick={()=>handler(url)}
            sx={{ width: 1, height: 1, fontSize: 20}}>
            { btnName }
        </Button>
    )
}