import { Button, Container, Grid, Rating, Typography, List, ListItemText } from '@mui/material'
import { ShowMordal }   from '../1atoms/ShowModal'
import QuantityButton   from '../1atoms/QuantityButton'
import { useCart }      from '../types/TypeCart'
import { TypeProducts } from '../types/TypeProducts'
import Image            from 'next/image'
import React            from 'react'

type Props = {
    product: TypeProducts;
    closeModal: () => void
}


export const ShowModalInfo = ({ product, closeModal }: Props) => {
    const { addCart } = useCart()

    return (
        <ShowMordal closeModal={closeModal}>
            <Grid container direction="column" spacing={0}>
                {/* 上 */}
                <Grid container item xs={8}>
                    <Grid item xs={4}>
                        <Image src={"/" + product.imageURL} height={1800} width={800} objectFit="contain" alt="商品画像"></Image>
                    </Grid>
                    <Grid item xs={8}>
                        <Container>
                            <Typography variant='h3' >{product.name}</Typography>
                            <Typography variant='h2'>{product.price}円</Typography>
                            <List
                                sx={{ width: 200, borderLeft: 2, bgcolor: '#ccccff', color: 'blue', margin: 5, padding: 2 }}
                            >
                                <ListItemText>#甘い</ListItemText>
                                <ListItemText>#炭酸</ListItemText>
                            </List>
                            <Typography>アレルギー表示</Typography>
                            <Typography>なし</Typography>
                            <Rating
                                name='rate'
                                value={3}
                                readOnly
                                precision={0.5}
                                size="large"
                            />
                        </Container>
                    </Grid>

                </Grid>
                {/* した */}
                <Grid container item xs={4} paddingTop={2} sx={{ width: "100%" }} textAlign="center">

                    <Grid item xs={8}>

                        {/* カート：2個
                        <Button>-</Button>
                        1
                        <Button>+</Button> */}
                        {/* <QuantityButton /> */}

                    </Grid>
                    <Grid item xs={4}>
                        <Button color='primary' variant="contained"
                            onClick={() => { addCart(product); closeModal() }} >カートに追加</Button>
                    </Grid>
                </Grid>
            </Grid>
        </ShowMordal>
    )
}