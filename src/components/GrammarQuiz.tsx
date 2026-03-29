import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, Trophy, RefreshCw, AlertCircle, RotateCcw } from 'lucide-react';
import { GrammarQuizQuestion } from '../types';
import { BackButton } from './BackButton';
import { cn } from '../utils';

interface GrammarQuizProps {
  questions: GrammarQuizQuestion[];
  onComplete: (score: number) => void;
  onBack: () => void;
  backText?: string;
  title?: string;
}

export const GrammarQuiz: React.FC<GrammarQuizProps> = ({ questions, onComplete, onBack, backText = "العودة لقائمة القواعد", title = "تحدي القواعد 🧠" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [arrangedWords, setArrangedWords] = useState<string[]>([]);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (currentQuestion.type === 'arrange') {
      // Use correctAnswer as the source of words to ensure all necessary words (like 'Have') are present
      const words = currentQuestion.options || (currentQuestion.correctAnswer as string[]);
      // Shuffle words but ensure they are not in the correct order initially
      let shuffled = [...words].sort(() => Math.random() - 0.5);
      // If by chance it's the correct order, shuffle again (simple check)
      if (shuffled.join(' ') === (currentQuestion.correctAnswer as string[]).join(' ')) {
        shuffled = [...words].sort(() => Math.random() - 0.5);
      }
      setShuffledWords(shuffled);
    }
  }, [currentIndex, currentQuestion]);

  const handleAnswer = (answer: string | boolean) => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleArrangeWord = (word: string, index: number, isFromPool: boolean) => {
    if (showFeedback) return;
    
    if (isFromPool) {
      setArrangedWords(prev => [...prev, word]);
      // We don't remove from shuffledWords to keep indices stable, 
      // but we'll filter them out in render based on count
    } else {
      // Remove from arranged words
      const newArranged = [...arrangedWords];
      newArranged.splice(index, 1);
      setArrangedWords(newArranged);
    }
  };

  const resetArrange = () => {
    if (showFeedback) return;
    setArrangedWords([]);
  };

  const checkArrangeAnswer = () => {
    if (showFeedback) return;
    setShowFeedback(true);
    const isCorrect = arrangedWords.join(' ') === (currentQuestion.correctAnswer as string[]).join(' ');
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setArrangedWords([]);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
      onComplete(score);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setArrangedWords([]);
      setShowFeedback(false);
    }
  };

  if (isFinished) {
    return (
      <div className="text-center py-10 md:py-20 space-y-6 md:space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-24 h-24 md:w-32 md:h-32 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto shadow-inner"
        >
          <Trophy size={48} className="md:w-16 md:h-16" />
        </motion.div>
        
        <div className="space-y-1 md:space-y-2">
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 whitespace-nowrap">أحسنت يا بطل!</h2>
          <p className="text-lg md:text-xl font-bold text-slate-500 whitespace-nowrap">
            لقد أتممت التحدي بنجاح
          </p>
        </div>

        <div className="inline-block bg-white px-6 py-4 md:px-8 md:py-6 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border-2 border-slate-100">
          <p className="text-4xl md:text-6xl font-black text-indigo-600">
            {score} <span className="text-xl md:text-2xl text-slate-400">/ {questions.length}</span>
          </p>
        </div>

        <button
          onClick={onBack}
          className="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black flex items-center gap-2 mx-auto transition-all hover:scale-105 shadow-lg shadow-indigo-200"
        >
          {backText}
        </button>
      </div>
    );
  }

  const formatQuestion = (question: string) => {
    if (question.includes('صحح الخطأ:')) {
      const parts = question.split('صحح الخطأ:');
      return (
        <div className="space-y-2">
          <span className="block text-indigo-600 font-black text-lg md:text-xl">صحح الخطأ:</span>
          <span className="block text-xl md:text-2xl text-slate-800" dir="ltr">{parts[1].trim()}</span>
        </div>
      );
    }
    if (question.includes('اختر السؤال الصحيح لـ')) {
      const parts = question.split('اختر السؤال الصحيح لـ');
      return (
        <div className="space-y-2">
          <span className="block text-indigo-600 font-black text-lg md:text-xl">اختر السؤال الصحيح لـ</span>
          <span className="block text-xl md:text-2xl text-slate-800" dir="ltr">{parts[1].trim()}</span>
        </div>
      );
    }
    if (question.includes('اختر السؤال الصحيح ل')) {
      const parts = question.split('اختر السؤال الصحيح ل');
      return (
        <div className="space-y-2">
          <span className="block text-indigo-600 font-black text-lg md:text-xl">اختر السؤال الصحيح ل</span>
          <span className="block text-xl md:text-2xl text-slate-800" dir="ltr">{parts[1].trim()}</span>
        </div>
      );
    }
    return <span className="text-xl md:text-2xl font-black text-slate-800" dir="ltr">{question}</span>;
  };

  const renderQuestionContent = () => {
    switch (currentQuestion.type) {
      case 'true_false':
        return (
          <div className="space-y-6">
            <h3 className="text-center">
              {formatQuestion(currentQuestion.question as string)}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer(true)}
                disabled={showFeedback}
                className={cn(
                  "p-6 rounded-2xl font-black text-xl transition-all border-4",
                  showFeedback && currentQuestion.correctAnswer === true ? "bg-emerald-50 border-emerald-500 text-emerald-700" :
                  showFeedback && selectedAnswer === true ? "bg-red-50 border-red-500 text-red-700" :
                  "bg-white border-slate-100 hover:border-indigo-200 text-slate-700 hover:bg-indigo-50"
                )}
              >
                صحيح ✅
              </button>
              <button
                onClick={() => handleAnswer(false)}
                disabled={showFeedback}
                className={cn(
                  "p-6 rounded-2xl font-black text-xl transition-all border-4",
                  showFeedback && currentQuestion.correctAnswer === false ? "bg-emerald-50 border-emerald-500 text-emerald-700" :
                  showFeedback && selectedAnswer === false ? "bg-red-50 border-red-500 text-red-700" :
                  "bg-white border-slate-100 hover:border-indigo-200 text-slate-700 hover:bg-indigo-50"
                )}
              >
                خطأ ❌
              </button>
            </div>
          </div>
        );

      case 'multiple_choice':
        return (
          <div className="space-y-6">
            <h3 className="text-center">
              {formatQuestion(currentQuestion.question as string)}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="ltr">
              {currentQuestion.options?.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={cn(
                    "p-3 md:p-4 rounded-2xl font-black text-lg md:text-xl transition-all border-4 text-left",
                    showFeedback && currentQuestion.correctAnswer === option ? "bg-emerald-50 border-emerald-500 text-emerald-700" :
                    showFeedback && selectedAnswer === option ? "bg-red-50 border-red-500 text-red-700" :
                    "bg-white border-slate-100 hover:border-indigo-200 text-slate-700 hover:bg-indigo-50"
                  )}
                >
                  <span className="text-indigo-400 mr-2 md:mr-3">{String.fromCharCode(97 + idx)})</span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 'arrange':
        const isCorrectArrange = arrangedWords.join(' ') === (currentQuestion.correctAnswer as string[]).join(' ');
        const targetWords = currentQuestion.options || (currentQuestion.correctAnswer as string[]);

        return (
          <div className="space-y-6 md:space-y-8">
            <div className="text-center space-y-2 md:space-y-3">
              <h3 className="text-xl md:text-3xl font-black text-indigo-600 bg-indigo-50 py-3 px-5 md:py-4 md:px-6 rounded-2xl inline-block" dir="rtl">
                {currentQuestion.question as string}
              </h3>
            </div>

            <div className="relative group">
              <div className="min-h-[100px] md:min-h-[120px] p-4 md:p-6 bg-white border-4 border-dashed border-slate-200 rounded-[1.5rem] md:rounded-[2rem] flex flex-wrap gap-2 md:gap-3 items-center justify-center transition-all group-hover:border-indigo-200" dir="ltr">
                {arrangedWords.map((word, idx) => (
                  <motion.button
                    key={`arr-${idx}-${word}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    onClick={() => handleArrangeWord(word, idx, false)}
                    className="px-3 py-1.5 md:px-5 md:py-2.5 bg-indigo-600 text-white rounded-xl font-black text-base md:text-lg shadow-md hover:bg-indigo-700 active:scale-95 transition-all"
                  >
                    {word}
                  </motion.button>
                ))}
                {arrangedWords.length === 0 && (
                  <div className="flex flex-col items-center gap-1 md:gap-2 text-slate-400">
                    <AlertCircle size={24} className="opacity-20 md:w-8 md:h-8" />
                    <span className="font-bold text-xs md:text-base">اضغط على الكلمات بالأسفل لترتيبها هنا</span>
                  </div>
                )}
              </div>
              
              {arrangedWords.length > 0 && !showFeedback && (
                <button
                  onClick={resetArrange}
                  className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-slate-100 text-slate-400 rounded-full flex items-center justify-center shadow-sm hover:text-indigo-500 hover:border-indigo-200 transition-all"
                  title="إعادة الترتيب"
                >
                  <RotateCcw size={16} className="md:w-5 md:h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 justify-center bg-slate-50 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem]" dir="ltr">
              {shuffledWords.map((word, idx) => {
                // Count occurrences in arrangedWords to see if this instance is used
                const instancesInArranged = arrangedWords.filter(w => w === word).length;
                const instancesBeforeThis = shuffledWords.slice(0, idx).filter(w => w === word).length;
                
                const isUsed = instancesBeforeThis < instancesInArranged;

                return (
                  <motion.button
                    key={`src-${idx}-${word}`}
                    onClick={() => !isUsed && handleArrangeWord(word, idx, true)}
                    className={cn(
                      "px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl font-black text-base md:text-lg shadow-sm transition-all",
                      isUsed 
                        ? "bg-slate-100 text-slate-300 cursor-not-allowed opacity-50" 
                        : "bg-white border-2 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:-translate-y-1"
                    )}
                    disabled={isUsed || showFeedback}
                  >
                    {word}
                  </motion.button>
                );
              })}
            </div>

            {!showFeedback && arrangedWords.length === targetWords.length && (
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={checkArrangeAnswer}
                className="w-full py-4 md:py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-lg md:text-xl shadow-xl shadow-indigo-100 transition-all active:scale-95"
              >
                تحقق من الإجابة
              </motion.button>
            )}

            {showFeedback && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={cn(
                  "p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-center text-lg md:text-xl border-4",
                  isCorrectArrange 
                    ? "bg-emerald-50 border-emerald-200 text-emerald-700" 
                    : "bg-red-50 border-red-200 text-red-700"
                )}
              >
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2 text-base md:text-xl">
                  {isCorrectArrange ? <CheckCircle2 className="text-emerald-500" /> : <XCircle className="text-red-500" />}
                  {isCorrectArrange ? "ترتيب صحيح! أحسنت ✅" : "ترتيب خاطئ ❌"}
                </div>
                {!isCorrectArrange && (
                  <div className="mt-2 md:mt-3 p-3 md:p-4 bg-white/50 rounded-xl">
                    <p className="text-[10px] md:text-sm text-slate-500 mb-1">الإجابة الصحيحة هي:</p>
                    <p className="text-lg md:text-2xl font-black text-slate-800" dir="ltr">
                      {(currentQuestion.correctAnswer as string[]).join(' ')}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 md:gap-6">
        <BackButton onClick={onBack} />
        <div className="flex-1 text-right">
          <h2 className="text-xl md:text-3xl font-black text-slate-800 whitespace-nowrap">{title}</h2>
          <p className="text-xs md:text-base text-slate-500 font-bold mt-0.5 md:mt-1">
            السؤال {currentIndex + 1} من {questions.length}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="h-2 md:h-3 bg-white rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-indigo-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-sm border-2 border-indigo-50 p-6 md:p-8">
        <div className="mb-6 md:mb-8 text-center">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest mb-2 md:mb-4">
            {currentQuestion.type === 'true_false' ? 'صح أم خطأ؟' :
             currentQuestion.type === 'multiple_choice' ? 'اختر الإجابة الصحيحة' :
             'رتب الكلمات'}
          </span>
        </div>

        {renderQuestionContent()}

        {/* Feedback Section */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 md:mt-8 p-4 md:p-6 bg-slate-50 rounded-2xl border-2 border-slate-100"
            >
              <div className="flex items-start gap-3 md:gap-4" dir="rtl">
                <div className="p-1.5 md:p-2 bg-white rounded-xl shadow-sm">
                  <AlertCircle className="text-indigo-500 md:w-6 md:h-6" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-slate-800 text-base md:text-lg mb-0.5 md:mb-1">توضيح:</h4>
                  <p className="text-xs md:text-base text-slate-600 font-bold leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-8 md:mt-10 flex gap-3 md:gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1 py-3 md:py-4 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-black flex items-center justify-center gap-2 transition-all hover:bg-slate-50 disabled:opacity-30 text-sm md:text-base"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
            السابق
          </button>
          <button
            onClick={handleNext}
            className="flex-[2] py-3 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-md text-sm md:text-base"
          >
            {currentIndex < questions.length - 1 ? 'السؤال التالي' : 'إنهاء التحدي'}
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
