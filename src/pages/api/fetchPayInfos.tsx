import type { NextApiRequest, NextApiResponse } from 'next';
import { db }                                   from './connectDB'
// import { log } from 'console';

// ===================================================
// 決済方法取得
// ===================================================-
export default async function handler( req: NextApiRequest, res: NextApiResponse,){

    // ----------------------------------------------------
    // SQLの実行
    // ----------------------------------------------------
    const result = await db.query(`
        SELECT 
            f_pay_info_id       AS id,
            f_pay_info_name     AS name,
            f_pay_info_type     AS type,
            f_pay_info_image    As image
        FROM
            t_pay_infos
        ORDER BY
            id
        ;
    `);

    // ----------------------------------------------------
    // 処理情報の返却(json)
    // ----------------------------------------------------
    return res.status(200).json(result)
}
