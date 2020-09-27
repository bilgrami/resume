// Problem Link: https://www.hackerrank.com/challenges/staircase/problem
// Solution Author: Syed A Bilgrami (github.com/bilgrami)

function staircase(n) {
    const symb = '#'
    console.log(symb.padStart((n),' '))
    
    for (let i =1; i < n; i ++) {
        console.log(symb.padStart((n-i),' ')  + symb.padStart(i,'#'))
    }
}

staircase(6)
