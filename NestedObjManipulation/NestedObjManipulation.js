// let a = { a: 1, b: { a: 1 } };
// let b = { ...a };
// b.b.c = 1;
// console.log(a);
// console.log(b);

// // Output:
// // A {a: 1, b: {a: 1, c: 1}}
// // B {a: 1, b: {a: 1, c: 1}}

// // ----------------------

// let a = { a: 1, b: { a: 1 } };
// let b = { ...a };
// b.b.= 1
// console.log(a);
// console.log(b);

// // Output:
// // SyntaxError: Unexpected token '='

// // ----------------------

// let a = { a: 1, b: { a: 1 } };
// let b = { ...a };
// b.b = 1
// console.log(a);
// console.log(b);

// // Output:
// // A {a: 1, b: {a: 1}}
// // B {a: 1, b: 1}
