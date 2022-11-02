import { Typography }   from '@mui/material'
import { Container }    from '@mui/system'

import React, { useState, useEffect }  from 'react'


// ===================================================
// 時間表示
// ===================================================
var nowDate = new Date();

export const ShowDate = () => {

    const [nowHour, setNowHour] = useState(nowDate.getHours().toString());
    const [nowMin, setnowMin]   = useState(nowDate.getMinutes().toString());

    useEffect( () => {
        setInterval( ()=>setNowHour(time => time=nowDate.getHours().toString()) , 1000);
    });

    useEffect( ()=> {
        setInterval( ()=> setnowMin(time => time=nowDate.getMinutes().toString()), 1000);
    })
        

    return (
        <Container>
            <Typography variant='h4' textAlign="center">
                { nowHour + ":" + nowMin }
            </Typography>
        </Container>
    )
}
