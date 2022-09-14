const AsyncOps = require("./asyncops.controller");

const ao = new AsyncOps();

test('test async', () => {
  return ao.jokes().then(value => {
    expect(value).not.toBeNull();
  })
});

test('Must not be sick', () => {
  return ao.isBirthday(false).then(value => {
    expect(value).toBe(2);
  });
});

test('Must be sick', () => {
  return ao.isBirthday(true).catch(e => {
    expect(e.message).toEqual("He's/She's sick!");
  });
});
