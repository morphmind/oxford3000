import { Quiz, QuizResult } from '../types';
import { Word } from '../../data/oxford3000.types';

export function analyzeQuizResult(quiz: Quiz, words: Word[]): QuizResult {
  const result: QuizResult = {
    quizId: quiz.id,
    totalScore: calculateTotalScore(quiz),
    successRate: calculateSuccessRate(quiz),
    levelAnalysis: analyzeLevels(quiz, words),
    wordTypeAnalysis: analyzeWordTypes(quiz, words),
    recommendations: generateRecommendations(quiz, words),
    wrongAnswers: quiz.questions.filter(q => q.isCorrect === false)
  };

  return result;
}

function calculateTotalScore(quiz: Quiz): number {
  const pointsPerQuestion = 100 / quiz.totalQuestions;
  return Math.round(quiz.correctAnswers * pointsPerQuestion);
}

function calculateSuccessRate(quiz: Quiz): number {
  return Math.round((quiz.correctAnswers / quiz.totalQuestions) * 100);
}

function analyzeLevels(quiz: Quiz, words: Word[]) {
  const levels: { [key: string]: { total: number; correct: number; percentage: number } } = {
    'A1': { total: 0, correct: 0, percentage: 0 },
    'A2': { total: 0, correct: 0, percentage: 0 },
    'B1': { total: 0, correct: 0, percentage: 0 },
    'B2': { total: 0, correct: 0, percentage: 0 },
    'C1': { total: 0, correct: 0, percentage: 0 }
  };

  quiz.questions.forEach(question => {
    const word = words.find(w => w.word === question.wordId);
    if (word) {
      levels[word.level].total++;
      if (question.isCorrect) {
        levels[word.level].correct++;
      }
    }
  });

  // Calculate percentages
  Object.keys(levels).forEach(level => {
    const { total, correct } = levels[level];
    levels[level].percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  });

  return levels;
}

function analyzeWordTypes(quiz: Quiz, words: Word[]) {
  const types: { [key: string]: { total: number; correct: number; percentage: number } } = {};

  quiz.questions.forEach(question => {
    const word = words.find(w => w.word === question.wordId);
    if (word) {
      if (!types[word.type]) {
        types[word.type] = { total: 0, correct: 0, percentage: 0 };
      }
      types[word.type].total++;
      if (question.isCorrect) {
        types[word.type].correct++;
      }
    }
  });

  // Calculate percentages
  Object.keys(types).forEach(type => {
    const { total, correct } = types[type];
    types[type].percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  });

  return types;
}

function generateRecommendations(quiz: Quiz, words: Word[]): string[] {
  const recommendations: string[] = [];
  const successRate = calculateSuccessRate(quiz);

  // Overall performance recommendations
  if (successRate < 50) {
    recommendations.push('Genel performansınız geliştirilmeli. Daha fazla pratik yapmanızı öneririz.');
  } else if (successRate < 75) {
    recommendations.push('İyi gidiyorsunuz! Düzenli tekrarlarla başarınızı artırabilirsiniz.');
  } else {
    recommendations.push('Harika bir performans! Öğrendiğiniz kelimeleri pekiştirmek için düzenli tekrar yapmaya devam edin.');
  }

  // Level-based recommendations
  const levelAnalysis = analyzeLevels(quiz, words);
  const weakestLevel = Object.entries(levelAnalysis)
    .filter(([_, stats]) => stats.total > 0)
    .sort(([_, a], [__, b]) => a.percentage - b.percentage)[0];

  if (weakestLevel && weakestLevel[1].percentage < 70) {
    recommendations.push(`${weakestLevel[0]} seviyesindeki kelimeler üzerinde daha fazla çalışmanızı öneririz.`);
  }

  // Word type recommendations
  const typeAnalysis = analyzeWordTypes(quiz, words);
  const weakestType = Object.entries(typeAnalysis)
    .filter(([_, stats]) => stats.total > 0)
    .sort(([_, a], [__, b]) => a.percentage - b.percentage)[0];

  if (weakestType && weakestType[1].percentage < 70) {
    recommendations.push(`${weakestType[0]} türündeki kelimeler üzerinde daha fazla çalışmanızı öneririz.`);
  }

  // Time-based recommendations
  const averageTimePerQuestion = quiz.questions.reduce((acc, q) => acc + (q.timeSpent || 0), 0) / quiz.questions.length;
  if (averageTimePerQuestion > 30) {
    recommendations.push('Sorulara cevap verme sürenizi iyileştirmek için hızlı kelime tanıma alıştırmaları yapabilirsiniz.');
  }

  return recommendations;
}