import { Container, Grid, Modal } from '@mui/material'
import { ShowMordal }           from '../1atoms/ShowModal'
import { BtnLink }              from '../1atoms/BtnLink'
import { TextTitle }            from '../1atoms/TextTitle'
import { TypePayInfos }         from '../types/TypePayInfos'
import { paymentState }         from '../types/TypePayment'
import { totalPriceSelector }   from '../types/TypeCart'
import { useRouter }            from 'next/router'
import Image                    from 'next/image'
import { useRecoilState, useRecoilValue }   from 'recoil'
import React, { useState } from 'react'

// -----------------------------------------------------------
// 型宣言
// -----------------------------------------------------------
type Props = {
    children: TypePayInfos[],
    payType: string,
    nextUrl: string,
    closeModal: () => void
}

// ==========================================================
// 電子マネー決済選択画面/QRコード決済選択画面
// ==========================================================
export const ModalPayType = (props: Props) => {

    const { children, nextUrl, payType, closeModal } = props

    const [mordal, setMordal] = useState<boolean>(false)
    const Open = () => setMordal(true)                     // 開く
    const Close = () => setMordal(false)                   // 閉じる

    const payTypeId: number = payType == "QR" ? 3 : 2   // 決済方法 (2:電子マネー、3:QRコード)
    const sum = useRecoilValue(totalPriceSelector)      // 合計金額

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    // -----------------------------------------------
    // 決済方法選択の処理
    // -----------------------------------------------
    const [pay, setPay] = useRecoilState(paymentState)
    const getPayInfoId = ( e:TypePayInfos ) => {
        setPay({ payment: sum, payInfo: {...e} });
        // router.push(nextUrl)
        setMordal(true)
    }

    return (
        <ShowMordal closeModal={closeModal}>
            <Container>

                <TextTitle>お支払い方法の選択</TextTitle>

                <Grid container textAlign="center" spacing={1} height={500} width={1000} paddingTop={3}>

                    {
                        [...children].map((e, i) => (
                            e.type == payTypeId &&
                            (<Grid key={i} item xs={4}>
                                <BtnLink onClick={ () => getPayInfoId(e) } primary>
                                    {/* ↓ 決済方法名 */}
                                    { e.name }

                                    {/* ↓ 画像：画像URLが取得できた時だけ表示 */}
                                    { e.image && (
                                        <figure>
                                            <Image
                                                src={"/pay_logo/"+ e.image}
                                                alt=""
                                                width={230}
                                                height={200} />
                                        </figure>) 
                                    }
                                </BtnLink>
                            </Grid>)
                        ))
                    }

                </Grid>

            </Container>

            <Modal open={mordal} onClose={Close} >
                <ShowMordal closeModal={Close}>
                    <Container>
                        <TextTitle>お支払方法：{pay.payInfo.name}</TextTitle>
                        <figure>
                            <Image
                            src={"/pay_logo/"+ pay.payInfo.image}
                            alt=""
                            width={130}
                            height={100} />
                        </figure>
                        <p>読み取り機にかざしてください</p>
                        <BtnLink onClick={ () => router.push(nextUrl) }primary>決定</BtnLink>
                    </Container>
                </ShowMordal>
            </Modal>

        </ShowMordal >
    )
}