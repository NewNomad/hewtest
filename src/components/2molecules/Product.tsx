import { AcUnit, Whatshot } from '@mui/icons-material'
import { Badge, Button, Divider, Modal, Paper, Tooltip } from '@mui/material'
import { ShowModalInfo } from './ShowModalInfo'
import { TypeProducts } from '../types/TypeProducts'
import { cartState, TypeCart, useCart } from '../types/TypeCart'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import React, { useState } from 'react'
import { motion } from 'framer-motion'



// ----------------------------------------------------
// 型宣言
// ----------------------------------------------------
type Props = {
    proinfo: TypeProducts;
    cart: TypeCart
}

export default function Product({ proinfo }: Props) {

    const { id, name, price, stock, isice, imageURL } = proinfo

    // const TimageURL = imageURL.replace(/(\d{4})\//, "$1/$1")     // DBと名前が違ったので、暫定的におく
    const isActive: boolean = stock > 0                             // 在庫なしは選択できないようにする
    // 商品詳細画面(モーダル)の処理
    const [mordalInfo, setmordalInfo] = useState<boolean>(false)
    const [isDragging, setisDragging] = useState<boolean>(false)

    const OpenMInfo = () => !isDragging && setmordalInfo(true);

    // 商品詳細画面(モーダル)開く
    const CloseMInfo = () => setmordalInfo(false);               // 商品詳細画面(モーダル)閉じる

    console.log(isDragging);



    const { addCart } = useCart()

    const [cart] = useRecoilState(cartState)

    const quantity = cart.products.find((e, i) => e.id == id)?.quantity

    return (
        <>

            {/* 商品一覧画面 - 商品(一つ分)の表示 */}
            <Paper elevation={3} variant="elevation" key={0}
                sx={{
                    backgroundColor: "#fff",
                    // border: `2px solid #ccc `,
                    borderColor: `secondary.main`,
                    textAlign: "center",
                    // opacity: 0.8
                }}

                component={motion.div}
                style={{
                    position: "relative"
                }}
                initial={{ zIndex: 1 }}
                whileHover={{ scale: 1.2, zIndex: 999 }}
                whileTap={{ scale: 0.9 }}
                whileDrag={{ scale: 1.2, zIndex: 1000 }}
                // onTap={OpenMInfo}

                onDragStart={() => setisDragging(true)}
                onDragEnd={() => {
                    setTimeout(() => { setisDragging(false) }, 150);
                }}
                // dragConstraints={{
                //     top: 0,
                //     left: 0,
                //     right: 0,
                //     bottom: 0
                // }}
                // dragElastic={1}
                drag
                dragSnapToOrigin
            >

                {/* 画像部 */}
                {/* TODO: [hoverアクション] 選択してるかどうか分からない。画像の透明度を下げるとか色を追加するとか追加する */}
                {/* <Tooltip title="この商品の詳細を見る" arrow> */}
                <Button
                    onClick={OpenMInfo}
                    disabled={!isActive}
                    sx={{
                        width: 1,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    }}>
                    <Badge badgeContent={quantity} color="primary" max={9} sx={{
                        position: "relative",
                        top: -65,
                        right: -75
                    }} />
                    <Image
                        src={"/" + imageURL}
                        height={180}
                        width={100}
                        objectFit="contain"
                        style={!isActive ? { filter: "grayscale(100%)" } : {}}
                        draggable={false}
                        alt="" />
                </Button>
                {/* </Tooltip> */}

                {/* <Divider /> */}
                {/* 値段部 */}
                {/* TODO: [hoverアクション] 選択してるかどうか分からない。画像部まで含めて変化 もしくｈｓ */}
                {/* <Tooltip title="この商品をカートに追加する" arrow> */}

                <Button
                    // color='inherit'
                    color="secondary"
                    variant="contained"
                    size='small'
                    disableElevation
                    onClick={() => addCart(proinfo)}
                    disabled={!isActive}
                    startIcon={
                        isice == 1
                            ? <AcUnit color={isActive ? "info" : "secondary"} />
                            : <Whatshot color={isActive ? 'primary' : "secondary"} />
                    }
                    // <Button color='secondary' variant="contained" size='small' disableElevation
                    sx={{
                        // borderRadius: 10,
                        // marginBottom:0.5
                        width: 1,
                        borderStartEndRadius: 0,
                        borderStartStartRadius: 0,
                        fontSize: 18,
                        opacity: 0.8
                    }}>
                    {price}
                </Button>

                {/* </Tooltip> */}
            </Paper>
            {/* </div> */}

            {/* 商品詳細画面(モーダル) */}
            <Modal open={mordalInfo} onClose={CloseMInfo}>
                <ShowModalInfo product={proinfo} closeModal={CloseMInfo} />
            </Modal>
        </>
    )
}
