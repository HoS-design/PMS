/* Englisch – Schreiben (1.–4. Klasse) */
(function () {
  const E = { fach: 'englisch', lang: 'en', area: 'e-writing' };
  const def = (o) => UB.simple(Object.assign({}, E, o));

  // ------------------------------------------------------------------ describing people and places
  def({
    id: 'e-w-describe', title: 'Describing people and places', klassen: [1, 2], img: 'MiniHoS_Kreativ_Bild',
    merk: '<b>Aussehen</b> (appearance): She <b>is</b> tall / short / slim. He <b>has got</b> short dark hair, blue eyes, freckles, a beard. She <b>wears</b> glasses. <b>Charakter</b> (character): He is friendly, funny, shy, clever, kind, helpful, lazy. Mit Beispiel ist es lebendiger: She is very helpful – she always helps me with maths. <b>Orte</b>: There is / There are …, It is big / quiet / modern. It\'s next to … In my room there\'s … Reihenfolge beim Beschreiben: vom Allgemeinen zum Besonderen, von oben nach unten oder von links nach rechts.',
    pools: {
      sort: `tall|A
short|A
slim|A
curly hair|A
blue eyes|A
freckles|A
glasses|A
a beard|A
friendly|C
funny|C
shy|C
lazy|C
clever|C
kind|C
helpful|C
bossy|C`,
      ishas: `My best friend {is|has got} very funny.
She {has got|is} long blond hair.
My brother {is|has got} tall and slim.
He {has got|is} green eyes.
Our teacher {is|has got} always friendly.
My grandpa {has got|is} a grey beard.
Tom {is|has got} quite shy.
Lisa {has got|is} freckles on her nose.
My dog {has got|is} a long tail.
My cousin {is|has got} twelve years old.
My mum {wears|has got} glasses.
Our house {has got|is} a big garden.`,
      gap: `My sister [has got] short brown hair.
She [is] very clever.
Ben [is] a bit lazy, but he [is] very kind.
My dad [wears] glasses and he [has got] a beard.
Our classroom [is] big and bright.
There [are] twenty-two desks in it.
There [is] a big park near my house.
My town [is] small and quiet.`,
      person: `Describe your best friend. => appearance (is / has got) ; character with an example ; what you do together
Describe a person in your family. => name, age ; appearance ; character ; why you like him or her
Describe a famous person you like. => who is it? ; appearance ; why is he or she famous? ; why do you like him or her?
Describe your favourite teacher (you can invent one!). => appearance ; character ; what is special about his or her lessons?`,
      place: `Describe your bedroom. => furniture (there is / there are) ; colours ; where things are (next to, under …) ; what you like about it
Describe your town or village. => where is it? ; how big? ; what is there? ; what can you do there?
Describe your dream house. => where is it? ; rooms ; garden ; something special
Describe your school. => building ; classrooms ; playground ; what you like / don't like`
    },
    levels: {
      1: {
        ichkann: ['Du kannst Aussehen und Charakter unterscheiden.', 'Du verwendest is und has got richtig beim Beschreiben.'],
        tasks: [
          { type: 'sort', pool: 'sort', n: 12, opts: [['A', 'appearance (looks)'], ['C', 'character']], title: 'Appearance or character?', instr: 'Write the words in the correct column.' },
          { type: 'gap', pool: 'ishas', n: 6, title: 'is or has got?', instr: 'Circle the correct word.' },
          { type: 'write', pool: 'person', filter: x => /best friend/.test(x.q), n: 1, lines: 3, title: 'Describe a person.', instr: '' }
        ]
      },
      2: {
        ichkann: ['Du kannst eine Person in mehreren Sätzen beschreiben.', 'Du gibst ein Beispiel für eine Charaktereigenschaft.'],
        tasks: [
          { type: 'gap', pool: 'gap', n: 5, title: 'Fill in the gaps.', instr: 'is, are, has got, wears' },
          { type: 'write', pool: 'person', n: 1, lines: 10, check: ['appearance', 'character + example', 'and, but, because'], title: 'Describe a person.', instr: '' }
        ]
      },
      3: {
        ichkann: ['Du kannst einen Ort genau beschreiben.', 'Du verwendest there is / there are und Präpositionen.'],
        tasks: [
          { type: 'write', pool: 'place', n: 1, lines: 12, check: ['there is / there are', 'prepositions (next to, in front of …)', 'adjectives', '80–100 words'], plan: [['Beginning', 'What is it? Where is it?'], ['Main part', 'What is there? What does it look like?'], ['End', 'Why do you like it?']], title: 'Describe a place.', instr: '' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ emails and letters
  def({
    id: 'e-w-email', title: 'Emails and letters', klassen: [1, 2, 3, 4], img: 'MiniHoS_Schwarz_Laptop-Sitzend',
    merk: '<b>Persönliche E-Mail</b> (informal): Anrede Hi Tom, / Dear Lisa, – Einstieg: Thanks for your email! How are you? – Hauptteil in Absätzen – Schluss: Write soon! / See you soon! – Gruß: Love, / Best wishes, + Name. Kurzformen erlaubt (I\'m, don\'t). <b>Formelle E-Mail/Brief</b> (formal): Dear Sir or Madam, (Name unbekannt) → Yours faithfully, / Dear Mr Brown, / Dear Ms Smith, → Yours sincerely, – Einstieg: I am writing to … – Bitten: Could you please …? I would be grateful if … – Schluss: I look forward to hearing from you. Keine Kurzformen!',
    pools: {
      order: `Hi Tom, >> Thanks for your email! I'm fine. >> Last weekend I went to a concert with my sister. It was great! >> What did you do at the weekend? >> Write soon! >> Love, Lisa
Dear Anna, >> How are you? >> I'm having a party on Saturday and I'd love you to come. >> It starts at three o'clock at my house. >> Please let me know if you can come. >> Best wishes, Ben
Hi Mia, >> Thanks for the invitation! >> I'd love to come to your party. >> Can I bring my little brother? >> See you on Saturday! >> Love, Emma
Dear Sir or Madam, >> I am writing to ask about your English courses for teenagers. >> Could you please send me information about the prices? >> I look forward to hearing from you. >> Yours faithfully, >> Paul Huber`,
      style: `Hi Tom,|I
Dear Sir or Madam,|F
Thanks for your email!|I
I am writing to ask about …|F
Love,|I
Yours faithfully,|F
Write soon!|I
I look forward to hearing from you.|F
How are you?|I
Could you please send me …?|F
See you soon!|I
Yours sincerely,|F
Guess what!|I
I would be grateful if you could …|F
Dear Mr Brown,|F
Best wishes,|I`,
      fix: `Dear Sir or Madam, … Love, Paul => Dear Sir or Madam, … Yours faithfully, Paul
Hi Mr Brown, I'm writing to ask about the trip. => Dear Mr Brown, I am writing to ask about the trip.
Dear Ms Smith, … Yours faithfully, Lena Gruber => Dear Ms Smith, … Yours sincerely, Lena Gruber
Hey! Send me the prices! => Could you please send me the prices?
I can't wait to hear from you, mate! => I look forward to hearing from you.`,
      w1: `Write an email to a new penfriend in England. Introduce yourself. => Hi …, ; name, age, where you live ; family, pets ; hobbies ; Write soon! / Love, …
Write an email to a friend about your weekend. => Hi …, ; what you did (past simple) ; how it was ; question to your friend ; Love, …
Write an email to a friend and invite him or her to your birthday party. => Hi …, ; when and where ; what you are going to do ; please answer ; Best wishes, …`,
      w2: `Your friend has invited you to a party, but you can't come. Write a reply. => Thanks for the invitation ; say sorry and give a reason ; suggest another day ; Love, …
Write an email to your English penfriend about your summer holidays. => where you went ; what you did (past simple) ; the best moment ; plans for next year (going to) ; question
Write an email to a friend who is going to visit you in Austria. => what you are going to do together ; what to bring ; the weather ; Can't wait to see you!`,
      w3: `You want to do a language course in Brighton. Write a formal email to the school and ask for information. => Dear Sir or Madam, ; I am writing to … ; dates, prices, accommodation ; Could you please …? ; I look forward to hearing from you. ; Yours faithfully,
You left your jacket on the train. Write a formal email to the lost property office. => Dear Sir or Madam, ; when and which train ; describe the jacket ; contact details ; Yours faithfully,
Write a formal email to a hotel. You want to book a room for your family. => Dear Sir or Madam, ; dates and number of people ; questions (breakfast, prices, parking) ; I would be grateful if … ; Yours faithfully,`
    },
    levels: {
      1: {
        ichkann: ['Du kennst den Aufbau einer persönlichen E-Mail.', 'Du kannst eine kurze E-Mail an eine Freundin oder einen Freund schreiben.'],
        tasks: [
          { type: 'order', pool: 'order', n: 1, filter: x => !/Sir/.test(x.raw), title: 'Put the email in order.', instr: 'Number the parts.' },
          { type: 'write', pool: 'w1', n: 1, lines: 10, check: ['greeting', 'paragraphs', 'question', 'ending'], title: 'Write an email.', instr: '' }
        ]
      },
      2: {
        ichkann: ['Du unterscheidest persönliche und formelle Sprache.', 'Du kannst auf Einladungen antworten und über Erlebnisse schreiben.'],
        tasks: [
          { type: 'choice', pool: 'style', n: 8, opts: [['I', 'informal'], ['F', 'formal']], head: 'Phrase', title: 'Informal or formal?', instr: 'Tick the correct box.' },
          { type: 'write', pool: 'w2', n: 1, lines: 10, check: ['greeting', 'all points', 'linking words', 'ending'], title: 'Write an email.', instr: '' }
        ]
      },
      3: {
        ichkann: ['Du kannst eine formelle E-Mail schreiben (Dear Sir or Madam … Yours faithfully).', 'Du formulierst Bitten höflich (Could you please …? I would be grateful if …).'],
        tasks: [
          { type: 'pair', pool: 'fix', n: 3, title: 'Make it formal.', instr: 'Correct the mistakes in style.' },
          { type: 'write', pool: 'w3', n: 1, lines: 12, check: ['formal greeting and ending', 'no short forms', 'polite questions', '100–120 words'], title: 'Write a formal email.', instr: '' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ story
  def({
    id: 'e-w-story', title: 'Writing a story', klassen: [2, 3, 4], img: 'MiniHoS_Schwarz_Notizblock',
    merk: '<b>Eine Geschichte</b> hat Einleitung (wer, wo, wann?), Hauptteil mit <b>Höhepunkt</b> und Schluss. Erzählzeit ist das <b>past simple</b> (He opened the door), für Hintergründe das past progressive (It was raining) und für Vorgeschichte das past perfect. <b>Zeitwörter</b> verbinden die Handlung: One day, At first, Then, After that, Suddenly, Later, Finally, In the end. <b>Lebendig</b> wird es mit Adjektiven und Adverbien (a huge, dark forest; she ran quickly), Gefühlen (I was scared) und wörtlicher Rede („Help!“ she shouted). Gib der Geschichte einen Titel.',
    pools: {
      order: `One Saturday morning, Tom and his dog went for a walk in the forest. >> At first, everything was quiet. >> Suddenly, the dog started to bark and ran away. >> Tom followed it and found a little fox with a hurt leg. >> In the end, they took the fox to a vet, and it got better.
Last summer, Lisa was on holiday at the sea. >> One day, she was swimming when she saw something shiny in the water. >> She dived down and picked it up. It was an old ring! >> She took it to the police. >> A week later, the owner called her and gave her a reward.
It was a dark and stormy night. >> Ben was alone at home when he heard a strange noise. >> He was scared, but he went downstairs. >> Then he opened the kitchen door … >> It was only his cat, which had knocked over a vase!`,
      link: `[One day], a strange letter arrived.
[At first], nobody knew who had written it.
[Suddenly], the lights went out.
[After that], we went home.
[In the end], everybody was happy.
[Then] she opened the box.
[Finally], the bus came.
[Later], we had dinner at a café.`,
      tense: `It {was raining|rained} when we left the house.
Suddenly, the phone {rang|was ringing}.
When I got to the station, the train {had left|left}.
While we {were walking|walked} through the park, we saw a squirrel.
She {opened|was opening} the door and screamed.
I was tired because I {hadn't slept|didn't sleep} well.`,
      better: `The dog was big. :: use adjectives => The huge, black dog was barking loudly.
I was scared. :: add a feeling and a reason => I was really scared because the house was so dark and quiet.
He went to the door. :: use an adverb => He walked slowly to the door.
She said help. :: use direct speech => "Help!" she shouted.
It was a nice day. :: describe the weather => The sun was shining and the sky was bright blue.`,
      write: `Write a story with the title "The secret door". => Who? Where? When? ; What happened? (past simple) ; climax: suddenly … ; ending ; title
Write a story that begins: "When I woke up, my room looked completely different …" => past simple ; what was different? ; feelings ; ending
Write a story that ends: "… and that was the best day of my life." => introduction ; what happened ; linking words ; direct speech
Write a story about a day when everything went wrong. => first problem ; then … ; suddenly … ; in the end ; feelings`
    },
    levels: {
      1: {
        ichkann: ['Du kannst die Teile einer Geschichte in die richtige Reihenfolge bringen.', 'Du verwendest Zeitwörter wie One day, Suddenly, In the end.'],
        tasks: [
          { type: 'order', pool: 'order', n: 1, title: 'Put the story in order.', instr: 'Number the parts.' },
          { type: 'gap', pool: 'link', n: 6, wordbox: true, title: 'Linking words', instr: 'Use the words from the box.' },
          { type: 'write', pool: 'write', n: 1, lines: 6, filter: x => !/ends:/.test(x.q), title: 'Write the beginning of a story.', instr: '' }
        ]
      },
      2: {
        ichkann: ['Du kannst Sätze lebendiger machen (Adjektive, Adverbien, Gefühle, wörtliche Rede).', 'Du verwendest past simple und past progressive beim Erzählen.'],
        tasks: [
          { type: 'pair', pool: 'better', n: 3, title: 'Make it more interesting.', instr: 'Rewrite the sentences. Follow the tips.' },
          { type: 'gap', pool: 'tense', n: 4, title: 'Which tense?', instr: 'Circle the correct form.' },
          { type: 'write', pool: 'write', n: 1, lines: 7, check: ['past tenses', 'linking words', 'feelings'], title: 'Write a story.', instr: '' }
        ]
      },
      3: {
        ichkann: ['Du kannst eine vollständige Geschichte mit Höhepunkt schreiben.', 'Du verwendest Erzählzeiten, Zeitwörter und wörtliche Rede sicher.'],
        tasks: [
          { type: 'write', pool: 'write', n: 1, lines: 15, check: ['title', 'past simple / progressive / perfect', 'linking words', 'direct speech', '120–150 words'], plan: [['Beginning', 'Who? Where? When?'], ['Main part', 'What happens? Climax: Suddenly …'], ['Ending', 'How does it end? Feelings?']], title: 'Write a story.', instr: '' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ opinion
  def({
    id: 'e-w-opinion', title: 'Giving your opinion', klassen: [3, 4], img: 'MiniHoS_Geste_Fragezeichen',
    merk: '<b>Meinung sagen</b>: I think … / In my opinion … / I believe … / I\'m sure that … <b>Begründen</b>: because … / The reason is … / For example, … <b>Gegenargumente</b>: On the other hand … / However, … / Some people say … but … <b>Aufzählen</b>: First of all … / Secondly … / Another point is … / Finally … <b>Schluss</b>: In conclusion … / All in all … / To sum up … <b>Aufbau</b> eines Meinungstexts: Einleitung (Thema, eigene Meinung) – Argumente mit Beispielen – Gegenargument – Schluss.',
    pools: {
      sort: `Uniforms are cheaper than fashionable clothes.|P
Everybody looks the same.|C
Nobody is laughed at because of their clothes.|P
You can't show your own style.|C
You don't have to think about what to wear.|P
Uniforms are often uncomfortable.|C
Students feel part of the school.|P
Parents have to buy extra clothes.|C`,
      phrase: `[In my opinion], homework should be shorter.
[First of all], students need time for hobbies.
[For example], I play football three times a week.
[On the other hand], homework helps us to practise.
[However], too much homework is stressful.
[In conclusion], I think short homework is the best solution.`,
      choose: `{In my opinion|In the end}, mobile phones should be allowed at school.
I don't like zoos {because|but} the animals have no freedom.
{On the other hand|First of all}, zoos help to protect rare animals.
{For example|However}, some animals live in very small cages.
{To sum up|Suddenly}, I am against zoos.
Some people say school should start later. {I agree|I'm agree} with them.`,
      write: `Should students have to wear school uniforms? Write your opinion. => introduction with your opinion ; 2 arguments with examples ; 1 counter-argument ; conclusion
"Mobile phones should be allowed in class." Do you agree? => opinion ; arguments for and against ; examples ; In conclusion …
Is it better to live in a city or in the country? => advantages of the city ; advantages of the country ; your opinion with reasons
Should school start at 9 o'clock? Write a post for an online forum. => Hi everyone, ; your opinion ; reasons and examples ; what do others think?`
    },
    levels: {
      1: {
        ichkann: ['Du kannst Argumente für und gegen etwas unterscheiden.', 'Du kennst Wendungen, um deine Meinung zu sagen.'],
        tasks: [
          { type: 'sort', pool: 'sort', n: 8, opts: [['P', 'for school uniforms'], ['C', 'against school uniforms']], title: 'For or against?', instr: 'Sort the arguments.' },
          { type: 'gap', pool: 'phrase', n: 6, wordbox: true, title: 'Useful phrases', instr: 'Use the phrases from the box.' }
        ]
      },
      2: {
        ichkann: ['Du kannst deine Meinung begründen und mit Beispielen stützen.', 'Du verwendest Wendungen wie On the other hand und In conclusion.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 5, title: 'Circle the correct phrase.', instr: '' },
          { type: 'write', pool: 'write', n: 1, lines: 12, check: ['your opinion', 'reasons + examples', 'linking words'], title: 'What do you think?', instr: '' }
        ]
      },
      3: {
        ichkann: ['Du kannst einen gegliederten Meinungstext mit Gegenargument schreiben.', 'Du schreibst Einleitung und Schluss passend zum Thema.'],
        tasks: [
          { type: 'write', pool: 'write', n: 1, lines: 11, check: ['introduction', 'arguments + examples', 'counter-argument', 'conclusion', '120–150 words'], plan: [['Introduction', 'topic + your opinion'], ['Arguments', 'First of all … For example … Another point is …'], ['Counter-argument', 'On the other hand … However …'], ['Conclusion', 'In conclusion …']], title: 'Write an opinion text.', instr: '' }
        ]
      }
    }
  });
})();
