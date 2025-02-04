export interface Quiz {
  id: string;
  userId: string;
  startedAt: Date;
  completedAt?: Date;
  difficulty: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'mixed';
  totalQuestions: number;
  questions: QuizQuestion[];
  status: 'in-progress' | 'completed' | 'abandoned';
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedQuestions: number;
}

export interface QuizQuestion {
  id: string;
  wordId: string;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string;
  isCorrect?: boolean;
  isSkipped: boolean;
  timeSpent?: number;
  explanation?: string;
}

export type QuestionType = 
  | 'multiple-choice' 
  | 'sentence-completion' 
  | 'pronunciation' 
  | 'example-matching';

export interface QuizResult {
  quizId: string;
  totalScore: number;
  successRate: number;
  levelAnalysis: {
    [key: string]: LevelAnalysis;
  };
  wordTypeAnalysis: {
    [key: string]: WordTypeAnalysis;
  };
  recommendations: string[];
  wrongAnswers: QuizQuestion[];
}

interface LevelAnalysis {
  total: number;
  correct: number;
  percentage: number;
}

interface WordTypeAnalysis {
  total: number;
  correct: number;
  percentage: number;
}

export interface QuizSettings {
  questionCount: number;
  difficulty: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'mixed';
  questionTypes: QuestionType[];
}