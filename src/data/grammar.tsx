import React from 'react';
import { GrammarLessonData, ColoredText } from '../types';

// Helper to render colored text
export const CText: React.FC<{ text: string, type: 'subject' | 'verb' | 'complement' | 'particle' | 'normal' }> = ({ text, type }) => {
  const colors = {
    subject: 'text-blue-600 font-black', // الفاعل
    verb: 'text-red-600 font-black', // الفعل
    complement: 'text-emerald-600 font-black', // باقي الجملة
    particle: 'text-orange-500 font-black', // الأدوات
    normal: 'text-slate-700 font-bold' // نص عادي
  };
  return <span className={colors[type]}>{text} </span>;
};

export const presentSimpleLesson: GrammarLessonData = {
  id: 'present-simple',
  title: 'المضارع البسيط (Present Simple)',
  description: 'هيا بنا نتعلم كيف تحكي عن يومك وعاداتك! 🕐',
  cards: [
    {
      id: 'ps1',
      title: 'أولاً: ما هو المضارع البسيط؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">المضارع البسيط هو زمن نستخدمه للتعبير عن:</p>
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
              <p className="font-black text-indigo-700 mb-1">1. الأشياء التي تحدث بشكل متكرر (روتين)</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">I go to school every day</p>
              <p className="text-xs text-slate-400">(أنا أذهب إلى المدرسة كل يوم)</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 shadow-sm">
              <p className="font-black text-emerald-700 mb-1">2. الحقائق العامة</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">The sun rises in the east</p>
              <p className="text-xs text-slate-400">(الشمس تشرق من الشرق)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 shadow-sm">
              <p className="font-black text-blue-700 mb-1">3. العادات</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">I drink coffee every morning</p>
              <p className="text-xs text-slate-400">(أنا أشرب القهوة كل صباح)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps2',
      title: 'ثانياً: الضمائر (Subjects) 👥',
      icon: '👥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
            <table className="w-full text-right border-collapse" dir="rtl">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-3 border border-indigo-500">الضمير</th>
                  <th className="p-3 border border-indigo-500">المعنى</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-indigo-50">
                  <td className="p-3 border border-indigo-100 font-bold" dir="ltr">I</td>
                  <td className="p-3 border border-indigo-100">أنا</td>
                </tr>
                <tr>
                  <td className="p-3 border border-indigo-100 font-bold" dir="ltr">You</td>
                  <td className="p-3 border border-indigo-100">أنت</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="p-3 border border-indigo-100 font-bold" dir="ltr">We</td>
                  <td className="p-3 border border-indigo-100">نحن</td>
                </tr>
                <tr>
                  <td className="p-3 border border-indigo-100 font-bold" dir="ltr">They</td>
                  <td className="p-3 border border-indigo-100">هم</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="p-3 border border-amber-100 font-bold" dir="ltr">He</td>
                  <td className="p-3 border border-amber-100">هو</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="p-3 border border-amber-100 font-bold" dir="ltr">She</td>
                  <td className="p-3 border border-amber-100">هي</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="p-3 border border-amber-100 font-bold" dir="ltr">It</td>
                  <td className="p-3 border border-amber-100">هو/هي لغير العاقل</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl border border-amber-200 text-amber-800 text-sm font-bold flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <p>مهم جداً: He / She / It لهم قاعدة خاصة (سنراها الآن)</p>
          </div>
        </div>
      )
    },
    {
      id: 'ps3',
      title: 'ثالثاً: تكوين الجملة (الإثبات) ✅',
      icon: '✅',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest text-center">القاعدة الذهبية</p>
            <div className="space-y-4">
              {/* Rule 1 */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between gap-4" dir="ltr">
                <div className="flex-1 text-center">
                  <span className="block text-[10px] text-slate-400 mb-1 font-bold">SUBJECT</span>
                  <span className="font-black text-indigo-600 text-sm">I, You, We, They</span>
                </div>
                <div className="text-indigo-300 text-xl font-black">➜</div>
                <div className="flex-1 text-center" dir="rtl">
                  <span className="block text-[10px] text-slate-400 mb-1 font-bold">VERB</span>
                  <span className="font-bold text-slate-700 text-xs">الفعل كما هو</span>
                </div>
              </div>
              {/* Rule 2 */}
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between gap-4" dir="ltr">
                <div className="flex-1 text-center">
                  <span className="block text-[10px] text-slate-400 mb-1 font-bold">SUBJECT</span>
                  <span className="font-black text-indigo-600 text-sm">He, She, It</span>
                </div>
                <div className="text-indigo-300 text-xl font-black">➜</div>
                <div className="flex-1 text-center" dir="rtl">
                  <span className="block text-[10px] text-slate-400 mb-1 font-bold">VERB</span>
                  <span className="font-bold text-slate-700 text-xs">نضيف (s) أو (es)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-black text-indigo-600 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                ✳️ بدون s:
              </h4>
              <div className="space-y-3" dir="ltr">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <p className="text-sm"><CText text="I" type="subject" /><CText text="play" type="verb" /><CText text="football" type="complement" /></p>
                  <p className="text-[10px] text-slate-400 mt-1" dir="rtl">أنا ألعب كرة القدم</p>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <p className="text-sm"><CText text="They" type="subject" /><CText text="eat" type="verb" /><CText text="rice" type="complement" /></p>
                  <p className="text-[10px] text-slate-400 mt-1" dir="rtl">هم يأكلون الأرز</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-black text-amber-600 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                ✳️ مع s:
              </h4>
              <div className="space-y-3" dir="ltr">
                <div className="p-2 bg-amber-50/50 rounded-lg border border-amber-100">
                  <p className="text-sm"><CText text="He" type="subject" /><CText text="plays" type="verb" /><CText text="football" type="complement" /></p>
                  <p className="text-[10px] text-slate-400 mt-1" dir="rtl">هو يلعب كرة القدم</p>
                </div>
                <div className="p-2 bg-amber-50/50 rounded-lg border border-amber-100">
                  <p className="text-sm"><CText text="She" type="subject" /><CText text="eats" type="verb" /><CText text="rice" type="complement" /></p>
                  <p className="text-[10px] text-slate-400 mt-1" dir="rtl">هي تأكل الأرز</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps4',
      title: 'متى نضيف (es) بدل (s)؟ 🔴',
      icon: '🔴',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">إذا انتهى الفعل بـ:</p>
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {['ch', 'sh', 's', 'x', 'o'].map(suffix => (
              <span key={suffix} className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-black text-xl shadow-lg shadow-indigo-200">
                {suffix}
              </span>
            ))}
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
            <table className="w-full text-center border-collapse" dir="ltr">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-3 border border-slate-100 text-slate-500 text-xs">الفعل</th>
                  <th className="p-3 border border-slate-100 text-slate-500 text-xs">بعد الإضافة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-50">go</td>
                  <td className="p-3 border border-slate-50 font-bold text-red-600">goes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-50">watch</td>
                  <td className="p-3 border border-slate-50 font-bold text-red-600">watches</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-50">wash</td>
                  <td className="p-3 border border-slate-50 font-bold text-red-600">washes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
            <p className="text-sm text-slate-600 italic" dir="ltr">Example: <span className="font-bold text-indigo-600">He goes to school</span></p>
            <p className="text-xs text-slate-400 mt-1">(هو يذهب إلى المدرسة)</p>
          </div>
        </div>
      )
    },
    {
      id: 'ps5',
      title: 'رابعاً: النفي (Negative) ❌',
      icon: '❌',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-5 bg-red-50 rounded-3xl border-2 border-dashed border-red-100 text-center">
            <p className="text-xs font-bold text-red-500 mb-2 uppercase tracking-widest">قاعدة النفي</p>
            <div className="space-y-2">
              <p className="text-sm font-bold text-red-700" dir="ltr">I / You / We / They ➜ do not (don’t)</p>
              <p className="text-sm font-bold text-red-700" dir="ltr">He / She / It ➜ does not (doesn’t)</p>
            </div>
          </div>
          <div className="p-4 bg-amber-100 rounded-2xl border border-amber-200 text-amber-800 text-sm font-bold flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <p>بعد does نرجع الفعل بدون s (المصدر)</p>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-red-500">I do not</span> like coffee.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(أنا لا أحب القهوة)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-red-500">He does not</span> like coffee.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هو لا يحب القهوة)</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 py-2">
            <div className="text-center">
              <p className="text-red-500 line-through text-xs" dir="ltr">He does not likes</p>
              <span className="text-[10px] text-red-400">❌ خطأ</span>
            </div>
            <div className="text-center">
              <p className="text-emerald-600 font-bold text-xs" dir="ltr">He does not like</p>
              <span className="text-[10px] text-emerald-500">✔️ صح</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps6',
      title: 'خامساً: السؤال (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-5 bg-blue-50 rounded-3xl border-2 border-dashed border-blue-100 text-center">
            <p className="text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">تكوين السؤال</p>
            <div className="space-y-2">
              <p className="text-sm font-bold text-blue-700" dir="ltr">Do + (I, You, We, They)</p>
              <p className="text-sm font-bold text-blue-700" dir="ltr">Does + (He, She, It)</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-blue-500">Do</span> you play football?</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هل تلعب كرة القدم؟)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-blue-500">Does</span> he play football?</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هل هو يلعب كرة القدم؟)</p>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
            <p className="font-bold text-blue-400 mb-3 text-sm">💡 كيف تجيب؟</p>
            <div className="grid grid-cols-2 gap-3 text-[10px] font-bold" dir="ltr">
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">Yes, I do / No, I don’t</div>
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">Yes, he does / No, he doesn’t</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps7',
      title: 'سادساً: الكلمات الدالة 🗝️',
      icon: '🗝️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-3">
            {[
              { en: 'always', ar: 'دائماً' },
              { en: 'usually', ar: 'عادةً' },
              { en: 'often', ar: 'غالباً' },
              { en: 'sometimes', ar: 'أحياناً' },
              { en: 'never', ar: 'أبداً' },
              { en: 'every day', ar: 'كل يوم' }
            ].map(item => (
              <div key={item.en} className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center shadow-sm">
                <span className="font-black text-indigo-700" dir="ltr">{item.en}</span>
                <span className="text-[10px] text-indigo-400">{item.ar}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-center mt-4">
            <p className="text-xs text-slate-500 italic" dir="ltr">Example: <span className="font-bold text-indigo-600">I always wake up early</span></p>
            <p className="text-[10px] text-slate-400 mt-1">(أنا دائماً أستيقظ مبكراً)</p>
          </div>
        </div>
      )
    },
    {
      id: 'ps8',
      title: 'سابعاً: ملخص سريع 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black shrink-0">1</div>
              <p className="text-sm font-bold">He/She/It ➜ نضيف s للفعل</p>
            </div>
            <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black shrink-0">2</div>
              <p className="text-sm font-bold">في النفي والسؤال ➜ نستخدم do / does</p>
            </div>
            <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black shrink-0">3</div>
              <p className="text-sm font-bold">بعد does ➜ الفعل يعود للمصدر بدون s</p>
            </div>
          </div>
          <div className="mt-8 p-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <p className="text-sm font-black text-indigo-400 mb-3 flex items-center gap-2">
              <span className="text-xl">✍️</span> تحدي الكتابة:
            </p>
            <p className="text-xs leading-relaxed text-slate-300">
              اكتب 5 جمل عن يومك باستخدام الكلمات الدالة:
              <br />
              <span className="text-indigo-200 font-mono">(always, usually, never)</span>
              <br />
              وشاركها مع زملائك في الفصل!
            </p>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'psq1',
      type: 'multiple_choice',
      question: 'He ____ to school every day.',
      options: ['go', 'goes', 'going'],
      correctAnswer: 'goes',
      explanation: 'مع He نضيف s أو es للفعل.'
    },
    {
      id: 'psq2',
      type: 'multiple_choice',
      question: 'They ____ football.',
      options: ['plays', 'play', 'playing'],
      correctAnswer: 'play',
      explanation: 'مع They يبقى الفعل كما هو بدون إضافات.'
    },
    {
      id: 'psq3',
      type: 'multiple_choice',
      question: 'She ____ not like milk.',
      options: ['do', 'does', 'is'],
      correctAnswer: 'does',
      explanation: 'نستخدم does للنفي مع She.'
    },
    {
      id: 'psq4',
      type: 'multiple_choice',
      question: 'صحح الخطأ: He go to school.',
      options: ['He go to school.', 'He goes to school.', 'He going to school.'],
      correctAnswer: 'He goes to school.',
      explanation: 'يجب إضافة es للفعل go مع الفاعل المفرد He.'
    },
    {
      id: 'psq5',
      type: 'multiple_choice',
      question: 'صحح الخطأ: She don’t like tea.',
      options: ['She doesn\'t like tea.', 'She don\'t like tea.', 'She not like tea.'],
      correctAnswer: 'She doesn\'t like tea.',
      explanation: 'نستخدم doesn\'t مع She.'
    },
    {
      id: 'psq6',
      type: 'multiple_choice',
      question: 'صحح الخطأ: Does he plays football?',
      options: ['Does he plays football?', 'Does he play football?', 'Do he play football?'],
      correctAnswer: 'Does he play football?',
      explanation: 'بعد does نستخدم الفعل بدون s.'
    },
    {
      id: 'psq7',
      type: 'multiple_choice',
      question: 'اختر السؤال الصحيح لـ (you / like coffee):',
      options: ['Do you like coffee?', 'Does you like coffee?', 'Are you like coffee?'],
      correctAnswer: 'Do you like coffee?',
      explanation: 'نستخدم Do مع You لتكوين السؤال.'
    },
    {
      id: 'psq8',
      type: 'multiple_choice',
      question: 'اختر السؤال الصحيح لـ (he / play football):',
      options: ['Do he play football?', 'Does he play football?', 'Is he play football?'],
      correctAnswer: 'Does he play football?',
      explanation: 'نستخدم Does مع He لتكوين السؤال.'
    },
    {
      id: 'psq9',
      type: 'arrange',
      question: 'أنا أدرس كل يوم.',
      options: ['study', 'I', 'every', 'day.'],
      correctAnswer: ['I', 'study', 'every', 'day.'],
      explanation: 'الترجمة الصحيحة: I study every day.'
    },
    {
      id: 'psq10',
      type: 'arrange',
      question: 'هو لا يحب الشاي.',
      options: ['He', 'doesn\'t', 'like', 'tea.'],
      correctAnswer: ['He', 'doesn\'t', 'like', 'tea.'],
      explanation: 'الترجمة الصحيحة: He doesn\'t like tea.'
    },
    {
      id: 'psq11',
      type: 'arrange',
      question: 'هل هم يذهبون إلى المدرسة؟',
      options: ['Do', 'they', 'go', 'to', 'school?'],
      correctAnswer: ['Do', 'they', 'go', 'to', 'school?'],
      explanation: 'الترجمة الصحيحة: Do they go to school?'
    }
  ]
};

export const pastSimpleLesson: GrammarLessonData = {
  id: 'past-simple',
  title: 'الماضي البسيط (Past Simple)',
  description: 'أحداث بدأت وانتهت في الماضي ⏳',
  cards: [
    {
      id: 'ps1',
      title: 'أولاً: ما هو الماضي البسيط؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">الماضي البسيط هو زمن نستخدمه للتعبير عن:</p>
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
              <p className="font-black text-indigo-700 mb-1">1. حدث انتهى في الماضي</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">I visited my friend yesterday</p>
              <p className="text-xs text-slate-400">(أنا زرت صديقي أمس)</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 shadow-sm">
              <p className="font-black text-emerald-700 mb-1">2. حدث حصل مرة واحدة وانتهى</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">She watched a movie last night</p>
              <p className="text-xs text-slate-400">(هي شاهدت فيلم أمس)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps2',
      title: 'ثانياً: القاعدة الأساسية 🧩',
      icon: '🧩',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest text-center">التركيب (Structure)</p>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-center gap-3 text-center" dir="ltr">
              <div className="px-3 py-1 bg-blue-50 rounded-lg border border-blue-100">
                <span className="block text-[10px] text-blue-400 font-bold">SUBJECT</span>
                <span className="font-black text-blue-600">Subject</span>
              </div>
              <span className="text-slate-300 font-black">+</span>
              <div className="px-3 py-1 bg-red-50 rounded-lg border border-red-100">
                <span className="block text-[10px] text-red-400 font-bold">VERB</span>
                <span className="font-black text-red-600">verb (past)</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps3',
      title: 'ثالثاً: أنواع الأفعال في الماضي 🔄',
      icon: '🔄',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="font-bold text-indigo-700 mb-2">1️⃣ أفعال منتظمة (Regular verbs):</p>
            <p className="text-sm mb-3">نضيف (ed) للفعل.</p>
            <div className="grid grid-cols-3 gap-2 text-center" dir="ltr">
              <div className="p-2 bg-white rounded-xl text-[10px] font-bold">play ➜ played</div>
              <div className="p-2 bg-white rounded-xl text-[10px] font-bold">watch ➜ watched</div>
              <div className="p-2 bg-white rounded-xl text-[10px] font-bold">clean ➜ cleaned</div>
            </div>
            <div className="mt-4 p-3 bg-white/50 rounded-xl border border-indigo-100">
              <p className="font-bold text-indigo-600 text-xs mb-2">🔴 ملاحظات مهمة:</p>
              <ul className="text-[10px] space-y-1 list-disc list-inside">
                <li>إذا انتهى بـ (e): نضيف (d) فقط (live ➜ lived).</li>
                <li>إذا انتهى بـ (y) وقبله حرف ساكن: نغير y إلى i ثم ed (study ➜ studied).</li>
                <li>إذا كان الفعل قصير: نكرر الحرف الأخير (stop ➜ stopped).</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="font-bold text-amber-700 mb-2">2️⃣ أفعال غير منتظمة (Irregular verbs):</p>
            <p className="text-sm mb-3">ليس لها قاعدة، يجب حفظها ❗</p>
            <div className="overflow-x-auto rounded-xl border border-amber-200">
              <table className="w-full text-center text-[10px]" dir="ltr">
                <thead className="bg-amber-600 text-white">
                  <tr>
                    <th className="p-2">المضارع</th>
                    <th className="p-2">الماضي</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-2 border-b border-amber-100">go</td>
                    <td className="p-2 border-b border-amber-100 font-bold text-amber-700">went</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-amber-100">eat</td>
                    <td className="p-2 border-b border-amber-100 font-bold text-amber-700">ate</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-2 border-b border-amber-100">see</td>
                    <td className="p-2 border-b border-amber-100 font-bold text-amber-700">saw</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps4',
      title: 'رابعاً: الإثبات (Positive) ✅',
      icon: '✅',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><CText text="I" type="subject" /><CText text="played" type="verb" /><CText text="football" type="complement" /></p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(أنا لعبت كرة القدم)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><CText text="He" type="subject" /><CText text="went" type="verb" /><CText text="to school" type="complement" /></p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هو ذهب إلى المدرسة)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps5',
      title: 'خامساً: النفي (Negative) ❌',
      icon: '❌',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-5 bg-red-50 rounded-3xl border-2 border-dashed border-red-100 text-center">
            <p className="text-xs font-bold text-red-500 mb-2 uppercase tracking-widest">قاعدة النفي</p>
            <p className="text-sm font-bold text-red-700" dir="ltr">Subject + <span className="underline">did not (didn’t)</span> + verb (base)</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            <p className="text-[10px] font-bold text-amber-700 leading-tight">الفعل يرجع كما هو (بدون ed) عند استخدام didn't.</p>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700">I <span className="text-red-500">did not play</span>.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(أنا لم ألعب)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700">He <span className="text-red-500">did not go</span>.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هو لم يذهب)</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 py-2">
            <div className="text-center">
              <p className="text-red-500 line-through text-[10px]" dir="ltr">He didn’t went</p>
              <span className="text-[8px] text-red-400">❌ خطأ</span>
            </div>
            <div className="text-center">
              <p className="text-emerald-600 font-bold text-[10px]" dir="ltr">He didn’t go</p>
              <span className="text-[8px] text-emerald-500">✔️ صح</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps6',
      title: 'سادساً: السؤال (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-5 bg-blue-50 rounded-3xl border-2 border-dashed border-blue-100 text-center">
            <p className="text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">تكوين السؤال</p>
            <p className="text-sm font-bold text-blue-700" dir="ltr"><span className="underline">Did</span> + subject + verb (base)?</p>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-blue-500">Did</span> you play football?</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هل لعبت كرة القدم؟)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-blue-500">Did</span> he go to school?</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هل ذهب إلى المدرسة؟)</p>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
            <p className="font-bold text-blue-400 mb-3 text-sm">💡 الإجابة:</p>
            <div className="grid grid-cols-2 gap-3 text-[10px] font-bold" dir="ltr">
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">Yes, I did / No, I didn’t</div>
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">Yes, he did / No, he didn’t</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ps7',
      title: 'سابعاً: كلمات تدل على الماضي البسيط 🗝️',
      icon: '🗝️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-3">
            {[
              { en: 'yesterday', ar: 'أمس' },
              { en: 'last night', ar: 'الليلة الماضية' },
              { en: 'last week', ar: 'الأسبوع الماضي' },
              { en: 'ago', ar: 'منذ' }
            ].map(item => (
              <div key={item.en} className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center shadow-sm">
                <span className="font-black text-indigo-700" dir="ltr">{item.en}</span>
                <span className="text-[10px] text-indigo-400">{item.ar}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-center mt-4">
            <p className="text-xs text-slate-500 italic" dir="ltr">Example: <span className="font-bold text-indigo-600">I studied English yesterday</span></p>
            <p className="text-[10px] text-slate-400 mt-1">(أنا درست الإنجليزية أمس)</p>
          </div>
        </div>
      )
    },
    {
      id: 'ps8',
      title: 'ثامناً: الفرق بين الماضي والمضارع ⚖️',
      icon: '⚖️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
            <table className="w-full text-center border-collapse" dir="ltr">
              <thead>
                <tr className="bg-slate-800 text-white text-xs">
                  <th className="p-3 border border-slate-700">المضارع (Present)</th>
                  <th className="p-3 border border-slate-700">الماضي (Past)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border border-slate-100 font-bold">I play</td>
                  <td className="p-3 border border-slate-100 font-bold text-indigo-600">I played</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-100 font-bold">I go</td>
                  <td className="p-3 border border-slate-100 font-bold text-amber-600">I went</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'ps9',
      title: 'تاسعاً: ملخص سريع 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">1</span>
              <p className="text-xs font-bold text-emerald-700">الأفعال العادية ➜ نضيف ed</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-3">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">2</span>
              <p className="text-xs font-bold text-blue-700">الأفعال الشاذة ➜ يجب حفظها</p>
            </div>
            <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-3">
              <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">3</span>
              <p className="text-xs font-bold text-red-700">في النفي ➜ did + فعل بدون ed</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-3">
              <span className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">4</span>
              <p className="text-xs font-bold text-amber-700">في السؤال ➜ Did + فعل بدون ed</p>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'psq1',
      type: 'multiple_choice',
      question: 'He ____ to school yesterday.',
      options: ['go', 'went', 'goes'],
      correctAnswer: 'went',
      explanation: 'نستخدم التصريف الثاني (went) لأن الجملة في الماضي (yesterday).'
    },
    {
      id: 'psq2',
      type: 'multiple_choice',
      question: 'They ____ football last week.',
      options: ['played', 'play', 'plays'],
      correctAnswer: 'played',
      explanation: 'نستخدم الفعل مضاف له ed لأن الجملة في الماضي (last week).'
    },
    {
      id: 'psq3',
      type: 'multiple_choice',
      question: 'I ____ not eat rice.',
      options: ['did', 'do', 'am'],
      correctAnswer: 'did',
      explanation: 'نستخدم did لنفي الماضي البسيط.'
    },
    {
      id: 'psq4',
      type: 'multiple_choice',
      question: 'صحح الخطأ: He go to school yesterday.',
      options: ['He goes to school yesterday.', 'He went to school yesterday.', 'He go to school yesterday.'],
      correctAnswer: 'He went to school yesterday.',
      explanation: 'يجب استخدام الماضي (went) مع كلمة yesterday.'
    },
    {
      id: 'psq5',
      type: 'multiple_choice',
      question: 'صحح الخطأ: She didn’t went.',
      options: ['She didn’t go.', 'She didn’t went.', 'She doesn’t go.'],
      correctAnswer: 'She didn’t go.',
      explanation: 'بعد didn’t يعود الفعل للمصدر (go).'
    },
    {
      id: 'psq6',
      type: 'multiple_choice',
      question: 'صحح الخطأ: Did he went to school?',
      options: ['Did he go to school?', 'Did he went to school?', 'Does he go to school?'],
      correctAnswer: 'Did he go to school?',
      explanation: 'في السؤال مع Did، يعود الفعل للمصدر (go).'
    },
    {
      id: 'psq7',
      type: 'multiple_choice',
      question: 'اختر السؤال الصحيح لـ (you / play football yesterday):',
      options: ['Did you play football yesterday?', 'Do you play football yesterday?', 'Are you play football yesterday?'],
      correctAnswer: 'Did you play football yesterday?',
      explanation: 'نسأل بـ Did في الماضي البسيط.'
    },
    {
      id: 'psq8',
      type: 'multiple_choice',
      question: 'اختر السؤال الصحيح لـ (he / go to school):',
      options: ['Did he go to school?', 'Does he go to school?', 'Did he went to school?'],
      correctAnswer: 'Did he go to school?',
      explanation: 'نسأل بـ Did ونستخدم المصدر go.'
    },
    {
      id: 'psq9',
      type: 'arrange',
      question: 'أنا درست أمس.',
      options: ['studied', 'I', 'yesterday.'],
      correctAnswer: ['I', 'studied', 'yesterday.'],
      explanation: 'الترجمة الصحيحة: I studied yesterday.'
    },
    {
      id: 'psq10',
      type: 'arrange',
      question: 'هو لم يلعب.',
      options: ['He', 'did', 'not', 'play.'],
      correctAnswer: ['He', 'did', 'not', 'play.'],
      explanation: 'الترجمة الصحيحة: He did not play.'
    },
    {
      id: 'psq11',
      type: 'arrange',
      question: 'هل أكلت الأرز؟',
      options: ['Did', 'you', 'eat', 'rice?'],
      correctAnswer: ['Did', 'you', 'eat', 'rice?'],
      explanation: 'الترجمة الصحيحة: Did you eat rice?'
    }
  ]
};

export const presentContinuousLesson: GrammarLessonData = {
  id: 'present-continuous',
  title: 'المضارع المستمر (Present Continuous)',
  description: 'أحداث تقع الآن في لحظة الكلام 🏃‍♂️',
  cards: [
    {
      id: 'pc1',
      title: 'أولاً: ما هو المضارع المستمر؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">المضارع المستمر هو زمن نستخدمه للتعبير عن:</p>
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
              <p className="font-black text-indigo-700 mb-1">1. شيء يحدث الآن (في هذه اللحظة)</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">I am studying now</p>
              <p className="text-xs text-slate-400">(أنا أدرس الآن)</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 shadow-sm">
              <p className="font-black text-emerald-700 mb-1">2. شيء مؤقت (ليس عادة)</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">I am living in Sana'a this month</p>
              <p className="text-xs text-slate-400">(أنا أعيش في صنعاء هذا الشهر)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 shadow-sm">
              <p className="font-black text-blue-700 mb-1">3. حدث يحدث الآن أثناء الكلام</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">She is talking on the phone</p>
              <p className="text-xs text-slate-400">(هي تتحدث على الهاتف)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pc2',
      title: 'ثانياً: القاعدة الذهبية 🌟',
      icon: '🌟',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">هذه هي القاعدة التي يجب أن تحفظها جيداً:</p>
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl border-2 border-indigo-100 shadow-inner">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center" dir="ltr">
              <div className="group relative">
                <div className="px-4 py-2 bg-white rounded-2xl border-2 border-indigo-200 shadow-sm group-hover:border-indigo-400 transition-colors">
                  <span className="block text-[10px] text-indigo-400 font-black uppercase tracking-tighter">Subject</span>
                  <span className="font-black text-indigo-700 text-xl">I / He / They...</span>
                </div>
              </div>
              <span className="text-indigo-300 font-black text-2xl">+</span>
              <div className="group relative">
                <div className="px-4 py-2 bg-white rounded-2xl border-2 border-amber-200 shadow-sm group-hover:border-amber-400 transition-colors">
                  <span className="block text-[10px] text-amber-400 font-black uppercase tracking-tighter">Helping Verb</span>
                  <span className="font-black text-amber-700 text-xl">am / is / are</span>
                </div>
              </div>
              <span className="text-indigo-300 font-black text-2xl">+</span>
              <div className="group relative">
                <div className="px-4 py-2 bg-white rounded-2xl border-2 border-emerald-200 shadow-sm group-hover:border-emerald-400 transition-colors">
                  <span className="block text-[10px] text-emerald-400 font-black uppercase tracking-tighter">Main Verb</span>
                  <span className="font-black text-emerald-700 text-xl">verb + ing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pc3',
      title: 'ثالثاً: الضمائر مع الفعل المساعد 👥',
      icon: '👥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="text-sm text-slate-500 mb-4">كل ضمير له "صديق" محدد من الأفعال المساعدة:</p>
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" dir="ltr">
              <span className="text-2xl font-black text-indigo-600">I</span>
              <span className="text-slate-300">➜</span>
              <span className="text-2xl font-black text-indigo-700 bg-indigo-50 px-4 py-1 rounded-xl">am</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" dir="ltr">
              <span className="text-2xl font-black text-amber-600">He / She / It</span>
              <span className="text-slate-300">➜</span>
              <span className="text-2xl font-black text-amber-700 bg-amber-50 px-4 py-1 rounded-xl">is</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" dir="ltr">
              <span className="text-2xl font-black text-emerald-600">You / We / They</span>
              <span className="text-slate-300">➜</span>
              <span className="text-2xl font-black text-emerald-700 bg-emerald-50 px-4 py-1 rounded-xl">are</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pc4',
      title: 'رابعاً: تكوين الفعل + ing ✍️',
      icon: '✍️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="font-bold text-indigo-700 mb-2">✳️ القاعدة العامة:</p>
            <p className="text-sm">نضيف (ing) للفعل مباشرة.</p>
            <div className="grid grid-cols-3 gap-2 mt-3 text-center" dir="ltr">
              <div className="p-2 bg-white rounded-xl text-xs font-bold">play ➜ playing</div>
              <div className="p-2 bg-white rounded-xl text-xs font-bold">eat ➜ eating</div>
              <div className="p-2 bg-white rounded-xl text-xs font-bold">read ➜ reading</div>
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="font-bold text-amber-700 mb-2">🔴 ملاحظات مهمة:</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold">1. إذا انتهى الفعل بـ (e) نحذفها:</p>
                <p className="text-xs italic" dir="ltr">make ➜ making | write ➜ writing</p>
              </div>
              <div className="h-px bg-amber-200"></div>
              <div>
                <p className="text-xs font-bold">2. إذا كان الفعل قصير وينتهي بحرف ساكن (نكرر الحرف الأخير):</p>
                <p className="text-xs italic" dir="ltr">run ➜ running | sit ➜ sitting</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pc5',
      title: 'خامساً: الإثبات (Positive) ✅',
      icon: '✅',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><CText text="I" type="subject" /><CText text="am" type="particle" /><CText text="studying" type="verb" /></p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(أنا أدرس الآن)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><CText text="He" type="subject" /><CText text="is" type="particle" /><CText text="playing" type="verb" /><CText text="football" type="complement" /></p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هو يلعب كرة القدم الآن)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><CText text="They" type="subject" /><CText text="are" type="particle" /><CText text="watching" type="verb" /><CText text="TV" type="complement" /></p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هم يشاهدون التلفاز)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pc6',
      title: 'سادساً: النفي (Negative) ❌',
      icon: '❌',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-5 bg-red-50 rounded-3xl border-2 border-dashed border-red-100 text-center">
            <p className="text-xs font-bold text-red-500 mb-2 uppercase tracking-widest">قاعدة النفي</p>
            <p className="text-sm font-bold text-red-700" dir="ltr">Subject + am / is / are + <span className="underline">not</span> + verb + ing</p>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700">I <span className="text-red-500">am not</span> studying.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(أنا لا أدرس الآن)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700">He <span className="text-red-500">is not</span> playing.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هو لا يلعب الآن)</p>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
            <p className="font-bold text-red-400 mb-3 text-sm">✂️ الاختصارات (Contractions):</p>
            <div className="grid grid-cols-2 gap-3 text-[10px] font-bold" dir="ltr">
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">is not ➜ isn’t</div>
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">are not ➜ aren’t</div>
            </div>
            <p className="text-[8px] text-slate-400 mt-2">* am not (لا تختصر غالباً)</p>
          </div>
        </div>
      )
    },
    {
      id: 'pc7',
      title: 'سابعاً: السؤال (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-5 bg-blue-50 rounded-3xl border-2 border-dashed border-blue-100 text-center">
            <p className="text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">تكوين السؤال</p>
            <p className="text-sm font-bold text-blue-700" dir="ltr"><span className="underline">Am / Is / Are</span> + Subject + verb + ing?</p>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-blue-500">Are</span> you studying now?</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هل أنت تدرس الآن؟)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-blue-500">Is</span> he playing football?</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هل هو يلعب؟)</p>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
            <p className="font-bold text-blue-400 mb-3 text-sm">💡 الإجابة:</p>
            <div className="grid grid-cols-2 gap-3 text-[10px] font-bold" dir="ltr">
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">Yes, I am / No, I’m not</div>
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">Yes, he is / No, he isn’t</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pc8',
      title: 'ثامناً: كلمات تدل على المضارع المستمر 🗝️',
      icon: '🗝️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="text-sm text-slate-500 mb-2">عندما ترى هذه الكلمات، فغالباً الزمن هو مضارع مستمر:</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { en: 'now', ar: 'الآن' },
              { en: 'at the moment', ar: 'في هذه اللحظة' },
              { en: 'Look!', ar: 'انظر!' },
              { en: 'Listen!', ar: 'اسمع!' },
              { en: 'currently', ar: 'حالياً' },
              { en: 'right now', ar: 'الآن' }
            ].map(item => (
              <div key={item.en} className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center shadow-sm hover:bg-indigo-100 transition-colors">
                <span className="font-black text-indigo-700" dir="ltr">{item.en}</span>
                <span className="text-[10px] text-indigo-400">{item.ar}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'pc9',
      title: 'تاسعاً: الفرق بينه وبين المضارع البسيط ⚖️',
      icon: '⚖️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
            <table className="w-full text-right border-collapse" dir="rtl">
              <thead>
                <tr className="bg-slate-800 text-white text-xs">
                  <th className="p-3 border border-slate-700">المضارع البسيط</th>
                  <th className="p-3 border border-slate-700">المضارع المستمر</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[10px]">
                  <td className="p-3 border border-slate-100 font-bold">عادة / روتين</td>
                  <td className="p-3 border border-slate-100 font-bold">الآن (في هذه اللحظة)</td>
                </tr>
                <tr className="bg-slate-50 text-[10px]" dir="ltr">
                  <td className="p-3 border border-slate-100">I play</td>
                  <td className="p-3 border border-slate-100">I am playing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="font-bold text-indigo-700 mb-2 text-xs">✳️ مثال توضيحي:</p>
            <div className="space-y-2">
              <div>
                <p className="text-[10px] italic" dir="ltr">I play football every day</p>
                <p className="text-[8px] text-slate-500">أنا ألعب يومياً (عادة)</p>
              </div>
              <div className="h-px bg-indigo-200"></div>
              <div>
                <p className="text-[10px] italic" dir="ltr">I am playing football now</p>
                <p className="text-[8px] text-slate-500">أنا ألعب الآن (في هذه اللحظة)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pc10',
      title: 'عاشراً: أفعال لا تستخدم مع المستمر ❗',
      icon: '❗',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="text-sm">بعض الأفعال لا تأخذ (ing) لأنها تعبر عن حالة وليس حركة:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['like (يحب)', 'want (يريد)', 'know (يعرف)'].map(verb => (
              <span key={verb} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-[10px] font-bold border border-red-100">{verb}</span>
            ))}
          </div>
          <div className="flex justify-center items-center gap-6 py-2">
            <div className="text-center">
              <p className="text-red-500 line-through text-[10px]" dir="ltr">I am liking pizza</p>
              <span className="text-[8px] text-red-400">❌ خطأ</span>
            </div>
            <div className="text-center">
              <p className="text-emerald-600 font-bold text-[10px]" dir="ltr">I like pizza</p>
              <span className="text-[8px] text-emerald-500">✔️ صح</span>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'pcq1',
      type: 'multiple_choice',
      question: 'He ____ playing football.',
      options: ['is', 'am', 'are'],
      correctAnswer: 'is',
      explanation: 'He تأخذ is في المضارع المستمر.'
    },
    {
      id: 'pcq2',
      type: 'multiple_choice',
      question: 'They ____ watching TV at the moment.',
      options: ['is', 'am', 'are'],
      correctAnswer: 'are',
      explanation: 'They تأخذ are في المضارع المستمر.'
    },
    {
      id: 'pcq3',
      type: 'multiple_choice',
      question: 'I ____ not studying now.',
      options: ['is', 'am', 'are'],
      correctAnswer: 'am',
      explanation: 'I تأخذ am في المضارع المستمر.'
    },
    {
      id: 'pcq4',
      type: 'multiple_choice',
      question: '____ she coming to the party?',
      options: ['Is', 'Am', 'Are'],
      correctAnswer: 'Is',
      explanation: 'نسأل بـ Is مع She في المضارع المستمر.'
    },
    {
      id: 'pcq5',
      type: 'multiple_choice',
      question: 'Look! The cat ____ climbing the tree.',
      options: ['is', 'am', 'are'],
      correctAnswer: 'is',
      explanation: 'The cat (It) تأخذ is في المضارع المستمر.'
    }
  ]
};

export const futureSimpleLesson: GrammarLessonData = {
  id: 'future-simple',
  title: 'المستقبل البسيط (Future Simple)',
  description: 'أحداث سوف تقع في المستقبل 🚀',
  cards: [
    {
      id: 'fs1',
      title: 'أولاً: ما هو المستقبل البسيط؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">المستقبل البسيط هو زمن نستخدمه للتعبير عن:</p>
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
              <p className="font-black text-indigo-700 mb-1">1. حدث سيحدث في المستقبل</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">I will go to school tomorrow</p>
              <p className="text-xs text-slate-400">(سأذهب إلى المدرسة غداً)</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 shadow-sm">
              <p className="font-black text-emerald-700 mb-1">2. وعد أو قرار لحظي</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">I will help you with your homework</p>
              <p className="text-xs text-slate-400">(سأساعدك في واجبك)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 shadow-sm">
              <p className="font-black text-blue-700 mb-1">3. توقعات مستقبلية</p>
              <p className="text-sm text-slate-600 italic" dir="ltr">It will rain tomorrow</p>
              <p className="text-xs text-slate-400">(ستُمطر غداً)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fs2',
      title: 'ثانياً: القاعدة الأساسية 🧩',
      icon: '🧩',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest text-center">التركيب (Structure)</p>
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-center gap-3 text-center" dir="ltr">
              <div className="px-3 py-1 bg-blue-50 rounded-lg border border-blue-100">
                <span className="block text-[10px] text-blue-400 font-bold">SUBJECT</span>
                <span className="font-black text-blue-600">Subject</span>
              </div>
              <span className="text-slate-300 font-black">+</span>
              <div className="px-3 py-1 bg-indigo-50 rounded-lg border border-indigo-100">
                <span className="block text-[10px] text-indigo-400 font-bold">PARTICLE</span>
                <span className="font-black text-indigo-600">will</span>
              </div>
              <span className="text-slate-300 font-black">+</span>
              <div className="px-3 py-1 bg-red-50 rounded-lg border border-red-100">
                <span className="block text-[10px] text-red-400 font-bold">VERB</span>
                <span className="font-black text-red-600">verb (base form)</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fs3',
      title: 'ثالثاً: الضمائر مع will 👥',
      icon: '👥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-center gap-2 mb-4">
            <span className="text-xl">⚠️</span>
            <p className="text-[10px] font-bold text-amber-700 leading-tight">ملاحظة: will ثابت لجميع الضمائر، لا تتغير أبداً.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
            <table className="w-full text-center border-collapse" dir="ltr">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-3 border border-indigo-500">الضمير</th>
                  <th className="p-3 border border-indigo-500">المثال</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { sub: 'I', ex: 'I will go' },
                  { sub: 'You', ex: 'You will study' },
                  { sub: 'He', ex: 'He will play' },
                  { sub: 'She', ex: 'She will eat' },
                  { sub: 'It', ex: 'It will rain' },
                  { sub: 'We', ex: 'We will travel' },
                  { sub: 'They', ex: 'They will watch' }
                ].map((item, idx) => (
                  <tr key={item.sub} className={idx % 2 === 0 ? 'bg-indigo-50' : 'bg-white'}>
                    <td className="p-2 border border-indigo-100 font-bold">{item.sub}</td>
                    <td className="p-2 border border-indigo-100 font-black text-indigo-600">{item.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'fs4',
      title: 'رابعاً: الإثبات (Positive) ✅',
      icon: '✅',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><CText text="I" type="subject" /><CText text="will" type="particle" /><CText text="study" type="verb" /><CText text="tomorrow" type="complement" /></p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(سأدرس غداً)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><CText text="He" type="subject" /><CText text="will" type="particle" /><CText text="play" type="verb" /><CText text="football next week" type="complement" /></p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(سيلعب كرة القدم الأسبوع المقبل)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><CText text="They" type="subject" /><CText text="will" type="particle" /><CText text="watch" type="verb" /><CText text="a movie tonight" type="complement" /></p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(سيشاهدون فيلماً الليلة)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fs5',
      title: 'خامساً: النفي (Negative) ❌',
      icon: '❌',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-5 bg-red-50 rounded-3xl border-2 border-dashed border-red-100 text-center">
            <p className="text-xs font-bold text-red-500 mb-2 uppercase tracking-widest">قاعدة النفي</p>
            <p className="text-sm font-bold text-red-700" dir="ltr">Subject + <span className="underline">will not (won’t)</span> + verb (base)</p>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700">I <span className="text-red-500">will not (won’t)</span> go.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(لن أذهب)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700">He <span className="text-red-500">will not (won’t)</span> play.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هو لن يلعب)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700">They <span className="text-red-500">will not (won’t)</span> watch TV.</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هم لن يشاهدوا التلفاز)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fs6',
      title: 'سادساً: السؤال (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-5 bg-blue-50 rounded-3xl border-2 border-dashed border-blue-100 text-center">
            <p className="text-xs font-bold text-blue-500 mb-2 uppercase tracking-widest">تكوين السؤال</p>
            <p className="text-sm font-bold text-blue-700" dir="ltr"><span className="underline">Will</span> + subject + verb (base)?</p>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-blue-500">Will</span> you study tomorrow?</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هل ستدرس غداً؟)</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm" dir="ltr">
              <p className="text-sm font-bold text-slate-700"><span className="text-blue-500">Will</span> he play football next week?</p>
              <p className="text-[10px] text-slate-400 mt-1" dir="rtl">(هل سيلعب كرة القدم الأسبوع المقبل؟)</p>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-xl">
            <p className="font-bold text-blue-400 mb-3 text-sm">💡 الإجابة:</p>
            <div className="grid grid-cols-2 gap-3 text-[10px] font-bold" dir="ltr">
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">Yes, I will / No, I won’t</div>
              <div className="bg-white/10 p-2 rounded-xl border border-white/10">Yes, he will / No, he won’t</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fs7',
      title: 'سابعاً: كلمات تدل على المستقبل البسيط 🗝️',
      icon: '🗝️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-3">
            {[
              { en: 'tomorrow', ar: 'غداً' },
              { en: 'next week', ar: 'الأسبوع المقبل' },
              { en: 'soon', ar: 'قريباً' },
              { en: 'in 2 days', ar: 'بعد يومين' }
            ].map(item => (
              <div key={item.en} className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center justify-center shadow-sm">
                <span className="font-black text-indigo-700" dir="ltr">{item.en}</span>
                <span className="text-[10px] text-indigo-400">{item.ar}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-center mt-4">
            <p className="text-xs text-slate-500 italic" dir="ltr">Example: <span className="font-bold text-indigo-600">I will visit my friend tomorrow</span></p>
            <p className="text-[10px] text-slate-400 mt-1">(سأزور صديقي غداً)</p>
          </div>
        </div>
      )
    },
    {
      id: 'fs8',
      title: 'ثامناً: ملخص سريع 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">1</span>
              <p className="text-xs font-bold text-emerald-700">will ثابت لجميع الضمائر</p>
            </div>
            <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-3">
              <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">2</span>
              <p className="text-xs font-bold text-red-700">في النفي ➜ will not / won’t + verb</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-3">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">3</span>
              <p className="text-xs font-bold text-blue-700">في السؤال ➜ Will + subject + verb</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-3">
              <span className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">4</span>
              <p className="text-xs font-bold text-amber-700">كلمات المستقبل: tomorrow, next week, soon</p>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'fsq1',
      type: 'multiple_choice',
      question: 'She ____ go to the market tomorrow.',
      options: ['goes', 'will', 'going'],
      correctAnswer: 'will',
      explanation: 'نستخدم will للتعبير عن المستقبل البسيط.'
    },
    {
      id: 'fsq2',
      type: 'multiple_choice',
      question: 'They ____ watch a movie next week.',
      options: ['watch', 'will', 'will watch'],
      correctAnswer: 'will',
      explanation: 'نستخدم will قبل الفعل في المصدر للتعبير عن المستقبل.'
    },
    {
      id: 'fsq3',
      type: 'multiple_choice',
      question: 'I ____ not help him.',
      options: ['will', 'am', 'do'],
      correctAnswer: 'will',
      explanation: 'نستخدم will not (won’t) لنفي المستقبل البسيط.'
    },
    {
      id: 'fsq4',
      type: 'multiple_choice',
      question: 'صحح الخطأ: Will he goes to school?',
      options: ['Will he go to school?', 'Will he goes to school?', 'Does he go to school?'],
      correctAnswer: 'Will he go to school?',
      explanation: 'بعد Will يجب أن يكون الفعل في المصدر بدون (s).'
    },
    {
      id: 'fsq5',
      type: 'multiple_choice',
      question: 'صحح الخطأ: I won’t goes tomorrow.',
      options: ['I won’t go tomorrow.', 'I won’t goes tomorrow.', 'I don’t go tomorrow.'],
      correctAnswer: 'I won’t go tomorrow.',
      explanation: 'بعد won’t يجب أن يكون الفعل في المصدر.'
    },
    {
      id: 'fsq6',
      type: 'multiple_choice',
      question: 'صحح الخطأ: She will plays football.',
      options: ['She will play football.', 'She will plays football.', 'She plays football.'],
      correctAnswer: 'She will play football.',
      explanation: 'بعد will يجب أن يكون الفعل في المصدر بدون (s).'
    },
    {
      id: 'fsq7',
      type: 'multiple_choice',
      question: 'اختر السؤال الصحيح لـ (you / help me tomorrow):',
      options: ['Will you help me tomorrow?', 'Do you help me tomorrow?', 'Are you help me tomorrow?'],
      correctAnswer: 'Will you help me tomorrow?',
      explanation: 'نسأل بـ Will في المستقبل البسيط.'
    },
    {
      id: 'fsq8',
      type: 'multiple_choice',
      question: 'اختر السؤال الصحيح لـ (he / come to the party):',
      options: ['Will he come to the party?', 'Does he come to the party?', 'Will he comes to the party?'],
      correctAnswer: 'Will he come to the party?',
      explanation: 'نسأل بـ Will ونستخدم المصدر come.'
    },
    {
      id: 'fsq9',
      type: 'arrange',
      question: 'سأدرس غداً.',
      options: ['study', 'I', 'will', 'tomorrow.'],
      correctAnswer: ['I', 'will', 'study', 'tomorrow.'],
      explanation: 'الترجمة الصحيحة: I will study tomorrow.'
    },
    {
      id: 'fsq10',
      type: 'arrange',
      question: 'هو لن يلعب الأسبوع المقبل.',
      options: ['He', 'won’t', 'play', 'next week.'],
      correctAnswer: ['He', 'won’t', 'play', 'next week.'],
      explanation: 'الترجمة الصحيحة: He won’t play next week.'
    },
    {
      id: 'fsq11',
      type: 'arrange',
      question: 'هل ستسافر قريباً؟',
      options: ['Will', 'you', 'travel', 'soon?'],
      correctAnswer: ['Will', 'you', 'travel', 'soon?'],
      explanation: 'الترجمة الصحيحة: Will you travel soon?'
    }
  ]
};

export const pastContinuousLesson: GrammarLessonData = {
  id: 'past-continuous',
  title: 'الماضي المستمر (Past Continuous)',
  description: 'وصف أحداث كانت مستمرة في وقت معين في الماضي ⏳',
  cards: [
    {
      id: 'c1',
      title: 'ما هو الماضي المستمر؟ 🤔',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>نستخدم الماضي المستمر للتعبير عن:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">1.</span>
              <span>حدث كان يحدث في وقت معين في الماضي:
                <br />
                <span className="text-sm text-slate-500" dir="ltr">I was studying at 7 PM yesterday.</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">2.</span>
              <span>حدث كان مستمراً بينما حدث آخر حصل فجأة:
                <br />
                <span className="text-sm text-slate-500" dir="ltr">I was watching TV when he called.</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">3.</span>
              <span>وصف حالة أو نشاط مستمر في الماضي:
                <br />
                <span className="text-sm text-slate-500" dir="ltr">It was raining all day yesterday.</span>
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'القاعدة الأساسية 🏗️',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">التركيب ✅</h4>
            <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl" dir="ltr">
              <CText text="Subject" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="was / were" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="verb + ing" type="verb" />
            </div>
          </div>

          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <h4 className="font-black text-indigo-800 mb-3">الضمائر مع was / were 👥</h4>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <span className="font-bold text-indigo-600">was</span>
                <div className="text-sm text-slate-500">I / He / She / It</div>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <span className="font-bold text-indigo-600">were</span>
                <div className="text-sm text-slate-500">You / We / They</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'تكوين الفعل + ing 📝',
      icon: '✍️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">القاعدة العامة: نضيف (ing) للفعل</p>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
              <p className="text-sm font-bold text-rose-700 mb-1">إذا انتهى الفعل بـ (e) نحذفها:</p>
              <div className="flex justify-between items-center px-4" dir="ltr">
                <span className="line-through text-slate-400">make</span>
                <span className="text-rose-600 font-black">making</span>
              </div>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-sm font-bold text-amber-700 mb-1">إذا كان الفعل قصيراً وينتهي بحرف ساكن نكرره:</p>
              <div className="flex justify-between items-center px-4" dir="ltr">
                <span className="text-slate-400">sit</span>
                <span className="text-amber-600 font-black">sitting</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: 'أمثلة ملونة 🎨',
      icon: '✨',
      content: (
        <div className="space-y-4 text-2xl text-left font-medium whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
            <CText text="I" type="subject" />
            <CText text="was" type="particle" />
            <CText text="studying" type="verb" />
            <CText text="at 8 PM" type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
            <CText text="He" type="subject" />
            <CText text="was" type="particle" />
            <CText text="playing" type="verb" />
            <CText text="football" type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
            <CText text="They" type="subject" />
            <CText text="were" type="particle" />
            <CText text="watching" type="verb" />
            <CText text="TV" type="complement" />
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: 'النفي (Negative) ❌',
      icon: '❌',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex flex-nowrap overflow-x-auto gap-2 text-xl items-center mb-4" dir="ltr">
              <CText text="Subject" type="subject" />
              <CText text="wasn't / weren't" type="particle" />
              <CText text="verb + ing" type="verb" />
            </div>
            <div className="space-y-2 text-left" dir="ltr">
              <p className="text-slate-600">I <span className="text-rose-500 font-bold">wasn't</span> sleeping.</p>
              <p className="text-slate-600">They <span className="text-rose-500 font-bold">weren't</span> watching TV.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: 'السؤال (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <div className="flex flex-nowrap overflow-x-auto gap-2 text-xl items-center mb-4" dir="ltr">
              <CText text="Was / Were" type="particle" />
              <CText text="subject" type="subject" />
              <CText text="verb + ing" type="verb" />
              <span className="text-indigo-400 font-black">?</span>
            </div>
            <div className="space-y-3 text-left" dir="ltr">
              <div>
                <p className="text-indigo-700 font-medium">Were you studying at 7 PM?</p>
                <p className="text-xs text-slate-500">Yes, I was / No, I wasn't</p>
              </div>
              <div>
                <p className="text-indigo-700 font-medium">Was he playing football?</p>
                <p className="text-xs text-slate-500">Yes, he was / No, he wasn't</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: 'كلمات تدل على الزمن 🗝️',
      icon: '🗝️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-3">
            {[
              { en: 'at 7 PM yesterday', ar: 'الساعة 7 مساء أمس' },
              { en: 'all day yesterday', ar: 'طوال اليوم أمس' },
              { en: 'while', ar: 'بينما' },
              { en: 'when', ar: 'عندما' }
            ].map(item => (
              <div key={item.en} className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <span className="font-black text-indigo-600" dir="ltr">{item.en}</span>
                <span className="text-[10px] text-slate-400">{item.ar}</span>
              </div>
            ))}
          </div>
          <div className="p-3 bg-slate-50 rounded-xl text-sm italic" dir="ltr">
            He was sleeping <span className="text-indigo-600 font-bold">when</span> I called him.
          </div>
        </div>
      )
    },
    {
      id: 'c8',
      title: 'الفرق بين الماضي البسيط والمستمر 🧠',
      icon: '⚖️',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100">
              <h5 className="font-bold text-blue-700 mb-2">الماضي البسيط</h5>
              <p className="text-xs text-blue-600">حدث انتهى تماماً</p>
              <p className="text-sm mt-2" dir="ltr">I played football.</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100">
              <h5 className="font-bold text-purple-700 mb-2">الماضي المستمر</h5>
              <p className="text-xs text-purple-600">حدث كان مستمراً</p>
              <p className="text-sm mt-2" dir="ltr">I was playing football.</p>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'He ____ playing football at 5 PM yesterday.',
      options: ['was', 'were', 'is'],
      correctAnswer: 'was',
      explanation: 'الفاعل He يأخذ was في الماضي المستمر.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'They ____ watching TV all night.',
      options: ['was', 'were', 'am'],
      correctAnswer: 'were',
      explanation: 'الفاعل They يأخذ were في الماضي المستمر.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'I ____ studying when he called.',
      options: ['was', 'were', 'am'],
      correctAnswer: 'was',
      explanation: 'الفاعل I يأخذ was في الماضي المستمر.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'صحح الخطأ: He were playing yesterday.',
      options: ['He was playing yesterday.', 'He were playing yesterday.', 'He is playing yesterday.'],
      correctAnswer: 'He was playing yesterday.',
      explanation: 'الفاعل He يأخذ was وليس were.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'صحح الخطأ: I wasn\'t study at 8 PM.',
      options: ['I wasn\'t studying at 8 PM.', 'I wasn\'t study at 8 PM.', 'I didn\'t studying at 8 PM.'],
      correctAnswer: 'I wasn\'t studying at 8 PM.',
      explanation: 'في الماضي المستمر يجب إضافة ing للفعل بعد was/were.'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحح الخطأ: Were she sleeping?',
      options: ['Was she sleeping?', 'Were she sleeping?', 'Is she sleeping?'],
      correctAnswer: 'Was she sleeping?',
      explanation: 'الفاعل she يأخذ was في السؤال.'
    },
    {
      id: 'q7',
      type: 'arrange',
      question: 'you / watch TV / yesterday evening',
      correctAnswer: ['Were', 'you', 'watching', 'TV', 'yesterday', 'evening', '?'],
      explanation: 'تكوين السؤال: Were + you + watching + TV...'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'he / play football / yesterday',
      correctAnswer: ['Was', 'he', 'playing', 'football', 'yesterday', '?'],
      explanation: 'تكوين السؤال: Was + he + playing + football...'
    },
    {
      id: 'q9',
      type: 'multiple_choice',
      question: 'ترجمة: كنت أدرس الساعة 7 مساءً',
      options: ['I was studying at 7 PM.', 'I am studying at 7 PM.', 'I studied at 7 PM.'],
      correctAnswer: 'I was studying at 7 PM.',
      explanation: 'الترجمة الصحيحة تستخدم الماضي المستمر لوجود وقت محدد.'
    },
    {
      id: 'q10',
      type: 'multiple_choice',
      question: 'ترجمة: هو لم يكن يلعب أمس',
      options: ['He wasn\'t playing yesterday.', 'He didn\'t playing yesterday.', 'He isn\'t playing yesterday.'],
      correctAnswer: 'He wasn\'t playing yesterday.',
      explanation: 'نستخدم wasn\'t للنفي في الماضي المستمر.'
    },
    {
      id: 'q11',
      type: 'multiple_choice',
      question: 'ترجمة: هل كانوا يشاهدون التلفاز؟',
      options: ['Were they watching TV?', 'Was they watching TV?', 'Are they watching TV?'],
      correctAnswer: 'Were they watching TV?',
      explanation: 'نبدأ بـ Were لأن الفاعل they.'
    }
  ]
};

export const presentPerfectLesson: GrammarLessonData = {
  id: 'present-perfect',
  title: 'المضارع التام (Present Perfect)',
  description: 'حدث بدأ في الماضي وله أثر في الحاضر أو تجربة حياتية 🌉',
  cards: [
    {
      id: 'c1',
      title: 'ما هو المضارع التام؟ 🤔',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>المضارع التام يُستخدم للتعبير عن:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">1.</span>
              <span>حدث بدأ في الماضي وما زال مستمراً أو له تأثير على الحاضر:
                <br />
                <span className="text-sm text-slate-500" dir="ltr">I have lived in Sana'a for 5 years.</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">2.</span>
              <span>خبر أو تجربة حدثت في الماضي دون تحديد وقت محدد:
                <br />
                <span className="text-sm text-slate-500" dir="ltr">She has visited London.</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">3.</span>
              <span>أحداث تكررت في الماضي ولها تأثير الآن:
                <br />
                <span className="text-sm text-slate-500" dir="ltr">I have seen that movie three times.</span>
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'القاعدة الأساسية 🏗️',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">التركيب ✅</h4>
            <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl" dir="ltr">
              <CText text="Subject" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="have / has" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="V3 (Past Participle)" type="verb" />
            </div>
          </div>

          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <h4 className="font-black text-indigo-800 mb-3">الضمائر مع have / has 👥</h4>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <span className="font-bold text-indigo-600">has</span>
                <div className="text-sm text-slate-500">He / She / It</div>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <span className="font-bold text-indigo-600">have</span>
                <div className="text-sm text-slate-500">I / You / We / They</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'تصريف الفعل (V3) 📝',
      icon: '✍️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="text-sm font-bold text-emerald-700 mb-2">أفعال منتظمة (Regular) → + ed</p>
              <div className="grid grid-cols-2 gap-2 text-center text-sm" dir="ltr">
                <div className="bg-white p-1 rounded">play → <span className="text-emerald-600 font-bold">played</span></div>
                <div className="bg-white p-1 rounded">watch → <span className="text-emerald-600 font-bold">watched</span></div>
              </div>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-sm font-bold text-amber-700 mb-2">أفعال غير منتظمة (Irregular) → حفظ التصريف الثالث</p>
              <div className="grid grid-cols-2 gap-2 text-center text-sm" dir="ltr">
                <div className="bg-white p-1 rounded">go → <span className="text-amber-600 font-bold">gone</span></div>
                <div className="bg-white p-1 rounded">eat → <span className="text-amber-600 font-bold">eaten</span></div>
                <div className="bg-white p-1 rounded">see → <span className="text-amber-600 font-bold">seen</span></div>
                <div className="bg-white p-1 rounded">take → <span className="text-amber-600 font-bold">taken</span></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: 'أمثلة ملونة 🎨',
      icon: '✨',
      content: (
        <div className="space-y-4 text-2xl text-left font-medium whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
            <CText text="I" type="subject" />
            <CText text="have" type="particle" />
            <CText text="finished" type="verb" />
            <CText text="my homework" type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
            <CText text="She" type="subject" />
            <CText text="has" type="particle" />
            <CText text="visited" type="verb" />
            <CText text="Paris" type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
            <CText text="They" type="subject" />
            <CText text="have" type="particle" />
            <CText text="seen" type="verb" />
            <CText text="this movie" type="complement" />
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: 'النفي (Negative) ❌',
      icon: '❌',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex flex-nowrap overflow-x-auto gap-2 text-xl items-center mb-4" dir="ltr">
              <CText text="Subject" type="subject" />
              <CText text="haven't / hasn't" type="particle" />
              <CText text="V3" type="verb" />
            </div>
            <div className="space-y-2 text-left" dir="ltr">
              <p className="text-slate-600">I <span className="text-rose-500 font-bold">haven't</span> finished yet.</p>
              <p className="text-slate-600">He <span className="text-rose-500 font-bold">hasn't</span> visited Paris.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: 'السؤال (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <div className="flex flex-nowrap overflow-x-auto gap-2 text-xl items-center mb-4" dir="ltr">
              <CText text="Have / Has" type="particle" />
              <CText text="subject" type="subject" />
              <CText text="V3" type="verb" />
              <span className="text-indigo-400 font-black">?</span>
            </div>
            <div className="space-y-3 text-left" dir="ltr">
              <div>
                <p className="text-indigo-700 font-medium">Have you finished your homework?</p>
                <p className="text-xs text-slate-500">Yes, I have / No, I haven't</p>
              </div>
              <div>
                <p className="text-indigo-700 font-medium">Has he visited Paris?</p>
                <p className="text-xs text-slate-500">Yes, he has / No, he hasn't</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: 'كلمات تدل على الزمن 🗝️',
      icon: '🗝️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-3">
            {[
              { en: 'already', ar: 'بالفعل' },
              { en: 'yet', ar: 'بعد / حتى الآن' },
              { en: 'just', ar: 'للتو' },
              { en: 'ever', ar: 'أبداً (سؤال)' },
              { en: 'never', ar: 'أبداً (نفي)' },
              { en: 'for', ar: 'لمدة' },
              { en: 'since', ar: 'منذ' }
            ].map(item => (
              <div key={item.en} className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <span className="font-black text-indigo-600" dir="ltr">{item.en}</span>
                <span className="text-[10px] text-slate-400">{item.ar}</span>
              </div>
            ))}
          </div>
          <div className="p-3 bg-slate-50 rounded-xl text-sm italic" dir="ltr">
            I have lived here <span className="text-indigo-600 font-bold">for</span> 5 years.
          </div>
        </div>
      )
    },
    {
      id: 'c8',
      title: 'الفرق بين الماضي البسيط والمضارع التام 🧠',
      icon: '⚖️',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100">
              <h5 className="font-bold text-blue-700 mb-2">الماضي البسيط</h5>
              <p className="text-xs text-blue-600">حدث محدد وانتهى</p>
              <p className="text-sm mt-2" dir="ltr">I visited Paris last year.</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100">
              <h5 className="font-bold text-purple-700 mb-2">المضارع التام</h5>
              <p className="text-xs text-purple-600">تجربة أو حدث مهم للآن</p>
              <p className="text-sm mt-2" dir="ltr">I have visited Paris.</p>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'She ____ seen this movie before.',
      options: ['have', 'has', 'is'],
      correctAnswer: 'has',
      explanation: 'الفاعل She يأخذ has في المضارع التام.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'I ____ just finished my homework.',
      options: ['have', 'has', 'am'],
      correctAnswer: 'have',
      explanation: 'الفاعل I يأخذ have في المضارع التام.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'They ____ not visited London yet.',
      options: ['have', 'has', 'are'],
      correctAnswer: 'have',
      explanation: 'الفاعل They يأخذ have في المضارع التام.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'صحح الخطأ: She have finished her work.',
      options: ['She has finished her work.', 'She have finished her work.', 'She is finished her work.'],
      correctAnswer: 'She has finished her work.',
      explanation: 'الفاعل She يأخذ has وليس have.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'صحح الخطأ: I has eaten lunch.',
      options: ['I have eaten lunch.', 'I has eaten lunch.', 'I am eaten lunch.'],
      correctAnswer: 'I have eaten lunch.',
      explanation: 'الفاعل I يأخذ have وليس has.'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحح الخطأ: Have he ever been to Paris?',
      options: ['Has he ever been to Paris?', 'Have he ever been to Paris?', 'Is he ever been to Paris?'],
      correctAnswer: 'Has he ever been to Paris?',
      explanation: 'الفاعل he يأخذ Has في السؤال.'
    },
    {
      id: 'q7',
      type: 'arrange',
      question: 'you / ever / eat sushi',
      correctAnswer: ['Have', 'you', 'ever', 'eaten', 'sushi', '?'],
      explanation: 'تكوين السؤال: Have + you + ever + V3 (eaten)...'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'he / just / arrive',
      correctAnswer: ['He', 'has', 'just', 'arrived'],
      explanation: 'تكوين الجملة: He + has + just + V3 (arrived).'
    },
    {
      id: 'q9',
      type: 'multiple_choice',
      question: 'ترجمة: لقد زرت صنعاء من قبل',
      options: ['I have visited Sana\'a before.', 'I visited Sana\'a before.', 'I am visiting Sana\'a before.'],
      correctAnswer: 'I have visited Sana\'a before.',
      explanation: 'نستخدم المضارع التام للتعبير عن تجربة سابقة بدون تحديد وقت.'
    },
    {
      id: 'q10',
      type: 'multiple_choice',
      question: 'ترجمة: لم أنهِ واجبي بعد',
      options: ['I haven\'t finished my homework yet.', 'I didn\'t finish my homework yet.', 'I haven\'t finish my homework yet.'],
      correctAnswer: 'I haven\'t finished my homework yet.',
      explanation: 'نستخدم haven\'t + V3 مع yet في النفي.'
    },
    {
      id: 'q11',
      type: 'multiple_choice',
      question: 'ترجمة: هل سبق أن شاهدت هذا الفيلم؟',
      options: ['Have you ever seen this movie?', 'Did you ever see this movie?', 'Have you ever see this movie?'],
      correctAnswer: 'Have you ever seen this movie?',
      explanation: 'نستخدم Have you ever + V3 للسؤال عن التجارب.'
    }
  ]
};

export const pastPerfectLesson: GrammarLessonData = {
  id: 'past-perfect',
  title: 'الماضي التام (Past Perfect)',
  description: 'حدث وقع قبل حدث آخر في الماضي ⏪',
  cards: [
    {
      id: 'c1',
      title: 'ما هو الماضي التام؟ 🤔',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>الماضي التام يُستخدم للتعبير عن:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">1.</span>
              <span>حدث حدث قبل حدث آخر في الماضي:
                <br />
                <span className="text-sm text-slate-500" dir="ltr">I had finished my homework before he came.</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">2.</span>
              <span>ترتيب الأحداث في الماضي (لتوضيح أي حدث حدث أولاً):
                <br />
                <span className="text-sm text-slate-500" dir="ltr">She had left when I arrived.</span>
              </span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'القاعدة الأساسية 🏗️',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">التركيب ✅</h4>
            <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl" dir="ltr">
              <CText text="Subject" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="had" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="V3 (Past Participle)" type="verb" />
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-amber-800 text-sm font-bold flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <p>لاحظ: had ثابت لجميع الضمائر (I, He, She, It, We, You, They)</p>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'تصريف الفعل (V3) 📝',
      icon: '✍️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="text-sm font-bold text-emerald-700 mb-2">أفعال منتظمة (Regular) → + ed</p>
              <div className="grid grid-cols-2 gap-2 text-center text-sm" dir="ltr">
                <div className="bg-white p-1 rounded">play → <span className="text-emerald-600 font-bold">played</span></div>
                <div className="bg-white p-1 rounded">watch → <span className="text-emerald-600 font-bold">watched</span></div>
                <div className="bg-white p-1 rounded">clean → <span className="text-emerald-600 font-bold">cleaned</span></div>
              </div>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-sm font-bold text-amber-700 mb-2">أفعال غير منتظمة (Irregular) → حفظ التصريف الثالث</p>
              <div className="grid grid-cols-2 gap-2 text-center text-sm" dir="ltr">
                <div className="bg-white p-1 rounded">go → <span className="text-amber-600 font-bold">gone</span></div>
                <div className="bg-white p-1 rounded">eat → <span className="text-amber-600 font-bold">eaten</span></div>
                <div className="bg-white p-1 rounded">see → <span className="text-amber-600 font-bold">seen</span></div>
                <div className="bg-white p-1 rounded">take → <span className="text-amber-600 font-bold">taken</span></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: 'الإثبات (Positive) ✨',
      icon: '✨',
      content: (
        <div className="space-y-4 text-2xl text-left font-medium whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="I" type="subject" />
            <CText text="had" type="particle" />
            <CText text="finished" type="verb" />
            <CText text="my homework" type="complement" />
            <p className="text-xs text-slate-400 mt-1">before dinner</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="She" type="subject" />
            <CText text="had" type="particle" />
            <CText text="visited" type="verb" />
            <CText text="Paris" type="complement" />
            <p className="text-xs text-slate-400 mt-1">before she moved to London</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="They" type="subject" />
            <CText text="had" type="particle" />
            <CText text="seen" type="verb" />
            <CText text="that movie" type="complement" />
            <p className="text-xs text-slate-400 mt-1">before last week</p>
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: 'النفي (Negative) ❌',
      icon: '❌',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex flex-nowrap overflow-x-auto gap-2 text-xl items-center mb-4" dir="ltr">
              <CText text="Subject" type="subject" />
              <CText text="had not (hadn't)" type="particle" />
              <CText text="V3" type="verb" />
            </div>
            <div className="space-y-2 text-left" dir="ltr">
              <p className="text-slate-600">I <span className="text-rose-500 font-bold">had not</span> finished my homework before he came.</p>
              <p className="text-slate-600">She <span className="text-rose-500 font-bold">hadn't</span> visited Paris before she moved.</p>
              <p className="text-slate-600">They <span className="text-rose-500 font-bold">hadn't</span> seen that movie before last week.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: 'السؤال (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <div className="flex flex-nowrap overflow-x-auto gap-2 text-xl items-center mb-4" dir="ltr">
              <CText text="Had" type="particle" />
              <CText text="subject" type="subject" />
              <CText text="V3" type="verb" />
              <span className="text-indigo-400 font-black">?</span>
            </div>
            <div className="space-y-3 text-left" dir="ltr">
              <div>
                <p className="text-indigo-700 font-medium">Had you finished your homework before dinner?</p>
                <p className="text-xs text-slate-500">Yes, I had / No, I hadn't</p>
              </div>
              <div>
                <p className="text-indigo-700 font-medium">Had she visited Paris before she moved to London?</p>
                <p className="text-xs text-slate-500">Yes, she had / No, she hadn't</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: 'كلمات تدل على الزمن 🗝️',
      icon: '🗝️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-3">
            {[
              { en: 'before', ar: 'قبل' },
              { en: 'after', ar: 'بعد' },
              { en: 'by the time', ar: 'بحلول الوقت الذي' },
              { en: 'already', ar: 'بالفعل' },
              { en: 'just', ar: 'للتو' }
            ].map(item => (
              <div key={item.en} className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <span className="font-black text-indigo-600" dir="ltr">{item.en}</span>
                <span className="text-[10px] text-slate-400">{item.ar}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2 text-left text-sm italic" dir="ltr">
            <p>I had <span className="text-indigo-600 font-bold">already</span> eaten before he arrived.</p>
            <p>She had left <span className="text-indigo-600 font-bold">by the time</span> I arrived.</p>
            <p>They had <span className="text-indigo-600 font-bold">just</span> finished their work.</p>
          </div>
        </div>
      )
    },
    {
      id: 'c8',
      title: 'الفرق بين الماضي البسيط والماضي التام 🧠',
      icon: '⚖️',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100">
              <h5 className="font-bold text-blue-700 mb-2">الماضي البسيط</h5>
              <p className="text-xs text-blue-600">حدث واحد في الماضي</p>
              <p className="text-sm mt-2" dir="ltr">I ate dinner.</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100">
              <h5 className="font-bold text-purple-700 mb-2">الماضي التام</h5>
              <p className="text-xs text-purple-600">حدث قبل حدث آخر</p>
              <p className="text-sm mt-2" dir="ltr">I had eaten before he came.</p>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'She ____ finished her homework before dinner.',
      options: ['has', 'had', 'have'],
      correctAnswer: 'had',
      explanation: 'نستخدم had في الماضي التام مع جميع الضمائر.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'They ____ already left when I arrived.',
      options: ['had', 'has', 'have'],
      correctAnswer: 'had',
      explanation: 'الحدث الأول (المغادرة) يكون في الماضي التام (had + V3).'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'I ____ not seen that movie before last week.',
      options: ['had', 'has', 'have'],
      correctAnswer: 'had',
      explanation: 'النفي في الماضي التام يكون بـ had not.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'صحح الخطأ: She have finished her work before dinner.',
      options: ['She had finished her work before dinner.', 'She has finished her work before dinner.', 'She is finished her work before dinner.'],
      correctAnswer: 'She had finished her work before dinner.',
      explanation: 'يجب استخدام had بدلاً من have في الماضي التام.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'صحح الخطأ: I hadn\'t went to school before 8 AM.',
      options: ['I hadn\'t gone to school before 8 AM.', 'I hadn\'t go to school before 8 AM.', 'I hadn\'t goes to school before 8 AM.'],
      correctAnswer: 'I hadn\'t gone to school before 8 AM.',
      explanation: 'يجب استخدام التصريف الثالث (gone) بدلاً من الماضي البسيط (went).'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحح الخطأ: Had he saw that movie before?',
      options: ['Had he seen that movie before?', 'Had he see that movie before?', 'Had he sees that movie before?'],
      correctAnswer: 'Had he seen that movie before?',
      explanation: 'في السؤال نستخدم التصريف الثالث (seen).'
    },
    {
      id: 'q7',
      type: 'arrange',
      question: 'you / finish your homework before he came',
      correctAnswer: ['Had', 'you', 'finished', 'your', 'homework', 'before', 'he', 'came', '?'],
      explanation: 'تكوين السؤال: Had + subject + V3...'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'she / leave when I arrived',
      correctAnswer: ['Had', 'she', 'left', 'when', 'I', 'arrived', '?'],
      explanation: 'تكوين السؤال: Had + subject + V3...'
    },
    {
      id: 'q9',
      type: 'multiple_choice',
      question: 'ترجمة: كنت قد أكلت قبل أن يصل هو',
      options: ['I had eaten before he arrived.', 'I have eaten before he arrived.', 'I ate before he arrived.'],
      correctAnswer: 'I had eaten before he arrived.',
      explanation: 'الحدث الأول (الأكل) يكون في الماضي التام.'
    },
    {
      id: 'q10',
      type: 'multiple_choice',
      question: 'ترجمة: هي لم تكن قد غادرت بعد',
      options: ['She hadn\'t left yet.', 'She hasn\'t left yet.', 'She didn\'t leave yet.'],
      correctAnswer: 'She hadn\'t left yet.',
      explanation: 'نستخدم had not + V3 للنفي في الماضي التام.'
    },
    {
      id: 'q11',
      type: 'multiple_choice',
      question: 'ترجمة: هل كنت قد أنهيت واجبك قبل العشاء؟',
      options: ['Had you finished your homework before dinner?', 'Have you finished your homework before dinner?', 'Did you finish your homework before dinner?'],
      correctAnswer: 'Had you finished your homework before dinner?',
      explanation: 'نبدأ السؤال بـ Had في الماضي التام.'
    }
  ]
};

export const futureFormsLesson: GrammarLessonData = {
  id: 'future-forms',
  title: 'أشكال المستقبل (Future Forms)',
  description: 'طرق مختلفة للتعبير عن المستقبل 🔮',
  cards: [
    {
      id: 'ff1',
      title: 'ما هو Future Forms؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">هي طرق مختلفة للتعبير عن أحداث ستحدث في المستقبل باستخدام صيغ متعددة:</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
              <span className="text-indigo-500">⚡</span> will
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
              <span className="text-indigo-500">🎯</span> going to
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
              <span className="text-indigo-500">📅</span> present continuous
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
              <span className="text-indigo-500">⏰</span> present simple
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ff2',
      title: '1. استخدام (Will) 🟢',
      icon: '🟢',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-3 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 text-center">
            <p className="text-xs font-bold text-slate-500 mb-1">القاعدة:</p>
            <p className="text-lg font-black text-indigo-600" dir="ltr">Subject + will + base verb</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-indigo-600">🔸 الاستخدام:</p>
            <ul className="list-disc list-inside text-slate-600">
              <li>قرار لحظي (Instant decision)</li>
              <li>توقع (Prediction)</li>
              <li>وعد (Promise)</li>
            </ul>
          </div>
          <div className="space-y-2 bg-white p-3 rounded-xl border border-slate-100 shadow-sm" dir="ltr">
            <p className="text-sm"><span className="font-bold text-indigo-500">• I will study now.</span> (سأدرس الآن)</p>
            <p className="text-sm"><span className="font-bold text-indigo-500">• It will rain tomorrow.</span> (ستمطر غدًا)</p>
            <p className="text-sm"><span className="font-bold text-indigo-500">• I will help you.</span> (سأساعدك)</p>
          </div>
          <div className="p-3 bg-red-50 rounded-xl border border-red-100">
            <p className="font-bold text-red-700">🔴 النفي: will not = won’t</p>
            <p className="text-sm text-red-600 italic" dir="ltr">Example: I won’t go. (لن أذهب)</p>
          </div>
        </div>
      )
    },
    {
      id: 'ff3',
      title: '2. استخدام (Going to) 🔵',
      icon: '🔵',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-3 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 text-center">
            <p className="text-xs font-bold text-slate-500 mb-1">القاعدة:</p>
            <p className="text-lg font-black text-indigo-600" dir="ltr">Subject + am/is/are + going to + base verb</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-indigo-600">🔸 الاستخدام:</p>
            <ul className="list-disc list-inside text-slate-600">
              <li>خطة مسبقة (Prior plan)</li>
              <li>توقع مع دليل (Prediction with evidence)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100" dir="ltr">
              <p className="text-sm font-bold text-blue-700">I am going to travel.</p>
              <p className="text-xs text-blue-600" dir="rtl">(أنا ذاهب للسفر - خطة)</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100" dir="ltr">
              <p className="text-sm font-bold text-blue-700">Look at the sky! It is going to rain.</p>
              <p className="text-xs text-blue-600" dir="rtl">(انظر إلى السماء! ستمطر - دليل واضح)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ff4',
      title: '3. المضارع المستمر والمستقبل 🟡',
      icon: '🟡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-3 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 text-center">
            <p className="text-xs font-bold text-slate-500 mb-1">القاعدة:</p>
            <p className="text-lg font-black text-indigo-600" dir="ltr">Subject + am/is/are + verb + ing</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-indigo-600">🔸 الاستخدام:</p>
            <p className="text-slate-600">ترتيبات مؤكدة في المستقبل (Fixed arrangements)</p>
          </div>
          <div className="space-y-2 bg-white p-3 rounded-xl border border-slate-100 shadow-sm" dir="ltr">
            <p className="text-sm"><span className="font-bold text-indigo-500">• I am meeting my friend tomorrow.</span></p>
            <p className="text-sm"><span className="font-bold text-indigo-500">• She is traveling next week.</span></p>
          </div>
        </div>
      )
    },
    {
      id: 'ff5',
      title: '4. المضارع البسيط والمستقبل 🟣',
      icon: '🟣',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-2">
            <p className="font-bold text-indigo-600">🔸 الاستخدام:</p>
            <p className="text-slate-600">الجداول والمواعيد الرسمية (Timetables / Schedules)</p>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded-xl border border-purple-100" dir="ltr">
              <p className="text-sm font-bold text-purple-700">The train leaves at 8 p.m.</p>
              <p className="text-xs text-purple-600" dir="rtl">(القطار يغادر الساعة 8 مساءً)</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-xl border border-purple-100" dir="ltr">
              <p className="text-sm font-bold text-purple-700">The exam starts tomorrow.</p>
              <p className="text-xs text-purple-600" dir="rtl">(الامتحان يبدأ غدًا)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ff6',
      title: 'الفرق المهم 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-3">
            <p className="font-bold text-indigo-600">🔸 will vs going to</p>
            <div className="grid grid-cols-2 gap-2 text-center text-sm">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-black text-indigo-600">will</p>
                <p className="text-xs">قرار لحظي / توقع عام</p>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-black text-indigo-600">going to</p>
                <p className="text-xs">خطة مسبقة / توقع بدليل</p>
              </div>
            </div>
            <div className="text-xs text-slate-500 italic space-y-1" dir="ltr">
              <p>• I will call him. (الآن قررت)</p>
              <p>• I am going to call him. (كنت مخطط)</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-bold text-indigo-600">🔸 going to vs present continuous</p>
            <div className="grid grid-cols-2 gap-2 text-center text-sm">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-black text-indigo-600">going to</p>
                <p className="text-xs">نية (Intention)</p>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <p className="font-black text-indigo-600">present continuous</p>
                <p className="text-xs">ترتيب محدد (Arrangement)</p>
              </div>
            </div>
            <div className="text-xs text-slate-500 italic space-y-1" dir="ltr">
              <p>• I am going to travel. (نية)</p>
              <p>• I am traveling tomorrow. (حجز مؤكد)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ff7',
      title: 'ملخص سريع 🎯',
      icon: '🎯',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse" dir="rtl">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 border border-indigo-500">الشكل</th>
                <th className="p-3 border border-indigo-500">الاستخدام</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-indigo-50">
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">will</td>
                <td className="p-3 border border-indigo-100">قرار / توقع</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">going to</td>
                <td className="p-3 border border-indigo-100">خطة / دليل</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">present continuous</td>
                <td className="p-3 border border-indigo-100">ترتيب</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">present simple</td>
                <td className="p-3 border border-indigo-100">جدول</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'ffq1',
      type: 'multiple_choice',
      question: 'I ______ call you later.',
      options: ['am going', 'will', 'am', 'do'],
      correctAnswer: 'will',
      explanation: 'نستخدم will للقرارات اللحظية أو الوعود.'
    },
    {
      id: 'ffq2',
      type: 'multiple_choice',
      question: 'She ______ travel next week.',
      options: ['is going to', 'will going', 'going to', 'is go'],
      correctAnswer: 'is going to',
      explanation: 'نستخدم is going to للتعبير عن الخطط المستقبلية.'
    },
    {
      id: 'ffq3',
      type: 'multiple_choice',
      question: 'Look at the sky! It ______ rain.',
      options: ['will', 'is going to', 'is', 'goes'],
      correctAnswer: 'is going to',
      explanation: 'نستخدم is going to لوجود دليل واضح (Look at the sky).'
    },
    {
      id: 'ffq4',
      type: 'multiple_choice',
      question: 'I ______ my friend tomorrow.',
      options: ['meet', 'am meeting', 'will meeting', 'meets'],
      correctAnswer: 'am meeting',
      explanation: 'نستخدم المضارع المستمر للترتيبات المؤكدة.'
    },
    {
      id: 'ffq5',
      type: 'multiple_choice',
      question: 'The train ______ at 6 p.m.',
      options: ['leaves', 'leaving', 'will leaves', 'is leave'],
      correctAnswer: 'leaves',
      explanation: 'نستخدم المضارع البسيط لمواعيد الجداول الرسمية.'
    },
    {
      id: 'ffq6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: I will going to study.',
      options: ['I am going to study.', 'I will study.', 'كلاهما صحيح حسب المعنى'],
      correctAnswer: 'كلاهما صحيح حسب المعنى',
      explanation: 'لا يجوز الجمع بين will و going to. نستخدم أحدهما فقط.'
    },
    {
      id: 'ffq7',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: She is go to travel.',
      options: ['She is going to travel.', 'She will travel.', 'She goes to travel.'],
      correctAnswer: 'She is going to travel.',
      explanation: 'القاعدة الصحيحة لـ going to هي am/is/are + going to + verb.'
    },
    {
      id: 'ffq8',
      type: 'arrange',
      question: 'سأساعدك غدًا.',
      options: ['help', 'will', 'I', 'tomorrow.', 'you'],
      correctAnswer: ['I', 'will', 'help', 'you', 'tomorrow.'],
      explanation: 'الترجمة الصحيحة: I will help you tomorrow.'
    },
    {
      id: 'ffq9',
      type: 'arrange',
      question: 'أنا ذاهب لشراء سيارة.',
      options: ['am', 'going', 'I', 'buy', 'to', 'a', 'car.'],
      correctAnswer: ['I', 'am', 'going', 'to', 'buy', 'a', 'car.'],
      explanation: 'الترجمة الصحيحة: I am going to buy a car.'
    },
    {
      id: 'ffq10',
      type: 'multiple_choice',
      question: 'اختر الجملة الصحيحة:',
      options: [
        'A) I am going to meet him yesterday.',
        'B) I am meeting him tomorrow.',
        'C) I will meeting him tomorrow.'
      ],
      correctAnswer: 'B) I am meeting him tomorrow.',
      explanation: 'الجملة B صحيحة لأنها تستخدم المضارع المستمر للمستقبل بشكل سليم.'
    }
  ]
};

export const countableUncountableLesson: GrammarLessonData = {
  id: 'countable-uncountable',
  title: 'الأسماء التي تعد ولا تعد',
  description: 'Countable & Uncountable Nouns 🍎💧',
  cards: [
    {
      id: 'cu1',
      title: 'ما هي Countable & Uncountable؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">هي تقسيم للأسماء حسب إمكانية عدّها:</p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍎</span>
                <div>
                  <p className="font-black text-emerald-700">Countable Nouns</p>
                  <p className="text-sm text-emerald-600">أسماء يمكن عدّها</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💧</span>
                <div>
                  <p className="font-black text-blue-700">Uncountable Nouns</p>
                  <p className="text-sm text-blue-600">أسماء لا يمكن عدّها مباشرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cu2',
      title: 'أولاً: Countable Nouns (المعدودة) 🟢',
      icon: '🟢',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-2">
            <p className="font-bold text-emerald-600">🔸 التعريف: أسماء يمكن عدّها بالأرقام</p>
            <div className="grid grid-cols-3 gap-2 text-center" dir="ltr">
              <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-xl">🍎</span>
                <span className="text-xs font-bold">apple</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-xl">📚</span>
                <span className="text-xs font-bold">book</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-xl">👨‍🎓</span>
                <span className="text-xs font-bold">student</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-sm font-bold text-slate-500 mb-2">📌 نقول:</p>
            <p className="text-lg font-bold text-indigo-600" dir="ltr">one apple / two apples</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-emerald-600">🔸 مفرد وجمع:</p>
            <div className="flex items-center justify-center gap-4 font-black text-slate-700" dir="ltr">
              <span>book ➔ books</span>
              <span className="text-slate-300">|</span>
              <span>car ➔ cars</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">مثال: <span dir="ltr" className="font-bold text-indigo-600">I have three books.</span></p>
          </div>
        </div>
      )
    },
    {
      id: 'cu3',
      title: 'ثانيًا: Uncountable Nouns (غير المعدودة) 🔵',
      icon: '🔵',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-2">
            <p className="font-bold text-blue-600">🔸 التعريف: أسماء لا يمكن عدّها مباشرة</p>
            <div className="grid grid-cols-4 gap-2 text-center" dir="ltr">
              <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-xl">💧</span>
                <span className="text-[10px] font-bold">water</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-xl">🍚</span>
                <span className="text-[10px] font-bold">rice</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-xl">🍬</span>
                <span className="text-[10px] font-bold">sugar</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="block text-xl">💰</span>
                <span className="text-[10px] font-bold">money</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
            <p className="text-sm font-bold text-red-500 mb-2">📌 لا نقول:</p>
            <p className="text-lg font-bold text-red-700" dir="ltr">❌ one water</p>
            <p className="text-lg font-bold text-emerald-700" dir="ltr">✔ a glass of water (كوب ماء)</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-blue-600">🔸 خصائصها:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>لا تُجمع (دائماً مفرد)</li>
              <li>لا نستخدم معها <span className="font-bold text-indigo-500">a / an</span></li>
            </ul>
            <p className="text-sm text-slate-500 mt-2">مثال: <span dir="ltr" className="font-bold text-indigo-600">I need water.</span></p>
          </div>
        </div>
      )
    },
    {
      id: 'cu4',
      title: 'كيف نعدّ الأسماء غير المعدودة؟ 🔴',
      icon: '🔴',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">نستخدم كلمات قياس (Quantifiers):</p>
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse" dir="rtl">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-3 border border-indigo-500">الكلمة</th>
                  <th className="p-3 border border-indigo-500">المثال</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-indigo-50">
                  <td className="p-3 border border-indigo-100 font-bold" dir="ltr">a piece of</td>
                  <td className="p-3 border border-indigo-100" dir="ltr">a piece of bread</td>
                </tr>
                <tr>
                  <td className="p-3 border border-indigo-100 font-bold" dir="ltr">a cup of</td>
                  <td className="p-3 border border-indigo-100" dir="ltr">a cup of tea</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="p-3 border border-indigo-100 font-bold" dir="ltr">a bottle of</td>
                  <td className="p-3 border border-indigo-100" dir="ltr">a bottle of water</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-2">مثال: <span dir="ltr" className="font-bold text-indigo-600">I drank a cup of tea.</span></p>
        </div>
      )
    },
    {
      id: 'cu5',
      title: 'الكلمات التي تُستخدم مع كل نوع 🟡',
      icon: '🟡',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h4 className="font-black text-emerald-700 mb-2">🔸 مع Countable:</h4>
            <div className="flex gap-4 font-black text-indigo-600 mb-2" dir="ltr">
              <span>many</span>
              <span>a few</span>
              <span>few</span>
            </div>
            <p className="text-sm text-slate-600 italic" dir="ltr">Example: I have many friends.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-black text-blue-700 mb-2">🔸 مع Uncountable:</h4>
            <div className="flex gap-4 font-black text-indigo-600 mb-2" dir="ltr">
              <span>much</span>
              <span>a little</span>
              <span>little</span>
            </div>
            <p className="text-sm text-slate-600 italic" dir="ltr">Example: I have little money.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
            <h4 className="font-black text-purple-700 mb-2">🔸 مع الاثنين:</h4>
            <div className="flex gap-4 font-black text-indigo-600 mb-2" dir="ltr">
              <span>some</span>
              <span>any</span>
              <span>a lot of</span>
            </div>
            <div className="text-sm text-slate-600 italic space-y-1" dir="ltr">
              <p>• I have some water.</p>
              <p>• I have some apples.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cu6',
      title: 'الفرق المهم 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <h4 className="font-black text-indigo-700 mb-3 text-center">few vs little</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-1">
                <p className="font-black text-indigo-600 text-2xl" dir="ltr">few</p>
                <p className="text-sm text-slate-500">معدود</p>
              </div>
              <div className="space-y-1">
                <p className="font-black text-indigo-600 text-2xl" dir="ltr">little</p>
                <p className="text-sm text-slate-500">غير معدود</p>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-slate-600" dir="ltr">
            <p className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
              <span className="font-bold text-indigo-500">📌 Example:</span> Few students came.
            </p>
            <p className="bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
              <span className="font-bold text-indigo-500">📌 Example:</span> Little water is left.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cu7',
      title: 'ملخص سريع 🎯',
      icon: '🎯',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse" dir="rtl">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 border border-indigo-500">النوع</th>
                <th className="p-3 border border-indigo-500">مثال</th>
                <th className="p-3 border border-indigo-500">يُستخدم معه</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-emerald-50">
                <td className="p-3 border border-emerald-100 font-bold">Countable</td>
                <td className="p-3 border border-emerald-100" dir="ltr">books</td>
                <td className="p-3 border border-emerald-100" dir="ltr">many, few</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3 border border-blue-100 font-bold">Uncountable</td>
                <td className="p-3 border border-blue-100" dir="ltr">water</td>
                <td className="p-3 border border-blue-100" dir="ltr">much, little</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'cuq1',
      type: 'multiple_choice',
      question: 'I have ______ apples.',
      options: ['much', 'many', 'little', 'any'],
      correctAnswer: 'many',
      explanation: 'نستخدم many مع الأسماء المعدودة (apples).'
    },
    {
      id: 'cuq2',
      type: 'multiple_choice',
      question: 'There isn’t ______ water.',
      options: ['many', 'few', 'much', 'a few'],
      correctAnswer: 'much',
      explanation: 'نستخدم much مع الأسماء غير المعدودة (water) في النفي.'
    },
    {
      id: 'cuq3',
      type: 'multiple_choice',
      question: 'She has ______ money.',
      options: ['many', 'much', 'few', 'a few'],
      correctAnswer: 'much',
      explanation: 'نستخدم much مع الأسماء غير المعدودة (money).'
    },
    {
      id: 'cuq4',
      type: 'multiple_choice',
      question: 'I need ______ information.',
      options: ['many', 'a few', 'much', 'few'],
      correctAnswer: 'much',
      explanation: 'كلمة information لا تعد، لذا نستخدم much.'
    },
    {
      id: 'cuq5',
      type: 'multiple_choice',
      question: 'There are ______ students in the class.',
      options: ['much', 'little', 'many', 'a little'],
      correctAnswer: 'many',
      explanation: 'نستخدم many مع الأسماء المعدودة (students).'
    },
    {
      id: 'cuq6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: I have many water.',
      options: ['I have much water.', 'I have few water.', 'I have many waters.'],
      correctAnswer: 'I have much water.',
      explanation: 'water لا يعد، لذا نستخدم much وليس many.'
    },
    {
      id: 'cuq7',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: She bought a bread.',
      options: ['She bought some bread.', 'She bought a piece of bread.', 'كلاهما صحيح'],
      correctAnswer: 'كلاهما صحيح',
      explanation: 'bread لا يعد، لذا لا نستخدم a. نستخدم some أو a piece of.'
    },
    {
      id: 'cuq8',
      type: 'arrange',
      question: 'لدي بعض المال.',
      options: ['have', 'I', 'money.', 'some'],
      correctAnswer: ['I', 'have', 'some', 'money.'],
      explanation: 'الترجمة الصحيحة: I have some money.'
    },
    {
      id: 'cuq9',
      type: 'arrange',
      question: 'يوجد الكثير من الطلاب.',
      options: ['are', 'many', 'There', 'students.'],
      correctAnswer: ['There', 'are', 'many', 'students.'],
      explanation: 'الترجمة الصحيحة: There are many students.'
    },
    {
      id: 'cuq10',
      type: 'multiple_choice',
      question: 'اختر الجملة الصحيحة:',
      options: [
        'A) I have a little apples.',
        'B) I have a few apples.',
        'C) I have few water.'
      ],
      correctAnswer: 'B) I have a few apples.',
      explanation: 'الجملة B صحيحة لأن apples معدود ونستخدم معه a few.'
    }
  ]
};

export const conditionalsLesson: GrammarLessonData = {
  id: 'conditionals',
  title: 'حالات (If) الشرطية',
  description: 'Conditional Sentences 🔀',
  cards: [
    {
      id: 'intro',
      title: 'أنواع الجمل الشرطية 🧩',
      icon: '🧩',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <p className="text-xl font-bold text-indigo-600">يوجد 4 أنواع رئيسية للجمل الشرطية في الإنجليزية:</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
              <span className="block text-2xl mb-1">🟢</span>
              <span className="font-bold text-emerald-700">النوع صفر</span>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-center">
              <span className="block text-2xl mb-1">🔵</span>
              <span className="font-bold text-blue-700">النوع الأول</span>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-center">
              <span className="block text-2xl mb-1">🟡</span>
              <span className="font-bold text-amber-700">النوع الثاني</span>
            </div>
            <div className="p-3 bg-red-50 rounded-xl border border-red-100 text-center">
              <span className="block text-2xl mb-1">🔴</span>
              <span className="font-bold text-red-700">النوع الثالث</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zero',
      title: '🟢 النوع صفر (Zero Conditional)',
      icon: '🟢',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div>
            <h4 className="font-black text-emerald-700 mb-2 flex items-center gap-2">
              <span>🔸</span> الاستخدام:
            </h4>
            <p className="text-slate-700 bg-emerald-50/50 p-3 rounded-lg border-r-4 border-emerald-400">
              يستخدم للحقائق العامة أو الأشياء الثابتة (قوانين علمية، عادات)
            </p>
          </div>

          <div>
            <h4 className="font-black text-emerald-700 mb-2 flex items-center gap-2">
              <span>🔸</span> القاعدة:
            </h4>
            <div dir="ltr" className="text-center p-4 bg-slate-900 rounded-2xl shadow-inner whitespace-nowrap overflow-x-auto custom-scrollbar">
              <span className="text-emerald-400 font-mono text-xl">If + Present Simple → Present Simple</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-emerald-700 mb-2 flex items-center gap-2">
              <span>🔸</span> أمثلة:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white border-2 border-emerald-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800 whitespace-nowrap overflow-x-auto custom-scrollbar">If you heat water, it boils.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">إذا سخّنت الماء، فإنه يغلي.</p>
              </div>
              <div className="p-3 bg-white border-2 border-emerald-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800 whitespace-nowrap overflow-x-auto custom-scrollbar">If you don’t eat, you feel weak.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">إذا لم تأكل، تشعر بالضعف.</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border-r-4 border-amber-400 rounded-r-lg">
            <p className="text-sm font-bold text-amber-800">📌 ملاحظة:</p>
            <p className="text-sm text-amber-700">هذا النوع دائمًا حقيقة ثابتة وليس احتمال.</p>
          </div>
        </div>
      )
    },
    {
      id: 'first',
      title: '🔵 النوع الأول (First Conditional)',
      icon: '🔵',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div>
            <h4 className="font-black text-blue-700 mb-2 flex items-center gap-2">
              <span>🔸</span> الاستخدام:
            </h4>
            <p className="text-slate-700 bg-blue-50/50 p-3 rounded-lg border-r-4 border-blue-400">
              يستخدم للأشياء الممكن حدوثها في المستقبل
            </p>
          </div>

          <div>
            <h4 className="font-black text-blue-700 mb-2 flex items-center gap-2">
              <span>🔸</span> القاعدة:
            </h4>
            <div dir="ltr" className="text-center p-4 bg-slate-900 rounded-2xl shadow-inner whitespace-nowrap overflow-x-auto custom-scrollbar">
              <span className="text-blue-400 font-mono text-xl">If + Present Simple → will + base verb</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-blue-700 mb-2 flex items-center gap-2">
              <span>🔸</span> أمثلة:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white border-2 border-blue-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800 whitespace-nowrap overflow-x-auto custom-scrollbar">If you study hard, you will pass the exam.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">إذا درست بجد، ستنجح في الامتحان.</p>
              </div>
              <div className="p-3 bg-white border-2 border-blue-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800 whitespace-nowrap overflow-x-auto custom-scrollbar">If it rains, we will stay at home.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">إذا أمطرت، سنبقى في المنزل.</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border-r-4 border-amber-400 rounded-r-lg">
            <p className="text-sm font-bold text-amber-800">📌 ملاحظة:</p>
            <p className="text-sm text-amber-700">الجملة تعبر عن احتمال حقيقي في المستقبل</p>
          </div>
        </div>
      )
    },
    {
      id: 'second',
      title: '🟡 النوع الثاني (Second Conditional)',
      icon: '🟡',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div>
            <h4 className="font-black text-amber-700 mb-2 flex items-center gap-2">
              <span>🔸</span> الاستخدام:
            </h4>
            <p className="text-slate-700 bg-amber-50/50 p-3 rounded-lg border-r-4 border-amber-400">
              يستخدم للأشياء غير الواقعية أو الخيالية في الحاضر
            </p>
          </div>

          <div>
            <h4 className="font-black text-amber-700 mb-2 flex items-center gap-2">
              <span>🔸</span> القاعدة:
            </h4>
            <div dir="ltr" className="text-center p-4 bg-slate-900 rounded-2xl shadow-inner whitespace-nowrap overflow-x-auto custom-scrollbar">
              <span className="text-amber-400 font-mono text-xl">If + Past Simple → would + base verb</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-amber-700 mb-2 flex items-center gap-2">
              <span>🔸</span> أمثلة:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white border-2 border-amber-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800 whitespace-nowrap overflow-x-auto custom-scrollbar">If I were rich, I would buy a big house.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">لو كنت غنياً، لاشتريت بيتًا كبيرًا.</p>
              </div>
              <div className="p-3 bg-white border-2 border-amber-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800 whitespace-nowrap overflow-x-auto custom-scrollbar">If he studied, he would pass.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">لو درس، لنجح.</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border-r-4 border-amber-400 rounded-r-lg space-y-1">
            <p className="text-sm font-bold text-amber-800">📌 ملاحظات مهمة:</p>
            <ul className="text-sm text-amber-700 list-disc list-inside">
              <li>نستخدم were مع جميع الضمائر (I, he, she...)</li>
              <li>هذا النوع خيالي أو غير حقيقي</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'third',
      title: '🔴 النوع الثالث (Third Conditional)',
      icon: '🔴',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div>
            <h4 className="font-black text-red-700 mb-2 flex items-center gap-2">
              <span>🔸</span> الاستخدام:
            </h4>
            <p className="text-slate-700 bg-red-50/50 p-3 rounded-lg border-r-4 border-red-400">
              يستخدم للندم أو الحديث عن شيء لم يحدث في الماضي
            </p>
          </div>

          <div>
            <h4 className="font-black text-red-700 mb-2 flex items-center gap-2">
              <span>🔸</span> القاعدة:
            </h4>
            <div dir="ltr" className="text-center p-4 bg-slate-900 rounded-2xl shadow-inner whitespace-nowrap overflow-x-auto custom-scrollbar">
              <span className="text-red-400 font-mono text-xl">If + Past Perfect → would have + P.P</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-red-700 mb-2 flex items-center gap-2">
              <span>🔸</span> أمثلة:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white border-2 border-red-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800 whitespace-nowrap overflow-x-auto custom-scrollbar">If I had studied, I would have passed.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">لو كنت درست، لكنت نجحت.</p>
              </div>
              <div className="p-3 bg-white border-2 border-red-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800 whitespace-nowrap overflow-x-auto custom-scrollbar">If they had left earlier, they would have caught the bus.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">لو غادروا مبكرًا، لكانوا لحقوا الحافلة.</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border-r-4 border-amber-400 rounded-r-lg">
            <p className="text-sm font-bold text-amber-800">📌 ملاحظة:</p>
            <p className="text-sm text-amber-700">هذا النوع يتحدث عن الماضي المستحيل تغييره</p>
          </div>
        </div>
      )
    },
    {
      id: 'notes',
      title: '🔹 ملاحظات مهمة جداً 💡',
      icon: '💡',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="bg-indigo-50 p-4 rounded-2xl border-2 border-indigo-100">
            <h4 className="font-black text-indigo-800 mb-2">1. يمكن تبديل ترتيب الجملة:</h4>
            <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="font-mono text-indigo-600">If you study, you will succeed.</p>
              <p className="font-mono text-indigo-600">You will succeed if you study.</p>
            </div>
            <div className="mt-3 p-2 bg-white rounded-lg text-sm border border-indigo-100">
              <p>📌 <strong>لكن:</strong></p>
              <p>• إذا بدأت بـ <span className="font-bold">If</span> نضع فاصلة <span className="font-bold text-red-500">(,)</span></p>
              <p>• إذا بدأت بالجملة الرئيسية لا نضع فاصلة</p>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-2xl border-2 border-red-100">
            <h4 className="font-black text-red-800 mb-2">2. لا نستخدم "will" بعد if ❌</h4>
            <div className="space-y-1 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="text-red-500 line-through">❌ If you will study, you will pass.</p>
              <p className="text-emerald-600 font-bold">✔ If you study, you will pass.</p>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-2xl border-2 border-emerald-100">
            <h4 className="font-black text-emerald-800 mb-2">3. كلمات بديلة لـ if:</h4>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-emerald-100">
                <span className="font-bold text-emerald-700">unless</span>
                <span className="text-slate-400">=</span>
                <span>إذا لم</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-emerald-100">
                <span className="font-bold text-emerald-700">when</span>
                <span className="text-slate-400">=</span>
                <span>عندما</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-emerald-100">
                <span className="font-bold text-emerald-700">as long as</span>
                <span className="text-slate-400">=</span>
                <span>طالما</span>
              </div>
            </div>
            <div className="mt-3 p-2 bg-white rounded-lg text-sm border border-emerald-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="font-bold text-slate-800">📌 Example:</p>
              <p className="text-indigo-600">Unless you study, you will fail.</p>
              <p className="text-slate-500 text-right" dir="rtl">(إذا لم تدرس، سترسب)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'memory',
      title: '🔹 طريقة سهلة للحفظ 🎯',
      icon: '🎯',
      content: (
        <div className="p-6 bg-slate-900 rounded-3xl text-white text-center space-y-6 shadow-xl">
          <h4 className="text-2xl font-black mb-4">اختصار القواعد 🚀</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="text-3xl font-black text-emerald-400">0</span>
              <span className="text-xl font-bold">حقيقة</span>
            </div>
            <div className="flex items-center justify-between bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="text-3xl font-black text-blue-400">1</span>
              <span className="text-xl font-bold">ممكن يصير</span>
            </div>
            <div className="flex items-center justify-between bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="text-3xl font-black text-amber-400">2</span>
              <span className="text-xl font-bold">خيال</span>
            </div>
            <div className="flex items-center justify-between bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="text-3xl font-black text-red-400">3</span>
              <span className="text-xl font-bold">ندم</span>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'If I ______ more time, I would learn English better.',
      options: ['have', 'had', 'will have', 'have had'],
      correctAnswer: 'had',
      explanation: 'الحالة الثانية (خيال): If + Past Simple → would + base verb.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'If she studies hard, she ______ the exam.',
      options: ['passes', 'passed', 'will pass', 'would pass'],
      correctAnswer: 'will pass',
      explanation: 'الحالة الأولى (ممكن): If + Present Simple → will + base verb.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'If they had left earlier, they ______ the train.',
      options: ['catch', 'will catch', 'would catch', 'would have caught'],
      correctAnswer: 'would have caught',
      explanation: 'الحالة الثالثة (ندم): If + Past Perfect → would have + P.P.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'If water ______ to 100°C, it boils.',
      options: ['heats', 'heated', 'is heated', 'will heat'],
      correctAnswer: 'is heated',
      explanation: 'الحالة الصفرية (حقيقة): الماء يُسخَّن (مبني للمجهول) فيغلي.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'If I were you, I ______ that job.',
      options: ['take', 'will take', 'would take', 'took'],
      correctAnswer: 'would take',
      explanation: 'الحالة الثانية (نصيحة): نستخدم If I were you + would + مصدر.'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: If he will study, he will succeed.',
      options: [
        'If he studies, he will succeed.',
        'If he studied, he will succeed.',
        'If he will study, he succeeds.'
      ],
      correctAnswer: 'If he studies, he will succeed.',
      explanation: 'لا نستخدم will بعد if مباشرة في الحالة الأولى.'
    },
    {
      id: 'q7',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: If I was rich, I would travel the world.',
      options: [
        'If I were rich, I would travel the world.',
        'If I am rich, I would travel the world.',
        'If I had been rich, I would travel the world.'
      ],
      correctAnswer: 'If I were rich, I would travel the world.',
      explanation: 'في الحالة الثانية (التخيل)، نستخدم were مع جميع الضمائر.'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'ترجم: لو كنت درست، لنجحت.',
      options: ['studied', 'would', 'If', 'passed', 'had', 'have', 'I', 'I'],
      correctAnswer: ['If', 'I', 'had', 'studied', 'I', 'would', 'have', 'passed'],
      explanation: 'هذا ندم على الماضي (الحالة الثالثة): If + Past Perfect -> would have + P.P.'
    },
    {
      id: 'q9',
      type: 'arrange',
      question: 'ترجم: إذا لم تذاكر، سترسب.',
      options: ['you', 'Unless', 'fail', 'will', 'study', 'you'],
      correctAnswer: ['Unless', 'you', 'study', 'you', 'will', 'fail'],
      explanation: 'استخدام Unless (إذا لم) مع الحالة الأولى.'
    },
    {
      id: 'q10',
      type: 'arrange',
      question: 'ترجم: إذا أمطرت، سأبقى في البيت.',
      options: ['If', 'it', 'rains,', 'I', 'will', 'stay', 'at', 'home.'],
      correctAnswer: ['If', 'it', 'rains,', 'I', 'will', 'stay', 'at', 'home.'],
      explanation: 'الحالة الأولى (واقعية): If + Present Simple -> will + مصدر.'
    },
    {
      id: 'q11',
      type: 'arrange',
      question: 'ترجم: لو كنت مكانك، لذهبت إلى الطبيب.',
      options: ['If', 'I', 'were', 'you,', 'I', 'would', 'go', 'to', 'the', 'doctor.'],
      correctAnswer: ['If', 'I', 'were', 'you,', 'I', 'would', 'go', 'to', 'the', 'doctor.'],
      explanation: 'الحالة الثانية (نصيحة): If I were you + would + مصدر.'
    }
  ]
};

export const passiveVoiceLesson: GrammarLessonData = {
  id: 'passive-voice',
  title: 'المبني للمجهول (Passive Voice)',
  description: 'التركيز على المفعول به بدلاً من الفاعل 🎭',
  cards: [
    {
      id: 'c1',
      title: 'فكرة سريعة قبل ما نبدأ 🌟',
      icon: '🌟',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <p className="font-bold text-blue-800 mb-2">المعلوم (Active): الفاعل هو الذي يقوم بالفعل</p>
            <p className="text-left font-mono text-blue-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">👉 Ali wrote the lesson</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <p className="font-bold text-indigo-800 mb-2">المجهول (Passive): نهتم بالشيء الذي وقع عليه الفعل</p>
            <p className="text-left font-mono text-indigo-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">👉 The lesson was written (by Ali)</p>
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: '1. المضارع البسيط (Present Simple) 🟢',
      icon: '🟢',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-slate-800">🔹 المعلوم:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">verb (s/es)</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Ali eats the food</p>
            <p className="text-sm text-slate-500 mt-1">👉 علي يأكل الطعام</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-emerald-800">🔹 المجهول:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-emerald-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">am / is / are</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-emerald-600 font-bold whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">The food is eaten (by Ali)</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-sm flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2">
            <span>💡 <strong>الشرح:</strong></span>
            <span>إذا الفاعل مفرد يأخذ</span>
            <span dir="ltr" className="font-bold text-indigo-600 whitespace-nowrap">is</span>
            <span>، وإذا كان جمع يأخذ</span>
            <span dir="ltr" className="font-bold text-indigo-600 whitespace-nowrap">are</span>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li className="whitespace-nowrap overflow-x-auto custom-scrollbar">She cleans the room → <strong>The room is cleaned</strong></li>
              <li className="whitespace-nowrap overflow-x-auto custom-scrollbar">They play football → <strong>Football is played</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: '2. الماضي البسيط (Past Simple) 🔵',
      icon: '🔵',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-slate-800">🔹 المعلوم:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span>فعل ماضي</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Ali wrote the lesson</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-blue-800">🔹 المجهول:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-blue-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">was / were</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-blue-600 font-bold whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">The lesson was written</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-sm flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2">
            <span>💡 <strong>الشرح:</strong></span>
            <span>إذا الفاعل مفرد يأخذ</span>
            <span dir="ltr" className="font-bold text-indigo-600 whitespace-nowrap">was</span>
            <span>، وإذا كان جمع يأخذ</span>
            <span dir="ltr" className="font-bold text-indigo-600 whitespace-nowrap">were</span>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li className="whitespace-nowrap overflow-x-auto custom-scrollbar">He repaired the car → <strong>The car was repaired</strong></li>
              <li className="whitespace-nowrap overflow-x-auto custom-scrollbar">They built a house → <strong>A house was built</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: '3. المضارع المستمر (Present Continuous) 🟡',
      icon: '🟡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-slate-800">🔹 المعلوم:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">am / is / are</span>
              <span>+</span>
              <span dir="ltr">V-ing</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">She is cooking food</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-yellow-800">🔹 المجهول:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-yellow-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">am / is / are</span>
              <span>+</span>
              <span dir="ltr">being</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-yellow-700 font-bold whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Food is being cooked</p>
          </div>
          <p className="bg-orange-50 p-3 rounded-lg text-sm">💡 <strong>الشرح:</strong> كلمة <strong>being</strong> مهمة جدًا هنا</p>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li className="whitespace-nowrap overflow-x-auto custom-scrollbar">They are building a school → <strong>A school is being built</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: '4. الماضي المستمر (Past Continuous) 🟠',
      icon: '🟠',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-slate-800">🔹 المعلوم:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">was / were</span>
              <span>+</span>
              <span dir="ltr">V-ing</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">He was writing a letter</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-orange-800">🔹 المجهول:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-orange-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">was / were</span>
              <span>+</span>
              <span dir="ltr">being</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-orange-700 font-bold whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">A letter was being written</p>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li className="whitespace-nowrap overflow-x-auto custom-scrollbar">They were cleaning the room → <strong>The room was being cleaned</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: '5. المستقبل (Future Simple) 🔴',
      icon: '🔴',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-slate-800">🔹 المعلوم:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">will</span>
              <span>+</span>
              <span>الفعل</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">She will cook the food</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-red-800">🔹 المجهول:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-red-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">will be</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-red-600 font-bold whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">The food will be cooked</p>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li className="whitespace-nowrap overflow-x-auto custom-scrollbar">They will build a school → <strong>A school will be built</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: '6. المضارع التام (Present Perfect) 🟣',
      icon: '🟣',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-slate-800">🔹 المعلوم:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">have / has</span>
              <span>+</span>
              <span dir="ltr">V3</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Ali has written the lesson</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-purple-800">🔹 المجهول:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-purple-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">have / has been</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-purple-600 font-bold whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">The lesson has been written</p>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li className="whitespace-nowrap overflow-x-auto custom-scrollbar">They have finished the work → <strong>The work has been finished</strong></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'c8',
      title: '7. الماضي التام (Past Perfect) ⚫',
      icon: '⚫',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-slate-50 p-4 rounded-xl">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-slate-800">🔹 المعلوم:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">had</span>
              <span>+</span>
              <span dir="ltr">V3</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">He had cleaned the room</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl border border-gray-300">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-gray-800">🔹 المجهول:</div>
              <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar items-center gap-2 text-gray-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">had been</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-gray-700 font-bold whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">The room had been cleaned</p>
          </div>
        </div>
      )
    },
    {
      id: 'c9',
      title: 'أهم قاعدة وملاحظات 🧠⚠️🔥',
      icon: '🧠',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-indigo-600 text-white p-4 rounded-xl text-center shadow-lg">
            <p className="font-black mb-2">👉 المجهول =</p>
            <p className="text-xl whitespace-nowrap overflow-x-auto custom-scrollbar">المفعول + فعل to be + التصريف الثالث (V3)</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-4">
            <p className="font-bold text-red-800 mb-2">⚠️ ملاحظات مهمة جدًا:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li><strong>لازم يكون في مفعول</strong> (❌ He sleeps → لا تتحول)</li>
              <li><strong>التصريف الثالث مهم:</strong> write → written, eat → eaten, build → built</li>
              <li><strong>(by) اختياري:</strong> The lesson was written by Ali (ممكن نحذفها)</li>
            </ol>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mt-4">
            <p className="font-bold text-amber-800 mb-2">🔥 طريقة سهلة تحفظ بها:</p>
            <ul className="space-y-2 text-sm font-bold">
              <li><span className="text-indigo-600">is / are</span> → مضارع</li>
              <li><span className="text-indigo-600">was / were</span> → ماضي</li>
              <li><span className="text-indigo-600">being</span> → مستمر</li>
              <li><span className="text-indigo-600">been</span> → تام</li>
              <li><span className="text-indigo-600">will be</span> → مستقبل</li>
            </ul>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'The Pyramids _____ by the ancient Egyptians.',
      options: ['build', 'built', 'were built', 'are building'],
      correctAnswer: 'were built',
      explanation: 'مبني للمجهول في الماضي البسيط (were + P.P).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'English _____ all over the world.',
      options: ['speaks', 'is speaking', 'is spoken', 'was spoken'],
      correctAnswer: 'is spoken',
      explanation: 'مبني للمجهول في المضارع البسيط (is + P.P) لأنها حقيقة مستمرة.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'The new hospital _____ next year.',
      options: ['will build', 'will be built', 'is built', 'built'],
      correctAnswer: 'will be built',
      explanation: 'مبني للمجهول في المستقبل (will be + P.P).'
    },
    {
      id: 'q4',
      type: 'true_false',
      question: 'The window was broke by the boy.',
      correctAnswer: false,
      explanation: 'خطأ ❌. التصريف الثالث من break هو broken وليس broke (was broken).'
    },
    {
      id: 'q5',
      type: 'arrange',
      question: 'was / The / yesterday / letter / written',
      correctAnswer: ['The', 'letter', 'was', 'written', 'yesterday'],
      explanation: 'المفعول به (The letter) + was + التصريف الثالث (written) + ظرف الزمان (yesterday).'
    }
  ]
};

export const modalsLesson: GrammarLessonData = {
  id: 'modals',
  title: 'الأفعال الناقصة (Modal Verbs)',
  description: 'الضرورة، المنع، والاستنتاج 🚦',
  cards: [
    {
      id: 'm1',
      title: 'ما هي Modal Verbs؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">هي أفعال مساعدة تُستخدم للتعبير عن:</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
              <span className="text-indigo-500">💪</span> القدرة
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
              <span className="text-indigo-500">🎲</span> الاحتمال
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
              <span className="text-indigo-500">🔑</span> الإذن
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
              <span className="text-indigo-500">💡</span> النصيحة
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2 col-span-2">
              <span className="text-indigo-500">⚖️</span> الالتزام
            </div>
          </div>
          <div className="mt-4 p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-sm font-bold text-slate-500 mb-2">📌 مثل:</p>
            <p className="text-xl font-black text-indigo-600 tracking-wide" dir="ltr">
              can, could, may, might, must, should, will, would
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'm2',
      title: 'خصائص Modal Verbs 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-3">
            <p className="font-bold text-indigo-600">1️⃣ يأتي بعدها الفعل في المصدر (base verb):</p>
            <div className="flex flex-col gap-2" dir="ltr">
              <div className="bg-emerald-50 text-emerald-700 p-2 rounded-lg border border-emerald-100">✔ He can swim</div>
              <div className="bg-red-50 text-red-700 p-2 rounded-lg border border-red-100">❌ He can swims</div>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-bold text-indigo-600">2️⃣ لا تأخذ (s) مع he/she/it:</p>
            <div className="flex flex-col gap-2" dir="ltr">
              <div className="bg-emerald-50 text-emerald-700 p-2 rounded-lg border border-emerald-100">✔ She can swim</div>
              <div className="bg-red-50 text-red-700 p-2 rounded-lg border border-red-100">❌ She cans swim</div>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-bold text-indigo-600">3️⃣ لا نستخدم معها (to):</p>
            <div className="flex flex-col gap-2" dir="ltr">
              <div className="bg-red-50 text-red-700 p-2 rounded-lg border border-red-100">❌ He must to go</div>
              <div className="bg-emerald-50 text-emerald-700 p-2 rounded-lg border border-emerald-100">✔ He must go</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'm3',
      title: 'أهم الأفعال واستخداماتها 🟢',
      icon: '🟢',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h4 className="font-black text-emerald-700 mb-2">1. (Can / Could)</h4>
            <p className="text-sm mb-2">🔸 الاستخدام: القدرة (ability) / الطلب (request)</p>
            <div className="space-y-1 text-slate-600" dir="ltr">
              <p>• I can swim. (أستطيع السباحة)</p>
              <p>• Could you help me? (هل يمكنك مساعدتي؟ - أكثر أدبًا)</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
            <h4 className="font-black text-blue-700 mb-2">2. (May / Might)</h4>
            <p className="text-sm mb-2">🔸 الاستخدام: الاحتمال</p>
            <div className="space-y-1 text-slate-600" dir="ltr">
              <p>• It may rain today. (قد تمطر اليوم)</p>
              <p>• He might come late. (ربما يأتي متأخرًا)</p>
            </div>
            <p className="text-xs mt-2 text-blue-600">📌 (might أضعف احتمالًا)</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
            <h4 className="font-black text-yellow-700 mb-2">3. (Must)</h4>
            <p className="text-sm mb-2">🔸 الاستخدام: الالتزام / الضرورة</p>
            <div className="space-y-1 text-slate-600" dir="ltr">
              <p>• You must study. (يجب أن تذاكر)</p>
            </div>
            <div className="mt-2 p-2 bg-red-50 rounded-lg text-red-700">
              <p className="font-bold">🔴 النفي: mustn’t = ممنوع</p>
              <p dir="ltr">• You mustn’t smoke. (ممنوع التدخين)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'm4',
      title: 'بقية الأفعال الناقصة 🟣',
      icon: '🟣',
      content: (
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
            <h4 className="font-black text-purple-700 mb-2">4. (Have to)</h4>
            <p className="text-sm mb-2">🔸 الاستخدام: ضرورة (مثل must لكن بسبب خارجي)</p>
            <div className="space-y-1 text-slate-600" dir="ltr">
              <p>• I have to wake up early. (يجب أن أستيقظ مبكرًا)</p>
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
            <h4 className="font-black text-orange-700 mb-2">5. (Should)</h4>
            <p className="text-sm mb-2">🔸 الاستخدام: النصيحة</p>
            <div className="space-y-1 text-slate-600" dir="ltr">
              <p>• You should study. (يجب أن تذاكر)</p>
            </div>
          </div>
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100">
            <h4 className="font-black text-sky-700 mb-2">6. (Will / Would)</h4>
            <p className="text-sm mb-2">🔸 الاستخدام: المستقبل / الطلب</p>
            <div className="space-y-1 text-slate-600" dir="ltr">
              <p>• I will go tomorrow. (سأذهب غدًا)</p>
              <p>• Would you like tea? (هل ترغب في شاي؟)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'm5',
      title: 'الفرق المهم 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-2">
            <p className="font-bold text-indigo-600">🔸 must vs have to</p>
            <ul className="list-disc list-inside text-slate-600">
              <li><span className="font-bold text-indigo-500">must</span> → من المتكلم (إلزام داخلي)</li>
              <li><span className="font-bold text-indigo-500">have to</span> → من الظروف (إلزام خارجي)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-indigo-600">🔸 can vs could</p>
            <ul className="list-disc list-inside text-slate-600">
              <li><span className="font-bold text-indigo-500">can</span> → عادي</li>
              <li><span className="font-bold text-indigo-500">could</span> → أكثر أدبًا</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'm6',
      title: 'ملخص سريع 🎯',
      icon: '🎯',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse" dir="rtl">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 border border-indigo-500">الفعل</th>
                <th className="p-3 border border-indigo-500">الاستخدام</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-indigo-50">
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">can</td>
                <td className="p-3 border border-indigo-100">قدرة</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">could</td>
                <td className="p-3 border border-indigo-100">طلب مؤدب</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">may/might</td>
                <td className="p-3 border border-indigo-100">احتمال</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">must</td>
                <td className="p-3 border border-indigo-100">إلزام</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">have to</td>
                <td className="p-3 border border-indigo-100">ضرورة</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">should</td>
                <td className="p-3 border border-indigo-100">نصيحة</td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">will</td>
                <td className="p-3 border border-indigo-100">مستقبل</td>
              </tr>
              <tr>
                <td className="p-3 border border-indigo-100 font-bold" dir="ltr">would</td>
                <td className="p-3 border border-indigo-100">عرض / طلب</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'mq1',
      type: 'multiple_choice',
      question: 'I ______ swim very well.',
      options: ['must', 'can', 'should', 'may'],
      correctAnswer: 'can',
      explanation: 'نستخدم can للتعبير عن القدرة (ability).'
    },
    {
      id: 'mq2',
      type: 'multiple_choice',
      question: 'You ______ study hard to pass.',
      options: ['might', 'should', 'can', 'may'],
      correctAnswer: 'should',
      explanation: 'نستخدم should لتقديم النصيحة (advice).'
    },
    {
      id: 'mq3',
      type: 'multiple_choice',
      question: 'It ______ rain tomorrow.',
      options: ['must', 'can', 'might', 'should'],
      correctAnswer: 'might',
      explanation: 'نستخدم might للتعبير عن الاحتمال الضعيف.'
    },
    {
      id: 'mq4',
      type: 'multiple_choice',
      question: 'You ______ smoke here.',
      options: ['must', 'mustn’t', 'should', 'can'],
      correctAnswer: 'mustn’t',
      explanation: 'نستخدم mustn’t للتعبير عن المنع والتحريم.'
    },
    {
      id: 'mq5',
      type: 'multiple_choice',
      question: 'I ______ wake up early every day.',
      options: ['have to', 'might', 'could', 'may'],
      correctAnswer: 'have to',
      explanation: 'نستخدم have to للتعبير عن الضرورة الخارجية.'
    },
    {
      id: 'mq6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: He can to swim.',
      options: ['He can swim.', 'He can swims.', 'He cans swim.'],
      correctAnswer: 'He can swim.',
      explanation: 'الأفعال الناقصة لا يأتي بعدها to.'
    },
    {
      id: 'mq7',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: She must goes to school.',
      options: ['She must go to school.', 'She must to go to school.', 'She must going to school.'],
      correctAnswer: 'She must go to school.',
      explanation: 'الأفعال الناقصة يأتي بعدها المصدر بدون إضافات.'
    },
    {
      id: 'mq8',
      type: 'arrange',
      question: 'يجب أن تدرس بجد.',
      options: ['study', 'must', 'You', 'hard.'],
      correctAnswer: ['You', 'must', 'study', 'hard.'],
      explanation: 'الترجمة الصحيحة: You must study hard.'
    },
    {
      id: 'mq9',
      type: 'arrange',
      question: 'ربما يأتي غدًا.',
      options: ['come', 'He', 'might', 'tomorrow.'],
      correctAnswer: ['He', 'might', 'come', 'tomorrow.'],
      explanation: 'الترجمة الصحيحة: He might come tomorrow.'
    },
    {
      id: 'mq10',
      type: 'multiple_choice',
      question: 'اختر الجملة الصحيحة:',
      options: [
        'A) He must to go now.',
        'B) He must go now.',
        'C) He must going now.'
      ],
      correctAnswer: 'B) He must go now.',
      explanation: 'الجملة B هي الصحيحة لأن must يتبعها المصدر مباشرة.'
    }
  ]
};

export const relativeClausesLesson: GrammarLessonData = {
  id: 'relative-clauses',
  title: 'ضمائر الوصل (Relative Clauses)',
  description: 'ربط الجمل بمعلومات إضافية 🔗',
  cards: [
    {
      id: 'rc1',
      title: '🔹 أولاً: ما هي Relative Clauses؟',
      icon: '🔗',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>هي جمل نستخدمها لإعطاء معلومات إضافية عن شخص أو شيء، وتبدأ بـ ضمائر الوصل مثل:</p>
          <div className="flex flex-wrap justify-center gap-3 my-4 font-bold text-indigo-600">
            <span className="bg-indigo-100 p-2 rounded-lg">who</span>
            <span className="bg-indigo-100 p-2 rounded-lg">which</span>
            <span className="bg-indigo-100 p-2 rounded-lg">that</span>
            <span className="bg-indigo-100 p-2 rounded-lg">where</span>
            <span className="bg-indigo-100 p-2 rounded-lg">whose</span>
          </div>
          <p className="font-bold text-indigo-600">📌 مثال:</p>
          <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            The boy <CText text="who" type="particle" /> is playing is my brother.
          </div>
          <p className="text-slate-500 text-sm" dir="rtl">الولد الذي يلعب هو أخي</p>
        </div>
      )
    },
    {
      id: 'rc2',
      title: '🔹 ثانيًا: أهم ضمائر الوصل',
      icon: '⭐',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="font-bold text-emerald-600 mb-2">🟢 1. (who) → للعاقل (الناس)</p>
              <p className="text-sm mb-2">🔸 الاستخدام: نستخدمها للحديث عن الأشخاص</p>
              <div className="bg-white p-2 rounded-lg text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                The man <CText text="who" type="particle" /> works here is kind.
              </div>
              <p className="text-slate-500 text-xs mt-1" dir="rtl">الرجل الذي يعمل هنا طيب</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-600 mb-2">🔵 2. (which) → لغير العاقل (الأشياء)</p>
              <div className="bg-white p-2 rounded-lg text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                The book <CText text="which" type="particle" /> is on the table is mine.
              </div>
              <p className="text-slate-500 text-xs mt-1" dir="rtl">الكتاب الذي على الطاولة لي</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
              <p className="font-bold text-amber-600 mb-2">🟡 3. (that) → للعاقل وغير العاقل</p>
              <p className="text-sm mb-2">📌 يمكن استخدامها بدل who أو which</p>
              <div className="bg-white p-2 rounded-lg text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                The boy <CText text="that" type="particle" /> is playing is my friend
              </div>
            </div>
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
              <p className="font-bold text-rose-600 mb-2">🔴 4. (where) → للمكان</p>
              <div className="bg-white p-2 rounded-lg text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                This is the place <CText text="where" type="particle" /> I live.
              </div>
              <p className="text-slate-500 text-xs mt-1" dir="rtl">هذا هو المكان الذي أعيش فيه</p>
            </div>
            <div className="p-3 bg-violet-50 rounded-xl border border-violet-100 md:col-span-2">
              <p className="font-bold text-violet-600 mb-2">🟣 5. (whose) → للملكية</p>
              <div className="bg-white p-2 rounded-lg text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                The boy <CText text="whose" type="particle" /> car is red is my friend
              </div>
              <p className="text-slate-500 text-xs mt-1" dir="rtl">الولد الذي سيارته حمراء هو صديقي</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rc3',
      title: '🔹 أنواع الجمل الوصلية',
      icon: '⚖️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div>
            <p className="font-bold text-emerald-600 mb-2">🟢 1. Defining Relative Clause (مهمة)</p>
            <p className="mb-2">تعطي معلومات ضرورية، بدونها الجملة غير واضحة.</p>
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              The student <CText text="who" type="particle" /> studies hard will pass.
            </div>
          </div>
          <div>
            <p className="font-bold text-blue-600 mb-2">🔵 2. Non-defining Relative Clause (غير مهمة)</p>
            <p className="mb-2">تعطي معلومات إضافية فقط، وتوضع بين فواصل (, ,).</p>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              Ali, <CText text="who" type="particle" /> is my friend, is smart.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'rc4',
      title: '🔹 ملاحظات مهمة 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
            <p className="font-bold text-amber-600 mb-2">🔸 1. يمكن حذف who / which / that أحيانًا</p>
            <p className="mb-2">إذا كانت مفعول به (Object).</p>
            <div className="bg-white p-2 rounded-lg text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              The book (that) I read was good.
            </div>
          </div>
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
            <p className="font-bold text-rose-600 mb-2">🔸 2. لا نستخدم "he / she / it" بعد ضمير الوصل ❌</p>
            <div className="bg-white p-2 rounded-lg text-sm whitespace-nowrap overflow-x-auto custom-scrollbar mb-2" dir="ltr">
              ❌ The boy <CText text="who" type="particle" /> he is playing
            </div>
            <div className="bg-white p-2 rounded-lg text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              ✔ The boy <CText text="who" type="particle" /> is playing
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'rcq1',
      type: 'multiple_choice',
      question: 'The boy _____ is playing is my brother.',
      options: ['which', 'who', 'where', 'whose'],
      correctAnswer: 'who',
      explanation: 'نستخدم who للعاقل (الولد).'      
    },
    {
      id: 'rcq2',
      type: 'multiple_choice',
      question: 'The book _____ I read was interesting.',
      options: ['who', 'where', 'which', 'whose'],
      correctAnswer: 'which',
      explanation: 'نستخدم which لغير العاقل (الكتاب).'
    },
    {
      id: 'rcq3',
      type: 'multiple_choice',
      question: 'This is the place _____ I live.',
      options: ['who', 'which', 'where', 'whose'],
      correctAnswer: 'where',
      explanation: 'نستخدم where للمكان.'
    },
    {
      id: 'rcq4',
      type: 'multiple_choice',
      question: 'The girl _____ father is a doctor is smart.',
      options: ['who', 'which', 'whose', 'where'],
      correctAnswer: 'whose',
      explanation: 'نستخدم whose للملكية (والد الفتاة).'      
    },
    {
      id: 'rcq5',
      type: 'multiple_choice',
      question: 'The car _____ I bought is new.',
      options: ['who', 'which', 'where', 'whose'],
      correctAnswer: 'which',
      explanation: 'نستخدم which لغير العاقل (السيارة).'
    },
    {
      id: 'rcq6',
      type: 'multiple_choice',
      question: '🔹 صحّح الخطأ: The man who he works here is kind.',
      options: [
        'The man who works here is kind.',
        'The man which works here is kind.',
        'The man who he works here is kind.',
        'The man whose works here is kind.'
      ],
      correctAnswer: 'The man who works here is kind.',
      explanation: 'لا نستخدم ضمير فاعل (he) بعد ضمير الوصل (who).'
    },
    {
      id: 'rcq7',
      type: 'multiple_choice',
      question: '🔹 صحّح الخطأ: The book who is on the table is mine.',
      options: [
        'The book who is on the table is mine.',
        'The book where is on the table is mine.',
        'The book which is on the table is mine.',
        'The book whose is on the table is mine.'
      ],
      correctAnswer: 'The book which is on the table is mine.',
      explanation: 'نستخدم which لغير العاقل (الكتاب) وليس who.'
    },
    {
      id: 'rcq8',
      type: 'arrange',
      question: 'الطالب الذي يدرس بجد سينجح.',
      options: ['studies', 'The', 'who', 'hard', 'student', 'pass.', 'will'],
      correctAnswer: ['The', 'student', 'who', 'studies', 'hard', 'will', 'pass.'],
      explanation: 'الترجمة الصحيحة: The student who studies hard will pass.'
    },
    {
      id: 'rcq9',
      type: 'arrange',
      question: 'هذا هو المكان الذي أعمل فيه.',
      options: ['place', 'This', 'where', 'is', 'the', 'work.', 'I'],
      correctAnswer: ['This', 'is', 'the', 'place', 'where', 'I', 'work.'],
      explanation: 'الترجمة الصحيحة: This is the place where I work.'
    },
    {
      id: 'rcq10',
      type: 'multiple_choice',
      question: 'اختر الجملة الصحيحة:',
      options: [
        'A) The boy who he is playing is happy.',
        'B) The boy who is playing is happy.',
        'C) The boy which is playing is happy.'
      ],
      correctAnswer: 'B) The boy who is playing is happy.',
      explanation: 'الجملة B هي الصحيحة لأننا نستخدم who للعاقل ولا نكرر الفاعل (he).'
    }
  ]
};

export const linkingWordsLesson: GrammarLessonData = {
  id: 'linking-words',
  title: 'أدوات الربط (Linking Words)',
  description: 'ربط الجمل والأفكار ببعضها 🔗',
  cards: [
    {
      id: 'c1',
      title: 'الإضافة والتناقض ➕',
      icon: '➕',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>And (و):</strong> لربط فكرتين متشابهتين أو إضافة معلومات.
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                I like apples <CText text="and" type="particle" /> I like bananas.
              </div>
            </li>
            <li>
              <strong>But (لكن):</strong> لربط فكرتين متناقضتين.
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                He is rich, <CText text="but" type="particle" /> he is not happy.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'السبب والنتيجة 🎯',
      icon: '🎯',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Because (لأن):</strong> يتبعها السبب.
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                I stayed at home <CText text="because" type="particle" /> it was raining.
              </div>
            </li>
            <li>
              <strong>So (لذلك):</strong> يتبعها النتيجة.
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                It was raining, <CText text="so" type="particle" /> I stayed at home.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'التناقض القوي ⚡',
      icon: '⚡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Although / Even though (بالرغم من):</strong> يتبعها جملة كاملة وتعبر عن مفاجأة أو تناقض.
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                <CText text="Although" type="particle" /> he was sick, he went to school.
              </div>
            </li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'He studied hard, _____ he failed the exam.',
      options: ['and', 'so', 'but', 'because'],
      correctAnswer: 'but',
      explanation: 'نستخدم but لوجود تناقض (ذاكر بجد، لكنه رسب).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'I was tired, _____ I went to bed early.',
      options: ['because', 'so', 'although', 'but'],
      correctAnswer: 'so',
      explanation: 'نستخدم so لأن ما بعدها هو النتيجة (كنت متعباً، لذلك ذهبت للنوم).'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: '_____ it was raining, we played football.',
      options: ['Because', 'So', 'Although', 'And'],
      correctAnswer: 'Although',
      explanation: 'نستخدم Although للتعبير عن التناقض (بالرغم من أنها كانت تمطر، لعبنا).'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'She didn\'t go to school _____ she was ill.',
      options: ['so', 'because', 'but', 'although'],
      correctAnswer: 'because',
      explanation: 'نستخدم because لأن ما بعدها هو السبب (لأنها كانت مريضة).'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'I like tea so I like coffee.',
      correctAnswer: false,
      explanation: 'خطأ ❌. لربط فكرتين متشابهتين نستخدم and (I like tea and I like coffee).'
    }
  ]
};

export const comparativesLesson: GrammarLessonData = {
  id: 'comparatives',
  title: 'المقارنة والتفضيل (Comparatives & Superlatives)',
  description: 'مقارنة الأشياء والأشخاص 📏',
  cards: [
    {
      id: 'c1',
      title: 'الصفات القصيرة 🤏',
      icon: '🤏',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>المقارنة بين اثنين (Comparative):</strong> نضيف (er) للصفة + than.
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                Ali is <CText text="taller than" type="verb" /> Ahmed.
              </div>
            </li>
            <li>
              <strong>التفضيل (Superlative):</strong> نضع (the) قبل الصفة ونضيف (est).
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                Ali is <CText text="the tallest" type="verb" /> boy in the class.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'الصفات الطويلة 📏',
      icon: '📏',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>المقارنة بين اثنين:</strong> نستخدم (more) قبل الصفة + than.
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                Gold is <CText text="more expensive than" type="verb" /> silver.
              </div>
            </li>
            <li>
              <strong>التفضيل:</strong> نستخدم (the most) قبل الصفة.
              <div className="bg-slate-50 p-3 rounded-xl mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                This is <CText text="the most interesting" type="verb" /> book.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'صفات شاذة (Irregular) ⚠️',
      icon: '⚠️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>هذه الصفات لا تتبع القاعدة ويجب حفظها:</p>
          <ul className="list-disc list-inside space-y-2" dir="ltr">
            <li className="whitespace-nowrap overflow-x-auto custom-scrollbar"><span dir="ltr" className="inline-block mx-1 whitespace-nowrap">good ➔ better than ➔ the best</span></li>
            <li className="whitespace-nowrap overflow-x-auto custom-scrollbar"><span dir="ltr" className="inline-block mx-1 whitespace-nowrap">bad ➔ worse than ➔ the worst</span></li>
            <li className="whitespace-nowrap overflow-x-auto custom-scrollbar"><span dir="ltr" className="inline-block mx-1 whitespace-nowrap">far ➔ farther than ➔ the farthest</span></li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'My car is _____ than yours.',
      options: ['fast', 'faster', 'fastest', 'more fast'],
      correctAnswer: 'faster',
      explanation: 'نضيف er للصفة القصيرة عند المقارنة بين اثنين (وجود than).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'This is the _____ movie I have ever seen.',
      options: ['bad', 'worse', 'worst', 'baddest'],
      correctAnswer: 'worst',
      explanation: 'التفضيل من الصفة الشاذة bad هو the worst.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'English is _____ than Chinese.',
      options: ['easy', 'easier', 'easiest', 'more easy'],
      correctAnswer: 'easier',
      explanation: 'الصفة easy تنتهي بـ y، تقلب إلى i ونضيف er (easier than).'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'She is the _____ girl in our school.',
      options: ['beautiful', 'more beautiful', 'most beautiful', 'beautifulest'],
      correctAnswer: 'most beautiful',
      explanation: 'التفضيل مع الصفة الطويلة (beautiful) يأخذ the most.'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'Ali is more tall than Ahmed.',
      correctAnswer: false,
      explanation: 'خطأ ❌. tall صفة قصيرة، يجب أن نقول taller than وليس more tall.'
    }
  ]
};

export const questionTagsLesson: GrammarLessonData = {
  id: 'question-tags',
  title: 'السؤال المذيل (Question Tags)',
  description: 'أليس كذلك؟ للتأكد من المعلومة 🤔',
  cards: [
    {
      id: 'c1',
      title: '1. ما هو Question Tag؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">تعريف بسيط:</p>
          <p>هو سؤال قصير يُضاف في نهاية الجملة للتأكد أو طلب الموافقة.</p>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <p className="font-bold text-indigo-800 mb-2">مثال:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="font-bold text-slate-800">You are a student, <CText text="aren’t you?" type="particle" /></p>
              <p className="text-slate-500 text-sm" dir="rtl">أنت طالب، أليس كذلك؟</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: '2. تركيب الجملة 🧩',
      icon: '🧩',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>تتكون الجملة من جزئين:</p>
          <div className="flex flex-col gap-2">
            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-center">
              <p className="font-bold text-emerald-800">جملة خبرية (Statement)</p>
            </div>
            <div className="text-center text-slate-400">⬇️</div>
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 text-center">
              <p className="font-bold text-amber-800">سؤال قصير (Tag)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: '3. القاعدة الأساسية 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="font-bold text-emerald-800 mb-2 whitespace-nowrap overflow-x-auto custom-scrollbar">🟢 جملة مثبتة ➔ سؤال منفي</p>
              <div className="bg-white p-2 rounded shadow-sm text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                You are happy, <span className="text-red-600 font-bold">aren’t you?</span>
              </div>
            </div>
            <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
              <p className="font-bold text-rose-800 mb-2 whitespace-nowrap overflow-x-auto custom-scrollbar">🔴 جملة منفية ➔ سؤال مثبت</p>
              <div className="bg-white p-2 rounded shadow-sm text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                He isn’t here, <span className="text-emerald-600 font-bold">is he?</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: '4. تكوين Question Tag 🛠️',
      icon: '🛠️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>نستخدم دائماً:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>نفس الفعل المساعد (Auxiliary Verb)</li>
            <li>نفس الضمير (Subject Pronoun)</li>
          </ul>
          <div className="space-y-2" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">She <CText text="is" type="verb" /> tired, <CText text="isn’t she?" type="particle" /></p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">They <CText text="are" type="verb" /> playing, <CText text="aren’t they?" type="particle" /></p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: '5. أهم الأفعال المستخدمة 📊',
      icon: '📊',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white text-sm">
                  <th className="p-2 border border-indigo-500">الجملة</th>
                  <th className="p-2 border border-indigo-500">السؤال (Tag)</th>
                </tr>
              </thead>
              <tbody className="bg-white text-sm">
                <tr><td className="p-2 border border-slate-100 font-bold">is</td><td className="p-2 border border-slate-100 text-red-600 font-bold">isn’t</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">are</td><td className="p-2 border border-slate-100 text-red-600 font-bold">aren’t</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">was</td><td className="p-2 border border-slate-100 text-red-600 font-bold">wasn’t</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">were</td><td className="p-2 border border-slate-100 text-red-600 font-bold">weren’t</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">can</td><td className="p-2 border border-slate-100 text-red-600 font-bold">can’t</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">will</td><td className="p-2 border border-slate-100 text-red-600 font-bold">won’t</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">should</td><td className="p-2 border border-slate-100 text-red-600 font-bold">shouldn’t</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: '6. مع الفعل العادي (No Auxiliary) 🔵',
      icon: '🔵',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>إذا لم يوجد فعل مساعد، نستخدم <span className="font-bold text-blue-600">do / does / did</span>:</p>
          <div className="space-y-3 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">You like coffee, <CText text="don’t you?" type="particle" /></p>
              <p className="text-slate-500 text-xs text-right" dir="rtl">أنت تحب القهوة، أليس كذلك؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">He plays football, <CText text="doesn’t he?" type="particle" /></p>
              <p className="text-slate-500 text-xs text-right" dir="rtl">هو يلعب كرة القدم، أليس كذلك؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">They went home, <CText text="didn’t they?" type="particle" /></p>
              <p className="text-slate-500 text-xs text-right" dir="rtl">هم ذهبوا إلى المنزل، أليس كذلك؟</p>
            </div>
          </div>
          <div className="bg-rose-50 p-3 rounded-lg border border-rose-100 mt-2 whitespace-nowrap overflow-x-auto custom-scrollbar">
            <p className="font-bold text-rose-800 mb-1">🔴 مع النفي:</p>
            <p className="text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">She doesn’t like tea, <span className="text-emerald-600 font-bold">does she?</span></p>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: '7. حالات خاصة مهمة جدًا 🔥',
      icon: '🔥',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
              <p className="font-bold text-amber-800 mb-1 whitespace-nowrap overflow-x-auto custom-scrollbar">1. I am ➔ aren’t I?</p>
              <p className="text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">I am late, <span className="text-red-600 font-bold">aren’t I?</span></p>
              <p className="text-xs text-slate-500 mt-1">📌 مهمة جدًا في الامتحان!</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-800 mb-1 whitespace-nowrap overflow-x-auto custom-scrollbar">2. Let’s ➔ shall we?</p>
              <p className="text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Let’s go, <span className="text-blue-600 font-bold">shall we?</span></p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-800 mb-1">3. الأمر (Imperative)</p>
              <p className="text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Close the door, <span className="text-indigo-600 font-bold">will you?</span></p>
              <p className="text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Don’t talk, <span className="text-indigo-600 font-bold">will you?</span></p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c8',
      title: '8. ملخص سريع 🎯',
      icon: '🎯',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-indigo-600 text-white p-4 rounded-2xl shadow-lg">
            <ul className="space-y-2 list-none">
              <li className="flex items-center gap-2">✅ مثبت ➔ منفي</li>
              <li className="flex items-center gap-2">❌ منفي ➔ مثبت</li>
              <li className="flex items-center gap-2">🧩 نفس الفعل + نفس الضمير</li>
              <li className="flex items-center gap-2">⚙️ لا يوجد فعل مساعد ➔ do / does / did</li>
            </ul>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'She is happy, ______?',
      options: ['is she', 'isn’t she', 'doesn’t she', 'wasn’t she'],
      correctAnswer: 'isn’t she',
      explanation: 'الجملة مثبتة وبها is، لذا السؤال المذيل يكون isn’t she.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'They play football, ______?',
      options: ['don’t they', 'aren’t they', 'didn’t they', 'doesn’t they'],
      correctAnswer: 'don’t they',
      explanation: 'الجملة في المضارع البسيط المثبت ولا يوجد فعل مساعد، لذا نستخدم don’t they.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'He didn’t come, ______?',
      options: ['didn’t he', 'does he', 'did he', 'is he'],
      correctAnswer: 'did he',
      explanation: 'الجملة منفية بـ didn’t، لذا السؤال المذيل يكون مثبتاً did he.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'I am late, ______?',
      options: ['am I', 'aren’t I', 'isn’t I', 'don’t I'],
      correctAnswer: 'aren’t I',
      explanation: 'هذه حالة خاصة: I am تتحول إلى aren’t I في السؤال المذيل.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'Let’s go, ______?',
      options: ['will we', 'shall we', 'don’t we', 'do we'],
      correctAnswer: 'shall we',
      explanation: 'حالة خاصة: Let’s دائماً تأخذ shall we.'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: She is a teacher, is she?',
      options: ['She is a teacher, isn’t she?', 'She is a teacher, doesn’t she?', 'She is a teacher, are she?'],
      correctAnswer: 'She is a teacher, isn’t she?',
      explanation: 'الجملة مثبتة، لذا يجب أن يكون السؤال المذيل منفياً.'
    },
    {
      id: 'q7',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: He likes coffee, doesn’t he not?',
      options: ['He likes coffee, doesn’t he?', 'He likes coffee, does he?', 'He likes coffee, isn’t he?'],
      correctAnswer: 'He likes coffee, doesn’t he?',
      explanation: 'السؤال المذيل الصحيح هو doesn’t he بدون إضافة not مرة أخرى.'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'ترجم: أنت ذكي، أليس كذلك؟',
      options: ['You', 'are', 'smart,', 'aren’t', 'you?'],
      correctAnswer: ['You', 'are', 'smart,', 'aren’t', 'you?'],
      explanation: 'الترجمة الصحيحة هي You are smart, aren’t you?'
    },
    {
      id: 'q9',
      type: 'arrange',
      question: 'ترجم: هو لم يذهب، أليس كذلك؟',
      options: ['He', 'didn’t', 'go,', 'did', 'he?'],
      correctAnswer: ['He', 'didn’t', 'go,', 'did', 'he?'],
      explanation: 'الترجمة الصحيحة هي He didn’t go, did he?'
    },
    {
      id: 'q10',
      type: 'true_false',
      question: 'I am your friend, am not I?',
      correctAnswer: false,
      explanation: 'خطأ ❌. السؤال المذيل لـ I am هو aren\'t I? كحالة شاذة.'
    }
  ]
};

export const politeRequestsLesson: GrammarLessonData = {
  id: 'polite-requests',
  title: 'الطلب المؤدب والعروض (Requests & Offers)',
  description: 'كيف تطلب وتعرض بأدب ☕',
  cards: [
    {
      id: 'c1',
      title: '1. ما هو Requests & Offers؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <p className="font-bold text-indigo-800 mb-2">🔸 Requests (الطلبات المؤدبة)</p>
            <p className="text-sm mb-2">هي طلب شيء من شخص بأدب واحترام.</p>
            <div className="bg-white p-2 rounded shadow-sm text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              Can you help me?
              <p className="text-slate-500 text-xs" dir="rtl">هل يمكنك مساعدتي؟</p>
            </div>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <p className="font-bold text-emerald-800 mb-2">🔸 Offers (العروض)</p>
            <p className="text-sm mb-2">هي عرض مساعدة أو خدمة لشخص.</p>
            <div className="bg-white p-2 rounded shadow-sm text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              Can I help you?
              <p className="text-slate-500 text-xs" dir="rtl">هل يمكنني مساعدتك؟</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: '2. طلب مؤدب (Can / Could) 🟢',
      icon: '🟢',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="font-bold text-slate-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Can / Could + subject + base verb?</p>
          </div>
          <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800"><CText text="Can" type="particle" /> you open the door?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل يمكنك فتح الباب؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800"><CText text="Could" type="particle" /> you help me?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل يمكنك مساعدتي؟ (أكثر أدبًا)</p>
            </div>
          </div>
          <p className="text-xs font-bold text-indigo-600 bg-indigo-50 p-2 rounded">📌 ملاحظة: Could أكثر تهذيبًا من Can</p>
        </div>
      )
    },
    {
      id: 'c3',
      title: '3. طلب مؤدب (Will / Would) 🔵',
      icon: '🔵',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <p className="font-bold text-blue-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Will / Would + subject + base verb?</p>
          </div>
          <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800"><CText text="Will" type="particle" /> you close the window?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل ستغلق النافذة؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800"><CText text="Would" type="particle" /> you pass the salt?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل يمكن أن تناولني الملح؟ (أكثر أدبًا)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: '4. استخدام (...Do you mind) 🟡',
      icon: '🟡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <p className="font-bold text-amber-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Do / Would you mind + verb + ing?</p>
          </div>
          <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800"><CText text="Do you mind" type="particle" /> opening the door?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل تمانع فتح الباب؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800"><CText text="Would you mind" type="particle" /> helping me?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل تمانع مساعدتي؟ (أكثر تهذيبًا)</p>
            </div>
          </div>
          <div className="bg-slate-100 p-3 rounded-lg">
            <p className="font-bold text-slate-700 text-sm mb-1">📌 الرد بالموافقة:</p>
            <p className="font-mono text-emerald-600 text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">No, not at all. (لا، لا أمانع)</p>
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: '5. استخدام (...May I) 🔴',
      icon: '🔴',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
            <p className="font-bold text-rose-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">May I + base verb?</p>
          </div>
          <p className="text-sm bg-slate-100 p-2 rounded">📌 هذا أسلوب رسمي جدًا (Formal).</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <p className="font-bold text-slate-800"><CText text="May I" type="particle" /> come in?</p>
            <p className="text-slate-500 text-xs" dir="rtl">هل يمكنني الدخول؟</p>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: '6. تقديم العروض (Offers) 🎁',
      icon: '🎁',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="font-bold text-emerald-800 mb-1">Can I...?</p>
              <p className="text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Can I help you?</p>
              <p className="text-xs text-slate-500" dir="rtl">هل أستطيع مساعدتك؟</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-800 mb-1">Shall I...?</p>
              <p className="text-xs text-blue-600 mb-2">📌 تُستخدم مع (I / we)</p>
              <p className="text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Shall I open the door?</p>
              <p className="text-xs text-slate-500" dir="rtl">هل أفتح الباب؟</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: '7. استخدام (Would you like) ☕',
      icon: '☕',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <p className="font-bold text-amber-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Would you like + noun / to + verb?</p>
          </div>
          <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">Would you like some tea?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل ترغب في بعض الشاي؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">Would you like to sit?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل ترغب في الجلوس؟</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c8',
      title: '8. الردود المهمة 💬',
      icon: '💬',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="font-bold text-emerald-800 mb-2">✅ الموافقة:</p>
              <ul className="text-sm space-y-1 font-mono" dir="ltr">
                <li>Yes, please.</li>
                <li>Sure.</li>
                <li>Of course.</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
              <p className="font-bold text-rose-800 mb-2">❌ الرفض بأدب:</p>
              <ul className="text-sm space-y-1 font-mono" dir="ltr">
                <li>No, thank you.</li>
                <li>Sorry, I can’t.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c9',
      title: '9. ملخص سريع 🎯',
      icon: '🎯',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white text-xs">
                  <th className="p-2 border border-indigo-500">التعبير</th>
                  <th className="p-2 border border-indigo-500">الاستخدام</th>
                </tr>
              </thead>
              <tbody className="bg-white text-xs">
                <tr><td className="p-2 border border-slate-100 font-bold">Can / Could</td><td className="p-2 border border-slate-100">طلب</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">Will / Would</td><td className="p-2 border border-slate-100">طلب</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">Do you mind</td><td className="p-2 border border-slate-100">طلب مهذب</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">May I</td><td className="p-2 border border-slate-100">طلب رسمي</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">Can I</td><td className="p-2 border border-slate-100">عرض</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">Shall I</td><td className="p-2 border border-slate-100">عرض</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">Would you like</td><td className="p-2 border border-slate-100">عرض</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: '______ you help me, please?',
      options: ['May', 'Can', 'Shall', 'Must'],
      correctAnswer: 'Can',
      explanation: 'نستخدم Can لطلب المساعدة بشكل مؤدب.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'Would you mind ______ the door?',
      options: ['open', 'to open', 'opening', 'opened'],
      correctAnswer: 'opening',
      explanation: 'بعد Would you mind نستخدم الفعل مضافاً له ing.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: '______ I help you?',
      options: ['Can', 'Would', 'Do', 'Did'],
      correctAnswer: 'Can',
      explanation: 'نستخدم Can I لتقديم عرض بالمساعدة.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'Shall I ______ the window?',
      options: ['opening', 'open', 'to open', 'opened'],
      correctAnswer: 'open',
      explanation: 'بعد Shall I نستخدم الفعل في المصدر بدون إضافات.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'Would you like ______ some tea?',
      options: ['drink', 'drinking', 'to drink', 'drank'],
      correctAnswer: 'to drink',
      explanation: 'نستخدم Would you like to + verb لتقديم عرض.'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: Would you mind open the door?',
      options: ['Would you mind opening the door?', 'Would you mind to open the door?', 'Would you mind opens the door?'],
      correctAnswer: 'Would you mind opening the door?',
      explanation: 'يجب إضافة ing للفعل بعد mind.'
    },
    {
      id: 'q7',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: Shall I to help you?',
      options: ['Shall I help you?', 'Shall I helping you?', 'Shall I helps you?'],
      correctAnswer: 'Shall I help you?',
      explanation: 'بعد Shall I نستخدم المصدر بدون to.'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'ترجم: هل يمكنك مساعدتي؟',
      options: ['Can', 'you', 'help', 'me?'],
      correctAnswer: ['Can', 'you', 'help', 'me?'],
      explanation: 'الترجمة الصحيحة هي Can you help me?'
    },
    {
      id: 'q9',
      type: 'arrange',
      question: 'ترجم: هل تمانع فتح النافذة؟',
      options: ['Would', 'you', 'mind', 'opening', 'the', 'window?'],
      correctAnswer: ['Would', 'you', 'mind', 'opening', 'the', 'window?'],
      explanation: 'الترجمة الصحيحة هي Would you mind opening the window?'
    },
    {
      id: 'q10',
      type: 'true_false',
      question: 'Could you help me? is more polite than Can you help me?',
      correctAnswer: true,
      explanation: 'صح ✅. كلمة Could أكثر تهذيباً من Can في الطلب.'
    }
  ]
};

export const givingAdviceLesson: GrammarLessonData = {
  id: 'giving-advice',
  title: 'إعطاء النصيحة (Giving Advice)',
  description: 'تقديم النصائح للآخرين 💡',
  cards: [
    {
      id: 'c1',
      title: '1. ما هو Giving Advice؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">تعريف بسيط:</p>
          <p>هو استخدام عبارات لمساعدة شخص أو توجيهه ليفعل الشيء الصحيح.</p>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <p className="font-bold text-indigo-800 mb-2">مثال:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="font-bold text-slate-800">You <CText text="should" type="particle" /> study.</p>
              <p className="text-slate-500 text-sm" dir="rtl">يجب أن تذاكر</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: '2. استخدام (should) ✅',
      icon: '✅',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <p className="font-bold text-emerald-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Subject + should + base verb</p>
          </div>
          <p>تُستخدم للنصيحة العامة.</p>
          <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">You <CText text="should" type="particle" /> study hard.</p>
              <p className="text-slate-500 text-xs" dir="rtl">يجب أن تدرس بجد</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">He <CText text="should" type="particle" /> see a doctor.</p>
              <p className="text-slate-500 text-xs" dir="rtl">يجب عليه أن يزور الطبيب</p>
            </div>
          </div>
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 mt-4">
            <p className="font-bold text-rose-800 mb-2">🔴 النفي (Negative):</p>
            <p className="font-mono text-sm mb-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">should not (shouldn’t)</p>
            <div className="bg-white p-2 rounded shadow-sm text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              You <CText text="shouldn't" type="particle" /> eat too much sugar.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: '3. استخدام (ought to) 🔵',
      icon: '🔵',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <p className="font-bold text-blue-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Subject + ought to + base verb</p>
          </div>
          <p className="text-sm bg-slate-100 p-2 rounded">📌 نفس معنى should تقريبًا.</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <p className="font-bold text-slate-800">You <CText text="ought to" type="particle" /> respect your parents.</p>
            <p className="text-slate-500 text-xs" dir="rtl">يجب أن تحترم والديك</p>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: '4. استخدام (had better) 🟡',
      icon: '🟡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
            <p className="font-bold text-amber-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Subject + had better + base verb</p>
          </div>
          <p className="text-sm font-bold text-amber-600">⚠️ نصيحة قوية (تحذير)</p>
          <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">You <CText text="had better" type="particle" /> study.</p>
              <p className="text-slate-500 text-xs" dir="rtl">من الأفضل أن تذاكر (وإلا ستندم)</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">You <CText text="had better not" type="particle" /> be late.</p>
              <p className="text-slate-500 text-xs" dir="rtl">من الأفضل ألا تتأخر</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: '5. استخدام (?Why don’t you) 🟣',
      icon: '🟣',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
            <p className="font-bold text-purple-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Why don’t you + base verb?</p>
          </div>
          <p>تُستخدم كاقتراح لطيف.</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <p className="font-bold text-slate-800"><CText text="Why don’t you" type="particle" /> sleep early?</p>
            <p className="text-slate-500 text-xs" dir="rtl">لماذا لا تنام مبكرًا؟</p>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: '6. استخدام (...If I were you) 🟠',
      icon: '🟠',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <p className="font-bold text-orange-800 mb-2">القاعدة:</p>
            <p className="font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">If I were you, I would + base verb</p>
          </div>
          <p>نصيحة شخصية قوية.</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <p className="font-bold text-slate-800"><CText text="If I were you," type="particle" /> I would study more.</p>
            <p className="text-slate-500 text-xs" dir="rtl">لو كنت مكانك، لدرست أكثر</p>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: '7. ملخص سريع 🎯',
      icon: '🎯',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white text-sm">
                  <th className="p-2 border border-indigo-500">الطريقة</th>
                  <th className="p-2 border border-indigo-500">القوة / الاستخدام</th>
                </tr>
              </thead>
              <tbody className="bg-white text-sm">
                <tr><td className="p-2 border border-slate-100 font-bold">should</td><td className="p-2 border border-slate-100">نصيحة عادية</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">ought to</td><td className="p-2 border border-slate-100">مثل should</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">had better</td><td className="p-2 border border-slate-100">تحذير</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">Why don’t you</td><td className="p-2 border border-slate-100">اقتراح</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">If I were you</td><td className="p-2 border border-slate-100">نصيحة قوية</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'You ______ study harder to pass the exam.',
      options: ['should', 'should to', 'must to', 'are'],
      correctAnswer: 'should',
      explanation: 'نستخدم should لإعطاء نصيحة، ويأتي بعدها الفعل في المصدر بدون to.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'You ______ eat too much fast food.',
      options: ['should', 'shouldn’t', 'ought', 'had'],
      correctAnswer: 'shouldn’t',
      explanation: 'نستخدم shouldn’t للنصيحة بعدم فعل شيء ضار.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'You ______ see a doctor.',
      options: ['ought', 'ought to', 'ought see', 'ought seeing'],
      correctAnswer: 'ought to',
      explanation: 'الفعل ought يأتي دائماً متبوعاً بـ to.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'You had better ______ early.',
      options: ['to sleep', 'sleeping', 'sleep', 'slept'],
      correctAnswer: 'sleep',
      explanation: 'بعد had better نستخدم الفعل في المصدر بدون to.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'If I were you, I ______ study more.',
      options: ['will', 'would', 'should to', 'am'],
      correctAnswer: 'would',
      explanation: 'في حالة If الثانية للنصيحة، نستخدم would + المصدر.'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: You should to study hard.',
      options: ['You should study hard.', 'You should studying hard.', 'You should to studying hard.'],
      correctAnswer: 'You should study hard.',
      explanation: 'لا نستخدم to بعد should.'
    },
    {
      id: 'q7',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: He ought see a doctor.',
      options: ['He ought to see a doctor.', 'He ought seeing a doctor.', 'He oughts see a doctor.'],
      correctAnswer: 'He ought to see a doctor.',
      explanation: 'يجب استخدام to بعد ought.'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'ترجم: يجب أن تنام مبكرًا.',
      options: ['You', 'should', 'sleep', 'early.'],
      correctAnswer: ['You', 'should', 'sleep', 'early.'],
      explanation: 'الترجمة الصحيحة هي You should sleep early.'
    },
    {
      id: 'q9',
      type: 'arrange',
      question: 'ترجم: لو كنت مكانك، لما ذهبت.',
      options: ['If', 'I', 'were', 'you,', 'I', 'wouldn\'t', 'go.'],
      correctAnswer: ['If', 'I', 'were', 'you,', 'I', 'wouldn\'t', 'go.'],
      explanation: 'الترجمة الصحيحة هي If I were you, I wouldn\'t go.'
    },
    {
      id: 'q10',
      type: 'true_false',
      question: 'You had better to see a doctor.',
      correctAnswer: false,
      explanation: 'خطأ ❌. بعد had better نستخدم الفعل في المصدر بدون to.'
    }
  ]
};

export const quantityLesson: GrammarLessonData = {
  id: 'quantity',
  title: 'التعبير عن الكمية (Expressing Quantity)',
  description: 'كميات الأشياء (قليل، كثير) 🥛',
  cards: [
    {
      id: 'c1',
      title: '1. ما هو التعبير عن الكمية؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">تعريف بسيط:</p>
          <p>هو استخدام كلمات تدل على كمية الشيء (كثير – قليل – بعض – لا شيء…)</p>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <p className="font-bold text-indigo-800 mb-2">أهم الكلمات:</p>
            <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden custom-scrollbar gap-2" dir="ltr">
              {['some', 'any', 'much', 'many', 'a lot of', 'few', 'little'].map(word => (
                <span key={word} className="px-3 py-1 bg-white rounded-lg shadow-sm text-indigo-600 font-mono font-bold">{word}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: '2. المعدود وغير المعدود 🍎💧',
      icon: '🍎',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="font-bold text-emerald-800 mb-2">Countable (أشياء تُعد)</p>
              <p className="text-sm mb-2">يمكن عدّها مباشرة:</p>
              <ul className="text-sm space-y-1">
                <li>🍎 apples</li>
                <li>📚 books</li>
                <li>👨‍🎓 students</li>
              </ul>
              <p className="mt-2 text-xs font-bold text-emerald-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">one apple, two apples</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
              <p className="font-bold text-amber-800 mb-2">Uncountable (أشياء لا تُعد)</p>
              <p className="text-sm mb-2">لا يمكن عدّها مباشرة:</p>
              <ul className="text-sm space-y-1">
                <li>💧 water</li>
                <li>🍚 rice</li>
                <li>💰 money</li>
              </ul>
              <div className="mt-2 text-xs font-bold text-amber-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                <p className="text-red-500">❌ one water</p>
                <p className="text-emerald-600">✅ a glass of water</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: '3. استخدام (some / any) ➕❓',
      icon: '➕',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-blue-800 mb-2">some (بعض)</p>
              <p className="text-sm mb-2">تُستخدم في الجمل المثبتة:</p>
              <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                <div className="bg-white p-2 rounded shadow-sm text-sm whitespace-nowrap overflow-x-auto custom-scrollbar">
                  <p className="font-bold">I have some money.</p>
                  <p className="text-slate-500 text-xs" dir="rtl">لدي بعض المال</p>
                </div>
                <div className="bg-white p-2 rounded shadow-sm text-sm whitespace-nowrap overflow-x-auto custom-scrollbar">
                  <p className="font-bold">She bought some apples.</p>
                  <p className="text-slate-500 text-xs" dir="rtl">اشترت بعض التفاح</p>
                </div>
              </div>
            </div>
            <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-rose-800 mb-2">any (أي)</p>
              <p className="text-sm mb-2">تُستخدم في النفي والسؤال:</p>
              <div className="space-y-2 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                <div className="bg-white p-2 rounded shadow-sm text-sm whitespace-nowrap overflow-x-auto custom-scrollbar">
                  <p className="font-bold">I don’t have any money.</p>
                  <p className="text-slate-500 text-xs" dir="rtl">ليس لدي أي مال</p>
                </div>
                <div className="bg-white p-2 rounded shadow-sm text-sm whitespace-nowrap overflow-x-auto custom-scrollbar">
                  <p className="font-bold">Do you have any questions?</p>
                  <p className="text-slate-500 text-xs" dir="rtl">هل لديك أي أسئلة؟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: '4. استخدام (much / many) 📈',
      icon: '📈',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-4 whitespace-nowrap overflow-x-auto custom-scrollbar">
            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-indigo-800 mb-1">many → مع المعدود</p>
              <p className="text-sm mb-2">many students, many books</p>
              <div className="bg-white p-2 rounded shadow-sm text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                There are many students.
              </div>
            </div>
            <div className="bg-violet-50 p-4 rounded-xl border border-violet-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-violet-800 mb-1">much → مع غير المعدود</p>
              <p className="text-sm mb-2">much water, much money</p>
              <div className="bg-white p-2 rounded shadow-sm text-sm font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
                There isn’t much water.
              </div>
            </div>
            <p className="text-xs font-bold text-slate-500 bg-slate-100 p-2 rounded">📌 ملاحظة: غالبًا تُستخدم في النفي والسؤال</p>
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: '5. (a lot of / lots of) 🌊',
      icon: '🌊',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">تُستخدم مع الكل!</p>
          <p>تأتي مع المعدود وغير المعدود في الجمل المثبتة.</p>
          <div className="space-y-3 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">I have a lot of friends.</p>
              <p className="text-slate-500 text-xs" dir="rtl">لدي الكثير من الأصدقاء</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar">
              <p className="font-bold text-slate-800">She drinks a lot of water.</p>
              <p className="text-slate-500 text-xs" dir="rtl">تشرب الكثير من الماء</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: '6. (few / little) 📉',
      icon: '📉',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="text-sm text-rose-600 font-bold">⚠️ معناها سلبي (قليل جدًا ولا يكفي)</p>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-800 mb-1">few → للمعدود</p>
              <p className="text-sm mb-2 font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Few students passed the exam.</p>
              <p className="text-xs text-slate-500">عدد قليل جداً نجحوا (أقل من المتوقع)</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-800 mb-1">little → لغير المعدود</p>
              <p className="text-sm mb-2 font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">There is little water.</p>
              <p className="text-xs text-slate-500">يوجد القليل جداً من الماء (لا يكفي)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: '7. (a few / a little) 👍',
      icon: '👍',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="text-sm text-emerald-600 font-bold">✅ معناها إيجابي (بعض / كمية كافية)</p>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="font-bold text-emerald-800 mb-1">a few → معدود</p>
              <p className="text-sm mb-2 font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">I have a few friends.</p>
              <p className="text-xs text-emerald-600">لدي بعض الأصدقاء (كافٍ)</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="font-bold text-emerald-800 mb-1">a little → غير معدود</p>
              <p className="text-sm mb-2 font-mono whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">I need a little help.</p>
              <p className="text-xs text-emerald-600">أحتاج بعض المساعدة</p>
            </div>
          </div>
          <p className="text-xs font-bold text-center bg-white p-2 rounded-full shadow-sm border border-slate-100">
            الفرق: <span className="text-rose-500">few = قليل جداً ❌</span> | <span className="text-emerald-600">a few = بعض 👍</span>
          </p>
        </div>
      )
    },
    {
      id: 'c8',
      title: '8. ملخص سريع 🎯',
      icon: '🎯',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white text-sm">
                  <th className="p-2 border border-indigo-500">الكلمة</th>
                  <th className="p-2 border border-indigo-500">الاستخدام</th>
                </tr>
              </thead>
              <tbody className="bg-white text-sm">
                <tr><td className="p-2 border border-slate-100 font-bold">some</td><td className="p-2 border border-slate-100">مثبت</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">any</td><td className="p-2 border border-slate-100">نفي + سؤال</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">many</td><td className="p-2 border border-slate-100">معدود</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">much</td><td className="p-2 border border-slate-100">غير معدود</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">a lot of</td><td className="p-2 border border-slate-100">الكل</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">few</td><td className="p-2 border border-slate-100">معدود (قليل جداً)</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">little</td><td className="p-2 border border-slate-100">غير معدود (قليل جداً)</td></tr>
                <tr className="bg-slate-50"><td className="p-2 border border-slate-100 font-bold">a few</td><td className="p-2 border border-slate-100">معدود (بعض)</td></tr>
                <tr><td className="p-2 border border-slate-100 font-bold">a little</td><td className="p-2 border border-slate-100">غير معدود (بعض)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'I have ______ friends in school.',
      options: ['much', 'many', 'little', 'any'],
      correctAnswer: 'many',
      explanation: 'كلمة friends معدود، لذا نستخدم many.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'There isn’t ______ water in the bottle.',
      options: ['many', 'much', 'few', 'a few'],
      correctAnswer: 'much',
      explanation: 'كلمة water غير معدود وفي حالة النفي نستخدم much.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'She bought ______ apples.',
      options: ['some', 'any', 'much', 'little'],
      correctAnswer: 'some',
      explanation: 'الجملة مثبتة، لذا نستخدم some.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'Do you have ______ money?',
      options: ['some', 'many', 'any', 'few'],
      correctAnswer: 'any',
      explanation: 'في السؤال نستخدم any.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'There are ______ students in the class.',
      options: ['much', 'little', 'many', 'a little'],
      correctAnswer: 'many',
      explanation: 'كلمة students معدود، لذا نستخدم many.'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: I have much friends.',
      options: ['I have many friends.', 'I have little friends.', 'I have some friends.'],
      correctAnswer: 'I have many friends.',
      explanation: 'كلمة friends معدود، لذا يجب استخدام many بدلاً من much.'
    },
    {
      id: 'q7',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: There are little apples.',
      options: ['There are few apples.', 'There are much apples.', 'There are any apples.'],
      correctAnswer: 'There are few apples.',
      explanation: 'كلمة apples معدود، لذا نستخدم few بدلاً من little.'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'ترجم: لدي بعض الماء.',
      options: ['I', 'have', 'some', 'water'],
      correctAnswer: ['I', 'have', 'some', 'water'],
      explanation: 'الترجمة الصحيحة هي I have some water.'
    },
    {
      id: 'q9',
      type: 'arrange',
      question: 'ترجم: لا يوجد الكثير من الطلاب.',
      options: ['There', 'aren\'t', 'many', 'students'],
      correctAnswer: ['There', 'aren\'t', 'many', 'students'],
      explanation: 'الترجمة الصحيحة هي There aren\'t many students.'
    },
    {
      id: 'q10',
      type: 'arrange',
      question: 'ترجم: هل لديك أي أسئلة؟',
      options: ['Do', 'you', 'have', 'any', 'questions?'],
      correctAnswer: ['Do', 'you', 'have', 'any', 'questions?'],
      explanation: 'في السؤال نستخدم Do ونستخدم any مع الأسماء المعدودة في صيغة الجمع.'
    },
    {
      id: 'q11',
      type: 'multiple_choice',
      question: 'I have ______ money, so I can buy a sandwich.',
      options: ['little', 'a little', 'few', 'a many'],
      correctAnswer: 'a little',
      explanation: 'نستخدم a little لأن المعنى إيجابي (لديه ما يكفي لشراء ساندوتش) ومع غير المعدود (money).'
    },
    {
      id: 'q12',
      type: 'multiple_choice',
      question: 'There are ______ people at the party, it is very quiet.',
      options: ['few', 'a few', 'little', 'much'],
      correctAnswer: 'few',
      explanation: 'نستخدم few لأن المعنى سلبي (عدد قليل جداً وغير كافٍ لجعل الحفلة صاخبة) ومع المعدود (people).'
    },
    {
      id: 'q13',
      type: 'true_false',
      question: 'We use "any" in positive sentences.',
      correctAnswer: false,
      explanation: 'خطأ ❌. نستخدم any في النفي والسؤال، بينما نستخدم some في الجمل المثبتة.'
    }
  ]
};

export const reportedSpeechLesson: GrammarLessonData = {
  id: 'reported-speech',
  title: 'الكلام المنقول (Reported Speech)',
  description: 'نقل كلام الآخرين 🗣️',
  cards: [
    {
      id: 'c1',
      title: '1. الكلام المباشر (Direct Speech) 🗣️',
      icon: '🗣️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">ما هو الكلام المباشر؟</p>
          <p>هو نقل الكلام كما قيل حرفيًا باستخدام علامات التنصيص " "</p>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 space-y-2">
            <p className="font-bold text-indigo-800">الشكل:</p>
            <p className="text-left font-mono text-indigo-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Subject + verb + " الكلام "</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">أمثلة:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="text-left font-bold text-slate-800">Ali said, "I am tired."</p>
              <p className="text-right text-slate-500" dir="rtl">قال علي: "أنا متعب"</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="text-left font-bold text-slate-800">Sara said, "I will go to school."</p>
              <p className="text-right text-slate-500" dir="rtl">قالت سارة: "سأذهب إلى المدرسة"</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: '2. الكلام غير المباشر (Indirect Speech) 🔄',
      icon: '🔄',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">ما هو الكلام غير المباشر؟</p>
          <p>هو نقل الكلام بالمعنى بدون علامات تنصيص، مع تغيير بعض الكلمات</p>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 space-y-2">
            <p className="font-bold text-indigo-800">الشكل:</p>
            <p className="text-left font-mono text-indigo-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">Subject + said (that) + sentence</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">أمثلة:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="text-left font-bold text-slate-800">Ali said that he was tired.</p>
              <p className="text-right text-slate-500" dir="rtl">قال علي إنه كان متعبًا</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="text-left font-bold text-slate-800">Sara said that she would go to school.</p>
              <p className="text-right text-slate-500" dir="rtl">قالت سارة إنها ستذهب إلى المدرسة</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: '3. تغيير الأزمنة (Tenses) ⏳',
      icon: '⏳',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">القاعدة الذهبية:</p>
          <p>عند التحويل من مباشر إلى غير مباشر، نرجع الزمن خطوة للخلف 👇</p>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-3 border border-indigo-500">مباشر</th>
                  <th className="p-3 border border-indigo-500">غير مباشر</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-3 border border-slate-100 font-mono text-sm">Present Simple</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">Past Simple</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-100 font-mono text-sm">Present Continuous</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">Past Continuous</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-100 font-mono text-sm">Present Perfect</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">Past Perfect</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-100 font-mono text-sm">Past Simple</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">Past Perfect</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-100 font-mono text-sm">will</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">would</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2">
            <p className="font-bold">أمثلة:</p>
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              "I eat food." ➔ He said that he ate food.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              "I am studying." ➔ He said that he was studying.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              "I will travel." ➔ He said that he would travel.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: '4. تغيير الضمائر (Pronouns) 👤',
      icon: '👤',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>نغيّر الضمير حسب المتكلم</p>
          <div className="space-y-3">
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
              <p className="text-left font-mono text-amber-800 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">"I am happy," said Ali</p>
              <p className="text-left font-mono font-bold text-amber-900 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">➔ Ali said that he was happy</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="text-left font-mono text-emerald-800 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">"We are ready," they said</p>
              <p className="text-left font-mono font-bold text-emerald-900 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">➔ They said that they were ready</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: '5. كلمات الزمن والمكان 📍',
      icon: '📍',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-3 border border-indigo-500">مباشر</th>
                  <th className="p-3 border border-indigo-500">غير مباشر</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="p-3 border border-slate-100 font-mono text-sm">now</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">then</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-100 font-mono text-sm">today</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">that day</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-100 font-mono text-sm">tomorrow</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">the next day</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-100 font-mono text-sm">yesterday</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">the day before</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-100 font-mono text-sm">here</td>
                  <td className="p-3 border border-slate-100 font-mono text-sm">there</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-2">
            <p className="font-bold">أمثلة:</p>
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              "I will go tomorrow." ➔ He said that he would go the next day.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              "I am here now." ➔ He said that he was there then.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: '6. الأسئلة (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-800 mb-2">أ) نعم/لا (Yes/No Question)</p>
              <p className="mb-2">نستخدم: <span dir="ltr" className="font-mono font-bold">asked if / whether</span></p>
              <p className="text-left font-mono text-blue-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">"Are you happy?" ➔ He asked if I was happy.</p>
            </div>
            <div className="bg-violet-50 p-4 rounded-xl border border-violet-100">
              <p className="font-bold text-violet-800 mb-2">ب) سؤال بكلمة استفهام (WH Question)</p>
              <p className="mb-2">نحتفظ بالكلمة (what, where, why...)</p>
              <p className="text-left font-mono text-violet-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">"Where do you live?" ➔ He asked where I lived.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c7',
      title: '7. الأوامر (Commands) 📢',
      icon: '📢',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 space-y-2">
            <p className="font-bold text-indigo-800">القاعدة:</p>
            <p className="text-left font-mono text-indigo-600 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">told / asked + person + to + verb</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">أمثلة:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="text-left font-bold text-slate-800">"Close the door."</p>
              <p className="text-left text-slate-500">➔ He told me to close the door.</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 whitespace-nowrap overflow-x-auto custom-scrollbar" dir="ltr">
              <p className="text-left font-bold text-slate-800">"Don’t talk."</p>
              <p className="text-left text-slate-500">➔ He told me not to talk.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c8',
      title: '8. ملخص سريع 🎯',
      icon: '🎯',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">✅ نحذف علامات التنصيص " "</li>
            <li className="flex items-center gap-2">✅ نستخدم that (اختياري)</li>
            <li className="flex items-center gap-2">✅ نرجع الزمن خطوة للخلف</li>
            <li className="flex items-center gap-2">✅ نغير الضمائر حسب المتكلم</li>
            <li className="flex items-center gap-2">✅ نغير كلمات الزمن والمكان</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: '"I am tired," he said. ➔ He said that he ______ tired.',
      options: ['is', 'was', 'will be', 'be'],
      correctAnswer: 'was',
      explanation: 'نحول المضارع (am) إلى الماضي (was) في الكلام المنقول.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: '"I will travel tomorrow," she said. ➔ She said that she ______ travel the next day.',
      options: ['will', 'would', 'can', 'is'],
      correctAnswer: 'would',
      explanation: 'نحول will إلى would في الكلام المنقول.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: '"We are playing," they said. ➔ They said that they ______ playing.',
      options: ['are', 'were', 'was', 'be'],
      correctAnswer: 'were',
      explanation: 'نحول are إلى were لأن الفاعل جمع (they) والزمن يعود للماضي.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: '"Do you like coffee?" he said. ➔ He asked if I ______ coffee.',
      options: ['like', 'liked', 'will like', 'am liking'],
      correctAnswer: 'liked',
      explanation: 'في السؤال المنقول، نحول المضارع البسيط إلى ماضي بسيط.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: He said that he is tired.',
      options: ['He said that he was tired.', 'He said that he will be tired.', 'He said that he tired.'],
      correctAnswer: 'He said that he was tired.',
      explanation: 'يجب تحويل الفعل إلى الماضي (was) بدلاً من المضارع (is).'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'صحّح الخطأ: She said that she will go tomorrow.',
      options: ['She said that she would go the next day.', 'She said that she goes tomorrow.', 'She said that she went tomorrow.'],
      correctAnswer: 'She said that she would go the next day.',
      explanation: 'يجب تحويل will إلى would وتغيير tomorrow إلى the next day.'
    },
    {
      id: 'q7',
      type: 'arrange',
      question: 'ترجم: قال: "أنا سأدرس"',
      options: ['He', 'said', 'that', 'he', 'would', 'study'],
      correctAnswer: ['He', 'said', 'that', 'he', 'would', 'study'],
      explanation: 'نحول "I will study" إلى "he would study".'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'ترجم: قال: "أين تسكن؟"',
      options: ['He', 'asked', 'where', 'I', 'lived'],
      correctAnswer: ['He', 'asked', 'where', 'I', 'lived'],
      explanation: 'في السؤال المنقول، نستخدم asked ونحول الفعل للماضي (lived).'
    },
    {
      id: 'q9',
      type: 'arrange',
      question: 'ترجم: قال إنه كان متعبًا.',
      options: ['He', 'said', 'that', 'he', 'was', 'tired'],
      correctAnswer: ['He', 'said', 'that', 'he', 'was', 'tired'],
      explanation: 'نحول "I am tired" إلى "he was tired".'
    },
    {
      id: 'q10',
      type: 'arrange',
      question: 'ترجم: قالت إنها ستذهب إلى المدرسة.',
      options: ['She', 'said', 'that', 'she', 'would', 'go', 'to', 'school'],
      correctAnswer: ['She', 'said', 'that', 'she', 'would', 'go', 'to', 'school'],
      explanation: 'نحول "I will go" إلى "she would go".'
    }
  ]
};


export const sentenceBuildingLesson: GrammarLessonData = {
  id: 'sentence-building',
  title: 'فن بناء الجملة (Sentence Building)',
  description: 'تعلم كيف تبني جملة احترافية بكل سهولة! 🏗️',
  cards: [
    {
      id: 'sb1',
      title: 'مكونات الجملة الأساسية 🧩',
      icon: '🏛️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <p className="text-lg text-slate-700 leading-relaxed">
            الجملة في الإنجليزية مثل البناء، تحتاج إلى أساس قوي! تتكون الجملة البسيطة من:
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-3xl flex items-center justify-between group hover:scale-[1.02] transition-all cursor-default">
              <div className="text-4xl">👤</div>
              <div className="flex-1 mr-6">
                <h4 className="text-xl font-black text-blue-700">الفاعل (Subject)</h4>
                <p className="text-sm text-blue-600/80 font-bold">هو من يقوم بالفعل (I, He, She, Ali...)</p>
              </div>
            </div>
            <div className="p-6 bg-rose-50 border-2 border-rose-200 rounded-3xl flex items-center justify-between group hover:scale-[1.02] transition-all cursor-default">
              <div className="text-4xl">⚡</div>
              <div className="flex-1 mr-6">
                <h4 className="text-xl font-black text-rose-700">الفعل (Verb)</h4>
                <p className="text-sm text-rose-600/80 font-bold">هو الحركة أو الحالة (play, eat, is...)</p>
              </div>
            </div>
            <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-3xl flex items-center justify-between group hover:scale-[1.02] transition-all cursor-default">
              <div className="text-4xl">📦</div>
              <div className="flex-1 mr-6">
                <h4 className="text-xl font-black text-emerald-700">المفعول (Object)</h4>
                <p className="text-sm text-emerald-600/80 font-bold">هو ما وقع عليه الفعل (football, apple...)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sb2',
      title: 'النمط الذهبي (S-V-O) ✨',
      icon: '📏',
      content: (
        <div className="space-y-8 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-slate-900 rounded-[2.5rem] shadow-2xl border-4 border-slate-800">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-2">S</div>
              <span className="text-xs text-blue-300 font-bold uppercase tracking-widest">Subject</span>
            </div>
            <div className="text-slate-600 text-2xl font-black">→</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-2">V</div>
              <span className="text-xs text-rose-300 font-bold uppercase tracking-widest">Verb</span>
            </div>
            <div className="text-slate-600 text-2xl font-black">→</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-2">O</div>
              <span className="text-xs text-emerald-300 font-bold uppercase tracking-widest">Object</span>
            </div>
          </div>
          
          <div className="p-8 bg-white border-4 border-indigo-50 rounded-[3rem] shadow-inner space-y-4">
            <p className="text-4xl font-black text-slate-800 tracking-tight">
              <span className="text-blue-600">Ali</span> <span className="text-rose-600">eats</span> <span className="text-emerald-600">an apple</span>.
            </p>
            <div className="h-1 w-24 bg-indigo-100 mx-auto rounded-full" />
            <p className="text-xl font-bold text-slate-400" dir="rtl">علي يأكل تفاحة.</p>
          </div>
        </div>
      )
    },
    {
      id: 'sb3',
      title: 'تحدي التركيب! 🏗️',
      icon: '🎮',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <p className="text-lg text-slate-700 font-bold">انظر كيف تتغير الجملة بإضافة تفاصيل بسيطة:</p>
          <div className="space-y-4">
            <div className="p-5 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
              <p className="text-sm text-slate-400 mb-1">المستوى 1: جملة بسيطة</p>
              <p className="text-2xl font-black text-slate-800">I read a book.</p>
            </div>
            <div className="p-5 bg-indigo-50 border-2 border-indigo-100 rounded-2xl shadow-sm">
              <p className="text-sm text-indigo-400 mb-1">المستوى 2: إضافة وصف (Adjective)</p>
              <p className="text-2xl font-black text-slate-800">I read an <span className="text-indigo-600 underline decoration-wavy">interesting</span> book.</p>
            </div>
            <div className="p-5 bg-amber-50 border-2 border-amber-100 rounded-2xl shadow-sm">
              <p className="text-sm text-amber-500 mb-1">المستوى 3: إضافة زمان (Time)</p>
              <p className="text-2xl font-black text-slate-800">I read an interesting book <span className="text-amber-600 underline decoration-wavy">every night</span>.</p>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'arrange',
      question: 'رتب الجملة التالية بشكل صحيح:',
      correctAnswer: ['I', 'play', 'football', 'well'],
      explanation: 'نبدأ بالفاعل (I) ثم الفعل (play) ثم المفعول (football) ثم الحال (well).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'أي من الكلمات التالية تعتبر "Subject" في هذه الجملة: "The cat sleeps on the sofa."',
      options: ['The cat', 'sleeps', 'on', 'the sofa'],
      correctAnswer: 'The cat',
      explanation: 'القطة هي من تقوم بفعل النوم، لذا فهي الفاعل.'
    }
  ]
};

export const allGrammarLessons: GrammarLessonData[] = [
  presentSimpleLesson,
  presentContinuousLesson,
  pastSimpleLesson,
  futureSimpleLesson,
  pastContinuousLesson,
  presentPerfectLesson,
  pastPerfectLesson,
  futureFormsLesson,
  countableUncountableLesson,
  conditionalsLesson,
  passiveVoiceLesson,
  modalsLesson,
  relativeClausesLesson,
  linkingWordsLesson,
  comparativesLesson,
  questionTagsLesson,
  politeRequestsLesson,
  givingAdviceLesson,
  quantityLesson,
  reportedSpeechLesson,
  sentenceBuildingLesson
];
