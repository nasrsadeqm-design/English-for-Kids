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
        
        <div className="p-8 sm:p-12 space-y-10">
          {/* Word Header Section */}
          <div className="flex flex-col items-center text-center space-y-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 bg-indigo-50 rounded-[2rem] flex items-center justify-center text-indigo-600 shadow-inner"
            >
              <Sparkles size={48} className="animate-pulse" />
            </motion.div>
            
            <div className="space-y-2">
              <h3 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight drop-shadow-sm">
                {word.english}
              </h3>
              <p className="text-indigo-500 font-black uppercase tracking-[0.3em] text-sm">
                {word.category}
              </p>
            </div>

            {/* Pronunciation Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => speak(word.english, 'UK')}
                className="flex items-center gap-3 px-6 py-4 bg-indigo-50 rounded-2xl text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm font-black group"
              >
                <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
                <span>UK</span>
              </button>
              <button
                onClick={() => speak(word.english, 'US')}
                className="flex items-center gap-3 px-6 py-4 bg-rose-50 rounded-2xl text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm font-black group"
              >
                <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
                <span>US</span>
              </button>
            </div>
          </div>

          {/* Meaning Reveal Section */}
          <div className="pt-4">
            <AnimatePresence mode="wait">
              {!showMeaning ? (
                <motion.button
                  key="reveal-btn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setShowMeaning(true)}
                  className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black text-2xl shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group"
                >
                  <span>اكتشف المعنى • Discover</span>
                  <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              ) : (
                <motion.div
                  key="meaning-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full py-8 bg-emerald-500 text-white rounded-[2rem] text-center space-y-2 shadow-xl shadow-emerald-100 border-4 border-emerald-400 relative overflow-hidden"
                >
                  <motion.div 
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="relative z-10"
                  >
                    <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-1">المعنى بالعربي</p>
                    <h4 className="text-5xl sm:text-6xl font-black drop-shadow-md" dir="rtl">
                      {word.arabic}
                    </h4>
                  </motion.div>
                  <CheckCircle2 className="absolute -right-4 -bottom-4 text-white/20 size-32 rotate-12" />
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
