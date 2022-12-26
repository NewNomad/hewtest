import type { NextApiRequest, NextApiResponse } from 'next'
// import type { NextPage } from 'next'
// import Head              from 'next/head'
// import Image             from 'next/image'
// import styles            from '../../styles/Home.module.css'
import mysql                from "serverless-mysql"
// import { log }           from 'console';
// import { TypeProducts }     from '../../components/types/TypeProducts'

export type TypeProductInfo = {
    id: number;             // 商品ID
    name: string;           // 商品名
    price: number;          // 価格
    isice: number;          // ホット/アイス
    stock: number;          // 在庫数
    imageURL: string;       // 画像URL
    Allergens:string[];     // アレルギー情報
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
    } catch (error) {
        return error
    }
}

export default async function handler( req: NextApiRequest, res: NextApiResponse, ) {

    // 商品情報
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

    // アレルギー情報
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

    // タグ情報
    const sql_tags = `
        SELECT
            tp.f_product_id		    AS product_id,
            t.f_tag_name		    AS tag_name
        FROM
            t_tags_products		AS tp
        JOIN
            t_tags				AS t
        ON
            tp.f_tag_id = t.f_tag_id
       ORDER BY product_id;`;

    // SQLの実行
    const result_products: TypeProductInfo[]      = await db.query(sql_products)
    const result_allergens: TypeAllergenInfo[]    = await db.query(sql_allergens)
    const result_tags:TypeTagInfo[]               = await db.query(sql_tags)

    // 情報の結合
    const result = result_products.map(( product, j ) => (
        {
            ...product,
            allergens: {
                ...result_allergens.map( ( allergen, i ) => {
                    if(product.id === allergen.product_id) return allergen.allergen_name
                }).filter(v => v)
            },
            tags: {
                ...result_tags.map(( tag, j ) => {
                    if(product.id === tag.product_id) return tag.tag_name
                }).filter(v => v)
            }
        }
    ))

    console.log(result)

    return res.status(200).json(result)
}
