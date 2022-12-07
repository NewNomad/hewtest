import { Button } from '@mui/material'
import { useRecoilState } from 'recoil'
import { cartState } from '../types/TypeCart'

type Props = {
    children: React.ReactNode,
    onClick: () => void,
    primary: boolean,
    largeFont: boolean,
    disabled: boolean,
    payId: number
}

// =================================================
// ボタン
// =================================================
export const BtnLink = (props: Props) => {

    const { children, onClick, primary, largeFont, disabled, payId } = props

    let setFontSize: number = largeFont ? 40 : 20

    const [cart, setCart] = useRecoilState(cartState)
    if (payId) { // payIdがあるならば
        // setCart({ products: [...cart.products], payment: payId })
    }

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
    disabled: false
}