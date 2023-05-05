import { en } from "./en";
import { zh } from "./zh";

export function getEmoji(key: string, lang: string) {
  let emojiMap: { [K in string]: string };
  switch (lang) {
    case "zh-TW":
      emojiMap = zh;
      break;
    case "en-US":
    default:
      emojiMap = en;
  }

  return emojiMap[key];
}
