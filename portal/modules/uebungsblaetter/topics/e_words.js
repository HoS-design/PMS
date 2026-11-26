/* Englisch – Wortschatz und Wendungen (1.–4. Klasse) */
(function () {
  const E = { fach: 'englisch', lang: 'en', area: 'e-words' };
  const def = (o) => UB.simple(Object.assign({}, E, o));

  // ------------------------------------------------------------------ numbers, time, dates
  const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const word = (n) => {
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? '-' + ONES[n % 10] : '');
    if (n < 1000) return ONES[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' and ' + word(n % 100) : '');
    return word(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? (n % 1000 < 100 ? ' and ' : ' ') + word(n % 1000) : '');
  };
  const ORD = { one: 'first', two: 'second', three: 'third', five: 'fifth', eight: 'eighth', nine: 'ninth', twelve: 'twelfth' };
  const ordWord = (n) => { const w = word(n), parts = w.split(/([ -])/); let last = parts.pop(); last = ORD[last] || (last.endsWith('y') ? last.slice(0, -1) + 'ieth' : last + 'th'); return parts.join('') + last; };
  const ordShort = (n) => n + ((n % 100 >= 11 && n % 100 <= 13) ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[n % 10] || 'th'));
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const HOURS = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  const timeWords = (h, m) => {
    const hh = HOURS[h % 12], next = HOURS[(h + 1) % 12];
    if (m === 0) return hh + ' o\'clock';
    if (m === 15) return 'a quarter past ' + hh;
    if (m === 30) return 'half past ' + hh;
    if (m === 45) return 'a quarter to ' + next;
    if (m < 30) return word(m) + (m % 5 ? ' minutes' : '') + ' past ' + hh;
    return word(60 - m) + ((60 - m) % 5 ? ' minutes' : '') + ' to ' + next;
  };
  // Lineare Pools für Domino/Memory erzeugen (feste Liste, damit Lehrer-Ansicht und Karten funktionieren)
  const numPool = [13, 15, 17, 19, 20, 22, 30, 34, 40, 45, 50, 58, 61, 70, 73, 80, 86, 90, 99, 100, 101, 115, 250, 308, 999, 1000, 1200, 2026].map(n => n + ' => ' + word(n)).join('\n');
  const ordPool = [1, 2, 3, 4, 5, 8, 9, 11, 12, 13, 20, 21, 22, 23, 30, 31, 40, 52, 100].map(n => ordShort(n) + ' => ' + ordWord(n)).join('\n');
  const timePool = [[7, 0], [8, 15], [9, 30], [10, 45], [1, 5], [2, 10], [3, 20], [4, 25], [5, 35], [6, 40], [11, 50], [12, 55], [2, 30], [4, 15], [6, 45], [9, 0]].map(([h, m]) => h + ':' + String(m).padStart(2, '0') + ' => ' + timeWords(h, m)).join('\n');
  const datePool = [[1, 1], [14, 2], [3, 3], [22, 4], [1, 5], [21, 6], [4, 7], [15, 8], [2, 9], [31, 10], [11, 11], [24, 12], [6, 1], [12, 5], [23, 9], [30, 4]].map(([d, m]) => d + '. ' + (m) + '. => the ' + ordWord(d) + ' of ' + MONTHS[m - 1]).join('\n');

  def({
    id: 'e-numbers', title: 'Numbers, time and dates', klassen: [1], img: 'MiniHoS_Planen_Uhr',
    merk: '<b>Zahlen</b>: 13 thirteen – 30 thirty, 21 twenty-one (mit Bindestrich), 105 one hundred <b>and</b> five, 2 500 two thousand five hundred. <b>Ordnungszahlen</b>: 1st first, 2nd second, 3rd third, 4th fourth, 5th fifth, 12th twelfth, 20th twentieth. <b>Uhrzeit</b>: 7:00 seven o\'clock, 7:15 a quarter past seven, 7:30 half past seven (<b>nicht</b> „halb acht“!), 7:45 a quarter to eight, 7:10 ten past seven, 7:50 ten to eight. <b>Datum</b>: 3rd May – sprich: the third of May. Monate und Wochentage schreibt man <b>groß</b>: Monday, July.',
    pools: {
      num: numPool,
      ord: ordPool,
      time: timePool,
      date: datePool,
      days: `Monday >> Tuesday >> Wednesday >> Thursday
Friday >> Saturday >> Sunday
January >> February >> March >> April
May >> June >> July >> August
September >> October >> November >> December`,
      ask: `What's the time? – It's [half past] three. (3:30)
What's the time? – It's [a quarter to] six. (5:45)
What's the time? – It's ten [past] eight. (8:10)
What's the time? – It's twenty [to] nine. (8:40)
When is your birthday? – It's [on] the fifth of June.
What's the date today? – It's the [first] of March.
How old are you? – I'm [twelve]. (12)
How much is it? – It's [three] euros [fifty]. (3.50 €)
What time does school start? – [At] a quarter to eight.
Which month comes after April? – [May].`
    },
    levels: {
      1: {
        ichkann: ['Du kannst Zahlen bis 100 auf Englisch schreiben.', 'Du kennst die Wochentage und Monate.'],
        tasks: [
          { type: 'pair', pool: 'num', n: 8, filter: x => +x.q.split(' ')[0] <= 100, inline: true, head: 'Number', col: 'In words', title: 'Write the numbers.', instr: 'Write the numbers in words.' },
          { type: 'order', pool: 'days', n: 2, title: 'Days and months', instr: 'Number them in the right order.' }
        ]
      },
      2: {
        ichkann: ['Du kannst die Uhrzeit auf Englisch sagen und schreiben.', 'Du kannst Zahlen über 100 schreiben.'],
        tasks: [
          { type: 'pair', pool: 'time', n: 8, inline: true, head: 'Time', col: 'In words', title: 'What\'s the time?', instr: 'Write the time in words. Use past and to.' },
          { type: 'pair', pool: 'num', n: 5, filter: x => +x.q.split(' ')[0] > 100, inline: true, head: 'Number', col: 'In words', title: 'Big numbers', instr: 'Write the numbers in words.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Ordnungszahlen und Datumsangaben schreiben.', 'Du kannst Fragen nach Uhrzeit, Datum und Preis beantworten.'],
        tasks: [
          { type: 'pair', pool: 'ord', n: 6, inline: true, head: 'Number', col: 'In words', title: 'first, second, third …', instr: 'Write the ordinal numbers in words.' },
          { type: 'pair', pool: 'date', n: 4, inline: true, head: 'Date', col: 'Say it', title: 'Dates', instr: 'How do you say the date?' },
          { type: 'gap', pool: 'ask', n: 5, title: 'Questions and answers', instr: 'Fill in the missing words.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ vocabulary DE ↔ EN
  def({
    id: 'e-vocab', title: 'Word fields', klassen: [1, 2], img: 'MiniHoS_Forschen_Globus',
    merk: '<b>Vokabeln lernt man am besten in Wortfeldern</b> (alle Wörter zu einem Thema): Familie, Schule, Essen, Kleidung, Wetter … Tipps: Lerne Nomen mit Artikel-Gefühl (a/an), Verben in Wendungen (do homework, play football, go shopping) und Gegensätze zusammen (hot – cold). Schreibe neue Wörter in einen Satz, den du dir merken kannst. Achtung bei der Schreibung: Englisch schreibt Nomen <b>klein</b> (a dog), aber <b>I</b>, Namen, Länder, Sprachen, Tage und Monate groß.',
    pools: {
      v1: `die Mutter => mother
der Bruder => brother
die Großeltern => grandparents
das Heft => exercise book
das Lineal => ruler
der Radiergummi => rubber
die Tafel => board
der Hund => dog
das Pferd => horse
der Vogel => bird
das Frühstück => breakfast
das Brot => bread
der Apfel => apple
das Wasser => water
rot => red
gelb => yellow
grün => green
der Montag => Monday
die Schule => school
der Lehrer => teacher
die Freundin => friend
das Fenster => window
der Tisch => table
der Stuhl => chair`,
      v2: `das Badezimmer => bathroom
die Küche => kitchen
das Schlafzimmer => bedroom
die Treppe => stairs
der Pullover => jumper
die Hose => trousers
die Schuhe => shoes
die Mütze => cap
der Regen => rain
die Wolke => cloud
es ist sonnig => it's sunny
es ist windig => it's windy
der Kopf => head
die Hand => hand
der Zahn => tooth
das Knie => knee
schwimmen gehen => go swimming
Hausübung machen => do homework
Rad fahren => ride a bike
Fußball spielen => play football
einkaufen gehen => go shopping
fernsehen => watch TV
das Wochenende => weekend
der Geburtstag => birthday`,
      v3: `der Bahnhof => station
die Bücherei => library
das Krankenhaus => hospital
die Apotheke => chemist's
die Kirche => church
die Ärztin => doctor
der Koch => cook
die Krankenschwester => nurse
der Polizist => police officer
glücklich => happy
traurig => sad
wütend => angry
müde => tired
aufgeregt => excited
ängstlich => scared
die Reise => journey
der Koffer => suitcase
das Flugzeug => plane
der Urlaub => holiday
die Fahrkarte => ticket`,
      sort1: `mother|F
uncle|F
cousin|F
grandma|F
pencil|S
ruler|S
rubber|S
schoolbag|S
banana|E
bread|E
cheese|E
soup|E
cat|A
rabbit|A
horse|A
mouse|A`,
      sort2: `jumper|C
trousers|C
skirt|C
jacket|C
kitchen|H
bathroom|H
bedroom|H
garden|H
foggy|W
sunny|W
snow|W
rain|W
arm|B
knee|B
nose|B
foot|B`,
      opp: `hot => cold
big => small
old => new
long => short
happy => sad
fast => slow
easy => difficult
cheap => expensive
early => late
clean => dirty
light => heavy
open => closed
right => wrong
young => old
full => empty
loud => quiet`
    },
    levels: {
      1: {
        ichkann: ['Du kennst Wörter zu Familie, Schule, Tieren und Essen.', 'Du kannst Wörter nach Themen ordnen.'],
        tasks: [
          { type: 'pair', pool: 'v1', n: 10, inline: true, head: 'Deutsch', col: 'English', title: 'What\'s it in English?', instr: 'Write the English word.' },
          { type: 'sort', pool: 'sort1', n: 12, opts: [['F', 'family'], ['S', 'school'], ['E', 'food'], ['A', 'animals']], title: 'Word fields', instr: 'Write the words in the correct column.' }
        ]
      },
      2: {
        ichkann: ['Du kennst Wörter zu Haus, Kleidung, Wetter, Körper und Freizeit.', 'Du kennst Wendungen wie do homework, go shopping, ride a bike.'],
        tasks: [
          { type: 'pair', pool: 'v2', n: 10, inline: true, head: 'Deutsch', col: 'English', title: 'What\'s it in English?', instr: 'Write the English word or phrase.' },
          { type: 'sort', pool: 'sort2', n: 12, opts: [['C', 'clothes'], ['H', 'house'], ['W', 'weather'], ['B', 'body']], title: 'Word fields', instr: 'Write the words in the correct column.' }
        ]
      },
      3: {
        ichkann: ['Du kennst Wörter zu Orten, Berufen, Gefühlen und Reisen.', 'Du kennst Gegensatzpaare (hot – cold, cheap – expensive).'],
        tasks: [
          { type: 'pair', pool: 'v3', n: 10, inline: true, head: 'Deutsch', col: 'English', title: 'What\'s it in English?', instr: 'Write the English word.' },
          { type: 'pair', pool: 'opp', n: 8, inline: true, head: 'Word', col: 'Opposite', title: 'Opposites', instr: 'Write the opposite.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ everyday phrases
  def({
    id: 'e-phrases', title: 'Everyday English', klassen: [1, 2, 3], img: 'MiniHoS_Geste_Winken-Buch',
    merk: '<b>Höflich sein</b> ist im Englischen sehr wichtig: please, thank you, sorry, excuse me. <b>Bitten</b>: Can I have …, please? Could you …, please? I\'d like … (statt „I want …“). <b>Begrüßen</b>: Hi! / Hello! / Good morning. How are you? – I\'m fine, thanks. And you? <b>Nach dem Weg fragen</b>: Excuse me, how do I get to …? – Go straight on, turn left/right, it\'s on your left. <b>Im Geschäft</b>: How much is it? Can I pay by card? <b>Am Telefon</b>: Hello, this is Lena. Can I speak to …? <b>Meinung</b>: I think … / In my opinion … / I agree. / I don\'t agree.',
    pools: {
      p1: `Du begrüßt deine Lehrerin am Morgen. => Good morning!
Du fragst jemanden, wie es ihm geht. => How are you?
Du verabschiedest dich. => Goodbye! / See you!
Du bedankst dich. => Thank you! / Thanks!
Du entschuldigst dich. => Sorry!
Du hast etwas nicht verstanden. => Sorry, can you say that again, please?
Du fragst, was ein Wort bedeutet. => What does … mean?
Du fragst, wie man etwas auf Englisch sagt. => How do you say … in English?
Du fragst, ob du aufs WC gehen darfst. => Can I go to the toilet, please?
Du hast dein Heft vergessen. => Sorry, I haven't got my exercise book.
Du fragst jemanden nach seinem Namen. => What's your name?
Du fragst jemanden nach seinem Namen. => What's your name?
Du fragst jemanden, woher er kommt. => Where are you from?
Du fragst jemanden, wie alt er ist. => How old are you?`,
      p2: `Du möchtest ein Eis kaufen. => Can I have an ice cream, please?
Du fragst nach dem Preis. => How much is it?
Du möchtest mit Karte zahlen. => Can I pay by card?
Du bestellst im Restaurant eine Pizza. => I'd like a pizza, please.
Du fragst nach dem Weg zum Bahnhof. => Excuse me, how do I get to the station?
Du erklärst: geradeaus gehen. => Go straight on.
Du erklärst: links abbiegen. => Turn left.
Du erklärst: Es ist auf der rechten Seite. => It's on your right.
Du fragst, ob ein Platz frei ist. => Is this seat free?
Du lädst einen Freund ins Kino ein. => Would you like to go to the cinema?
Du nimmst die Einladung an. => Yes, I'd love to!
Du lehnst höflich ab. => Sorry, I can't.
Du bittest jemanden, das Fenster zu öffnen. => Could you open the window, please?
Du fragst, wann der Zug abfährt. => What time does the train leave?`,
      p3: `Du rufst an und sagst, wer du bist. => Hello, this is …
Du möchtest mit Tom sprechen. => Can I speak to Tom, please?
Du bittest, eine Nachricht zu hinterlassen. => Can I leave a message?
Du sagst deine Meinung. => I think … / In my opinion …
Du stimmst zu. => I agree. / That's true.
Du bist anderer Meinung. => I don't agree. / I'm not sure about that.
Du machst einen Vorschlag. => Why don't we …? / Let's …
Du bittest um Hilfe. => Could you help me, please?
Du beschwerst dich höflich im Hotel. => I'm sorry, but my room is too noisy.
Du gratulierst zum Geburtstag. => Happy birthday!
Du wünschst viel Glück. => Good luck!
Du entschuldigst dich für die Verspätung. => Sorry I'm late.
Du fragst, ob du etwas ausborgen darfst. => Can I borrow your pen?
Du bietest Hilfe an. => Can I help you?`,
      polite: `{Can I have|I want} a glass of water, please?
{Excuse me|Hey you}, where is the station?
{I'd like|Give me} a cheese sandwich, please.
{Could you|You must} help me, please?
{Sorry|Hey}, I didn't hear you.
{Would you like|Do you want} some cake? (polite)
{Thank you very much|OK} for the present!
{Could you say that again, please?|What?}`,
      dialog: `A: Excuse me, how do I get to the museum? >> B: Go straight on and turn left at the church. >> A: Is it far? >> B: No, it's only five minutes. >> A: Thank you very much!
A: Hello, can I help you? >> B: Yes, I'd like this T-shirt, please. >> A: Here you are. >> B: How much is it? >> A: It's twelve euros.
A: Would you like to come to my party on Saturday? >> B: Yes, I'd love to! What time? >> A: At three o'clock. >> B: Great, see you then!
A: Hello, this is Lisa. Can I speak to Ben, please? >> B: Sorry, he isn't here. >> A: Can I leave a message? >> B: Of course.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst grüßen, dich vorstellen und dich bedanken.', 'Du kennst wichtige Sätze für den Englischunterricht.'],
        tasks: [
          { type: 'pair', pool: 'p1', n: 7, inline: true, head: 'Situation', col: 'What do you say?', title: 'What do you say?', instr: 'Write what you say in English.' },
          { type: 'gap', pool: 'polite', n: 4, title: 'Be polite!', instr: 'Circle the polite version.' }
        ]
      },
      2: {
        ichkann: ['Du kannst einkaufen, bestellen und nach dem Weg fragen.', 'Du kannst Einladungen annehmen und höflich ablehnen.'],
        tasks: [
          { type: 'pair', pool: 'p2', n: 7, inline: true, head: 'Situation', col: 'What do you say?', title: 'What do you say?', instr: 'Write what you say in English.' },
          { type: 'order', pool: 'dialog', n: 1, title: 'Put the dialogue in order.', instr: 'Number the lines.' }
        ]
      },
      3: {
        ichkann: ['Du kannst telefonieren, Vorschläge machen und deine Meinung sagen.', 'Du formulierst Bitten und Beschwerden höflich.'],
        tasks: [
          { type: 'pair', pool: 'p3', n: 7, inline: true, head: 'Situation', col: 'What do you say?', title: 'What do you say?', instr: 'Write what you say in English.' },
          { type: 'gap', pool: 'polite', n: 4, title: 'Be polite!', instr: 'Circle the polite version.' },
          { type: 'order', pool: 'dialog', n: 1, title: 'Put the dialogue in order.', instr: 'Number the lines.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ confusing words, false friends
  def({
    id: 'e-confusing', title: 'Confusing words and false friends', klassen: [3, 4], img: 'MiniHoS_Gesicht_Nachdenken-Frage-HoS',
    merk: '<b>make</b> (herstellen): make a cake, make a mistake, make friends, make a noise – <b>do</b> (tun, erledigen): do homework, do sport, do the shopping, do your best. <b>say</b> something – <b>tell</b> somebody something. <b>borrow</b> (ausborgen, sich leihen) – <b>lend</b> (verleihen). <b>bring</b> (herbringen) – <b>take</b> (mitnehmen). <b>learn</b> (lernen) – <b>teach</b> (unterrichten). <b>win</b> (gewinnen) – <b>earn</b> (verdienen). <b>False friends</b>: become = werden (nicht bekommen = get), Handy = mobile (phone), Chef = boss (chef = Koch), gift = Geschenk, also = auch (also = so/deshalb), sensible = vernünftig, actually = eigentlich (aktuell = current).',
    pools: {
      makedo: `Can you help me [do] my homework?
My dad [makes] the best pancakes.
Don't [make] so much noise!
I always [do] the washing-up after dinner.
Everybody [makes] mistakes.
We [do] sport twice a week.
Can you [do] me a favour?
She [made] a lot of new friends at camp.
I have to [do] the shopping today.
Let's [make] a plan for the weekend.
Just [do] your best!
The baby [made] a mess in the kitchen.`,
      choose: `Can I {borrow|lend} your pencil?
Can you {lend|borrow} me your bike?
Please {bring|take} me a glass of water.
Don't forget to {take|bring} your umbrella when you go out.
Mr Smith {teaches|learns} us English.
I {learn|teach} ten new words every week.
Our team {won|earned} the match.
My sister {earns|wins} 1,200 euros a month.
She {said|told} that she was tired.
He {told|said} me a funny joke.
Can you {tell|say} me the time, please?
What did you {say|tell}?`,
      ff: `bekommen => get
werden => become
das Handy => mobile phone
der Chef => boss
der Koch => chef
das Geschenk => present / gift
aktuell => current
eigentlich => actually
also (deshalb) => so
vernünftig => sensible
sensibel => sensitive
die Gymnastik => exercise
der Fotograf => photographer
das Gymnasium => grammar school
die Hausübung => homework
die Bank (zum Sitzen) => bench`,
      error: `I want to become a new bike. => I want to get a new bike.
Can you borrow me your book? => Can you lend me your book?
I made my homework. => I did my homework.
Where is my handy? => Where is my mobile phone?
He said me the answer. => He told me the answer.
My chef is very strict. => My boss is very strict.
She learned us French. => She taught us French.
I want to do a cake. => I want to make a cake.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst make und do richtig verwenden.', 'Du kennst feste Wendungen mit make und do.'],
        tasks: [
          { type: 'gap', pool: 'makedo', n: 8, title: 'make or do?', instr: 'Fill in the correct form of make or do.' },
          { type: 'gap', pool: 'choose', n: 5, filter: x => /borrow|lend|bring|take/.test(x.q), title: 'borrow or lend? bring or take?', instr: 'Circle the correct word.' }
        ]
      },
      2: {
        ichkann: ['Du unterscheidest say/tell, borrow/lend, bring/take, learn/teach, win/earn.', 'Du erkennst typische Fehler.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 8, title: 'Circle the correct word.', instr: 'say/tell, borrow/lend, bring/take, learn/teach, win/earn' },
          { type: 'error', pool: 'error', n: 4, title: 'Find the mistakes.', instr: 'Write the sentences correctly.' }
        ]
      },
      3: {
        ichkann: ['Du kennst wichtige false friends (become, chef, Handy …).', 'Du vermeidest typische Fehler deutschsprachiger Lernender.'],
        tasks: [
          { type: 'pair', pool: 'ff', n: 8, inline: true, head: 'Deutsch', col: 'English', title: 'False friends', instr: 'Write the correct English word. Careful!' },
          { type: 'error', pool: 'error', n: 4, title: 'Find the mistakes.', instr: 'Write the sentences correctly.' }
        ]
      }
    }
  });
})();
