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
    port: 8889, //中尾専用
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  // console.log(req);

  const result = await db.query(`SELECT ${req.query.name} FROM t_d_morder_handy`);
  return res.status(200).json(result)
}