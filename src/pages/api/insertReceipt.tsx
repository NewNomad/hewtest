import type { NextApiRequest, NextApiResponse } from 'next';
import mysql, { Transaction } from "serverless-mysql"
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

// 購入履歴登録
// insert文のメモ
export default async function handler( req: NextApiRequest, res: NextApiResponse,){

    // console.log(req);

    // 領収TBL(実行1回)
    const result = await db.query(`
        INSERT INTO
            t_receipts(
                f_receipt_id,
                f_customer_id,
                f_receipt_payment,
                f_receipt_buy_time,
                f_receipt_startusedaytime,
                f_receipt_endusedaytime,
                f_receipt_isreserved)
            VALUES(
                ${req.query.receipt_id},            // 書式:yyyyMMddXXXX
                ${req.query.customer_id},           // Todo:顧客IDの取得有無
                ${req.query.receipt_payment},
                ${req.query.receipt_buy_time},
                ${req.query.receipt_starttime},
                now(),
                0                                   // Todo:予約システム使用時は1に変更できるように改変
            );
    `);

    // 取引TBL(実行複数回)
    // Todo:現在考え中
    const result_transactions = await db.query(`
        INSERT INTO
            t_transactions(
                f_receipt_id,
                f_product_id,
                f_transaction_quantity,
                f_transaction_amount)
            VALUES(
                ${req.query.receipt_id},
                ${req.query.product_id},
                ${req.query.transaction_quantity},
                ${req.query.transaction_amount}
        );
    `);

    return res.status(200).json(result)
}
