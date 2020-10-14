from timeit import repeat

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


def run_Fn_algorithm(algorithm, n, print_val = False):
    setup_code = f"from __main__ import {algorithm}"
    if print_val:
        stmt = f'print(\'{algorithm}: {n} -> \',{algorithm}({n}))'
    else:
        stmt = f'{algorithm}({n})'

    # Execute the code five different times and return the time
    # in seconds that each execution took
    times = repeat(setup=setup_code, stmt=stmt, repeat=1, number=5)

    # Finally, display the name of the algorithm and the
    # minimum time it took to run
    print(f"Algorithm: {algorithm}. Minimum execution time: {min(times)}")

if __name__ == "__main__":
    algorithms = ['Fn_dynamic', 'Fn_recursion']
    n = 20
    print (f'n = {n}')
    for algorithm in algorithms:
        run_Fn_algorithm(algorithm, n, True)
