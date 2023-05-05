import { useSpeechRecognition } from "../../hooks/useSpeechRecognition";
import { EmojiDisplay } from "./EmojiDisplay";
import { SpeakButton } from "./SpeakButton";

import { useState } from "react";
import "./Home.css";

export function Home() {
  const {
    setSpeechRecognitionLanguage,
    startSpeechRecognition,
    speechRecognitionResult,
    speechRecognitionInProgress,
  } = useSpeechRecognition();

  const [lang] = useState("zh-TW");
  setSpeechRecognitionLanguage(lang);

  return (
    <main>
      <section className="upper-section">
        <EmojiDisplay keyword={speechRecognitionResult} lang={lang} />
      </section>
      <section className="lower-section">
        <SpeakButton
          disabled={speechRecognitionInProgress}
          onClick={() => startSpeechRecognition()}
        />
      </section>
    </main>
  );
}
