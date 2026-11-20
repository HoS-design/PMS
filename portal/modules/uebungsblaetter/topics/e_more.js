/* Englisch – weitere Grammatik (2.–4. Klasse) */
(function () {
  const E = { fach: 'englisch', lang: 'en', area: 'e-grammar' };
  const def = (o) => UB.simple(Object.assign({}, E, o));

  // ------------------------------------------------------------------ comparison
  def({
    id: 'e-comparison', title: 'Comparison of adjectives', klassen: [2], img: 'MiniHoS_Mathe_Lineal',
    merk: '<b>Kurze Adjektive</b> (eine Silbe, zweisilbige auf -y): + <b>er</b> / the + <b>est</b>: small – smaller – the smallest, nice – nicer – the nicest, big – bigger – the biggest (Mitlaut verdoppelt), happy – happier – the happiest (y → i). <b>Lange Adjektive</b>: <b>more</b> / the <b>most</b>: interesting – more interesting – the most interesting. <b>Unregelmäßig</b>: good – better – best, bad – worse – worst, far – further – furthest, many/much – more – most, little – less – least. <b>Vergleich</b>: Tom is taller <b>than</b> Ben. Lisa is <b>as</b> tall <b>as</b> Mia (gleich). This film is <b>not as</b> good <b>as</b> the book.',
    pools: {
      er: `small => smaller – the smallest
big => bigger – the biggest
nice => nicer – the nicest
happy => happier – the happiest
old => older – the oldest
hot => hotter – the hottest
easy => easier – the easiest
long => longer – the longest
funny => funnier – the funniest
fast => faster – the fastest
large => larger – the largest
thin => thinner – the thinnest
cheap => cheaper – the cheapest
busy => busier – the busiest`,
      more: `interesting => more interesting – the most interesting
good => better – the best
beautiful => more beautiful – the most beautiful
bad => worse – the worst
expensive => more expensive – the most expensive
famous => more famous – the most famous
far => further – the furthest
dangerous => more dangerous – the most dangerous
difficult => more difficult – the most difficult
many => more – the most
comfortable => more comfortable – the most comfortable
little => less – the least`,
      gap: `An elephant is [bigger:big] than a horse.
The Nile is [the longest:long] river in the world.
My bag is [heavier:heavy] than your bag.
This is [the most exciting:exciting] film I've ever seen.
Today is [hotter:hot] than yesterday.
My test was [worse:bad] than Tom's.
Lisa is [the best:good] player in our team.
Maths is [more difficult:difficult] than English for me.
A Ferrari is [more expensive:expensive] than a bike.
Which is [the highest:high] mountain in Austria?
Sunday is [the happiest:happy] day of the week.
Is Vienna [further:far] from here than Linz?`,
      asas: `Tom is 1.50 m. Ben is 1.50 m. :: tall => Tom is as tall as Ben.
The red T-shirt is 10 €. The blue one is 15 €. :: cheap => The red T-shirt is cheaper than the blue one.
Graz has 300,000 people. Vienna has 2 million. :: big => Graz isn't as big as Vienna.
My cat is 3. Your cat is 3. :: old => My cat is as old as your cat.
The film was good. The book was very good. :: good => The film wasn't as good as the book.
Today is 20 °C. Yesterday was 25 °C. :: warm => Yesterday was warmer than today.
Maths is difficult. Physics is very difficult. :: difficult => Physics is more difficult than maths.
Lisa runs 100 m in 15 s. Mia runs 100 m in 15 s. :: fast => Lisa is as fast as Mia.`,
      choose: `My brother is {taller|more tall} than me.
This is {the most beautiful|the beautifullest} beach I know.
Your idea is {better|more good} than mine.
Tom is as old {as|than} Lisa.
Cats are {more independent|independenter} than dogs.
This is {the worst|the baddest} day of my life!
English is easier {than|as} French for me.
She is {the funniest|the most funny} girl in our class.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst kurze Adjektive mit -er und -est steigern.', 'Du achtest auf die Schreibung (bigger, happier).'],
        tasks: [
          { type: 'pair', pool: 'er', n: 8, inline: true, head: 'Adjective', col: 'Comparative – superlative', title: 'Compare!', instr: 'Write the comparative and the superlative.' },
          { type: 'gap', pool: 'gap', n: 6, filter: x => !/most|worse|best|further|difficult|expensive/.test(x.q), title: 'Fill in the gaps.', instr: 'Use the correct form of the adjective.' }
        ]
      },
      2: {
        ichkann: ['Du kannst lange Adjektive mit more und most steigern.', 'Du kennst good – better – best und bad – worse – worst.'],
        tasks: [
          { type: 'pair', pool: 'more', n: 6, inline: true, head: 'Adjective', col: 'Comparative – superlative', title: 'more and most', instr: 'Write the comparative and the superlative.' },
          { type: 'gap', pool: 'gap', n: 7, title: 'Fill in the gaps.', instr: 'Use the correct form of the adjective.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Dinge mit than und as … as vergleichen.', 'Du findest Fehler bei der Steigerung.'],
        tasks: [
          { type: 'pair', pool: 'asas', n: 4, title: 'Compare.', instr: 'Write a sentence with than, as … as or not as … as.' },
          { type: 'gap', pool: 'choose', n: 6, title: 'Circle the correct form.', instr: 'Which one is right?' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ quantity
  def({
    id: 'e-quantity', title: 'much, many, a few, a little', klassen: [2, 3], img: 'MiniHoS_Mathe_Taschenrechner',
    merk: '<b>Zählbar</b> (countable): apple – apples, friend – friends → <b>many</b>, <b>a few</b>, how many? <b>Nicht zählbar</b> (uncountable): water, milk, money, time, bread, homework, information → <b>much</b>, <b>a little</b>, how much? <b>a lot of / lots of</b> geht immer (vor allem in bejahten Sätzen). <b>some/any-Wörter</b>: somebody/someone (jemand), something (etwas), somewhere (irgendwo) in bejahten Sätzen; anybody, anything, anywhere in Fragen und Verneinungen; nobody, nothing, nowhere (niemand, nichts, nirgends); everybody, everything, everywhere (alle, alles, überall). Nach nobody/nothing kein not!',
    pools: {
      sort: `apple|C
water|U
friend|C
milk|U
chair|C
money|U
bread|U
book|C
time|U
car|C
homework|U
egg|C
cheese|U
student|C
information|U
banana|C
music|U
idea|C
juice|U
pen|C`,
      muchmany: `How {many|much} brothers have you got?
How {much|many} money do you need?
There aren't {many|much} people here.
I haven't got {much|many} time.
Did you drink {much|many} water?
We didn't see {many|much} animals at the zoo.
How {much|many} milk is in the fridge?
She hasn't got {many|much} friends at her new school.
There isn't {much|many} snow this year.
How {many|much} eggs do we need for the cake?`,
      few: `I've got {a few|a little} good friends.
Can I have {a little|a few} milk in my tea?
There are {a few|a little} apples left.
We've got {a little|a few} time before the bus comes.
She speaks {a little|a few} French.
I need {a few|a little} more minutes.
Put {a little|a few} salt in the soup.
{A few|A little} students were late.`,
      some: `There's [somebody] at the door. Can you open it?
I can't find my keys [anywhere].
Is there [anything] to eat? I'm hungry.
[Nobody] came to the party. It was so sad.
I'm bored. There's [nothing] to do.
[Everybody] in my class likes our teacher.
Let's go [somewhere] nice for the holidays.
Did you meet [anybody] at the park?
I looked [everywhere], but my phone was gone.
Would you like [something] to drink?
I didn't say [anything].
There's [nowhere] to sit. All the chairs are taken.`,
      error: `How much apples do you want? => How many apples do you want?
I haven't got many money. => I haven't got much money.
There are a little cars in the street. => There are a few cars in the street.
I didn't see nobody. => I didn't see anybody.
How many homework have you got? => How much homework have you got?
Can I have a few water? => Can I have a little water?`
    },
    levels: {
      1: {
        ichkann: ['Du kannst zählbare und nicht zählbare Nomen unterscheiden.', 'Du verwendest much und many richtig.'],
        tasks: [
          { type: 'sort', pool: 'sort', n: 12, opts: [['C', 'countable (many)'], ['U', 'uncountable (much)']], title: 'Countable or uncountable?', instr: 'Write the words in the correct column.' },
          { type: 'gap', pool: 'muchmany', n: 6, title: 'much or many?', instr: 'Circle the correct word.' }
        ]
      },
      2: {
        ichkann: ['Du kannst a few und a little richtig verwenden.', 'Du fragst mit How much? und How many?'],
        tasks: [
          { type: 'gap', pool: 'muchmany', n: 5, title: 'much or many?', instr: 'Circle the correct word.' },
          { type: 'gap', pool: 'few', n: 6, title: 'a few or a little?', instr: 'Circle the correct word.' },
          { type: 'error', pool: 'error', n: 3, filter: x => !/nobody/.test(x.q), title: 'Find the mistakes.', instr: 'Write the sentences correctly.' }
        ]
      },
      3: {
        ichkann: ['Du kannst somebody, anything, nothing, everywhere usw. richtig verwenden.', 'Du weißt, dass nach nobody und nothing kein not steht.'],
        tasks: [
          { type: 'gap', pool: 'some', n: 8, wordbox: true, title: 'some-, any-, no-, every-', instr: 'Use the words from the box.' },
          { type: 'error', pool: 'error', n: 4, title: 'Find the mistakes.', instr: 'Write the sentences correctly.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ adverbs
  def({
    id: 'e-adverbs', title: 'Adjectives and adverbs', klassen: [2, 3], img: 'MiniHoS_Lob_Daumen-Hoch-2',
    merk: '<b>Adjektive</b> beschreiben ein Nomen: a <b>quick</b> runner, She is <b>happy</b>. <b>Adverbien der Art und Weise</b> beschreiben ein Verb – <b>wie</b> jemand etwas tut: She runs <b>quickly</b>. Bildung: Adjektiv + <b>ly</b>: slow – slowly, careful – carefully, happy – happily (y → i), terrible – terribly. <b>Ausnahmen</b>: good – <b>well</b>, fast – fast, hard – hard, late – late. Nach <b>be, look, feel, sound, taste, smell</b> steht das Adjektiv: You look tired. The soup smells good.',
    pools: {
      form: `slow => slowly
careful => carefully
happy => happily
quiet => quietly
good => well
fast => fast
easy => easily
loud => loudly
terrible => terribly
hard => hard
nice => nicely
angry => angrily
sad => sadly
beautiful => beautifully
late => late
polite => politely`,
      choose: `Please drive {carefully|careful}.
Tom is a {careful|carefully} driver.
She sings {beautifully|beautiful}.
You speak English very {well|good}.
This is a {good|well} book.
The children played {quietly|quiet} in their room.
He was {angry|angrily} because I was late.
Lisa can run very {fast|fastly}.
We worked {hard|hardly} all day.
The soup tastes {delicious|deliciously}.
You look {tired|tiredly}. Go to bed!
The dog barked {loudly|loud} at the postman.
That sounds {great|greatly}!
The old man walked {slowly|slow} across the street.`,
      gap: `Tom is a slow walker. He walks [slowly].
Lisa is a good swimmer. She swims [well].
My dad is a careful driver. He drives [carefully].
The baby is quiet. It is sleeping [quietly].
Mia is a fast runner. She runs [fast].
Ben is a terrible singer. He sings [terribly].
She is a hard worker. She works [hard].
The children are happy. They are playing [happily].
He is a polite boy. He always answers [politely].
The music is loud. They play it very [loudly].`
    },
    levels: {
      1: {
        ichkann: ['Du kannst aus Adjektiven Adverbien bilden (-ly).', 'Du kennst die Ausnahmen good – well, fast, hard.'],
        tasks: [
          { type: 'pair', pool: 'form', n: 10, inline: true, head: 'Adjective', col: 'Adverb', title: 'Make adverbs.', instr: 'Write the adverb.' },
          { type: 'gap', pool: 'gap', n: 5, title: 'How do they do it?', instr: 'Fill in the adverb.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Adjektiv und Adverb unterscheiden.', 'Du weißt, wann man good und wann well verwendet.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 8, filter: x => !/tastes|look|sounds|smells|hardly|surprising|extremely/.test(x.q), title: 'Adjective or adverb?', instr: 'Circle the correct word.' },
          { type: 'gap', pool: 'gap', n: 5, title: 'How do they do it?', instr: 'Fill in the adverb.' }
        ]
      },
      3: {
        ichkann: ['Du weißt, dass nach look, feel, sound, taste und smell ein Adjektiv steht.', 'Du verwendest Adjektive und Adverbien sicher.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 10, title: 'Adjective or adverb?', instr: 'Circle the correct word. Careful with look, sound, taste …' },
          { type: 'pair', pool: 'form', n: 6, inline: true, head: 'Adjective', col: 'Adverb', title: 'Make adverbs.', instr: 'Write the adverb.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ relative clauses
  def({
    id: 'e-relative', title: 'Relative clauses', klassen: [3, 4], img: 'MiniHoS_Forschen_Lupe-Blatt',
    merk: '<b>Relativsätze</b> beschreiben ein Nomen genauer. <b>who</b> für Personen: the girl <b>who</b> lives next door. <b>which</b> für Dinge und Tiere: the book <b>which</b> I bought. <b>that</b> für Personen und Dinge (in notwendigen Relativsätzen). <b>whose</b> = dessen/deren: the boy <b>whose</b> dog is lost. <b>where</b> für Orte: the town <b>where</b> I was born. Ist das Relativpronomen <b>Objekt</b>, kann es wegfallen (contact clause): the book (that) I read. <b>Zusätzliche Information</b> (non-defining) steht zwischen Beistrichen, dort nur who/which, nie that: My sister, <b>who</b> lives in Graz, is a nurse.',
    pools: {
      gap: `The girl [who] lives next door is my friend.
This is the book [which] I told you about.
I've got a friend [whose] father is a pilot.
That's the café [where] we met for the first time.
The man [who] helped me was very kind.
I like films [which] have happy endings.
Is this the bus [which] goes to the station?
Do you know the boy [whose] bike was stolen?
This is the town [where] my grandparents live.
The teacher [who] teaches us English is from Ireland.
We visited the castle [which] is on the hill.
The woman [whose] car is outside is my aunt.
That's the shop [where] I bought my shoes.
People [who] eat a lot of sweets often have bad teeth.`,
      join: `I have a friend. She speaks four languages. :: who => I have a friend who speaks four languages.
This is the phone. I bought it yesterday. :: which => This is the phone which I bought yesterday.
That's the boy. His sister is in my class. :: whose => That's the boy whose sister is in my class.
This is the park. We play football there. :: where => This is the park where we play football.
I met a man. He works at the zoo. :: who => I met a man who works at the zoo.
We stayed at a hotel. It had a big pool. :: which => We stayed at a hotel which had a big pool.
I know a girl. Her mum is a famous singer. :: whose => I know a girl whose mum is a famous singer.
That's the hospital. I was born there. :: where => That's the hospital where I was born.`,
      omit: `This is the cake that I made. :: Can you leave out the relative pronoun? => yes
The boy who lives here is nice. :: Can you leave out the relative pronoun? => no
The film which we saw was boring. :: Can you leave out the relative pronoun? => yes
I know a woman who works in a bank. :: Can you leave out the relative pronoun? => no
The book that you gave me is great. :: Can you leave out the relative pronoun? => yes
The dog which bit me was big. :: Can you leave out the relative pronoun? => no`,
      comma: `My brother, [who] lives in London, is a doctor.
Vienna, [which] is the capital of Austria, has almost two million people.
Our teacher, [whose] husband is a chef, often brings cakes.
The Eiffel Tower, [which] was built in 1889, is in Paris.
Mr Smith, [who] is 80, still plays tennis.
Graz, [where] I live, has a famous clock tower.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst who, which, whose und where richtig einsetzen.', 'Du verstehst, wofür Relativsätze verwendet werden.'],
        tasks: [
          { type: 'gap', pool: 'gap', n: 10, title: 'who, which, whose or where?', instr: 'Fill in the relative pronoun.' }
        ]
      },
      2: {
        ichkann: ['Du kannst zwei Sätze mit einem Relativsatz verbinden.', 'Du verwendest das richtige Relativpronomen.'],
        tasks: [
          { type: 'pair', pool: 'join', n: 5, title: 'Join the sentences.', instr: 'Use the word in brackets.' },
          { type: 'gap', pool: 'gap', n: 5, title: 'who, which, whose or where?', instr: 'Fill in the relative pronoun.' }
        ]
      },
      3: {
        ichkann: ['Du erkennst, wann das Relativpronomen wegfallen kann.', 'Du kannst Relativsätze mit Beistrichen (zusätzliche Information) bilden.'],
        tasks: [
          { type: 'pair', pool: 'omit', n: 4, inline: true, head: 'Sentence', col: 'yes / no', title: 'Can you leave it out?', instr: 'Can you leave out the relative pronoun? Write yes or no.' },
          { type: 'gap', pool: 'comma', n: 4, title: 'Extra information', instr: 'Fill in who, which, whose or where.' },
          { type: 'pair', pool: 'join', n: 3, title: 'Join the sentences.', instr: 'Use the word in brackets.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ conditionals
  def({
    id: 'e-conditionals', title: 'If-clauses', klassen: [3, 4], img: 'MiniHoS_Erklaeren_Idee-Gluehbirne',
    merk: '<b>Typ 1</b> (real, gut möglich): <b>If</b> + present simple, will + Grundform: If it rains, we <b>will stay</b> at home. <b>Typ 2</b> (unwahrscheinlich, nur vorgestellt): If + past simple, <b>would</b> + Grundform: If I <b>had</b> a million euros, I <b>would buy</b> a house. (If I were you … = An deiner Stelle …) <b>Typ 3</b> (nicht mehr möglich, Vergangenheit): If + past perfect, <b>would have</b> + 3. Form: If you <b>had studied</b>, you <b>would have passed</b>. Im if-Satz steht <b>nie will oder would</b>! <b>unless</b> = wenn … nicht (Unless you hurry = If you don\'t hurry). Beistrich, wenn der if-Satz vorne steht.',
    pools: {
      t1: `If it [rains:rain] tomorrow, we will stay at home.
If you hurry, you [will catch:catch] the bus.
If I [see:see] Tom, I will tell him.
We [will go:go] swimming if it is sunny.
If you [don't eat:not eat] your vegetables, you won't get dessert.
If she studies, she [will pass:pass] the test.
I [won't come:not come] if you invite Max.
If we [miss:miss] the train, we will be late.
If you [are:be] tired, you can go to bed.
Mum [will be:be] angry if we don't tidy up.`,
      t2: `If I [had:have] a dog, I would walk it every day.
If I were rich, I [would travel:travel] around the world.
If she [lived:live] in Vienna, she would go to the opera.
What [would you do:you / do] if you found 100 euros?
If I [were:be] you, I would say sorry.
We [would go:go] to the beach if we lived in Spain.
If he [knew:know] the answer, he would tell us.
If I could fly, I [would visit:visit] my friend in Australia.
She [wouldn't be:not be] so tired if she went to bed earlier.
If we [didn't have:not have] school, I would sleep all day.`,
      t3: `If I [had known:know], I would have helped you.
If you had studied, you [would have passed:pass] the test.
If we [had left:leave] earlier, we wouldn't have missed the bus.
She [would have come:come] if you had invited her.
If it [hadn't rained:not rain], we would have played football.
If he had been careful, he [wouldn't have broken:not break] the vase.`,
      choose: `If it {is|will be} sunny tomorrow, we'll have a picnic.
If I {won|would win} the lottery, I would buy a horse.
If you heat ice, it {melts|would melt}.
If I {were|am} you, I would take an umbrella.
If she {calls|will call}, I'll tell her the news.
If we {had|have} more time yesterday, we would have visited you.
I {would help|will help} you if I had time.
If you {don't hurry|won't hurry}, you'll be late.`,
      write: `What would you do if you were the head teacher of your school? Write 5 sentences. => If I were the head teacher, I would … ; would + infinitive ; past simple in the if-clause
What will you do if it is sunny at the weekend? Write 5 sentences. => If it is sunny, I will … ; will + infinitive ; present simple in the if-clause
What would you do if you could be invisible for a day? Write 5 sentences. => If I could be invisible, I would … ; would + infinitive`
    },
    levels: {
      1: {
        ichkann: ['Du kannst if-Sätze vom Typ 1 bilden.', 'Du weißt, dass im if-Satz kein will steht.'],
        tasks: [
          { type: 'gap', pool: 't1', n: 8, title: 'If-clauses type 1', instr: 'Use the present simple or will / won\'t.' },
          { type: 'write', pool: 'write', filter: x => /will you do/.test(x.q), n: 1, lines: 5, title: 'Your turn', instr: '' }
        ]
      },
      2: {
        ichkann: ['Du kannst if-Sätze vom Typ 2 bilden.', 'Du kannst Typ 1 und Typ 2 unterscheiden.'],
        tasks: [
          { type: 'gap', pool: 't2', n: 7, title: 'If-clauses type 2', instr: 'Use the past simple or would / wouldn\'t.' },
          { type: 'gap', pool: 'choose', n: 4, filter: x => !/had|have visited/.test(x.q), title: 'Which form?', instr: 'Circle the correct form.' },
          { type: 'write', pool: 'write', filter: x => /would you do/.test(x.q), n: 1, lines: 4, title: 'Imagine …', instr: '' }
        ]
      },
      3: {
        ichkann: ['Du kannst if-Sätze vom Typ 3 bilden.', 'Du kannst alle drei Typen sicher unterscheiden.'],
        tasks: [
          { type: 'gap', pool: 't3', n: 5, title: 'If-clauses type 3', instr: 'Use the past perfect or would have + past participle.' },
          { type: 'gap', pool: 'choose', n: 6, title: 'Which form?', instr: 'Circle the correct form.' },
          { type: 'gap', pool: 't2', n: 4, title: 'If-clauses type 2', instr: 'Fill in the correct form.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ passive
  def({
    id: 'e-passive', title: 'The passive', klassen: [4], img: 'MiniHoS_Erklaeren_Diagramm',
    merk: '<b>Passiv</b>: Wichtig ist, <b>was passiert</b>, nicht wer es tut. Bildung: <b>be</b> in der passenden Zeit + <b>past participle</b> (3. Form). Present: English <b>is spoken</b> here. Past: The bridge <b>was built</b> in 1900. Future: The results <b>will be announced</b> tomorrow. Present perfect: My bike <b>has been stolen</b>! Mit Modalverb: It <b>can be done</b>. Wer es tut, steht mit <b>by</b>: The book was written <b>by</b> J. K. Rowling. Aktiv → Passiv: Das Objekt wird zum Subjekt.',
    pools: {
      present: `English [is spoken:speak] in many countries.
Cheese [is made:make] from milk.
The classroom [is cleaned:clean] every day.
These shoes [are made:make] in Italy.
Coffee [is grown:grow] in Brazil.
The letters [are delivered:deliver] in the morning.
The windows [are opened:open] every break.
Football [is played:play] all over the world.`,
      past: `The Eiffel Tower [was built:build] in 1889.
The telephone [was invented:invent] by Bell.
My bike [was stolen:steal] last night.
The windows [were broken:break] in the storm.
The pyramids [were built:build] thousands of years ago.
Harry Potter [was written:write] by J. K. Rowling.
We [were invited:invite] to the wedding.
The thief [was caught:catch] by the police.
America [was discovered:discover] by Europeans in 1492.
The cakes [were eaten:eat] very quickly.`,
      active: `Someone cleans the room every day. => The room is cleaned every day.
They speak French in Canada. => French is spoken in Canada.
Somebody stole my wallet. => My wallet was stolen.
Leonardo da Vinci painted the Mona Lisa. => The Mona Lisa was painted by Leonardo da Vinci.
The police caught the thief. => The thief was caught by the police.
They will open the new school next year. => The new school will be opened next year.
Somebody has eaten my sandwich! => My sandwich has been eaten!
They built our house in 1975. => Our house was built in 1975.
The teacher checks our homework. => Our homework is checked by the teacher.
People can see the castle from far away. => The castle can be seen from far away.`,
      mix: `The new bridge [will be finished:finish] next year.
My phone [has been stolen:steal]!
This problem [can be solved:solve] easily.
Dinner [is served:serve] at 7 o'clock.
The match [was cancelled:cancel] because of the rain.
The results [will be published:publish] on Friday.
All the tickets [have been sold:sell].
Mobile phones [must be switched off:switch off] in class.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst das Passiv im present simple bilden (is made, are spoken).', 'Du verwendest die 3. Form des Verbs.'],
        tasks: [
          { type: 'gap', pool: 'present', n: 6, title: 'Present simple passive', instr: 'Use is / are + past participle.' },
          { type: 'gap', pool: 'past', n: 6, title: 'Past simple passive', instr: 'Use was / were + past participle.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Aktivsätze ins Passiv umformen.', 'Du kannst mit by sagen, wer etwas getan hat.'],
        tasks: [
          { type: 'pair', pool: 'active', n: 5, filter: x => !/will|has eaten|can see/.test(x.q), title: 'Active → passive', instr: 'Write the sentences in the passive. Use by only if it is important who did it.' },
          { type: 'gap', pool: 'past', n: 5, title: 'Past simple passive', instr: 'Use was / were + past participle.' }
        ]
      },
      3: {
        ichkann: ['Du kannst das Passiv in verschiedenen Zeiten bilden (will be, has been, can be).', 'Du formst Aktivsätze sicher ins Passiv um.'],
        tasks: [
          { type: 'gap', pool: 'mix', n: 6, title: 'Passive in different tenses', instr: 'Use the correct form of the passive.' },
          { type: 'pair', pool: 'active', n: 4, title: 'Active → passive', instr: 'Write the sentences in the passive.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ reported speech
  def({
    id: 'e-reported', title: 'Reported speech', klassen: [4], img: 'MiniHoS_Spielen_Theatermaske',
    merk: '<b>Indirekte Rede</b> nach said/told: Die Zeit rückt meist <b>eine Stufe zurück</b>: am/is → was, are → were, present simple → past simple, will → would, can → could, past simple/present perfect → past perfect. <b>Pronomen</b> und Orts-/Zeitangaben passen sich an: I → he/she, my → his/her, here → there, today → that day, tomorrow → the next day, yesterday → the day before. <b>say</b> (something), aber <b>tell</b> somebody. <b>Fragen</b>: He asked <b>if/whether</b> I was ready. She asked where I <b>lived</b> (keine Frage-Wortstellung!). <b>Aufforderungen</b>: She told me <b>to</b> sit down / <b>not to</b> be late.',
    pools: {
      st: `"I am tired." :: Tom said … => Tom said (that) he was tired.
"I like pizza." :: Lisa said … => Lisa said (that) she liked pizza.
"We live in Graz." :: They said … => They said (that) they lived in Graz.
"I will help you." :: Ben told me … => Ben told me (that) he would help me.
"I can swim." :: Mia said … => Mia said (that) she could swim.
"I have lost my key." :: Dad said … => Dad said (that) he had lost his key.
"I saw a fox." :: My sister said … => My sister said (that) she had seen a fox.
"The test is easy." :: The teacher said … => The teacher said (that) the test was easy.
"I'm going to the cinema." :: Tom told us … => Tom told us (that) he was going to the cinema.
"My parents are at work." :: Anna said … => Anna said (that) her parents were at work.`,
      q: `"Are you ready?" :: She asked me … => She asked me if I was ready.
"Where do you live?" :: He asked me … => He asked me where I lived.
"Do you like football?" :: Tom asked Lisa … => Tom asked Lisa if she liked football.
"What time is it?" :: She asked … => She asked what time it was.
"Have you finished?" :: The teacher asked us … => The teacher asked us if we had finished.
"Why are you late?" :: Mum asked me … => Mum asked me why I was late.
"Can you help me?" :: Ben asked me … => Ben asked me if I could help him.`,
      cmd: `"Sit down!" :: The teacher told us … => The teacher told us to sit down.
"Don't be late!" :: Mum told me … => Mum told me not to be late.
"Open your books!" :: She told the students … => She told the students to open their books.
"Don't touch it!" :: He told me … => He told me not to touch it.
"Please help me!" :: Lisa asked me … => Lisa asked me to help her.
"Be quiet!" :: Dad told the children … => Dad told the children to be quiet.`,
      saytell: `She [said] that she was hungry.
He [told] me that he was hungry.
Can you [tell] me the way to the station?
They [said] goodbye and left.
My mum always [tells] me to tidy my room.
Tom [said] he would come later.
Don't [tell] anybody my secret!
What did the teacher [say]?`
    },
    levels: {
      1: {
        ichkann: ['Du kannst Aussagen in die indirekte Rede setzen.', 'Du passt Pronomen und Zeitformen an (I am → he was).', 'Du unterscheidest say und tell.'],
        tasks: [
          { type: 'pair', pool: 'st', n: 5, filter: x => /am|like|live|is easy|are at/.test(x.q), title: 'What did they say?', instr: 'Write the sentences in reported speech.' },
          { type: 'gap', pool: 'saytell', n: 6, title: 'say or tell?', instr: 'Fill in the correct form of say or tell.' }
        ]
      },
      2: {
        ichkann: ['Du kannst will, can, present perfect und past simple in der indirekten Rede zurückverschieben.', 'Du kannst Aufforderungen wiedergeben (told me to …).'],
        tasks: [
          { type: 'pair', pool: 'st', n: 5, title: 'What did they say?', instr: 'Change the tenses: will → would, can → could, saw → had seen …' },
          { type: 'pair', pool: 'cmd', n: 3, title: 'Orders and requests', instr: 'Use told / asked + (not) to.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Fragen in der indirekten Rede wiedergeben (asked if / where …).', 'Du beachtest die Wortstellung in indirekten Fragen.'],
        tasks: [
          { type: 'pair', pool: 'q', n: 5, title: 'Reported questions', instr: 'Use asked if / asked + question word. No question word order!' },
          { type: 'pair', pool: 'cmd', n: 2, title: 'Orders and requests', instr: 'Use told / asked + (not) to.' },
          { type: 'pair', pool: 'st', n: 2, title: 'Statements', instr: 'Write the sentences in reported speech.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ gerund or infinitive
  def({
    id: 'e-gerund', title: 'Gerund or infinitive', klassen: [3, 4], img: 'MiniHoS_Schwarz_Idee-Gluehbirne',
    merk: '<b>-ing-Form (Gerund)</b> nach: like, love, hate, enjoy, finish, stop, mind, avoid, practise, suggest, can\'t stand – I enjoy <b>reading</b>. Nach <b>Präpositionen</b> immer -ing: I\'m good at <b>drawing</b>. She\'s interested in <b>learning</b> Spanish. Thank you for <b>helping</b>. <b>to + Grundform (Infinitiv)</b> nach: want, decide, hope, plan, need, learn, forget, promise, agree, would like – I want <b>to go</b> home. I\'d like <b>to</b> visit London. <b>Als Subjekt</b> oft -ing: <b>Swimming</b> is healthy.',
    pools: {
      gap: `I enjoy [reading:read] comics.
We want [to go:go] to the beach.
She hates [getting up:get up] early.
I hope [to see:see] you soon.
Have you finished [doing:do] your homework?
They decided [to stay:stay] at home.
My brother loves [playing:play] video games.
I'd like [to visit:visit] New York one day.
Stop [talking:talk], please!
Don't forget [to call:call] your grandma.
He needs [to buy:buy] a new phone.
Do you mind [opening:open] the window?
We are planning [to have:have] a party.
I can't stand [waiting:wait].
She promised [to help:help] me.
Lisa is learning [to drive:drive].`,
      prep: `I'm good at [drawing:draw].
She's interested in [learning:learn] Spanish.
Thank you for [helping:help] me.
He's afraid of [flying:fly].
We're looking forward to [seeing:see] you.
I'm tired of [waiting:wait].
How about [going:go] to the cinema?
She left without [saying:say] goodbye.
Tom is bad at [singing:sing].
I'm thinking of [buying:buy] a new bike.`,
      choose: `I enjoy {swimming|to swim} in the lake.
We decided {to take|taking} the train.
{Reading|To reading} is my favourite hobby.
I'd like {to have|having} a pizza, please.
He's very good at {cooking|cook}.
She wants {to become|becoming} a vet.
Do you mind {waiting|to wait} a moment?
They agreed {to meet|meeting} at six.
I'm interested in {joining|to join} the club.
Remember {to lock|locking} the door when you leave!`
    },
    levels: {
      1: {
        ichkann: ['Du kannst nach like, love, hate und enjoy die -ing-Form verwenden.', 'Du kannst nach want, hope und decide to + Grundform verwenden.'],
        tasks: [
          { type: 'gap', pool: 'gap', n: 8, title: '-ing or to?', instr: 'Use the -ing form or to + infinitive.' },
          { type: 'gap', pool: 'choose', n: 5, filter: x => !/Remember|mind|agreed/.test(x.q), title: 'Circle the correct form.', instr: '' }
        ]
      },
      2: {
        ichkann: ['Du weißt, dass nach Präpositionen die -ing-Form steht.', 'Du kennst feste Wendungen wie good at, interested in, look forward to.'],
        tasks: [
          { type: 'gap', pool: 'prep', n: 7, title: 'Preposition + -ing', instr: 'Fill in the -ing form.' },
          { type: 'gap', pool: 'gap', n: 5, title: '-ing or to?', instr: 'Use the -ing form or to + infinitive.' }
        ]
      },
      3: {
        ichkann: ['Du verwendest Gerund und Infinitiv sicher.', 'Du kannst über deine Vorlieben und Pläne schreiben.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 6, title: 'Circle the correct form.', instr: '' },
          { type: 'gap', pool: 'gap', n: 5, title: '-ing or to?', instr: 'Use the -ing form or to + infinitive.' },
          { type: 'gap', pool: 'prep', n: 4, title: 'Preposition + -ing', instr: 'Fill in the -ing form.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ linking words
  def({
    id: 'e-linking', title: 'Linking words', klassen: [2, 3, 4], img: 'MiniHoS_Schwarz_Tafel',
    merk: '<b>and</b> (und), <b>but</b> (aber), <b>or</b> (oder), <b>because</b> (weil – Grund), <b>so</b> (deshalb – Folge). <b>when</b> (wenn/als), <b>if</b> (wenn, falls), <b>although</b> (obwohl), <b>before / after</b> (bevor / nachdem), <b>while</b> (während). Für Texte: <b>first, then, after that, finally</b> (Reihenfolge), <b>however</b> (jedoch – am Satzanfang mit Beistrich), <b>also</b> (auch), <b>for example</b>, <b>on the one hand … on the other hand</b>, <b>in my opinion</b>, <b>in conclusion</b>.',
    pools: {
      basic: `I like apples [but] I don't like bananas.
I was hungry, [so] I made a sandwich.
We stayed at home [because] it was raining.
Do you want tea [or] coffee?
Tom plays football [and] Lisa plays tennis.
It was cold, [so] I put on my jacket.
She was tired [because] she went to bed late.
I wanted to go out, [but] it was too late.
I can't come [because] I'm ill.
Would you like pizza [or] pasta?`,
      mid: `[Although] it was raining, we went for a walk.
Brush your teeth [before] you go to bed.
[When] I was six, I learned to swim.
I'll call you [if] I have time.
[After] we had dinner, we watched a film.
[While] I was cooking, the phone rang.
She passed the test [although] she didn't study much.
[If] you need help, ask me.
Wash your hands [before] you eat.
I'll tell him [when] I see him.`,
      text: `{However|Because}, the hotel was very expensive.
{First|Finally}, put the water in the pot. Then add the pasta.
{In my opinion|For example}, school should start later.
I like many sports, {for example|however} tennis and skiing.
{Finally|First}, we arrived home at midnight.
{On the one hand|In conclusion}, mobile phones are useful. On the other hand, they can be distracting.
{In conclusion|First of all}, I think school uniforms are a good idea.
I love animals. I {also|however} like plants.`,
      join: `It was late. We went home. :: so => It was late, so we went home.
I didn't go to school. I was ill. :: because => I didn't go to school because I was ill.
She's very nice. She has no friends. :: but => She's very nice, but she has no friends.
It was cold. We went swimming. :: although => Although it was cold, we went swimming.
You can come. You want to. :: if => You can come if you want to.
I finished my homework. I watched TV. :: after => After I had finished my homework, I watched TV.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst Sätze mit and, but, or, because und so verbinden.', 'Du weißt, wann because (Grund) und wann so (Folge) passt.'],
        tasks: [
          { type: 'gap', pool: 'basic', n: 8, wordbox: true, title: 'and, but, or, because, so', instr: 'Use the words from the box.' },
          { type: 'pair', pool: 'join', n: 3, filter: x => /:: (so|because|but)/.test(x.raw), title: 'Join the sentences.', instr: 'Use the word in brackets.' }
        ]
      },
      2: {
        ichkann: ['Du kannst when, if, although, before, after und while verwenden.', 'Du verbindest Sätze zu längeren Sätzen.'],
        tasks: [
          { type: 'gap', pool: 'mid', n: 8, wordbox: true, title: 'when, if, although …', instr: 'Use the words from the box.' },
          { type: 'pair', pool: 'join', n: 3, title: 'Join the sentences.', instr: 'Use the word in brackets.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Texte mit however, first, finally, in my opinion usw. gliedern.', 'Du verwendest Bindewörter sicher beim Schreiben.'],
        tasks: [
          { type: 'gap', pool: 'text', n: 6, title: 'Linking words in texts', instr: 'Circle the correct linking word.' },
          { type: 'gap', pool: 'mid', n: 5, wordbox: true, title: 'when, if, although …', instr: 'Use the words from the box.' },
          { type: 'pair', pool: 'join', n: 2, title: 'Join the sentences.', instr: 'Use the word in brackets.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ word formation
  def({
    id: 'e-wordformation', title: 'Word formation', klassen: [3, 4], area: 'e-words', img: 'MiniHoS_Basteln_Schere',
    merk: '<b>Vorsilben</b> für das Gegenteil: <b>un</b>happy, <b>im</b>possible, <b>in</b>correct, <b>ir</b>regular, <b>il</b>legal, <b>dis</b>like. <b>Nachsilben</b>: Nomen für Personen: teach<b>er</b>, act<b>or</b>, art<b>ist</b>. Nomen aus Verben/Adjektiven: inform<b>ation</b>, move<b>ment</b>, happi<b>ness</b>, friend<b>ship</b>. Adjektive: help<b>ful</b> (hilfreich) – help<b>less</b> (hilflos), dang<b>erous</b>, comfort<b>able</b>, music<b>al</b>. <b>Wortfamilien</b>: success – succeed – successful – successfully.',
    pools: {
      neg: `happy => unhappy
possible => impossible
correct => incorrect
regular => irregular
legal => illegal
like => dislike
friendly => unfriendly
polite => impolite
agree => disagree
patient => impatient
honest => dishonest
fair => unfair
responsible => irresponsible
tidy => untidy`,
      noun: `teach (person) => teacher
act (person) => actor
art (person) => artist
inform (noun) => information
move (noun) => movement
happy (noun) => happiness
friend (noun) => friendship
decide (noun) => decision
dark (noun) => darkness
govern (noun) => government
swim (person) => swimmer
invite (noun) => invitation`,
      adj: `help => helpful
danger => dangerous
comfort => comfortable
music => musical
care (without care) => careless
beauty => beautiful
wonder => wonderful
fame => famous
use (no use) => useless
nature => natural
wash (can be washed) => washable
sun => sunny`,
      family: `I hope you will be [successful:success] in your new job.
The film was very [exciting:excite].
She drove [carefully:care] through the snow.
We need more [information:inform] about the trip.
Thank you for the [invitation:invite].
It's [impossible:possible] to finish this today.
The [teacher:teach] explained the rule again.
He was [unhappy:happy] because he lost the game.
Smoking is very [dangerous:danger].
This chair isn't very [comfortable:comfort].
Our [friendship:friend] is very important to me.
The [darkness:dark] made the children afraid.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst mit un-, im-, in-, ir-, il- und dis- Gegenteile bilden.', 'Du kannst Personen-Nomen mit -er, -or und -ist bilden.'],
        tasks: [
          { type: 'pair', pool: 'neg', n: 8, inline: true, head: 'Word', col: 'Opposite', title: 'Make opposites.', instr: 'Use un-, im-, in-, ir-, il- or dis-.' },
          { type: 'pair', pool: 'noun', n: 6, filter: x => /person/.test(x.q), inline: true, head: 'Verb', col: 'Person', title: 'Who does it?', instr: 'Make a noun for the person.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Nomen mit -ation, -ment, -ness und -ship bilden.', 'Du kannst Adjektive mit -ful, -less, -ous und -able bilden.'],
        tasks: [
          { type: 'pair', pool: 'noun', n: 6, inline: true, head: 'Word', col: 'Noun', title: 'Make nouns.', instr: 'Write the noun.' },
          { type: 'pair', pool: 'adj', n: 6, inline: true, head: 'Word', col: 'Adjective', title: 'Make adjectives.', instr: 'Write the adjective.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Wortfamilien bilden und die passende Wortart einsetzen.', 'Du erkennst Vor- und Nachsilben in neuen Wörtern.'],
        tasks: [
          { type: 'gap', pool: 'family', n: 8, title: 'Word families', instr: 'Use the word in brackets in the correct form.' },
          { type: 'pair', pool: 'neg', n: 5, inline: true, head: 'Word', col: 'Opposite', title: 'Make opposites.', instr: 'Use a prefix.' }
        ]
      }
    }
  });
})();
