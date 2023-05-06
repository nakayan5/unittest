import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  // q: 以下の関数はどういう関数ですか？
  // a: 以下の関数は、jest.requireActual() で取得した greet をモック化した関数です。
  ...jest.requireActual("./greet"),
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す（本来の実装どおり）", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
