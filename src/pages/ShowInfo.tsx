import React from "react";
import GoogleMapReact from 'google-map-react';
import { Box, Typography, Button, Grid } from '@mui/material'
import { HeadInfo } from '../components/2molecules/HeadInfo'
import { Header } from '../components/2molecules/Header'
import { Footer } from '../components/2molecules/Footer'

export default function Advertisment() {
    const defaultProps = {
        center: {
            lat: 35.1709,
            lng: 136.8815

        },
        zoom: 11
    };
    return (
        <>
            <HeadInfo title='mopacal | 地図' />

            <Box sx={{ flexGrow: 1 }}>
                <Header />

                <Box sx={{ pt: 8 }}>
                    <Box sx={{ width: '100%', height: 800, backgroundColor: 'primary.main', opacity: 0.6 }}>
                        {/*Important! Always set the container height explicitly */}
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyBAzmp9Vpi5MsOnuYLSq1Ix_sq8vnuSHpU" }}
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