import { Button } from '@mui/material'

type Props = {
    children: React.ReactNode,
    onClick: () => void,
    primary: boolean,
    largeFont: boolean,
    disabled: boolean,
}

// =================================================
// ボタン
// =================================================
export const BtnLink = (props: Props) => {

    const { children, onClick, primary, largeFont, disabled } = props

    let setFontSize: number = largeFont ? 40 : 20

    return (
        <Button
            variant='contained'
            color={primary ? 'primary' : 'secondary'}
            onClick={onClick}
            sx={{ width: 1, height: 1, fontSize: setFontSize }}
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