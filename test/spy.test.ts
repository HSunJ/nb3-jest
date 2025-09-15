import { hello } from "../src/hello";

const greet = { hello };

test('spy test', () => {
  const spy = jest.spyOn(greet, "hello");

  const result = greet.hello("Mike");
  console.log(result);
  console.log(spy.mock.calls);

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("Mike");
  expect(result).toBe("Hello Mike");
});
