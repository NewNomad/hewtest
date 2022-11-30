import { Grid, Typography }   from '@mui/material'

// ================================================
// 金額テキスト
// ================================================
export const ShowAmountRemain = ({ price=0 }) =>{
    return <Typography>{ price }円</Typography>
}