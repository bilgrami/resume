// Problem Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// Solution Author: Syed A Bilgrami (github.com/bilgrami)

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
*/

function birthdayCakeCandles(candles) {
    let candles_map = new Map()
    candles.forEach (
        x => {
            const count = candles_map.get(x) == null ? 1 : candles_map.get(x) + 1
            candles_map.set(x, count)
        }
    )
    return Math.max(...candles_map.values())
}

candles = "3 2 1 3".split(" ").map(Number)
candle_count = birthdayCakeCandles(candles)
console.log(candle_count)
