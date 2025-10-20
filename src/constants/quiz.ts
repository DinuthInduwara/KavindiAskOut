/**
 * Quiz questions and configuration
 */

export interface QuizQuestion {
  question: string;
  type: 'text' | 'choice';
  placeholder?: string;
  options?: string[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Kavindi , Was I never close to your heart? 💕",
    type: "text",
    placeholder: "ඇත්තම කාරනාව කියන්න🥺, ඔයා ඇරෙන්න වෙන කවුරු කියන්නද ඉතින් 🥹",
  },
  {
    question: "ඔයා ඉස්සර ඉදගෙනම මට අකමත්තෙන්ද හිටියේ ඉතින් 🥲",
    type: "choice",
    options: [
      "😊🌼 නැහැ - චුට්ටික්කක්වත් ",
      "😕💔 ඔව් - ටිකක්",
      "😶‍🌫️🤏 නැහැ - හැබැයි පොඩ්ඩක් ",
      "💔😭 ඔව් - ගොඩක්",
    ],
  },
  {
    question: "චෝකොලොට් එකක් දුන්නොත්  තව යාලු වෙනවා නේ 🥹, නේ ද ,  😊",
    type: "text",
    placeholder: "ඔයාට ඕනම දෙකය් කියන්න , මම දෙනවා 🍫",
  },
  {
    question: "ඔයා කැමති වෙන කව්රුහරි ඉන්නවද මේ ලෝකේ☹️ ",
    type: "choice",
    options: [
      "🌅 ඤෑ,  ඔයා විතරයි ",
      "🌃 ඤෑ ඤෑ,  ඔයා විතරයි ",
      "🏖️ ඤෑ ඤෑ ඤෑ,  ඔයා විතරයි  ",
      "🏠 ඤෑඤෑඤෑඤෑඤෑඤෑඤෑඤෑ මයි,  ඔයා විතරමයි  ",
    ],
  },
  {
    question: "කාව්න්දී, ඔය ඔක්කොටම ඇත්තම කිව්වා නේද, ඇත්තටම මගේ මොනවහරි අඩුපාඩුවක් තියනවනම් කියන්න  💖",
    type: "text",
    placeholder: "එහෙම මට පෙන දෙයක් තියනවනම් ඇත්තටම මම දැන් එක හදාගේනනේ ඉතින්🥺, මට පෙන්නේ නැති දේ කියල දාන්න plz🥹",
  },
];
