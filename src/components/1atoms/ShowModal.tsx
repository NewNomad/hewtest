import { Paper } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
}

// ==================================================
// モーダルのウィンドウ設定
// ==================================================
export const ShowMordal: React.FC<Props> = ({ children }) => {
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
            {children}
        </Paper>
    )
}
