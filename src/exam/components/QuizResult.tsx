import React from 'react';
import { QuizResult as QuizResultType } from '../types';

interface QuizResultProps {
  result: QuizResultType;
  onRetry: () => void;
  onClose: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  result,
  onRetry,
  onClose
}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-bs-navy mb-2">Sınav Sonucu</h2>
        <p className="text-bs-navygri">
          Tebrikler! Sınavı tamamladınız.
        </p>
      </div>

      {/* Score Overview */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-bs-50 p-6 rounded-xl text-center">
          <div className="text-4xl font-bold text-bs-primary mb-2">
            {result.totalScore}
          </div>
          <div className="text-bs-navygri">Toplam Puan</div>
        </div>
        <div className="bg-bs-50 p-6 rounded-xl text-center">
          <div className="text-4xl font-bold text-bs-primary mb-2">
            {result.successRate}%
          </div>
          <div className="text-bs-navygri">Başarı Oranı</div>
        </div>
        <div className="bg-bs-50 p-6 rounded-xl text-center">
          <div className="text-4xl font-bold text-bs-primary mb-2">
            {result.wrongAnswers.length}
          </div>
          <div className="text-bs-navygri">Yanlış Sayısı</div>
        </div>
      </div>

      {/* Level Analysis */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-bs-navy mb-4">
          Seviye Analizi
        </h3>
        <div className="grid grid-cols-5 gap-4">
          {Object.entries(result.levelAnalysis).map(([level, analysis]) => (
            <div key={level} className="bg-white p-4 rounded-lg border border-bs-fourly">
              <div className="text-sm font-semibold mb-2">{level}</div>
              <div className="text-2xl font-bold text-bs-primary mb-1">
                {analysis.percentage}%
              </div>
              <div className="text-xs text-bs-navygri">
                {analysis.correct}/{analysis.total} doğru
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Word Type Analysis */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-bs-navy mb-4">
          Kelime Türü Analizi
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(result.wordTypeAnalysis).map(([type, analysis]) => (
            <div key={type} className="bg-white p-4 rounded-lg border border-bs-fourly">
              <div className="text-sm font-semibold mb-2">{type}</div>
              <div className="text-2xl font-bold text-bs-primary mb-1">
                {analysis.percentage}%
              </div>
              <div className="text-xs text-bs-navygri">
                {analysis.correct}/{analysis.total} doğru
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-bs-navy mb-4">
          Öneriler
        </h3>
        <div className="bg-bs-50 p-6 rounded-xl">
          <ul className="space-y-3">
            {result.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-bs-primary">•</span>
                <span className="text-bs-navygri">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Wrong Answers */}
      {result.wrongAnswers.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-bs-navy mb-4">
            Yanlış Cevaplar
          </h3>
          <div className="space-y-4">
            {result.wrongAnswers.map((question, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-bs-fourly">
                <div className="font-medium text-bs-navy mb-2">
                  {question.question}
                </div>
                <div className="text-red-500 mb-1">
                  Sizin cevabınız: {question.userAnswer}
                </div>
                <div className="text-green-500 mb-2">
                  Doğru cevap: {question.correctAnswer}
                </div>
                <div className="text-sm text-bs-navygri">
                  {question.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-bs-primary text-white rounded-lg hover:bg-bs-800 
                   transition-colors"
        >
          Yeni Sınav
        </button>
        <button
          onClick={onClose}
          className="px-6 py-3 border border-bs-primary text-bs-primary rounded-lg 
                   hover:bg-bs-50 transition-colors"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};