import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export const BackButton = () => {
    const ReturnPage =()=>{
        return (
            <Button onClick={ReturnPage}>back</Button>
        )
    }
}

export default BackButton