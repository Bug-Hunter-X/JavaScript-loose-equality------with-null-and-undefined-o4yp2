function foo(a) {
  if (a === null || a === undefined) {
    return 0;
  }
  return a + 1;
}

console.log(foo(null)); // 0
console.log(foo(undefined)); // 0