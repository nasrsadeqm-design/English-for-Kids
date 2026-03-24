import React from 'react';

export type Category = 'Nouns' | 'Verbs' | 'Adjectives' | 'Adverbs' | 'Phrasal Verbs' | 'At the Airport' | 'At the Restaurant' | 'Shopping';

export interface Word {
  id: string;
  english: string;
  arabic: string;
  category: Category;
  example?: string;
  image?: string;
  fact?: string;
}

export interface QuizQuestion {
  id: string;
  word: Word;
  options: string[];
  correctAnswer: string;
}

export interface GameState {
  score: number;
  totalQuestions: number;
  isFinished: boolean;
}

// --- Grammar Types ---
export type GrammarColor = 'subject' | 'verb' | 'complement' | 'particle' | 'normal';

export interface ColoredText {
  text: string;
  type: GrammarColor;
}

export interface GrammarCardData {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

export interface GrammarQuizQuestion {
  id: string;
  type: 'true_false' | 'multiple_choice' | 'arrange';
  question: string | ColoredText[];
  options?: string[]; // For multiple choice
  correctAnswer: string | boolean | string[]; // string for MCQ, boolean for T/F, string[] for arrange
  explanation?: string;
}

export interface GrammarLessonData {
  id: string;
  title: string;
  description: string;
  cards: GrammarCardData[];
  quiz: GrammarQuizQuestion[];
}
