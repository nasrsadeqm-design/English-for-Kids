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

type View = 'home' | 'category' | 'flashcards' | 'match' | 'quiz' | 'results';

export default function App() {
  const [view, setView] = useState<View>('home');
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
    if (view === 'category') setView('home');
    else if (['flashcards', 'match', 'quiz'].includes(view)) setView('category');
    else setView('home');
  };

  const renderHome = () => (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-black text-indigo-600 tracking-tight">English for Kids</h1>
        <p className="text-slate-500 font-medium">تعلم الإنجليزية بطريقة ممتعة!</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSelectedCategory(cat);
              setView('category');
            }}
            className="p-6 bg-white rounded-3xl shadow-sm border-2 border-transparent hover:border-indigo-200 transition-all text-right flex items-center justify-between group"
          >
            <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <BookOpen size={24} />
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold text-slate-800">{cat}</h3>
              <p className="text-sm text-slate-400 font-medium">
                {words.filter(w => w.category === cat).length} words
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );

  const renderCategory = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button onClick={handleBack} className="p-2 hover:bg-white rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold text-slate-800">{selectedCategory}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button 
          onClick={() => setView('flashcards')}
          className="p-6 bg-amber-100 text-amber-700 rounded-3xl font-bold flex flex-col items-center gap-3 hover:bg-amber-200 transition-colors"
        >
          <LayoutGrid size={32} />
          Flashcards
        </button>
        <button 
          onClick={() => setView('match')}
          className="p-6 bg-emerald-100 text-emerald-700 rounded-3xl font-bold flex flex-col items-center gap-3 hover:bg-emerald-200 transition-colors"
        >
          <Gamepad2 size={32} />
          Match Game
        </button>
        <button 
          onClick={() => setView('quiz')}
          className="p-6 bg-indigo-100 text-indigo-700 rounded-3xl font-bold flex flex-col items-center gap-3 hover:bg-indigo-200 transition-colors"
        >
          <GraduationCap size={32} />
          Start Quiz
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text"
          placeholder="Search words... ابحث عن كلمة"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl shadow-sm border-2 border-transparent focus:border-indigo-500 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        {filteredWords.map((word) => (
          <div key={word.id} className="p-4 bg-white rounded-2xl shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => speak(word.english)}
                className="p-2 bg-indigo-50 rounded-xl text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
              >
                <Volume2 size={20} />
              </button>
              <div>
                <p className="text-lg font-bold text-slate-800">{word.english}</p>
                <p className="text-sm text-slate-400 font-medium uppercase tracking-tighter">{word.category}</p>
              </div>
            </div>
            <p className="text-xl font-bold text-indigo-600" dir="rtl">{word.arabic}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFlashcards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWord = filteredWords[currentIndex];

    return (
      <div className="space-y-8 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <button onClick={handleBack} className="p-2 hover:bg-white rounded-full transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="font-bold text-slate-400">{currentIndex + 1} / {filteredWords.length}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
          >
            <Flashcard word={currentWord} />
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4">
          <button 
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(c => c - 1)}
            className="flex-1 p-4 bg-white rounded-2xl font-bold text-slate-600 disabled:opacity-30"
          >
            Previous
          </button>
          <button 
            disabled={currentIndex === filteredWords.length - 1}
            onClick={() => setCurrentIndex(c => c + 1)}
            className="flex-1 p-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2"
          >
            Next <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pb-20 pt-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {view === 'home' && renderHome()}
            {view === 'category' && renderCategory()}
            {view === 'flashcards' && renderFlashcards()}
            {view === 'match' && (
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <button onClick={handleBack} className="p-2 hover:bg-white rounded-full transition-colors">
                    <ChevronLeft size={24} />
                  </button>
                  <h2 className="text-2xl font-bold text-slate-800">Match Game</h2>
                </div>
                <MatchGame words={filteredWords} onComplete={() => setView('category')} />
              </div>
            )}
            {view === 'quiz' && (
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <button onClick={handleBack} className="p-2 hover:bg-white rounded-full transition-colors">
                    <ChevronLeft size={24} />
                  </button>
                  <h2 className="text-2xl font-bold text-slate-800">Quiz Time!</h2>
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
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 px-6 py-4 flex justify-around items-center z-50">
        <button 
          onClick={() => setView('home')}
          className={cn("flex flex-col items-center gap-1 transition-colors", view === 'home' ? "text-indigo-600" : "text-slate-400")}
        >
          <LayoutGrid size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </button>
        <button 
          onClick={() => {
            if (selectedCategory) setView('category');
            else setView('home');
          }}
          className={cn("flex flex-col items-center gap-1 transition-colors", ['category', 'flashcards', 'match'].includes(view) ? "text-indigo-600" : "text-slate-400")}
        >
          <Gamepad2 size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Games</span>
        </button>
        <button 
          onClick={() => {
            if (selectedCategory) setView('quiz');
            else setView('home');
          }}
          className={cn("flex flex-col items-center gap-1 transition-colors", view === 'quiz' ? "text-indigo-600" : "text-slate-400")}
        >
          <Trophy size={24} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Quiz</span>
        </button>
      </nav>
    </div>
  );
}
