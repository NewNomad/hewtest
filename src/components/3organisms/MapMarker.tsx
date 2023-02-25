import { FmdGood } from '@mui/icons-material';
import { Box } from '@mui/system';
import React from 'react'
interface MapMarkerProps {
    lat: number;
    lng: number;
    text: string;
}

export const MapMarker: React.FC<MapMarkerProps> = ({ text }) => {
    return (
        <>
        <FmdGood />
        <Box sx={{ position: 'absolute',width: 100, color: 'red', backgroundColor:'rgba(230,230,230,0.7)', textAlign: 'center',fontSize:15,}}>

            {text}
        </Box>
        </>
    );
};