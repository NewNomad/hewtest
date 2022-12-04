export type TypeProducts = {
    id: number;
    name: string;
    price: number;
    isice: number;
    stock: number;
    imageURL: string;
    quantity:number; // DBにないが、カート個数かんり
}

// 決済方法
export type TypePayInfos = {
    pay_info_id: number;            // 決済方法ID
    pay_info_name: string;          // 決済方法名
    pay_info_type: number;          // 決済方法タイプ
}