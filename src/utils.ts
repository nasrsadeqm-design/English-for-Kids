import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function speak(text: string, dialect: 'US' | 'UK' = 'UK') {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    
    let voice;
    if (dialect === 'UK') {
      voice = voices.find(v => v.lang === 'en-GB' || v.lang.includes('GB'));
      utterance.lang = 'en-GB';
    } else {
      voice = voices.find(v => v.lang === 'en-US' || v.lang.includes('US'));
      utterance.lang = 'en-US';
    }

    if (voice) {
      utterance.voice = voice;
    }
    
    window.speechSynthesis.speak(utterance);
  } else {
    console.error('Speech synthesis not supported');
  }
}
