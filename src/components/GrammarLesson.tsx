import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, Play } from 'lucide-react';
import { GrammarLessonData } from '../types';
import { BackButton } from './BackButton';
import { cn } from '../utils';

interface GrammarLessonProps {
  lesson: GrammarLessonData;
  onComplete: () => void;
  onBack: () => void;
}

export const GrammarLesson: React.FC<GrammarLessonProps> = ({ lesson, onComplete, onBack }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    if (currentCardIndex < lesson.cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      onComplete(); // Move to quiz
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
    }
  };

  const currentCard = lesson.cards[currentCardIndex];
  const progress = ((currentCardIndex + 1) / lesson.cards.length) * 100;

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 md:gap-6">
        <BackButton onClick={onBack} />
        <div className="flex-1 text-right">
          <h2 className="text-lg md:text-2xl font-black text-slate-800 leading-tight">
            {lesson.title.split('(')[0].trim()}
          </h2>
          {lesson.title.includes('(') && (
            <p className="text-xs md:text-sm font-bold text-indigo-600 mt-0.5">
              {lesson.title.split('(')[1].replace(')', '').trim()}
            </p>
          )}
          <p className="text-[10px] md:text-sm text-slate-500 font-bold mt-1">{lesson.description}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 md:h-3 bg-white rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-indigo-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card Content */}
      <div className="relative min-h-[350px] md:min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm border-2 border-indigo-50 p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 justify-end">
                <div className="flex flex-col items-end">
                  <h3 className="text-lg md:text-2xl font-black text-indigo-900 leading-tight">
                    {currentCard.title.split('(')[0].trim()}
                  </h3>
                  {currentCard.title.includes('(') && (
                    <p className="text-xs md:text-sm font-bold text-indigo-400">
                      {currentCard.title.split('(')[1].replace(')', '').trim()}
                    </p>
                  )}
                </div>
                <span className="text-3xl md:text-4xl shrink-0">{currentCard.icon}</span>
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 text-sm md:text-base">
                {currentCard.content}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={handlePrev}
          disabled={currentCardIndex === 0}
          className={cn(
            "px-6 py-4 rounded-2xl font-black flex items-center gap-2 transition-all",
            currentCardIndex === 0 
              ? "opacity-0 pointer-events-none" 
              : "bg-white text-slate-600 hover:bg-slate-50 shadow-sm"
          )}
        >
          <ChevronLeft size={24} />
          السابق
        </button>

        <button
          onClick={handleNext}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black flex items-center gap-3 shadow-lg shadow-indigo-200 transition-all hover:scale-105"
        >
          {currentCardIndex === lesson.cards.length - 1 ? (
            <>
              ابدأ التحدي! <Play size={24} className="fill-current" />
            </>
          ) : (
            <>
              التالي <ChevronRight size={24} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
