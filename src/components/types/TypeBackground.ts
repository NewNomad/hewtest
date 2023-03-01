import { atom, RecoilState } from "recoil"
import { TypePayInfos } from "./TypePayInfos"

// =====================================================
// 入金情報
// =====================================================
// 型宣言
export type TypeBackground = {
    money: number,                // 入金額(ユーザーが入れた総額)
    pictures: string[],          // 決済方法
}

// デフォルト値
const initialState: TypeBackground = {
    money: 0,
    pictures: []
}

// 入金情報
export const backgroundState: RecoilState<TypeBackground> = atom({
    key: "backgroundState",
    default: initialState
})
