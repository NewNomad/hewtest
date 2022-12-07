import { Identity } from '@mui/base';
import type { NextApiRequest, NextApiResponse } from 'next';
import { cartState } from '../../components/types/TypeCart'
import { useRecoilState, useRecoilValue } from 'recoil'
import mysql from "serverless-mysql"

// import { log } from 'console';

const portNum = process.env.MYSQL_PORT === undefined
                ? 3306
                : parseInt(process.env.MYSQL_PORT)

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: portNum,
  }
})

exports.query = async (query: any) => {
    try {
        const results = await db.query(query)
        await db.end()
        return results
    }
    catch (error) {
        return error
    }

}

export default async function handler( req: NextApiRequest, res: NextApiResponse, ) {

    // console.log(req);
    //   let sql = ""

    // デバッグ用表示
    console.log(ids);
    console.log(stocks);
    console.log(sql)

    const result = await db.query(sql);

    return res.status(200).json(result)

    // return res.status(200).json({ status: "suceess" })
}
