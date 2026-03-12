import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Volume2, Languages, Loader2, X, ArrowRight } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";
import { Word, Category } from '../types';
import { speak, cn } from '../utils';

interface DictionaryToolProps {
  localWords: Word[];
  onAddWord: (word: Word) => void;
}

export const DictionaryTool: React.FC<DictionaryToolProps> = ({ localWords, onAddWord }) => {
  const [englishInput, setEnglishInput] = useState('');
  const [arabicInput, setArabicInput] = useState('');
  const [result, setResult] = useState<{ english: string, arabic: string, category: Category, isLocal: boolean } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = async (source: 'en' | 'ar') => {
    const query = source === 'en' ? englishInput : arabicInput;
    if (!query.trim()) return;

    const trimmedQuery = query.trim();
    setIsLoading(true);
    setError(null);
    setResult(null);

    // 1. Check local database first
    const localMatch = localWords.find(w => 
      (source === 'en' && w.english.toLowerCase() === trimmedQuery.toLowerCase()) ||
      (source === 'ar' && w.arabic === trimmedQuery)
    );
    
    if (localMatch) {
      setResult({
        english: localMatch.english,
        arabic: localMatch.arabic,
        category: localMatch.category,
        isLocal: true
      });
      setIsLoading(false);
      return;
    }

    // 2. Use Gemini for bidirectional translation and categorization
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const prompt = source === 'en' 
        ? `Translate this English word to Arabic and categorize it (Noun, Verb, Adjective, Adverb, or Phrasal Verb). Word: "${trimmedQuery}"`
        : `Translate this Arabic word to English and categorize it (Noun, Verb, Adjective, Adverb, or Phrasal Verb). Word: "${trimmedQuery}"`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              english: { type: Type.STRING, description: "The English word" },
              arabic: { type: Type.STRING, description: "The Arabic translation" },
              category: { 
                type: Type.STRING, 
                description: "The category: Noun, Verb, Adjective, Adverb, or Phrasal Verb" 
              }
            },
            required: ["english", "arabic", "category"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      
      if (data.english && data.arabic && data.category) {
        // Map Gemini category to App category
        let appCategory: Category = 'Nouns';
        const geminiCat = data.category.toLowerCase();
        
        if (geminiCat.includes('verb') && geminiCat.includes('phrasal')) appCategory = 'Phrasal Verbs';
        else if (geminiCat.includes('verb')) appCategory = 'Verbs';
        else if (geminiCat.includes('adjective')) appCategory = 'Adjectives';
        else if (geminiCat.includes('adverb')) appCategory = 'Adverbs';
        else appCategory = 'Nouns';

        const newWord: Word = {
          id: `user-${Date.now()}`,
          english: data.english,
          arabic: data.arabic,
          category: appCategory
        };

        setResult({
          english: newWord.english,
          arabic: newWord.arabic,
          category: newWord.category,
          isLocal: false
        });

        // Notify parent to save
        onAddWord(newWord);
        
        // Clear inputs
        setEnglishInput('');
        setArabicInput('');
      } else {
        setError("لم نتمكن من العثور على ترجمة دقيقة.");
      }
    } catch (err) {
      console.error("Translation error:", err);
      setError("حدث خطأ أثناء الترجمة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  const categoryLabels: Record<Category, string> = {
    'Nouns': 'اسم (Noun)',
    'Verbs': 'فعل (Verb)',
    'Adjectives': 'صفة (Adjective)',
    'Adverbs': 'ظرف (Adverb)',
    'Phrasal Verbs': 'فعل مركب (Phrasal Verb)'
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-indigo-100/50 border-4 border-indigo-50">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
            <Languages size={28} />
          </div>
          <div className="text-right">
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">المترجم السريع</h3>
            <p className="text-sm font-bold text-slate-400">Bidirectional Translator & Auto-Saver</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* English Input */}
          <div className="relative group">
            <input 
              type="text"
              value={englishInput}
              onChange={(e) => setEnglishInput(e.target.value)}
              placeholder="English word..."
              className="w-full pl-6 pr-12 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all font-bold"
            />
            <button 
              onClick={() => handleTranslate('en')}
              disabled={isLoading || !englishInput.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-30"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Arabic Input */}
          <div className="relative group">
            <input 
              type="text"
              value={arabicInput}
              onChange={(e) => setArabicInput(e.target.value)}
              placeholder="كلمة عربية..."
              dir="rtl"
              className="w-full pr-6 pl-12 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all font-bold text-right"
            />
            <button 
              onClick={() => handleTranslate('ar')}
              disabled={isLoading || !arabicInput.trim()}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-30"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
          </div>
        </div>

        {isLoading && (
          <div className="mt-4 flex justify-center">
            <Loader2 size={24} className="animate-spin text-indigo-600" />
          </div>
        )}

        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-6 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-[2rem] text-white relative overflow-hidden group"
            >
              <button 
                onClick={() => setResult(null)}
                className="absolute top-4 left-4 p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="space-y-1">
                  <p className="text-indigo-200 text-sm font-black uppercase tracking-widest">English</p>
                  <h4 className="text-4xl font-black tracking-tight">{result.english}</h4>
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {categoryLabels[result.category]}
                  </span>
                </div>
                
                <div className="h-px w-16 bg-white/20" />

                <div className="space-y-1">
                  <p className="text-indigo-200 text-sm font-black uppercase tracking-widest">Arabic</p>
                  <h4 className="text-4xl font-black tracking-tight" dir="rtl">{result.arabic}</h4>
                </div>

                <button 
                  onClick={() => speak(result.english)}
                  className="mt-4 p-4 bg-white/15 hover:bg-white/25 rounded-2xl transition-all flex items-center gap-3 group/btn"
                >
                  <Volume2 size={24} />
                  <span className="font-bold">استمع للنطق</span>
                </button>

                {!result.isLocal && (
                  <span className="absolute bottom-4 right-6 text-[10px] font-black uppercase tracking-widest opacity-30">
                    Saved to {result.category}
                  </span>
                )}
              </div>
            </motion.div>
          )}

          {error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-4 bg-rose-50 text-rose-600 rounded-2xl text-center font-bold border-2 border-rose-100"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
