import React, { useState } from 'react';
import { QuizSettings } from '../types';

interface QuizStartProps {
  learnedWordsCount: number;
  onStart: (settings: QuizSettings) => void;
}

export const QuizStart: React.FC<QuizStartProps> = ({ learnedWordsCount, onStart }) => {
  const [settings, setSettings] = useState<QuizSettings>({
    questionCount: 10,
    difficulty: 'mixed',
    questionTypes: ['multiple-choice', 'sentence-completion', 'pronunciation', 'example-matching']
  });

  const handleStart = () => {
    onStart(settings);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-bs-navy mb-2">Kelime Sınavına Başla</h2>
        <p className="text-bs-navygri">
          Öğrendiğiniz {learnedWordsCount} kelime üzerinden sınav olacaksınız.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-bs-navy mb-2">
            Soru Sayısı
          </label>
          <select
            className="w-full p-3 border border-bs-fourly rounded-lg"
            value={settings.questionCount}
            onChange={(e) => setSettings({
              ...settings,
              questionCount: Number(e.target.value)
            })}
          >
            <option value={10}>10 Soru</option>
            <option value={20}>20 Soru</option>
            <option value={30}>30 Soru</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-bs-navy mb-2">
            Zorluk Seviyesi
          </label>
          <select
            className="w-full p-3 border border-bs-fourly rounded-lg"
            value={settings.difficulty}
            onChange={(e) => setSettings({
              ...settings,
              difficulty: e.target.value as QuizSettings['difficulty']
            })}
          >
            <option value="mixed">Karışık</option>
            <option value="A1">A1 - Başlangıç</option>
            <option value="A2">A2 - Temel</option>
            <option value="B1">B1 - Orta</option>
            <option value="B2">B2 - İyi</option>
            <option value="C1">C1 - İleri</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-bs-navy mb-2">
            Soru Tipleri
          </label>
          <div className="space-y-2">
            {[
              { id: 'multiple-choice', label: 'Çoktan Seçmeli' },
              { id: 'sentence-completion', label: 'Cümle Tamamlama' },
              { id: 'pronunciation', label: 'Telaffuz' },
              { id: 'example-matching', label: 'Örnek Cümle Eşleştirme' }
            ].map(type => (
              <label key={type.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-bs-primary"
                  checked={settings.questionTypes.includes(type.id as QuizSettings['questionTypes'][0])}
                  onChange={(e) => {
                    const types = e.target.checked
                      ? [...settings.questionTypes, type.id as QuizSettings['questionTypes'][0]]
                      : settings.questionTypes.filter(t => t !== type.id);
                    setSettings({ ...settings, questionTypes: types });
                  }}
                />
                <span className="ml-2 text-bs-navygri">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={settings.questionTypes.length === 0}
          className="w-full py-4 bg-bs-primary text-white rounded-lg font-medium hover:bg-bs-800 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sınava Başla
        </button>
      </div>
    </div>
  );
};