import pc from "picocolors";
import type {
  RandomCatParams,
  CatParams,
  RandomCatOutput,
  CatEmojiParams,
} from "./type";
import { CATS } from "./cats";
import { EMOJI_DICT } from "./emojis";

export const colors: string[] = [
  "blue",
  "cyan",
  "magenta",
  "red",
  "black",
  "green",
  "yellow",
  "white",
];

export const emojis: string[] = [
  "playful cat",
  "waving cat",
  "sleepy cat",
  "shy cat",
  "blushing cat",
];

export function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function printOne(params: CatParams): string {
  if (!colors.includes(params.color)) {
    throw new Error("Color not supported!");
  } else {
    const cat = CATS[params.catNumber];

    switch (params.color) {
      case "blue":
        console.log(pc.bold(pc.blue(cat)));
        break;
      case "cyan":
        console.log(pc.bold(pc.cyan(cat)));
        break;
      case "magenta":
        console.log(pc.bold(pc.magenta(cat)));
        break;
      case "red":
        console.log(pc.bold(pc.red(cat)));
        break;
      case "black":
        console.log(pc.bold(pc.black(cat)));
        break;
      case "green":
        console.log(pc.bold(pc.green(cat)));
        break;
      case "yellow":
        console.log(pc.bold(pc.yellow(cat)));
        break;
      case "white":
        console.log(pc.bold(pc.white(cat)));
        break;
    }
    return cat;
  }
}

export function printRandom(params: RandomCatParams): RandomCatOutput {
  if (!colors.includes(params.color)) {
    throw new Error("Color not supported!");
  } else {
    const n = getRandomInt(0, CATS.length);
    const cat = CATS[n];

    switch (params.color) {
      case "blue":
        console.log(pc.bold(pc.blue(cat)));
        break;
      case "cyan":
        console.log(pc.bold(pc.cyan(cat)));
        break;
      case "magenta":
        console.log(pc.bold(pc.magenta(cat)));
        break;
      case "red":
        console.log(pc.bold(pc.red(cat)));
        break;
      case "black":
        console.log(pc.bold(pc.black(cat)));
        break;
      case "green":
        console.log(pc.bold(pc.green(cat)));
        break;
      case "yellow":
        console.log(pc.bold(pc.yellow(cat)));
        break;
      case "white":
        console.log(pc.bold(pc.white(cat)));
        break;
    }
    return { cat: cat, index: n } as RandomCatOutput;
  }
}

export function printEmoji(params: CatEmojiParams): string {
  if (!colors.includes(params.color)) {
    throw new Error("Color not supported!");
  } else {
    if (!emojis.includes(params.description)) {
      throw new Error("Emoji not available");
    }

    const cat = EMOJI_DICT[params.description];

    switch (params.color) {
      case "blue":
        console.log(pc.bold(pc.blue(cat)));
        break;
      case "cyan":
        console.log(pc.bold(pc.cyan(cat)));
        break;
      case "magenta":
        console.log(pc.bold(pc.magenta(cat)));
        break;
      case "red":
        console.log(pc.bold(pc.red(cat)));
        break;
      case "black":
        console.log(pc.bold(pc.black(cat)));
        break;
      case "green":
        console.log(pc.bold(pc.green(cat)));
        break;
      case "yellow":
        console.log(pc.bold(pc.yellow(cat)));
        break;
      case "white":
        console.log(pc.bold(pc.white(cat)));
        break;
    }
    return cat;
  }
}
