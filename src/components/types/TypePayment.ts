import { atom, RecoilState } from "recoil"

// =====================================================
// 入金情報
// =====================================================
// 型宣言
export type TypePayment = {
    payment:number,                 // 入金額(ユーザーが入れた総額)
    payInfoId: number,              // 入金手段
    payInfoType: number,            // 入金区分
}

// デフォルト値
const initialState: TypePayment = {
    payment: 0,
    payInfoId: 0,
    payInfoType: 0,
}

// 入金情報
export const paymentState: RecoilState<TypePayment> = atom({
    key: "paymentState",
    default: initialState
})
