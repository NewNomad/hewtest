import { Container }    from '@mui/system'
import { Typography }   from '@mui/material'
// import { WbSunny, WbCloudy, Umbrella, ElectricBolt, AcUnit } from '@mui/icons-material'
import useSWR           from 'swr'
import React            from 'react'

// ===================================================
// 定数
// ===================================================
const kujiraUrl:string   = 'https://api.aoikujira.com/tenki/week.php?fmt=json';      // クジラWeb API

const fetcher = (url:string) => fetch(url).then(response => response.json());

// ===================================================
// 天気表示
// ===================================================
export const ShowWeather = ( props:{ place:string } ) => {

    const info = props;
    const { data, error } = useSWR(kujiraUrl, fetcher);

    // 読み込み失敗
    if(error) return <Typography>読込失敗</Typography>

    // 読み込み中
    if(!data) return <Typography>読込中</Typography>

    // 読み込み成功
    return (
        <>
            <Typography>最高気温：{ data[info.place][0]["maxtemp"] }</Typography>
            <Typography>最低気温：{ data[info.place][0]["mintemp"] }</Typography>
            <Typography>{ data[info.place][0]["forecast"] }</Typography>
            {/* <WbSunny />
            <WbCloudy />
            <Umbrella />
            <ElectricBolt />
            <AcUnit /> */}
        </>
    )
}