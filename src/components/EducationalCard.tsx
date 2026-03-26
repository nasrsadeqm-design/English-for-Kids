import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Word } from '../types';
import { speak, cn } from '../utils';

interface EducationalCardProps {
  word: Word;
  onNext?: () => void;
  onPrev?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export const EducationalCard: React.FC<EducationalCardProps> = ({ 
  word, 
  onNext, 
  onPrev,
  isFirst,
  isLast
}) => {
  const [showMeaning, setShowMeaning] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Main Card Container */}
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-4 border-indigo-50 relative group">
        {/* Top Decorative Bar */}
        <div className="h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full" />
        
        <div className="p-6 md:p-12 space-y-8 md:space-y-10">
          {/* Word Header Section */}
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-20 h-20 md:w-24 md:h-24 bg-indigo-50 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center text-indigo-600 shadow-inner"
            >
              <Sparkles size={40} className="animate-pulse md:w-12 md:h-12" />
            </motion.div>
            
            <div className="space-y-1 md:space-y-2">
              <h3 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tight drop-shadow-sm whitespace-nowrap">
                {word.english}
              </h3>
              <p className="text-indigo-500 font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm">
                {word.category}
              </p>
            </div>

            {/* Pronunciation Buttons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => speak(word.english, 'UK')}
                className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-indigo-50 rounded-xl md:rounded-2xl text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm font-black group text-sm md:text-base"
              >
                <Volume2 size={20} className="group-hover:scale-110 transition-transform md:w-6 md:h-6" />
                <span>UK</span>
              </button>
              <button
                onClick={() => speak(word.english, 'US')}
                className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-6 md:py-4 bg-rose-50 rounded-xl md:rounded-2xl text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm font-black group text-sm md:text-base"
              >
                <Volume2 size={20} className="group-hover:scale-110 transition-transform md:w-6 md:h-6" />
                <span>US</span>
              </button>
            </div>
          </div>

          {/* Meaning Reveal Section */}
          <div className="pt-2 md:pt-4">
            <AnimatePresence mode="wait">
              {!showMeaning ? (
                <motion.button
                  key="reveal-btn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setShowMeaning(true)}
                  className="w-full py-4 md:py-6 bg-slate-900 text-white rounded-[1.5rem] md:rounded-[2rem] font-black text-xl md:text-2xl shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 md:gap-4 group"
                >
                  <span className="whitespace-nowrap">اكتشف المعنى • Discover</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform md:w-7 md:h-7" />
                </motion.button>
              ) : (
                <motion.div
                  key="meaning-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full py-6 md:py-8 bg-emerald-500 text-white rounded-[1.5rem] md:rounded-[2rem] text-center space-y-1 md:space-y-2 shadow-xl shadow-emerald-100 border-4 border-emerald-400 relative overflow-hidden"
                >
                  <motion.div 
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="relative z-10"
                  >
                    <p className="text-[10px] md:text-sm font-black uppercase tracking-widest opacity-80 mb-0.5 md:mb-1">المعنى بالعربي</p>
                    <h4 className="text-3xl md:text-6xl font-black drop-shadow-md whitespace-nowrap" dir="rtl">
                      {word.arabic}
                    </h4>
                  </motion.div>
                  <CheckCircle2 className="absolute -right-4 -bottom-4 text-white/20 size-24 md:size-32 rotate-12" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 px-2">
        <button
          disabled={isFirst}
          onClick={() => {
            setShowMeaning(false);
            onPrev?.();
          }}
          className="flex-1 py-5 bg-white rounded-3xl font-black text-slate-600 shadow-sm border-2 border-transparent hover:border-indigo-100 disabled:opacity-30 transition-all"
        >
          السابق
        </button>
        <button
          disabled={isLast}
          onClick={() => {
            setShowMeaning(false);
            onNext?.();
          }}
          className="flex-1 py-5 bg-indigo-600 text-white rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
        >
          {isLast ? 'تم الانتهاء' : 'التالي'} <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};
