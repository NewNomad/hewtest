import { Button } from '@mui/material'
import { motion } from "framer-motion"

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
        <motion.div
            style={{ height: "100%" }}
            whileTap={{ scale: disabled? 1.0: 0.9 }}
            whileHover={{ scale: disabled? 1.0: 1.05 }}
            >
            <Button
                component={motion.div}
                variant='contained'
                color={primary ? 'primary' : 'secondary'}
                onClick={onClick}
                sx={{ width: 1, height: 1, fontSize: primary ? 40 : 20 }}
                disabled={disabled}
            >
                {children}
            </Button>
        </motion.div>
    )
}

BtnLink.defaultProps = {
    primary: false,
    disabled: false,
}