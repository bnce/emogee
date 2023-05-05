import { MouseEventHandler } from "react";
import "./SpeakButton.css";

export type SpeakButtonStatus = "ready" | "busy";

export interface SpeakButtonProps {
  onClick: MouseEventHandler;
  disabled?: boolean;
}

export function SpeakButton({ onClick, disabled }: SpeakButtonProps) {
  return (
    <button className="speak-button" onClick={onClick} disabled={disabled}>
      🎤
    </button>
  );
}
