import { AcUnit, Whatshot }                                 from '@mui/icons-material'
import { Badge, Button, Divider, Modal, Paper, Tooltip }    from '@mui/material'
import { ShowModalInfo }                                    from './ShowModalInfo'
import { TypeProducts }                                     from '../types/TypeProducts'
import { cartState, TypeCart, useCart }                     from '../types/TypeCart'
import Image                from 'next/image'
import { useRecoilState }   from 'recoil'
import React, { useState }  from 'react'

type Props = {
    proinfo: TypeProducts;
    cart: TypeCart
}

export default function Product({ proinfo }: Props) {
    const { id, name, price, stock, isice, imageURL } = proinfo

    // const TimageURL = imageURL.replace(/(\d{4})\//, "$1/$1")     // DBと名前が違ったので、暫定的におく
    const isActive: boolean = stock > 0                             // 在庫なしは選択できないようにする

    const [mordalInfo, setmordalInfo] = useState<boolean>(false)    // 商品詳細画面
    const OpenMInfo     = () => setmordalInfo(true);                // 商品詳細画面(モーダル)開く
    const CloseMInfo    = () => setmordalInfo(false);               // 商品詳細画面(モーダル)閉じる

    const { addCart } = useCart()

    const [cart] = useRecoilState(cartState)

    const quantity = cart.products.find((e, i) => e.id == id)?.quantity

    return (
        <>
            <Paper elevation={3} variant="elevation" key={0}
                sx={{
                    backgroundColor: "#fff",
                    // border: `2px solid #ccc `,
                    borderColor: `secondary.main`,
                    textAlign: "center"
                }}>

                {/* 画像部 */}
                {/* <Tooltip title="詳細" arrow> */}

                <Button
                    onClick={OpenMInfo}
                    disabled={ !isActive }
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
                        style={ !isActive ? { filter: "grayscale(100%)" } : {}}
                        alt="商品画像" />

                </Button>

                {/* </Tooltip> */}

                <Divider />

                {/* 値段部 */}
                <Tooltip title="カートに追加" arrow>

                    <Button
                        color='inherit'
                        variant="contained"
                        size='small'
                        disableElevation
                        onClick={() => addCart(proinfo)}
                        disabled={ !isActive }
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
                            fontSize:18
                        }}>
                        { price }
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