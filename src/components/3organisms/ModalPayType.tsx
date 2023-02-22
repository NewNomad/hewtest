import { Container, Grid, Modal, ListItem, ListItemText, Alert } from '@mui/material'
import { ShowMordal }           from '../1atoms/ShowModal'
import { BtnLink }              from '../1atoms/BtnLink'
import { TextTitle }            from '../1atoms/TextTitle'
import { TypePayInfos }         from '../types/TypePayInfos'
import { paymentState }         from '../types/TypePayment'
import { totalPriceSelector }   from '../types/TypeCart'
import { useRouter }            from 'next/router'
import Image                    from 'next/image'
import { useRecoilState, useRecoilValue }   from 'recoil'
import React, { useState, useRef } from 'react'
import { margin } from '@mui/system'
import { relative } from 'path'

// -----------------------------------------------------------
// 型宣言
// -----------------------------------------------------------
type Props = {
    children: TypePayInfos[],
    payType: string,
    nextUrl: string,
    closeModal: () => void
    ref?: React.RefObject<HTMLDivElement>
}

// ==========================================================
// 電子マネー決済選択画面/QRコード決済選択画面
// ==========================================================
// export const ModalPayType = (props: Props) => {
export const ModalPayType = React.forwardRef<HTMLDivElement, Props>(
    function ModalPayType(props: Props){

        const { children, nextUrl, payType, closeModal, ref } = props

        const selectRef = useRef<HTMLDivElement>(null)

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
            <ShowMordal closeModal={closeModal} ref={ref}>
                <Container>

                    <TextTitle>お支払い方法の選択</TextTitle>

                    <Grid container textAlign="center" spacing={1} height={500} width={1000} paddingTop={3}>
                        {
                            [...children].map((e, i) => (
                                e.type == payTypeId &&
                                (<Grid key={i} item xs={4}>
                                    <BtnLink onClick={ () => getPayInfoId(e) } primary>
                                        <ListItem sx={{ display:'block' }}>
                                            <ListItemText>
                                                <p style={{ fontSize: 25, fontWeight: 'bold', textAlign:'center' }}>{ e.name }</p>
                                            </ListItemText>
                                        { e.image && (
                                            <ListItemText>
                                                <figure style={{ width: '100px', height: '100px', position: 'relative', left:'15%' }}>
                                                    <Image src={"/pay_logo/"+ e.image} alt="" width={100} height={100}/>
                                                </figure>
                                            </ListItemText>)
                                        }
                                        </ListItem>
                                    </BtnLink>
                                </Grid>)
                            ))
                        }
                    </Grid>

                </Container>

                <Modal open={mordal} onClose={Close} >
                    <ShowMordal closeModal={Close} ref={selectRef}>
                        <Container>
                            <TextTitle>お支払方法：{pay.payInfo.name}</TextTitle>
                            <figure style={{ width: '100px', height: '100px', position: 'relative', left:'20%' }}>
                                <Image
                                src={"/pay_logo/"+ pay.payInfo.image}
                                alt=""
                                width={100}
                                height={100}/>
                            </figure>
                            <Alert severity='info' sx={{ marginBottom: '20px' }}>読み取り機にかざしてください</Alert>
                            <BtnLink onClick={ () => router.push(nextUrl) } primary>決定</BtnLink>
                        </Container>
                    </ShowMordal>
                </Modal>

            </ShowMordal >
        )
    }
)