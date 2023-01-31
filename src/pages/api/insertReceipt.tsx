import type { NextApiRequest, NextApiResponse } from 'next';
import { TypeProducts }         from '../../components/types/TypeProducts'
import mysql, { Transaction }   from "serverless-mysql"
// import { log }               from 'console';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse,) {

    // ----------------------------------------------------
    // 値の取得
    // ----------------------------------------------------
    const date = new Date()

    // FIXME: [領収ID]14桁入らなかったため、MMddHHmmssの形式で登録中。1年後の重複があり得るためコード設計の見直しかDBの修正がいる
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
    let payment: string          = req.body.payment as string               // 入金額

    // TODO: [入金方法]領収TBLに登録する場所がない
    // let payInfo              = req.body.payInfo as TypePayment[]              // 入金方法

    // ----------------------------------------------------
    // SQL
    // ----------------------------------------------------
    // 商品TBL
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

    // 領収TBL
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

    // 取引TBL
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

    // REVIEW: デバッグ用表示
    console.log(`領収TBL:${sql_receipts}`)
    console.log(`取引TBL:${sql_transactions}`)
    console.log(`商品TBL:${sql_products}`)

    // ----------------------------------------------------
    // SQL実行
    // ----------------------------------------------------
    let result = await db.query(sql_receipts);              // 領収TBLにレコード(1件)追加
    if(result) result = await db.query(sql_transactions);   // 取引TBLにレコード(複数)追加
    if(result) result = await db.query(sql_products);       // 商品TBL.在庫個数の更新

    // ----------------------------------------------------
    // 処理情報の返却(json)
    // ----------------------------------------------------
    return res.status(200).json(result)
    // return res.status(200).json({ status: "suceess" })
}
