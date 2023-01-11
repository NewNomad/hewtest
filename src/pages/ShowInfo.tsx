import React from "react";
import GoogleMapReact from 'google-map-react';
import { Box, Typography, Button, Grid } from '@mui/material'
import { HeadInfo }     from '../components/2molecules/HeadInfo'
import { Header }       from '../components/2molecules/Header'
import { Footer }       from '../components/2molecules/Footer'

export default function ShowInfo() {

    const defaultProps = {
        center: {               //初期位置
            lat: 35.1709,       //東経
            lng: 136.8815       //西経　　名古屋

        },
        zoom: 20                //拡大率
    };
    
    return (
        <>
            <HeadInfo title='mopacal | 地図' />

            <Box sx={{ flexGrow: 1 }}>
                <Header onMap />

                <Box sx={{ pt: 8 }}>
                    <Box sx={{ width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 1 }}>
                        {/*Important! Always set the container height explicitly */}
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact

                                //APIキー
                                bootstrapURLKeys={{ key: process.env.MAP_API! }} 

                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                {/* <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                /> */}
                            </GoogleMapReact>
                        </div>
                        );
                    </Box>
                </Box>
            </Box>

        </>
    )
}