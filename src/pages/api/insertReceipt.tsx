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
export default async function handler(req: NextApiRequest, res: NextApiResponse,) {

    const date = new Date()
    // const receiptId = date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getSeconds()
    // const buytime = date.getFullYear() - date.getMonth() - date.getDate()

    let req_product_id: string  = req.body.product_id as string;    // 商品ID
    let req_quantity: string    = req.body.quantity as string;      // 取引個数
    let req_payment:string      = req.body.payment as string;       // 入金額
    let req_amount: string      = req.body.amount as string;        // 売値

    let product_id: string[]    = req_product_id.split(",")
    let quantity: string[]      = req_quantity.split(",")
    // let payment: string[]       = req_payment.split(",")
    let amount: string[]        = req_amount.split(",")

    console.log(date)
    // console.log(receiptId)
    // console.log(buytime)
    console.log(product_id)
    console.log(quantity)
    console.log(req_payment)
    console.log(amount)

    // 領収TBL(実行1回)
    // const result = await db.query(`
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
    //             ${receiptId},
    //             1,
    //             ${req.body.payment},
    //             ${buytime},
    //             now(),
    //             now(),
    //             1
    //         );
    // `);

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
    //             1,                       // Todo:顧客ID= 1(ゲスト)とする
    //             ${req.query.receipt_payment},
    //             ${f_receipt_buy_time},
    //             ${req.query.receipt_buy_time},
    //             now(),
    //             now(),
    //             1                        // Todo:予約システム使用時は1に変更できるように改変
    //         );


    // 取引TBL(実行複数回)
    // Todo:現在考え中
    // const result_transactions = await db.query(`
    //     INSERT INTO
    //         t_transactions(
    //             f_receipt_id,
    //             f_product_id,
    //             f_transaction_quantity,
    //             f_transaction_amount)
    //         VALUES(
    //             ${req.query.receipt_id},
    //             ${req.query.product_id},
    //             ${req.query.transaction_quantity},
    //             ${req.query.transaction_amount}
    //     );
    // `);

    // return res.status(200).json(result)

    return res.status(200).json({ status: "suceess" })
}
