import { atom, RecoilState, selector } from "recoil"

// =====================================================
// 入金情報
// =====================================================
// 型宣言
export type TypePayment = {
    payment:number,                 // 入金額(ユーザーが入れた総額)
    payInfoId: number,              // 入金手段
}

// デフォルト値
const initialState: TypePayment = {
    payment: 0,
    payInfoId: 0
}

// 入金情報
export const paymentState: RecoilState<TypePayment> = atom({
    key: "paymentState",
    default: initialState
})
