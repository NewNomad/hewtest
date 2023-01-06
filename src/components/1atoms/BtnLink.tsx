import { Button } from '@mui/material'

type Props = {
    children: React.ReactNode,      // ボタン内表示テキスト
    onClick: () => void,            // ボタン押下時イベント
    primary: boolean,               // カラー設定
    largeFont: boolean,             // テキストサイズ(大)
    disabled: boolean,              // 非活性
}

// =================================================
// 遷移ボタン(汎用)
// =================================================
export const BtnLink = (props: Props) => {

    const { children, onClick, primary, largeFont, disabled } = props

    return (
        <Button
            variant='contained'
            color={primary ? 'primary' : 'secondary'}
            onClick={onClick}
            sx={{ width: 1, height: 1, fontSize: largeFont ? 40 : 20 }}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}

BtnLink.defaultProps = {
    primary: false,
    largeFont: false,
    disabled: false,
}