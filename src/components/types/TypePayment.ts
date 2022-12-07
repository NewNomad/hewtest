import { atom, RecoilState } from "recoil"

export type TypePayment = {
    payment: number
}

const initialState: TypePayment = {
    payment: 0
}

// カートの情報
export const payState: RecoilState<TypePayment> = atom({
    key: "payState",
    default: initialState
})

