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

const ShowInfo: React.FC<Props> = () => {

    const defaultProps = {
        center: {               //初期位置
            lat: 35.1709,       //東経
            lng: 136.8815       //西経　　名古屋

        },
        zoom: 16              //拡大率
    };

    const [center, setCenter] = useState(defaultProps.center);
    const [zoom, setZoom] = useState(defaultProps.zoom);

    const [data, setData] = useState<any[]>([]); // 配列であることを示すため、型アノテーションを追加

    const [buttonDisabled, setButtonDisabled] = useState(false);


    const fetchData = async (type: string) => {
        const location = '35.1709,136.8815';
        const radius = '1500';

        setButtonDisabled(true); // ボタンを無効化

        const response = await fetch(`/api/places?location=${location}&radius=${radius}&type=${type}`);
        const data = await response.json();
        setData(data.results);
        console.log(data);

        setTimeout(() => {
            setButtonDisabled(false); // 5秒後にボタンを有効化
        }, 5000);
    };



    return (
        <>
            <HeadInfo title='mopacal | 地図' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap />
                <Box sx={{
                    height: 80, pt: 5, backgroundColor: '#333', position: 'fixed', display: 'flex', width: "100%", zIndex: 998, top: 100,paddingBottom:3
                }}>
                    <Typography sx={{ color: 'orange', }
                    } > アイコンをクリックして施設検索</Typography>
                    <Button onClick={() => fetchData('restaurant')} disabled={buttonDisabled}><Tooltip title="レストラン" style={{ fontSize: 40 }}><Restaurant /></Tooltip></Button>
                    <Button onClick={() => fetchData('cafe')} disabled={buttonDisabled}><Tooltip title="カフェ" style={{ fontSize: 40 }}><LocalCafe /></Tooltip></Button>
                    <Button onClick={() => fetchData('bank')} disabled={buttonDisabled}><Tooltip title="銀行" style={{ fontSize: 40 }}><AccountBalance /></Tooltip></Button>
                    <Button onClick={() => fetchData('park')} disabled={buttonDisabled}><Tooltip title="公園" style={{ fontSize: 40 }}><Park /></Tooltip></Button>
                    <Button onClick={() => fetchData('police')} disabled={buttonDisabled}><Tooltip title="交番" style={{ fontSize: 40 }}><LocalPolice /></Tooltip></Button>
                    <Button onClick={() => fetchData('post_office')} disabled={buttonDisabled}><Tooltip title="郵便局" style={{ fontSize: 40 }}><LocalPostOffice /></Tooltip></Button>
                    <Button onClick={() => fetchData('parking')} disabled={buttonDisabled}><Tooltip title="駐車場" style={{ fontSize: 40 }}><LocalParking /></Tooltip></Button>
                    <Button onClick={() => fetchData('doctor')} disabled={buttonDisabled}><Tooltip title="病院" style={{ fontSize: 40 }}><LocalHospital /></Tooltip></Button>
                </Box >

                <Box sx={{ pt: 8 }}>
                    <Box sx={{ width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 1, position: 'absolute', bottom: 0, }}>
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
            </Box >

        </>
    )
};

export default ShowInfo;