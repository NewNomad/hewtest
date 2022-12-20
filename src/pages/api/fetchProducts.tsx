import type { NextApiRequest, NextApiResponse } from 'next';
// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../../styles/Home.module.css'

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
    } catch (error) {
        return error
    }
}

export default async function handler( req: NextApiRequest, res: NextApiResponse,) {

    // console.log(req);

    // 商品情報
    const result = await db.query(`
        SELECT 
            p.f_product_id as id, 
            p.f_product_name as name, 
            p.f_product_price as price, 
            p.f_product_isice as isice, 
            p.f_product_stock as stock, 
            i.f_image_url as imageURL
        FROM 
            t_products as p 
        JOIN 
            t_images as i 
        ON 
            p.f_product_id = i.f_product_id`);

    let result_json = JSON.stringify(result, null, ' ')

    // アレルギー情報
    const result_allergens = await db.query(`
        SELECT
            ap.f_product_id      AS id,
            a.f_allergen_name    AS allergen_name
        FROM
            t_allergens_product  AS ap
        JOIN
            t_allergens          AS a
        ON
            ap.f_allergen_id = a.f_allergen_id
        ORDER BY id;`);
    // WHERE
    //     ap.f_product_id = {対象となる商品ID};

    // タグ情報
    const result_tags = await db.query(`
        SELECT
            tp.f_product_id		AS id,
            t.f_tag_name		AS tag_name
        FROM
            t_tags_products		AS tp
        JOIN
            t_tags				AS t
        ON
            tp.f_tag_id = t.f_tag_id
       ORDER BY id `);
    // WHERE
    //     tp.f_product_id = {対象となる商品ID};

    console.log(JSON.stringify(result, null, ' '))
    console.log(result_allergens)
    console.log(result_tags)

    return res.status(200).send(JSON.stringify(result, null, ' '))
}
