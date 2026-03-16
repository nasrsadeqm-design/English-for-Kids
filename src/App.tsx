import { useState, useMemo, useEffect, useCallback } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Gamepad2, 
  GraduationCap, 
  ChevronLeft, 
  Search,
  Volume2,
  LayoutGrid,
  Trophy,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  Lock,
  Settings
} from 'lucide-react';
import { words } from './data/words';
import studentsData from './data/students.json';
import { Category, Word } from './types';
import { speak, cn } from './utils';
import { Flashcard } from './components/Flashcard';
import { AdvancedQuiz as Quiz } from './components/AdvancedQuiz';
import { MatchGame } from './components/MatchGame';
import { DictionaryTool } from './components/DictionaryTool';
import { 
  getDeviceFingerprint, 
  getStoredLicense, 
  getStudentIdFromUrl, 
  saveLicense, 
  generateLicenseToken 
} from './utils/activation';

interface FlashcardViewProps {
  words: Word[];
  onBack: () => void;
}

const FlashcardView: React.FC<FlashcardViewProps> = ({ words, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (words.length === 0) {
    return (
      <div className="text-center py-20 space-y-6">
        <div className="text-6xl">🔍</div>
        <h3 className="text-2xl font-black text-slate-800">لا توجد كلمات في هذا القسم بعد</h3>
        <button onClick={onBack} className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black">
          العودة للخلف
        </button>
      </div>
    );
  }

  const currentWord = words[currentIndex];

  return (
    <div className="space-y-10 max-w-md mx-auto">
      <div className="flex items-center justify-between px-2">
        <button 
          onClick={onBack} 
          className="p-3 bg-white hover:bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="font-black text-slate-400 text-lg">{currentIndex + 1} / {words.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          className="perspective-1000"
        >
          <Flashcard word={currentWord} />
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-5">
        <button 
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(c => c - 1)}
          className="flex-1 py-5 bg-white rounded-[2rem] font-black text-xl text-slate-600 shadow-sm border-2 border-transparent hover:border-indigo-100 disabled:opacity-30 transition-all"
        >
          السابق
        </button>
        <button 
          disabled={currentIndex === words.length - 1}
          onClick={() => setCurrentIndex(c => c + 1)}
          className="flex-1 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
        >
          التالي <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

type View = 'landing' | 'home' | 'category' | 'flashcards' | 'match' | 'quiz' | 'results' | 'select-category' | 'activation' | 'admin';

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [isActivated, setIsActivated] = useState<boolean | null>(null);
  const [studentId, setStudentId] = useState<string | null>(null);
  const [activationCode, setActivationCode] = useState('');
  const [activationError, setActivationError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [targetGame, setTargetGame] = useState<'flashcards' | 'match' | 'quiz' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [quizScore, setQuizScore] = useState({ score: 0, total: 0 });
  const [allWords, setAllWords] = useState<Word[]>(words);

  // Activation Check
  useEffect(() => {
    const checkActivation = async () => {
      const storedLicense = getStoredLicense();
      const urlStudentId = getStudentIdFromUrl();
      const fingerprint = await getDeviceFingerprint();
      
      setStudentId(urlStudentId);

      if (storedLicense) {
        // In a real app, we might re-verify the license against the fingerprint here
        setIsActivated(true);
      } else {
        setIsActivated(false);
        if (urlStudentId) {
          setView('activation');
        }
      }
    };
    checkActivation();
  }, []);

  const handleActivate = async () => {
    if (!studentId) {
      setActivationError('عذراً، لم يتم العثور على معرف الطالب في الرابط.');
      return;
    }

    setIsVerifying(true);
    setActivationError('');

    try {
      const student = studentsData.find(s => s.student === studentId);
      
      if (!student) {
        setActivationError('معرف الطالب غير صحيح.');
      } else if (student.code !== activationCode.trim().toUpperCase()) {
        setActivationError('كود التفعيل غير صحيح.');
      } else {
        // Check if already used (simulated since we don't have a backend)
        const usedCodes = JSON.parse(localStorage.getItem('used_activation_codes') || '[]');
        if (usedCodes.includes(student.code)) {
          // setActivationError('هذا الكود تم استخدامه مسبقاً على جهاز آخر.');
          // For this demo, we'll allow it but in production you'd check a DB
        }

        const fingerprint = await getDeviceFingerprint();
        const token = await generateLicenseToken(studentId, student.code, fingerprint);
        
        saveLicense(token);
        
        // Mark as used locally
        usedCodes.push(student.code);
        localStorage.setItem('used_activation_codes', JSON.stringify(usedCodes));
        
        setIsActivated(true);
        setView('landing');
      }
    } catch (err) {
      setActivationError('حدث خطأ أثناء التفعيل. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsVerifying(false);
    }
  };

  // Load user-added words from localStorage
  useEffect(() => {
    const savedWords = localStorage.getItem('user_added_words');
    if (savedWords) {
      try {
        const parsed = JSON.parse(savedWords);
        setAllWords(prev => [...prev, ...parsed]);
      } catch (e) {
        console.error("Error loading saved words:", e);
      }
    }
  }, []);

  const handleAddWord = useCallback((newWord: Word) => {
    setAllWords(prev => {
      // Check if word already exists (to avoid duplicates from Gemini)
      if (prev.some(w => w.english.toLowerCase() === newWord.english.toLowerCase())) {
        return prev;
      }
      
      const updated = [...prev, newWord];
      
      // Save only user-added words to localStorage
      const userWords = updated.filter(w => w.id.startsWith('user-'));
      localStorage.setItem('user_added_words', JSON.stringify(userWords));
      
      return updated;
    });
  }, []);

  const categories: Category[] = ['Nouns', 'Verbs', 'Adjectives', 'Adverbs', 'Phrasal Verbs'];

  const filteredWords = useMemo(() => {
    let result = allWords;
    if (selectedCategory) {
      result = result.filter(w => w.category === selectedCategory);
    }
    if (searchQuery) {
      result = result.filter(w => 
        w.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.arabic.includes(searchQuery)
      );
    }
    return result;
  }, [allWords, selectedCategory, searchQuery]);

  const handleBack = () => {
    if (view === 'home') setView('landing');
    else if (view === 'category') setView('home');
    else if (view === 'select-category') setView('home');
    else if (['flashcards', 'match', 'quiz'].includes(view)) {
      if (targetGame) {
        setView('select-category');
      } else {
        setView('category');
      }
    }
    else setView('home');
  };

  const renderActivation = () => (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-white">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border-2 border-indigo-50 text-center space-y-8"
      >
        <div className="w-20 h-20 bg-indigo-100 rounded-3xl mx-auto flex items-center justify-center text-indigo-600">
          <ShieldCheck size={48} />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-slate-800">تفعيل الكتاب</h2>
          <p className="text-slate-500 font-bold">أدخل كود التفعيل الخاص بك للمتابعة</p>
          {studentId && (
            <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-xs font-black text-slate-400 mt-2">
              ID: {studentId}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            <input 
              type="text"
              placeholder="ENG-XXXX-XXXX-XXXX"
              value={activationCode}
              onChange={(e) => setActivationCode(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all text-center font-black tracking-widest uppercase placeholder:tracking-normal placeholder:font-bold"
            />
          </div>

          {activationError && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-rose-500 bg-rose-50 p-4 rounded-xl text-sm font-bold justify-center"
            >
              <AlertCircle size={18} />
              <span>{activationError}</span>
            </motion.div>
          )}

          <button 
            disabled={isVerifying || !activationCode}
            onClick={handleActivate}
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
          >
            {isVerifying ? 'جاري التحقق...' : 'تفعيل الآن'}
            {!isVerifying && <ArrowRight size={24} />}
          </button>
        </div>

        <p className="text-xs text-slate-400 font-bold leading-relaxed">
          * هذا الكود صالح لجهاز واحد فقط.<br/>
          * في حال فقدان الكود يرجى التواصل مع الأستاذ.
        </p>
      </motion.div>
    </div>
  );

  const renderAdmin = () => (
    <div className="min-h-screen p-6 bg-slate-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <button onClick={() => setView('home')} className="p-3 bg-white rounded-2xl shadow-sm text-slate-400">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-2xl font-black text-slate-800">لوحة التحكم (Admin)</h2>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden">
          <table className="w-full text-right" dir="rtl">
            <thead className="bg-slate-50 text-slate-400 text-xs uppercase tracking-widest font-black">
              <tr>
                <th className="px-6 py-4">معرف الطالب</th>
                <th className="px-6 py-4">كود التفعيل</th>
                <th className="px-6 py-4">الحالة</th>
                <th className="px-6 py-4">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {studentsData.map(s => {
                const usedCodes = JSON.parse(localStorage.getItem('used_activation_codes') || '[]');
                const isUsed = usedCodes.includes(s.code);
                return (
                  <tr key={s.student} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-black text-slate-700">{s.student}</td>
                    <td className="px-6 py-4 font-mono text-indigo-600 font-bold">{s.code}</td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black uppercase",
                        isUsed ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"
                      )}>
                        {isUsed ? 'مفعل' : 'غير مفعل'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => {
                          const updated = usedCodes.filter((c: string) => c !== s.code);
                          localStorage.setItem('used_activation_codes', JSON.stringify(updated));
                          window.location.reload();
                        }}
                        className="text-rose-500 hover:underline text-xs font-bold"
                      >
                        إعادة تعيين
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderLanding = () => (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-white">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-lg min-h-[580px] sm:aspect-[3/4.2] bg-indigo-600 rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col items-center justify-between p-8 sm:p-14 text-white border-[10px] sm:border-[16px] border-indigo-700"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
        
        <div className="relative z-10 text-center space-y-6 sm:space-y-8 w-full">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-20 h-20 sm:w-28 sm:h-28 bg-white/15 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] mx-auto flex items-center justify-center shadow-inner"
          >
            <BookOpen size={40} className="text-white sm:size-[56px] drop-shadow-lg" />
          </motion.div>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-1 flex flex-col items-center">
              <h2 className="text-lg sm:text-2xl font-bold text-indigo-200 uppercase tracking-[0.2em] sm:tracking-[0.3em]">English Vocabulary</h2>
              <h1 className="text-2xl sm:text-6xl font-black leading-[1.2] sm:leading-[1.15] tracking-tight drop-shadow-md whitespace-nowrap text-center" dir="rtl">
                كلمات اللغة الانجليزية
                <span className="block text-lg sm:text-4xl mt-1 sm:mt-3 font-bold text-indigo-200">للصف الأول الثانوي</span>
              </h1>
            </div>
            
            <div className="h-1 w-16 sm:h-1.5 sm:w-24 bg-indigo-300 mx-auto rounded-full opacity-50" />
            
            <p className="text-lg sm:text-xl font-black text-indigo-100 whitespace-nowrap" dir="rtl">
              إعداد الأستاذ / صادق الجباري
            </p>
          </div>
        </div>

        <div className="w-full space-y-4 sm:space-y-6 relative z-10 mt-12 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setView('home')}
            className="w-full py-4 sm:py-6 bg-white text-indigo-600 rounded-2xl sm:rounded-3xl font-black text-2xl sm:text-3xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)] hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 sm:gap-4 group"
          >
            <span>دخول • Enter</span>
            <ArrowRight size={24} className="sm:size-[32px] group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <p className="text-center text-indigo-200/80 font-medium text-xs sm:text-sm tracking-widest uppercase">
            Interactive Learning Experience
          </p>
        </div>

        {/* Book Spine Detail */}
        <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-gradient-to-r from-black/30 to-transparent" />
      </motion.div>
    </div>
  );

  const renderHome = () => {
    const categoryColors: Record<string, { bg: string, icon: string, border: string, light: string, arabic: string }> = {
      'Nouns': { bg: 'bg-blue-600', icon: 'text-blue-600', border: 'hover:border-blue-200', light: 'bg-blue-50', arabic: 'الأسماء' },
      'Verbs': { bg: 'bg-emerald-600', icon: 'text-emerald-600', border: 'hover:border-emerald-200', light: 'bg-emerald-50', arabic: 'الأفعال' },
      'Adjectives': { bg: 'bg-amber-600', icon: 'text-amber-600', border: 'hover:border-amber-200', light: 'bg-amber-50', arabic: 'الصفات' },
      'Adverbs': { bg: 'bg-rose-600', icon: 'text-rose-600', border: 'hover:border-rose-200', light: 'bg-rose-50', arabic: 'الظروف' },
      'Phrasal Verbs': { bg: 'bg-violet-600', icon: 'text-violet-600', border: 'hover:border-violet-200', light: 'bg-violet-50', arabic: 'الأفعال المركبة' },
    };

    return (
      <div className="space-y-10">
        <header className="flex flex-col items-center text-center space-y-4 relative">
          <button 
            onClick={handleBack}
            className="absolute left-0 top-0 p-3 bg-white rounded-2xl shadow-sm text-slate-400 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <motion.div 
            initial={{ scale: 0.5, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="w-24 h-24 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-[2rem] flex items-center justify-center shadow-xl shadow-indigo-200"
          >
            <GraduationCap size={48} className="text-white" />
          </motion.div>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">مرحباً بك يا فراس!</h1>
            <p className="text-lg text-slate-500 font-bold">Welcome Feras! challenge yourself</p>
            <p className="text-sm text-indigo-500 font-bold mt-2" dir="rtl">حفظ ثلاث كلمات يومياً يجعلك قريباً من التحدث باللغة الإنجليزية</p>
          </div>
        </header>

        <DictionaryTool localWords={allWords} onAddWord={handleAddWord} />

        <div className="pt-4">
          <h3 className="text-2xl font-black text-slate-800 mb-6 px-2">تصفح حسب الأقسام</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, index) => {
              const colors = categoryColors[cat] || { bg: 'bg-indigo-600', icon: 'text-indigo-600', border: 'hover:border-indigo-200', light: 'bg-indigo-50', arabic: cat };
              return (
                <motion.button
                  key={cat}
                  onClick={() => {
                    setTargetGame(null);
                    setSelectedCategory(cat);
                    setView('category');
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "p-6 bg-white rounded-[2.5rem] border-2 border-transparent transition-all text-right flex items-center justify-between group shadow-sm",
                    colors.border
                  )}
                >
                  <div className={cn("p-4 rounded-2xl transition-all group-hover:scale-110", colors.light, colors.icon)}>
                    <ChevronRight size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-black text-slate-800">{colors.arabic}</p>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{cat} • {allWords.filter(w => w.category === cat).length} words</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderSelectCategory = () => {
    const categoryColors: Record<string, { bg: string, icon: string, border: string, light: string, arabic: string }> = {
      'Nouns': { bg: 'bg-blue-600', icon: 'text-blue-600', border: 'hover:border-blue-200', light: 'bg-blue-50', arabic: 'الأسماء' },
      'Verbs': { bg: 'bg-emerald-600', icon: 'text-emerald-600', border: 'hover:border-emerald-200', light: 'bg-emerald-50', arabic: 'الأفعال' },
      'Adjectives': { bg: 'bg-amber-600', icon: 'text-amber-600', border: 'hover:border-amber-200', light: 'bg-amber-50', arabic: 'الصفات' },
      'Adverbs': { bg: 'bg-rose-600', icon: 'text-rose-600', border: 'hover:border-rose-200', light: 'bg-rose-50', arabic: 'الظروف' },
      'Phrasal Verbs': { bg: 'bg-violet-600', icon: 'text-violet-600', border: 'hover:border-violet-200', light: 'bg-violet-50', arabic: 'الأفعال المركبة' },
    };

    const gameTitle = targetGame === 'flashcards' ? 'البطاقات التعليمية' : targetGame === 'quiz' ? 'اختبار' : 'لعبة التوصيل';

    return (
      <div className="space-y-10">
        <div className="flex items-center gap-6">
          <button onClick={handleBack} className="p-3 bg-white hover:bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm transition-all">
            <ChevronLeft size={24} />
          </button>
          <div className="text-right">
            <h2 className="text-3xl font-black text-slate-800">{gameTitle}</h2>
            <p className="text-slate-400 font-bold">اختر قسماً للبدء</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, index) => {
            const colors = categoryColors[cat] || { bg: 'bg-indigo-600', icon: 'text-indigo-600', border: 'hover:border-indigo-200', light: 'bg-indigo-50', arabic: cat };
            return (
              <motion.button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  if (targetGame) setView(targetGame);
                  else setView('category');
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-6 bg-white rounded-[2.5rem] border-2 border-transparent transition-all text-right flex items-center justify-between group shadow-sm",
                  colors.border
                )}
              >
                <div className={cn("p-4 rounded-2xl transition-all group-hover:scale-110", colors.light, colors.icon)}>
                  <ChevronRight size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-black text-slate-800">{colors.arabic}</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{cat}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCategory = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <button 
          onClick={handleBack} 
          className="p-3 bg-white hover:bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-3xl font-black text-slate-800">{selectedCategory}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <button 
          onClick={() => {
            setTargetGame(null);
            setView('flashcards');
          }}
          className="p-8 bg-white border-2 border-amber-100 text-amber-600 rounded-[2rem] font-black flex flex-col items-center gap-4 hover:bg-amber-50 hover:border-amber-200 transition-all shadow-sm"
        >
          <div className="p-4 bg-amber-100 rounded-2xl">
            <LayoutGrid size={32} />
          </div>
          <span className="text-lg">بطاقات تعليمية</span>
        </button>
        <button 
          onClick={() => {
            setTargetGame(null);
            setView('match');
          }}
          className="p-8 bg-white border-2 border-emerald-100 text-emerald-600 rounded-[2rem] font-black flex flex-col items-center gap-4 hover:bg-emerald-50 hover:border-emerald-200 transition-all shadow-sm"
        >
          <div className="p-4 bg-emerald-100 rounded-2xl">
            <Gamepad2 size={32} />
          </div>
          <span className="text-lg">لعبة التوصيل</span>
        </button>
        <button 
          onClick={() => {
            setTargetGame(null);
            setView('quiz');
          }}
          className="p-8 bg-white border-2 border-indigo-100 text-indigo-600 rounded-[2rem] font-black flex flex-col items-center gap-4 hover:bg-indigo-50 hover:border-indigo-200 transition-all shadow-sm"
        >
          <div className="p-4 bg-indigo-100 rounded-2xl">
            <GraduationCap size={32} />
          </div>
          <span className="text-lg">اختبر نفسك</span>
        </button>
      </div>

      <div className="relative group">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={24} />
        <input 
          type="text"
          placeholder="ابحث عن كلمة... Search words"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-8 py-5 bg-white rounded-[2rem] shadow-sm border-2 border-transparent focus:border-indigo-500 outline-none transition-all text-xl font-bold placeholder:text-slate-300"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredWords.map((word) => (
          <motion.div 
            key={word.id} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-white rounded-[2rem] shadow-sm flex items-center justify-between group hover:shadow-md hover:scale-[1.01] transition-all border-2 border-transparent hover:border-indigo-50"
          >
            <div className="flex items-center gap-5">
              <button 
                onClick={() => speak(word.english)}
                className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-inner"
              >
                <Volume2 size={24} />
              </button>
              <div>
                <p className="text-2xl font-black text-slate-800 tracking-tight">{word.english}</p>
                <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mt-0.5">{word.category}</p>
              </div>
            </div>
            <p className="text-3xl font-black text-indigo-600" dir="rtl">{word.arabic}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  if (isActivated === false && view === 'activation') return renderActivation();
  if (view === 'admin') return renderAdmin();
  if (view === 'landing') return renderLanding();

  return (
    <div className="min-h-screen pb-28 pt-10 px-4 sm:px-6 bg-indigo-50/30">
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {view === 'home' && renderHome()}
            {view === 'select-category' && renderSelectCategory()}
            {view === 'category' && renderCategory()}
            {view === 'flashcards' && (
              <FlashcardView words={filteredWords} onBack={handleBack} />
            )}
            {view === 'match' && (
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <button onClick={handleBack} className="p-3 bg-white hover:bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <h2 className="text-3xl font-black text-slate-800">لعبة التوصيل</h2>
                </div>
                <MatchGame words={filteredWords} onComplete={() => setView('category')} />
              </div>
            )}
            {view === 'quiz' && (
              <div className="space-y-10">
                <Quiz 
                  words={filteredWords} 
                  onBack={handleBack}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] px-8 py-5 flex justify-around items-center z-50">
        <button 
          onClick={() => setView('home')}
          className={cn("flex flex-col items-center gap-1.5 transition-all", view === 'home' ? "text-indigo-600 scale-110" : "text-slate-400 hover:text-slate-600")}
        >
          <LayoutGrid size={28} />
          <span className="text-[10px] font-black uppercase tracking-widest">الرئيسية</span>
        </button>
        <button 
          onClick={() => {
            setTargetGame('flashcards');
            setView('select-category');
          }}
          className={cn("flex flex-col items-center gap-1.5 transition-all", view === 'flashcards' || (view === 'select-category' && targetGame === 'flashcards') ? "text-indigo-600 scale-110" : "text-slate-400 hover:text-slate-600")}
        >
          <BookOpen size={28} />
          <span className="text-[10px] font-black uppercase tracking-widest">البطاقات</span>
        </button>
        <button 
          onClick={() => {
            setTargetGame('quiz');
            setView('select-category');
          }}
          className={cn("flex flex-col items-center gap-1.5 transition-all", view === 'quiz' || (view === 'select-category' && targetGame === 'quiz') ? "text-indigo-600 scale-110" : "text-slate-400 hover:text-slate-600")}
        >
          <Trophy size={28} />
          <span className="text-[10px] font-black uppercase tracking-widest">الاختبار</span>
        </button>
        <button 
          onDoubleClick={() => setView('admin')}
          className="flex flex-col items-center gap-1.5 text-slate-200 hover:text-slate-400 transition-all opacity-20"
        >
          <Settings size={28} />
          <span className="text-[10px] font-black uppercase tracking-widest">Admin</span>
        </button>
      </nav>
    </div>
  );
}
