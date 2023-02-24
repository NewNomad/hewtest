import { Box } from '@mui/system';
import React from 'react'
interface MapMarkerProps {
    lat: number;
    lng: number;
    text: string;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ text }) => {
    return (
        <Box sx={{ position: 'absolute', width: 50, height: 50, color: 'white', background: 'red', textAlign: 'center',borderRadius:50, }}>
            {text}
        </Box>
    );
};