import { Container, Grid }      from '@mui/material'
import { ShowMordal }           from '../1atoms/ShowModal'
import { BtnLink }              from '../1atoms/BtnLink'
import { TextTitle }            from '../1atoms/TextTitle'
import { TypePayInfos }         from '../types/TypePayInfos'
import { paymentState }         from '../types/TypePayment'
import { totalPriceSelector }   from '../types/TypeCart'
import { useRouter }            from 'next/router'
import { useRecoilState, useRecoilValue }   from 'recoil'
import React from 'react'

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
    const getPayInfoId = ( id:number, type:number ) => {
        setPay({ payment: sum, payInfoId: id, payInfoType: type });
        router.push(nextUrl)
    }

    return (
        <ShowMordal closeModal={closeModal}>
            <Container>

                <TextTitle>お支払い方法の選択</TextTitle>

                <Grid container textAlign="center" spacing={1} height={500} width={1000} paddingTop={3}>

                    {
                        [...children].map((e, i) => (
                            e.pay_info_type == payTypeId &&
                            (
                                <Grid key={i} item xs={4}>
                                    <BtnLink
                                        onClick={ () => getPayInfoId(e.pay_info_id, e.pay_info_type) }
                                        primary
                                        largeFont
                                    >
                                        {e.pay_info_name}
                                    </BtnLink>
                                </Grid>
                            )
                        ))
                    }

                </Grid>

            </Container>
        </ShowMordal >
    )
}