import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { Box, Typography, Button, Grid } from '@mui/material'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import { Header } from '../components/2molecules/Header'
import { Footer } from '../components/2molecules/Footer'
import axios from 'axios';
import useSWR from "swr";
import { MapMarker } from "../components/3organisms/MapMarker";

const fetcher = (url: string) => fetch(url).then(response => response.json());

const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=${process.env.NEAR_API!}`

interface Props {
    onMap: boolean;

}interface Result {
    geometry: {
        location: {
            lat: number;
            lng: number;
        }
    };
    name: string;
}

const ShowInfo: React.FC<Props> = ({ onMap }) => {

    const defaultProps = {
        center: {               //初期位置
            lat: 35.1709,       //東経
            lng: 136.8815       //西経　　名古屋

        },
        zoom: 20                //拡大率
    };

    const [center, setCenter] = useState(defaultProps.center);
    const [zoom, setZoom] = useState(defaultProps.zoom);

    const [data, setData] = useState<Result[]>([]); // 配列であることを示すため、型アノテーションを追加

    const handleClick = async () => {
        const location = '-33.8670522,151.1957362';
        const radius = '1500';
        const type = 'restaurant';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);

        // console.log(data.geometry.location.lat)
        // console.log(data.geometry.location.lng)
        //                   ↑
        // Uncaught (in promise) TypeError: 
        // Cannot read properties of undefined
        //  (reading 'location')　というエラーが出た
    };

    return (
        <>
            <HeadInfo title='mopacal | 地図' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap={onMap} />

                <Box sx={{ pt: 8 }}>
                    <Box sx={{ width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 1 }}>
                        <div style={{ height: '100vh', width: '100%' }}>
                            {data && (
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: process.env.NEAR_API! }}
                                    center={center}
                                    zoom={zoom}
                                >
                                    {data.map((item, index) => (
                                        <MapMarker
                                            key={index}
                                            lat={item.geometry.location.lat}
                                            lng={item.geometry.location.lng}
                                            text={item.name}
                                        />
                                    ))}
                                </GoogleMapReact>
                            )}
                        </div>
                    </Box>
                </Box>

                <Box sx={{ pt: 8 }}>
                    <Button onClick={handleClick}>レストランを検索</Button>
                </Box>
            </Box>

        </>
    )
};

export default ShowInfo;