import { Container, Grid }  from '@mui/material'
import { ShowMordal }       from '../1atoms/ShowModal'
import { BtnLink }          from '../1atoms/BtnLink'
import { TextTitle }        from '../1atoms/TextTitle'
import { TypePayInfos }     from '../types/TypePayInfos'
import React from 'react'

type Props = {
    children: TypePayInfos[],
    onClick: () => void,
    payType: string
}

export const ModalPayType = ( props:Props ) => {

    const { children, onClick, payType } = props

    const payTypeId:number = payType == "QR"? 3: 2;

    return (
        <ShowMordal>
            <Container>

                <TextTitle>お支払い方法の選択</TextTitle>

                <Grid container textAlign="center" spacing={1} height={500} width={1000} paddingTop={3}>

                    {
                        [...children].map((e, i) =>(
                            children[i].pay_info_type == payTypeId &&
                            (
                                <Grid key={i} item xs={4}>
                                <BtnLink
                                    onClick={onClick}
                                    primary
                                    largeFont>
                                    { children[i].pay_info_name }
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