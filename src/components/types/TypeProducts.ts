// =====================================================
// 商品情報
// =====================================================
// 型宣言
export type TypeProducts = {
    id: number;             // 商品ID
    name: string;           // 商品名
    price: number;          // 価格
    isice: number;          // ホット/アイス
    stock: number;          // 在庫数
    imageURL: string;       // 画像URL
    quantity:number;        // 選択個数
    allergens: string[];    // アレルギー情報群
    tags: string[];         // タグ情報群
}