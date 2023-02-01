import { WbSunny, WbCloudy, Umbrella, ElectricBolt, AcUnit } from '@mui/icons-material'
import { Typography }       from '@mui/material'
// import { Container }        from '@mui/system'
import useSWR   from 'swr'
import React    from 'react'

// ===================================================
// 定数
// ===================================================
// クジラWeb API URL
const kujiraUrl: string = 'https://api.aoikujira.com/tenki/week.php?fmt=json';

// 天気情報をアイコンに変換
function iconWeather(value:string){
    switch(value){
        case "晴":  return <WbSunny />
        case "曇":  return <WbCloudy />
        case "雨":  return <Umbrella />
        case "雪":  return <AcUnit />
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
    const { data, error } = useSWR(kujiraUrl, fetcher);

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
            { [...weather.split("")].map( (e, i) => iconWeather(e) )}
           </>
}