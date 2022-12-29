import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from "serverless-mysql"
// import { log } from 'console';

// ----------------------------------------------------
// DB接続
// ----------------------------------------------------
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT ?? "3306"),
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

// ===================================================
// 決済方法取得
// ===================================================-
export default async function handler( req: NextApiRequest, res: NextApiResponse,){

    // ----------------------------------------------------
    // SQLの実行
    // ----------------------------------------------------
    const result = await db.query(`
        SELECT 
            f_pay_info_id       AS pay_info_id,
            f_pay_info_name     AS pay_info_name,
            f_pay_info_type     AS pay_info_type
        FROM
            t_pay_infos
        ORDER BY
            pay_info_id
        ;
    `);

    // ----------------------------------------------------
    // 処理情報の返却(json)
    // ----------------------------------------------------
    return res.status(200).json(result)
}
