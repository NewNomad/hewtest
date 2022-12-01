import { Typography }   from '@mui/material'

type Props = {
    children: React.ReactNode
}

// =========================================================
// ページ 大見出しを表示
// =========================================================
export const TextTitle = ( props: Props ) =>{
    return (
        <Typography
            variant="h3"
            color='primary'
            textAlign="center"
            paddingBottom={3}>{ props.children }</Typography>
    )
}