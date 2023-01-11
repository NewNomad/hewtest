import { AddShoppingCart, AcUnit, Whatshot, CurrencyYen, LocalOffer, Announcement} from '@mui/icons-material'
import { Button, Container, Grid, Rating, Typography, Chip, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import { ShowMordal }   from '../1atoms/ShowModal'
import { useCart }      from '../types/TypeCart'
import { TypeProducts } from '../types/TypeProducts'
import Image            from 'next/image'
import React            from 'react'

// ----------------------------------------------------
// 型宣言
// ----------------------------------------------------
type Props = {
    product: TypeProducts;
    closeModal: () => void
}

// ===================================================
// 商品詳細画面
// ===================================================-
export const ShowModalInfo = ({ product, closeModal }: Props) => {

    const { addCart } = useCart()

    const arrName = product.name.split(' ')

    return (
        <ShowMordal closeModal={ closeModal }>

            <Grid container spacing={1} padding={5}>

                {/* 商品画像 */}
                <Grid item xs={4}>
                    <Image
                        src={"/" + product.imageURL}
                        height={1800}
                        width={800}
                        objectFit="contain"
                        alt="" />
                </Grid>

                <Grid item xs={8}>

                    {/* 商品詳細情報 */}
                    <Container sx={{height: 430, marginTop: 10}}> 
                        <List>
                            {/* 商品名 */}
                            <ListItem>
                                <ListItemIcon>
                                    { product.isice == 1 ? <AcUnit color="info" /> : <Whatshot color='primary'/>}
                                </ListItemIcon>
                                <ListItemText>
                                        {
                                            [...arrName].map(( proName, i:number) => (
                                                <Typography variant='h4' sx={{display: 'inline-block', whiteSpace: 'nowrap', marginRight: 1}} key={i}>{ proName }</Typography>
                                            ))
                                        }
                                </ListItemText>
                            </ListItem>

                            {/* 商品金額 */}
                            <ListItem sx={{borderBottom: 1, marginBottom: 5}}>
                                <ListItemIcon>
                                    <CurrencyYen />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography variant='h3'>{ product.price }円</Typography>
                                </ListItemText>
                            </ListItem>

                            {/* タグ */}
                            <ListItem>
                                <ListItemIcon>
                                    <LocalOffer />
                                </ListItemIcon>
                                <List
                                    // sx={{ width: 300, borderLeft: 2, bgcolor: '#ccccff', color: 'blue', margin: 5, padding: 2 }}
                                    sx={{ borderLeft: 2, bgcolor: '#ccccff', color: 'blue', padding: 2 }}
                                >
                                    {
                                        product.tags.length <= 0?
                                            <ListItemText>{ `タグはまだ設定されていません` }</ListItemText>
                                            :[...product.tags].map((tag, i:number) => (
                                                <ListItemText key={i} sx={{display: 'inline-block', marginRight: 1}}>
                                                    { `#${tag}` }
                                                </ListItemText>
                                            ))
                                    }   
                                </List>
                            </ListItem>

                            {/* アレルギー表示 */}
                            <ListItem  alignItems="flex-start">
                                <ListItemIcon>
                                    <Announcement />
                                </ListItemIcon>
                                <ListItemText
                                    primary={"原材料に含まれるアレルギー物質"}
                                    secondary={
                                            product.tags.length <= 0?
                                                <ListItemText>{ `ありません` }</ListItemText>
                                            :[...product.allergens].map((allergen, i:number) => (
                                                <Chip key={i} sx={{ marginRight: 1 }} label={ allergen } />
                                            ))
                                    } />
                            </ListItem>

                            {/* <ListItem>
                                <Rating name='rate' value={3} readOnly precision={0.5} size="large" />
                            </ListItem> */}

                        </List>

                    </Container>

                    {/* 購入操作 */}
                    <Grid container item sx={{ width: "100", paddingRight: 5, textAlign: "center" }}>

                        <Grid item xs={6}>
                            {/* 購入 */}
                            {/* <Button>-</Button>
                            2
                            <Button>+</Button> */}
                            {/* <QuantityButton /> */}
                            {/* 個 */}
                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                color='primary'
                                variant="contained"
                                sx={{
                                    width: "100%",
                                    fontSize: 20,
                                    padding: 2,
                                    borderRadius: 20,
                                }}
                                startIcon={<AddShoppingCart sx={{
                                    width: 50,
                                    height: 50
                                }} />}
                                onClick={() => { addCart(product); closeModal() }} >
                                カートに追加
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </ShowMordal>
    )
}