import { WbSunny, WbCloudy, Umbrella, AcUnit }  from '@mui/icons-material'
import { Typography }                           from '@mui/material'
import useSWR   from 'swr'
import React    from 'react'

// ===================================================
// 定数
// ===================================================
// クジラWeb API(URL)
const url: string = 'https://api.aoikujira.com/tenki/week.php?fmt=json';
// const url: string = './api/weather.json';

// 天気情報をアイコンに変換
function iconWeather(value:string, key:number){
    switch(value){
        case "晴":  return <WbSunny key={key}/>
        case "曇":  return <WbCloudy key={key}/>
        case "雨":  return <Umbrella key={key}/>
        case "雪":  return <AcUnit key={key}/>
        default:    return value
    }
}

// 情報の取得
const fetcher = (url: string) => fetch(url).then(response => response.json());

// ===================================================
// 天気表示
// ===================================================
export const ShowWeather = (props: { place: string }) => {

    const info = props;

    // 読込
    const { data, error } = useSWR(url, fetcher);

    // -----------------------------------------------
    // 読み込み失敗
    // -----------------------------------------------
    if (error) return <Typography>天気表示：読込失敗</Typography>

    // -----------------------------------------------
    // 読み込み中
    // -----------------------------------------------
    if (!data) return <Typography>天気表示：読込中</Typography>

    // -----------------------------------------------
    // 読み込み成功
    // -----------------------------------------------
    // 現在地の天気(文字列)
    const weather:string = data[info.place][1]["forecast"];

    return <>
            { [...weather.split("")].map( (e, i) => iconWeather(e, i) )}
            {/* { data["weather"] } */}
           </>
}