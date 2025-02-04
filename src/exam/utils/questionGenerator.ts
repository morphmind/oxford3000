import { Word } from '../../data/oxford3000.types';
import { QuizQuestion, QuestionType } from '../types';

export function generateQuestions(
  learnedWords: Word[],
  settings: { count: number, types: QuestionType[] }
): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  const shuffledWords = shuffleArray([...learnedWords]);

  for (let i = 0; i < Math.min(settings.count, shuffledWords.length); i++) {
    const word = shuffledWords[i];
    const questionType = settings.types[Math.floor(Math.random() * settings.types.length)];
    
    questions.push(createQuestion(word, questionType, shuffledWords));
  }

  return questions;
}

function createQuestion(word: Word, type: QuestionType, allWords: Word[]): QuizQuestion {
  switch (type) {
    case 'multiple-choice':
      return createMultipleChoiceQuestion(word, allWords);
    case 'sentence-completion':
      return createSentenceCompletionQuestion(word);
    case 'pronunciation':
      return createPronunciationQuestion(word, allWords);
    case 'example-matching':
      return createExampleMatchingQuestion(word, allWords);
    default:
      return createMultipleChoiceQuestion(word, allWords);
  }
}

function createMultipleChoiceQuestion(word: Word, allWords: Word[]): QuizQuestion {
  const incorrectOptions = getRandomWords(allWords, word, 3)
    .map(w => w.meaning);

  const options = shuffleArray([word.meaning, ...incorrectOptions]);

  return {
    id: generateQuestionId(),
    wordId: word.word,
    type: 'multiple-choice',
    question: `"${word.word}" kelimesinin anlamı nedir?`,
    options,
    correctAnswer: word.meaning,
    isSkipped: false,
    explanation: `"${word.word}" kelimesi "${word.meaning}" anlamına gelir. 
                 Örnek: ${word.examples[0]?.en || ''}`
  };
}

function createSentenceCompletionQuestion(word: Word): QuizQuestion {
  const example = word.examples[0]?.en || '';
  const question = example.replace(word.word, '_____');

  // Generate wrong options that make sense in the context
  const options = shuffleArray([
    word.word,
    // Add 3 contextually similar words here
    'example1',
    'example2',
    'example3'
  ]);

  return {
    id: generateQuestionId(),
    wordId: word.word,
    type: 'sentence-completion',
    question: `Boşluğa uygun kelimeyi seçiniz: ${question}`,
    options,
    correctAnswer: word.word,
    isSkipped: false,
    explanation: `Doğru cevap "${word.word}". 
                 Tam cümle: ${example}`
  };
}

function createPronunciationQuestion(word: Word, allWords: Word[]): QuizQuestion {
  const incorrectOptions = getRandomWords(allWords, word, 3)
    .map(w => w.word);

  const options = shuffleArray([word.word, ...incorrectOptions]);

  return {
    id: generateQuestionId(),
    wordId: word.word,
    type: 'pronunciation',
    question: `Telaffuzu dinlediğiniz kelimeyi seçiniz: [${word.pronunciation}]`,
    options,
    correctAnswer: word.word,
    isSkipped: false,
    explanation: `"${word.word}" kelimesinin telaffuzu ${word.pronunciation} şeklindedir.`
  };
}

function createExampleMatchingQuestion(word: Word, allWords: Word[]): QuizQuestion {
  const example = word.examples[0]?.en || '';
  const incorrectOptions = getRandomWords(allWords, word, 3)
    .map(w => w.word);

  const options = shuffleArray([word.word, ...incorrectOptions]);

  return {
    id: generateQuestionId(),
    wordId: word.word,
    type: 'example-matching',
    question: `Hangi kelime bu cümlede kullanılmıştır: "${example}"`,
    options,
    correctAnswer: word.word,
    isSkipped: false,
    explanation: `"${word.word}" kelimesi bu cümlede kullanılmıştır: ${example}`
  };
}

// Utility functions
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getRandomWords(words: Word[], excludeWord: Word, count: number): Word[] {
  return shuffleArray(words.filter(w => w.word !== excludeWord.word))
    .slice(0, count);
}

function generateQuestionId(): string {
  return Math.random().toString(36).substring(2, 15);
}