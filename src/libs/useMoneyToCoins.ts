const useMoneyToCoins = (total: number) => {
    const coins: number[] = [500, 100, 50, 10, 5, 1]
    let remain: number = total;
    let result: number[] = []
    coins.forEach((coin, i) => {
        const num = Math.floor(remain / coin)
        remain -= num * coin
        result[i] = num
    })
    return result
}

export default useMoneyToCoins