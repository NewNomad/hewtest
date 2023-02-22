import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string
}

// pages/api/places.js
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const { location, radius, type } = req.query;
    const placesAPIkey = process.env.PLACES_API_KEY;

    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${process.env.NEAR_API!}`);
    const data = await response.json();

    res.status(200).json(data);
}