import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Question } from "../constant"; // Import local questions

const useQuestionStore = create(
  persist(
    (set) => ({
      question: [],
      userAnswer: [],
      error: null,
      totalTime: 0,
      trueAnswer: 0,
      falseAnswer: 0,
      auth: {},
      page: 1,
      fetchQuestion: (query) => {
        try {
          // Parse query parameters
          const params = new URLSearchParams(query);
          const category = params.get('category');
          const difficulty = params.get('difficulty');
          
          // Filter questions based on selected category and difficulty
          const filteredQuestions = Question.filter(q => 
            q.category === category && 
            q.difficulty === difficulty
          ).slice(0, 5); // Get first 5 matching questions

          return set((state) => ({ ...state, question: filteredQuestions }));
        } catch (error) {
          return set((state) => ({ ...state, error: error }));
        }
      },

      authUser: (auth) => set((state) => ({ ...state, auth })),
      addAnswer: ({ question, answer }) =>
        set((state) => ({
          ...state,
          userAnswer: [...state.userAnswer, { question, answer }],
        })),
      trueAction: () =>
        set((state) => ({ ...state, trueAnswer: state.trueAnswer + 1 })),
      falseAction: () =>
        set((state) => ({ ...state, falseAnswer: state.falseAnswer + 1 })),
      logoutUser: () =>
        set({
          question: [],
          userAnswer: [],
          error: null,
          totalTime: 0,
          trueAnswer: 0,
          falseAnswer: 0,
          auth: {},
          page: 1,
        }),
      resetQuestion: () =>
        set((state) => ({
          ...state,
          question: [],
          trueAnswer: 0,
          falseAnswer: 0,
          error: null,
          page: 1,
        })),
      setTimeStamp: (time) =>
        set((state) => ({
          ...state,
          totalTime: time,
        })),
      nextPage: () =>
        set((state) => ({
          ...state,
          page: state.page + 1,
        })),
    }),
    {
      name: "question-storage",
    }
  )
);

export default useQuestionStore;
