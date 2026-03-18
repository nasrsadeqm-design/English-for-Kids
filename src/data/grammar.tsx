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
      id: 'c1',
      title: 'مرحباً بك يا بطل! 👋',
      icon: '🚀',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>
            هيا بنا نتعلم كيف تحكي عن يومك وعاداتك! 
            نستخدم <strong>المضارع البسيط</strong> عندما نتحدث عن أشياء نفعلها كل يوم (عادات)، أو حقائق ثابتة لا تتغير (مثل: الشمس تشرق من الشرق ☀️).
          </p>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'متى نستخدم القاعدة؟ 🕐',
      icon: '💡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>العادات اليومية:</strong> أشياء تفعلها دائماً (أنا أستيقظ مبكراً).</li>
            <li><strong>الحقائق الثابتة:</strong> أشياء لا تتغير (الماء يغلي عند 100 درجة).</li>
            <li><strong>المواعيد الثابتة:</strong> (القطار يغادر الساعة 7).</li>
          </ul>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'كيف نبني الجملة؟ 🧩',
      icon: '🛠️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-emerald-50 border-2 border-emerald-100 rounded-2xl">
            <h4 className="font-black text-emerald-700 mb-2 flex items-center gap-2">✅ الإثبات (Positive)</h4>
            <div className="space-y-2" dir="ltr">
              <p className="text-xl"><CText text="👥 I/You/We/They" type="subject" /> + <CText text="Verb (بدون إضافة)" type="verb" /></p>
              <p className="text-xl"><CText text="👤 He/She/It" type="subject" /> + <CText text="Verb + s/es" type="verb" /></p>
            </div>
          </div>

          <div className="p-4 bg-red-50 border-2 border-red-100 rounded-2xl">
            <h4 className="font-black text-red-700 mb-2 flex items-center gap-2">❌ النفي (Negative)</h4>
            <div className="space-y-2" dir="ltr">
              <p className="text-xl"><CText text="👥 I/You/We/They" type="subject" /> + <CText text="don't" type="particle" /> + <CText text="Verb" type="verb" /></p>
              <p className="text-xl"><CText text="👤 He/She/It" type="subject" /> + <CText text="doesn't" type="particle" /> + <CText text="Verb" type="verb" /></p>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border-2 border-blue-100 rounded-2xl">
            <h4 className="font-black text-blue-700 mb-2 flex items-center gap-2">❓ السؤال (Question)</h4>
            <div className="space-y-2" dir="ltr">
              <p className="text-xl"><CText text="Do" type="particle" /> + <CText text="👥 I/You/We/They" type="subject" /> + <CText text="Verb" type="verb" />?</p>
              <p className="text-xl"><CText text="Does" type="particle" /> + <CText text="👤 He/She/It" type="subject" /> + <CText text="Verb" type="verb" />?</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c4',
      title: 'أمثلة ملونة 🎨',
      icon: '📝',
      content: (
        <div className="space-y-4 text-2xl" dir="ltr">
          <div className="p-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
            <CText text="I" type="subject" />
            <CText text="play" type="verb" />
            <CText text="football" type="complement" />
            <CText text="every day." type="particle" />
            <p className="text-sm text-slate-400 mt-2 text-right" dir="rtl">أنا ألعب كرة القدم كل يوم.</p>
          </div>
          <div className="p-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
            <CText text="She" type="subject" />
            <CText text="likes" type="verb" />
            <CText text="apples." type="complement" />
            <p className="text-sm text-slate-400 mt-2 text-right" dir="rtl">هي تحب التفاح. (لاحظ إضافة s للفعل لأن الفاعل مفرد)</p>
          </div>
          <div className="p-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
            <CText text="We" type="subject" />
            <CText text="don't" type="particle" />
            <CText text="go" type="verb" />
            <CText text="to school" type="complement" />
            <CText text="on Friday." type="particle" />
            <p className="text-sm text-slate-400 mt-2 text-right" dir="rtl">نحن لا نذهب إلى المدرسة يوم الجمعة.</p>
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: 'الكلمات الدالة (Keywords) 🗝️',
      icon: '🗝️',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <p className="text-lg text-slate-700">إذا رأيت هذه الكلمات في الجملة، فاعلم أننا غالباً نستخدم المضارع البسيط:</p>
          <div className="flex flex-wrap gap-3" dir="ltr">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-black text-lg">always (دائماً)</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-black text-lg">usually (عادةً)</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-black text-lg">often (غالباً)</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-black text-lg">sometimes (أحياناً)</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-black text-lg">never (أبداً)</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-black text-lg">every... (كل...)</span>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: 'ملاحظات واستثناءات هامة ⚠️',
      icon: '⚠️',
      content: (
        <div className="space-y-4 text-right" dir="rtl">
          <div className="p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl">
            <p className="text-lg text-slate-800 font-bold mb-2">متى نضيف (es) بدلاً من (s) مع المفرد (He/She/It)؟</p>
            <p className="text-slate-700">إذا انتهى الفعل بأحد هذه الحروف: <strong>o, ch, sh, ss, x</strong></p>
            <div className="mt-3 space-y-2" dir="ltr">
              <p className="text-xl font-black text-slate-800">go ➡️ go<span className="text-red-500">es</span></p>
              <p className="text-xl font-black text-slate-800">watch ➡️ watch<span className="text-red-500">es</span></p>
              <p className="text-xl font-black text-slate-800">wash ➡️ wash<span className="text-red-500">es</span></p>
            </div>
          </div>
        </div>
      )
    }
  ],
  quiz: [
    // True / False
    {
      id: 'q1',
      type: 'true_false',
      question: 'He play football every day.',
      correctAnswer: false,
      explanation: 'خطأ ❌. الفاعل مفرد (He) لذلك يجب أن نضيف s للفعل ليصبح plays.'
    },
    {
      id: 'q2',
      type: 'true_false',
      question: 'We don\'t like fish.',
      correctAnswer: true,
      explanation: 'صحيح ✅. نستخدم don\'t للنفي مع الضمير We.'
    },
    {
      id: 'q3',
      type: 'true_false',
      question: 'Does she goes to school?',
      correctAnswer: false,
      explanation: 'خطأ ❌. في السؤال مع Does، يعود الفعل لحالته الأصلية بدون إضافات (go).'
    },
    // Multiple Choice
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'She _____ to school every day.',
      options: ['go', 'goes', 'went', 'going'],
      correctAnswer: 'goes',
      explanation: 'لأن الفاعل مفرد (She) والجملة في المضارع البسيط (every day).'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'They _____ play tennis.',
      options: ['doesn\'t', 'aren\'t', 'don\'t', 'isn\'t'],
      correctAnswer: 'don\'t',
      explanation: 'نستخدم don\'t لنفي المضارع البسيط مع الضمير الجمع (They).'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: '_____ you like pizza?',
      options: ['Do', 'Does', 'Are', 'Is'],
      correctAnswer: 'Do',
      explanation: 'نسأل بـ Do مع الضمير you.'
    },
    // Arrange
    {
      id: 'q7',
      type: 'arrange',
      question: 'every / plays / Friday / He / football',
      correctAnswer: ['He', 'plays', 'football', 'every', 'Friday'],
      explanation: 'الفاعل (He) ثم الفعل (plays) ثم المفعول به (football) ثم ظرف الزمان (every Friday).'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'usually / I / early / wake up',
      correctAnswer: ['I', 'usually', 'wake up', 'early'],
      explanation: 'ظرف التكرار (usually) يأتي قبل الفعل الأساسي (wake up).'
    }
  ]
};

export const pastSimpleLesson: GrammarLessonData = {
  id: 'past-simple',
  title: 'الماضي البسيط (Past Simple)',
  description: 'أحداث بدأت وانتهت في الماضي ⏳',
  cards: [
    {
      id: 'c1',
      title: 'مرحباً بك يا بطل! 👋',
      icon: '🚀',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>
            هيا بنا نتعلم كيف نتحدث عن الماضي! 
            نستخدم <strong>الماضي البسيط</strong> عندما نتحدث عن أشياء حدثت وانتهت في الماضي (مثل: أنا لعبت الكرة أمس ⚽).
          </p>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'متى نستخدم القاعدة؟ 🕐',
      icon: '💡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>أحداث منتهية:</strong> شيء حدث وانتهى (سافرت إلى مصر العام الماضي).</li>
            <li><strong>عادات في الماضي:</strong> أشياء كنت تفعلها في الماضي (كنت ألعب التنس عندما كنت صغيراً).</li>
            <li><strong>قصص:</strong> لسرد أحداث قصة في الماضي.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'كيف نبني الجملة؟ 🧩',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">1. الإثبات (Positive) ✅</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل في التصريف الثاني (ed أو شاذ)" type="verb" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="باقي الجملة" type="complement" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">2. النفي (Negative) ❌</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="didn't" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل في المصدر" type="verb" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">3. السؤال (Question) ❓</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="Did" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل في المصدر" type="verb" />
              <span className="text-slate-400 font-black">?</span>
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
        <div className="space-y-4 text-2xl text-left font-medium" dir="ltr">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="He" type="subject" />
            <CText text="played" type="verb" />
            <CText text="football yesterday." type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="We" type="subject" />
            <CText text="didn't" type="particle" />
            <CText text="go" type="verb" />
            <CText text="to school." type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="Did" type="particle" />
            <CText text="she" type="subject" />
            <CText text="see" type="verb" />
            <CText text="the movie?" type="complement" />
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: 'الكلمات الدالة 🗝️',
      icon: '🔑',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>عندما ترى هذه الكلمات، فغالباً الجملة في الماضي البسيط:</p>
          <div className="grid grid-cols-2 gap-4 text-center font-bold text-xl mt-4" dir="ltr">
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">yesterday</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">last (week/year)</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">ago</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">in 2010</div>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: 'ملاحظات هامة ⚠️',
      icon: '⭐',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>
            هناك نوعان من الأفعال في الماضي:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>أفعال منتظمة (Regular):</strong> نضيف لها ed (مثل: <span dir="ltr" className="inline-block mx-1">play ➔ played</span>).</li>
            <li><strong>أفعال شاذة (Irregular):</strong> يتغير شكلها ويجب حفظها (مثل: <span dir="ltr" className="inline-block mx-1">go ➔ went, see ➔ saw</span>).</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'true_false',
      question: 'He played football yesterday.',
      correctAnswer: true,
      explanation: 'صحيح ✅. الجملة في الماضي البسيط (yesterday) والفعل مضاف له ed.'
    },
    {
      id: 'q2',
      type: 'true_false',
      question: 'We didn\'t went to school.',
      correctAnswer: false,
      explanation: 'خطأ ❌. بعد didn\'t يجب أن يأتي الفعل في المصدر (go) وليس (went).'
    },
    {
      id: 'q3',
      type: 'true_false',
      question: 'Did she saw the movie?',
      correctAnswer: false,
      explanation: 'خطأ ❌. في السؤال مع Did، يعود الفعل لحالته الأصلية في المصدر (see).'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'She _____ to school yesterday.',
      options: ['go', 'goes', 'went', 'going'],
      correctAnswer: 'went',
      explanation: 'لأن الجملة في الماضي (yesterday)، نستخدم التصريف الثاني للفعل go وهو went.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'They _____ play tennis last week.',
      options: ['didn\'t', 'don\'t', 'doesn\'t', 'aren\'t'],
      correctAnswer: 'didn\'t',
      explanation: 'نستخدم didn\'t لنفي الماضي البسيط (last week).'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: '_____ you like the pizza yesterday?',
      options: ['Do', 'Does', 'Did', 'Are'],
      correctAnswer: 'Did',
      explanation: 'نسأل بـ Did في الماضي البسيط.'
    },
    {
      id: 'q7',
      type: 'arrange',
      question: 'yesterday / played / He / football',
      correctAnswer: ['He', 'played', 'football', 'yesterday'],
      explanation: 'الفاعل (He) ثم الفعل (played) ثم المفعول به (football) ثم ظرف الزمان (yesterday).'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'didn\'t / I / early / wake up',
      correctAnswer: ['I', 'didn\'t', 'wake up', 'early'],
      explanation: 'أداة النفي (didn\'t) تأتي قبل الفعل الأساسي (wake up).'
    }
  ]
};

export const presentContinuousLesson: GrammarLessonData = {
  id: 'present-continuous',
  title: 'المضارع المستمر (Present Continuous)',
  description: 'أحداث تقع الآن في لحظة الكلام 🏃‍♂️',
  cards: [
    {
      id: 'c1',
      title: 'مرحباً بك يا بطل! 👋',
      icon: '🚀',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>
            هيا بنا نتعلم كيف نتحدث عما نفعله الآن! 
            نستخدم <strong>المضارع المستمر</strong> عندما نتحدث عن أشياء تحدث الآن في هذه اللحظة ولم تنتهِ بعد (مثل: أنا أقرأ كتاباً الآن 📖).
          </p>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'متى نستخدم القاعدة؟ 🕐',
      icon: '💡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>أحداث تقع الآن:</strong> شيء يحدث في لحظة الكلام (إنها تمطر الآن).</li>
            <li><strong>أحداث مؤقتة:</strong> شيء تفعله هذه الأيام فقط (أنا أدرس الفرنسية هذا الشهر).</li>
            <li><strong>خطط مستقبلية مؤكدة:</strong> (سأسافر غداً).</li>
          </ul>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'كيف نبني الجملة؟ 🧩',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">1. الإثبات (Positive) ✅</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="am / is / are" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل + ing" type="verb" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">2. النفي (Negative) ❌</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="am not / isn't / aren't" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل + ing" type="verb" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">3. السؤال (Question) ❓</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="Am / Is / Are" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل + ing" type="verb" />
              <span className="text-slate-400 font-black">?</span>
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
        <div className="space-y-4 text-2xl text-left font-medium" dir="ltr">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="He" type="subject" />
            <CText text="is" type="particle" />
            <CText text="playing" type="verb" />
            <CText text="football now." type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="We" type="subject" />
            <CText text="aren't" type="particle" />
            <CText text="watching" type="verb" />
            <CText text="TV." type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="Is" type="particle" />
            <CText text="she" type="subject" />
            <CText text="reading" type="verb" />
            <CText text="a book?" type="complement" />
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: 'الكلمات الدالة 🗝️',
      icon: '🔑',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>عندما ترى هذه الكلمات، فغالباً الجملة في المضارع المستمر:</p>
          <div className="grid grid-cols-2 gap-4 text-center font-bold text-xl mt-4" dir="ltr">
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">now</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">at the moment</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">Look!</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">Listen!</div>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: 'ملاحظات هامة ⚠️',
      icon: '⭐',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>
            هناك أفعال تسمى (أفعال الحالة Stative Verbs) لا نستخدمها عادة في المضارع المستمر، بل نستخدمها في المضارع البسيط حتى لو كانت تحدث الآن.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>أفعال الشعور: like, love, hate</li>
            <li>أفعال الإدراك: know, understand, believe</li>
            <li>أفعال الحواس: see, hear, smell</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'true_false',
      question: 'He is playing football now.',
      correctAnswer: true,
      explanation: 'صحيح ✅. الجملة في المضارع المستمر (now) والفعل مضاف له ing ويسبقه is.'
    },
    {
      id: 'q2',
      type: 'true_false',
      question: 'We are play tennis.',
      correctAnswer: false,
      explanation: 'خطأ ❌. يجب إضافة ing للفعل بعد are ليصبح playing.'
    },
    {
      id: 'q3',
      type: 'true_false',
      question: 'Is she watching TV?',
      correctAnswer: true,
      explanation: 'صحيح ✅. هذا سؤال صحيح في المضارع المستمر.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'She _____ to school now.',
      options: ['is going', 'go', 'goes', 'going'],
      correctAnswer: 'is going',
      explanation: 'لأن الجملة تحدث الآن (now)، نستخدم is + v-ing.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'They _____ playing tennis at the moment.',
      options: ['aren\'t', 'don\'t', 'doesn\'t', 'didn\'t'],
      correctAnswer: 'aren\'t',
      explanation: 'نستخدم aren\'t لنفي المضارع المستمر مع الضمير الجمع (They).'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: '_____ you watching the movie?',
      options: ['Are', 'Do', 'Does', 'Did'],
      correctAnswer: 'Are',
      explanation: 'نسأل بـ Are في المضارع المستمر مع الضمير you.'
    },
    {
      id: 'q7',
      type: 'arrange',
      question: 'now / is / He / playing / football',
      correctAnswer: ['He', 'is', 'playing', 'football', 'now'],
      explanation: 'الفاعل (He) ثم (is) ثم الفعل (playing) ثم المفعول به (football) ثم ظرف الزمان (now).'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'aren\'t / We / TV / watching',
      correctAnswer: ['We', 'aren\'t', 'watching', 'TV'],
      explanation: 'الفاعل (We) ثم أداة النفي (aren\'t) ثم الفعل (watching) ثم المفعول به (TV).'
    }
  ]
};

export const futureSimpleLesson: GrammarLessonData = {
  id: 'future-simple',
  title: 'المستقبل البسيط (Future Simple)',
  description: 'أحداث سوف تقع في المستقبل 🚀',
  cards: [
    {
      id: 'c1',
      title: 'مرحباً بك يا بطل! 👋',
      icon: '🚀',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>
            هيا بنا نتعلم كيف نتحدث عن المستقبل! 
            نستخدم <strong>المستقبل البسيط</strong> عندما نتحدث عن أشياء سوف تحدث في المستقبل (مثل: أنا سوف أسافر غداً ✈️).
          </p>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'متى نستخدم القاعدة؟ 🕐',
      icon: '💡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>تنبؤات:</strong> أعتقد أنها ستمطر غداً.</li>
            <li><strong>قرارات سريعة:</strong> الباب يطرق، أنا سأفتحه!</li>
            <li><strong>وعود:</strong> أعدك أنني سأساعدك.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'كيف نبني الجملة؟ 🧩',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">1. الإثبات (Positive) ✅</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="will" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل في المصدر" type="verb" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">2. النفي (Negative) ❌</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="won't" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل في المصدر" type="verb" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">3. السؤال (Question) ❓</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="Will" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل في المصدر" type="verb" />
              <span className="text-slate-400 font-black">?</span>
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
        <div className="space-y-4 text-2xl text-left font-medium" dir="ltr">
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="He" type="subject" />
            <CText text="will" type="particle" />
            <CText text="play" type="verb" />
            <CText text="football tomorrow." type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="We" type="subject" />
            <CText text="won't" type="particle" />
            <CText text="go" type="verb" />
            <CText text="to school." type="complement" />
          </div>
          <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <CText text="Will" type="particle" />
            <CText text="she" type="subject" />
            <CText text="see" type="verb" />
            <CText text="the movie?" type="complement" />
          </div>
        </div>
      )
    },
    {
      id: 'c5',
      title: 'الكلمات الدالة 🗝️',
      icon: '🔑',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>عندما ترى هذه الكلمات، فغالباً الجملة في المستقبل البسيط:</p>
          <div className="grid grid-cols-2 gap-4 text-center font-bold text-xl mt-4" dir="ltr">
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">tomorrow</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">next (week/year)</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">soon</div>
            <div className="bg-indigo-50 text-indigo-700 p-3 rounded-xl">in the future</div>
          </div>
        </div>
      )
    },
    {
      id: 'c6',
      title: 'ملاحظات هامة ⚠️',
      icon: '⭐',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>
            يمكننا أيضاً استخدام <strong>(am/is/are going to)</strong> للتعبير عن المستقبل، ولكن نستخدمها عندما نكون قد خططنا للشيء مسبقاً.
          </p>
          <p className="text-left bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
            I am <strong>going to</strong> visit my grandma tomorrow. (مخطط لذلك)
          </p>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'true_false',
      question: 'He will play football tomorrow.',
      correctAnswer: true,
      explanation: 'صحيح ✅. الجملة في المستقبل (tomorrow) والفعل في المصدر بعد will.'
    },
    {
      id: 'q2',
      type: 'true_false',
      question: 'We won\'t went to school.',
      correctAnswer: false,
      explanation: 'خطأ ❌. بعد won\'t يجب أن يأتي الفعل في المصدر (go) وليس (went).'
    },
    {
      id: 'q3',
      type: 'true_false',
      question: 'Will she see the movie?',
      correctAnswer: true,
      explanation: 'صحيح ✅. هذا سؤال صحيح في المستقبل البسيط.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'She _____ to school tomorrow.',
      options: ['will go', 'go', 'goes', 'going'],
      correctAnswer: 'will go',
      explanation: 'لأن الجملة في المستقبل (tomorrow)، نستخدم will + المصدر.'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'They _____ play tennis next week.',
      options: ['won\'t', 'don\'t', 'doesn\'t', 'didn\'t'],
      correctAnswer: 'won\'t',
      explanation: 'نستخدم won\'t لنفي المستقبل البسيط (next week).'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: '_____ you like the pizza tomorrow?',
      options: ['Will', 'Do', 'Does', 'Are'],
      correctAnswer: 'Will',
      explanation: 'نسأل بـ Will في المستقبل البسيط.'
    },
    {
      id: 'q7',
      type: 'arrange',
      question: 'tomorrow / will / He / play / football',
      correctAnswer: ['He', 'will', 'play', 'football', 'tomorrow'],
      explanation: 'الفاعل (He) ثم (will) ثم الفعل (play) ثم المفعول به (football) ثم ظرف الزمان (tomorrow).'
    },
    {
      id: 'q8',
      type: 'arrange',
      question: 'won\'t / I / early / wake up',
      correctAnswer: ['I', 'won\'t', 'wake up', 'early'],
      explanation: 'أداة النفي (won\'t) تأتي قبل الفعل الأساسي (wake up).'
    }
  ]
};

export const pastContinuousLesson: GrammarLessonData = {
  id: 'past-continuous',
  title: 'الماضي المستمر (Past Continuous)',
  description: 'حدث كان مستمراً في الماضي عندما قطعه حدث آخر ⏳',
  cards: [
    {
      id: 'c1',
      title: 'مرحباً بك! 👋',
      icon: '🚀',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>
            نستخدم <strong>الماضي المستمر</strong> للتحدث عن حدث كان مستمراً لفترة في الماضي، وغالباً ما يقطعه حدث آخر (ماضي بسيط).
          </p>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'كيف نبني الجملة؟ 🧩',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">الإثبات ✅</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="was / were" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="الفعل + ing" type="verb" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'أدوات الربط (when / while) 🔗',
      icon: '🔗',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>While / As / Just as (بينما):</strong> يأتي بعدها (ماضي مستمر)، والحدث القاطع (ماضي بسيط).
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                <CText text="While" type="particle" /> I <CText text="was studying" type="verb" />, the phone <CText text="rang" type="verb" />.
              </div>
            </li>
            <li>
              <strong>When (عندما):</strong> يأتي بعدها غالباً (ماضي بسيط)، والحدث الآخر (ماضي مستمر).
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                <CText text="When" type="particle" /> the phone <CText text="rang" type="verb" />, I <CText text="was studying" type="verb" />.
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
      question: 'While I _____ TV, my father came.',
      options: ['watch', 'watched', 'was watching', 'am watching'],
      correctAnswer: 'was watching',
      explanation: 'بعد While نستخدم الماضي المستمر (was/were + v-ing).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'When she _____, we were sleeping.',
      options: ['arrives', 'arrived', 'was arriving', 'arrive'],
      correctAnswer: 'arrived',
      explanation: 'بعد When نستخدم الماضي البسيط (arrived).'
    },
    {
      id: 'q3',
      type: 'true_false',
      question: 'While he was reading, the light went out.',
      correctAnswer: true,
      explanation: 'صحيح ✅. الحدث المستمر (was reading) قطعه حدث مفاجئ (went out).'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'They _____ playing football when it started to rain.',
      options: ['was', 'were', 'are', 'have'],
      correctAnswer: 'were',
      explanation: 'الفاعل They يأخذ were في الماضي المستمر.'
    },
    {
      id: 'q5',
      type: 'arrange',
      question: 'was / I / sleeping / when / you / called',
      correctAnswer: ['I', 'was', 'sleeping', 'when', 'you', 'called'],
      explanation: 'الحدث المستمر (I was sleeping) ثم أداة الربط (when) ثم الحدث القاطع (you called).'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: 'Just as we _____ the house, the phone rang.',
      options: ['leave', 'left', 'were leaving', 'are leaving'],
      correctAnswer: 'were leaving',
      explanation: 'Just as تعمل مثل While ويأتي بعدها ماضي مستمر.'
    }
  ]
};

export const presentPerfectLesson: GrammarLessonData = {
  id: 'present-perfect',
  title: 'المضارع التام (Present Perfect)',
  description: 'حدث تم في الماضي وله أثر في الحاضر 🌉',
  cards: [
    {
      id: 'c1',
      title: 'كيف نبني الجملة؟ 🧩',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">الإثبات ✅</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="have / has" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="التصريف الثالث (P.P)" type="verb" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'الكلمات الدالة 🗝️',
      icon: '🔑',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Since:</strong> يتبعها بداية المدة (since 2010, since Monday).</li>
            <li><strong>For:</strong> يتبعها طول المدة (for 3 years, for a week).</li>
            <li><strong>Just / Already:</strong> تأتي بين (have/has) والتصريف الثالث.</li>
            <li><strong>Yet:</strong> تأتي في نهاية الجملة المنفية والسؤال.</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'I have lived here _____ 2015.',
      options: ['for', 'since', 'ago', 'in'],
      correctAnswer: 'since',
      explanation: 'نستخدم since لأن 2015 هي نقطة بداية الحدث.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'She hasn\'t finished her homework _____.',
      options: ['just', 'already', 'yet', 'since'],
      correctAnswer: 'yet',
      explanation: 'نستخدم yet في نهاية الجملة المنفية في المضارع التام.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'We have known each other _____ five years.',
      options: ['since', 'for', 'from', 'in'],
      correctAnswer: 'for',
      explanation: 'نستخدم for لأن five years هي مدة زمنية كاملة.'
    },
    {
      id: 'q4',
      type: 'true_false',
      question: 'He has just left the building.',
      correctAnswer: true,
      explanation: 'صحيح ✅. just تأتي بين has والتصريف الثالث (left).'
    },
    {
      id: 'q5',
      type: 'arrange',
      question: 'have / I / already / seen / that movie',
      correctAnswer: ['I', 'have', 'already', 'seen', 'that movie'],
      explanation: 'already تأتي بين have والتصريف الثالث (seen).'
    },
    {
      id: 'q6',
      type: 'multiple_choice',
      question: '_____ you ever been to Paris?',
      options: ['Do', 'Did', 'Have', 'Has'],
      correctAnswer: 'Have',
      explanation: 'نسأل بـ Have في المضارع التام مع الفاعل you.'
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
      title: 'كيف نبني الجملة؟ 🧩',
      icon: '🏗️',
      content: (
        <div className="space-y-6 text-right" dir="rtl">
          <div className="p-4 bg-white rounded-2xl border-2 border-slate-100 shadow-sm">
            <h4 className="font-black text-slate-800 mb-3 text-xl">الإثبات ✅</h4>
            <div className="flex flex-wrap gap-2 text-xl items-center bg-slate-50 p-3 rounded-xl">
              <CText text="الفاعل" type="subject" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="had" type="particle" />
              <span className="text-slate-400 font-black">+</span>
              <CText text="التصريف الثالث (P.P)" type="verb" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'أدوات الربط 🔗',
      icon: '🔗',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>After / As soon as:</strong> (بعد) يتبعها الحدث الأول (ماضي تام)، ثم الحدث الثاني (ماضي بسيط).
            </li>
            <li>
              <strong>Before / By the time:</strong> (قبل) يتبعها الحدث الثاني (ماضي بسيط)، ثم الحدث الأول (ماضي تام).
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
      question: 'After he _____ his homework, he went out.',
      options: ['finishes', 'finished', 'has finished', 'had finished'],
      correctAnswer: 'had finished',
      explanation: 'بعد After نستخدم الماضي التام (الحدث الأول).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'Before I arrived, the train _____.',
      options: ['leaves', 'left', 'has left', 'had left'],
      correctAnswer: 'had left',
      explanation: 'بعد Before يأتي ماضي بسيط، والحدث الآخر يكون ماضي تام (الحدث الذي وقع أولاً).'
    },
    {
      id: 'q3',
      type: 'true_false',
      question: 'By the time she came, we had eaten dinner.',
      correctAnswer: true,
      explanation: 'صحيح ✅. By the time يتبعها ماضي بسيط (came) والحدث الآخر ماضي تام (had eaten).'
    },
    {
      id: 'q4',
      type: 'arrange',
      question: 'had / I / TV / watched / before / I / slept',
      correctAnswer: ['I', 'had', 'watched', 'TV', 'before', 'I', 'slept'],
      explanation: 'الحدث الأول (I had watched TV) ثم أداة الربط (before) ثم الحدث الثاني (I slept).'
    },
    {
      id: 'q5',
      type: 'multiple_choice',
      question: 'As soon as he _____ the news, he called me.',
      options: ['hears', 'heard', 'had heard', 'hearing'],
      correctAnswer: 'had heard',
      explanation: 'As soon as تعمل مثل After، ويتبعها ماضي تام.'
    }
  ]
};

export const futureFormsLesson: GrammarLessonData = {
  id: 'future-forms',
  title: 'أشكال المستقبل (Future Forms)',
  description: 'طرق مختلفة للتعبير عن المستقبل 🔮',
  cards: [
    {
      id: 'c1',
      title: 'متى نستخدم (going to)؟ 🎯',
      icon: '🎯',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>الخطط والنوايا:</strong> أشياء قررنا فعلها مسبقاً.</li>
            <li><strong>تنبؤ بدليل:</strong> (السماء غائمة، سوف تمطر).</li>
          </ul>
          <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
            I am <CText text="going to" type="particle" /> <CText text="visit" type="verb" /> my uncle.
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'المضارع المستمر للمستقبل 📅',
      icon: '📅',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>نستخدم المضارع المستمر (am/is/are + v-ing) للتعبير عن <strong>ترتيبات مستقبلية مؤكدة</strong> (مثل حجز التذاكر).</p>
          <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
            I <CText text="am traveling" type="verb" /> to London tomorrow. (I have the tickets)
          </div>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'Look at those dark clouds! It _____ rain.',
      options: ['will', 'is going to', 'rains', 'raining'],
      correctAnswer: 'is going to',
      explanation: 'نستخدم is going to لوجود دليل (السحب الداكنة).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'I _____ my friends tonight. We arranged it yesterday.',
      options: ['will meet', 'meet', 'am meeting', 'met'],
      correctAnswer: 'am meeting',
      explanation: 'نستخدم المضارع المستمر للترتيبات المؤكدة (arranged).'
    },
    {
      id: 'q3',
      type: 'true_false',
      question: 'I think it is going to rain tomorrow.',
      correctAnswer: false,
      explanation: 'خطأ ❌. مع I think (تنبؤ بدون دليل) نستخدم will (I think it will rain).'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'She _____ study medicine next year. That is her plan.',
      options: ['will', 'is going to', 'studies', 'studying'],
      correctAnswer: 'is going to',
      explanation: 'نستخدم is going to للتعبير عن الخطط والنوايا (plan).'
    },
    {
      id: 'q5',
      type: 'arrange',
      question: 'are / We / traveling / to / Egypt / tomorrow',
      correctAnswer: ['We', 'are', 'traveling', 'to', 'Egypt', 'tomorrow'],
      explanation: 'ترتيب مستقبلي مؤكد باستخدام المضارع المستمر.'
    }
  ]
};

export const countableUncountableLesson: GrammarLessonData = {
  id: 'countable-uncountable',
  title: 'الأسماء التي تعد ولا تعد',
  description: 'Countable & Uncountable Nouns 🍎💧',
  cards: [
    {
      id: 'c1',
      title: 'الفرق الأساسي ⚖️',
      icon: '⚖️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>الأسماء التي تعد (Countable):</strong> لها مفرد وجمع (<span dir="ltr" className="inline-block mx-1">apple ➔ apples</span>). تأخذ (a/an).</li>
            <li><strong>الأسماء التي لا تعد (Uncountable):</strong> ليس لها جمع، وتعامل معاملة المفرد (water, information, money). لا تأخذ (a/an).</li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'أدوات التجزئة 🍰',
      icon: '🍰',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Some:</strong> (بعض) في الإثبات والعرض والطلب.</li>
            <li><strong>Any:</strong> (أي) في النفي والسؤال.</li>
            <li><strong>Much:</strong> (كثير) مع الذي لا يعد.</li>
            <li><strong>Many:</strong> (كثير) مع الذي يعد.</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'I don\'t have _____ money.',
      options: ['some', 'any', 'many', 'a'],
      correctAnswer: 'any',
      explanation: 'نستخدم any في الجملة المنفية.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'Would you like _____ tea?',
      options: ['some', 'any', 'many', 'few'],
      correctAnswer: 'some',
      explanation: 'نستخدم some في حالة العرض (Offer).'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'How _____ apples do you need?',
      options: ['much', 'many', 'some', 'any'],
      correctAnswer: 'many',
      explanation: 'apples اسم يعد (جمع)، لذا نستخدم How many.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'There is too _____ sugar in my coffee.',
      options: ['many', 'much', 'few', 'a'],
      correctAnswer: 'much',
      explanation: 'sugar اسم لا يعد، لذا نستخدم much.'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'The word "information" is a countable noun.',
      correctAnswer: false,
      explanation: 'خطأ ❌. كلمة information (معلومات) لا تعد في اللغة الإنجليزية.'
    }
  ]
};

export const conditionalsLesson: GrammarLessonData = {
  id: 'conditionals',
  title: 'حالات (If) الشرطية',
  description: 'Conditional Sentences 🔀',
  cards: [
    {
      id: 'c1',
      title: 'الحالة الصفرية والأولى 1️⃣',
      icon: '1️⃣',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <div className="font-bold mb-1">الحالة الصفرية (حقائق):</div><div dir="ltr" className="text-indigo-600 font-mono bg-indigo-50 p-2 rounded-lg inline-block">If + مضارع بسيط ➔ مضارع بسيط</div>
              <br/>(If you heat water, it boils).
            </li>
            <li>
              <div className="font-bold mb-1 mt-4">الحالة الأولى (احتمال في المستقبل):</div><div dir="ltr" className="text-indigo-600 font-mono bg-indigo-50 p-2 rounded-lg inline-block">If + مضارع بسيط ➔ will + المصدر</div>
              <br/>(If he studies hard, he will pass).
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'الحالة الثانية والثالثة 2️⃣3️⃣',
      icon: '2️⃣',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <div className="font-bold mb-1">الحالة الثانية (تخيل في الحاضر):</div><div dir="ltr" className="text-indigo-600 font-mono bg-indigo-50 p-2 rounded-lg inline-block">If + ماضي بسيط ➔ would + المصدر</div>
              <br/>(If I had money, I would buy a car).
            </li>
            <li>
              <strong>الحالة الثالثة (ندم في الماضي):</strong> <span dir="ltr" className="inline-block mx-1">If + ماضي تام ➔ would have + P.P.</span>
              <br/>(If he had studied, he would have passed).
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
      question: 'If it rains tomorrow, we _____ at home.',
      options: ['stay', 'will stay', 'would stay', 'stayed'],
      correctAnswer: 'will stay',
      explanation: 'الحالة الأولى: احتمال في المستقبل (\u202AIf + مضارع بسيط ➔ will + المصدر\u202C).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'If you freeze water, it _____ into ice.',
      options: ['turns', 'will turn', 'would turn', 'turned'],
      correctAnswer: 'turns',
      explanation: 'الحالة الصفرية (حقيقة علمية): \u202Aمضارع بسيط ➔ مضارع بسيط\u202C.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'If I _____ a bird, I would fly.',
      options: ['am', 'was', 'were', 'have been'],
      correctAnswer: 'were',
      explanation: 'الحالة الثانية (تخيل): نستخدم were مع جميع الضمائر في حالة If.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'If she had known the answer, she _____ told us.',
      options: ['will have', 'would have', 'would', 'will'],
      correctAnswer: 'would have',
      explanation: 'الحالة الثالثة (ماضي تام): \u202AIf + had + P.P ➔ would have + P.P\u202C.'
    },
    {
      id: 'q5',
      type: 'arrange',
      question: 'will / If / you / pass / study / you',
      correctAnswer: ['If', 'you', 'study', 'you', 'will', 'pass'],
      explanation: 'ترتيب الحالة الأولى: If + فاعل + فعل مضارع، فاعل + will + مصدر.'
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
            <p className="text-left font-mono text-blue-600" dir="ltr">👉 Ali wrote the lesson</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <p className="font-bold text-indigo-800 mb-2">المجهول (Passive): نهتم بالشيء الذي وقع عليه الفعل</p>
            <p className="text-left font-mono text-indigo-600" dir="ltr">👉 The lesson was written (by Ali)</p>
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
              <div className="flex flex-wrap items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">verb (s/es)</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600" dir="ltr">Ali eats the food</p>
            <p className="text-sm text-slate-500 mt-1">👉 علي يأكل الطعام</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-emerald-800">🔹 المجهول:</div>
              <div className="flex flex-wrap items-center gap-2 text-emerald-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">am / is / are</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-emerald-600 font-bold" dir="ltr">The food is eaten (by Ali)</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-sm flex flex-wrap items-center gap-2">
            <span>💡 <strong>الشرح:</strong></span>
            <span>إذا الفاعل مفرد يأخذ</span>
            <span dir="ltr" className="font-bold text-indigo-600">is</span>
            <span>، وإذا كان جمع يأخذ</span>
            <span dir="ltr" className="font-bold text-indigo-600">are</span>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li>She cleans the room → <strong>The room is cleaned</strong></li>
              <li>They play football → <strong>Football is played</strong></li>
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
              <div className="flex flex-wrap items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span>فعل ماضي</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600" dir="ltr">Ali wrote the lesson</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-blue-800">🔹 المجهول:</div>
              <div className="flex flex-wrap items-center gap-2 text-blue-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">was / were</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-blue-600 font-bold" dir="ltr">The lesson was written</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg text-sm flex flex-wrap items-center gap-2">
            <span>💡 <strong>الشرح:</strong></span>
            <span>إذا الفاعل مفرد يأخذ</span>
            <span dir="ltr" className="font-bold text-indigo-600">was</span>
            <span>، وإذا كان جمع يأخذ</span>
            <span dir="ltr" className="font-bold text-indigo-600">were</span>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li>He repaired the car → <strong>The car was repaired</strong></li>
              <li>They built a house → <strong>A house was built</strong></li>
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
              <div className="flex flex-wrap items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">am / is / are</span>
              <span>+</span>
              <span dir="ltr">V-ing</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600" dir="ltr">She is cooking food</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-yellow-800">🔹 المجهول:</div>
              <div className="flex flex-wrap items-center gap-2 text-yellow-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">am / is / are</span>
              <span>+</span>
              <span dir="ltr">being</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-yellow-700 font-bold" dir="ltr">Food is being cooked</p>
          </div>
          <p className="bg-orange-50 p-3 rounded-lg text-sm">💡 <strong>الشرح:</strong> كلمة <strong>being</strong> مهمة جدًا هنا</p>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li>They are building a school → <strong>A school is being built</strong></li>
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
              <div className="flex flex-wrap items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">was / were</span>
              <span>+</span>
              <span dir="ltr">V-ing</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600" dir="ltr">He was writing a letter</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-orange-800">🔹 المجهول:</div>
              <div className="flex flex-wrap items-center gap-2 text-orange-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">was / were</span>
              <span>+</span>
              <span dir="ltr">being</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-orange-700 font-bold" dir="ltr">A letter was being written</p>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li>They were cleaning the room → <strong>The room was being cleaned</strong></li>
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
              <div className="flex flex-wrap items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">will</span>
              <span>+</span>
              <span>الفعل</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600" dir="ltr">She will cook the food</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-red-800">🔹 المجهول:</div>
              <div className="flex flex-wrap items-center gap-2 text-red-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">will be</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-red-600 font-bold" dir="ltr">The food will be cooked</p>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li>They will build a school → <strong>A school will be built</strong></li>
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
              <div className="flex flex-wrap items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">have / has</span>
              <span>+</span>
              <span dir="ltr">V3</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600" dir="ltr">Ali has written the lesson</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-purple-800">🔹 المجهول:</div>
              <div className="flex flex-wrap items-center gap-2 text-purple-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">have / has been</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-purple-600 font-bold" dir="ltr">The lesson has been written</p>
          </div>
          <div className="mt-4">
            <p className="font-bold mb-2">أمثلة:</p>
            <ul className="list-disc list-inside space-y-2 text-left" dir="ltr">
              <li>They have finished the work → <strong>The work has been finished</strong></li>
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
              <div className="flex flex-wrap items-center gap-2 text-slate-700" dir="rtl">
              <span>الفاعل</span>
              <span>+</span>
              <span dir="ltr">had</span>
              <span>+</span>
              <span dir="ltr">V3</span>
              <span>+</span>
              <span>المفعول به</span>
            </div>
            </div>
            <p className="text-left font-mono text-slate-600" dir="ltr">He had cleaned the room</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl border border-gray-300">
            <div className="font-bold mb-2 space-y-2">
              <div className="text-gray-800">🔹 المجهول:</div>
              <div className="flex flex-wrap items-center gap-2 text-gray-700" dir="rtl">
              <span>المفعول به</span>
              <span>+</span>
              <span dir="ltr">had been</span>
              <span>+</span>
              <span dir="ltr">V3</span>
            </div>
            </div>
            <p className="text-left font-mono text-gray-700 font-bold" dir="ltr">The room had been cleaned</p>
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
            <p className="text-xl">المفعول + فعل to be + التصريف الثالث (V3)</p>
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
      id: 'c1',
      title: 'الضرورة والمنع 🛑',
      icon: '🛑',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Must:</strong> إلزام داخلي أو قانون (You must wear a seatbelt).</li>
            <li><strong>Have to:</strong> إلزام خارجي مفروض عليك (I have to go to work at 8).</li>
            <li><strong>Mustn't:</strong> منع وتحريم (You mustn't smoke here).</li>
            <li><strong>Don't have to:</strong> ليس من الضروري (You don't have to get up early on Friday).</li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'الاستنتاج (Deduction) 🕵️‍♂️',
      icon: '🕵️‍♂️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Must be:</strong> أكيد (He has 3 cars. He must be rich).</li>
            <li><strong>Can't be:</strong> مستحيل (He is eating. He can't be sleeping).</li>
            <li><strong>Might be:</strong> ربما (I don't know. He might be at home).</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'You _____ park here. It is not allowed.',
      options: ['must', 'mustn\'t', 'don\'t have to', 'should'],
      correctAnswer: 'mustn\'t',
      explanation: 'نستخدم mustn\'t للتعبير عن المنع والتحريم.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'Today is Friday. I _____ go to school.',
      options: ['mustn\'t', 'don\'t have to', 'must', 'have to'],
      correctAnswer: 'don\'t have to',
      explanation: 'ليس من الضروري الذهاب للمدرسة يوم الجمعة (don\'t have to).'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'He has been working all day. He _____ be tired.',
      options: ['can\'t', 'must', 'might', 'should'],
      correctAnswer: 'must',
      explanation: 'استنتاج مؤكد بالإيجاب (أكيد أنه متعب).'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'That _____ be Ali. Ali is in London right now.',
      options: ['must', 'might', 'can\'t', 'should'],
      correctAnswer: 'can\'t',
      explanation: 'استنتاج مؤكد بالنفي (مستحيل أن يكون علي لأنه في لندن).'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'You must to wear a uniform at school.',
      correctAnswer: false,
      explanation: 'خطأ ❌. كلمة must يأتي بعدها الفعل في المصدر بدون to (You must wear).'
    }
  ]
};

export const relativeClausesLesson: GrammarLessonData = {
  id: 'relative-clauses',
  title: 'ضمائر الوصل (Relative Clauses)',
  description: 'ربط الجمل ببعضها 🔗',
  cards: [
    {
      id: 'c1',
      title: 'أهم ضمائر الوصل 🔗',
      icon: '🔗',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Who / That:</strong> للعاقل (The man who lives here is a doctor).</li>
            <li><strong>Which / That:</strong> لغير العاقل (The book which I read was great).</li>
            <li><strong>Where:</strong> للمكان (This is the school where I learn).</li>
            <li><strong>Whose:</strong> للملكية (The boy whose father is a teacher is my friend).</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'This is the hospital _____ I was born.',
      options: ['which', 'who', 'where', 'whose'],
      correctAnswer: 'where',
      explanation: 'نستخدم where للإشارة إلى المكان.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'The man _____ is standing there is my uncle.',
      options: ['which', 'who', 'where', 'whose'],
      correctAnswer: 'who',
      explanation: 'نستخدم who للإشارة إلى العاقل (The man).'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'I bought a car _____ is very fast.',
      options: ['who', 'where', 'which', 'whose'],
      correctAnswer: 'which',
      explanation: 'نستخدم which للإشارة إلى غير العاقل (a car).'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'That is the boy _____ father is a doctor.',
      options: ['who', 'which', 'whose', 'where'],
      correctAnswer: 'whose',
      explanation: 'نستخدم whose للملكية (والد الولد).'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'The book who I read was interesting.',
      correctAnswer: false,
      explanation: 'خطأ ❌. الكتاب غير عاقل، يجب استخدام which أو that.'
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
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                I like apples <CText text="and" type="particle" /> I like bananas.
              </div>
            </li>
            <li>
              <strong>But (لكن):</strong> لربط فكرتين متناقضتين.
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
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
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                I stayed at home <CText text="because" type="particle" /> it was raining.
              </div>
            </li>
            <li>
              <strong>So (لذلك):</strong> يتبعها النتيجة.
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
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
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
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
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                Ali is <CText text="taller than" type="verb" /> Ahmed.
              </div>
            </li>
            <li>
              <strong>التفضيل (Superlative):</strong> نضع (the) قبل الصفة ونضيف (est).
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
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
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                Gold is <CText text="more expensive than" type="verb" /> silver.
              </div>
            </li>
            <li>
              <strong>التفضيل:</strong> نستخدم (the most) قبل الصفة.
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
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
            <li><span dir="ltr" className="inline-block mx-1">good ➔ better than ➔ the best</span></li>
            <li><span dir="ltr" className="inline-block mx-1">bad ➔ worse than ➔ the worst</span></li>
            <li><span dir="ltr" className="inline-block mx-1">far ➔ farther than ➔ the farthest</span></li>
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
      title: 'القاعدة الأساسية ⚖️',
      icon: '⚖️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>السؤال المذيل يأتي في نهاية الجملة بمعنى (أليس كذلك؟). قاعدته الذهبية:</p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong><span dir="ltr" className="inline-block mx-1">جملة مثبتة ➔ سؤال منفي</span>:</strong>
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                He is a doctor, <CText text="isn't he?" type="verb" />
              </div>
            </li>
            <li>
              <strong><span dir="ltr" className="inline-block mx-1">جملة منفية ➔ سؤال مثبت</span>:</strong>
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                They didn't go, <CText text="did they?" type="verb" />
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'حالات خاصة (Exceptions) ⚠️',
      icon: '⚠️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4" dir="ltr">
            <li>I am late, <CText text="aren't I?" type="verb" /></li>
            <li>Let's go, <CText text="shall we?" type="verb" /></li>
            <li>Open the door, <CText text="will you?" type="verb" /> (للأمر)</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'She can speak English, _____?',
      options: ['can she', 'can\'t she', 'does she', 'doesn\'t she'],
      correctAnswer: 'can\'t she',
      explanation: 'الجملة مثبتة (can)، فيكون السؤال المذيل منفياً (can\'t she).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'You aren\'t tired, _____?',
      options: ['are you', 'aren\'t you', 'do you', 'don\'t you'],
      correctAnswer: 'are you',
      explanation: 'الجملة منفية (aren\'t)، فيكون السؤال المذيل مثبتاً (are you).'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'He plays tennis, _____?',
      options: ['does he', 'doesn\'t he', 'is he', 'isn\'t he'],
      correctAnswer: 'doesn\'t he',
      explanation: 'الجملة في المضارع البسيط المثبت (plays)، فنستخدم الفعل المساعد المنفي doesn\'t.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'They went to the cinema, _____?',
      options: ['did they', 'didn\'t they', 'do they', 'don\'t they'],
      correctAnswer: 'didn\'t they',
      explanation: 'الجملة في الماضي البسيط المثبت (went)، فنستخدم الفعل المساعد المنفي didn\'t.'
    },
    {
      id: 'q5',
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
      title: 'الطلب المؤدب (Polite Requests) 🗣️',
      icon: '🗣️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>لطلب شيء من شخص بأدب، نستخدم:</p>
          <ul className="list-disc list-inside space-y-2" dir="ltr">
            <li><CText text="Could you" type="particle" /> help me, please?</li>
            <li><CText text="Would you" type="particle" /> open the window?</li>
            <li><CText text="Can you" type="particle" /> give me a pen?</li>
            <li><CText text="Would you mind" type="particle" /> open<strong>ing</strong> the door? (يأتي بعدها v-ing)</li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'العروض (Offers) 🎁',
      icon: '🎁',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>لعرض المساعدة أو تقديم شيء لشخص:</p>
          <ul className="list-disc list-inside space-y-2" dir="ltr">
            <li><CText text="Would you like" type="particle" /> some tea?</li>
            <li><CText text="Shall I" type="particle" /> carry this bag for you?</li>
            <li><CText text="I'll" type="particle" /> help you with your homework.</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: '_____ you mind helping me with this box?',
      options: ['Could', 'Can', 'Would', 'Should'],
      correctAnswer: 'Would',
      explanation: 'نستخدم Would مع you mind (Would you mind + v-ing).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: '_____ I open the window for you?',
      options: ['Will', 'Shall', 'Would', 'Do'],
      correctAnswer: 'Shall',
      explanation: 'نستخدم Shall I لتقديم عرض بالمساعدة.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'Would you mind _____ the door?',
      options: ['close', 'to close', 'closing', 'closed'],
      correctAnswer: 'closing',
      explanation: 'بعد Would you mind يأتي الفعل مضافاً له ing.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: '_____ you like a cup of coffee?',
      options: ['Do', 'Are', 'Would', 'Can'],
      correctAnswer: 'Would',
      explanation: 'نستخدم Would you like لتقديم عرض مهذب.'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'Could you to help me, please?',
      correctAnswer: false,
      explanation: 'خطأ ❌. بعد Could you يأتي الفعل في المصدر بدون to (Could you help).'
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
      title: 'استخدام Should / Ought to 💡',
      icon: '💡',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>لإعطاء نصيحة، نستخدم الأفعال الناقصة التالية ويأتي بعدها الفعل في المصدر:</p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Should / Shouldn't:</strong> (يجب أن / لا يجب أن)
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                You <CText text="should" type="particle" /> study hard.
              </div>
            </li>
            <li>
              <strong>Ought to / Ought not to:</strong> (ينبغي أن)
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                You <CText text="ought to" type="particle" /> sleep early.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'طرق أخرى للنصيحة 🌟',
      icon: '🌟',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Had better ('d better):</strong> (من الأفضل أن)
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                You <CText text="'d better" type="particle" /> see a doctor.
              </div>
            </li>
            <li>
              <strong>If I were you:</strong> (لو كنت مكانك) - حالة If الثانية.
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                <CText text="If I were you," type="particle" /> I would apologize.
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
      question: 'You look tired. You _____ go to bed.',
      options: ['should', 'shouldn\'t', 'ought', 'better'],
      correctAnswer: 'should',
      explanation: 'نستخدم should لإعطاء نصيحة إيجابية.'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'If I _____ you, I would study harder.',
      options: ['am', 'was', 'were', 'be'],
      correctAnswer: 'were',
      explanation: 'نستخدم If I were you كتركيب ثابت لإعطاء النصيحة.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'You _____ better see a doctor.',
      options: ['have', 'had', 'would', 'should'],
      correctAnswer: 'had',
      explanation: 'التركيب الصحيح هو had better (من الأفضل).'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'You ought _____ apologize to him.',
      options: ['to', 'for', 'that', 'in'],
      correctAnswer: 'to',
      explanation: 'الفعل ought يأخذ دائماً to بعده (ought to).'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'You shouldn\'t to smoke here.',
      correctAnswer: false,
      explanation: 'خطأ ❌. بعد shouldn\'t يأتي الفعل في المصدر بدون to (shouldn\'t smoke).'
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
      title: 'الكثير من (A lot of) 📦',
      icon: '📦',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>نستخدم <strong>a lot of / lots of</strong> بمعنى (الكثير من)، وتأتي مع الأسماء التي تعد والتي لا تعد في الجمل المثبتة.</p>
          <ul className="list-disc list-inside space-y-2" dir="ltr">
            <li>I have <CText text="a lot of" type="particle" /> friends. (معدود)</li>
            <li>She drinks <CText text="a lot of" type="particle" /> water. (غير معدود)</li>
          </ul>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'القليل (A few / A little) 🤏',
      icon: '🤏',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>A few:</strong> (قليل ويكفي) تأتي مع الأسماء التي <strong>تعد</strong>.
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                I have <CText text="a few" type="particle" /> apples. We can make a pie.
              </div>
            </li>
            <li>
              <strong>A little:</strong> (قليل ويكفي) تأتي مع الأسماء التي <strong>لا تعد</strong>.
              <div className="bg-slate-50 p-3 rounded-xl mt-2" dir="ltr">
                I have <CText text="a little" type="particle" /> money. I can buy a sandwich.
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'ملاحظة هامة (few vs a few) ⚠️',
      icon: '⚠️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>إذا حذفنا حرف (a)، يتغير المعنى ليصبح (قليل ولا يكفي / يعطي معنى النفي):</p>
          <ul className="list-disc list-inside space-y-2" dir="ltr">
            <li>I have <strong>few</strong> friends. (أنا وحيد تقريباً)</li>
            <li>I have <strong>little</strong> money. (لا أستطيع شراء شيء)</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: 'I can\'t make tea. There is very _____ sugar left.',
      options: ['few', 'a few', 'little', 'a little'],
      correctAnswer: 'little',
      explanation: 'السكر لا يعد، والكمية لا تكفي لصنع الشاي، فنستخدم little (بدون a).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: 'He has _____ books in his bag.',
      options: ['a lot of', 'much', 'a little', 'little'],
      correctAnswer: 'a lot of',
      explanation: 'الكتب اسم يعد، و much/little تأتي مع غير المعدود، لذا a lot of هي الصحيحة.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: 'I have _____ friends in this city. I am not lonely.',
      options: ['few', 'a few', 'little', 'a little'],
      correctAnswer: 'a few',
      explanation: 'friends معدود، والمعنى إيجابي (لست وحيداً)، فنستخدم a few.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: 'We have _____ time left. Hurry up!',
      options: ['few', 'a few', 'little', 'a little'],
      correctAnswer: 'little',
      explanation: 'time غير معدود، والمعنى سلبي (يجب أن نسرع)، فنستخدم little.'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'She drinks a lot of waters every day.',
      correctAnswer: false,
      explanation: 'خطأ ❌. كلمة water لا تجمع بـ s (She drinks a lot of water).'
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
      title: 'الجملة الخبرية (Statements) 📝',
      icon: '📝',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>عند نقل الكلام، نقوم بثلاث خطوات رئيسية:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>نغير فعل القول (<span dir="ltr" className="inline-block mx-1">say ➔ say / said ➔ said / said to ➔ told</span>).</li>
            <li>نحذف الأقواس ونربط بـ (that) ويمكن حذفها.</li>
            <li><strong>نغير الزمن إلى الماضي:</strong> (<span dir="ltr" className="inline-block mx-1">المضارع ➔ ماضي / الماضي ➔ ماضي تام</span>).</li>
          </ol>
          <div className="bg-slate-50 p-3 rounded-xl mt-4" dir="ltr">
            <strong>Direct:</strong> Ali said, "I <CText text="play" type="verb" /> tennis."<br/>
            <strong>Reported:</strong> Ali said that he <CText text="played" type="verb" /> tennis.
          </div>
        </div>
      )
    },
    {
      id: 'c2',
      title: 'السؤال (Questions) ❓',
      icon: '❓',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>عند نقل السؤال:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>نستخدم أفعال مثل (asked, wanted to know).</li>
            <li>إذا كان السؤال بـ (هل - فعل مساعد)، نربط بـ <strong>if</strong> أو <strong>whether</strong>.</li>
            <li>إذا كان السؤال بأداة استفهام (Wh-)، نربط بنفس الأداة.</li>
            <li><strong>الأهم:</strong> نحول السؤال إلى جملة عادية (الفاعل قبل الفعل).</li>
          </ul>
          <div className="bg-slate-50 p-3 rounded-xl mt-4" dir="ltr">
            <strong>Direct:</strong> "Where <CText text="do you live" type="verb" />?" he asked.<br/>
            <strong>Reported:</strong> He asked me where <CText text="I lived" type="verb" />.
          </div>
        </div>
      )
    },
    {
      id: 'c3',
      title: 'تغيير الكلمات الدالة ⏱️',
      icon: '⏱️',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p>بعض الكلمات تتغير عند نقل الكلام:</p>
          <ul className="list-disc list-inside space-y-2" dir="ltr">
            <li><span dir="ltr" className="inline-block mx-1">now ➔ then</span></li>
            <li><span dir="ltr" className="inline-block mx-1">today ➔ that day</span></li>
            <li><span dir="ltr" className="inline-block mx-1">tomorrow ➔ the next day</span></li>
            <li><span dir="ltr" className="inline-block mx-1">yesterday ➔ the day before</span></li>
            <li><span dir="ltr" className="inline-block mx-1">here ➔ there</span></li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    {
      id: 'q1',
      type: 'multiple_choice',
      question: '\u202AHe said, "I am happy." ➔ He said that he _____ happy.\u202C',
      options: ['is', 'was', 'were', 'has been'],
      correctAnswer: 'was',
      explanation: 'نحول الزمن من المضارع (am) إلى الماضي (was).'
    },
    {
      id: 'q2',
      type: 'multiple_choice',
      question: '\u202AShe asked me, "Do you like fish?" ➔ She asked me _____ I liked fish.\u202C',
      options: ['that', 'what', 'if', 'to'],
      correctAnswer: 'if',
      explanation: 'لأن السؤال يبدأ بفعل مساعد (Do) بمعنى هل، نربط بـ if.'
    },
    {
      id: 'q3',
      type: 'multiple_choice',
      question: '\u202AAli said, "I will go tomorrow." ➔ Ali said that he _____ go the next day.\u202C',
      options: ['will', 'would', 'can', 'could'],
      correctAnswer: 'would',
      explanation: 'نحول will إلى الماضي would.'
    },
    {
      id: 'q4',
      type: 'multiple_choice',
      question: '\u202AHe asked, "Where is the post office?" ➔ He asked where the post office _____.\u202C',
      options: ['is', 'was', 'were', 'has been'],
      correctAnswer: 'was',
      explanation: 'نحول السؤال إلى جملة (الفاعل قبل الفعل) ونحول is إلى was.'
    },
    {
      id: 'q5',
      type: 'true_false',
      question: 'She said to me that she was tired.',
      correctAnswer: false,
      explanation: 'خطأ ❌. لا نستخدم said to me، بل نستخدم told me (She told me that...).'
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
  reportedSpeechLesson
];
