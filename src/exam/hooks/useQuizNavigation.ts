import { useCallback } from 'react';
import { useQuiz } from '../context/QuizContext';

export const useQuizNavigation = () => {
  const { state, dispatch } = useQuiz();

  const handleAnswer = useCallback((answer: string) => {
    if (!state.currentQuiz) return;

    const currentQuestion = state.currentQuiz.questions[state.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    dispatch({
      type: 'ANSWER_QUESTION',
      payload: { answer, isCorrect }
    });
  }, [state.currentQuiz, state.currentQuestionIndex, dispatch]);

  const handleSkip = useCallback(() => {
    dispatch({ type: 'SKIP_QUESTION' });
    dispatch({ type: 'NEXT_QUESTION' });
  }, [dispatch]);

  const handleNext = useCallback(() => {
    if (!state.currentQuiz) return;

    if (state.currentQuestionIndex === state.currentQuiz.questions.length - 1) {
      dispatch({ type: 'END_QUIZ' });
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  }, [state.currentQuiz, state.currentQuestionIndex, dispatch]);

  return {
    currentQuestion: state.currentQuiz?.questions[state.currentQuestionIndex],
    isLastQuestion: state.currentQuiz 
      ? state.currentQuestionIndex === state.currentQuiz.questions.length - 1 
      : false,
    handleAnswer,
    handleSkip,
    handleNext
  };
};