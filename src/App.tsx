import { useState, useMemo } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { words } from './data/words';
import { Category, Word } from './types';
import { speak, cn } from './utils';
import { Flashcard } from './components/Flashcard';
import { Quiz } from './components/Quiz';
import { MatchGame } from './components/MatchGame';

type View = 'landing' | 'home' | 'category' | 'flashcards' | 'match' | 'quiz' | 'results';

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [quizScore, setQuizScore] = useState({ score: 0, total: 0 });

  const categories: Category[] = ['Nouns', 'Verbs', 'Adjectives', 'Adverbs', 'Phrasal Verbs'];

  const filteredWords = useMemo(() => {
    let result = words;
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
  }, [selectedCategory, searchQuery]);

  const handleBack = () => {
    if (view === 'home') setView('landing');
    else if (view === 'category') setView('home');
    else if (['flashcards', 'match', 'quiz'].includes(view)) setView('category');
    else setView('home');
  };

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
            <h1 className="text-4xl sm:text-6xl font-black leading-[1.2] sm:leading-[1.15] tracking-tight drop-shadow-md" dir="rtl">
              كلمات اللغة الانجليزية
              <span className="block text-indigo-200 text-2xl sm:text-4xl mt-2 sm:mt-3 font-bold">للصف الأول الثانوي</span>
            </h1>
            
            <div className="h-1 w-16 sm:h-1.5 sm:w-24 bg-indigo-300 mx-auto rounded-full opacity-50" />
            
            <p className="text-xl sm:text-3xl font-semibold text-indigo-100" dir="rtl">
              إعداد / صادق الجباري
            </p>
          </div>
        </div>

        <div className="w-full space-y-4 sm:space-y-6 relative z-10 mt-8 sm:mt-0">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setView('home')}
            className="w-full py-4 sm:py-6 bg-white text-indigo-600 rounded-2xl sm:rounded-3xl font-black text-2xl sm:text-3xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)] hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 sm:gap-4 group"
          >
            <span>دخول</span>
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
    const categoryColors: Record<string, { bg: string, icon: string, border: string, light: string }> = {
      'Nouns': { bg: 'bg-blue-600', icon: 'text-blue-600', border: 'hover:border-blue-200', light: 'bg-blue-50' },
      'Verbs': { bg: 'bg-emerald-600', icon: 'text-emerald-600', border: 'hover:border-emerald-200', light: 'bg-emerald-50' },
      'Adjectives': { bg: 'bg-amber-600', icon: 'text-amber-600', border: 'hover:border-amber-200', light: 'bg-amber-50' },
      'Adverbs': { bg: 'bg-rose-600', icon: 'text-rose-600', border: 'hover:border-rose-200', light: 'bg-rose-50' },
      'Phrasal Verbs': { bg: 'bg-violet-600', icon: 'text-violet-600', border: 'hover:border-violet-200', light: 'bg-violet-50' },
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
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">مرحباً بك يا فراس!</h1>
            <p className="text-xl text-slate-500 font-bold">اختر مغامرتك التعليمية اليوم</p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, index) => {
            const colors = categoryColors[cat] || categoryColors['Nouns'];
            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, shadow: "0 25px 30px -10px rgb(0 0 0 / 0.15)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSelectedCategory(cat);
                  setView('category');
                }}
                className={cn(
                  "p-8 bg-white rounded-[3rem] shadow-sm border-2 border-transparent transition-all text-right flex items-center justify-between group overflow-hidden relative",
                  colors.border
                )}
              >
                {/* Decorative background circle */}
                <div className={cn("absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 transition-transform group-hover:scale-150", colors.bg)} />
                
                <div className={cn("p-5 rounded-3xl transition-all group-hover:scale-110", colors.light, colors.icon)}>
                  <BookOpen size={32} />
                </div>
                
                <div className="text-right relative z-10">
                  <h3 className="text-3xl font-black text-slate-800 tracking-tight">{cat}</h3>
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <span className="text-base text-slate-400 font-bold">
                      {words.filter(w => w.category === cat).length} كلمة
                    </span>
                    <div className={cn("w-2 h-2 rounded-full", colors.bg)} />
                  </div>
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
          onClick={() => setView('flashcards')}
          className="p-8 bg-white border-2 border-amber-100 text-amber-600 rounded-[2rem] font-black flex flex-col items-center gap-4 hover:bg-amber-50 hover:border-amber-200 transition-all shadow-sm"
        >
          <div className="p-4 bg-amber-100 rounded-2xl">
            <LayoutGrid size={32} />
          </div>
          <span className="text-lg">بطاقات تعليمية</span>
        </button>
        <button 
          onClick={() => setView('match')}
          className="p-8 bg-white border-2 border-emerald-100 text-emerald-600 rounded-[2rem] font-black flex flex-col items-center gap-4 hover:bg-emerald-50 hover:border-emerald-200 transition-all shadow-sm"
        >
          <div className="p-4 bg-emerald-100 rounded-2xl">
            <Gamepad2 size={32} />
          </div>
          <span className="text-lg">لعبة التوصيل</span>
        </button>
        <button 
          onClick={() => setView('quiz')}
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

  const renderFlashcards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWord = filteredWords[currentIndex];

    return (
      <div className="space-y-10 max-w-md mx-auto">
        <div className="flex items-center justify-between px-2">
          <button 
            onClick={handleBack} 
            className="p-3 bg-white hover:bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="font-black text-slate-400 text-lg">{currentIndex + 1} / {filteredWords.length}</span>
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
            disabled={currentIndex === filteredWords.length - 1}
            onClick={() => setCurrentIndex(c => c + 1)}
            className="flex-1 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
          >
            التالي <ArrowRight size={24} />
          </button>
        </div>
      </div>
    );
  };

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
            {view === 'category' && renderCategory()}
            {view === 'flashcards' && renderFlashcards()}
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
                <div className="flex items-center gap-6">
                  <button onClick={handleBack} className="p-3 bg-white hover:bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <h2 className="text-3xl font-black text-slate-800">وقت الاختبار!</h2>
                </div>
                <Quiz 
                  words={filteredWords} 
                  onComplete={(s, t) => {
                    setQuizScore({ score: s, total: t });
                  }}
                  onRestart={() => setView('quiz')}
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
            if (selectedCategory) setView('category');
            else setView('home');
          }}
          className={cn("flex flex-col items-center gap-1.5 transition-all", ['category', 'flashcards', 'match'].includes(view) ? "text-indigo-600 scale-110" : "text-slate-400 hover:text-slate-600")}
        >
          <Gamepad2 size={28} />
          <span className="text-[10px] font-black uppercase tracking-widest">الألعاب</span>
        </button>
        <button 
          onClick={() => {
            if (selectedCategory) setView('quiz');
            else setView('home');
          }}
          className={cn("flex flex-col items-center gap-1.5 transition-all", view === 'quiz' ? "text-indigo-600 scale-110" : "text-slate-400 hover:text-slate-600")}
        >
          <Trophy size={28} />
          <span className="text-[10px] font-black uppercase tracking-widest">الاختبار</span>
        </button>
      </nav>
    </div>
  );
}
