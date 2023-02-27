import type { NextApiRequest, NextApiResponse } from 'next';
import { TypeProducts }                         from '../../components/types/TypeProducts'
import { TypeMarketingData }                    from '../../components/types/TypeMarketingData'
import { db }                                   from './connectDB'
// import { log }               from 'console';

// ===================================================
// 関数
// ===================================================
// 数値整形(任意の桁数で0埋め)
function compDigit(value:number, digit:number){ return ("000"+ value).slice( digit * -1 ) }

// ===================================================
// 決済情報登録
// ===================================================-
export default async function handler(req: NextApiRequest, res: NextApiResponse,) {
    // ----------------------------------------------------
    // 値の取得
    // ----------------------------------------------------
    const product: TypeProducts[]       = req.body.products as TypeProducts[]       // 商品情報
    const marketing: TypeMarketingData  = req.body.marketing as TypeMarketingData   // マーケティング用情報
    
    const date  = new Date()
    const year  = date.getFullYear().toString()
    const month = compDigit((date.getMonth() + 1), 2).toString()
    const day   = compDigit(date.getDate(), 2).toString()

    // 領収ID
    const buyDate = year.slice(-2) + month + day                // 領収ID(YYmmdd)
    const buyId:{ cnt:number }[] = await db.query(`
        SELECT
            count(*)    AS cnt
        FROM
            t_receipts
        WHERE
            f_receipt_id LIKE \"0${buyDate}%\";`)               // 領収ID(XXX)
    const receiptId     = buyDate + compDigit(buyId[0].cnt, 4)  // 領収ID(YYmmddXXX)

    const customerId    = marketing.customerId                  // 顧客ID
    const payment       = req.body.payment as string            // 領収入金金額
    const buyTime       = year + "-" + month + "-" + day        // 領収購入日(YYYY-MM-dd)
    const payInfo       = req.body.payInfo as number            // 領収入金方法

    const startTime     = marketing.getDataDt                   // 操作開始時間
    const temperature   = marketing.temperature                 // 気温
    const humidity      = marketing.humidity                    // 湿度

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
            f_receipt_temperature,
            f_receipt_humidity,
            f_pay_info_id,
            f_receipt_startusedaytime,
            f_receipt_endusedaytime,
            f_receipt_isreserved)
        VALUES(
            ${receiptId},
            ${customerId},
            ${payment},
            \"${buyTime}\",
            \"${temperature}\",
            ${humidity},
            ${payInfo},
            \"${startTime}\",
            now(),
            0
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

    let result = await db.transaction()
        .query(sql_receipts)                // 領収TBLにレコード(1件)追加
        .query(sql_transactions)            // 取引TBLにレコード(複数)追加
        .query(sql_products)                // 商品TBL.在庫個数の更新
        .rollback( (e:any) => { return res.status(400).json(result) } )
        .commit()

    // ----------------------------------------------------
    // 処理情報の返却(json)
    // ----------------------------------------------------
    return res.status(200).json(result)
    // return res.status(200).json({ status: "suceess" })
}
