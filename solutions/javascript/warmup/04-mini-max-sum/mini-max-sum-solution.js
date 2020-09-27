// Problem Link: https://www.hackerrank.com/challenges/mini-max-sum/problem
// Solution Author: Syed A Bilgrami (github.com/bilgrami)

function miniMaxSum(arr) {
    const n = arr.length
    const sum_reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sorted_arr = arr.map(Number).sort()

    const min_sum = sorted_arr.slice(0,n-1).reduce(sum_reducer)
    const max_sum = sorted_arr.slice(1,n).reduce(sum_reducer)

    console.log(`${min_sum} ${max_sum}`)
}

arr = ("1 2 3 4 5").split(' ')

miniMaxSum (arr)
