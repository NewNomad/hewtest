import { Container }    from '@mui/system'          // コンテナ
import { Typography }   from '@mui/material'        // テキスト(書式未設定)
import useSWR           from 'swr'

import React, { useEffect, useState } from 'react'

// ===================================================
// 定数
// ===================================================
// クジラWeb API
const kujiraUrl     = 'https://api.aoikujira.com/tenki/week.php?fmt=json';

// 自販機所在地
const machinePlace  = "名古屋";

// ===================================================
// ヘッダー 天気表示
// ===================================================
const fetcher = url => fetch(url).then(r => r.json())

export const ShowWeather = () => {

    const { data, error } = useSWR(kujiraUrl, fetcher);

    // 読み込み失敗
    if (error) return <div>読込失敗</div>

    // 読み込み中
    if (!data) return <div>読込中</div>

    // 読み込み成功
    return <div>{ machinePlace }：{ data[machinePlace][0]["forecast"] }</div>
}
