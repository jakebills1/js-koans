function add (x) { return function (y) { return x + y } }
const add2 = add(2);
test('adds two to input', () => {
  expect(add2(2)).toBe(4);
});
