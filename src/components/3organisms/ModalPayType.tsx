import { Container, Grid } from '@mui/material'
import { ShowMordal } from '../1atoms/ShowModal'
import { BtnLink } from '../1atoms/BtnLink'
import { TextTitle } from '../1atoms/TextTitle'
import { TypePayInfos } from '../types/TypePayInfos'
import { paymentState }         from '../types/TypePayment'
import { useRouter }        from 'next/router'
import { useRecoilState }   from 'recoil'
import React from 'react'

type Props = {
    children: TypePayInfos[],
    payType: string,
    nextUrl: string,
    closeModal: () => void
}

export const ModalPayType = (props: Props) => {
    const { children, nextUrl, payType, closeModal } = props

    const payTypeId: number = payType == "QR" ? 3 : 2

    // -----------------------------------------------
    // ルーティング
    // -----------------------------------------------
    const router = useRouter()

    // -----------------------------------------------
    // 決済方法選択
    // -----------------------------------------------
    const [pay, setPay] = useRecoilState(paymentState)
    const getPayInfoId = (value:number) => {
        setPay({ payment: 0, payInfoId: value });
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
                                        onClick={ () => getPayInfoId(e.pay_info_id) }
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