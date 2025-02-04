import React, { useState } from 'react';
import { QuizStart } from '../components/QuizStart';
import { QuizQuestion } from '../components/QuizQuestion';
import { QuizResult } from '../components/QuizResult';
import { useQuiz } from '../context/QuizContext';
import { useQuizNavigation } from '../hooks/useQuizNavigation';
import { generateQuestions } from '../utils/questionGenerator';
import { analyzeQuizResult } from '../utils/quizAnalyzer';
import { QuizSettings } from '../types';

interface QuizPageProps {
  learnedWordsCount: number;
  onClose: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ learnedWordsCount, onClose }) => {
  const { state, dispatch } = useQuiz();
  const { 
    currentQuestion,
    isLastQuestion,
    handleAnswer,
    handleSkip,
    handleNext
  } = useQuizNavigation();

  const [showResult, setShowResult] = useState(false);

  const handleStart = (settings: QuizSettings) => {
    const questions = generateQuestions([], { // TODO: Pass learned words
      count: settings.questionCount,
      types: settings.questionTypes
    });

    dispatch({
      type: 'START_QUIZ',
      payload: {
        quiz: {
          id: Math.random().toString(36).substring(2),
          userId: 'user123', // TODO: Get from auth
          startedAt: new Date(),
          difficulty: settings.difficulty,
          totalQuestions: questions.length,
          questions,
          status: 'in-progress',
          score: 0,
          correctAnswers: 0,
          wrongAnswers: 0,
          skippedQuestions: 0
        },
        settings
      }
    });
  };

  const handleQuestionAnswer = (answer: string) => {
    handleAnswer(answer);
    if (isLastQuestion) {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    dispatch({ type: 'RESET_QUIZ' });
    setShowResult(false);
  };

  const handleClose = () => {
    dispatch({ type: 'RESET_QUIZ' });
    onClose();
  };

  if (showResult && state.currentQuiz) {
    return (
      <QuizResult
        result={analyzeQuizResult(state.currentQuiz, [])} // TODO: Pass words
        onRetry={handleRetry}
        onClose={handleClose}
      />
    );
  }

  if (!state.currentQuiz) {
    return (
      <QuizStart
        learnedWordsCount={learnedWordsCount}
        onStart={handleStart}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {currentQuestion && (
        <QuizQuestion
          question={currentQuestion}
          onAnswer={handleQuestionAnswer}
          onSkip={handleSkip}
        />
      )}
    </div>
  );
};