// Problem Link: https://www.hackerrank.com/challenges/plus-minus/problem
// Solution Author: Syed A Bilgrami (github.com/bilgrami)

function plusMinus(arr) {
    const n = arr.length
    const precision = 6

    const plus_count = arr.filter(x => x > 0).length;
    const negative_count = arr.filter(x => x < 0).length;
    const zero_count = arr.filter(x => x == 0).length;

    console.log((plus_count/n).toFixed(precision))
    console.log((negative_count/n).toFixed(precision))
    console.log((zero_count/n).toFixed(precision))
}

arr = [-4,3,-9,0,4,1]
plusMinus(arr)
