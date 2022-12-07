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

  let sql = ""

  ids.map((id, index) => {
    let text = ""
    text += `f_product_id = ${id}`
  })


  console.log(req.body);


  // const result = await db.query(`UPDATE
  // t_products
  // SET
  // f_product_stock = ${req.query.stock}
  // WHERE
  // f_product_id = ${req.query.id}
  // `);
  // return res.status(200).json(result)

  return res.status(200).json({ status: "suceess" })
}
