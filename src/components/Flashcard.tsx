import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';
import { Word } from '../types';
import { speak, cn } from '../utils';

interface FlashcardProps {
  word: Word;
  className?: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({ word, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn("relative w-full h-64 cursor-pointer perspective-1000", className)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-xl border-4 border-indigo-100 flex flex-col items-center justify-center p-6">
          <h3 className="text-4xl font-bold text-indigo-600 mb-4">{word.english}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              speak(word.english);
            }}
            className="p-3 bg-indigo-50 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors"
          >
            <Volume2 size={24} />
          </button>
          <p className="mt-4 text-sm text-gray-400 font-medium uppercase tracking-widest">Click to flip</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-indigo-600 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 text-white"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-4xl font-bold mb-2" dir="rtl">{word.arabic}</h3>
          <p className="opacity-80 text-lg">{word.english}</p>
        </div>
      </motion.div>
    </div>
  );
};
