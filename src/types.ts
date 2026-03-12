export type Category = 'Nouns' | 'Verbs' | 'Adjectives' | 'Adverbs' | 'Phrasal Verbs';

export interface Word {
  id: string;
  english: string;
  arabic: string;
  category: Category;
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
