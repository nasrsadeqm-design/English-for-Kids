import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Volume2, ArrowRight, RotateCcw } from 'lucide-react';
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 shadow-2xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Quiz Finished!</h2>
        <div className={cn("text-5xl font-black mb-2", color)}>{score} / {questions.length}</div>
        <p className="text-xl font-medium mb-8">{rating}</p>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={onRestart}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors"
          >
            <RotateCcw size={20} /> Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 flex justify-between items-center px-2">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Question {currentIndex + 1} of {questions.length}</span>
        <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-300" 
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <motion.div 
        key={currentIndex}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-white rounded-3xl p-8 shadow-xl border-4 border-indigo-50"
      >
        <div className="flex justify-center mb-6">
          <button 
            onClick={() => speak(currentQuestion.word.english)}
            className="p-4 bg-indigo-50 rounded-full text-indigo-600 hover:scale-110 transition-transform"
          >
            <Volume2 size={32} />
          </button>
        </div>
        
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">{currentQuestion.word.english}</h3>

        <div className="grid gap-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = option === currentQuestion.correctAnswer;
            
            let btnClass = "bg-gray-50 text-gray-700 border-2 border-transparent";
            if (selectedAnswer) {
              if (isCorrectOption) btnClass = "bg-green-100 text-green-700 border-green-500";
              else if (isSelected) btnClass = "bg-red-100 text-red-700 border-red-500";
              else btnClass = "bg-gray-50 text-gray-300 opacity-50";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
                className={cn(
                  "w-full p-4 rounded-2xl text-xl font-bold transition-all flex justify-between items-center",
                  btnClass,
                  !selectedAnswer && "hover:bg-indigo-50 hover:border-indigo-200"
                )}
                dir="rtl"
              >
                {option}
                {selectedAnswer && isCorrectOption && <CheckCircle2 size={20} className="text-green-500" />}
                {selectedAnswer && isSelected && !isCorrectOption && <XCircle size={20} className="text-red-500" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedAnswer && (
            <motion.button
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={nextQuestion}
              className="w-full mt-8 p-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700"
            >
              {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"} <ArrowRight size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
