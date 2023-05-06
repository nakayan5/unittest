import { greetByTime } from ".";

describe("greetByTime(", () => {
  beforeEach(() => {
    // jestに偽のタイマーを使うように指示する
    jest.useFakeTimers(); // このテストスイート内で Date.now() をモックする
  });

  afterEach(() => {
    // jestに真のタイマーを使うように指示する
    jest.useRealTimers(); // 他のテストスイートに影響を与えないように、元に戻す
  });

  test("朝は「おはよう」を返す", () => {
    // 偽のタイマーで使用する日付を設定する
    jest.setSystemTime(new Date(2023, 4, 23, 8, 0, 0)); // 2023年5月23日の8時0分0秒に設定
    expect(greetByTime()).toBe("おはよう");
  });

  test("昼は「こんにちは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 14, 0, 0));
    expect(greetByTime()).toBe("こんにちは");
  });

  test("夜は「こんばんは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 21, 0, 0));
    expect(greetByTime()).toBe("こんばんは");
  });
});
