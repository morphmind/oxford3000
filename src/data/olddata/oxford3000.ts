interface Example {
  en: string;
  tr?: string;
}

export interface Word {
  word: string;
  type: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  pronunciation: string;
  meaning: string;
  examples: Example[];
  progress?: number;
  phrases?: string[];
}

export const oxford3000: Word[] = [
  {
    word: 'a, an',
    type: 'indefinite article',
    level: 'A1',
    pronunciation: '/ə/, /æn/',
    meaning: 'belirsizlik artikeli',
    examples: [
      { en: 'I saw a dog.' },
      { en: 'She is an engineer.' }
    ]
  },
  {
    word: 'abandon',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈbændən/',
    meaning: 'terk etmek, vazgeçmek',
    examples: [
      { en: 'They abandoned their car and walked home.' },
      { en: 'The project was abandoned due to lack of funds.' }
    ]
  },
  {
    word: 'abandoned',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/əˈbændənd/',
    meaning: 'terk edilmiş',
    examples: [
      { en: 'The house had been abandoned for years.' },
      { en: 'We found an abandoned puppy on the street.' }
    ]
  },
  {
    word: 'ability',
    type: 'n.',
    level: 'B1',
    pronunciation: '/əˈbɪləti/',
    meaning: 'yetenek, kabiliyet',
    examples: [
      { en: 'She has the ability to learn languages quickly.' },
      { en: 'His mathematical ability is impressive.' }
    ]
  },
  {
    word: 'able',
    type: 'adj.',
    level: 'A2',
    pronunciation: '/ˈeɪbl/',
    meaning: 'yapabilir, muktedir',
    examples: [
      { en: 'Will you be able to come to the party?' },
      { en: "I'm not able to help you right now." }
    ]
  },
  {
    word: 'unable',
    type: 'adj.',
    level: 'B1',
    pronunciation: '/ʌnˈeɪbl/',
    meaning: 'yapamaz, yetersiz',
    examples: [
      { en: 'He was unable to attend the meeting.' },
      { en: 'The company was unable to pay its debts.' }
    ]
  },
  {
    word: 'about',
    type: 'adv., prep.',
    level: 'A1',
    pronunciation: '/əˈbaʊt/',
    meaning: 'hakkında, yaklaşık',
    examples: [
      { en: 'What is the book about?' },
      { en: 'It takes about an hour to get there.' }
    ]
  },
  {
    word: 'above',
    type: 'prep., adv.',
    level: 'A2',
    pronunciation: '/əˈbʌv/',
    meaning: 'üstünde, yukarıda',
    examples: [
      { en: 'The plane flew above the clouds.' },
      { en: 'The temperature was above average.' }
    ]
  },
  {
    word: 'abroad',
    type: 'adv.',
    level: 'A2',
    pronunciation: '/əˈbrɔːd/',
    meaning: 'yurt dışında',
    examples: [
      { en: 'She went abroad to study.' },
      { en: 'They live abroad now.' }
    ]
  },
  {
    word: 'absence',
    type: 'n.',
    level: 'B2',
    pronunciation: '/ˈæbsəns/',
    meaning: 'yokluk, bulunmama',
    examples: [
      { en: 'He apologized for his absence from the meeting.' },
      { en: 'In the absence of evidence, the case was dismissed.' }
    ]
  },
  {
    word: 'absent',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/ˈæbsənt/',
    meaning: 'yok, mevcut değil',
    examples: [
      { en: 'Three students were absent today.' },
      { en: 'He was absent from work for a week.' }
    ]
  },
  {
    word: 'absolute',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/ˈæbsəluːt/',
    meaning: 'mutlak, kesin',
    examples: [
      { en: 'I have absolute confidence in her ability.' },
      { en: 'There was absolute silence in the room.' }
    ]
  },
  {
    word: 'absolutely',
    type: 'adv.',
    level: 'B1',
    pronunciation: '/ˈæbsəluːtli/',
    meaning: 'kesinlikle, tamamen',
    examples: [
      { en: "That's absolutely right!" },
      { en: "I'm absolutely exhausted." }
    ]
  },
  {
    word: 'absorb',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əbˈzɔːrb/',
    meaning: 'emmek, soğurmak',
    examples: [
      { en: 'Plants absorb water through their roots.' },
      { en: 'The sponge absorbed all the water.' }
    ]
  },
  {
    word: 'abuse',
    type: 'n., v.',
    level: 'B2',
    pronunciation: '/əˈbjuːs/',
    meaning: 'kötüye kullanma, istismar',
    examples: [
      { en: 'Child abuse is a serious crime.' },
      { en: "Don't abuse your position of power." }
    ]
  },
  {
    word: 'academic',
    type: 'adj.',
    level: 'B1',
    pronunciation: '/ˌækəˈdemɪk/',
    meaning: 'akademik',
    examples: [
      { en: 'Her academic performance was excellent.' },
      { en: 'The school year begins in September.' }
    ]
  },
  {
    word: 'accent',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈæksent/',
    meaning: 'aksan',
    examples: [
      { en: 'She speaks English with a French accent.' },
      { en: 'His accent is hard to understand.' }
    ]
  },
  {
    word: 'accept',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əkˈsept/',
    meaning: 'kabul etmek',
    examples: [
      { en: 'She accepted the job offer.' },
      { en: 'The machine accepts coins only.' }
    ]
  },
  {
    word: 'acceptable',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/əkˈseptəbl/',
    meaning: 'kabul edilebilir',
    examples: [
      { en: 'This behavior is not acceptable.' },
      { en: 'The quality was acceptable.' }
    ]
  },
  {
    word: 'unacceptable',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/ˌʌnəkˈseptəbl/',
    meaning: 'kabul edilemez',
    examples: [
      { en: 'His behavior was totally unacceptable.' },
      { en: 'The delay was unacceptable.' }
    ]
  },
  {
    word: 'access',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈækses/',
    meaning: 'erişim, giriş',
    examples: [
      { en: 'Do you have access to the internet?' },
      { en: 'The building has wheelchair access.' }
    ]
  },
  {
    word: 'accident',
    type: 'n.',
    level: 'A2',
    pronunciation: '/ˈæksɪdənt/',
    meaning: 'kaza',
    examples: [
      { en: 'He had a car accident.' },
      { en: 'I met her by accident.' }
    ],
    phrases: ['by accident']
  },
  {
    word: 'accidental',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/ˌæksɪˈdentl/',
    meaning: 'kazara olan',
    examples: [
      { en: 'The fire was accidental.' },
      { en: 'It was an accidental discovery.' }
    ]
  },
  {
    word: 'accidentally',
    type: 'adv.',
    level: 'B2',
    pronunciation: '/ˌæksɪˈdentəli/',
    meaning: 'kazara',
    examples: [
      { en: 'I accidentally deleted the file.' },
      { en: 'She accidentally broke the glass.' }
    ]
  },
  {
    word: 'accompany',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈkʌmpəni/',
    meaning: 'eşlik etmek',
    examples: [
      { en: 'Children must be accompanied by an adult.' },
      { en: 'The song was accompanied by guitar.' }
    ]
  },
  {
    word: 'according to',
    type: 'prep.',
    level: 'B1',
    pronunciation: '/əˈkɔːdɪŋ tuː/',
    meaning: 'göre',
    examples: [
      { en: 'According to the weather forecast, it will rain tomorrow.' },
      { en: 'According to scientists, climate change is a serious threat.' }
    ]
  },
  {
    word: 'account',
    type: 'n., v.',
    level: 'B1',
    pronunciation: '/əˈkaʊnt/',
    meaning: 'hesap',
    examples: [
      { en: 'I opened a bank account.' },
      { en: 'Can you account for your actions?' }
    ]
  },
  {
    word: 'accurate',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/ˈækjərət/',
    meaning: 'doğru, kesin',
    examples: [
      { en: 'The information must be accurate.' },
      { en: 'He gave an accurate description of the event.' }
    ]
  },
  {
    word: 'accurately',
    type: 'adv.',
    level: 'B2',
    pronunciation: '/ˈækjərətli/',
    meaning: 'doğru bir şekilde',
    examples: [
      { en: 'The data was accurately recorded.' },
      { en: 'She described the situation accurately.' }
    ]
  },
  {
    word: 'accuse',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈkjuːz/',
    meaning: 'suçlamak',
    examples: [
      { en: 'He was accused of theft.' },
      { en: "Don't accuse me without evidence." }
    ]
  },
  {
    word: 'achieve',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈtʃiːv/',
    meaning: 'başarmak, elde etmek',
    examples: [
      { en: 'She achieved her goals.' },
      { en: 'We achieved great results.' }
    ]
  },
  {
    word: 'achievement',
    type: 'n.',
    level: 'B1',
    pronunciation: '/əˈtʃiːvmənt/',
    meaning: 'başarı',
    examples: [
      { en: 'Graduating was a great achievement.' },
      { en: 'We celebrated his achievements.' }
    ]
  },
  {
    word: 'acid',
    type: 'n.',
    level: 'B2',
    pronunciation: '/ˈæsɪd/',
    meaning: 'asit',
    examples: [
      { en: 'Citrus fruits contain acid.' },
      { en: 'The acid burned through the metal.' }
    ]
  },
  {
    word: 'acknowledge',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əkˈnɒlɪdʒ/',
    meaning: 'kabul etmek, onaylamak',
    examples: [
      { en: 'He acknowledged his mistake.' },
      { en: 'Please acknowledge receipt of this email.' }
    ]
  },
  {
    word: 'acquire',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈkwaɪə(r)/',
    meaning: 'edinmek, kazanmak',
    examples: [
      { en: 'She acquired new skills at her job.' },
      { en: 'The company acquired its competitor.' }
    ]
  },
  {
    word: 'across',
    type: 'adv., prep.',
    level: 'A1',
    pronunciation: '/əˈkrɒs/',
    meaning: 'karşıya, boyunca',
    examples: [
      { en: 'He walked across the street.' },
      { en: 'The bridge across the river.' }
    ]
  },
  {
    word: 'act',
    type: 'n., v.',
    level: 'A2',
    pronunciation: '/ækt/',
    meaning: 'davranmak, rol yapmak',
    examples: [
      { en: 'He acted in a movie.' },
      { en: 'That was a kind act.' }
    ]
  },
  {
    word: 'action',
    type: 'n.',
    level: 'A2',
    pronunciation: '/ˈækʃn/',
    meaning: 'eylem, hareket',
    examples: [
      { en: 'We need to take action now.' },
      { en: 'The movie is full of action.' }
    ],
    phrases: ['take action']
  },
  {
    word: 'active',
    type: 'adj.',
    level: 'A2',
    pronunciation: '/ˈæktɪv/',
    meaning: 'aktif, etkin',
    examples: [
      { en: 'She leads an active lifestyle.' },
      { en: 'The volcano is still active.' }
    ]
  },
  {
    word: 'actively',
    type: 'adv.',
    level: 'B2',
    pronunciation: '/ˈæktɪvli/',
    meaning: 'aktif olarak',
    examples: [
      { en: 'He actively participates in discussions.' },
      { en: 'The company is actively recruiting new staff.' }
    ]
  },
  {
    word: 'activist',
    type: 'n.',
    level: 'B2',
    pronunciation: '/ˈæktɪvɪst/',
    meaning: 'aktivist',
    examples: [
      { en: 'She is an environmental activist.' },
      { en: 'The activists organized a protest.' }
    ]
  },
  {
    word: 'activity',
    type: 'n.',
    level: 'A2',
    pronunciation: '/ækˈtɪvəti/',
    meaning: 'aktivite, faaliyet',
    examples: [
      { en: 'The children enjoy outdoor activities.' },
      { en: 'There was a lot of activity in the office.' }
    ]
  },
  {
    word: 'actor',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ˈæktə(r)/',
    meaning: 'aktör',
    examples: [
      { en: 'He wants to become an actor.' },
      { en: 'The actor won an award.' }
    ]
  },
  {
    word: 'actual',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/ˈæktʃuəl/',
    meaning: 'gerçek, asıl',
    examples: [
      { en: 'The actual cost was higher than expected.' },
      { en: 'These are the actual figures.' }
    ]
  },
  {
    word: 'actually',
    type: 'adv.',
    level: 'B1',
    pronunciation: '/ˈæktʃuəli/',
    meaning: 'aslında',
    examples: [
      { en: "I actually don't like coffee." },
      { en: 'What actually happened?' }
    ]
  },
  {
    word: 'adapt',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈdæpt/',
    meaning: 'uyum sağlamak',
    examples: [
      { en: 'Animals adapt to their environment.' },
      { en: 'We had to adapt to the new system.' }
    ]
  },
  {
    word: 'add',
    type: 'v.',
    level: 'A1',
    pronunciation: '/æd/',
    meaning: 'eklemek',
    examples: [
      { en: 'Add salt to taste.' },
      { en: 'Can you add this to the list?' }
    ]
  },
  {
    word: 'addition',
    type: 'n.',
    level: 'B1',
    pronunciation: '/əˈdɪʃn/',
    meaning: 'ekleme, ilave',
    examples: [
      { en: 'In addition to his salary, he gets a bonus.' },
      { en: 'The addition of new features improved the software.' }
    ],
    phrases: ['in addition (to)']
  },
  {
    word: 'additional',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/əˈdɪʃənl/',
    meaning: 'ek, ilave',
    examples: [
      { en: 'Additional charges may apply.' },
      { en: 'We need additional information.' }
    ]
  },
  {
    word: 'address',
    type: 'n., v.',
    level: 'A1',
    pronunciation: '/əˈdres/',
    meaning: 'adres',
    examples: [
      { en: 'What is your email address?' },
      { en: 'He addressed the letter to his mother.' }
    ]
  },
  {
    word: 'adequate',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/ˈædɪkwət/',
    meaning: 'yeterli',
    examples: [
      { en: 'The room has adequate lighting.' },
      { en: 'Is the heating adequate?' }
    ]
  },
  {
    word: 'adequately',
    type: 'adv.',
    level: 'B2',
    pronunciation: '/ˈædɪkwətli/',
    meaning: 'yeterli şekilde',
    examples: [
      { en: 'The issue was adequately addressed.' },
      { en: 'The building is adequately heated.' }
    ]
  },
  {
    word: 'adjust',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈdʒʌst/',
    meaning: 'ayarlamak',
    examples: [
      { en: 'Adjust the temperature as needed.' },
      { en: 'It took time to adjust to the new schedule.' }
    ]
  },
  {
    word: 'administration',
    type: 'n.',
    level: 'B2',
    pronunciation: '/ədˌmɪnɪˈstreɪʃn/',
    meaning: 'yönetim',
    examples: [
      { en: 'She works in the administration department.' },
      { en: 'The administration announced new policies.' }
    ]
  },
  {
    word: 'admiration',
    type: 'n.',
    level: 'B2',
    pronunciation: '/ˌædməˈreɪʃn/',
    meaning: 'hayranlık',
    examples: [
      { en: 'I have great admiration for her work.' },
      { en: 'He looked at the painting in admiration.' }
    ]
  },
  {
    word: 'admire',
    type: 'v.',
    level: 'B1',
    pronunciation: '/ədˈmaɪə(r)/',
    meaning: 'hayran olmak',
    examples: [
      { en: 'I admire her courage.' },
      { en: 'People admire his dedication.' }
    ]
  },
  {
    word: 'admit',
    type: 'v.',
    level: 'B1',
    pronunciation: '/ədˈmɪt/',
    meaning: 'kabul etmek, itiraf etmek',
    examples: [
      { en: 'He admitted his mistake.' },
      { en: 'They admitted defeat.' }
    ]
  },
  {
    word: 'adopt',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈdɒpt/',
    meaning: 'evlat edinmek, benimsemek',
    examples: [
      { en: 'They decided to adopt a child.' },
      { en: 'The company adopted new policies.' }
    ]
  },
  {
    word: 'adult',
    type: 'n., adj.',
    level: 'A1',
    pronunciation: '/ˈædʌlt/',
    meaning: 'yetişkin',
    examples: [
      { en: 'Children must be accompanied by an adult.' },
      { en: 'He became an adult at 18.' }
    ]
  },
  {
    word: 'advance',
    type: 'n., v.',
    level: 'B2',
    pronunciation: '/ədˈvɑːns/',
    meaning: 'ilerleme, ilerlemek',
    examples: [
      { en: 'Book tickets in advance.' },
      { en: 'Technology continues to advance.' }
    ],
    phrases: ['in advance']
  },
  {
    word: 'advanced',
    type: 'adj.',
    level: 'B1',
    pronunciation: '/ədˈvɑːnst/',
    meaning: 'ileri',
    examples: [
      { en: 'This is an advanced course.' },
      { en: 'The company uses advanced technology.' }
    ]
  },
  {
    word: 'advantage',
    type: 'n.',
    level: 'A2',
    pronunciation: '/ədˈvɑːntɪdʒ/',
    meaning: 'avantaj',
    examples: [
      { en: 'The main advantage is the location.' },
      { en: 'He took advantage of the situation.' }
    ],
    phrases: ['take advantage of']
  },
  {
    word: 'adventure',
    type: 'n.',
    level: 'A2',
    pronunciation: '/ədˈventʃə(r)/',
    meaning: 'macera',
    examples: [
      { en: 'They went on an adventure.' },
      { en: 'Life is an adventure.' }
    ]
  },
  {
    word: 'advertise',
    type: 'v.',
    level: 'B1',
    pronunciation: '/ˈædvətaɪz/',
    meaning: 'reklam yapmak',
    examples: [
      { en: 'They advertise on TV.' },
      { en: 'The job was advertised in the newspaper.' }
    ]
  },
  {
    word: 'advertisement',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ədˈvɜːtɪsmənt/',
    meaning: 'reklam',
    examples: [
      { en: 'I saw an advertisement for the new phone.' },
      { en: 'The magazine is full of advertisements.' }
    ]
  },
  {
    word: 'advice',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ədˈvaɪs/',
    meaning: 'tavsiye',
    examples: [
      { en: 'Can you give me some advice?' },
      { en: 'I need medical advice.' }
    ]
  },
  {
    word: 'advise',
    type: 'v.',
    level: 'B1',
    pronunciation: '/ədˈvaɪz/',
    meaning: 'tavsiye etmek',
    examples: [
      { en: 'The doctor advised rest.' },
      { en: 'I advised him to wait.' }
    ]
  },
  {
    word: 'affair',
    type: 'n.',
    level: 'B2',
    pronunciation: '/əˈfeə(r)/',
    meaning: 'olay, ilişki',
    examples: [
      { en: 'It was a private affair.' },
      { en: 'He manages business affairs.' }
    ]
  },
  {
    word: 'affect',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈfekt/',
    meaning: 'etkilemek',
    examples: [
      { en: 'The weather affects my mood.' },
      { en: 'How will this affect us?' }
    ]
  },
  {
    word: 'affection',
    type: 'n.',
    level: 'B2',
    pronunciation: '/əˈfekʃn/',
    meaning: 'sevgi, şefkat',
    examples: [
      { en: 'She showed great affection for her pets.' },
      { en: 'He spoke with affection about his grandmother.' }
    ]
  },
  {
    word: 'afford',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈfɔːd/',
    meaning: 'karşılayabilmek',
    examples: [
      { en: "We can't afford a new car." },
      { en: 'Can you afford to take time off?' }
    ]
  },
  {
    word: 'afraid',
    type: 'adj.',
    level: 'A1',
    pronunciation: '/əˈfreɪd/',
    meaning: 'korkmak',
    examples: [
      { en: "I'm afraid of spiders." },
      { en: "Don't be afraid." }
    ]
  },
  {
    word: 'after',
    type: 'prep., conj., adv.',
    level: 'A1',
    pronunciation: '/ˈɑːftə(r)/',
    meaning: 'sonra',
    examples: [
      { en: 'After dinner, we went for a walk.' },
      { en: 'The day after tomorrow.' }
    ]
  },
  {
    word: 'afternoon',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ˌɑːftəˈnuːn/',
    meaning: 'öğleden sonra',
    examples: [
      { en: 'We meet in the afternoon.' },
      { en: 'Good afternoon!' }
    ]
  },
  {
    word: 'afterward',
    type: 'adv.',
    level: 'B1',
    pronunciation: '/ˈɑːftəwəd/',
    meaning: 'sonra, daha sonra',
    examples: [
      { en: 'We had lunch, and afterward went shopping.' },
      { en: 'I saw him shortly afterward.' }
    ]
  },
  {
    word: 'again',
    type: 'adv.',
    level: 'A1',
    pronunciation: '/əˈɡen/',
    meaning: 'tekrar',
    examples: [
      { en: 'Can you say that again?' },
      { en: 'I hope to see you again soon.' }
    ]
  },
  {
    word: 'against',
    type: 'prep.',
    level: 'A2',
    pronunciation: '/əˈɡenst/',
    meaning: 'karşı',
    examples: [
      { en: 'He leaned against the wall.' },
      { en: 'They played against the champions.' }
    ]
  },
  {
    word: 'age',
    type: 'n.',
    level: 'A1',
    pronunciation: '/eɪdʒ/',
    meaning: 'yaş',
    examples: [
      { en: 'What is your age?' },
      { en: 'She acts her age.' }
    ]
  },
  {
    word: 'aged',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/eɪdʒd/',
    meaning: 'yaşlı',
    examples: [
      { en: 'The aged wine tastes better.' },
      { en: 'Care for the aged is important.' }
    ]
  },
  {
    word: 'agency',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈeɪdʒənsi/',
    meaning: 'ajans',
    examples: [
      { en: 'A travel agency.' },
      { en: 'The news agency reported the story.' }
    ]
  },
  {
    word: 'agenda',
    type: 'n.',
    level: 'B2',
    pronunciation: '/əˈdʒendə/',
    meaning: 'gündem',
    examples: [
      { en: "What's on the agenda for today?" },
      { en: 'The meeting agenda was distributed.' }
    ]
  },
  {
    word: 'agent',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈeɪdʒənt/',
    meaning: 'ajan, temsilci',
    examples: [
      { en: 'A real estate agent.' },
      { en: 'She is a secret agent.' }
    ]
  },
  {
    word: 'aggressive',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/əˈ ɡresɪv/',
    meaning: 'saldırgan, agresif',
    examples: [
      { en: 'The dog became aggressive.' },
      { en: 'He has an aggressive management style.' }
    ]
  },
  {
    word: 'ago',
    type: 'adv.',
    level: 'A1',
    pronunciation: '/əˈɡəʊ/',
    meaning: 'önce',
    examples: [
      { en: 'I saw her two days ago.' },
      { en: 'That happened long ago.' }
    ]
  },
  {
    word: 'agree',
    type: 'v.',
    level: 'A1',
    pronunciation: '/əˈɡriː/',
    meaning: 'kabul etmek, anlaşmak',
    examples: [
      { en: 'I agree with you.' },
      { en: 'They agreed to meet.' }
    ]
  },
  {
    word: 'agreement',
    type: 'n.',
    level: 'B1',
    pronunciation: '/əˈɡriːmənt/',
    meaning: 'anlaşma',
    examples: [
      { en: 'They signed the agreement.' },
      { en: 'We reached an agreement.' }
    ]
  },
  {
    word: 'ahead',
    type: 'adv.',
    level: 'A2',
    pronunciation: '/əˈhed/',
    meaning: 'ileri, önde',
    examples: [
      { en: 'The road ahead is clear.' },
      { en: 'Plan ahead for the future.' }
    ]
  },
  {
    word: 'aid',
    type: 'n., v.',
    level: 'B2',
    pronunciation: '/eɪd/',
    meaning: 'yardım',
    examples: [
      { en: 'They sent aid to the disaster area.' },
      { en: 'The medicine aided his recovery.' }
    ]
  },
  {
    word: 'aim',
    type: 'n., v.',
    level: 'B1',
    pronunciation: '/eɪm/',
    meaning: 'amaç, hedeflemek',
    examples: [
      { en: 'Our aim is to help students learn.' },
      { en: 'He aimed the camera at the birds.' }
    ]
  },
  {
    word: 'air',
    type: 'n.',
    level: 'A1',
    pronunciation: '/eə(r)/',
    meaning: 'hava',
    examples: [
      { en: 'Fresh air is good for health.' },
      { en: 'The birds flew through the air.' }
    ]
  },
  {
    word: 'aircraft',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈeəkrɑːft/',
    meaning: 'uçak',
    examples: [
      { en: 'The aircraft took off on time.' },
      { en: 'Military aircraft flew overhead.' }
    ]
  },
  {
    word: 'airport',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ˈeəpɔːt/',
    meaning: 'havalimanı',
    examples: [
      { en: 'We arrived at the airport early.' },
      { en: 'The airport was very busy.' }
    ]
  },
  {
    word: 'alarm',
    type: 'n., v.',
    level: 'B1',
    pronunciation: '/əˈlɑːm/',
    meaning: 'alarm',
    examples: [
      { en: 'The fire alarm went off.' },
      { en: 'The situation alarmed everyone.' }
    ]
  },
  {
    word: 'alarming',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/əˈlɑːmɪŋ/',
    meaning: 'endişe verici',
    examples: [
      { en: 'The news was quite alarming.' },
      { en: 'There was an alarming increase in crime.' }
    ]
  },
  {
    word: 'alcohol',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈælkəhɒl/',
    meaning: 'alkol',
    examples: [
      { en: 'The restaurant serves alcohol.' },
      { en: 'He stopped drinking alcohol.' }
    ]
  },
  {
    word: 'alcoholic',
    type: 'adj.',
    level: 'B1',
    pronunciation: '/ˌælkəˈhɒlɪk/',
    meaning: 'alkollü',
    examples: [
      { en: 'Alcoholic beverages are not allowed.' },
      { en: 'She prefers non-alcoholic drinks.' }
    ]
  },
  {
    word: 'alive',
    type: 'adj.',
    level: 'A2',
    pronunciation: '/əˈlaɪv/',
    meaning: 'canlı, yaşayan',
    examples: [
      { en: 'The plant is still alive.' },
      { en: 'He was glad to be alive.' }
    ]
  },
  {
    word: 'all',
    type: 'det., pron., adv.',
    level: 'A1',
    pronunciation: '/ɔːl/',
    meaning: 'hepsi, tüm',
    examples: [
      { en: 'All students must attend.' },
      { en: "That's all for today." }
    ]
  },
  {
    word: 'allow',
    type: 'v.',
    level: 'A2',
    pronunciation: '/əˈlaʊ/',
    meaning: 'izin vermek',
    examples: [
      { en: 'Smoking is not allowed here.' },
      { en: 'Parents should allow children to play.' }
    ]
  },
  {
    word: 'ally',
    type: 'n., v.',
    level: 'B2',
    pronunciation: '/ˈælaɪ/',
    meaning: 'müttefik',
    examples: [
      { en: 'The two countries became allies.' },
      { en: 'They allied themselves with France.' }
    ]
  },
  {
    word: 'almost',
    type: 'adv.',
    level: 'A2',
    pronunciation: '/ˈɔːlməʊst/',
    meaning: 'neredeyse',
    examples: [
      { en: "It's almost time to go." },
      { en: 'The work is almost finished.' }
    ]
  },
  {
    word: 'alone',
    type: 'adj., adv.',
    level: 'A2',
    pronunciation: '/əˈləʊn/',
    meaning: 'yalnız',
    examples: [
      { en: 'She lives alone.' },
      { en: "I don't like being alone." }
    ]
  },
  {
    word: 'along',
    type: 'prep., adv.',
    level: 'A2',
    pronunciation: '/əˈlɒŋ/',
    meaning: 'boyunca',
    examples: [
      { en: 'Walk along the river.' },
      { en: 'The cat ran along the fence.' }
    ]
  },
  {
    word: 'alongside',
    type: 'prep., adv.',
    level: 'B2',
    pronunciation: '/əˈlɒŋsaɪd/',
    meaning: 'yanında, birlikte',
    examples: [
      { en: 'The boat sailed alongside the dock.' },
      { en: 'She worked alongside experienced doctors.' }
    ]
  },
  {
    word: 'aloud',
    type: 'adv.',
    level: 'B1',
    pronunciation: '/əˈlaʊd/',
    meaning: 'sesli, yüksek sesle',
    examples: [
      { en: 'Read the text aloud.' },
      { en: 'He was thinking aloud.' }
    ]
  },
  {
    word: 'alphabet',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ˈælfəbet/',
    meaning: 'alfabe',
    examples: [
      { en: 'The English alphabet has 26 letters.' },
      { en: 'Children learn the alphabet at school.' }
    ]
  },
  {
    word: 'alphabetical',
    type: 'adj.',
    level: 'A2',
    pronunciation: '/ˌælfəˈbetɪkl/',
    meaning: 'alfabetik',
    examples: [
      { en: 'Put the names in alphabetical order.' },
      { en: 'The books are arranged alphabetically.' }
    ]
  },
  {
    word: 'already',
    type: 'adv.',
    level: 'A2',
    pronunciation: '/ɔːlˈredi/',
    meaning: 'çoktan, zaten',
    examples: [
      { en: "I've already seen that movie." },
      { en: 'Is it time already?' }
    ]
  },
  {
    word: 'also',
    type: 'adv.',
    level: 'A1',
    pronunciation: '/ˈɔːlsəʊ/',
    meaning: 'ayrıca, da/de',
    examples: [
      { en: 'She also speaks French.' },
      { en: 'He is also coming to the party.' }
    ]
  },
  {
    word: 'alter',
    type: 'v.',
    level: 'B2',
    pronunciation: '/ˈɔːltə(r)/',
    meaning: 'değiştirmek',
    examples: [
      { en: 'They altered their plans.' },
      { en: 'The dress needs to be altered.' }
    ]
  },
  {
    word: 'alternative',
    type: 'n., adj.',
    level: 'B1',
    pronunciation: '/ɔːlˈtɜːnətɪv/',
    meaning: 'alternatif',
    examples: [
      { en: 'Is there an alternative solution?' },
      { en: 'We need to find alternative energy sources.' }
    ]
  },
  {
    word: 'although',
    type: 'conj.',
    level: 'B1',
    pronunciation: '/ɔːlˈðəʊ/',
    meaning: 'rağmen',
    examples: [
      { en: 'Although it was raining, we went out.' },
      { en: 'He went to work although he was ill.' }
    ]
  },
  {
    word: 'altogether',
    type: 'adv.',
    level: 'B2',
    pronunciation: '/ˌɔːltəˈɡeðə(r)/',
    meaning: 'tamamen, toplamda',
    examples: [
      { en: 'The situation is altogether different.' },
      { en: 'That makes $50 altogether.' }
    ]
  },
  {
    word: 'always',
    type: 'adv.',
    level: 'A1',
    pronunciation: '/ˈɔːlweɪz/',
    meaning: 'her zaman',
    examples: [
      { en: 'She always arrives on time.' },
      { en: 'I will always remember you.' }
    ]
  },
  {
    word: 'amaze',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈmeɪz/',
    meaning: 'şaşırtmak',
    examples: [
      { en: 'His performance amazed everyone.' },
      { en: 'I was amazed by her talent.' }
    ]
  },
  {
    word: 'amazing',
    type: 'adj.',
    level: 'A2',
    pronunciation: '/əˈmeɪzɪŋ/',
    meaning: 'şaşırtıcı, harika',
    examples: [
      { en: 'The view was amazing.' },
      { en: 'She did an amazing job.' }
    ]
  },
  {
    word: 'ambition',
    type: 'n.',
    level: 'B1',
    pronunciation: '/æmˈbɪʃn/',
    meaning: 'hırs, tutku',
    examples: [
      { en: 'His ambition is to become a doctor.' },
      { en: 'She has great ambition.' }
    ]
  },
  {
    word: 'ambulance',
    type: 'n.',
    level: 'A2',
    pronunciation: '/ˈæmbjələns/',
    meaning: 'ambulans',
    examples: [
      { en: 'Call an ambulance!' },
      { en: 'The ambulance arrived quickly.' }
    ]
  },
  {
    word: 'among',
    type: 'prep.',
    level: 'A2',
    pronunciation: '/əˈmʌŋ/',
    meaning: 'arasında',
    examples: [
      { en: 'He was among friends.' },
      { en: 'The book was among her possessions.' }
    ]
  },
  {
    word: 'amount',
    type: 'n., v.',
    level: 'A2',
    pronunciation: '/əˈmaʊnt/',
    meaning: 'miktar',
    examples: [
      { en: 'A large amount of money.' },
      { en: 'The costs amount to $1000.' }
    ]
  },
  {
    word: 'amuse',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈmjuːz/',
    meaning: 'eğlendirmek',
    examples: [
      { en: 'The clown amused the children.' },
      { en: 'The story amused everyone.' }
    ]
  },
  {
    word: 'analyze',
    type: 'v.',
    level: 'B1',
    pronunciation: '/ˈænəlaɪz/',
    meaning: 'analiz etmek',
    examples: [
      { en: 'Scientists analyzed the data.' },
      { en: 'We need to analyze the situation.' }
    ]
  },
  {
    word: 'analysis',
    type: 'n.',
    level: 'B1',
    pronunciation: '/əˈnæləsɪs/',
    meaning: 'analiz',
    examples: [
      { en: 'The analysis showed interesting results.' },
      { en: 'She did a detailed analysis.' }
    ]
  },
  {
    word: 'ancient',
    type: 'adj.',
    level: 'A2',
    pronunciation: '/ˈeɪnʃənt/',
    meaning: 'antik, eski',
    examples: [
      { en: 'Ancient Egyptian civilization.' },
      { en: 'They discovered ancient ruins.' }
    ]
  },
  {
    word: 'and',
    type: 'conj.',
    level: 'A1',
    pronunciation: '/ænd/',
    meaning: 've',
    examples: [
      { en: 'Black and white.' },
      { en: 'She and I are friends.' }
    ]
  },
  {
    word: 'anger',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈæŋɡə(r)/',
    meaning: 'öfke',
    examples: [
      { en: 'He felt anger rising inside him.' },
      { en: 'Try to control your anger.' }
    ]
  },
  {
    word: 'angle',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈæŋɡl/',
    meaning: 'açı',
    examples: [
      { en: 'The sun was at a low angle.' },
      { en: 'Look at it from a different angle.' }
    ]
  },
  {
    word: 'angry',
    type: 'adj.',
    level: 'A1',
    pronunciation: '/ˈæŋɡri/',
    meaning: 'kızgın',
    examples: [
      { en: "Don't get angry with me." },
      { en: 'She was angry about the mistake.' }
    ]
  },
  {
    word: 'animal',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ˈænɪml/',
    meaning: 'hayvan',
    examples: [
      { en: 'Wild animals live in the forest.' },
      { en: 'She loves animals.' }
    ]
  },
  {
    word: 'ankle',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˈæŋkl/',
    meaning: 'ayak bileği',
    examples: [
      { en: 'She twisted her ankle.' },
      { en: 'The water was up to our ankles.' }
    ]
  },
  {
    word: 'anniversary',
    type: 'n.',
    level: 'B2',
    pronunciation: '/ˌænɪˈvɜːsəri/',
    meaning: 'yıldönümü',
    examples: [
      { en: 'They celebrated their wedding anniversary.' },
      { en: "It's the company's 50th anniversary." }
    ]
  },
  {
    word: 'announce',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈnaʊns/',
    meaning: 'duyurmak',
    examples: [
      { en: 'They announced their engagement.' },
      { en: 'The winner will be announced tomorrow.' }
    ]
  },
  {
    word: 'announcement',
    type: 'n.',
    level: 'B1',
    pronunciation: '/əˈnaʊnsmənt/',
    meaning: 'duyuru',
    examples: [
      { en: 'Please listen to this important announcement.' },
      { en: 'The announcement was made this morning.' }
    ]
  },
  {
    word: 'annoy',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈnɔɪ/',
    meaning: 'rahatsız etmek',
    examples: [
      { en: 'The noise began to annoy me.' },
      { en: "Don't annoy your sister." }
    ]
  },
  {
    word: 'annual',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/ˈænjuəl/',
    meaning: 'yıllık',
    examples: [
      { en: 'The annual meeting is in June.' },
      { en: 'This is an annual event.' }
    ]
  },
  {
    word: 'another',
    type: 'det., pron.',
    level: 'A1',
    pronunciation: '/əˈnʌðə(r)/',
    meaning: 'başka bir',
    examples: [
      { en: 'Would you like another cup of tea?' },
      { en: 'We need another solution.' }
    ]
  },
  {
    word: 'answer',
    type: 'n., v.',
    level: 'A1',
    pronunciation: '/ˈɑːnsə(r)/',
    meaning: 'cevap, cevaplamak',
    examples: [
      { en: 'What is the answer?' },
      { en: 'Please answer the question.' }
    ]
  },
  {
    word: 'anticipate',
    type: 'v.',
    level: 'B2',
    pronunciation: '/ænˈtɪsɪpeɪt/',
    meaning: 'öngörmek, beklemek',
    examples: [
      { en: 'We anticipate heavy traffic.' },
      { en: "I didn't anticipate so many problems." }
    ]
  },
  {
    word: 'anxiety',
    type: 'n.',
    level: 'B2',
    pronunciation: '/æŋˈzaɪəti/',
    meaning: 'endişe, kaygı',
    examples: [
      { en: 'She felt anxiety about the exam.' },
      { en: 'There is growing anxiety about the economy.' }
    ]
  },
  {
    word: 'anxious',
    type: 'adj.',
    level: 'B1',
    pronunciation: '/ˈæŋkʃəs/',
    meaning: 'endişeli',
    examples: [
      { en: 'She felt anxious about the interview.' },
      { en: 'Parents are anxious about their children.' }
    ]
  },
  {
    word: 'any',
    type: 'det., pron., adv.',
    level: 'A1',
    pronunciation: '/ˈeni/',
    meaning: 'herhangi bir',
    examples: [
      { en: 'Do you have any questions?' },
      { en: "I don't have any money." }
    ]
  },
  {
    word: 'anybody',
    type: 'pron.',
    level: 'A2',
    pronunciation: '/ˈenibɒdi/',
    meaning: 'herhangi biri',
    examples: [
      { en: 'Is anybody home?' },
      { en: "I don't know anybody here." }
    ]
  },
  {
    word: 'anymore',
    type: 'adv.',
    level: 'A2',
    pronunciation: '/ˌeniˈmɔː(r)/',
    meaning: 'artık',
    examples: [
      { en: "She doesn't live here anymore." },
      { en: "I can't take it anymore." }
    ]
  },
  {
    word: 'anyone',
    type: 'pron.',
    level: 'A1',
    pronunciation: '/ˈeniwʌn/',
    meaning: 'herhangi biri',
    examples: [
      { en: 'Has anyone seen my keys?' },
      { en: "Don't tell anyone." }
    ]
  },
  {
    word: 'anything',
    type: 'pron.',
    level: 'A1',
    pronunciation: '/ˈeniθɪŋ/',
    meaning: 'herhangi bir şey',
    examples: [
      { en: 'Would you like anything to drink?' },
      { en: "I didn't say anything." }
    ]
  },
  {
    word: 'anyway',
    type: 'adv.',
    level: 'A2',
    pronunciation: '/ˈeniweɪ/',
    meaning: 'her neyse',
    examples: [
      { en: 'Anyway, what happened next?' },
      { en: "I'm going to do it anyway." }
    ]
  },
  {
    word: 'anywhere',
    type: 'adv.',
    level: 'A2',
    pronunciation: '/ˈeniweə(r)/',
    meaning: 'herhangi bir yer',
    examples: [
      { en: 'We can go anywhere you like.' },
      { en: "I can't find it anywhere." }
    ]
  },
  {
    word: 'apart',
    type: 'adv.',
    level: 'B1',
    pronunciation: '/əˈpɑːt/',
    meaning: 'ayrı',
    examples: [
      { en: 'The houses are two miles apart.' },
      { en: 'Apart from that, everything is fine.' }
    ]
  },
  {
    word: 'apartment',
    type: 'n.',
    level: 'A1',
    pronunciation: '/əˈpɑːtmənt/',
    meaning: 'daire',
    examples: [
      { en: 'They live in a small apartment.' },
      { en: 'The apartment is on the third floor.' }
    ]
  },
  {
    word: 'apologize',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈpɒlədʒaɪz/',
    meaning: 'özür dilemek',
    examples: [
      { en: 'I apologize for being late.' },
      { en: 'He apologized for his mistake.' }
    ]
  },
  {
    word: 'apparent',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/əˈpærənt/',
    meaning: 'açık, belli',
    examples: [
      { en: 'It was apparent that something was wrong.' },
      { en: 'The differences were apparent.' }
    ]
  },
  {
    word: 'appeal',
    type: 'n., v.',
    level: 'B2',
    pronunciation: '/əˈpiːl/',
    meaning: 'çekicilik, başvurmak',
    examples: [
      { en: 'The movie has wide appeal.' },
      { en: 'He appealed against the decision.' }
    ]
  },
  {
    word: 'appear',
    type: 'v.',
    level: 'A2',
    pronunciation: '/əˈpɪə(r)/',
    meaning: 'görünmek',
    examples: [
      { en: 'The sun appeared from behind the clouds.' },
      { en: 'She appeared to be happy.' }
    ]
  },
  {
    word: 'appearance',
    type: 'n.',
    level: 'A2',
    pronunciation: '/əˈpɪərəns/',
    meaning: 'görünüş',
    examples: [
      { en: 'He cares about his appearance.' },
      { en: 'The building has changed in appearance.' }
    ]
  },
  {
    word: 'apple',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ˈæpl/',
    meaning: 'elma',
    examples: [
      { en: 'She ate a red apple.' },
      { en: 'Apple pie is my favorite.' }
    ]
  },
  {
    word: 'application',
    type: 'n.',
    level: 'B1',
    pronunciation: '/ˌæplɪˈkeɪʃn/',
    meaning: 'başvuru, uygulama',
    examples: [
      { en: 'He submitted his job application.' },
      { en: 'Download the mobile application.' }
    ]
  },
  {
    word: 'apply',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈplaɪ/',
    meaning: 'başvurmak, uygulamak',
    examples: [
      { en: 'She applied for the job.' },
      { en: 'Apply the cream twice daily.' }
    ]
  },
  {
    word: 'appoint',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈpɔɪnt/',
    meaning: 'atamak',
    examples: [
      { en: 'They appointed a new manager.' },
      { en: 'He was appointed to the committee.' }
    ]
  },
  {
    word: 'appointment',
    type: 'n.',
    level: 'A2',
    pronunciation: '/əˈpɔɪntmənt/',
    meaning: 'randevu',
    examples: [
      { en: 'I have a dentist appointment.' },
      { en: 'Make an appointment to see the doctor.' }
    ]
  },
  {
    word: 'appreciate',
    type: 'v.',
    level: 'B1',
    pronunciation: '/əˈpriːʃieɪt/',
    meaning: 'takdir etmek',
    examples: [
      { en: 'I really appreciate your help.' },
      { en: 'They appreciate good music.' }
    ]
  },
  {
    word: 'approach',
    type: 'v., n.',
    level: 'B1',
    pronunciation: '/əˈprəʊtʃ/',
    meaning: 'yaklaşmak',
    examples: [
      { en: 'Winter is approaching.' },
      { en: 'We need a different approach.' }
    ]
  },
  {
    word: 'appropriate',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/əˈprəʊpriət/',
    meaning: 'uygun',
    examples: [
      { en: 'Is this appropriate behavior?' },
      { en: 'Choose the appropriate word.' }
    ]
  },
  {
    word: 'approval',
    type: 'n.',
    level: 'B2',
    pronunciation: '/əˈpruːvl/',
    meaning: 'onay',
    examples: [
      { en: 'The plan needs approval.' },
      { en: 'She nodded in approval.' }
    ]
  },
  {
    word: 'approve',
    type: 'v.',
    level: 'B2',
    pronunciation: '/əˈpruːv/',
    meaning: 'onaylamak',
    examples: [
      { en: 'The committee approved the proposal.' },
      { en: 'Parents must approve the trip.' }
    ]
  },
  {
    word: 'approximate',
    type: 'adj.',
    level: 'B2',
    pronunciation: '/əˈprɒksɪmət/',
    meaning: 'yaklaşık',
    examples: [
      { en: 'The approximate cost is $100.' },
      { en: 'Give me an approximate time.' }
    ]
  },
  {
    word: 'April',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ˈeɪprəl/',
    meaning: 'Nisan',
    examples: [
      { en: 'April showers bring May flowers.' },
      { en: 'Her birthday is in April.' }
    ]
  },
  {
    word: 'area',
    type: 'n.',
    level: 'A1',
    pronunciation: '/ˈeəriə/',
    meaning: 'alan, bölge',
    examples: [
      { en: 'This is a residential area.' },
      { en: 'The total area is 50 square meters.' }
    ]
  },
  {
    word: 'argue',
    type: 'v.',
    level: 'A2',
    pronunciation: '/ˈɑːɡjuː/',
    meaning: 'tartışmak',
    examples: [
      { en: "Don't argue with me." },
      { en: 'They argued about money.' }
    ]
  },
  ];