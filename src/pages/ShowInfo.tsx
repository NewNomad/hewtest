import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { Box, Typography, Button, Grid } from '@mui/material'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import { Header } from '../components/2molecules/Header'
import { Footer } from '../components/2molecules/Footer'
import axios from 'axios';
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(response => response.json());

const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=${process.env.NEAR_API!}`

interface Props {
    onMap: boolean;
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

    // const handleClick = async () => {
    //     const data = await(await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=${process.env.NEAR_API!}`)).json()
    //     setCenter({
    //         lat: data.results[0].geometry.location.lat,
    //         lng: data.results[0].geometry.location.lng
    //     });
    //     setZoom(20);
    //     console.log(data);
    // };

    // const handleClick = () => {
    //     const { data, error } = useSWR(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=${process.env.NEAR_API!}`, fetcher);

    //     if (error) return <div>Failed to load</div>
    //     if (!data) return <div>Loading...</div>

    //     setCenter({
    //         lat: data.results[0].geometry.location.lat,
    //         lng: data.results[0].geometry.location.lng
    //     });
    //     setZoom(20);
    //     console.log(data);
    // };
    // const ShowInfo: React.FC<Props> = ({ onMap }) => {
    // ...


    // const handleClick = () => {
    //     if (error) return <div>Failed to load</div>;
    //     if (!data) return <div>Loading...</div>;

    //     setCenter({
    //         lat: data.results[0].geometry.location.lat,
    //         lng: data.results[0].geometry.location.lng
    //     });
    //     setZoom(20);
    //     console.log(data);
    // };

    const handleClick = async () => {
        const location = '-33.8670522,151.1957362';
        const radius = '1500';
        const type = 'restaurant';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        console.log(data);
        
    }



    return (
        <>
            <HeadInfo title='mopacal | 地図' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap={onMap} />

                <Box sx={{ pt: 8 }}>
                    <Box sx={{ width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 1 }}>
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.MAP_API! }}
                                center={center}
                                zoom={zoom}
                            />
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