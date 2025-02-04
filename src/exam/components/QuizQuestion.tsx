import React, { useState, useEffect } from 'react';
import { QuizQuestion as QuizQuestionType } from '../types';
import { Volume2 } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (answer: string) => void;
  onSkip: () => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  onSkip
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [question]);

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return; // Prevent changing answer
    setSelectedAnswer(answer);
    onAnswer(answer);
    setShowExplanation(true);
  };

  const isCorrectAnswer = (answer: string) => {
    return selectedAnswer === answer && answer === question.correctAnswer;
  };

  const isWrongAnswer = (answer: string) => {
    return selectedAnswer === answer && answer !== question.correctAnswer;
  };

  const getOptionClassName = (answer: string) => {
    let className = "p-4 border rounded-lg cursor-pointer transition-all ";
    
    if (!selectedAnswer) {
      className += "hover:border-bs-primary hover:bg-bs-50";
    } else if (isCorrectAnswer(answer)) {
      className += "border-green-500 bg-green-50 text-green-700";
    } else if (isWrongAnswer(answer)) {
      className += "border-red-500 bg-red-50 text-red-700";
    } else if (answer === question.correctAnswer) {
      className += "border-green-500 bg-green-50 text-green-700";
    } else {
      className += "opacity-50 cursor-not-allowed";
    }
    
    return className;
  };

  const handlePronunciation = () => {
    const utterance = new SpeechSynthesisUtterance(question.wordId);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-bs-navygri">
            Soru Tipi: {question.type === 'multiple-choice' ? 'Çoktan Seçmeli' :
                       question.type === 'sentence-completion' ? 'Cümle Tamamlama' :
                       question.type === 'pronunciation' ? 'Telaffuz' : 'Örnek Eşleştirme'}
          </span>
          {question.type === 'pronunciation' && (
            <button
              onClick={handlePronunciation}
              className="flex items-center gap-2 px-4 py-2 text-bs-primary hover:bg-bs-50 rounded-lg transition-colors"
            >
              <Volume2 size={20} />
              <span>Dinle</span>
            </button>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-bs-navy mb-2">
          {question.question}
        </h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleAnswerSelect(option)}
            className={getOptionClassName(option)}
          >
            {option}
          </div>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-bs-navygri">
            {question.explanation}
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={onSkip}
          disabled={!!selectedAnswer}
          className="px-6 py-2 text-bs-navygri hover:text-bs-primary disabled:opacity-50 
                   disabled:cursor-not-allowed transition-colors"
        >
          Soruyu Geç
        </button>
        
        {selectedAnswer && (
          <button
            onClick={onSkip}
            className="px-6 py-2 bg-bs-primary text-white rounded-lg hover:bg-bs-800 
                     transition-colors"
          >
            Sonraki Soru
          </button>
        )}
      </div>
    </div>
  );
};