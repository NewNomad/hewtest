import { Button, Divider, Paper, Tooltip } from '@mui/material'
import { AcUnit, Whatshot } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import { TypeProducts } from '../types/TypeProducts'
import { cartState, useCart } from '../types/TypeCart'
import { useRecoilState } from 'recoil'

type Props = {
    OpenMInfo: () => void;
    proinfo: TypeProducts;
}

export default function Product({ OpenMInfo, proinfo }: Props) {
    const { id, name, price, stock, isice, imageURL } = proinfo
    // const TimageURL = imageURL.replace(/(\d{4})\//, "$1/$1") ///DBと名前が違ったので、暫定的におく

    const { addCart } = useCart()

    return (

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
                    <Image src={"/" + imageURL} height={180} width={100} objectFit="contain"></Image>
                </Button>
            </Tooltip>
            <Divider />
            <Tooltip title="カートに追加" arrow>
                <Button color='secondary' variant="text" size='small' disableElevation
                    onClick={() => addCart(proinfo)}
                    startIcon={
                        isice == 1
                            ? <AcUnit color="info" />
                            : <Whatshot color='primary'></Whatshot>
                    }
                    // <Button color='secondary' variant="contained" size='small' disableElevation
                    sx={{
                        // borderRadius: 10,
                        // marginBottom:0.5
                        width: 1,
                        borderStartEndRadius: 0,
                        borderStartStartRadius: 0
                    }}>
                    {proinfo.price}
                </Button>
            </Tooltip>
        </Paper>
    )
}
