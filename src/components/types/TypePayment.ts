import { atom, RecoilState } from "recoil"
import { TypePayInfos } from "./TypePayInfos"

// =====================================================
// 入金情報
// =====================================================
// 型宣言
export type TypePayment = {
    payment: number,                // 入金額(ユーザーが入れた総額)
    payInfo: TypePayInfos,          // 決済方法
}

// デフォルト値
const initialState: TypePayment = {
    payment: 0,
    payInfo: { id: 0, name: "", type: 0, image: "", }
}

// 入金情報
export const paymentState: RecoilState<TypePayment> = atom({
    key: "paymentState",
    default: initialState
})
