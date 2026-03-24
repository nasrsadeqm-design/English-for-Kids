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
  Settings,
  Sparkles,
  Printer,
  Download,
  LogOut
} from 'lucide-react';
import { words } from './data/words';
import studentsDataRaw from './data/students.json';
import { Category, Word } from './types';
import { speak, cn } from './utils';
import { Flashcard } from './components/Flashcard';
import { EducationalCard } from './components/EducationalCard';
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
import { db } from './firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { GrammarLesson } from './components/GrammarLesson';
import { GrammarQuiz } from './components/GrammarQuiz';
import { allGrammarLessons } from './data/grammar';
import { situationalWords } from './data/situations';
import { BackButton } from './components/BackButton';

interface FlashcardViewProps {
  words: Word[];
  onBack: () => void;
}

const FlashcardView: React.FC<FlashcardViewProps> = ({ words, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModern, setIsModern] = useState(true);
  
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
    <div className="space-y-10 max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-2">
        <BackButton onClick={onBack} />
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsModern(!isModern)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-black transition-all border-2",
              isModern 
                ? "bg-indigo-600 text-white border-indigo-600" 
                : "bg-white text-slate-400 border-slate-100"
            )}
          >
            {isModern ? 'الوضع الحديث ✨' : 'الوضع الكلاسيكي 🃏'}
          </button>
          <span className="font-black text-slate-400 text-lg">{currentIndex + 1} / {words.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentIndex}-${isModern}`}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          className="perspective-1000"
        >
          {isModern ? (
            <EducationalCard 
              word={currentWord} 
              onNext={() => currentIndex < words.length - 1 && setCurrentIndex(c => c + 1)}
              onPrev={() => currentIndex > 0 && setCurrentIndex(c => c - 1)}
              isFirst={currentIndex === 0}
              isLast={currentIndex === words.length - 1}
            />
          ) : (
            <div className="space-y-10 max-w-md mx-auto">
              <Flashcard word={currentWord} />
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
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

type View = 'landing' | 'home' | 'category' | 'flashcards' | 'match' | 'quiz' | 'results' | 'select-category' | 'activation' | 'admin' | 'grammar-list' | 'grammar-lesson' | 'grammar-quiz' | 'global-grammar-quiz' | 'games-menu' | 'situations';

export default function App() {
  const [view, setView] = useState<View>('home'); // Default to home, but logic below will override
  const [isActivated, setIsActivated] = useState<boolean | null>(null);
  const [studentId, setStudentId] = useState<string | null>(null);
  const [activationCode, setActivationCode] = useState('');
  const [activationError, setActivationError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [adminSearch, setAdminSearch] = useState('');
  
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [targetGame, setTargetGame] = useState<'flashcards' | 'match' | 'quiz' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [quizScore, setQuizScore] = useState({ score: 0, total: 0 });
  const [allWords, setAllWords] = useState<Word[]>(words);
  const [selectedGrammarLesson, setSelectedGrammarLesson] = useState<any>(null);
  const [globalGrammarQuestions, setGlobalGrammarQuestions] = useState<any[]>([]);

  // Generate 2000 students if the JSON is just a sample
  const studentsData = useMemo(() => {
    if (studentsDataRaw.length >= 2000) return studentsDataRaw;
    
    const fullList = [...studentsDataRaw];
    const existingCount = studentsDataRaw.length;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    for (let i = existingCount; i < 2000; i++) {
      const segment = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
      fullList.push({
        student: `STU-${(i + 1).toString().padStart(4, '0')}`,
        code: `ENG-${segment()}-${segment()}-${segment()}`
      });
    }
    return fullList;
  }, []);

  // Activation Check
  useEffect(() => {
    const checkActivation = async () => {
      const storedLicense = getStoredLicense();
      const urlStudentId = getStudentIdFromUrl();
      
      if (urlStudentId) {
        setStudentId(urlStudentId);
      }

      if (storedLicense) {
        setIsActivated(true);
        setView('landing');
      } else {
        setIsActivated(false);
        setView('activation');
      }
    };
    checkActivation();
  }, []);

  const handleActivate = async () => {
    const finalStudentId = studentId?.trim().toUpperCase();
    
    if (!finalStudentId) {
      setActivationError('يرجى إدخال معرف الطالب (مثال: STU-0001)');
      return;
    }

    setIsVerifying(true);
    setActivationError('');

    try {
      const student = studentsData.find(s => s.student.toUpperCase() === finalStudentId);
      
      if (!student) {
        setActivationError('معرف الطالب غير صحيح.');
        setIsVerifying(false);
        return;
      } 
      
      if (student.code !== activationCode.trim().toUpperCase()) {
        setActivationError('كود التفعيل غير صحيح.');
        setIsVerifying(false);
        return;
      }

      // --- Firebase Integration ---
      const fingerprint = await getDeviceFingerprint();
      const activationRef = doc(db, 'activations', finalStudentId);
      const activationSnap = await getDoc(activationRef);

      if (activationSnap.exists()) {
        const data = activationSnap.data();
        if (data.deviceFingerprint !== fingerprint) {
          setActivationError('عذراً، هذا الكود مفعل مسبقاً على جهاز آخر. لا يمكن استخدامه إلا على جهاز واحد.');
          setIsVerifying(false);
          return;
        }
        // If it exists and fingerprint matches, we just proceed to save local license
      } else {
        // New activation - save to Firestore
        await setDoc(activationRef, {
          studentId: finalStudentId,
          activationCode: student.code,
          deviceFingerprint: fingerprint,
          activatedAt: serverTimestamp()
        });
      }
      // --- End Firebase Integration ---

      const token = await generateLicenseToken(finalStudentId, student.code, fingerprint);
      saveLicense(token);
      
      setIsActivated(true);
      setView('landing');
    } catch (err) {
      console.error('Activation Error:', err);
      setActivationError('حدث خطأ أثناء التفعيل السحابي. يرجى التأكد من اتصالك بالإنترنت.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handlePrintCodes = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const html = `
      <html dir="rtl">
        <head>
          <title>قائمة أكواد تفعيل الطلاب</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: right; }
            th { bg-color: #f4f4f4; }
            .url { font-size: 10px; color: #666; }
            h1 { text-align: center; color: #4f46e5; }
          </style>
        </head>
        <body>
          <h1>قائمة أكواد تفعيل كتاب اللغة الإنجليزية</h1>
          <table>
            <thead>
              <tr>
                <th>المعرف (ID)</th>
                <th>كود التفعيل</th>
                <th>رابط الدخول المباشر</th>
              </tr>
            </thead>
            <tbody>
              ${studentsData.map(s => `
                <tr>
                  <td><b>${s.student}</b></td>
                  <td style="font-family: monospace; color: #4f46e5;">${s.code}</td>
                  <td class="url">${window.location.origin}/?student=${s.student}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <script>window.print();</script>
        </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
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
      if (prev.some(w => w.english.toLowerCase() === newWord.english.toLowerCase())) {
        return prev;
      }
      const updated = [...prev, newWord];
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
    else if (view === 'select-category') setView('games-menu');
    else if (['flashcards', 'match', 'quiz'].includes(view)) {
      if (targetGame) setView('select-category');
      else setView('category');
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
          <p className="text-slate-500 font-bold">أدخل بيانات التفعيل للمتابعة</p>
          {getStudentIdFromUrl() && (
            <div className="inline-block px-4 py-1 bg-slate-100 rounded-full text-xs font-black text-slate-400 mt-2">
              ID: {getStudentIdFromUrl()}
            </div>
          )}
        </div>

        <div className="space-y-4">
          {!getStudentIdFromUrl() && (
            <div className="relative">
              <input 
                type="text"
                placeholder="معرف الطالب (مثال: STU-0001)"
                value={studentId || ''}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-6 py-5 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 outline-none transition-all text-center font-black placeholder:font-bold"
              />
            </div>
          )}
          
          <div className="relative">
            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            <input 
              type="text"
              placeholder="كود التفعيل (ENG-XXXX-...)"
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

  const renderAdmin = () => {
    const usedCodes = JSON.parse(localStorage.getItem('used_activation_codes') || '[]');
    const filteredStudents = studentsData.filter(s => 
      s.student.toLowerCase().includes(adminSearch.toLowerCase()) || 
      s.code.toLowerCase().includes(adminSearch.toLowerCase())
    ).slice(0, 100); // Show only first 100 for performance, but print all

    return (
      <div className="min-h-screen p-6 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <BackButton onClick={() => setView('home')} />
            <h2 className="text-2xl font-black text-slate-800">لوحة التحكم (Admin)</h2>
            <button 
              onClick={handlePrintCodes}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-black shadow-lg shadow-indigo-100"
            >
              <Printer size={20} />
              <span>طباعة الـ 2000 كود</span>
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="بحث عن طالب أو كود..."
              value={adminSearch}
              onChange={(e) => setAdminSearch(e.target.value)}
              className="w-full pl-14 pr-8 py-4 bg-white rounded-2xl shadow-sm border-2 border-transparent focus:border-indigo-500 outline-none transition-all font-bold"
            />
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-slate-100">
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
                {filteredStudents.map(s => {
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
            {filteredStudents.length === 0 && (
              <div className="p-20 text-center text-slate-400 font-bold">لا توجد نتائج</div>
            )}
            <div className="p-4 bg-slate-50 text-center text-xs text-slate-400 font-bold">
              يتم عرض أول 100 نتيجة فقط للسرعة. استخدم الطباعة للحصول على القائمة الكاملة.
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLanding = () => (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-white">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-lg min-h-[580px] sm:aspect-[3/4.2] bg-indigo-600 rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col items-center justify-between p-8 sm:p-14 text-white border-[10px] sm:border-[16px] border-indigo-700"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
        
        <div className="relative z-10 text-center space-y-6 sm:space-y-8 w-full">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="w-28 h-28 sm:w-40 sm:h-40 mx-auto flex items-center justify-center mb-2"
          >
            <img 
              src="https://i.ibb.co/ZzDyvmt0/1769711064-removebg-preview.png" 
              alt="Al-Fawaris Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
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
            <div className="flex flex-col items-center gap-1.5 mt-2">
              <p className="text-lg sm:text-xl font-black text-indigo-100 whitespace-nowrap" dir="rtl">
                إعداد وتنفيذ / منصة الفوارس الرقمية
              </p>
              <p className="text-base sm:text-lg font-bold text-indigo-200 whitespace-nowrap" dir="rtl">
                إشراف الأستاذ / صادق الجباري
              </p>
            </div>
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
            <ArrowRight size={24} className="sm:size-[32px] group-hover:-translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              if (window.confirm('هل أنت متأكد أنك تريد الخروج من البرنامج؟')) {
                window.close();
                // Fallback if window.close() is blocked
                document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#0f172a;color:white;font-family:system-ui;font-size:2rem;font-weight:900;">تم الخروج من البرنامج بنجاح. يمكنك إغلاق هذه النافذة.</div>';
              }
            }}
            className="w-full py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white rounded-2xl sm:rounded-3xl font-black text-xl sm:text-2xl hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-3 sm:gap-4 group"
          >
            <span>خروج • Exit</span>
            <LogOut size={24} className="sm:size-[28px] group-hover:-translate-x-1 transition-transform" />
          </motion.button>

          <p className="text-center text-indigo-200/80 font-medium text-xs sm:text-sm tracking-widest uppercase">
            Interactive Learning Experience
          </p>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-gradient-to-r from-black/30 to-transparent" />
      </motion.div>
    </div>
  );

  const renderHome = () => {
    const categoryColors: Record<string, { bg: string, icon: string, border: string, light: string, arabic: string, text: string, subtext: string }> = {
      'Nouns': { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', icon: 'text-blue-600', border: 'hover:border-blue-300', light: 'bg-white', arabic: 'الأسماء', text: 'text-white', subtext: 'text-blue-100' },
      'Verbs': { bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600', icon: 'text-emerald-600', border: 'hover:border-emerald-300', light: 'bg-white', arabic: 'الأفعال', text: 'text-white', subtext: 'text-emerald-100' },
      'Adjectives': { bg: 'bg-gradient-to-br from-amber-500 to-amber-600', icon: 'text-amber-600', border: 'hover:border-amber-300', light: 'bg-white', arabic: 'الصفات', text: 'text-white', subtext: 'text-amber-100' },
      'Adverbs': { bg: 'bg-gradient-to-br from-rose-500 to-rose-600', icon: 'text-rose-600', border: 'hover:border-rose-300', light: 'bg-white', arabic: 'الظروف', text: 'text-white', subtext: 'text-rose-100' },
      'Phrasal Verbs': { bg: 'bg-gradient-to-br from-violet-500 to-violet-600', icon: 'text-violet-600', border: 'hover:border-violet-300', light: 'bg-white', arabic: 'الأفعال المركبة', text: 'text-white', subtext: 'text-violet-100' },
    };

    return (
      <div className="space-y-10">
        <header className="flex flex-col items-center text-center space-y-4 relative">
          <div className="absolute left-0 top-0">
            <BackButton onClick={handleBack} />
          </div>
          
          <motion.div 
            initial={{ scale: 0.5, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-2"
          >
            <img 
              src="https://i.ibb.co/ZzDyvmt0/1769711064-removebg-preview.png" 
              alt="Al-Fawaris Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">مرحباً بك يا بطل!</h1>
            <p className="text-lg text-slate-500 font-bold">Welcome! Challenge yourself</p>
            <p className="text-sm text-indigo-500 font-bold mt-2" dir="rtl">كل تحدٍ تجتازه اليوم يجعلك أقرب لإتقان الإنجليزية غداً.. استمر! 🌟</p>
          </div>
        </header>

        <DictionaryTool localWords={allWords} onAddWord={handleAddWord} />

        <div className="pt-4">
          <h3 className="text-2xl font-black text-slate-800 mb-6 px-2">تعلم بأسلوب جديد ✨</h3>
          <div className="grid grid-cols-1 gap-6 mb-10">
            <motion.button
              onClick={() => setView('situations')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-[3rem] text-white text-right flex items-center justify-between group shadow-xl shadow-indigo-100 hover:scale-[1.02] transition-all border-4 border-white/20"
            >
              <div className="p-5 bg-white/20 rounded-3xl backdrop-blur-md group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black">الإنجليزية في مواقف 🎭</p>
                <p className="text-sm font-bold opacity-90">تعلم الكلمات حسب المواقف الحقيقية بأسلوب تفاعلي</p>
              </div>
            </motion.button>
          </div>

          <h3 className="text-2xl font-black text-slate-800 mb-6 px-2">تصفح حسب الأقسام</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, index) => {
              const colors = categoryColors[cat] || { bg: 'bg-gradient-to-br from-indigo-500 to-indigo-600', icon: 'text-indigo-600', border: 'hover:border-indigo-300', light: 'bg-white', arabic: cat, text: 'text-white', subtext: 'text-indigo-100' };
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
                    "p-6 rounded-[2.5rem] border-2 border-transparent transition-all text-right flex items-center justify-between group shadow-md hover:shadow-lg hover:scale-[1.02]",
                    colors.bg,
                    colors.border
                  )}
                >
                  <div className={cn("p-4 rounded-2xl transition-all group-hover:scale-110", colors.light, colors.icon)}>
                    <ChevronRight size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className={cn("text-2xl font-black", colors.text)}>{colors.arabic}</p>
                    <p className={cn("text-xs font-black uppercase tracking-widest", colors.subtext)}>{cat} • {allWords.filter(w => w.category === cat).length} words</p>
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
    const categoryColors: Record<string, { bg: string, icon: string, border: string, light: string, arabic: string, text: string, subtext: string }> = {
      'Nouns': { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', icon: 'text-blue-600', border: 'hover:border-blue-300', light: 'bg-white', arabic: 'الأسماء', text: 'text-white', subtext: 'text-blue-100' },
      'Verbs': { bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600', icon: 'text-emerald-600', border: 'hover:border-emerald-300', light: 'bg-white', arabic: 'الأفعال', text: 'text-white', subtext: 'text-emerald-100' },
      'Adjectives': { bg: 'bg-gradient-to-br from-amber-500 to-amber-600', icon: 'text-amber-600', border: 'hover:border-amber-300', light: 'bg-white', arabic: 'الصفات', text: 'text-white', subtext: 'text-amber-100' },
      'Adverbs': { bg: 'bg-gradient-to-br from-rose-500 to-rose-600', icon: 'text-rose-600', border: 'hover:border-rose-300', light: 'bg-white', arabic: 'الظروف', text: 'text-white', subtext: 'text-rose-100' },
      'Phrasal Verbs': { bg: 'bg-gradient-to-br from-violet-500 to-violet-600', icon: 'text-violet-600', border: 'hover:border-violet-300', light: 'bg-white', arabic: 'الأفعال المركبة', text: 'text-white', subtext: 'text-violet-100' },
    };
    const gameTitle = targetGame === 'flashcards' ? 'البطاقات التعليمية' : targetGame === 'quiz' ? 'اختبار' : 'لعبة التوصيل';
    return (
      <div className="space-y-10">
        <div className="flex items-center gap-6">
          <BackButton onClick={handleBack} />
          <div className="text-right">
            <h2 className="text-3xl font-black text-slate-800">{gameTitle}</h2>
            <p className="text-slate-400 font-bold">اختر قسماً للبدء</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, index) => {
            const colors = categoryColors[cat] || { bg: 'bg-gradient-to-br from-indigo-500 to-indigo-600', icon: 'text-indigo-600', border: 'hover:border-indigo-300', light: 'bg-white', arabic: cat, text: 'text-white', subtext: 'text-indigo-100' };
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
                  "p-6 rounded-[2.5rem] border-2 border-transparent transition-all text-right flex items-center justify-between group shadow-md hover:shadow-lg hover:scale-[1.02]",
                  colors.bg,
                  colors.border
                )}
              >
                <div className={cn("p-4 rounded-2xl transition-all group-hover:scale-110", colors.light, colors.icon)}>
                  <ChevronRight size={24} />
                </div>
                <div className="space-y-1">
                  <p className={cn("text-2xl font-black", colors.text)}>{colors.arabic}</p>
                  <p className={cn("text-xs font-black uppercase tracking-widest", colors.subtext)}>{cat}</p>
                </div>
              </motion.button>
            );
          })}
          {targetGame === 'quiz' && (
            <motion.button
              onClick={() => {
                const allQuestions = allGrammarLessons.flatMap(lesson => lesson.quiz);
                const shuffled = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 15);
                setGlobalGrammarQuestions(shuffled);
                setView('global-grammar-quiz');
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-[2.5rem] border-2 border-transparent transition-all text-right flex items-center justify-between group shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-[1.02] col-span-1 sm:col-span-2"
            >
              <div className="p-4 rounded-2xl transition-all group-hover:scale-110 bg-white/20 text-white backdrop-blur-sm">
                <Trophy size={24} />
              </div>
              <div className="space-y-1 text-white">
                <p className="text-2xl font-black">اختبار القواعد الشامل</p>
                <p className="text-sm font-bold opacity-90">أسئلة متنوعة تشمل جميع القواعد 🚀</p>
              </div>
            </motion.button>
          )}
        </div>
      </div>
    );
  };

  const renderGamesMenu = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <BackButton onClick={() => setView('home')} />
        <div>
          <h2 className="text-3xl font-black text-slate-800">الاختبارات والألعاب</h2>
          <p className="text-slate-400 font-bold">اختر نوع التدريب للبدء</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <button onClick={() => { setTargetGame('flashcards'); setView('select-category'); }} className="p-8 bg-white border-2 border-amber-100 text-amber-600 rounded-[2rem] font-black flex items-center gap-6 hover:bg-amber-50 hover:border-amber-200 transition-all shadow-sm">
          <div className="p-4 bg-amber-100 rounded-2xl"><LayoutGrid size={32} /></div>
          <div className="text-right flex-1">
            <span className="text-2xl block mb-1">بطاقات تعليمية</span>
            <span className="text-sm text-amber-500/80 font-bold">راجع الكلمات باستخدام البطاقات</span>
          </div>
        </button>
        <button onClick={() => { setTargetGame('match'); setView('select-category'); }} className="p-8 bg-white border-2 border-emerald-100 text-emerald-600 rounded-[2rem] font-black flex items-center gap-6 hover:bg-emerald-50 hover:border-emerald-200 transition-all shadow-sm">
          <div className="p-4 bg-emerald-100 rounded-2xl"><Gamepad2 size={32} /></div>
          <div className="text-right flex-1">
            <span className="text-2xl block mb-1">لعبة التوصيل</span>
            <span className="text-sm text-emerald-500/80 font-bold">صل الكلمة بمعناها الصحيح</span>
          </div>
        </button>
        <button onClick={() => { setTargetGame('quiz'); setView('select-category'); }} className="p-8 bg-white border-2 border-indigo-100 text-indigo-600 rounded-[2rem] font-black flex items-center gap-6 hover:bg-indigo-50 hover:border-indigo-200 transition-all shadow-sm">
          <div className="p-4 bg-indigo-100 rounded-2xl"><GraduationCap size={32} /></div>
          <div className="text-right flex-1">
            <span className="text-2xl block mb-1">اختبر نفسك</span>
            <span className="text-sm text-indigo-500/80 font-bold">اختبار خيارات متعددة للكلمات</span>
          </div>
        </button>
      </div>
    </div>
  );

  const renderCategory = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-6">
        <BackButton onClick={handleBack} />
        <h2 className="text-3xl font-black text-slate-800">{selectedCategory}</h2>
      </div>
      <div className="relative group">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={24} />
        <input type="text" placeholder="ابحث عن كلمة... Search words" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-14 pr-8 py-5 bg-white rounded-[2rem] shadow-sm border-2 border-transparent focus:border-indigo-500 outline-none transition-all text-xl font-bold placeholder:text-slate-300" />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {filteredWords.map((word) => (
          <motion.div key={word.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-white rounded-[2rem] shadow-sm flex items-center justify-between group hover:shadow-md hover:scale-[1.01] transition-all border-2 border-transparent hover:border-indigo-50">
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-2">
                <button onClick={() => speak(word.english, 'UK')} className="flex items-center justify-center gap-2 px-3 py-2 bg-indigo-50 rounded-xl text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm group/btn" title="British English">
                  <Volume2 size={16} />
                  <span className="text-xs font-bold tracking-wider">UK</span>
                </button>
                <button onClick={() => speak(word.english, 'US')} className="flex items-center justify-center gap-2 px-3 py-2 bg-rose-50 rounded-xl text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm group/btn" title="American English">
                  <Volume2 size={16} />
                  <span className="text-xs font-bold tracking-wider">US</span>
                </button>
              </div>
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

  const renderGrammarList = () => {
    const grammarColors = [
      { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', border: 'hover:border-blue-300', light: 'bg-white/20 text-white', text: 'text-white', subtext: 'text-blue-100' },
      { bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600', border: 'hover:border-emerald-300', light: 'bg-white/20 text-white', text: 'text-white', subtext: 'text-emerald-100' },
      { bg: 'bg-gradient-to-br from-amber-500 to-amber-600', border: 'hover:border-amber-300', light: 'bg-white/20 text-white', text: 'text-white', subtext: 'text-amber-100' },
      { bg: 'bg-gradient-to-br from-rose-500 to-rose-600', border: 'hover:border-rose-300', light: 'bg-white/20 text-white', text: 'text-white', subtext: 'text-rose-100' },
      { bg: 'bg-gradient-to-br from-violet-500 to-violet-600', border: 'hover:border-violet-300', light: 'bg-white/20 text-white', text: 'text-white', subtext: 'text-violet-100' },
      { bg: 'bg-gradient-to-br from-cyan-500 to-cyan-600', border: 'hover:border-cyan-300', light: 'bg-white/20 text-white', text: 'text-white', subtext: 'text-cyan-100' },
    ];

    return (
      <div className="space-y-8">
        <div className="flex items-center gap-6">
          <BackButton onClick={() => setView('home')} />
          <h2 className="text-3xl font-black text-slate-800">قواعد اللغة الإنجليزية</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {allGrammarLessons.map((lesson, index) => {
            const colors = grammarColors[index % grammarColors.length];
            return (
              <motion.button
                key={lesson.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setSelectedGrammarLesson(lesson);
                  setView('grammar-lesson');
                }}
                className={cn(
                  "p-6 rounded-[2rem] shadow-md flex items-center justify-between group hover:shadow-lg hover:scale-[1.01] transition-all border-2 border-transparent text-right",
                  colors.bg,
                  colors.border
                )}
              >
                <div className={cn("p-4 rounded-2xl group-hover:scale-110 transition-transform", colors.light)}>
                  <ChevronRight size={24} />
                </div>
                <div>
                  <p className={cn("text-2xl font-black tracking-tight", colors.text)}>{lesson.title}</p>
                  <p className={cn("text-sm font-bold mt-1", colors.subtext)}>{lesson.description}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSituations = () => {
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-6">
          <BackButton onClick={() => setView('home')} />
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">الإنجليزية في مواقف 🎭</h2>
        </div>
        <div className="p-6 bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-100 rounded-[3rem] shadow-sm mb-8">
          <p className="text-lg text-indigo-900 font-bold text-right" dir="rtl">
            تعلم الكلمات والجمل الأكثر استخداماً في مواقف الحياة اليومية المختلفة. 
            <span className="block text-sm text-indigo-400 mt-1">استخدم البطاقات التعليمية الحديثة لتثبيت المعلومة!</span>
          </p>
        </div>
        <FlashcardView words={situationalWords} onBack={() => setView('home')} />
      </div>
    );
  };

  if (isActivated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (isActivated === false) return renderActivation();
  if (view === 'admin') return renderAdmin();
  if (view === 'landing') return renderLanding();

  return (
    <div className="min-h-screen pb-28 pt-10 px-4 sm:px-6 bg-indigo-50/30">
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div key={view} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3, ease: "easeOut" }}>
            {view === 'home' && renderHome()}
            {view === 'grammar-list' && renderGrammarList()}
            {view === 'grammar-lesson' && selectedGrammarLesson && (
              <GrammarLesson 
                lesson={selectedGrammarLesson} 
                onComplete={() => setView('grammar-quiz')} 
                onBack={() => setView('grammar-list')} 
              />
            )}
            {view === 'grammar-quiz' && selectedGrammarLesson && (
              <GrammarQuiz 
                questions={selectedGrammarLesson.quiz} 
                onComplete={(score) => console.log('Quiz completed with score:', score)} 
                onBack={() => setView('grammar-list')} 
              />
            )}
            {view === 'situations' && renderSituations()}
            {view === 'global-grammar-quiz' && (
              <GrammarQuiz 
                questions={globalGrammarQuestions} 
                onComplete={(score) => console.log('Global Quiz completed with score:', score)} 
                onBack={() => setView('select-category')} 
                backText="العودة لقائمة الاختبارات"
                title="اختبار القواعد الشامل 🏆"
              />
            )}
            {view === 'games-menu' && renderGamesMenu()}
            {view === 'select-category' && renderSelectCategory()}
            {view === 'category' && renderCategory()}
            {view === 'flashcards' && <FlashcardView words={filteredWords} onBack={handleBack} />}
            {view === 'match' && (
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <BackButton onClick={handleBack} />
                  <h2 className="text-3xl font-black text-slate-800">لعبة التوصيل</h2>
                </div>
                <MatchGame words={filteredWords} onComplete={() => setView('category')} />
              </div>
            )}
            {view === 'quiz' && (
              <div className="space-y-10"><Quiz words={filteredWords} onBack={handleBack} /></div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] px-8 py-5 flex justify-around items-center z-50">
        <button onClick={() => setView('home')} className={cn("flex flex-col items-center gap-1.5 transition-all", view === 'home' ? "text-indigo-600 scale-110" : "text-slate-400 hover:text-slate-600")}>
          <LayoutGrid size={28} /><span className="text-[10px] font-black uppercase tracking-widest">الرئيسية</span>
        </button>
        <button onClick={() => setView('grammar-list')} className={cn("flex flex-col items-center gap-1.5 transition-all", view.includes('grammar') ? "text-indigo-600 scale-110" : "text-slate-400 hover:text-slate-600")}>
          <BookOpen size={28} /><span className="text-[10px] font-black uppercase tracking-widest">القواعد</span>
        </button>
        <button onClick={() => setView('games-menu')} className={cn("flex flex-col items-center gap-1.5 transition-all", view === 'games-menu' || view === 'quiz' || view === 'flashcards' || view === 'match' || view === 'select-category' ? "text-indigo-600 scale-110" : "text-slate-400 hover:text-slate-600")}>
          <Trophy size={28} /><span className="text-[10px] font-black uppercase tracking-widest">الاختبار</span>
        </button>
        <button onDoubleClick={() => setView('admin')} className="flex flex-col items-center gap-1.5 text-slate-200 hover:text-slate-400 transition-all opacity-20">
          <Settings size={28} /><span className="text-[10px] font-black uppercase tracking-widest">Admin</span>
        </button>
      </nav>
    </div>
  );
}
