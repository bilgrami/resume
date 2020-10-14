# Fibonacci Number (Fn) 
Compare performance of Fn via dynamic vs recursion approaches. Use the shortest time method to compare runtime performance.

## Implementation 

```python
def Fn_recursion(n):
    if n == 0 or n == 1:
        return n
    else:
        return Fn_recursion(n-1) + Fn_recursion(n-2)

def Fn_dynamic(n):
    memo = [0 for _ in range(n+1)];
    memo[0], memo[1] = 0, 1
    for i in range(2, n+1):
        memo[i] = memo[i-1] + memo[i-2]
    return memo[n]

```

## Execution Result 

```bash
python3 fibonacci.py 
```

Result 

```
n = 20
Fn_dynamic: 20 ->  6765
Fn_dynamic: 20 ->  6765
Fn_dynamic: 20 ->  6765
Fn_dynamic: 20 ->  6765
Fn_dynamic: 20 ->  6765
Algorithm: Fn_dynamic. Minimum execution time: 0.00012869801139459014
Fn_recursion: 20 ->  6765
Fn_recursion: 20 ->  6765
Fn_recursion: 20 ->  6765
Fn_recursion: 20 ->  6765
Fn_recursion: 20 ->  6765
Algorithm: Fn_recursion. Minimum execution time: 0.011802783992607147

```
