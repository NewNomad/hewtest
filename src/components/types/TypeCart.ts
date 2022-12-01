import { atom, RecoilState, selector, useRecoilState } from "recoil"
import { TypeProducts } from "./TypeProducts"

export type TypeCart = {
    products: TypeProducts[]


}

const initialState: TypeCart = {
    products: []
}

// カートの情報
export const cartState: RecoilState<TypeCart> = atom({
    key: "cartState",
    default: initialState
})

// 合計金額の計算
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

    // カートへ追加
    const addCart = (product: TypeProducts): void => {
        const selectItem = cart.products.find((_product) => _product.id === product.id)

        // カートに商品が入っていない場合
        if (!selectItem) {
            product.quantity = 1;
            setCart({
                products: [...cart.products, product]
            })
        }else{
            // カートに商品が入ってる場合
            setCart((prevCart)=>{
                // return{
                //     products:prevCart.products.map((_product)=>
                //     _product.id===selectItem.id
                //     ?{..._product,quantity}
                //     )
                // }
            })
        }

    }

}

