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
        <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] shadow-xl border-8 border-indigo-50 flex flex-col items-center justify-center p-8">
          <h3 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">{word.english}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              speak(word.english);
            }}
            className="p-5 bg-indigo-50 rounded-2xl text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-inner"
          >
            <Volume2 size={32} />
          </button>
          <p className="mt-8 text-base text-slate-300 font-black uppercase tracking-[0.2em]">اضغط للقلب</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-indigo-600 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center p-8 text-white border-8 border-indigo-700"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-6xl font-black mb-4 drop-shadow-md" dir="rtl">{word.arabic}</h3>
          <div className="h-1 w-16 bg-white/30 rounded-full mb-4" />
          <p className="text-2xl font-bold opacity-90 tracking-wide">{word.english}</p>
        </div>
      </motion.div>
    </div>
  );
};
