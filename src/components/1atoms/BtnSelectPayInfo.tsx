import { Button } from '@mui/material'
import React from 'react'

type Props = {
    onClick: () => void,
    name: string
}

export const BtnSelectPayInfo = ({ onClick, name }: Props) => {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                width: 1,
                height: 1,
                fontSize: 40
            }}>
            {name}
        </Button>
    )
}
