import { Typography }   from '@mui/material'
import { Container }    from '@mui/system'
import React, { useEffect, useState } from 'react'

// ===================================================
// 時間表示
// ===================================================
export const ShowDate = () => {

    // 初期値：2022/01/01 01:01:01
    const [date, setdate] = useState<Date>(new Date(2022, 1, 1, 1, 1, 1))

    useEffect(() => { setInterval(() => setdate(new Date())) }, [])

    const keta = (val: number) => {
        return ("0" + val).slice(-2)
    }

    // 表示
    return (
        <Container>
            <Typography variant='h4' textAlign="center">
                {/* { date.toLocaleTimeString() } */}
                {keta(date.getHours()) + (date.getSeconds() % 2 == 0 ? ":" : " ") + keta(date.getMinutes())}
            </Typography>
        </Container>
    );

}
