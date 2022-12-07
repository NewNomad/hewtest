import { Button, Divider, Modal, Paper, Tooltip } from '@mui/material'
import { AcUnit, Whatshot } from '@mui/icons-material'
import { ShowModalInfo }        from './ShowModalInfo'
import { TypeProducts }         from '../types/TypeProducts'
import { cartState, useCart }   from '../types/TypeCart'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import React, { useState } from 'react'

type Props = {
    proinfo: TypeProducts;
}

export default function Product({ proinfo }: Props) {
    const { id, name, price, stock, isice, imageURL } = proinfo

    // const TimageURL = imageURL.replace(/(\d{4})\//, "$1/$1")     // DBと名前が違ったので、暫定的におく

    const isActive: boolean = stock > 0 ? true : false

    const [mordalInfo, setmordalInfo] = useState<boolean>(false)    // 商品詳細画面

    const OpenMInfo = () => setmordalInfo(true);                    // 商品詳細画面(モーダル)開く
    const CloseMInfo = () => setmordalInfo(false);                  // 商品詳細画面(モーダル)閉じる


    const { addCart } = useCart()

    return (
        <>
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
                        disabled={isActive ? false : true}
                        sx={{
                            width: 1,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                        }}>
                        <Image
                            src={"/" + imageURL}
                            height={180}
                            width={100}
                            objectFit="contain"
                            style={ isActive == false ? { filter: "grayscale(100%)" }: {} }
                            alt="商品画像" />
                    </Button>
                </Tooltip>

                <Divider />

                <Tooltip title="カートに追加" arrow>
                    <Button color='secondary' variant="text" size='small' disableElevation
                        onClick={() => addCart(proinfo)}
                        disabled={isActive ? false : true}
                        startIcon={
                            isice == 1
                                ? <AcUnit color={isActive ? "info" : "secondary"} />
                                : <Whatshot color={isActive ? 'primary' : "secondary"} ></Whatshot>
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

            {/* 商品詳細画面(モーダル) */}
            <Modal open={mordalInfo} onClose={CloseMInfo}>
                <ShowModalInfo product={proinfo} closeModal={CloseMInfo}/>
            </Modal>
        </>
    )
}
