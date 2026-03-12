import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function speak(text: string) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    // Try to find a British English voice
    const voices = window.speechSynthesis.getVoices();
    const britishVoice = voices.find(v => v.lang === 'en-GB' || v.lang.includes('GB'));
    if (britishVoice) {
      utterance.voice = britishVoice;
    } else {
      utterance.lang = 'en-GB';
    }
    window.speechSynthesis.speak(utterance);
  } else {
    console.error('Speech synthesis not supported');
  }
}
