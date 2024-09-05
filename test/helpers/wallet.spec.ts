import { isWalletInstalled } from "../../src/helpers";

describe("Wallet", () => {
  test("Check if is install", () => {
    expect(isWalletInstalled).toBeFalsy();
    //expect(true).toBeTruthy();
  });
});
