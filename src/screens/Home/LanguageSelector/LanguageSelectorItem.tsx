import "./LanguageSelectorItem.css";

export interface LanguageSelectorItemProps {
  lang: string;
  name: string;
  onClick?: (lang: string) => void;
}

export function LanguageSelectorItem({
  lang,
  name,
  onClick,
}: LanguageSelectorItemProps) {
  return (
    <button key={lang} onClick={() => onClick?.(lang)}>
      {name}
    </button>
  );
}
