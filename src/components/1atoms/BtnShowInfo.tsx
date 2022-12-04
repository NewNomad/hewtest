import { Info } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

type Props = {
    link: string,
    name: string
}

export const BtnShowInfo = ({ link, name }: Props) => {
    return (
        <Button
            startIcon={<Info />}
            variant="contained"
            color="primary"
            size='large'
            disableElevation
            href={link}>
            {name}
        </Button>
    )
}
