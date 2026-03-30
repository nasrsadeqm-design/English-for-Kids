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
    <div className="grid grid-cols-2 gap-5 w-full max-w-xl mx-auto p-4">
      {items.map((item) => {
        const isMatched = matchedIds.has(item.id);
        const isSelected = selected?.id === item.id;
        const isWrong = wrongId === item.id;

        return (
          <motion.button
            key={item.id}
            layout
            whileHover={!isMatched ? { scale: 1.02 } : {}}
            whileTap={!isMatched ? { scale: 0.98 } : {}}
            onClick={() => handleSelect(item)}
            disabled={isMatched}
            className={cn(
              "p-6 h-32 rounded-[2rem] font-black text-2xl transition-all border-4 flex items-center justify-center text-center shadow-sm",
              isMatched ? "bg-emerald-50 border-emerald-400 text-emerald-600 opacity-40 grayscale" : 
              isSelected ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-lg shadow-indigo-100" :
              isWrong ? "bg-rose-50 border-rose-500 text-rose-700 animate-shake" :
              "bg-white border-slate-50 text-slate-700 hover:border-indigo-100 hover:shadow-md"
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
