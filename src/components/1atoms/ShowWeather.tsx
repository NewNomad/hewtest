import Weather                                      from '../../pages/api/weather.json'
import { TypeMarketingData, marketingDataState }    from '../types/TypeMarketingData'
import { WbSunny, WbCloudy, Umbrella, AcUnit }      from '@mui/icons-material'
import { DeviceThermostat, Opacity }                from '@mui/icons-material'
import { Typography, Stack }                        from '@mui/material'
import { useRecoilState }                           from 'recoil'
// import useSWR   from 'swr'
import React, { useEffect }    from 'react'

// ===================================================
// 定数
// ===================================================
// クジラWeb API(URL)
// const url: string = 'https://api.aoikujira.com/tenki/week.php?fmt=json';

// 天気情報をアイコンに変換
function iconWeather(value:string, key:number){
    switch(value){
        case "晴れ":    return <WbSunny key={key} />
        case "くもり":  return <WbCloudy key={key} />
        case "雨":      return <Umbrella key={key} />
        case "雪":      return <AcUnit key={key} />
        default:        return value
    }
}

// 情報の取得
// const fetcher = (url: string) => fetch(url).then(response => response.json());
function compDigit(value:number, digit:number){ return ("00"+ value).slice( digit * -1 ) }

// ===================================================
// 天気表示
// ===================================================
export const ShowWeather = () => {

    const [marketingData, setMarketingData] = useRecoilState(marketingDataState)

    useEffect(() => {
        
        const date      = new Date()
        const year      = date.getFullYear().toString()
        const month     = compDigit((date.getMonth() + 1), 2).toString()
        const day       = compDigit(date.getDate(), 2).toString()
        const hour      = compDigit(date.getHours() , 2).toString()
        const min       = compDigit(date.getMinutes(), 2).toString()
        const sec       = compDigit(date.getSeconds(), 2).toString()
        const startTime = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec

        setMarketingData({ customerId: 1, temperature: parseInt(Weather.temperature), humidity: parseInt(Weather.humidity), getDataDt: startTime } );
        console.log("【取得】天気/気温/湿度")
    },[])

    return <Stack spacing={0}>
                <Typography>
                    {
                        [...Weather.weather .split("　")].map( (e, i) => iconWeather(e, i))
                    }
                </Typography> 
                <Stack direction="row" spacing={2}>
                    <Typography><DeviceThermostat />気温:{ Weather.temperature }℃</Typography>
                    <Typography><Opacity />湿度:{ Weather.humidity }%</Typography>
                </Stack>
            </Stack> 
}