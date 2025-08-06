import { printRandom, colors } from "../src";
import { getRandomInt } from "../src/utils";

console.log("Hello world from cute-terminal-cats!");
printRandom({ color: colors[getRandomInt(0, colors.length)] });
