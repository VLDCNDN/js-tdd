const AsyncOps = require("./asyncops.controller");

const ao = new AsyncOps();

test('test async', () => {
  return ao.jokes().then(value => {
    expect(value).not.toBeNull();
  })
});