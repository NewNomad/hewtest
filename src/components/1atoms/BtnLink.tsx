import { Button }           from '@mui/material'
import Router               from 'next/router'

// =================================================
// 画面遷移用ボタン
// =================================================
const handler = (path:string) => Router.push(path)

export const LinkButton = ({ btnName="", url="", primary=false }) =>{

    return (
        <Button variant='contained' color={primary?'primary':'secondary'} onClick={()=>handler(url)}>
            { btnName }
        </Button>
    )
}