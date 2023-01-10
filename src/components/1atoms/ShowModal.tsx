import { Cancel, Close } from '@mui/icons-material'
import { IconButton, Paper, Modal } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
    closeModal: () => void
}
const ref = React.createRef();

// ==================================================
// モーダルのウィンドウ設定
// ==================================================
export const ShowMordal: React.FC<Props> = React.forwardRef(({ children, closeModal }, ref) => {
    const Body = (
        <Paper ref={ref}
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                // width:au
                bgcolor: "Background.paper",
                boxShadow: 24,
                p: 4
            }}
        >
            <IconButton  onClick={closeModal} sx={{
                position: "absolute",
                right: -60,
                top: -60,
            }}>
                <Close sx={{

                    fontSize: 100,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                    borderBottom: 1,
                    borderRight: 1
                }} />
            </IconButton>

            {children}
        </Paper>

    )
    return (
        <Paper>
            {Body}
        </Paper>
    )
})
