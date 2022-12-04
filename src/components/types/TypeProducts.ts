export type TypeProducts = {
    id: number;
    name: string;
    price: number;
    isice: number;
    stock: number;
    imageURL: string;
    quantity:number; // DBにないが、カート個数かんり
}