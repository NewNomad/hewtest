import { Button } from '@mui/material'

type Props = {
    children: React.ReactNode,      // ボタン内表示テキスト
    onClick: () => void,            // ボタン押下時イベント
    primary: boolean,               // 重要項目
    disabled: boolean,              // 非活性
}

// =================================================
// 遷移ボタン(汎用)
// =================================================
export const BtnLink = (props: Props) => {

    const { children, onClick, primary, disabled } = props

    return (
        <Button
            variant='contained'
            color={primary ? 'primary' : 'secondary'}
            onClick={onClick}
            sx={{ width: 1, height: 1, fontSize: primary ? 40 : 20 }}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}

BtnLink.defaultProps = {
    primary: false,
    disabled: false,
}