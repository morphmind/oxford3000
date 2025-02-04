import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search, X, ChevronLeft, ChevronRight, BookOpen, GraduationCap, Users, Clock, ChevronDown, BookmarkPlus, BookmarkCheck, Volume2, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Word } from './data/oxford3000.types';
import { oxford3000a } from './data/oxford3000a';
import { oxford3000b } from './data/oxford3000b';
import { oxford3000b2 } from './data/oxford3000b2';
import { oxford3000c } from './data/oxford3000c';
import { oxford3000c2 } from './data/oxford3000c2';
import { oxford3000d } from './data/oxford3000d';
import { oxford3000e } from './data/oxford3000e';
import { oxford3000f } from './data/oxford3000f';
import { oxford3000g } from './data/oxford3000g';
import { oxford3000h } from './data/oxford3000h';
import { oxford3000i } from './data/oxford3000i';
import { oxford3000j } from './data/oxford3000j';
import { oxford3000k } from './data/oxford3000k';
import { oxford3000l } from './data/oxford3000l';
import { oxford3000m } from './data/oxford3000m';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLevel, setActiveLevel] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showLearned, setShowLearned] = useState(false);
  const [learnedWords, setLearnedWords] = useState<{[key: string]: boolean}>(() => {
    const saved = localStorage.getItem('learnedWords');
    return saved ? JSON.parse(saved) : {};
  });

  const wordsPerPage = 12;
  const words = [...oxford3000a, ...oxford3000b, ...oxford3000b2, ...oxford3000c, ...oxford3000c2, ...oxford3000d, ...oxford3000e, ...oxford3000f, ...oxford3000g, ...oxford3000h, ...oxford3000i, ...oxford3000j, ...oxford3000k, ...oxford3000l, ...oxford3000m];
  
  // Calculate total and learned words
  const totalWords = words.length;
  const learnedWordsCount = Object.values(learnedWords).filter(Boolean).length;
  const learningProgress = (learnedWordsCount / totalWords) * 100;

  // Handle learning status toggle
  const toggleLearned = (word: string) => {
    const newLearnedWords = {
      ...learnedWords,
      [word]: !learnedWords[word]
    };
    setLearnedWords(newLearnedWords);
    localStorage.setItem('learnedWords', JSON.stringify(newLearnedWords));
  };

  // Handle text-to-speech
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // Filter words based on search and level
  const filteredWords = words.filter(word => {
    const matchesSearch = word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         word.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = activeLevel === 'all' || word.level.toLowerCase() === activeLevel;
    const matchesLearned = !showLearned || learnedWords[word.word];
    return matchesSearch && matchesLevel && matchesLearned;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
  const startIndex = (currentPage - 1) * wordsPerPage;
  const displayedWords = filteredWords.slice(startIndex, startIndex + wordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const levels = [
    { id: 'all', title: 'Tümü', count: '3000', level: 'ALL' },
    { id: 'a1', title: 'Başlangıç', count: '750', level: 'A1' },
    { id: 'a2', title: 'Temel', count: '750', level: 'A2' },
    { id: 'b1', title: 'Orta', count: '600', level: 'B1' },
    { id: 'b2', title: 'İyi', count: '500', level: 'B2' },
    { id: 'c1', title: 'İleri', count: '400', level: 'C1' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-header2">
        <div className="hust">
          <div className="hust1">
            <div className="logo">
              <img src="https://ozelders.7csoftware.com/themev2/assets/img/logo.png" alt="Özeldersalanı" className="h-8" />
            </div>
            <nav className="menu">
              <ul>
                <li><a href="#">Özel Ders</a></li>
                <li><a href="#">Online Ders</a></li>
                <li><a href="#">Şehirler</a></li>
                <li><a href="#">Ders Talepleri</a></li>
                <li><a href="#">Ders Alanı</a></li>
              </ul>
            </nav>
          </div>
          <div className="msag">
            <a href="#" className="girisbtn">Giriş Yap</a>
            <a href="#" className="kayitbtn">Kayıt Oluştur</a>
          </div>
        </div>
      </header>

      <main>
        <div className="oxford-container">
          <div className="container">
            <div className="oxford-header">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Özel Ders</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Oxford 3000</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Oxford 3000™ Kelime Listesi</h1>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Oxford 3000™ kelime listesi ile İngilizce seviyenizi yükseltin. Özel ders veya online kurs seçeneklerimizle hedefinize daha hızlı ulaşın.</p>
            </div>

            <div className="oxford-search">
              <div className="search-box">
                <Search className="w-5 h-5 text-gray-400 ml-4" />
                <input 
                  type="text" 
                  placeholder="Kelime ara..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Kelime ara"
                  className="flex-1 px-4 py-3 outline-none"
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="p-2 hover:text-gray-600 transition-colors mr-2"
                    onClick={() => setSearchQuery('')}
                    aria-label="Aramayı temizle"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="oxford-levels">
              <div className="learning-stats">
                <div className="stats-card">
                  <div className="stats-header">
                    <div className="stats-title">
                      <h3>Kelime Öğrenme İlerlemen</h3>
                      <span className="stats-subtitle">{learnedWordsCount} / {totalWords} kelime</span>
                    </div>
                    <button 
                      className={`view-learned ${showLearned ? 'active' : ''}`}
                      onClick={() => setShowLearned(!showLearned)}
                    >
                      {showLearned ? (
                        <><BookmarkCheck className="w-4 h-4" /> Öğrendiklerim</>
                      ) : (
                        <><BookmarkPlus className="w-4 h-4" /> Öğrendiklerimi Göster</>
                      )}
                    </button>
                  </div>
                  
                  <div className="stats-body">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{width: `${learningProgress}%`}}
                      >
                        <span className="progress-text">{Math.round(learningProgress)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="level-tabs">
                {levels.map(level => (
                  <button
                    key={level.id}
                    className={`level-tab ${activeLevel === level.id ? 'active' : ''}`}
                    onClick={() => setActiveLevel(level.id)}
                  >
                    <div className="tab-header">
                      <div className={`tab-icon ${level.id}`}>
                        {level.level}
                      </div>
                      <div className="tab-content">
                        <span className="tab-title">{level.title}</span>
                        <span className="tab-count">{level.count} Kelime</span>
                      </div>
                    </div>
                    <div className="tab-progress">
                      <div className="tab-progress-bar">
                        <div 
                          className="tab-progress-fill"
                          style={{
                            width: `${(Object.values(learnedWords).filter(Boolean).length / words.filter(w => 
                              level.id === 'all' ? true : w.level.toLowerCase() === level.id
                            ).length * 100)}%`
                          }}
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="words-grid">
              {displayedWords.map((word, index) => (
              <div key={`word-${index}`} className="word-card">
                <div className="word-header">
                  <div className="word-main">
                    <h4>{word.word}</h4>
                    <span className={`level ${word.level.toLowerCase()}`}>{word.level}</span>
                  </div>
                  <div className="word-actions" onClick={() => toggleLearned(word.word)}>
                    <button className={`action-btn ${learnedWords[word.word] ? 'active' : ''}`}>
                      {learnedWords[word.word] ? (
                        <BookmarkCheck className="w-5 h-5" />
                      ) : (
                        <BookmarkPlus className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="word-body">
                  <div className="pronunciation">
                    <span className="ipa">{word.pronunciation}</span>
                    <button 
                      className="sound-btn"
                      onClick={() => speak(word.word)}
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="meaning">
                    <h5>Anlamı</h5>
                    <p>{word.meaning}</p>
                  </div>

                  <div className="examples">
                    <h5>Örnek Cümleler</h5>
                    <ul>
                      {word.examples.map((example, i) => (
                        <li key={`${word.word}-example-${i}`}>
                          {example.en}
                          <button 
                            className="sound-btn-mini"
                            onClick={() => speak(example.en)}
                            title="Listen"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="word-footer">
                  <div className="learning-status">
                    <div className={`status-indicator ${learnedWords[word.word] ? 'learned' : 'not-learned'}`}>
                      {learnedWords[word.word] ? (
                        <BookmarkCheck className="w-4 h-4" />
                      ) : (
                        <BookmarkPlus className="w-4 h-4" />
                      )}
                      <span>{learnedWords[word.word] ? 'Öğrenildi' : 'Öğrenilmedi'}</span>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
            
            <div className="oxford-pagination">
              <button 
                className="page-nav prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="page-numbers">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`page-num ${currentPage === i + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                {totalPages > 5 && <span className="page-dots">...</span>}
                {totalPages > 5 && (
                  <button
                    className={`page-num ${currentPage === totalPages ? 'active' : ''}`}
                    onClick={() => handlePageChange(totalPages)}
                  >
                    {totalPages}
                  </button>
                )}
              </div>
              <button 
                className="page-nav next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="cta-section">
              <div className="cta-content">
                <div className="cta-text">
                  <span className="cta-badge">%100 Başarı Garantisi</span>
                  <h2 className="cta-title">İngilizce Öğreniminde Yeni Bir Sayfa Açın</h2>
                  <p className="cta-description">Oxford 3000™ kelime listesi ve uzman öğretmenlerimizle, İngilizce öğrenme yolculuğunuzda yanınızdayız.</p>
                  <ul className="cta-features">
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">Birebir özel ders imkanı</span>
                    </li>
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">Esnek ders programı</span>
                    </li>
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">İlk ders ücretsiz</span>
                    </li>
                  </ul>
                  <div className="cta-actions">
                    <a href="#" className="btn-primary">
                      Hemen Başla
                      <span className="btn-highlight">İlk Ders Ücretsiz!</span>
                    </a>
                    <a href="#" className="btn-secondary">
                      Öğretmen Profillerini İncele
                    </a>
                  </div>
                </div>
                <div className="cta-image">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Online İngilizce Eğitimi" 
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="oxford-info mb-12">
              <div className="info-grid">
                <div className="info-card">
                  <BookOpen className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">3000 Temel Kelime</h3>
                  <p>Oxford 3000™, dil uzmanları ve deneyimli öğretmenler tarafından özenle seçilmiş, İngilizce öğreniminde en önemli ve yararlı 3000 kelimeyi içerir.</p>
                </div>
                <div className="info-card">
                  <GraduationCap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Bilimsel Yaklaşım</h3>
                  <p>2 milyardan fazla kelime içeren Oxford English Corpus veritabanı kullanılarak, en sık kullanılan ve farklı bağlamlarda karşılaşılan kelimeler belirlenmiştir.</p>
                </div>
                <div className="info-card">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Uzman Seçimi</h3>
                  <p>Her kelime, dil öğretimi ve araştırma alanlarındaki uzmanlar tarafından değerlendirilmiş ve seçilmiştir.</p>
                </div>
                <div className="info-card">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Verimli Öğrenme</h3>
                  <p>Seyahat, vücut bölümleri gibi günlük hayatta sık kullanılan kelimeler de listeye dahil edilmiştir.</p>
                </div>
              </div>
            </div>

            <div className="faq-section mt-16 mb-12">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="relative">
                  Sıkça Sorulan Sorular
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-bs-primary to-bs-600 rounded-full"></span>
                </span>
              </h2>
              <div className="faq-grid">
                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Oxford 3000™ kelime listesi nedir ve neden önemlidir?</span>
                    <ChevronDown className="w-5 h-5" />
                  </summary>
                  <div className="faq-answer">
                    <p>Oxford 3000™, İngilizce öğreniminde temel oluşturan, en sık kullanılan ve en önemli 3000 kelimeyi içeren özel bir listedir. Bu liste, Oxford University Press'in kapsamlı araştırmaları sonucunda oluşturulmuştur. İngilizce metinlerin %80-85'ini anlayabilmek için bu kelimeleri bilmek yeterlidir. Bu nedenle, İngilizce öğreniminde ilk hedef olarak bu listeyi öğrenmek önerilmektedir.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Oxford 3000™ kelime listesi hangi kriterlere göre oluşturuldu?</span>
                    <ChevronDown className="w-5 h-5" />
                  </summary>
                  <div className="faq-answer">
                    <p>Oxford 3000™ kelime listesi, üç temel kritere göre oluşturulmuştur:</p>
                    <ul>
                      <li>1. Kullanım Sıklığı: Oxford English Corpus'taki 2 milyar kelimelik veritabanı analiz edilerek en sık kullanılan kelimeler belirlenmiştir.</li>
                      <li>2. Kullanım Alanı: Kelimelerin farklı bağlamlarda ve durumlarda kullanılabilirliği değerlendirilmiştir.</li>
                      <li>3. Öğrenme Önceliği: Dil öğretmenleri ve uzmanların görüşleri doğrultusunda, öğrencilerin öncelikli olarak öğrenmesi gereken kelimeler seçilmiştir.</li>
                    </ul>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Oxford 3000™ kelime listesi hangi seviyeleri kapsar ve nasıl organize edilmiştir?</span>
                    <ChevronDown className="w-5 h-5" />
                  </summary>
                  <div className="faq-answer">
                    <p>Oxford 3000™ kelime listesi, Avrupa Ortak Dil Çerçevesi (CEFR) seviyelerine göre organize edilmiştir:</p>
                    <ul>
                      <li>• A1 (Başlangıç) - 750 kelime</li>
                      <li>• A2 (Temel) - 750 kelime</li>
                      <li>• B1 (Orta) - 600 kelime</li>
                      <li>• B2 (İyi) - 500 kelime</li>
                      <li>• C1 (İleri) - 400 kelime</li>
                    </ul>
                    <p>Her seviye, öğrencinin dil gelişimine uygun şekilde düzenlenmiş ve kademeli olarak zorlaşan kelimeler içermektedir.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Oxford 3000™ kelimelerini ne kadar sürede öğrenebilirim?</span>
                    <ChevronDown className="w-5 h-5" />
                  </summary>
                  <div className="faq-answer">
                    <p>Öğrenme süresi birçok faktöre bağlıdır:</p>
                    <ul>
                      <li>• Günlük çalışma süresi (1-2 saat önerilir)</li>
                      <li>• Öğrenme yöntemi ve teknikleri</li>
                      <li>• Mevcut İngilizce seviyeniz</li>
                      <li>• Pratik yapma imkanlarınız</li>
                    </ul>
                    <p>Ortalama bir öğrenci için:</p>
                    <ul>
                      <li>• Günde 10-15 yeni kelime hedefiyle</li>
                      <li>• Düzenli tekrar ve pratikle</li>
                      <li>• 6-12 ay içinde tüm listeyi öğrenmek mümkündür</li>
                    </ul>
                    <p>Özel ders veya online kurslarımızla bu süreyi önemli ölçüde kısaltabilirsiniz.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Oxford 3000™ kelimelerini öğrenmenin en etkili yolu nedir?</span>
                    <ChevronDown className="w-5 h-5" />
                  </summary>
                  <div className="faq-answer">
                    <p>En etkili öğrenme stratejisi şu adımları içerir:</p>
                    <ul>
                      <li>1. Seviyenize uygun kelimelerden başlayın (A1-A2)</li>
                      <li>2. Her kelimeyi bağlam içinde öğrenin</li>
                      <li>3. Düzenli tekrar yapın (Spaced Repetition)</li>
                      <li>4. Öğrendiğiniz kelimeleri aktif olarak kullanın</li>
                      <li>5. Görsel ve işitsel materyallerle destekleyin</li>
                    </ul>
                    <p>Platformumuzda sunduğumuz özellikler (telaffuz, örnek cümleler, ilerleme takibi) bu süreci kolaylaştırmak için tasarlanmıştır.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    <span>Oxford 3000™ kelimelerini öğrendikten sonra ne yapmalıyım?</span>
                    <ChevronDown className="w-5 h-5" />
                  </summary>
                  <div className="faq-answer">
                    <p>Oxford 3000™ kelimelerini öğrendikten sonra:</p>
                    <ul>
                      <li>1. Oxford 5000™ listesine geçebilirsiniz (akademik ve profesyonel kelimeler)</li>
                      <li>2. İlgi alanınıza özel kelime listeleri oluşturabilirsiniz</li>
                      <li>3. Deyimler ve kalıp ifadelere odaklanabilirsiniz</li>
                      <li>4. Akademik İngilizce çalışmalarına başlayabilirsiniz</li>
                    </ul>
                    <p>Uzman öğretmenlerimiz size bu süreçte rehberlik edebilir ve kişisel hedeflerinize uygun bir öğrenme planı oluşturabilir.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="bottom-cta">
              <div className="bottom-cta-content">
                <div className="bottom-cta-text">
                  <div className="bottom-cta-header">
                    <span className="bottom-cta-badge">Özel Teklif</span>
                    <h2 className="bottom-cta-title">Kariyerinize Yön Verecek Fırsat</h2>
                    <p className="bottom-cta-description">
                      İlk derse özel %50 indirim ve ücretsiz seviye tespit sınavı ile İngilizce öğrenme yolculuğunuza başlayın.
                    </p>
                  </div>
                  <div className="bottom-cta-stats">
                    <div className="stat-item">
                      <span className="stat-value">10.000+</span>
                      <span className="stat-label">Mutlu Öğrenci</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">500+</span>
                      <span className="stat-label">Uzman Öğretmen</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">%98</span>
                      <span className="stat-label">Memnuniyet</span>
                    </div>
                  </div>
                  <div className="bottom-cta-actions">
                    <a href="#" className="btn-cta-primary">
                      Şimdi Başvur
                      <span className="btn-arrow">→</span>
                    </a>
                    <div className="cta-guarantee">
                      <span className="guarantee-icon">🔒</span>
                      <span className="guarantee-text">30 Gün Para İade Garantisi</span>
                    </div>
                  </div>
                </div>
                <div className="bottom-cta-testimonials">
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      <p>"6 ay içinde akıcı İngilizce konuşmaya başladım. Harika bir deneyimdi!"</p>
                    </div>
                    <div className="testimonial-author">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
                        alt="Öğrenci"
                        className="author-image"
                      />
                      <div className="author-info">
                        <span className="author-name">Ayşe Y.</span>
                        <span className="author-title">Yazılım Mühendisi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Hızlı Erişim</h4>
            <ul>
              <li><a href="#">Mesajlarım</a></li>
              <li><a href="#">Bildirimlerim</a></li>
              <li><a href="#">Favorilerim</a></li>
              <li><a href="#">Özel Ders Talepleri</a></li>
              <li><a href="#">Yardım</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Özel Ders Hizmetleri</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Özel Ders Fiyatları</a></li>
              <li><a href="#">Özel Ders Verenler</a></li>
              <li><a href="#">Matematik Özel Ders</a></li>
              <li><a href="#">İngilizce Özel Ders</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Online Kurslar</h4>
            <ul>
              <li><a href="#">Online Almanca Kursu</a></li>
              <li><a href="#">Online İngilizce Kursu</a></li>
              <li><a href="#">Online İspanyolca Kursu</a></li>
              <li><a href="#">Online Matematik Kursu</a></li>
              <li><a href="#">Online Fransızca Kursu</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kurumsal</h4>
            <ul>
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Kullanım Şartları</a></li>
              <li><a href="#">Gizlilik Politikası</a></li>
              <li><a href="#">Mesafeli Satış Sözleşmesi</a></li>
              <li><a href="#">İade Şartları</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <ul>
              <li><a href="#">Bize Ulaşın</a></li>
              <li><a href="#">Yardım Merkezi</a></li>
              <li><a href="#">Kariyer</a></li>
              <li><a href="#">İş Ortaklığı</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-contact">
          <div className="contact-info">
            <div>
              <MapPin className="icon" />
              <p>Çiftehavuzlar Mahallesi Eski Londra Asfaltı Caddesi A1 Blok 1B29 Esenler / İSTANBUL YTÜ - Davutpaşa Yerleşkesi</p>
            </div>
            <div>
              <Phone className="icon" />
              <p>0 (850) 346 79 95</p>
            </div>
            <div>
              <Mail className="icon" />
              <p>info@ozeldersalani.com</p>
            </div>
          </div>
          <div className="social-media">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="company-logo">
            <img src="https://ozelders.7csoftware.com/themev2/assets/img/logo.png" alt="Özeldersalanı" />
            <span>ÖZELDERSALANI</span>
          </div>
          <p className="copyright">Copyright @ 2024 Tüm Haklarımız Saklıdır</p>
          <div className="legal-links">
            <a href="#">Yasal Hususlar</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Çerez Politikası</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;