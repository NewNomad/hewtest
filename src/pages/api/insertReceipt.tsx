import type { NextApiRequest, NextApiResponse } from 'next';
import { TypeProducts } from '../../components/types/TypeProducts'

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
export default async function handler(req: NextApiRequest, res: NextApiResponse,) {

    const date = new Date()
    const receiptId =
        date.getMonth().toString() + 
        date.getDate().toString() + 
        date.getHours().toString() + 
        date.getMinutes().toString() +
        date.getSeconds().toString()                                        // 領収ID

    const buyTime =
        date.getFullYear().toString() + "-" +
        date.getMonth().toString() + "-" +
        date.getDate().toString()                                           // 購入日


    let product: TypeProducts[] = req.body.products as TypeProducts[]       // カート内商品情報
    let payment:string          = req.body.payment as string                // 入金額
    let payInfoId:string        = req.body.payInfoId as string              // 入金方法

    // ----------------------------------------------------
    // SQL:商品TBL
    // ----------------------------------------------------
    let sql_products: string = `
        UPDATE
            t_products
        SET
            f_product_stock =
        CASE
            f_product_id  `

    product.map((e, index) => {
        sql_products += `
            WHEN ${e.id} THEN ${e.stock - e.quantity}    `
    })

    sql_products += `
        END
        WHERE
            f_product_id IN (`

    product.map((e, index) => {
        sql_products += `${e.id}, `
    })

    sql_products = sql_products.slice(0, -2)
    sql_products += ");"

    // -------------------------------------------------------
    // SQL:領収TBL
    // -------------------------------------------------------
    let sql_receipts = `
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
            ${payment},
            \"${buyTime}\",
            now(),
            now(),
            1
        );`

    // ---------------------------------------------------
    // SQL:取引TBL
    // ---------------------------------------------------
    let sql_transactions = `
        INSERT INTO
        t_transactions(
            f_receipt_id,
            f_product_id,
            f_transaction_quantity,
            f_transaction_amount)
        VALUES`;

    product.map((e, index) => {
        sql_transactions += `
        (
            ${receiptId},
            ${e.id},
            ${e.quantity},
            ${e.price}
        ), `
    })

    sql_transactions = sql_transactions.slice(0, -2)
    sql_transactions += `;  `

    // デバッグ用表示
    console.log(`領収TBL:${sql_receipts}`)
    console.log(`取引TBL:${sql_transactions}`)
    console.log(`商品TBL:${sql_products}`)

    // SQL実行
    let result = await db.query(sql_receipts);
    if(result) result = await db.query(sql_transactions);
    if(result) result = await db.query(sql_products);

    return res.status(200).json(result)
    // return res.status(200).json({ status: "suceess" })
}
