import { useRef, useState } from "react";

export function useSpeechRecognition() {
  const srRef = useRef(new webkitSpeechRecognition());
  const sr = srRef.current;

  sr.continuous = false;
  sr.interimResults = true;

  const [speechRecognitionResult, setSpeechRecognitionResult] =
    useState<string>();
  const [speechRecognitionInProgress, setSpeechRecognitionInProgress] =
    useState<boolean>(false);

  function setSpeechRecognitionLanguage(lang: string) {
    sr.lang = lang;
  }

  function startSpeechRecognition() {
    sr.start();
  }

  sr.onresult = (event) => {
    console.log(event);
    sr.stop();
    setSpeechRecognitionResult(event.results[0][0].transcript);
  };
  sr.onstart = () => setSpeechRecognitionInProgress(true);
  sr.onend = () => setSpeechRecognitionInProgress(false);

  return {
    setSpeechRecognitionLanguage,
    startSpeechRecognition,
    speechRecognitionResult,
    speechRecognitionInProgress,
  };
}
