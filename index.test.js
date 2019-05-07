const MyPromise = require("./index");

test("should show error if argument is empty", () => {
  expect(() => {
    new MyPromise();
  }).toThrow();
});

test("should show error if argument is non function", () => {
  expect(() => {
    new MyPromise(1);
  }).toThrow();
});

test("should accept if argument is a function", () => {
  expect(() => {
    new MyPromise(resolve => {
      setTimeout(() => resolve("Hello"), 100);
    });
  }).not.toThrow();
});

test("Should match word", async () => {
  const data = await new MyPromise(resolve => {
    setTimeout(() => resolve("Hello"), 100);
  });
  expect(data).toBe("Hello");
});
