import { Container }    from '@mui/system'             // コンテナ
import { Typography }   from '@mui/material'          // テキスト(書式未設定)

import React, { useEffect, useState } from 'react'

// ===================================================
// 時間表示
// ===================================================
export const ShowDate = () => {

    // 初期値：2022/01/01 01:01:01
    const [date, setdate] = useState<Date>(new Date(2022, 1, 1, 1, 1, 1))

    useEffect( () => { setInterval( () => setdate(new Date()) ) }, [] )

    // 表示
    return (
        <Container>
            <Typography variant='h4' textAlign="center">
                { date.toLocaleTimeString() }
            </Typography>
        </Container>
    );

}

