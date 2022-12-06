import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'


import mysql from "serverless-mysql"
import { log } from 'console';

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
    } catch (error) {
        return error
    }
}

export default async function handler( req: NextApiRequest, res: NextApiResponse,) {

    // console.log(req);

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

    return res.status(200).json(result)
}
