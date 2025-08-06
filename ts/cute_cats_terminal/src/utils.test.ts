import { expect, describe, it } from "@jest/globals";
import { printOne, printRandom } from "./utils";
import { CATS } from "./cats";
import type { CatParams, RandomCatParams } from "./type";

describe("cute-terminal-cats tests", () => {
  it("print a specific cat", () => {
    const catNumbers = [0, 2, 3, 4, 1];
    for (const num of catNumbers) {
      const cat = printOne({ color: "red", catNumber: num } as CatParams);
      expect(cat === CATS[num]).toBeTruthy();
    }
  });

  it("print a random cat", () => {
    for (let i = 0; i < 5; i++) {
      const cat = printRandom({ color: "red" } as RandomCatParams);
      expect(cat.cat === CATS[cat.index]).toBeTruthy();
    }
  });
});
