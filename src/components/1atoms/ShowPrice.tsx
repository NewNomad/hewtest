import { Grid, Typography }   from '@mui/material'

// ================================================
// 金額テキスト
// ================================================
export const ShowPrice = ({ price=0 }) =>{
    return <Typography>{ price }円</Typography>
}