import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
// import { cartState } from '../types/TypeCart'
import { paymentState } from '../types/TypePayment'

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

    const [pay, setPay] = useRecoilState(paymentState)

    const handleClick = () => {
        if (payId != 0) {
            // payIdを取得
            // ToDo:payment取得については後で直す
            setPay({ payment: 0, payInfoId: payId })
        } 
        console.log(pay);

    }

    useEffect(() => {
        handleClick()
    }, [])


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
    payId: 0
}