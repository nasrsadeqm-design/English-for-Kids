import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Word } from '../types';
import { cn } from '../utils';

interface MatchGameProps {
  words: Word[];
  onComplete: () => void;
}

interface MatchItem {
  id: string;
  text: string;
  type: 'english' | 'arabic';
  wordId: string;
}

export const MatchGame: React.FC<MatchGameProps> = ({ words, onComplete }) => {
  const [items, setItems] = useState<MatchItem[]>([]);
  const [selected, setSelected] = useState<MatchItem | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [wrongId, setWrongId] = useState<string | null>(null);

  useEffect(() => {
    // Pick 6 random words
    const selectedWords = [...words].sort(() => 0.5 - Math.random()).slice(0, 6);
    
    const englishItems: MatchItem[] = selectedWords.map(w => ({
      id: `en-${w.id}`,
      text: w.english,
      type: 'english',
      wordId: w.id
    }));
    
    const arabicItems: MatchItem[] = selectedWords.map(w => ({
      id: `ar-${w.id}`,
      text: w.arabic,
      type: 'arabic',
      wordId: w.id
    }));
    
    setItems([...englishItems, ...arabicItems].sort(() => 0.5 - Math.random()));
  }, [words]);

  const handleSelect = (item: MatchItem) => {
    if (matchedIds.has(item.id)) return;
    if (selected?.id === item.id) {
      setSelected(null);
      return;
    }

    if (!selected) {
      setSelected(item);
      return;
    }

    // Check match
    if (selected.type !== item.type && selected.wordId === item.wordId) {
      // Match!
      const newMatched = new Set(matchedIds);
      newMatched.add(selected.id);
      newMatched.add(item.id);
      setMatchedIds(newMatched);
      setSelected(null);
      
      if (newMatched.size === items.length) {
        confetti();
        setTimeout(onComplete, 1500);
      }
    } else {
      // Wrong match
      setWrongId(item.id);
      setTimeout(() => setWrongId(null), 500);
      setSelected(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto">
      {items.map((item) => {
        const isMatched = matchedIds.has(item.id);
        const isSelected = selected?.id === item.id;
        const isWrong = wrongId === item.id;

        return (
          <motion.button
            key={item.id}
            layout
            onClick={() => handleSelect(item)}
            disabled={isMatched}
            className={cn(
              "p-4 h-24 rounded-2xl font-bold text-lg transition-all border-4 flex items-center justify-center text-center",
              isMatched ? "bg-green-100 border-green-500 text-green-700 opacity-50" : 
              isSelected ? "bg-indigo-100 border-indigo-500 text-indigo-700 scale-105" :
              isWrong ? "bg-red-100 border-red-500 text-red-700 animate-shake" :
              "bg-white border-gray-100 text-gray-700 hover:border-indigo-200 shadow-sm"
            )}
            dir={item.type === 'arabic' ? 'rtl' : 'ltr'}
          >
            {item.text}
          </motion.button>
        );
      })}
    </div>
  );
};
