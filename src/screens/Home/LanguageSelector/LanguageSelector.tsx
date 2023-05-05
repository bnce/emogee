import "./LanguageSelector.css";
import { LanguageSelectorItem } from "./LanguageSelectorItem";

export interface LanguageSelectorProps {
  lang: string;
  onChange?: (language: string) => void;
}

const SUPPORTED_LANGUAGES: [string, string][] = [
  ["English", "en-us"],
  ["中文", "zh-CN"],
];

export function LanguageSelector({ lang, onChange }: LanguageSelectorProps) {
  return (
    <section className="language-selector">
      {SUPPORTED_LANGUAGES.map(([name, key]) => (
        <LanguageSelectorItem
          name={name}
          lang={key}
          key={key}
          onClick={onChange}
        />
      ))}
    </section>
  );
}
