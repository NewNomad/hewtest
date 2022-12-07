import type { NextApiRequest, NextApiResponse } from 'next';
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

    let idreq: string = req.body.id as string;
    let ids: string[] = idreq.split(",")

    let stockreq: string = req.body.stock as string
    let stocks: string[] = stockreq.split(",")

    let sql: string = "UPDATE t_products    SET f_product_stock =  ";
    sql += "CASE   f_product_id  "

    ids.map((id, index) => {
        sql += `WHEN ${id} THEN ${stocks[index]}    `
    })

    sql += "END     WHERE f_product_id      IN ("

    ids.map((id, index) => {
        sql += `${id}`

        if(ids.length -1 > index){
            sql += ", "
        }
    })

    sql += ");"

    // デバッグ用表示
    console.log(ids);
    console.log(stocks);
    console.log(sql)

    const result = await db.query(sql);

    return res.status(200).json(result)

    // return res.status(200).json({ status: "suceess" })
}
