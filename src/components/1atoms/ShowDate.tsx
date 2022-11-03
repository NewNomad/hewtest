import { Container }    from '@mui/system'          // コンテナ
import { Typography }   from '@mui/material'        // テキスト(書式未設定)

import React from 'react'


// ===================================================
// ヘッダー 時間表示
// ===================================================

// ToDO：Component ⇔ ReactHooksの変換 について調査

export default class ShowDate extends React.Component {

    constructor(props) {
        super(props);

        this.state = { current: new Date().toLocaleString() };
    }

    render(){
        return(
            <Container>
                <Typography variant='h4' textAlign="center">{ this.state.current }</Typography>
            </Container>
        );
    }
}

// export const ShowDate = () => {
//     return (
//         <Container>
//             <Typography variant='h4' textAlign="center">
//                 { nowHour }:{ nowMin }:{ nowSec }
//             </Typography>
//         </Container>
//     );


