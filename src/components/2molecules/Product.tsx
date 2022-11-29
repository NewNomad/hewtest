import { Button, Divider, Paper, Tooltip } from '@mui/material'
import { AcUnit } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

type Props = { OpenMInfo: () => void }

export default function Product({ OpenMInfo }: Props) {
    return (

        // <Card key={0} 
        //     sx={{
        //     }}>
        <Paper elevation={3} variant="elevation" key={0}
            sx={{
                backgroundColor: "#fff",
                // border: `2px solid #ccc `,
                borderColor: `secondary.main`,
                textAlign: "center"
            }}>
            <Tooltip title="詳細" arrow>
                <Button
                    onClick={OpenMInfo}
                    sx={{
                        width: 1,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    }}>
                    <Image src="/fanta.png" height={180} width={100} objectFit="contain"></Image>
                </Button>
            </Tooltip>
            <Divider />
            <Tooltip title="カートに追加" arrow>
                <Button color='secondary' variant="text" size='small' disableElevation startIcon={<AcUnit color="primary" />}
                    // <Button color='secondary' variant="contained" size='small' disableElevation
                    sx={{
                        // borderRadius: 10,
                        // marginBottom:0.5
                        width: 1,
                        borderStartEndRadius: 0,
                        borderStartStartRadius: 0
                    }}>
                    ¥140

                </Button>
            </Tooltip>
        </Paper>
    )
}
