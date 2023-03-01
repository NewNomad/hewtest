import { AcUnit, Whatshot } from '@mui/icons-material'
import { Badge, Button, Divider, Modal, Paper, Tooltip, Grid } from '@mui/material'
import { ShowModalInfo } from './ShowModalInfo'
import { TypeProducts } from '../types/TypeProducts'
import { cartState, TypeCart, useCart } from '../types/TypeCart'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import React, { useState } from 'react'
import { color, padding } from '@mui/system'
import { relative } from 'path'

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
        <Grid container spacing={0} padding={1} direction="row"
        sx={{
            position:"relative",
        }} >
            <Grid container item key={0} spacing={0} padding={0} direction="column" md={
                rank == 1 ?

                    12

                    : rank == 2 || rank == 3 || rank == 4 ?

                        9

                        :
                        0

            }>
                {/* 商品一覧画面 - 商品(一つ分)の表示 */}
                < Paper elevation={3} variant="elevation" key={0}
                    sx={
                        rank == 1 ?
                            {
                                backgroundColor: "#fff",
                                border: `2px solid #ccc `,
                                borderColor: `secondary.main`,
                                textAlign: "center",
                            }
                            : rank == 2 || rank == 3 || rank == 4 ?
                                {
                                    backgroundColor: "#fff",
                                    border: `2px solid #ccc `,
                                    borderColor: `secondary.main`,
                                    textAlign: "center",
                                    // display:"flex",
                                    // justifyContent:"right",
                                    // alignItems:"flex-end",
                                    // position:"relative",
                                    // position:"absolute",
                                    // bottom:0,
                                    // right:0,
                                    position:"relative",
                                    top:75,
                                    left:50,

                                }
                                : {
                                    width: 100,
                                }
                    }>

                    {/* 画像部 */}

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
                                <Paper sx={{
                                    backgroundColor: "#E45E00",
                                    color: "#FFF",
                                    fontSize: 30,
                                    padding: 1,
                                    width: 50,
                                }}>1
                                </Paper>
                                :
                                rank == 2 ?
                                    <Paper sx={{
                                        backgroundColor: "#E45E00",
                                        color: "#FFF",
                                        fontSize: 20,
                                        padding: 1,
                                        width: 50,
                                    }}>2</Paper>
                                    : rank == 3 ?
                                        <Paper sx={{
                                            backgroundColor: "#E45E00",
                                            color: "#FFF",
                                            fontSize: 20,
                                            padding: 1,
                                            width: 50,
                                        }}>3</Paper>
                                        : rank == 4 ?
                                            <Paper sx={{
                                                backgroundColor: "#E45E00",
                                                color: "#FFF",
                                                fontSize: 20,
                                                padding: 1,
                                                width: 50,
                                            }}>4</Paper>
                                            : <></>
                            }
                            <Image
                                src={"/" + imageURL}
                                height={400}
                                width={400}
                                objectFit="contain"
                                style={!isActive ? { filter: "grayscale(100%)" } : {}}
                                alt=""{
                                ...rank == 1 ?
                                    {
                                        // height: 622,

                                    }
                                    : rank == 2 || rank == 3 || rank == 4 ?
                                        {
                                            // height: 550,

                                        }
                                        : {
                                            // height: 200,
                                        }
                                } />

                        </Button>
                    </Tooltip>

                    <Divider />

                    {/* 値段部 */}
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

                </Paper >
            </Grid >

            {/* 商品詳細画面(モーダル) */}
            <Modal open={mordalInfo} onClose={CloseMInfo} >
                <ShowModalInfo product={proinfo} closeModal={CloseMInfo} />
            </Modal>
        </Grid>
    )
}