import { Container }    from '@mui/system'          // コンテナ
import { Typography }   from '@mui/material'        // テキスト(書式未設定)
import useSWR           from 'swr'
import React            from 'react'

// ===================================================
// 定数
// ===================================================
const kujiraUrl     = 'https://api.aoikujira.com/tenki/week.php?fmt=json';      // クジラWeb API
const machinePlace  = "名古屋";                                                  // 自販機所在地

const fetcher = (url:any) => fetch(url).then(response => response.json());

// ===================================================
// 天気表示
// ===================================================
export const ShowWeather = () => {

    const { data, error } = useSWR(kujiraUrl, fetcher);

    // 読み込み失敗
    if(error) return <>読込失敗</>

    // 読み込み中
    if(!data) return <>読込中</>

    // 読み込み成功
    return <>{ machinePlace }:{ data[machinePlace][0]["forecast"] }</>
}
