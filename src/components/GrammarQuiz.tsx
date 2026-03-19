import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, Trophy, RefreshCw, AlertCircle } from 'lucide-react';
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
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer: string | boolean) => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleArrangeWord = (word: string) => {
    if (showFeedback) return;
    if (!arrangedWords.includes(word)) {
      setArrangedWords(prev => [...prev, word]);
    } else {
      setArrangedWords(prev => prev.filter(w => w !== word));
    }
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
      <div className="text-center py-20 space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-32 h-32 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto shadow-inner"
        >
          <Trophy size={64} />
        </motion.div>
        
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-800">أحسنت يا بطل!</h2>
          <p className="text-xl font-bold text-slate-500">
            لقد أتممت التحدي بنجاح
          </p>
        </div>

        <div className="inline-block bg-white px-8 py-6 rounded-[2rem] shadow-sm border-2 border-slate-100">
          <p className="text-6xl font-black text-indigo-600">
            {score} <span className="text-2xl text-slate-400">/ {questions.length}</span>
          </p>
        </div>

        <button
          onClick={onBack}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black flex items-center gap-2 mx-auto transition-all hover:scale-105 shadow-lg shadow-indigo-200"
        >
          {backText}
        </button>
      </div>
    );
  }

  const renderQuestionContent = () => {
    switch (currentQuestion.type) {
      case 'true_false':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-center text-slate-800" dir="ltr">
              {currentQuestion.question as string}
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
            <h3 className="text-2xl font-black text-center text-slate-800" dir="ltr">
              {currentQuestion.question as string}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="ltr">
              {currentQuestion.options?.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={cn(
                    "p-4 rounded-2xl font-black text-xl transition-all border-4 text-left",
                    showFeedback && currentQuestion.correctAnswer === option ? "bg-emerald-50 border-emerald-500 text-emerald-700" :
                    showFeedback && selectedAnswer === option ? "bg-red-50 border-red-500 text-red-700" :
                    "bg-white border-slate-100 hover:border-indigo-200 text-slate-700 hover:bg-indigo-50"
                  )}
                >
                  <span className="text-indigo-400 mr-3">{String.fromCharCode(97 + idx)})</span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 'arrange':
        const words = currentQuestion.options || (currentQuestion.question as string).split(' / ');
        const isCorrectArrange = arrangedWords.join(' ') === (currentQuestion.correctAnswer as string[]).join(' ');

        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-center text-slate-800" dir="rtl">
              {currentQuestion.question as string}
            </h3>
            <div className="min-h-[100px] p-6 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-wrap gap-3 items-center justify-center" dir="ltr">
              {arrangedWords.map((word, idx) => (
                <motion.button
                  key={`arr-${idx}`}
                  layoutId={`word-${word}`}
                  onClick={() => handleArrangeWord(word)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-black text-lg shadow-sm"
                >
                  {word}
                </motion.button>
              ))}
              {arrangedWords.length === 0 && (
                <span className="text-slate-400 font-bold">اضغط على الكلمات لترتيبها هنا</span>
              )}
            </div>

            <div className="flex flex-wrap gap-3 justify-center" dir="ltr">
              {words.map((word, idx) => {
                const countInArranged = arrangedWords.filter(w => w === word).length;
                const countInSource = words.filter(w => w === word).length;
                if (countInArranged >= countInSource) return null;
                
                return (
                  <motion.button
                    key={`src-${idx}`}
                    layoutId={`word-${word}-${idx}`}
                    onClick={() => handleArrangeWord(word)}
                    className="px-4 py-2 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-black text-lg shadow-sm hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                  >
                    {word}
                  </motion.button>
                );
              })}
            </div>

            {!showFeedback && arrangedWords.length === words.length && (
              <button
                onClick={checkArrangeAnswer}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xl shadow-lg transition-all"
              >
                تحقق من الإجابة
              </button>
            )}

            {showFeedback && (
              <div className={cn(
                "p-4 rounded-2xl font-black text-center text-xl",
                isCorrectArrange ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
              )}>
                {isCorrectArrange ? "ترتيب صحيح! ✅" : "ترتيب خاطئ ❌"}
                {!isCorrectArrange && (
                  <div className="mt-2 text-sm font-bold text-slate-600" dir="ltr">
                    الإجابة الصحيحة: {(currentQuestion.correctAnswer as string[]).join(' ')}
                  </div>
                )}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-6">
        <BackButton onClick={onBack} />
        <div className="flex-1 text-right">
          <h2 className="text-3xl font-black text-slate-800">{title}</h2>
          <p className="text-slate-500 font-bold mt-1">
            السؤال {currentIndex + 1} من {questions.length}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
        <motion.div 
          className="h-full bg-indigo-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-[2rem] shadow-sm border-2 border-indigo-50 p-8">
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-black uppercase tracking-widest mb-4">
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
              className="mt-8 p-6 bg-slate-50 rounded-2xl border-2 border-slate-100"
            >
              <div className="flex items-start gap-4" dir="rtl">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <AlertCircle className="text-indigo-500" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-slate-800 text-lg mb-1">توضيح:</h4>
                  <p className="text-slate-600 font-bold leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-10 flex gap-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1 py-4 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-black flex items-center justify-center gap-2 transition-all hover:bg-slate-50 disabled:opacity-30"
          >
            <ChevronRight size={24} />
            السابق
          </button>
          <button
            onClick={handleNext}
            className="flex-[2] py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-md"
          >
            {currentIndex < questions.length - 1 ? 'السؤال التالي' : 'إنهاء التحدي'}
            <ChevronLeft size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
