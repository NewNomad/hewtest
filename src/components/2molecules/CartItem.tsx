import { AcUnit, Add, AddCircle, LocalDrink, Remove, RemoveCircle, Whatshot } from '@mui/icons-material'
import { Button, ButtonGroup, Grid, IconButton, List, ListItemAvatar, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import QuantityButton from '../1atoms/QuantityButton'
import { useCart } from '../types/TypeCart'
import { TypeProducts } from '../types/TypeProducts'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

type Props = {
    product: TypeProducts
}

// ====================================
// カート内アイテム情報
// ====================================
export const CartItem = ({ product }: Props) => {
    const { addCart, removeCart } = useCart()

    return (
        <Grid container padding={3} spacing={0} alignItems="center"
    
        >
            <Grid item xs={4}>
                <Paper sx={{
                    padding: 1
                }}
                >
                    <Image src={"/" + product.imageURL} height={130} width={100} objectFit="contain" alt="" />
                </Paper>
            </Grid>
            <Grid item xs={8} textAlign="center">
                <Typography variant='h6' fontWeight="bold">
                    {/* カート内のホット・アイスアイコン */}
                    {product.isice == 1
                        ? <AcUnit color="info" />
                        : <Whatshot color='primary' />}
                    {product.name}
                </Typography>

                <Container>
                    {/* <IconButton aria-label='remove' size='large'>
                        <RemoveCircle fontSize='large' />
                    </IconButton>
                    {152}
                    <IconButton aria-label='add'>
                        <AddCircle fontSize='large' />
                    </IconButton> */}
                    {/* <QuantityButton/> */}

                    <ButtonGroup variant='contained' size='small'>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button
                                onClick={() => removeCart(product)}
                            >
                                <Remove />
                            </Button>
                        </motion.div>

                        <Button variant='text' disableFocusRipple disableTouchRipple>
                            {product.quantity}
                        </Button>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button
                                onClick={() => addCart(product)}
                            >
                                <Add />
                            </Button>
                        </motion.div>
                    </ButtonGroup>
                    <Typography variant='h6' fontWeight="bold">
                        ¥{product.price} 計¥{product.price * product.quantity}

                    </Typography>
                </Container>
            </Grid>

        </Grid>
    )
}
