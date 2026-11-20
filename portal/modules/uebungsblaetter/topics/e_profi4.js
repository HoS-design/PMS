/* Englisch – Ausbau und Stufe 4 · Profi, Teil 4 (Wortschatz und Schreiben) */
(function () {
  const ext = UB.extendTopic;

  // ------------------------------------------------------------------ numbers, time, dates
  ext('e-numbers', {
    more: {
      years: `1999 => nineteen ninety-nine
2008 => two thousand and eight
1066 => ten sixty-six
1492 => fourteen ninety-two
2025 => twenty twenty-five / two thousand and twenty-five
1815 => eighteen fifteen
1900 => nineteen hundred
2010 => twenty ten / two thousand and ten`,
      calc: `7 · 8 = 56 => seven times eight is fifty-six
100 − 35 = 65 => a hundred minus thirty-five is sixty-five
12 + 19 = 31 => twelve plus nineteen is thirty-one
81 : 9 = 9 => eighty-one divided by nine is nine
3,5 => three point five
0,25 => (zero / nought) point two five
½ => a half
¾ => three quarters
25 % => twenty-five per cent
−5 °C => minus five degrees`,
      text: `The Second World War ended in [nineteen forty-five]. (1945)
My grandma was born on the [third] of [March] [nineteen fifty-two]. (3. 3. 1952)
The tickets cost [twelve] pounds [fifty]. (£12.50)
The train leaves at [a quarter past] seven in the evening. (19:15)
It's [minus] three degrees outside! (−3 °C)
About [two thousand five hundred] people live in our village. (2 500)
Christmas Day is on the [twenty-fifth] of December.
Twelve [times] twelve is a hundred and forty-four.`,
      time24: `14:30 => half past two (in the afternoon) / 2.30 p.m.
08:15 => a quarter past eight (in the morning) / 8.15 a.m.
21:45 => a quarter to ten (in the evening) / 9.45 p.m.
12:00 => twelve o'clock / noon / midday
00:00 => twelve o'clock / midnight
17:20 => twenty past five (in the afternoon) / 5.20 p.m.
06:50 => ten to seven (in the morning) / 6.50 a.m.
19:05 => five past seven (in the evening) / 7.05 p.m.`
    },
    level4: {
      ichkann: ['Du kannst Jahreszahlen, Preise, Brüche und Dezimalzahlen auf Englisch sagen und schreiben.', 'Du kannst Uhrzeiten mit a.m. und p.m. angeben.'],
      tasks: [
        { type: 'pair', pool: 'years', n: 4, inline: true, head: 'Year', col: 'Say it', title: 'Years', instr: 'How do you say these years?' },
        { type: 'pair', pool: 'time24', n: 4, inline: true, head: 'Time', col: 'Say it', title: 'a.m. and p.m.', instr: 'Write the time in words or with a.m./p.m.' },
        { type: 'pair', pool: 'calc', n: 3, inline: true, head: 'Number', col: 'Say it', title: 'Maths in English', instr: 'Write it in words.' },
        { type: 'gap', pool: 'text', n: 3, title: 'Numbers in sentences', instr: 'Write the numbers in words.' }
      ]
    }
  });

  // ------------------------------------------------------------------ vocabulary
  ext('e-vocab', {
    more: {
      v1: `die Schwester => sister
der Onkel => uncle
die Katze => cat
die Milch => milk
das Ei => egg
blau => blue
der Bleistift => pencil
die Tür => door`,
      v2: `das Wohnzimmer => living room
der Rock => skirt
die Jacke => jacket
es schneit => it's snowing
der Bauch => stomach
die Nase => nose
Musik hören => listen to music
Freunde treffen => meet friends`,
      v3: `der Flughafen => airport
die Post => post office
der Bauer => farmer
die Verkäuferin => shop assistant
überrascht => surprised
gelangweilt => bored
der Reisepass => passport
die Unterkunft => accommodation`,
      def: `a person who works in a hospital and helps doctors => nurse
the room where you cook => kitchen
a place where you can borrow books => library
the opposite of „always“ => never
the day after Friday => Saturday
a person who flies a plane => pilot
you wear them on your feet => shoes / socks
the meal you have in the morning => breakfast
a place where you can see animals from all over the world => zoo
a person who sells things in a shop => shop assistant
the month between April and June => May
you use it to cut paper => scissors
a place where you can catch a train => station
the opposite of „expensive“ => cheap`,
      coll: `Zähne putzen => brush your teeth
den Tisch decken => lay the table
ein Foto machen => take a photo
einen Fehler machen => make a mistake
Hausübung machen => do (your) homework
Rad fahren => ride a bike
einen Bus nehmen => take a bus
eine Prüfung bestehen => pass an exam
Zeit verbringen => spend time
die Wahrheit sagen => tell the truth
eine Party feiern => have a party
ins Bett gehen => go to bed`
    },
    level4: {
      ichkann: ['Du kannst Wörter aus englischen Erklärungen erschließen.', 'Du kennst feste Wortverbindungen (brush your teeth, take a photo, make a mistake).'],
      tasks: [
        { type: 'pair', pool: 'def', n: 7, inline: true, head: 'Explanation', col: 'Word', title: 'What is it?', instr: 'Read the explanation and write the word.' },
        { type: 'pair', pool: 'coll', n: 7, inline: true, head: 'Deutsch', col: 'English', title: 'Word partners', instr: 'Write the English phrase. Careful with the verbs!' }
      ]
    }
  });

  // ------------------------------------------------------------------ everyday English
  ext('e-phrases', {
    more: {
      p4: `Im Restaurant: Das Essen ist kalt. Du beschwerst dich höflich. => Excuse me, I'm afraid my food is cold.
Im Geschäft: Du möchtest eine Jacke in einer anderen Größe. => Have you got this jacket in a bigger / smaller size?
Am Bahnhof: Du möchtest eine Rückfahrkarte nach London. => A return ticket to London, please.
Am Telefon: Die Person ist nicht da. Du bittest um Rückruf. => Could you ask her to call me back, please?
Im Hotel: Du möchtest wissen, wann es Frühstück gibt. => What time is breakfast, please?
Du hast jemanden angerempelt. => Oh, I'm so sorry! Are you all right?
Jemand bedankt sich bei dir. Du antwortest. => You're welcome. / No problem.
Du verstehst eine Wegbeschreibung nicht. => Sorry, could you repeat that more slowly, please?
Du möchtest jemandem vorschlagen, ins Kino zu gehen. => How about going to the cinema?
Du lehnst ein Angebot höflich ab. => No, thank you. I'm fine.
Beim Arzt: Du sagst, dass dir der Kopf weh tut. => I've got a headache.
Du fragst, ob du mit Karte zahlen kannst. => Can I pay by card?`,
      reply: `Thank you so much! => You're welcome!
How are you? => I'm fine, thanks. And you?
Sorry I'm late. => That's OK. / Never mind.
Would you like a cup of tea? => Yes, please. / No, thank you.
Can I help you? => Yes, I'm looking for … / No, thanks. I'm just looking.
Have a nice weekend! => Thanks, you too!
Excuse me, is this seat free? => Yes, it is. / Sorry, it's taken.
I've passed my driving test! => Congratulations!
I've got a cold. => Oh, I'm sorry to hear that. Get well soon!
See you tomorrow! => See you! / Bye!`
    },
    level4: {
      ichkann: ['Du kannst dich in schwierigeren Alltagssituationen höflich ausdrücken (Beschwerde, Rückruf, Fahrkarte).', 'Du reagierst passend auf das, was andere sagen.'],
      tasks: [
        { type: 'pair', pool: 'p4', n: 6, title: 'What do you say?', instr: 'Write what you say in English. Be polite!' },
        { type: 'pair', pool: 'reply', n: 6, inline: true, head: 'Someone says …', col: 'You answer …', title: 'How do you react?', instr: 'Write a good answer.' }
      ]
    }
  });

  // ------------------------------------------------------------------ confusing words
  ext('e-confusing', {
    more: {
      choose2: `Can you {remind|remember} me to call Grandma?
I can't {remember|remind} his name.
Be quiet and {listen|hear} to me!
Did you {hear|listen} that noise?
We {watched|looked} a film last night.
{Look|Watch} at this photo!
Hurry up or you'll {miss|lose} the bus!
I always {lose|miss} my keys.
Someone {stole|robbed} my bike.
Two men {robbed|stole} the bank.`,
      ff2: `die Brille => glasses
der Rat (Ratschlag) => advice
das Gift => poison
die Note (in der Schule) => mark
das Rezept (vom Arzt) => prescription
der Pullover => jumper
der Beamer => projector
die Fabrik => factory
aktuell => current / up to date
spenden => donate
die Kaution => deposit
also => so / therefore`,
      text: `Can you [lend] me your bike? I'll give it back tomorrow. – Sure, but please [bring] it back before six.
I can't [remember] where I put my keys. Can you [remind] me to look in the car?
Our teacher [taught] us a new song. We [learned] it very quickly.
Did you [hear] the thunder last night? – No, I was [listening] to music.
I [made] a cake and then I [did] the washing-up.
Hurry up or we'll [miss] the train! – Oh no, I've [lost] my ticket!`
    },
    level4: {
      ichkann: ['Du unterscheidest auch remember/remind, hear/listen, watch/look, miss/lose, steal/rob.', 'Du kennst weitere false friends (Gift, Note, Rezept …).'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'There is no box. Think: Which word fits?' },
        { type: 'gap', pool: 'choose2', n: 6, title: 'Circle the correct word.', instr: '' },
        { type: 'pair', pool: 'ff2', n: 6, inline: true, head: 'Deutsch', col: 'English', title: 'More false friends', instr: 'Write the correct English word.' }
      ]
    }
  });

  // ------------------------------------------------------------------ writing: describe
  ext('e-w-describe', {
    more: {
      person: `Describe a person who is important to you. => who is it? ; appearance ; character with examples ; a special memory
Describe your perfect friend. => appearance (not so important?) ; character ; what you would do together`,
      better: `My friend is nice. => My friend Anna is really kind – she always helps me when I have problems.
The house is big. => The old house at the end of the street is huge and has got a beautiful garden.
He has got hair. => He has got short, curly black hair.
The room is nice. => My room is bright and cosy, with a big window and lots of plants.
My town is good. => My town is small but lively – there's a market every Saturday.
She is pretty. => She has got long dark hair and a friendly smile.`,
      p4: `Describe a place you will never forget. => where and when? ; what it looks like (there is / are, adjectives) ; what you did there ; feelings ; relative clauses (which, where)
Describe a person you admire (famous or not). => who? ; appearance ; character + examples ; why you admire him or her ; comparisons
Compare your town with a big city you know. => size, people, shops ; bigger, more interesting, not as … as ; what you prefer and why`
    },
    level4: {
      ichkann: ['Du kannst Beschreibungen mit vielen Adjektiven, Beispielen und Vergleichen schreiben.', 'Du machst einfache Sätze genauer und lebendiger.'],
      tasks: [
        { type: 'pair', pool: 'better', n: 3, title: 'Make it better.', instr: 'Write a more interesting sentence. Add details.' },
        { type: 'write', pool: 'p4', n: 1, lines: 12, check: ['adjectives and details', 'examples', 'comparisons / relative clauses', '120–150 words'], title: 'Write a description.', instr: '' }
      ]
    }
  });

  // ------------------------------------------------------------------ writing: emails
  ext('e-w-email', {
    more: {
      w4: `You bought headphones online, but they don't work. Write a formal email of complaint. => Dear Sir or Madam, ; what you bought and when ; the problem ; what you want (refund / new ones) ; I look forward to … ; Yours faithfully,
You want a summer job at a holiday camp in England. Write an application email. => Dear Mr / Ms …, ; I am writing to apply for … ; about you (age, languages, hobbies) ; why you are the right person ; Yours sincerely,
You want to stay at a youth hostel in Edinburgh with your class. Write a formal email to ask about rooms and prices. => Dear Sir or Madam, ; dates and number of students ; questions (rooms, meals, prices) ; Could you please …? ; Yours faithfully,`,
      formal: `I wanna know the prices. => I would like to know the prices.
Send me the info quick! => Could you please send me the information as soon as possible?
The headphones are rubbish. => Unfortunately, the headphones do not work.
Give me my money back. => I would be grateful if you could give me a refund.
Bye! => Yours faithfully,
Thanks a lot! => Thank you very much for your help.`
    },
    level4: {
      ichkann: ['Du kannst eine Beschwerde oder Bewerbung formell schreiben.', 'Du formulierst umgangssprachliche Sätze höflich und formell um.'],
      tasks: [
        { type: 'pair', pool: 'formal', n: 4, title: 'Make it formal.', instr: 'Rewrite the sentences for a formal email.' },
        { type: 'write', pool: 'w4', n: 1, lines: 10, check: ['correct greeting and ending', 'paragraphs', 'formal language, no short forms', '120–150 words'], title: 'Write an email.', instr: '' }
      ]
    }
  });

  // ------------------------------------------------------------------ writing: story
  ext('e-w-story', {
    more: {
      w4: `Write a story with these five words: key – storm – old lady – secret – midnight. => use all five words ; narrative tenses ; climax ; direct speech ; title
Write a story from the point of view of a lost dog. => I … ; what the dog sees, hears, smells ; feelings ; how it ends
Write a story that begins: "Nobody believed me, but it was true …" => past simple / progressive / perfect ; suspense ; surprising ending
Write a story with the title "The wrong bus". => where you wanted to go ; what went wrong ; what happened ; ending`,
      tense: `By the time we {got|had got} to the beach, it had started to rain.
I was so tired because I {hadn't slept|didn't sleep} all night.
While she {was walking|walked} home, she found a wallet.`
    },
    level4: {
      ichkann: ['Du schreibst spannende Geschichten mit allen Erzählzeiten.', 'Du baust Spannung auf und schreibst wörtliche Rede richtig.'],
      tasks: [
        { type: 'gap', pool: 'tense', n: 4, title: 'Narrative tenses', instr: 'Circle the correct form.' },
        { type: 'write', pool: 'w4', n: 1, lines: 9, check: ['title', 'past simple, progressive and perfect', 'suspense', 'direct speech', '150–180 words'], plan: [['Beginning', 'Who? Where? When?'], ['Main part', 'problem – suspense – climax'], ['Ending', 'surprise? feelings?']], title: 'Write a story.', instr: '' }
      ]
    }
  });

  // ------------------------------------------------------------------ writing: opinion
  ext('e-w-opinion', {
    more: {
      w4: `"Young people spend too much time on their phones." Write a for-and-against essay. => introduction ; arguments for ; arguments against ; your opinion in the conclusion
"Homework should be banned." Discuss. => introduction ; advantages and disadvantages of homework ; examples ; conclusion
"Zoos should be closed." What do you think? Write an article for your school magazine. => catchy title ; your opinion ; arguments and examples ; counter-argument ; conclusion`,
      rewrite: `Phones are bad. => In my opinion, phones can be harmful because people spend too much time on them.
Homework is stupid. => I believe that too much homework can be stressful for students.
Zoos are good and bad. => On the one hand, zoos protect rare animals. On the other hand, the animals are not free.
Everybody thinks so. => Many people agree with this view.
I'm against it because it's bad. => I am against this idea because it has several disadvantages.`
    },
    level4: {
      ichkann: ['Du kannst einen ausgewogenen Erörterungs-Text (for and against) schreiben.', 'Du formulierst Meinungen sachlich und begründet.'],
      tasks: [
        { type: 'pair', pool: 'rewrite', n: 3, title: 'Say it better.', instr: 'Rewrite the sentences for an essay.' },
        { type: 'write', pool: 'w4', n: 1, lines: 11, check: ['introduction', 'for: First of all … Moreover …', 'against: On the other hand …', 'conclusion: All in all …', '150–180 words'], title: 'Write an essay.', instr: '' }
      ]
    }
  });
})();
