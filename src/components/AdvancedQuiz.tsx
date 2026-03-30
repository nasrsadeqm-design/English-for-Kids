import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Type, 
  Hash, 
  Layers, 
  Ear, 
  Image as ImageIcon, 
  FileText, 
  HelpCircle,
  ChevronLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BackButton } from './BackButton';
import { Logo } from './Logo';
import { Word } from '../types';
import { speak, cn } from '../utils';

type TestMode = 'multiple-choice' | 'scramble' | 'missing' | 'match' | 'listening' | 'sentence' | 'true-false';

interface AdvancedQuizProps {
  words: Word[];
  onBack: () => void;
  onLogoClick?: () => void;
}

export const AdvancedQuiz: React.FC<AdvancedQuizProps> = ({ words, onBack, onLogoClick }) => {
  const [mode, setMode] = useState<TestMode | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<number[]>([]);

  // Initialize test questions based on mode
  useEffect(() => {
    if (!mode) {
      setQuestions([]);
      return;
    }

    if (mode === 'match') {
      // Match mode is special, it's one big "question"
      const selectedWords = [...words].sort(() => 0.5 - Math.random()).slice(0, 6);
      const englishItems = selectedWords.map(w => ({ id: w.id, text: w.english, type: 'english' }));
      const arabicItems = selectedWords.map(w => ({ id: w.id, text: w.arabic, type: 'arabic' }));
      setQuestions([{
        pairs: [...englishItems, ...arabicItems].sort(() => 0.5 - Math.random()),
        totalPairs: 6
      }]);
      return;
    }

    const testWords = [...words].sort(() => 0.5 - Math.random()).slice(0, 10);
    
    const generated = testWords.map(word => {
      const others = words.filter(w => w.id !== word.id);
      const distractors = others.sort(() => 0.5 - Math.random()).slice(0, 3);

      switch (mode) {
        case 'multiple-choice':
          return {
            word,
            options: [...distractors.map(d => d.arabic), word.arabic].sort(() => 0.5 - Math.random()),
            correctAnswer: word.arabic
          };
        case 'scramble':
          return {
            word,
            scrambled: word.english.split('').sort(() => 0.5 - Math.random()),
            correctAnswer: word.english
          };
        case 'missing':
          const chars = word.english.split('');
          const missingIndices = chars.map((_, i) => i).sort(() => 0.5 - Math.random()).slice(0, Math.max(1, Math.floor(chars.length / 3)));
          const display = chars.map((c, i) => missingIndices.includes(i) ? '_' : c).join('');
          return {
            word,
            display,
            correctAnswer: word.english
          };
        case 'listening':
          return {
            word,
            correctAnswer: word.english
          };
        case 'sentence':
          let template = "I like this ___.";
          if (word.category === 'Verbs') {
            template = "I want to ___ every day.";
          } else if (word.category === 'Adjectives') {
            template = "This is a very ___ person.";
          } else if (word.category === 'Adverbs') {
            template = "He speaks English very ___.";
          } else if (word.category === 'Phrasal Verbs') {
            template = "Can you ___ the light?";
          }
          
          return {
            word,
            sentence: template.replace('___', '_____'),
            options: [...distractors.map(d => d.english), word.english].sort(() => 0.5 - Math.random()),
            correctAnswer: word.english
          };
        case 'true-false':
          const isTrue = Math.random() > 0.5;
          const displayArabic = isTrue ? word.arabic : distractors[0].arabic;
          return {
            word,
            displayArabic,
            correctAnswer: isTrue
          };
        default:
          return { word };
      }
    });

    setQuestions(generated);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setUserAnswer(null);
    setIsCorrect(null);
  }, [mode, words]);

  const [matchSelected, setMatchSelected] = useState<any>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());

  const handleMatchSelect = (item: any) => {
    if (matchedIds.has(item.id + item.type)) return;
    
    if (!matchSelected) {
      setMatchSelected(item);
      return;
    }

    if (matchSelected.id === item.id && matchSelected.type !== item.type) {
      // Match!
      const newMatched = new Set(matchedIds);
      newMatched.add(item.id + 'english');
      newMatched.add(item.id + 'arabic');
      setMatchedIds(newMatched);
      setMatchSelected(null);
      setScore(s => s + 1);

      if (newMatched.size === questions[0].pairs.length) {
        setTimeout(() => {
          setShowResult(true);
          confetti();
        }, 1000);
      }
    } else {
      // Wrong
      setMatchSelected(null);
    }
  };

  // Handle Scramble logic
  useEffect(() => {
    if (mode === 'scramble' && questions[currentIndex]) {
      setShuffledLetters(questions[currentIndex].scrambled);
      setSelectedLetters([]);
    }
  }, [currentIndex, questions, mode]);

  const handleAnswer = (answer: any) => {
    if (userAnswer !== null) return;

    const current = questions[currentIndex];
    let correct = false;

    switch (mode) {
      case 'multiple-choice':
      case 'sentence':
        correct = answer === current.correctAnswer;
        break;
      case 'true-false':
        correct = answer === current.correctAnswer;
        break;
      case 'scramble':
      case 'missing':
      case 'listening':
        correct = answer.toLowerCase().trim() === current.correctAnswer.toLowerCase().trim();
        break;
    }

    setUserAnswer(answer);
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
      speak(current.word.english);
    }

    // Auto-advance for text inputs after a delay to show feedback
    if (mode === 'missing' || mode === 'listening' || mode === 'scramble') {
      setTimeout(() => {
        nextQuestion();
      }, 1500);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setUserAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
      if (score >= 8) confetti();
    }
  };

  const renderModeSelector = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center px-2">
        <BackButton onClick={onBack} />
        <Logo size="small" onClick={onLogoClick} />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-slate-800">اختر نوع الاختبار</h2>
        <p className="text-slate-500 font-bold">Choose your test type</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { id: 'multiple-choice', name: 'اختيار من متعدد', icon: <Type />, color: 'bg-blue-500' },
          { id: 'match', name: 'توصيل الكلمات', icon: <Layers />, color: 'bg-emerald-500' },
          { id: 'scramble', name: 'ترتيب الحروف', icon: <Hash />, color: 'bg-amber-500' },
          { id: 'missing', name: 'إكمال الحروف', icon: <Layers />, color: 'bg-rose-500' },
          { id: 'listening', name: 'اختبار الاستماع', icon: <Ear />, color: 'bg-indigo-500' },
          { id: 'sentence', name: 'إكمال الجمل', icon: <FileText />, color: 'bg-orange-500' },
          { id: 'true-false', name: 'صح أم خطأ', icon: <HelpCircle />, color: 'bg-pink-500' },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id as TestMode)}
            className="p-6 bg-white rounded-[2rem] shadow-sm border-2 border-transparent hover:border-indigo-100 hover:scale-[1.02] transition-all flex items-center gap-5 group"
          >
            <div className={cn("p-4 rounded-2xl text-white transition-transform group-hover:rotate-12", m.color)}>
              {m.icon}
            </div>
            <div className="text-right flex-1">
              <p className="text-xl font-black text-slate-800">{m.name}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{m.id.replace('-', ' ')}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderQuestion = () => {
    if (questions.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 font-bold">جاري تحضير الاختبار...</p>
        </div>
      );
    }

    const current = questions[currentIndex];
    if (!current) return null;

    const total = mode === 'match' ? 6 : questions.length;
    const currentProgress = mode === 'match' ? matchedIds.size / 2 : currentIndex + 1;

    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center gap-4">
            <BackButton onClick={() => setMode(null)} />
            <Logo size="small" onClick={onLogoClick} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
              {mode === 'match' ? 'توصيل الكلمات' : `السؤال ${currentIndex + 1} / ${questions.length}`}
            </span>
            <div className="h-2 w-32 bg-slate-100 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-indigo-500 transition-all" style={{ width: `${(currentProgress / total) * 100}%` }} />
            </div>
          </div>
        </div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-xl border-8 border-indigo-50"
        >
          {/* Question Content based on Mode */}
          <div className="space-y-10">
            {mode === 'match' ? (
              <div className="grid grid-cols-2 gap-4">
                {current.pairs?.map((item: any, i: number) => {
                  const isMatched = matchedIds.has(item.id + item.type);
                  const isSelected = matchSelected?.id === item.id && matchSelected?.type === item.type;
                  return (
                    <button
                      key={i}
                      onClick={() => handleMatchSelect(item)}
                      disabled={isMatched}
                      className={cn(
                        "p-4 h-24 rounded-2xl font-black text-xl transition-all border-4 flex items-center justify-center text-center",
                        isMatched ? "bg-emerald-50 border-emerald-200 text-emerald-300 opacity-50" :
                        isSelected ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-lg" :
                        "bg-slate-50 border-transparent text-slate-700 hover:border-indigo-200"
                      )}
                      dir={item.type === 'arabic' ? 'rtl' : 'ltr'}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
            ) : mode === 'listening' ? (
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-6">
                  <button 
                    onClick={() => speak(current.word.english, 'UK')}
                    className="flex flex-col items-center gap-3 p-8 bg-indigo-50 rounded-[2rem] text-indigo-600 hover:scale-110 transition-all shadow-inner"
                    title="British English"
                  >
                    <Volume2 size={48} />
                    <span className="text-sm font-bold tracking-widest">UK</span>
                  </button>
                  <button 
                    onClick={() => speak(current.word.english, 'US')}
                    className="flex flex-col items-center gap-3 p-8 bg-rose-50 rounded-[2rem] text-rose-600 hover:scale-110 transition-all shadow-inner"
                    title="American English"
                  >
                    <Volume2 size={48} />
                    <span className="text-sm font-bold tracking-widest">US</span>
                  </button>
                </div>
                <p className="text-slate-400 font-bold">استمع واكتب الكلمة</p>
              </div>
            ) : mode === 'sentence' ? (
              <div className="text-center space-y-6">
                <p className="text-3xl font-bold text-slate-600 leading-relaxed" dir="ltr">
                  {current.sentence}
                </p>
                <p className="text-2xl font-black text-indigo-600">{current.word.arabic}</p>
              </div>
            ) : mode === 'true-false' ? (
              <div className="text-center space-y-8">
                <div className="space-y-2">
                  <h3 className="text-5xl font-black text-slate-800">{current.word.english}</h3>
                  <div className="w-12 h-1 bg-slate-100 mx-auto rounded-full" />
                  <h3 className="text-5xl font-black text-indigo-600" dir="rtl">{current.displayArabic}</h3>
                </div>
                <p className="text-slate-400 font-bold">هل الترجمة صحيحة؟</p>
              </div>
            ) : mode === 'scramble' ? (
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-black text-indigo-600" dir="rtl">{current.word.arabic}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {selectedLetters?.map((idx, i) => (
                    <motion.button
                      key={`selected-${i}`}
                      layoutId={`letter-${idx}`}
                      onClick={() => setSelectedLetters(prev => prev.filter((_, index) => index !== i))}
                      className="w-12 h-12 bg-indigo-600 text-white rounded-xl font-black text-xl flex items-center justify-center shadow-lg"
                    >
                      {shuffledLetters[idx]}
                    </motion.button>
                  ))}
                  {Array.from({ length: (current.word?.english?.length || 0) - (selectedLetters?.length || 0) }).map((_, i) => (
                    <div key={`empty-${i}`} className="w-12 h-12 border-2 border-dashed border-slate-200 rounded-xl" />
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-slate-50">
                  {shuffledLetters?.map((letter, idx) => !selectedLetters?.includes(idx) && (
                    <motion.button
                      key={`source-${idx}`}
                      layoutId={`letter-${idx}`}
                      onClick={() => setSelectedLetters(prev => [...prev, idx])}
                      className="w-12 h-12 bg-white border-2 border-slate-100 text-slate-600 rounded-xl font-black text-xl flex items-center justify-center hover:border-indigo-300 transition-colors"
                    >
                      {letter}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : mode === 'missing' ? (
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-black text-indigo-600" dir="rtl">{current.word.arabic}</h3>
                <h3 className="text-6xl font-black text-slate-800 tracking-[0.2em]" dir="ltr">
                  {current.display}
                </h3>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <h3 className="text-5xl font-black text-slate-800">{current.word.english}</h3>
                <div className="flex justify-center gap-4">
                  <button onClick={() => speak(current.word.english, 'UK')} className="flex items-center gap-1 text-indigo-400 hover:text-indigo-600 transition-colors" title="British English">
                    <Volume2 size={24} />
                    <span className="text-xs font-bold">UK</span>
                  </button>
                  <button onClick={() => speak(current.word.english, 'US')} className="flex items-center gap-1 text-rose-400 hover:text-rose-600 transition-colors" title="American English">
                    <Volume2 size={24} />
                    <span className="text-xs font-bold">US</span>
                  </button>
                </div>
              </div>
            )}

            {/* Answers Section */}
            <div className="grid gap-4">
              {mode === 'multiple-choice' || mode === 'sentence' ? (
                <div className="grid gap-3">
                  {current.options?.map((opt: string, i: number) => (
                    <AnswerButton
                      key={i}
                      text={opt}
                      isSelected={userAnswer === opt}
                      isCorrect={opt === current.correctAnswer}
                      showResult={userAnswer !== null}
                      onClick={() => handleAnswer(opt)}
                      dir={mode === 'multiple-choice' ? 'rtl' : 'ltr'}
                    />
                  ))}
                  {userAnswer !== null && (
                    <div className="text-center mt-4">
                      {isCorrect ? (
                        <p className="text-emerald-500 font-black text-2xl">إجابة صحيحة!</p>
                      ) : (
                        <p className="text-rose-500 font-black text-2xl">إجابة خاطئة</p>
                      )}
                    </div>
                  )}
                </div>
              ) : mode === 'true-false' ? (
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAnswer(true)}
                    disabled={userAnswer !== null}
                    className={cn(
                      "flex-1 py-6 rounded-3xl font-black text-2xl transition-all border-4",
                      userAnswer === null ? "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100" :
                      current.correctAnswer === true ? "bg-emerald-500 text-white border-emerald-600" :
                      userAnswer === true ? "bg-rose-500 text-white border-rose-600" : "bg-slate-50 text-slate-300 border-transparent"
                    )}
                  >
                    صح
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    disabled={userAnswer !== null}
                    className={cn(
                      "flex-1 py-6 rounded-3xl font-black text-2xl transition-all border-4",
                      userAnswer === null ? "bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-100" :
                      current.correctAnswer === false ? "bg-emerald-500 text-white border-emerald-600" :
                      userAnswer === false ? "bg-rose-500 text-white border-rose-600" : "bg-slate-50 text-slate-300 border-transparent"
                    )}
                  >
                    خطأ
                  </button>
                </div>
              ) : (mode === 'listening' || mode === 'missing' || mode === 'scramble') ? (
                <div className="space-y-4">
                  {mode !== 'scramble' && (
                    <div className="space-y-4">
                      <input
                        id="answer-input"
                        type="text"
                        placeholder="اكتب الإجابة هنا..."
                        className="w-full p-6 bg-slate-50 rounded-[2rem] border-4 border-transparent focus:border-indigo-500 outline-none text-center text-3xl font-black transition-all"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAnswer((e.target as HTMLInputElement).value);
                        }}
                        disabled={userAnswer !== null}
                        autoFocus
                      />
                      <button
                        onClick={() => {
                          const input = document.getElementById('answer-input') as HTMLInputElement;
                          handleAnswer(input.value);
                        }}
                        disabled={userAnswer !== null}
                        className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-100"
                      >
                        {mode === 'listening' ? 'تأكد من الكلمة' : 'اختبر الإجابة هنا'}
                      </button>
                    </div>
                  )}
                  {mode === 'scramble' && (
                    <button
                      onClick={() => handleAnswer(selectedLetters.map(idx => shuffledLetters[idx]).join(''))}
                      disabled={userAnswer !== null || selectedLetters.length !== current.word.english.length}
                      className={cn(
                        "w-full py-6 rounded-[2rem] font-black text-2xl transition-all",
                        userAnswer === null ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100" :
                        isCorrect ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                      )}
                    >
                      {userAnswer === null ? "تحقق من الإجابة" : isCorrect ? "إجابة صحيحة!" : "إجابة خاطئة"}
                    </button>
                  )}
                  {userAnswer !== null && (
                    <div className="text-center animate-bounce">
                      {isCorrect ? (
                        <p className="text-emerald-500 font-black text-2xl">صح!</p>
                      ) : (
                        <p className="text-rose-500 font-black text-2xl">خطأ!</p>
                      )}
                    </div>
                  )}
                  {userAnswer !== null && !isCorrect && (
                    <p className="text-center text-rose-500 font-black text-xl">
                      الإجابة الصحيحة: <span className="underline">{current.correctAnswer}</span>
                    </p>
                  )}
                </div>
              ) : null}
            </div>

            {userAnswer !== null && (
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={nextQuestion}
                className="w-full p-6 bg-slate-800 text-white rounded-[2rem] font-black text-2xl flex items-center justify-center gap-3 hover:bg-slate-900 shadow-xl"
              >
                {currentIndex === questions.length - 1 ? "رؤية النتائج" : "السؤال التالي"} <ArrowRight size={28} />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    );
  };

  const renderResult = () => {
    const total = mode === 'match' ? 6 : questions.length;
    const percentage = (score / total) * 100;
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[4rem] p-12 shadow-2xl text-center border-8 border-indigo-50"
      >
        <Logo size="large" onClick={onLogoClick} className="mx-auto mb-6" />
        <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Trophy size={64} className="text-indigo-600" />
        </div>
        <h2 className="text-4xl font-black mb-4 text-slate-800">أحسنت يا بطل!</h2>
        <div className="text-8xl font-black mb-6 text-indigo-600">{score} / {total}</div>
        <p className="text-2xl font-bold mb-12 text-slate-500">
          {percentage >= 90 ? "أداء مذهل! أنت عبقري" : percentage >= 70 ? "عمل رائع! استمر في التقدم" : "محاولة جيدة، تدرب أكثر"}
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => setMode(null)}
            className="flex items-center justify-center gap-3 px-10 py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
          >
            <RotateCcw size={28} /> تجربة نوع آخر
          </button>
          <button 
            onClick={onBack}
            className="px-10 py-6 bg-slate-100 text-slate-600 rounded-[2rem] font-black text-xl hover:bg-slate-200 transition-all"
          >
            العودة للرئيسية
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!mode ? renderModeSelector() : showResult ? renderResult() : renderQuestion()}
    </div>
  );
};

const AnswerButton = ({ text, isSelected, isCorrect, showResult, onClick, dir = 'rtl' }: any) => {
  let btnClass = "bg-slate-50 text-slate-700 border-4 border-transparent shadow-sm";
  if (showResult) {
    if (isCorrect) btnClass = "bg-emerald-50 text-emerald-700 border-emerald-400";
    else if (isSelected) btnClass = "bg-rose-50 text-rose-700 border-rose-400";
    else btnClass = "bg-slate-50 text-slate-300 opacity-50";
  }

  return (
    <button
      onClick={onClick}
      disabled={showResult}
      className={cn(
        "w-full p-6 rounded-[2rem] text-2xl font-black transition-all flex justify-between items-center",
        btnClass,
        !showResult && "hover:bg-indigo-50 hover:border-indigo-100 hover:scale-[1.02]"
      )}
      dir={dir}
    >
      <span>{text}</span>
      {showResult && isCorrect && <CheckCircle2 size={28} className="text-emerald-500" />}
      {showResult && isSelected && !isCorrect && <XCircle size={28} className="text-rose-500" />}
    </button>
  );
};
