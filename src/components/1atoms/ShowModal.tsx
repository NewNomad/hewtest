import { Close }                from '@mui/icons-material'
import { IconButton, Paper }    from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
    closeModal: () => void
    ref?: React.RefObject<HTMLDivElement>
}
// const ref = React.createRef<HTMLDivElement>();

// ==================================================
// モーダルのウィンドウ設定
// ==================================================
// export function ShowMordal( { children, closeModal , ref }: Props ): React.ReactElement {
export const ShowMordal = React.forwardRef<HTMLDivElement, Props>(
    function showModal ( { children, closeModal , ref }: Props ) {
        return (
            <Paper
                ref={ ref }
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

// export const ShowMordal = React.forwardRef<HTMLDivElement, Props>(
//     function showModal ( { children, closeModal , ref }: Props ) {
//         return ( <ShowModalBase closeMordal={closeModal} ref={ref}>{ children }</ShowMordalBase> )
//     }
// );
