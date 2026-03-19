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
            <div dir="ltr" className="text-center p-4 bg-slate-900 rounded-2xl shadow-inner">
              <span className="text-emerald-400 font-mono text-xl">If + Present Simple → Present Simple</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-emerald-700 mb-2 flex items-center gap-2">
              <span>🔸</span> أمثلة:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white border-2 border-emerald-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800">If you heat water, it boils.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">إذا سخّنت الماء، فإنه يغلي.</p>
              </div>
              <div className="p-3 bg-white border-2 border-emerald-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800">If you don’t eat, you feel weak.</p>
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
            <div dir="ltr" className="text-center p-4 bg-slate-900 rounded-2xl shadow-inner">
              <span className="text-blue-400 font-mono text-xl">If + Present Simple → will + base verb</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-blue-700 mb-2 flex items-center gap-2">
              <span>🔸</span> أمثلة:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white border-2 border-blue-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800">If you study hard, you will pass the exam.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">إذا درست بجد، ستنجح في الامتحان.</p>
              </div>
              <div className="p-3 bg-white border-2 border-blue-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800">If it rains, we will stay at home.</p>
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
            <div dir="ltr" className="text-center p-4 bg-slate-900 rounded-2xl shadow-inner">
              <span className="text-amber-400 font-mono text-xl">If + Past Simple → would + base verb</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-amber-700 mb-2 flex items-center gap-2">
              <span>🔸</span> أمثلة:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white border-2 border-amber-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800">If I were rich, I would buy a big house.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">لو كنت غنياً، لاشتريت بيتًا كبيرًا.</p>
              </div>
              <div className="p-3 bg-white border-2 border-amber-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800">If he studied, he would pass.</p>
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
            <div dir="ltr" className="text-center p-4 bg-slate-900 rounded-2xl shadow-inner">
              <span className="text-red-400 font-mono text-xl">If + Past Perfect → would have + P.P</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-red-700 mb-2 flex items-center gap-2">
              <span>🔸</span> أمثلة:
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white border-2 border-red-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800">If I had studied, I would have passed.</p>
                <p className="text-sm text-slate-500 mt-1 text-right" dir="rtl">لو كنت درست، لكنت نجحت.</p>
              </div>
              <div className="p-3 bg-white border-2 border-red-100 rounded-xl shadow-sm" dir="ltr">
                <p className="text-lg font-bold text-slate-800">If they had left earlier, they would have caught the bus.</p>
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
            <div className="space-y-2" dir="ltr">
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
            <div className="space-y-1" dir="ltr">
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
            <div className="mt-3 p-2 bg-white rounded-lg text-sm border border-emerald-100" dir="ltr">
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
      title: '1. ما هو Question Tag؟ 🤔',
      icon: '🤔',
      content: (
        <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-right" dir="rtl">
          <p className="font-bold text-indigo-600">تعريف بسيط:</p>
          <p>هو سؤال قصير يُضاف في نهاية الجملة للتأكد أو طلب الموافقة.</p>
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <p className="font-bold text-indigo-800 mb-2">مثال:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm" dir="ltr">
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
              <p className="font-bold text-emerald-800 mb-2">🟢 جملة مثبتة ➔ سؤال منفي</p>
              <div className="bg-white p-2 rounded shadow-sm text-sm font-mono" dir="ltr">
                You are happy, <span className="text-red-600 font-bold">aren’t you?</span>
              </div>
            </div>
            <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
              <p className="font-bold text-rose-800 mb-2">🔴 جملة منفية ➔ سؤال مثبت</p>
              <div className="bg-white p-2 rounded shadow-sm text-sm font-mono" dir="ltr">
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
          <div className="space-y-3" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">You like coffee, <CText text="don’t you?" type="particle" /></p>
              <p className="text-slate-500 text-xs text-right" dir="rtl">أنت تحب القهوة، أليس كذلك؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">He plays football, <CText text="doesn’t he?" type="particle" /></p>
              <p className="text-slate-500 text-xs text-right" dir="rtl">هو يلعب كرة القدم، أليس كذلك؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">They went home, <CText text="didn’t they?" type="particle" /></p>
              <p className="text-slate-500 text-xs text-right" dir="rtl">هم ذهبوا إلى المنزل، أليس كذلك؟</p>
            </div>
          </div>
          <div className="bg-rose-50 p-3 rounded-lg border border-rose-100 mt-2">
            <p className="font-bold text-rose-800 mb-1">🔴 مع النفي:</p>
            <p className="text-sm font-mono" dir="ltr">She doesn’t like tea, <span className="text-emerald-600 font-bold">does she?</span></p>
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
              <p className="font-bold text-amber-800 mb-1">1. I am ➔ aren’t I?</p>
              <p className="text-sm font-mono" dir="ltr">I am late, <span className="text-red-600 font-bold">aren’t I?</span></p>
              <p className="text-xs text-slate-500 mt-1">📌 مهمة جدًا في الامتحان!</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-800 mb-1">2. Let’s ➔ shall we?</p>
              <p className="text-sm font-mono" dir="ltr">Let’s go, <span className="text-blue-600 font-bold">shall we?</span></p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-800 mb-1">3. الأمر (Imperative)</p>
              <p className="text-sm font-mono" dir="ltr">Close the door, <span className="text-indigo-600 font-bold">will you?</span></p>
              <p className="text-sm font-mono" dir="ltr">Don’t talk, <span className="text-indigo-600 font-bold">will you?</span></p>
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
            <div className="bg-white p-2 rounded shadow-sm text-sm font-mono" dir="ltr">
              Can you help me?
              <p className="text-slate-500 text-xs" dir="rtl">هل يمكنك مساعدتي؟</p>
            </div>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
            <p className="font-bold text-emerald-800 mb-2">🔸 Offers (العروض)</p>
            <p className="text-sm mb-2">هي عرض مساعدة أو خدمة لشخص.</p>
            <div className="bg-white p-2 rounded shadow-sm text-sm font-mono" dir="ltr">
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
            <p className="font-mono text-sm" dir="ltr">Can / Could + subject + base verb?</p>
          </div>
          <div className="space-y-2" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800"><CText text="Can" type="particle" /> you open the door?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل يمكنك فتح الباب؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
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
            <p className="font-mono text-sm" dir="ltr">Will / Would + subject + base verb?</p>
          </div>
          <div className="space-y-2" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800"><CText text="Will" type="particle" /> you close the window?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل ستغلق النافذة؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
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
            <p className="font-mono text-sm" dir="ltr">Do / Would you mind + verb + ing?</p>
          </div>
          <div className="space-y-2" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800"><CText text="Do you mind" type="particle" /> opening the door?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل تمانع فتح الباب؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800"><CText text="Would you mind" type="particle" /> helping me?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل تمانع مساعدتي؟ (أكثر تهذيبًا)</p>
            </div>
          </div>
          <div className="bg-slate-100 p-3 rounded-lg">
            <p className="font-bold text-slate-700 text-sm mb-1">📌 الرد بالموافقة:</p>
            <p className="font-mono text-emerald-600 text-sm" dir="ltr">No, not at all. (لا، لا أمانع)</p>
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
            <p className="font-mono text-sm" dir="ltr">May I + base verb?</p>
          </div>
          <p className="text-sm bg-slate-100 p-2 rounded">📌 هذا أسلوب رسمي جدًا (Formal).</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
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
              <p className="text-sm font-mono" dir="ltr">Can I help you?</p>
              <p className="text-xs text-slate-500" dir="rtl">هل أستطيع مساعدتك؟</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-800 mb-1">Shall I...?</p>
              <p className="text-xs text-blue-600 mb-2">📌 تُستخدم مع (I / we)</p>
              <p className="text-sm font-mono" dir="ltr">Shall I open the door?</p>
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
            <p className="font-mono text-sm" dir="ltr">Would you like + noun / to + verb?</p>
          </div>
          <div className="space-y-2" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">Would you like some tea?</p>
              <p className="text-slate-500 text-xs" dir="rtl">هل ترغب في بعض الشاي؟</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
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
            <div className="bg-white p-3 rounded-lg shadow-sm" dir="ltr">
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
            <p className="font-mono text-sm" dir="ltr">Subject + should + base verb</p>
          </div>
          <p>تُستخدم للنصيحة العامة.</p>
          <div className="space-y-2" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">You <CText text="should" type="particle" /> study hard.</p>
              <p className="text-slate-500 text-xs" dir="rtl">يجب أن تدرس بجد</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">He <CText text="should" type="particle" /> see a doctor.</p>
              <p className="text-slate-500 text-xs" dir="rtl">يجب عليه أن يزور الطبيب</p>
            </div>
          </div>
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 mt-4">
            <p className="font-bold text-rose-800 mb-2">🔴 النفي (Negative):</p>
            <p className="font-mono text-sm mb-2" dir="ltr">should not (shouldn’t)</p>
            <div className="bg-white p-2 rounded shadow-sm text-sm font-mono" dir="ltr">
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
            <p className="font-mono text-sm" dir="ltr">Subject + ought to + base verb</p>
          </div>
          <p className="text-sm bg-slate-100 p-2 rounded">📌 نفس معنى should تقريبًا.</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
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
            <p className="font-mono text-sm" dir="ltr">Subject + had better + base verb</p>
          </div>
          <p className="text-sm font-bold text-amber-600">⚠️ نصيحة قوية (تحذير)</p>
          <div className="space-y-2" dir="ltr">
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">You <CText text="had better" type="particle" /> study.</p>
              <p className="text-slate-500 text-xs" dir="rtl">من الأفضل أن تذاكر (وإلا ستندم)</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
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
            <p className="font-mono text-sm" dir="ltr">Why don’t you + base verb?</p>
          </div>
          <p>تُستخدم كاقتراح لطيف.</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
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
            <p className="font-mono text-sm" dir="ltr">If I were you, I would + base verb</p>
          </div>
          <p>نصيحة شخصية قوية.</p>
          <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
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
            <div className="flex flex-wrap gap-2" dir="ltr">
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
              <p className="mt-2 text-xs font-bold text-emerald-600" dir="ltr">one apple, two apples</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
              <p className="font-bold text-amber-800 mb-2">Uncountable (أشياء لا تُعد)</p>
              <p className="text-sm mb-2">لا يمكن عدّها مباشرة:</p>
              <ul className="text-sm space-y-1">
                <li>💧 water</li>
                <li>🍚 rice</li>
                <li>💰 money</li>
              </ul>
              <div className="mt-2 text-xs font-bold text-amber-600" dir="ltr">
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
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-800 mb-2">some (بعض)</p>
              <p className="text-sm mb-2">تُستخدم في الجمل المثبتة:</p>
              <div className="space-y-2" dir="ltr">
                <div className="bg-white p-2 rounded shadow-sm text-sm">
                  <p className="font-bold">I have some money.</p>
                  <p className="text-slate-500 text-xs" dir="rtl">لدي بعض المال</p>
                </div>
                <div className="bg-white p-2 rounded shadow-sm text-sm">
                  <p className="font-bold">She bought some apples.</p>
                  <p className="text-slate-500 text-xs" dir="rtl">اشترت بعض التفاح</p>
                </div>
              </div>
            </div>
            <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
              <p className="font-bold text-rose-800 mb-2">any (أي)</p>
              <p className="text-sm mb-2">تُستخدم في النفي والسؤال:</p>
              <div className="space-y-2" dir="ltr">
                <div className="bg-white p-2 rounded shadow-sm text-sm">
                  <p className="font-bold">I don’t have any money.</p>
                  <p className="text-slate-500 text-xs" dir="rtl">ليس لدي أي مال</p>
                </div>
                <div className="bg-white p-2 rounded shadow-sm text-sm">
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
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
              <p className="font-bold text-indigo-800 mb-1">many → مع المعدود</p>
              <p className="text-sm mb-2">many students, many books</p>
              <div className="bg-white p-2 rounded shadow-sm text-sm font-mono" dir="ltr">
                There are many students.
              </div>
            </div>
            <div className="bg-violet-50 p-4 rounded-xl border border-violet-100">
              <p className="font-bold text-violet-800 mb-1">much → مع غير المعدود</p>
              <p className="text-sm mb-2">much water, much money</p>
              <div className="bg-white p-2 rounded shadow-sm text-sm font-mono" dir="ltr">
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
          <div className="space-y-3" dir="ltr">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
              <p className="font-bold text-slate-800">I have a lot of friends.</p>
              <p className="text-slate-500 text-xs" dir="rtl">لدي الكثير من الأصدقاء</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
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
              <p className="text-sm mb-2 font-mono" dir="ltr">Few students passed the exam.</p>
              <p className="text-xs text-slate-500">عدد قليل جداً نجحوا (أقل من المتوقع)</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-800 mb-1">little → لغير المعدود</p>
              <p className="text-sm mb-2 font-mono" dir="ltr">There is little water.</p>
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
              <p className="text-sm mb-2 font-mono" dir="ltr">I have a few friends.</p>
              <p className="text-xs text-emerald-600">لدي بعض الأصدقاء (كافٍ)</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="font-bold text-emerald-800 mb-1">a little → غير معدود</p>
              <p className="text-sm mb-2 font-mono" dir="ltr">I need a little help.</p>
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
            <p className="text-left font-mono text-indigo-600" dir="ltr">Subject + verb + " الكلام "</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">أمثلة:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
              <p className="text-left font-bold text-slate-800">Ali said, "I am tired."</p>
              <p className="text-right text-slate-500" dir="rtl">قال علي: "أنا متعب"</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
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
            <p className="text-left font-mono text-indigo-600" dir="ltr">Subject + said (that) + sentence</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">أمثلة:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
              <p className="text-left font-bold text-slate-800">Ali said that he was tired.</p>
              <p className="text-right text-slate-500" dir="rtl">قال علي إنه كان متعبًا</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
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
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm" dir="ltr">
              "I eat food." ➔ He said that he ate food.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm" dir="ltr">
              "I am studying." ➔ He said that he was studying.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm" dir="ltr">
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
              <p className="text-left font-mono text-amber-800" dir="ltr">"I am happy," said Ali</p>
              <p className="text-left font-mono font-bold text-amber-900" dir="ltr">➔ Ali said that he was happy</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
              <p className="text-left font-mono text-emerald-800" dir="ltr">"We are ready," they said</p>
              <p className="text-left font-mono font-bold text-emerald-900" dir="ltr">➔ They said that they were ready</p>
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
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm" dir="ltr">
              "I will go tomorrow." ➔ He said that he would go the next day.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm" dir="ltr">
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
              <p className="text-left font-mono text-blue-600" dir="ltr">"Are you happy?" ➔ He asked if I was happy.</p>
            </div>
            <div className="bg-violet-50 p-4 rounded-xl border border-violet-100">
              <p className="font-bold text-violet-800 mb-2">ب) سؤال بكلمة استفهام (WH Question)</p>
              <p className="mb-2">نحتفظ بالكلمة (what, where, why...)</p>
              <p className="text-left font-mono text-violet-600" dir="ltr">"Where do you live?" ➔ He asked where I lived.</p>
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
            <p className="text-left font-mono text-indigo-600" dir="ltr">told / asked + person + to + verb</p>
          </div>
          <div className="space-y-3">
            <p className="font-bold">أمثلة:</p>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
              <p className="text-left font-bold text-slate-800">"Close the door."</p>
              <p className="text-left text-slate-500">➔ He told me to close the door.</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100" dir="ltr">
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
