import Weather from '../../pages/api/weather.json'
import { TypeMarketingData, marketingDataState } from '../types/TypeMarketingData'
import { WbSunny, WbCloudy, Umbrella, AcUnit } from '@mui/icons-material'
import { DeviceThermostat, Opacity } from '@mui/icons-material'
import { Typography, Stack } from '@mui/material'
import { useRecoilState } from 'recoil'
// import useSWR   from 'swr'
import React, { useEffect } from 'react'

// ===================================================
// 定数
// ===================================================
// クジラWeb API(URL)
// const url: string = 'https://api.aoikujira.com/tenki/week.php?fmt=json';

// 天気情報をアイコンに変換
function iconWeather(value: string, key: number) {
    switch (value) {
        case "晴れ": return <WbSunny color="primary" key={key} />
        case "くもり": return <WbCloudy key={key} />
        case "雨": return <Umbrella color="info" key={key} />
        case "雪": return <AcUnit color="info" key={key} />
        default: return value
    }
}

// 情報の取得
// const fetcher = (url: string) => fetch(url).then(response => response.json());

// ===================================================
// 天気表示
// ===================================================
export const ShowWeather = () => {

    const [marketingData, setMarketingData] = useRecoilState(marketingDataState)

    useEffect(() => {
        setMarketingData({
            customerId: marketingData.customerId,
            temperature: Weather.temperature,
            humidity: Weather.humidity,
            getDataDt: marketingData.getDataDt
        });
        console.log(`【取得】気温:${Weather.temperature}/湿度:${Weather.humidity}`)
    }, [])

    return <Stack spacing={0}>
                <Typography>
                    {
                        [...Weather.weather .split("　")].map( (e, i) => iconWeather(e, i))
                    }
                    { Weather.weather }
                </Typography> 
                <Stack direction="row" spacing={2}>
                    <Typography><DeviceThermostat />気温:{ Weather.temperature }℃</Typography>
                    <Typography><Opacity />湿度:{ Weather.humidity }%</Typography>
                </Stack>
            </Stack> 
}