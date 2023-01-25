import { AcUnit, Whatshot } from '@mui/icons-material'
import { Badge, Button, Divider, Modal, Paper, Tooltip } from '@mui/material'
import { ShowModalInfo } from './ShowModalInfo'
import { TypeProducts } from '../types/TypeProducts'
import { cartState, TypeCart, useCart } from '../types/TypeCart'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import React, { useState } from 'react'

// ----------------------------------------------------
// 型宣言
// ----------------------------------------------------
type Props = {
    proinfo: TypeProducts;
    cart: TypeCart
    rank: number;
}

export default function RecommendProduct({ proinfo, rank }: Props) {

    const { id, name, price, stock, isice, imageURL } = proinfo

    // const TimageURL = imageURL.replace(/(\d{4})\//, "$1/$1")     // DBと名前が違ったので、暫定的におく
    const isActive: boolean = stock > 0                             // 在庫なしは選択できないようにする

    // 商品詳細画面(モーダル)の処理
    const [mordalInfo, setmordalInfo] = useState<boolean>(false)
    const OpenMInfo = () => setmordalInfo(true);                // 商品詳細画面(モーダル)開く
    const CloseMInfo = () => setmordalInfo(false);               // 商品詳細画面(モーダル)閉じる

    const { addCart } = useCart()

    const [cart] = useRecoilState(cartState)

    const quantity = cart.products.find((e, i) => e.id == id)?.quantity

    return (
        <>
            {/* 商品一覧画面 - 商品(一つ分)の表示 */}
            <Paper elevation={3} variant="elevation" key={0}
                sx={
                    rank == 1 ?
                        {
                            backgroundColor: "#fff",
                            border: `2px solid #ccc `,
                            borderColor: `secondary.main`,
                            textAlign: "center",
                            width: 350,
                            paddingTop: 5,
                            marginRight: 20,
                        }
                        : rank == 2 || rank == 3 || rank == 4 ?
                            {
                                backgroundColor: "#fff",
                                border: `2px solid #ccc `,
                                borderColor: `secondary.main`,
                                textAlign: "center",
                                width: 300,
                                position: 'relative',
                                top: 168,
                                left: 55,

                            }
                            : {
                                width: 100,
                            }
                }>

                {/* 画像部 */}
                {/* TODO:[hoverアクション] 選択してるかどうか分からない。画像の透明度を下げるとか色を追加するとか追加する */}


                <Tooltip title="この商品の詳細を見る" arrow>
                    <Button
                        onClick={OpenMInfo}
                        disabled={!isActive}
                        sx={{
                            width: 1,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                        }}>
                        {rank == 1 ?
                            <Badge badgeContent={1} color="primary" max={9} sx={{
                                position: "relative",
                                top: -250,
                                left: 30,
                            }} 
                            />
                            :
                            rank == 2 ?
                                <Badge badgeContent={2} color="primary" max={9} sx={{
                                    position: "relative",
                                    top: -140,
                                    left: 20,
                                }} />
                                : rank == 3 ?
                                    <Badge badgeContent={3} color="primary" max={9} sx={{
                                        position: "relative",
                                        top: -140,
                                        left: 20,
                                    }} />
                                    : rank == 4 ?
                                        <Badge badgeContent={4} color="primary" max={9} sx={{
                                            position: "relative",
                                            top: -140,
                                            left: 20,
                                        }} />
                                        : <></>
                        }
                        <Image
                            src={"/" + imageURL}
                            // height={400}
                            width={400}
                            objectFit="contain"
                            style={!isActive ? { filter: "grayscale(100%)" } : {}}
                            alt=""{
                            ...rank == 1 ?
                                {
                                    height: 622,

                                }
                                : rank == 2 || rank == 3 || rank == 4 ?
                                    {
                                        height: 550,

                                    }
                                    : {
                                        height: 200,
                                    }
                            } />

                    </Button>
                </Tooltip>

                <Divider />

                {/* 値段部 */}
                {/* TODO:[hoverアクション] 選択してるかどうか分からない。画像部まで含めて変化 もしくｈｓ */}
                <Tooltip title="この商品をカートに追加する" arrow>

                    <Button
                        color='inherit'
                        variant="contained"
                        size='large'
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
                            height: 80,
                            borderStartEndRadius: 0,
                            borderStartStartRadius: 0,
                            fontSize: 30,
                        }}>
                        {price}
                    </Button>

                </Tooltip>

            </Paper>

            {/* 商品詳細画面(モーダル) */}
            <Modal open={mordalInfo} onClose={CloseMInfo}>
                <ShowModalInfo product={proinfo} closeModal={CloseMInfo} />
            </Modal>
        </>
    )
}