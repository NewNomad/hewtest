import type { NextApiRequest, NextApiResponse } from 'next'
import { db }                                   from './connectDB'
// import mysql             from "serverless-mysql"
// import { log }           from 'console';
// import { TypeProducts }     from '../../components/types/TypeProducts'

// ----------------------------------------------------
// 型宣言
// ----------------------------------------------------
export type TypeProductInfo = {
    id: number;             // 商品ID
    name: string;           // 商品名
    price: number;          // 価格
    isice: number;          // ホット/アイス
    stock: number;          // 在庫数
    imageURL: string;       // 画像URL
    allergens:string[];     // アレルギー情報
    tags:string[];          // タグ情報
}

export type TypeAllergenInfo = {
    product_id: number;     // 商品ID
    allergen_name: string;  // アレルギー名
}

export type TypeTagInfo = {
    product_id: number;     // 商品ID
    tag_name: string;       // タグ名
}

// ===================================================
// 商品情報取得
// ===================================================-
export default async function handler( req: NextApiRequest, res: NextApiResponse, ) {

    // ----------------------------------------------------
    // SQL
    // ----------------------------------------------------
    // 商品TBL
    const sql_products = `
        SELECT 
            p.f_product_id          AS id, 
            p.f_product_name        AS name, 
            p.f_product_price       AS price, 
            p.f_product_isice       AS isice, 
            p.f_product_stock       AS stock, 
            i.f_image_url           AS imageURL
        FROM 
            t_products  AS p 
        JOIN 
            t_images    AS i 
        ON 
            p.f_product_id = i.f_product_id`;

    // 商品-アレルギー連関TBL
    const sql_allergens = `
        SELECT
            ap.f_product_id         AS product_id,
            a.f_allergen_name       AS allergen_name
        FROM
            t_allergens_product  AS ap
        JOIN
            t_allergens          AS a
        ON
            ap.f_allergen_id = a.f_allergen_id
        ORDER BY product_id;`;

    // 商品-タグ連関TBL
    const sql_tags = `
        SELECT
            tp.f_product_id         AS product_id,
            t.f_tag_name            AS tag_name
        FROM
            t_tags_products	    AS tp
        JOIN
            t_tags              AS t
        ON
            tp.f_tag_id = t.f_tag_id
       ORDER BY product_id;`;

    // ----------------------------------------------------
    // SQLの実行
    // ----------------------------------------------------
    const result_products: TypeProductInfo[]      = await db.query(sql_products)    // 商品情報取得
    const result_allergens: TypeAllergenInfo[]    = await db.query(sql_allergens)   // アレルギー情報取得
    const result_tags: TypeTagInfo[]              = await db.query(sql_tags)        // タグ情報取得

    // ----------------------------------------------------
    // 情報の結合
    // ----------------------------------------------------
    const result = result_products.map(( product, j ) => (
        {
            ...product,
            allergens: [
                ...result_allergens.map( ( allergen, i ) => {
                    if(product.id === allergen.product_id) return allergen.allergen_name
                }).filter(v => v)
            ],
            tags: [
                ...result_tags.map(( tag, j ) => {
                    if(product.id === tag.product_id) return tag.tag_name
                }).filter(v => v)
            ]
        }
    ))

    // REVIEW: デバッグ用表示
    // console.log(result)

    // ----------------------------------------------------
    // 処理情報の返却(json)
    // ----------------------------------------------------
    return res.status(200).json(result)
}
