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
      className={cn("relative w-full h-56 md:h-64 cursor-pointer perspective-1000", className)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl border-4 md:border-8 border-indigo-50 flex flex-col items-center justify-center p-6 md:p-8">
          <h3 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 md:mb-6 tracking-tight whitespace-nowrap">{word.english}</h3>
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                speak(word.english, 'UK');
              }}
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-indigo-50 rounded-xl md:rounded-2xl text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm group text-sm md:text-base"
              title="British English"
            >
              <Volume2 size={18} className="md:w-6 md:h-6" />
              <span className="font-bold tracking-wider">UK</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                speak(word.english, 'US');
              }}
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-rose-50 rounded-xl md:rounded-2xl text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm group text-sm md:text-base"
              title="American English"
            >
              <Volume2 size={18} className="md:w-6 md:h-6" />
              <span className="font-bold tracking-wider">US</span>
            </button>
          </div>
          <p className="mt-6 md:mt-8 text-xs md:text-base text-slate-300 font-black uppercase tracking-[0.2em]">اضغط للقلب</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-indigo-600 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center p-6 md:p-8 text-white border-4 md:border-8 border-indigo-700"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-4xl md:text-6xl font-black mb-2 md:mb-4 drop-shadow-md whitespace-nowrap" dir="rtl">{word.arabic}</h3>
          <div className="h-1 w-12 md:w-16 bg-white/30 rounded-full mb-2 md:mb-4" />
          <p className="text-xl md:text-2xl font-bold opacity-90 tracking-wide whitespace-nowrap">{word.english}</p>
        </div>
      </motion.div>
    </div>
  );
};
