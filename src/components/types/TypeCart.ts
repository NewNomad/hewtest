import { atom, RecoilState, selector, useRecoilState } from "recoil"
import { TypeProducts } from "./TypeProducts"
import { useState } from "react"
import { recoilPersist } from "recoil-persist"

// =====================================================
// カート情報
// =====================================================
// 型宣言
export type TypeCart = {
    products: TypeProducts[],       // 商品情報
    // payInfoId?: number              // 決済方法
}
const { persistAtom } = recoilPersist({
    key: "recoil-persisit",
    storage: typeof window === "undefined" ? undefined : sessionStorage
})

// デフォルト値
const initialState: TypeCart = {
    products: [],
    // payInfoId: 0
}

// カートの情報
export const cartState: RecoilState<TypeCart> = atom({
    key: "cartState",
    default: initialState,
    effects_UNSTABLE: [persistAtom]
})

// ------------------------------------------------------
// 合計金額の計算
// ------------------------------------------------------
export const totalPriceSelector = selector({
    key: "totalPriceSelector",
    get: ({ get }) => {
        const cart = get(cartState)

        return cart.products.reduce((sum, product) => {
            return sum + product.price * product.quantity;
        }, 0)
    }
})

// カスタムフック
export const useCart = () => {
    const [cart, setCart] = useRecoilState(cartState)

    // ----------------------------------------------------------------
    // カートへ追加
    // ----------------------------------------------------------------
    const addCart = (product: TypeProducts): void => {
        // カート内から選択商品の検索
        const selectItem = cart.products.find((_product) => _product.id === product.id)

        if (!selectItem) {
            // product.quantity = 1;
            setCart({
                products: [...cart.products, { ...product, quantity: 1 }]
            })
        } else {
            // カートに商品が入ってる場合

            // 在庫が足らなければだめ
            if (selectItem.stock - selectItem.quantity <= 0) {
                alert(product.name + "の在庫がありません！！")
                return
            }

            // 在庫あり
            setCart((prevCart) => {
                // 商品の購入個数+1
                return {
                    products: prevCart.products.map((_product) =>
                        _product.id === selectItem.id
                            ? { ..._product, quantity: _product.quantity + 1 }
                            : _product
                    )
                }
            })
        }
    }

    // ----------------------------------------------------------------
    // カートから減らす
    // ----------------------------------------------------------------
    const removeCart = (product: TypeProducts) => {
        const selectItem = cart.products.find((_product) => _product.id === product.id)

        // カート内に商品がない
        if (!selectItem) {
            console.warn("何でないんねん、バグっとるわ")
            return
        }

        // カート内に商品あり
        if (selectItem.quantity > 1) {
            // 購入個数の数を減らす

            // 商品の購入個数-1
            setCart((prevCart) => {
                return {
                    products: prevCart.products.map((_product) =>
                        _product.id === selectItem.id
                            ? { ..._product, quantity: _product.quantity - 1 }
                            : _product
                    )
                }
            })
        } else {
            // カートから削除

            const products = [...cart.products]

            const index = products.findIndex((product) => product.id === selectItem.id);
            if (index === -1) return

            products.splice(index, 1)

            setCart({ products })
        }

    }//カートから全削除
    const removeAllCart = () => {
        setCart(initialState)
    }
    return { addCart, removeCart, removeAllCart }
}

