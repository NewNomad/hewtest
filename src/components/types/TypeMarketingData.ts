import { atom, RecoilState, selector, useRecoilState } from "recoil"
import { recoilPersist } from "recoil-persist"

// =====================================================
// カート情報
// =====================================================
// 型宣言
export type TypeMarketingData = {
    customerId: number,         // 顧客ID
    productId: number,          // 商品ID
    temperature: number,        // 温度
    humidity: number,           // 湿度
    getDataDt: number,          // 操作開始時間
}

const { persistAtom } = recoilPersist({
    key: "recoil-persisit",
    storage: typeof window === "undefined" ? undefined : sessionStorage
})

// デフォルト値
const initialState: TypeMarketingData = {
    customerId: 1,              // 顧客ID(ゲストユーザー)
    productId: 0,               // 商品ID
    temperature: 0,             // 温度
    humidity: 0,                // 湿度
    getDataDt: Date.now(),      // 操作開始時間
}

export const marketingDataState: RecoilState<TypeMarketingData> = atom({
    key: "marketingDataState",
    default: initialState,
    effects_UNSTABLE: [persistAtom]
})
