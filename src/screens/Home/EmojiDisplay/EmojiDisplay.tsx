import { getEmoji } from "../../../emoji";
import "./EmojiDisplay.css";

interface EmojiDisplayProps {
  keyword?: string;
  lang: string;
}

export function EmojiDisplay({ keyword, lang }: EmojiDisplayProps) {
  const emoji = keyword && getEmoji(keyword, lang);
  return (
    <section className="emoji-display">
      <div className="emoji">{emoji || "?"}</div>
      <div className="keyword">{keyword}</div>
    </section>
  );
}
