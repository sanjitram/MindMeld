export const Types = [
  {
    id: 9,
    name: "Memory"
  },
  {
    id: 10,
    name: "Attention"
  },
  {
    id: 11, 
    name: "Problem Solving"
  },
  {
    id: 12,
    name: "Reaction speed"
  }
];

export const Question = [
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "adult/teen", 
    question: "If all roses are flowers and some flowers are red, which of the following is definitely true?",
    correct_answer: "Some flowers are not roses.",
    incorrect_answers: ["All roses are red.", "Some roses are not red.", "No roses are red."]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "adult/teen", 
    question: "In a family of six members P, Q, R, S, T, and U, there are two married couples. S is the father of T and U. R is the mother of P. Q is married to P. Who is the father of R?",
    correct_answer: "S",
    incorrect_answers: ["T", "U", "Q"]
  },
  {
    category: "Problem Solving",
    type: "multiple", 
    difficulty: "adult/teen",
    question: "If in a certain code language, 'CAT' is written as 'DBU', how would 'DOG' be written?",
    correct_answer: "EPH",
    incorrect_answers: ["EPF", "EOG", "DNF"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "adult/teen",
    question: "In a class, A is taller than B but shorter than C. D is taller than E but shorter than B. E is taller than C. Who is the shortest?",
    correct_answer: "E",
    incorrect_answers: ["A", "B", "D"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "adult/teen",
    question: "If the first two statements are true, is the final statement true? All pencils are pens. Some pens are markers. Therefore, some pencils are markers.",
    correct_answer: "Cannot be determined",
    incorrect_answers: ["True", "False", "None of the above"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "toddler",
    question: "Which word was present before?",
    words: ["apple", "banana", "cherry", "date"],
    correct_answer: "banana",
    incorrect_answers: ["apple", "cherry", "date"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "old",
    question: "What is the square root of 144?",
    correct_answer: "12",
    incorrect_answers: ["14", "10", "16"]
  },
  {
    category: "Attention",
    type: "multiple",
    difficulty: "toddler",
    question: "What is the color of the object in the image?",
    image: "https://wl-brightside.cf.tsp.li/resize/728x/jpg/ed9/660/53980d548cb101007423d751b0.jpg",
    correct_answer: "Red",
    incorrect_answers: ["Blue", "Green", "Yellow"]
  },
  {
    category: "Attention", 
    type: "multiple",
    difficulty: "old",
    question: "What is the chemical symbol for gold?",
    correct_answer: "Au",
    incorrect_answers: ["Ag", "Fe", "Cu"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old", 
    question: "In which year did World War II end?",
    correct_answer: "1945",
    incorrect_answers: ["1944", "1946", "1943"]
  },
  {
    category: "Reaction speed",
    type: "multiple",
    difficulty: "toddler",
    question: "What is the capital city of Japan?",
    correct_answer: "Tokyo",
    incorrect_answers: ["Seoul", "Beijing", "Bangkok"]
  },
  {
    category: "Reaction speed",
    type: "multiple",
    difficulty: "old",
    question: "Which is the longest river in the world?",
    correct_answer: "Nile",
    incorrect_answers: ["Amazon", "Mississippi", "Yangtze"]
  },{
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "If you have two apples and you take away one, how many apples do you have?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "0"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "What comes next in the sequence: 1, 3, 5, 7, ...?",
    correct_answer: "9",
    incorrect_answers: ["8", "6", "10"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "If you divide a cake into 4 equal pieces and you eat 2, how many pieces are left?",
    correct_answer: "2",
    incorrect_answers: ["3", "1", "4"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "Which number is larger: 15 or 12?",
    correct_answer: "15",
    incorrect_answers: ["12", "Both are equal", "Neither"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "If you have 5 red balls and you buy 3 more, how many red balls do you have?",
    correct_answer: "8",
    incorrect_answers: ["7", "6", "5"]
  },

  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "If a train travels 60 miles in 1 hour, how far will it travel in 4 hours?",
    correct_answer: "240 miles",
    incorrect_answers: ["200 miles", "220 miles", "260 miles"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "In a race, you pass the person in second place. What place are you in now?",
    correct_answer: "Second place",
    incorrect_answers: ["First place", "Third place", "Fourth place"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "If you mix red and yellow, what color do you get?",
    correct_answer: "Orange",
    incorrect_answers: ["Green", "Purple", "Brown"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "A car travels 60 miles per hour. How far will it travel in 2.5 hours?",
    correct_answer: "150 miles",
    incorrect_answers: ["160 miles", "140 miles", "130 miles"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "What is the next number in the sequence: 3, 6, 9, 12, ...?",
    correct_answer: "15",
    incorrect_answers: ["13", "14", "16"]
  }
];

export const Level = ["toddler", "old", "adult/teen"];

export const Idx = ["A", "B", "C", "D"];
