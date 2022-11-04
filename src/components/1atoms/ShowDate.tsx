import { Typography }   from '@mui/material'
import { Container }    from '@mui/system'

import React, { useState, useEffect }  from 'react'


// ===================================================
// 時間表示
// ===================================================

// 解決でき次第、TODOは削除してください
// TODO:更新の様子が微妙に怪しい(おそらく処理が重すぎる)
// TODO:二桁表記未対応

export const ShowDate = () => {

    var nowDate = new Date();

    const [nowHour, setNowHour] = useState(nowDate.getHours().toString());
    const [nowMin, setNowMin]   = useState(nowDate.getMinutes().toString());
    const [nowSec, setNowSec]   = useState(nowDate.getSeconds().toString());

    useEffect( () => {
        var nowNewDate = new Date();
        setInterval( ()=> 
        {
            // setNowHour(nowNewDate.getHours().toString());
            // setNowMin(nowNewDate.getMinutes().toString());
            // setNowSec(nowNewDate.getSeconds().toString());
        }, 1000)
    });

    return (
        <Container>
            <Typography variant='h4' textAlign="center">
                { nowHour }:{ nowMin }:{ nowSec }
            </Typography>
        </Container>
    )
}
