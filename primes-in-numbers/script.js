/*Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"*/



function primeFactors(n){
  if (n === 0 || n == 1)
    return '(' + n + ')';
  let primes = {};
  for (let i = 2; i <= n; i++)
  {
    while (n % i === 0)
    {
      if (!(i in primes))
         primes[i] = 0;
      primes[i] += 1;
      n = Math.floor(n / i);
    }
  }
  let res = '';
  for (let i in primes)
  {
      if (primes[i] > 1)
        res += '(' + i + '**' + primes[i] + ')';
      else
        res += '(' + i + ')';
  }
