import { Paper } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const ShowMordal: React.FC<Props> = ({ children }) => {
    return (
        <Paper
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                // tran
            }}
        >
            {children}
        </Paper>
    )
}
