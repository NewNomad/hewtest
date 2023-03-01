// pages/api/save-canvas.js
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "20mb"
        }
    }

}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const dataURL = req.body.targetImgUri;

    const base64Image = dataURL.split(';base64,').pop();

    fs.writeFile('public/canvas.jpg', base64Image, { encoding: 'base64' }, err => {
        if (err) throw err;
        res.status(200).json({ message: 'Canvas saved' });
    });
}