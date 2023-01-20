import { AddCircle, RemoveCircle }  from '@mui/icons-material'
import { IconButton, TextField }               from '@mui/material'

type Props = {
    costs: number                   // 入金額
    onChange: (event:any) => void
}

// =================================================
// 入金額(増減操作用ボタン付き)の表示
// =================================================
export const ShowAmount = ( props:Props ) =>{

    const { costs, onChange } = props

    return (
            <TextField
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*"}}
                defaultValue={ costs }
                onChange={ onChange }
            />
    )
}