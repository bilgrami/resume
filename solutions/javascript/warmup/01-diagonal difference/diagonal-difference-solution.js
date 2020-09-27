// Problem Link: https://www.hackerrank.com/challenges/diagonal-difference/problem
// Solution Author: Syed A Bilgrami (github.com/bilgrami)

function diagonalDifference(arr) {
    let n = arr.length
    let primary_diagonal_sum = secondary_diagonal_sum = 0

    for (let i = 0; i < n; i++) {
        primary_diagonal_sum += arr[i][i]
        secondary_diagonal_sum += arr[i][n - 1 - i]
    }

    return Math.abs(primary_diagonal_sum - secondary_diagonal_sum)
}

let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

let result = diagonalDifference(arr);
console.log(result)
