import { AddCircle, RemoveCircle }  from '@mui/icons-material'
import { IconButton, TextField }               from '@mui/material'
import { FormControl, OutlinedInput, InputAdornment }    from    '@mui/material'

type Props = {
    costs: number                   // 入金額
    error: boolean
    onChange: (event:any) => void
}

// =================================================
// 入金額(増減操作用ボタン付き)の表示
// =================================================
export const ShowAmount = ( props:Props ) =>{

    const { costs, error, onChange } = props

    return (
        <TextField
            error={ error }
            helperText = { error && '整数のみ入力可'}
            type="number"
            sx={{ width: '120px' }}
            defaultValue={ costs }
            onChange={ onChange }
        />
    )
}