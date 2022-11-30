import { Grid, Typography }   from '@mui/material'

// ================================================
// 金額テキスト
// ================================================
export const ShowPrice = ({ children }) =>{
    return <Typography variant='h6'>{ children } 円</Typography>
}