import { Container }    from '@mui/system'          // コンテナ
import { Typography }   from '@mui/material'        // テキスト(書式未設定)
import dayjs            from 'dayjs'

import React, { useEffect, useState } from 'react'

// ===================================================
// ヘッダー 時間表示
// ===================================================
export const ShowDate = () => {

    // 初期値
    const [nowTime, setNowTime] = useState(dayjs());

    // 時刻更新
    useEffect( () => {
        const timeoutId = setTimeout( () => setNowTime(dayjs()), 1000 )
        return () => { clearTimeout(timeoutId) }
    }, [nowTime])

    // 表示
    return (
        <Container>
            <Typography variant='h4' textAlign="center">
                { dayjs(nowTime).format('HH:mm:ss') }
            </Typography>
        </Container>
    );
}
