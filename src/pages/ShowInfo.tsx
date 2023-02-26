import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { Box, Typography, Button, Grid, Tooltip } from '@mui/material'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import { Header } from '../components/2molecules/Header'
import { Footer } from '../components/2molecules/Footer'
import axios from 'axios';
import useSWR from "swr";
import { MapMarker } from "../components/3organisms/MapMarker";
import { AccountBalance, LocalCafe, LocalHospital, LocalParking, LocalPolice, LocalPostOffice, Park, ParkOutlined, Restaurant } from "@mui/icons-material";

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

    const [data, setData] = useState<any[]>([]); // 配列であることを示すため、型アノテーションを追加

    const typeRestaurant = async () => {
        const location = '35.1709,136.8815';
        const radius = '1500';
        let type = 'restaurant';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);
    };
    const typeCafe = async () => {
        const location = '35.1709,136.8815';
        const radius = '1500';
        let type = 'cafe';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);
    };
    const typeBank = async () => {
        const location = '35.1709,136.8815';
        const radius = '1500';
        let type = 'bank';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);
    };
    const typePark = async () => {
        const location = '35.1709,136.8815';
        const radius = '1500';
        let type = 'park';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);
    };
    const typePolice = async () => {
        const location = '35.1709,136.8815';
        const radius = '1500';
        let type = 'police';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);
    };
    const typePost = async () => {
        const location = '35.1709,136.8815';
        const radius = '1500';
        let type = 'post_office';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);
    };
    const typeParking = async () => {
        const location = '35.1709,136.8815';
        const radius = '1500';
        let type = 'parking';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);
    };
    const typeDoctor = async () => {
        const location = '35.1709,136.8815';
        const radius = '1500';
        let type = 'doctor';

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results); // resultsのみを取り出すように修正
        console.log(data);
    };

    return (
        <>
            <HeadInfo title='mopacal | 地図' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap={onMap} />
                <Box sx={{height:16,pt: 10, backgroundColor: '000',position:'sticky',}}>
                    <Button onClick={typeRestaurant}><Restaurant /></Button>
                    <Button onClick={typeCafe}><LocalCafe /></Button>
                    <Button onClick={typeBank}><AccountBalance /></Button>
                    <Button onClick={typePark}><Park /></Button>
                    <Button onClick={typePolice}><LocalPolice /></Button>
                    <Button onClick={typePost}><LocalPostOffice /></Button>
                    <Button onClick={typeParking}><LocalParking /></Button>
                    <Button onClick={typeDoctor}><LocalHospital /></Button>
                </Box>

                <Box sx={{ pt: 8 }}>
                    <Box sx={{ width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 1 }}>
                        <div style={{ height: '100%', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.MAP_API! }}
                                center={center}
                                zoom={zoom}
                            >

                                {data.map((item, index) => {
                                    console.log(item.geometry.location.lat);
                                    console.log(item.geometry.location.lng);

                                    return (<MapMarker
                                        key={index}
                                        lat={item.geometry.location.lat}
                                        lng={item.geometry.location.lng}
                                        text={item.name}
                                    />
                                    )
                                })}
                            </GoogleMapReact>
                        </div>

                    </Box>
                </Box>
            </Box>

        </>
    )
};

export default ShowInfo;