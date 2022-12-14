import { Grid, Typography }     from '@mui/material'
import { GridItem }             from '../1atoms/GridItem'
import { ShowAmount }           from '../1atoms/ShowAmount'
import { ShowPrice }            from '../1atoms/ShowPrice'
import React from "react";

type Props = {
    sum: number
    costs: number
    request: number,
    change: number
    ClickMinus: () => void
    ClickPlus: () => void
}

export const ShowPayDetail = ( props:Props ) =>{

    const { sum, costs, request, change, ClickMinus, ClickPlus } = props

    return (
        <>
            <Grid container textAlign="center">
                <GridItem title>
                    <Typography>合計金額</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice>{ sum }</ShowPrice>
                </GridItem>

                <GridItem title>
                    <Typography>お預かり</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice>
                        <ShowAmount costs={ costs } ClickMinus={ ClickMinus } ClickPlus={ ClickPlus } />
                    </ShowPrice>
                </GridItem>

                <GridItem title>
                    <Typography>残り金額</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice primary={ request > 0 } >{ request }</ShowPrice>
                </GridItem>

                <GridItem title>
                    <Typography>おつり</Typography>
                </GridItem>
                <GridItem>
                    <ShowPrice>{ change }</ShowPrice>
                </GridItem>
            </Grid>
        </>
    )
}