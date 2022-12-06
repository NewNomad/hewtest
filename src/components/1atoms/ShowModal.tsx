import { Cancel, Close } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
    closeModal: () => void
}

// ==================================================
// モーダルのウィンドウ設定
// ==================================================
export const ShowMordal: React.FC<Props> = ({ children, closeModal }) => {
    return (
        <Paper
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
            <IconButton onClick={closeModal}>
                <Close sx={{
                    position: "absolute",
                    right: -40,
                    top: -40,
                    fontSize: 80,
                    borderRadius: 50,
                    backgroundColor: "#fff"
                }}></Close>
            </IconButton>

            {children}
        </Paper>
    )
}
