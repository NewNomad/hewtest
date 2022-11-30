import { Grid, Typography }   from '@mui/material'

// ================================================
// 金額テキスト
// ================================================
export const ShowPrice = ({children, primary = false}) =>{

    return <Typography variant='h6' color={primary?'primary':'#000'}>{ children }円</Typography>
}