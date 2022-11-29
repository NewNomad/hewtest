import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const QuantityButton=()=> {
    const [count, setCount] = useState(1);
    const MinusClick = () => {
        setCount(count - 1);
    };
    const PlusClick = () => {
        setCount(count + 1);
    };
    return (
        <Box>
            <Button 
                variant="outlined"
                sx={{ p: 1,m:1,}} 
                className="MinusButton" 
                onClick={MinusClick}>
                    -
            </Button>
            {count}
            <Button 
                variant="outlined" 
                sx={{ p: 1,m:1 }}  
                className="PlusButton" 
                onClick={PlusClick}>
                    +
            </Button>
        </Box>
    );
}
export default QuantityButton;