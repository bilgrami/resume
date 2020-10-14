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
    memo = [0 for x in range(n+1)];
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
n = 40
Algorithm: fibonacci_dynamic. Minimum execution time: 3.559899050742388e-05
Algorithm: fibonacci_recursion. Minimum execution time: 162.82811394199962
```
