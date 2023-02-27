import { Close }                from '@mui/icons-material'
import { IconButton, Paper }    from '@mui/material'
import React, { ComponentPropsWithoutRef } from 'react'

// ----------------------------------------------------
// 型宣言
// ----------------------------------------------------
type Props = {
    children: React.ReactNode
    closeModal: () => void
}

type refProps = ComponentPropsWithoutRef<'div'> & Props

// ==================================================
// モーダルのウィンドウ設定
// ==================================================
export const ShowModal = React.forwardRef<HTMLDivElement, refProps>(

    function showModal ( { children, closeModal }, ref ) {
        return (
            <Paper
                ref={ref}
                tabIndex={0}
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
                <IconButton
                    onClick={closeModal}
                    sx={{ position: "absolute", right: -60, top: -60, }}>
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
    }

)

