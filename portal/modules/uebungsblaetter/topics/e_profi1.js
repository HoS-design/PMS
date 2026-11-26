/* Englisch – Ausbau und Stufe 4 · Profi, Teil 1 (Grundlagen, Gegenwart, Satzbau, Fragen, Präpositionen, Modalverben)
   Erweitert die bereits registrierten Themen: zusätzliche Sätze in vorhandenen Pools und eine vierte Stufe. */
(function () {
  const ext = UB.extendTopic = UB.extendTopic || function (id, o) {
    const t = UB.topics.find(x => x.id === id); if (!t) return;
    Object.entries(o.more || {}).forEach(([k, v]) => { t.pools[k] = (t.pools[k] ? t.pools[k] + '\n' : '') + v; });
    if (o.level4) t.levels[4] = o.level4;
  };

  // ------------------------------------------------------------------ to be
  ext('e-be', {
    more: {
      form: `Our classroom [is] on the second floor.
My cousins [are] from Germany.
I [am] in the school choir.
The weather [is] terrible today.
Mia and I [are] in the same team.
Your shoes [are] under the bed.
The museum [is] closed on Mondays.
We [are] ready for the test.`,
      neg: `The bus is late. :: not => The bus isn't late.
I am afraid of spiders. :: not => I'm not afraid of spiders.
Our neighbours are nice. :: not => Our neighbours aren't nice.
The museum is open today. :: not => The museum isn't open today.`,
      text: `Hi! I [am] Max and this [is] my dog Rocky. We [are] best friends. Rocky [is] three years old.
My parents [are] teachers. My mum [is] a maths teacher and my dad [is] an English teacher. They [aren't] at home today.
"[Are] you hungry?" – "No, I [am not]. But my brother [is]!"
Lisa and I [are] in class 1b. Our classroom [is] very big, but it [isn't] very modern.
"Where [is] my bag?" – "It [is] under your desk." – "Oh, thanks! And where [are] my books?"
It [is] Saturday. The children [are] in the garden and the cat [is] on the roof.`,
      trans: `Ich bin elf Jahre alt. => I'm eleven (years old).
Meine Schwester ist nicht zu Hause. => My sister isn't at home.
Seid ihr bereit? => Are you ready?
Das Wetter ist heute schön. => The weather is nice today.
Wir sind nicht müde. => We aren't tired.
Ist dein Bruder in der Schule? – Ja. => Is your brother at school? – Yes, he is.
Meine Freunde sind sehr lustig. => My friends are very funny.
Wo bist du? => Where are you?
Die Äpfel sind nicht rot. => The apples aren't red.
Bist du aus Österreich? – Nein. => Are you from Austria? – No, I'm not.`,
      err: `My parents is at home. => My parents are at home.
I are twelve years old. => I am twelve years old.
Is you ready? => Are you ready?
She not is my sister. => She isn't my sister.
We is in the classroom. => We are in the classroom.
Tom and Ben is my friends. => Tom and Ben are my friends.
Are she your teacher? => Is she your teacher?
I amn't tired. => I'm not tired.
The dog are hungry. => The dog is hungry.
It isn't cold? => Isn't it cold?`
    },
    level4: {
      ichkann: ['Du verwendest to be in Texten sicher – auch Verneinungen und Fragen.', 'Du kannst einfache Sätze mit to be ins Englische übersetzen.', 'Du findest Fehler bei am, is, are.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Fill in am, is, are, isn\'t, aren\'t or am not.' },
        { type: 'pair', pool: 'trans', n: 3, title: 'Translate into English.', instr: 'Use short forms.' },
        { type: 'error', pool: 'err', n: 3, filter: x => !/isn't cold/.test(x.q), title: 'Find the mistake.', instr: 'Each sentence has one mistake. Write it correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ have got
  ext('e-havegot', {
    more: {
      form: `My grandpa [has got] a big moustache.
We [have got] a new teacher this year.
The flat [has got] three bedrooms.
I [have got] a headache.`,
      text: `Hi, I'm Emma. I [have got] a brother and a sister. My brother [has got] a dog, but my sister and I [haven't got] any pets.
"[Have] you [got] a pen for me?" – "Sorry, I [haven't]. But Tom [has got] two."
Our school [has got] a big library, but it [hasn't got] a swimming pool. [Has] your school [got] a pool?
My grandparents [have got] a farm. They [have got] cows and horses, but they [haven't got] a tractor.
"[Has] your dad [got] a car?" – "Yes, he [has]. It's a red one."`,
      trans: `Ich habe zwei Brüder. => I have got two brothers.
Sie hat kein Haustier. => She hasn't got a pet.
Hast du ein Handy? – Ja. => Have you got a mobile phone? – Yes, I have.
Unsere Schule hat einen großen Turnsaal. => Our school has got a big gym.
Wir haben heute keine Zeit. => We haven't got time today.
Hat dein Bruder eine Freundin? – Nein. => Has your brother got a girlfriend? – No, he hasn't.
Mein Hund hat braune Augen. => My dog has got brown eyes.
Habt ihr einen Garten? => Have you got a garden?`,
      err: `She have got a cat. => She has got a cat.
I has got a new bike. => I have got a new bike.
Have he got a sister? => Has he got a sister?
We hasn't got a car. => We haven't got a car.
Has you got a pen? => Have you got a pen?
My parents has got a big house. => My parents have got a big house.
Tom haven't got a phone. => Tom hasn't got a phone.
Has your sister got a dog? – Yes, she have. => Has your sister got a dog? – Yes, she has.`
    },
    level4: {
      ichkann: ['Du verwendest have got / has got in Texten sicher.', 'Du kannst Sätze mit have got übersetzen.', 'Du findest Fehler bei have und has.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Use have got, has got, haven\'t got, hasn\'t got – or short answers.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ pronouns
  ext('e-pronouns', {
    more: {
      obj: `My cousins live in London. I often write to [them].
Our dog is very old. We love [him] very much.
Lisa, can I sit next to [you]?
Grandma made a cake for [us].`,
      poss: `Max and I have got a cat. [Our] cat is grey.
Is that Tom's sister? – Yes, that's [his] sister.
The dog wants [its] ball.
Mrs Green loves [her] garden.`,
      choose: `Can you give {me|my} the salt, please?
{My|Me} brother is taller than {me|my}.
This isn't {their|theirs} car. {Theirs|Their} is blue.
Is this {her|hers} bike or {yours|your}?`,
      text: `Lisa has got a new bike. [Her] bike is red. She rides [it] every day.
Tom and I are friends. [We] play football together. Tom's mum often drives [us] to the training.
"Is this your pen?" – "No, it isn't [mine]. Ask Ben. Maybe it's [his]."
My grandparents live in Vienna. I visit [them] in the holidays. [Their] flat is near the river.
The cat hurt [itself] when it jumped off the roof. Now [its] leg hurts.
"Did you make the cake [yourself]?" – "Yes, I made it all by [myself]!"`,
      trans: `Das ist mein Buch, nicht deines. => That's my book, not yours.
Kannst du mir helfen? => Can you help me?
Wir sehen sie (= die Kinder) jeden Tag. => We see them every day.
Sie hat sich verletzt. => She hurt herself.
Ist das ihre Tasche? – Ja, die gehört ihr. => Is that her bag? – Yes, it's hers.
Tom und Lisa helfen einander. => Tom and Lisa help each other.
Unser Haus ist größer als ihres (= von den Nachbarn). => Our house is bigger than theirs.
Ruf ihn an! => Call him!`,
      err: `This is mine bag. => This is my bag.
Me and Tom are friends. => Tom and I are friends.
Can you help I? => Can you help me?
The bike is her's. => The bike is hers.
They enjoyed theirselves. => They enjoyed themselves.
Give it to she! => Give it to her!
The dog wagged it's tail. => The dog wagged its tail.
Is this book your? => Is this book yours?`
    },
    level4: {
      ichkann: ['Du verwendest alle Pronomen in Texten sicher.', 'Du kannst Sätze mit Pronomen übersetzen.', 'Du kennst typische Fehler (it\'s/its, me and Tom …).'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Fill in the correct pronoun.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ nouns
  ext('e-nouns', {
    more: {
      plural: `potato => potatoes
tomato => tomatoes
dress => dresses
lady => ladies
toy => toys
wife => wives`,
      aan: `I need {an|a} eraser.
She's got {a|an} unusual name.
He's {an|a} honest boy.
We saw {a|an} UFO! (Say: you-eff-oh)`,
      text: `I've got two [children]. My son is [an] engineer and my daughter is [a] doctor.
Look at [those] birds up there! And [this] bird here is eating bread.
The [children's] toys are in the box. My [sister's] room is very tidy.
There are three [mice] in the kitchen! I can hear their little [feet].
My [parents'] car is old. [These] seats are very uncomfortable.`,
      trans: `Die Kinder spielen im Garten. => The children are playing in the garden.
Das ist Toms Fahrrad. => That's Tom's bike.
Diese Schuhe sind neu. => These shoes are new.
Ich habe einen Apfel und eine Orange. => I've got an apple and an orange.
Das Auto meiner Eltern ist rot. => My parents' car is red.
Siehst du die Mäuse dort drüben? => Can you see those mice over there?
Viele Leute wohnen in Wien. => A lot of people live in Vienna.
Meine Füße sind kalt. => My feet are cold.`,
      err: `I've got two childs. => I've got two children.
This shoes are too small. => These shoes are too small.
She's a English teacher. => She's an English teacher.
The bike of Tom is new. => Tom's bike is new.
There are three mouses. => There are three mice.
My parent's car is blue. => My parents' car is blue.
I brush my tooths. => I brush my teeth.
Look at that birds! => Look at those birds!`
    },
    level4: {
      ichkann: ['Du verwendest Mehrzahl, a/an, this/these und das Besitz-s in Texten sicher.', 'Du kannst Sätze mit diesen Formen übersetzen.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Fill in the gaps.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ there is / are
  ext('e-thereis', {
    more: {
      isare: `There {is|are} a lot of noise outside.
There {are|is} two bathrooms in our house.
There {are|is} lots of tourists in Salzburg.`,
      someany: `Are there {any|some} questions?
Could I have {some|any} more juice, please?
Can you buy {some|any} bread on your way home?
There are {some|any} letters for you on the table.`,
      text: `In my room [there is] a bed and a desk. [There are] two posters on the wall, but [there isn't] a TV.
"[Is there] a bakery near here?" – "Yes, [there is]. It's next to the bank."
[There aren't] any eggs in the fridge, but [there is] some milk. Let's make pancakes!
In our town [there is] a castle and [there are] some nice cafés. [There isn't] a cinema.
"[Are there] any students in the gym?" – "No, [there aren't]. They're all outside."`,
      trans: `Es gibt einen Park in meiner Stadt. => There is a park in my town.
Gibt es hier einen Supermarkt? => Is there a supermarket here?
Es gibt keine Äpfel mehr. => There aren't any apples left.
Im Kühlschrank ist etwas Milch. => There is some milk in the fridge.
Gibt es Fragen? => Are there any questions?
In meiner Klasse sind 22 Schüler. => There are 22 students in my class.
Möchtest du etwas Tee? => Would you like some tea?
Es gibt kein Kino in unserem Dorf. => There isn't a cinema in our village.`,
      err: `There is two cats in the garden. => There are two cats in the garden.
There aren't some apples. => There aren't any apples.
Is there any eggs? => Are there any eggs?
There are a book on the table. => There is a book on the table.
Have you got some brothers? => Have you got any brothers?
It gives a park near my house. => There is a park near my house.`
    },
    level4: {
      ichkann: ['Du verwendest there is/are und some/any in Texten sicher.', 'Du übersetzt „es gibt“ richtig (nicht „it gives“).'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Use there is / there are / is there / are there … (also negative).' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ present simple
  ext('e-presentsimple', {
    more: {
      gap: `The sun [sets:set] in the west.
My grandma [knits:knit] scarves for the whole family.
Our cat [catches:catch] mice in the garden.
Water [boils:boil] at 100 degrees.
Tom [misses:miss] his friends from his old school.
The lesson [finishes:finish] at 12.30.`,
      neg: `The shop opens on Sundays. :: not => The shop doesn't open on Sundays.
We go skiing every winter. :: not => We don't go skiing every winter.`,
      text: `My brother Paul is 15. He [gets] up at six every day. He [doesn't] like breakfast, so he only [drinks] a glass of milk. Then he [goes] to school by bus.
"[Do] you like football?" – "Yes, I [do]. I [play] every Saturday." – "[Does] your sister play, too?" – "No, she [doesn't]."
My parents [work] in a hotel. My mum [cooks] and my dad [helps] the guests. They [don't] work on Mondays.
Our dog Max [loves] the park. He [runs] after balls and [doesn't] want to go home.
"What time [does] the film start?" – "It [starts] at eight, but the doors [open] at half past seven."
Emma [studies] French. She [has] lessons twice a week and she [watches] French films at home.`,
      trans: `Mein Bruder spielt jeden Tag Gitarre. => My brother plays the guitar every day.
Sie trinkt keinen Kaffee. => She doesn't drink coffee.
Wohnst du in Graz? – Ja. => Do you live in Graz? – Yes, I do.
Wann beginnt die Schule? => When does school start?
Wir gehen nie am Sonntag einkaufen. => We never go shopping on Sundays.
Mein Vater fährt mit dem Zug zur Arbeit. => My dad goes to work by train.
Magst du Pizza? – Nein. => Do you like pizza? – No, I don't.
Er ist immer müde. => He is always tired.`,
      err: `She like chocolate. => She likes chocolate.
He don't play tennis. => He doesn't play tennis.
Does she lives in Linz? => Does she live in Linz?
My dad go to work by car. => My dad goes to work by car.
I plays football on Mondays. => I play football on Mondays.
Do your brother speak English? => Does your brother speak English?
She doesn't likes fish. => She doesn't like fish.
He watchs TV every evening. => He watches TV every evening.
I go always to school by bus. => I always go to school by bus.
Tom studys a lot. => Tom studies a lot.`
    },
    level4: {
      ichkann: ['Du verwendest das present simple in Texten sicher – mit Verneinungen und Fragen.', 'Du kannst Sätze ins Englische übersetzen.', 'Du findest typische Fehler (he don\'t, does she lives …).'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'There are no verbs in brackets. Think: Which verb fits? Which form?' },
        { type: 'pair', pool: 'trans', n: 3, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Each sentence has one mistake. Write it correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ present progressive
  ext('e-progressive', {
    more: {
      gap: `Shh! The baby [is sleeping:sleep].
Look! Those boys [are fighting:fight].
I can't talk now. I [am driving:drive].
Why [are you laughing:you / laugh]?`,
      simpprog: `My dad usually {drives|is driving} to work, but today he {is taking|takes} the bus.
What {are you doing|do you do}? – I'm looking for my keys.
Water {boils|is boiling} at 100 °C.
Hurry up! The film {is starting|starts} – the lights are going down.`,
      text: `It's Saturday afternoon. Mum [is reading] a book and Dad [is cooking]. My little brother [isn't playing] – he [is sleeping].
"What [are] you [doing]?" – "I [am writing] an email to Lisa. She usually [writes] to me every week."
Look out of the window! It [is snowing]! It never [snows] in October!
Tom normally [walks] to school, but today he [is going] by bike because he [is] late.
"Why [is] the dog [barking]?" – "Because someone [is standing] at the door."`,
      trans: `Was machst du gerade? => What are you doing?
Ich lese gerade ein Buch. => I'm reading a book at the moment.
Hör zu! Das Baby weint. => Listen! The baby is crying.
Sie spielt jeden Tag Klavier, aber jetzt schläft sie. => She plays the piano every day, but now she's sleeping.
Wir warten auf den Bus. => We're waiting for the bus.
Hörst du mir zu? => Are you listening to me?
Mein Vater arbeitet heute nicht. => My dad isn't working today.
Warum lachst du? => Why are you laughing?`,
      err: `Look! The dog run after the cat. => Look! The dog is running after the cat.
I am liking this song. => I like this song.
She is writeing a letter. => She is writing a letter.
What do you do now? – I'm cooking. => What are you doing now? – I'm cooking.
They are swiming in the lake. => They are swimming in the lake.
He is play football at the moment. => He is playing football at the moment.
I'm knowing the answer. => I know the answer.
It rains now. => It's raining now.`
    },
    level4: {
      ichkann: ['Du wählst in Texten zwischen present simple und present progressive.', 'Du weißt, dass Verben wie like, know, want meist kein -ing haben.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Simple or progressive?', instr: 'Fill in the gaps. There are no verbs in brackets.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ word order
  ext('e-wordorder', {
    more: {
      fix: `Tomorrow have we a test. => We have a test tomorrow.
Often I read in bed. => I often read in bed.
My sister plays very well the piano. => My sister plays the piano very well.
At 7 o'clock gets up my mum. => My mum gets up at 7 o'clock.
I like very much ice cream. => I like ice cream very much.
In summer we go often to the lake. => In summer we often go to the lake.`,
      trans: `Am Montag spiele ich Fußball. => I play football on Monday(s).
Wir fahren jeden Sommer nach Italien. => We go to Italy every summer.
Meine Schwester spielt sehr gut Tennis. => My sister plays tennis very well.
Ich gehe oft mit meinem Hund in den Park. => I often go to the park with my dog.
Gestern war ich im Kino. => I was at the cinema yesterday.
Er ist nie zu spät. => He is never late.
Ich mag Schokolade sehr. => I like chocolate very much.
Um acht Uhr beginnt die Schule. => School starts at eight o'clock.`,
      long: `my parents >> usually >> drink >> coffee >> in the kitchen >> in the morning
Tom >> plays >> football >> in the park >> every Saturday
we >> often >> visit >> our grandma >> in Linz >> at the weekend
my sister >> is >> never >> late >> for school
I >> did >> my homework >> at home >> yesterday
the children >> always >> eat >> lunch >> at school >> on Mondays`
    },
    level4: {
      ichkann: ['Du verwendest die englische Satzstellung auch in langen Sätzen sicher.', 'Du übersetzt deutsche Sätze mit anderer Wortstellung richtig.'],
      tasks: [
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: 'Careful: English word order is different!' },
        { type: 'pair', pool: 'fix', n: 2, title: 'Correct the word order.', instr: 'Write the sentences correctly.' },
        { type: 'order', pool: 'long', n: 1, title: 'A long sentence', instr: 'Number the parts. Remember: S – V – O – place – time.' }
      ]
    }
  });

  // ------------------------------------------------------------------ questions
  ext('e-questions', {
    more: {
      ask: `My grandparents live in a small village. :: Where? => Where do your grandparents live?
Lisa is crying. :: Why? => Why is Lisa crying?
The lesson finished at one. :: When? => When did the lesson finish?
They have got three cats. :: How many? => How many cats have they got?`,
      tags: `There's no milk left, [is there]?
Let's go to the cinema, [shall we]?
Open the window, [will you]?
Nobody called, [did they]?`,
      trans: `Wo wohnst du? => Where do you live?
Warum ist sie traurig? => Why is she sad?
Wer hat dich angerufen? => Who called you?
Wen hast du angerufen? => Who did you call?
Wann hat der Film begonnen? => When did the film start?
Wie viele Geschwister hast du? => How many brothers and sisters have you got?
Es ist kalt, nicht wahr? => It's cold, isn't it?
Du magst keinen Fisch, oder? => You don't like fish, do you?
Wem gehört dieses Handy? => Whose mobile phone is this?
Was ist passiert? => What happened?`,
      err: `Where you live? => Where do you live?
What did you saw? => What did you see?
Who did call you? => Who called you?
Why she is sad? => Why is she sad?
How many money do you need? => How much money do you need?
You like pizza, isn't it? => You like pizza, don't you?
When does the film starts? => When does the film start?
What means this word? => What does this word mean?`
    },
    level4: {
      ichkann: ['Du bildest alle Arten von Fragen sicher (mit do/does/did, Subjektfragen, question tags).', 'Du kannst Fragen ins Englische übersetzen.'],
      tasks: [
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the questions correctly.' },
        { type: 'gap', pool: 'tags', n: 3, bw: 7, title: 'Question tags', instr: 'Add the question tag.' }
      ]
    }
  });

  // ------------------------------------------------------------------ prepositions
  ext('e-prepositions', {
    more: {
      time: `I always feel tired [on] Monday mornings.
The museum is closed [at] lunchtime.
We moved to Graz [in] 2019.
See you [on] Friday evening!`,
      mix: `I'm good {at|in|on} drawing.
She's afraid {of|from|before} dogs.
We're waiting {for|on|to} the bus.
It depends {on|of|from} the weather.
I'm interested {in|for|on} history.
Thank you {for|to|of} your help.`,
      text: `I was born [in] Graz [on] 12th March 2014. We lived [in] a small flat [in] the city centre.
[At] the weekend we often go [to] the lake [by] bike. [In] winter we go skiing.
My cat sleeps [under] my bed [at] night, but [in] the morning she sits [on] the windowsill.
The café is [between] the bakery and the bookshop, [on] the other side of the street.
School starts [at] 7.45. I go there [on] foot because it's only five minutes [from] my house.`,
      trans: `Ich habe am Montag Geburtstag. => My birthday is on Monday.
Wir treffen uns um drei Uhr. => We're meeting at three o'clock.
Im Sommer fahren wir mit dem Zug nach Italien. => In summer we go to Italy by train.
Die Katze ist unter dem Tisch. => The cat is under the table.
Ich bin zu Hause. => I'm at home.
Ich warte auf dich. => I'm waiting for you.
Sie ist gut in Mathe. => She's good at maths.
Wir gehen zu Fuß. => We're going on foot.`
    },
    level4: {
      ichkann: ['Du verwendest Präpositionen für Ort, Zeit und Verkehrsmittel in Texten sicher.', 'Du kennst feste Wendungen wie good at, afraid of, wait for.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Fill in the prepositions.' },
        { type: 'gap', pool: 'mix', n: 5, filter: x => /good|afraid|waiting|depends|interested|Thank/.test(x.q), title: 'Fixed phrases', instr: 'Circle the correct preposition.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' }
      ]
    }
  });

  // ------------------------------------------------------------------ modals
  ext('e-modals', {
    more: {
      mix: `You {needn't|mustn't} bring a towel. The hotel has got towels.
{Could|Must} you pass me the salt, please?
I {couldn't|can't} sleep last night because of the noise.
Students {must|might} wear a helmet when they ride a bike to school.`,
      text: `"[Can] I go to the party, Mum?" – "Yes, but you [must] be home by ten. And you [mustn't] forget your phone."
In our school we [don't have to] wear a uniform, but we [have to] take off our caps in the classroom.
You look ill. You [should] see a doctor. You [shouldn't] go to school today.
When I was five, I [couldn't] swim. Now I [can] swim very well.
Take an umbrella. It [might] rain later.`,
      trans: `Ich kann nicht schwimmen. => I can't swim.
Du darfst hier nicht rauchen. => You mustn't smoke here.
Wir müssen morgen nicht in die Schule. => We don't have to go to school tomorrow.
Du solltest mehr Wasser trinken. => You should drink more water.
Musst du heute arbeiten? => Do you have to work today?
Er musste gestern arbeiten. => He had to work yesterday.
Es könnte morgen schneien. => It might snow tomorrow.
Als ich klein war, konnte ich nicht lesen. => When I was little, I couldn't read.`,
      err: `She cans swim very well. => She can swim very well.
You must to do your homework. => You must do your homework.
He musts go home. => He must go home.
Do you can help me? => Can you help me?
We don't must wear a uniform. => We don't have to wear a uniform.
She should to see a doctor. => She should see a doctor.
I musted work yesterday. => I had to work yesterday.
He doesn't can come. => He can't come.`
    },
    level4: {
      ichkann: ['Du verwendest Modalverben in Texten sicher – auch in der Vergangenheit (could, had to).', 'Du übersetzt „müssen nicht“ und „nicht dürfen“ richtig.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Use can, can\'t, could, couldn\'t, must, mustn\'t, have to, don\'t have to, should, shouldn\'t, might.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });
})();
