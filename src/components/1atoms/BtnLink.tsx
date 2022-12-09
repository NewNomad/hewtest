import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../types/TypeCart'
import { payState } from '../types/TypePayment'

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

    const [pay, setPay] = useRecoilState(payState)


    const handleClick = () => {
        if (payId) { // payIdがあるならば
            setPay({ payment: payId })
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