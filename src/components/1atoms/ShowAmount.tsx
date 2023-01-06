import { AddCircle, RemoveCircle }  from '@mui/icons-material'
import { IconButton }               from '@mui/material'

type Props = {
    costs: number                   // 入金額
    ClickMinus: () => void          // クリックイベント(マイナスボタン押下時)
    ClickPlus: () => void           // クリックイベント(プラスボタン押下時)
}

// =================================================
// 入金額(増減操作用ボタン付き)の表示
// =================================================
export const ShowAmount = ( props:Props ) =>{

    const { costs, ClickMinus, ClickPlus } = props

    return (
        <>
            <IconButton 
                aria-label='remove'
                size='large'
                onClick={ClickMinus}
                disabled={ costs <= 0 }>
                <RemoveCircle fontSize='large' />
            </IconButton>
            { costs }
            <IconButton
                aria-label='add'
                onClick={ClickPlus}>
                <AddCircle fontSize='large' />
            </IconButton>
        </>
    )
}