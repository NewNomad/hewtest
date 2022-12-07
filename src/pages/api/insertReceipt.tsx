import type { NextApiRequest, NextApiResponse } from 'next';
import mysql, { Transaction } from "serverless-mysql"
// import { log } from 'console';

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        port: process.env.MYSQL_PORT, // 中尾専用(mac)
        // port: 3306,   // win
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
export default async function handler(req: NextApiRequest, res: NextApiResponse,) {

    // console.log(req);

    const date = new Date()
    const receiptId = date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getSeconds()
    const buytime = `${date.getFullYear}-${date.getMonth()}-${date.getDate()}`

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
                ${receiptId},
                1,
                ${req.body.payment},
                ${buytime},
                now(),
                now(),
                1
            );
    `);

    //     const resultback = await db.query(`
    //     INSERT INTO
    //         t_receipts(
    //             f_receipt_id,
    //             f_customer_id,
    //             f_receipt_payment,
    //             f_receipt_buy_time,
    //             f_receipt_startusedaytime,
    //             f_receipt_endusedaytime,
    //             f_receipt_isreserved)
    //         VALUES(
    //             ${receiptId},            // 書式:yyyyMMddXXXX
    //             1,           // Todo:顧客IDの取得有無
    //             ${req.query.receipt_payment},
    //             ${req.query.receipt_buy_time},
    //             now(),
    //             now(),
    //             1                                   // Todo:予約システム使用時は1に変更できるように改変
    //         );
    // `);

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
