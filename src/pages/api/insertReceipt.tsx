import type { NextApiRequest, NextApiResponse } from 'next';
import { TypeProducts }         from '../../components/types/TypeProducts'
import mysql, { Transaction }   from "serverless-mysql"
// import { log }               from 'console';

function compDigit(value:number, digit:number){ return ("00"+ value).slice( digit * -1 ) }

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

export default async function handler(req: NextApiRequest, res: NextApiResponse,) {
    // ----------------------------------------------------
    // 値の取得
    // ----------------------------------------------------
    const product: TypeProducts[] = req.body.products as TypeProducts[]         // 商品情報
    
    const date  = new Date()
    const year  = date.getFullYear().toString()
    const month = compDigit((date.getMonth() + 1), 2).toString()
    const day   = compDigit(date.getDate(), 2).toString()
    
    const buyDate = year.slice(-2) + month + day                    // 領収ID(YYmmdd)
    const buyId:{ cnt:number }[] = await db.query(`
        SELECT
            count(*)    AS cnt
        FROM
            t_receipts
        WHERE
            f_receipt_id LIKE \"${buyDate}%\";`)

    const receiptId     = buyDate + compDigit(buyId[0].cnt, 3)      // 領収ID(YYmmddXXX)
    const customerId    = 1                                         // 顧客ID(1:ゲストユーザー)
    const payment       = req.body.payment as string                // 領収入金金額
    const buyTime       = year + "-" + month + "-" + day            // 領収購入日(YYYY-MM-dd)
    // const payInfo    = req.body.payInfo as TypePayment[]         // 領収入金方法             // TODO: [入金方法]領収TBLに登録する場所がない

    // TODO: [操作開始時間]取得していない
    // TODO: [気温]取得してない
    // TODO: [湿度]取得してない


    // ----------------------------------------------------
    // 更新SQL
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
            f_receipt_isreserved,
            f_receipt_temperature,
            f_receipt_humidity)
        VALUES(
            ${receiptId},
            ${customerId},
            ${payment},
            \"${buyTime}\",
            now(),
            now(),
            1,
            null,
            null
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

    // ----------------------------------------------------
    // SQL実行
    // ----------------------------------------------------
    // REVIEW: デバッグ用表示
    console.log(`領収TBL:${sql_receipts}`)
    console.log(`取引TBL:${sql_transactions}`)
    console.log(`商品TBL:${sql_products}`)

    let result = await db.query(sql_receipts);              // 領収TBLにレコード(1件)追加
    if(result) result = await db.query(sql_transactions);   // 取引TBLにレコード(複数)追加
    if(result) result = await db.query(sql_products);       // 商品TBL.在庫個数の更新

    // ----------------------------------------------------
    // 処理情報の返却(json)
    // ----------------------------------------------------
    return res.status(200).json(result)
    // return res.status(200).json({ status: "suceess" })
}
