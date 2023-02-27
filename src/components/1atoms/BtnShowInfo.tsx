import { Info } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    link: string,
    name: string
}

// =================================================
// 地図ボタン
// =================================================
export const BtnShowInfo = ({ link, name }: Props) => {
    return (
        <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            drag
            // dragConstraints={{
            //     left: 0,
            //     top: 0,
            //     right: 100,
            //     bottom: 100
            // }}
        >
            <Button
                startIcon={<Info />}
                variant="contained"
                color="primary"
                size='large'
                disableElevation
                href={link}>
                {name}
            </Button>
        </motion.div>
    )
}
