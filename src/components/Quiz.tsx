import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Volume2, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Word, QuizQuestion } from '../types';
import { speak, cn } from '../utils';

interface QuizProps {
  words: Word[];
  onComplete: (score: number, total: number) => void;
  onRestart: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ words, onComplete, onRestart }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Generate 10 random questions
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    const generatedQuestions = selected.map(word => {
      const others = words.filter(w => w.id !== word.id);
      const distractors = others.sort(() => 0.5 - Math.random()).slice(0, 3).map(w => w.arabic);
      const options = [...distractors, word.arabic].sort(() => 0.5 - Math.random());
      
      return {
        id: Math.random().toString(),
        word,
        options,
        correctAnswer: word.arabic
      };
    });
    
    setQuestions(generatedQuestions);
  }, [words]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(answer);
    const correct = answer === questions[currentIndex].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(s => s + 1);
      speak(questions[currentIndex].word.english);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
      onComplete(score, questions.length);
      if (score >= 8) confetti();
    }
  };

  if (questions.length === 0) return <div>Loading...</div>;

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    let rating = "Needs Improvement";
    let color = "text-red-500";
    
    if (percentage >= 90) {
      rating = "Excellent!";
      color = "text-green-500";
    } else if (percentage >= 70) {
      rating = "Good Job!";
      color = "text-blue-500";
    }

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[3rem] p-12 shadow-2xl text-center border-8 border-indigo-50"
      >
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={48} className="text-indigo-600" />
        </div>
        <h2 className="text-4xl font-black mb-4 text-slate-800">انتهى الاختبار!</h2>
        <div className={cn("text-7xl font-black mb-4", color)}>{score} / {questions.length}</div>
        <p className="text-2xl font-bold mb-10 text-slate-500">{rating}</p>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={onRestart}
            className="flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            <RotateCcw size={24} /> المحاولة مرة أخرى
          </button>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-8 flex justify-between items-center px-4">
        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">السؤال {currentIndex + 1} من {questions.length}</span>
        <div className="h-3 w-40 bg-slate-100 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-indigo-500 transition-all duration-500 ease-out" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <motion.div 
        key={currentIndex}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-white rounded-[3rem] p-10 shadow-xl border-8 border-indigo-50"
      >
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => speak(currentQuestion.word.english)}
            className="p-6 bg-indigo-50 rounded-[2rem] text-indigo-600 hover:scale-110 transition-all shadow-inner"
          >
            <Volume2 size={40} />
          </button>
        </div>
        
        <h3 className="text-5xl font-black text-center text-slate-800 mb-10 tracking-tight">{currentQuestion.word.english}</h3>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = option === currentQuestion.correctAnswer;
            
            let btnClass = "bg-slate-50 text-slate-700 border-4 border-transparent";
            if (selectedAnswer) {
              if (isCorrectOption) btnClass = "bg-emerald-50 text-emerald-700 border-emerald-400";
              else if (isSelected) btnClass = "bg-rose-50 text-rose-700 border-rose-400";
              else btnClass = "bg-slate-50 text-slate-300 opacity-50";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
                className={cn(
                  "w-full p-6 rounded-[2rem] text-2xl font-black transition-all flex justify-between items-center",
                  btnClass,
                  !selectedAnswer && "hover:bg-indigo-50 hover:border-indigo-100 hover:scale-[1.02]"
                )}
                dir="rtl"
              >
                <span>{option}</span>
                {selectedAnswer && isCorrectOption && <CheckCircle2 size={28} className="text-emerald-500" />}
                {selectedAnswer && isSelected && !isCorrectOption && <XCircle size={28} className="text-rose-500" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedAnswer && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={nextQuestion}
              className="w-full mt-10 p-6 bg-indigo-600 text-white rounded-[2rem] font-black text-2xl flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-lg shadow-indigo-100"
            >
              {currentIndex === questions.length - 1 ? "إنهاء الاختبار" : "السؤال التالي"} <ArrowRight size={28} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
