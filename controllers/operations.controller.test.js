const Operations = require("./operations.controller");

const ops = new Operations();

test("add 1 + 2 is equal to 3", () => {
  expect(ops.sum(1, 2)).toBe(3);
});

test("minus 2 - 1 is equal to 1", () => {
  expect(ops.difference(2, 1)).toBe(1);
});
