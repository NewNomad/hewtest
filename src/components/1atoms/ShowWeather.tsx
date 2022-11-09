import { Container }    from '@mui/system'          // コンテナ
import { Typography }   from '@mui/material'        // テキスト(書式未設定)
import useSWR           from 'swr'

import React, { useEffect, useState } from 'react'

// ===================================================
// ヘッダー 天気表示
// ===================================================

const fetcher = url => fetch(url).then(r => r.json())

export const ShowWeather = () => {

    const { data, error } = useSWR('https://api.aoikujira.com/tenki/week.php?fmt=json&city=329', fetcher)

    // 読み込み失敗
    if (error) return <div>読み込み失敗</div>

    // 読み込み中
    if (!data) return <div>読み込み中</div>

    // 読み込み成功
    return (
        <>
            {JSON.stringify(data, null, 2)}
        </>
    );
}
