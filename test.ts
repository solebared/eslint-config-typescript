// Demonstrate false positive no-unused-var on Function Type Expression param
//
// $ npx eslint -c index.js test.ts
// => 5:35  error  'callbackArg' is defined but never used  no-unused-vars
export function callTwice<A>(fn: (callbackArg: A) => void, arg: A): void {
  fn(arg)
  fn(arg)
}
