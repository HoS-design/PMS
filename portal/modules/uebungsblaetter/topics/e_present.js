/* Englisch – Gegenwart, Satzbau, Fragen, Präpositionen, Modalverben (1.–3. Klasse) */
(function () {
  const E = { fach: 'englisch', lang: 'en', area: 'e-grammar' };
  const def = (o) => UB.simple(Object.assign({}, E, o));

  // ------------------------------------------------------------------ present simple
  def({
    id: 'e-presentsimple', title: 'Present simple', klassen: [1, 2], img: 'MiniHoS_Planen_Kalender',
    merk: '<b>Present simple</b> für Gewohnheiten, Regelmäßiges und Tatsachen: I play football every Monday. The sun rises in the east. Signalwörter: always, usually, often, sometimes, never, every day, on Mondays. <b>he/she/it – das s muss mit!</b> she play<b>s</b>, he watch<b>es</b>, it fl<b>ies</b>, he go<b>es</b>, she ha<b>s</b>. <b>Verneinung</b>: I/you/we/they <b>don\'t</b> play – he/she/it <b>doesn\'t</b> play (ohne s!). <b>Frage</b>: <b>Do</b> you play …? – Yes, I do. <b>Does</b> she play …? – No, she doesn\'t. Häufigkeitswörter stehen vor dem Verb, aber nach am/is/are: I often play. She is always late.',
    pools: {
      third: `play => plays
go => goes
watch => watches
fly => flies
read => reads
do => does
wash => washes
study => studies
have => has
fix => fixes
like => likes
cry => cries
miss => misses
play the guitar => plays the guitar
say => says
tidy => tidies`,
      gap: `My brother [plays:play] football every Saturday.
I [get up:get up] at seven o'clock.
Lisa [goes:go] to school by bus.
We [watch:watch] TV in the evening.
Mr Brown [teaches:teach] English.
The shop [opens:open] at nine.
My parents [work:work] in Graz.
Our cat [sleeps:sleep] on my bed.
Ben [does:do] his homework after lunch.
The children [have:have] lunch at school.
My mum [drinks:drink] coffee every morning.
It often [rains:rain] in April.
Tom [washes:wash] his hands before dinner.
You [speak:speak] English very well.
My sister [tidies:tidy] her room on Fridays.
The bus [leaves:leave] at 7.15.
Lena [has:have] two rabbits.
I [walk:walk] to school.
He [flies:fly] to London once a year.
My friends [live:live] in Linz.`,
      neg: `She plays tennis. :: not => She doesn't play tennis.
I like fish. :: not => I don't like fish.
Tom goes to school by bike. :: not => Tom doesn't go to school by bike.
We watch TV in the morning. :: not => We don't watch TV in the morning.
My dad drinks tea. :: not => My dad doesn't drink tea.
They live in Vienna. :: not => They don't live in Vienna.
The cat eats vegetables. :: not => The cat doesn't eat vegetables.
I have breakfast at school. :: not => I don't have breakfast at school.
Lisa speaks French. :: not => Lisa doesn't speak French.
You know the answer. :: not => You don't know the answer.
The film starts at eight. :: not => The film doesn't start at eight.
My brother does his homework. :: not => My brother doesn't do his homework.`,
      dodoes: `I {don't|doesn't} like spinach.
My sister {doesn't|don't} eat meat.
{Do|Does} you play an instrument?
{Does|Do} your dad work in Graz?
We {don't|doesn't} have school on Sundays.
Tom {doesn't|don't} like football.
{Do|Does} your friends live near you?
{Does|Do} the bus stop here?
They {don't|doesn't} watch much TV.
It {doesn't|don't} snow in summer.
{Does|Do} Lisa have a pet?
{Do|Does} we need our books today?`,
      quest: `you / play tennis => Do you play tennis?
she / like pizza => Does she like pizza?
your parents / work at the weekend => Do your parents work at the weekend?
Tom / live in Graz => Does Tom live in Graz?
the shop / open on Sundays => Does the shop open on Sundays?
they / walk to school => Do they walk to school?
your brother / speak English => Does your brother speak English?
you / get up early => Do you get up early?
Mia / have a sister => Does Mia have a sister?
the train / stop here => Does the train stop here?`,
      answer: `Do you like chocolate? – Yes, [I do].
Does your sister play the piano? – No, [she doesn't].
Do your parents speak English? – Yes, [they do].
Does Tom live near you? – No, [he doesn't].
Do you walk to school? – No, [I don't].
Does your dog bark a lot? – Yes, [it does].
Do we have English today? – Yes, [we do].
Does your dad cook? – Yes, [he does].
Do Ben and Lisa play football? – No, [they don't].`,
      freq: `I >> often >> play >> computer games
she >> is >> always >> late
we >> never >> eat >> meat
my dad >> usually >> gets up >> at six
they >> are >> sometimes >> tired
Tom >> always >> does >> his homework
I >> am >> never >> bored
my sister >> often >> reads >> comics
we >> sometimes >> go >> to the cinema
he >> is >> usually >> in the garden`
    },
    levels: {
      1: {
        ichkann: ['Du kannst die Verbform für he, she, it mit -s bilden.', 'Du kannst das present simple in Sätzen verwenden.'],
        tasks: [
          { type: 'pair', pool: 'third', n: 8, inline: true, head: 'I / you / we / they', col: 'he / she / it', title: 'Don\'t forget the s!', instr: 'Write the he/she/it form.' },
          { type: 'gap', pool: 'gap', n: 8, title: 'Present simple', instr: 'Fill in the correct form of the verb in brackets.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Sätze im present simple mit don\'t und doesn\'t verneinen.', 'Du kannst do und does richtig verwenden.'],
        tasks: [
          { type: 'gap', pool: 'dodoes', n: 7, title: 'do / does / don\'t / doesn\'t', instr: 'Circle the correct word.' },
          { type: 'pair', pool: 'neg', n: 5, inline: true, head: 'Sentence', col: 'Negative sentence', title: 'Make the sentences negative.', instr: 'Use don\'t or doesn\'t. Careful: no s after doesn\'t!' },
          { type: 'gap', pool: 'gap', n: 4, title: 'Present simple', instr: 'Fill in the correct form.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Fragen im present simple stellen.', 'Du kannst Kurzantworten geben.', 'Du weißt, wo Häufigkeitswörter im Satz stehen.'],
        tasks: [
          { type: 'pair', pool: 'quest', n: 4, inline: true, head: 'Words', col: 'Question', title: 'Ask questions.', instr: 'Use Do … ? or Does … ?' },
          { type: 'gap', pool: 'answer', n: 5, bw: 8, title: 'Short answers', instr: 'Complete the short answers.' },
          { type: 'order', pool: 'freq', n: 2, title: 'Put the words in the right order.', instr: 'Number the words 1–4.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ present progressive
  def({
    id: 'e-progressive', title: 'Present progressive', klassen: [1, 2], img: 'MiniHoS_Schwarz_Laptop-Sitzend',
    merk: '<b>Present progressive</b> (Verlaufsform) für Handlungen, die <b>gerade jetzt</b> passieren: Look! It <b>is raining</b>. I <b>am reading</b> a book now. Bildung: am/is/are + Verb mit <b>-ing</b>. Schreibung: make → making (stummes e fällt weg), swim → swimming, sit → sitting (Mitlaut verdoppelt), lie → lying. Signalwörter: now, at the moment, Look!, Listen! <b>Verneinung</b>: I\'m not reading. <b>Frage</b>: Are you listening? – Yes, I am. <b>Present simple oder progressive?</b> Gewohnheit (every day, often) → simple; gerade jetzt (now, Look!) → progressive.',
    pools: {
      ing: `play => playing
make => making
swim => swimming
read => reading
write => writing
sit => sitting
run => running
lie => lying
dance => dancing
get => getting
watch => watching
stop => stopping
ride => riding
cry => crying
take => taking
shop => shopping`,
      gap: `Look! The dog [is running:run] after the cat.
I [am doing:do] my homework at the moment.
Listen! The baby [is crying:cry].
My parents [are cooking:cook] dinner now.
We [are watching:watch] a film right now.
Mia [is sitting:sit] next to me.
Be quiet! Tom [is sleeping:sleep].
The children [are swimming:swim] in the lake.
It [is snowing:snow] outside.
I [am writing:write] an email to my friend.
Look! Our teacher [is coming:come].
My brother [is playing:play] the guitar.
They [are waiting:wait] for the bus.
She [is wearing:wear] a red dress today.
Hurry up! Everybody [is waiting:wait].`,
      neg: `I am reading. :: not => I'm not reading.
She is sleeping. :: not => She isn't sleeping.
They are playing football. :: not => They aren't playing football.
It is raining. :: not => It isn't raining.
We are listening. :: not => We aren't listening.
Tom is doing his homework. :: not => Tom isn't doing his homework.
The dog is barking. :: not => The dog isn't barking.
You are helping me. :: not => You aren't helping me.`,
      quest: `you / listen => Are you listening?
she / sleep => Is she sleeping?
they / play outside => Are they playing outside?
it / rain => Is it raining?
Tom / watch TV => Is Tom watching TV?
your parents / work today => Are your parents working today?
the baby / cry => Is the baby crying?
we / wait for Mia => Are we waiting for Mia?`,
      mix: `Look! Ben [is climbing:climb] a tree.
Ben often [climbs:climb] trees.
I usually [walk:walk] to school.
Today I [am going:go] by bus.
Listen! Someone [is playing:play] the piano.
My sister [plays:play] the piano every day.
It [rains:rain] a lot in autumn.
Take an umbrella! It [is raining:rain].
We [have:have] English on Mondays and Fridays.
Shh! The children [are sleeping:sleep].
My dad never [drinks:drink] coffee.
At the moment he [is drinking:drink] tea.
What [are you doing:you / do] now?
What [do you do:you / do] at the weekend?`,
      simpprog: `Look! It {is snowing|snows}.
It {snows|is snowing} a lot in January.
I {am reading|read} a great book at the moment.
I {read|am reading} every evening.
Tom {is talking|talks} on the phone right now.
Tom usually {walks|is walking} to school.
Listen! The birds {are singing|sing}.
My mum {works|is working} in a hospital.
Be quiet! I {am thinking|think}.
We {go|are going} swimming every Sunday.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst die -ing-Form richtig schreiben.', 'Du kannst Sätze im present progressive bilden.'],
        tasks: [
          { type: 'pair', pool: 'ing', n: 8, inline: true, head: 'Verb', col: '-ing form', title: 'Write the -ing form.', instr: 'Careful with the spelling!' },
          { type: 'gap', pool: 'gap', n: 8, title: 'What\'s happening now?', instr: 'Use am / is / are + -ing.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Sätze im present progressive verneinen.', 'Du kannst Fragen im present progressive stellen.'],
        tasks: [
          { type: 'gap', pool: 'gap', n: 5, title: 'What\'s happening now?', instr: 'Use am / is / are + -ing.' },
          { type: 'pair', pool: 'neg', n: 4, inline: true, head: 'Sentence', col: 'Negative sentence', title: 'Make the sentences negative.', instr: 'Use short forms.' },
          { type: 'pair', pool: 'quest', n: 4, inline: true, head: 'Words', col: 'Question', title: 'Ask questions.', instr: 'Am I …? / Is she …? / Are they …?' }
        ]
      },
      3: {
        ichkann: ['Du kannst present simple und present progressive unterscheiden.', 'Du erkennst die Signalwörter (now, Look!, every day, usually).'],
        tasks: [
          { type: 'gap', pool: 'simpprog', n: 6, title: 'Simple or progressive?', instr: 'Circle the correct form. Look for signal words.' },
          { type: 'gap', pool: 'mix', n: 8, title: 'Simple or progressive?', instr: 'Fill in the correct form of the verb.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ word order
  def({
    id: 'e-wordorder', title: 'Word order', klassen: [1, 2], img: 'MiniHoS_Ordnen_Ordner',
    merk: 'Im englischen Aussagesatz gilt fast immer: <b>S – V – O</b> (Subjekt – Verb – Objekt): Tom (S) likes (V) pizza (O). Danach kommt <b>Ort vor Zeit</b> (place before time): We go <b>to school</b> <b>every day</b>. Häufigkeitswörter stehen <b>vor</b> dem Vollverb, aber <b>nach</b> am/is/are: I often play. He is never late. Im Deutschen ist die Stellung anders: „Am Montag spiele ich Fußball“ – Englisch: I play football on Monday.',
    pools: {
      svo: `Tom >> likes >> pizza
my sister >> plays >> the piano
we >> have got >> a new teacher
the cat >> drinks >> milk
I >> love >> my dog
Lisa >> reads >> a book
my parents >> drive >> a red car
the children >> eat >> ice cream
Ben >> has >> two brothers
they >> watch >> a film`,
      place: `we >> go >> to school >> every day
I >> play >> football >> in the park >> on Sundays
my mum >> works >> in Graz >> from Monday to Friday
they >> meet >> at the café >> after school
she >> was >> at home >> yesterday
we >> are going >> to London >> next summer
he >> sleeps >> in his room >> at night
I >> saw >> Tom >> at the station >> this morning
my grandparents >> live >> in a small village >> near Linz
Lisa >> does >> her homework >> in the kitchen >> every afternoon`,
      freq: `I >> often >> play >> tennis
he >> is >> never >> late
we >> usually >> have >> pizza on Fridays
my dog >> always >> sleeps >> on the sofa
they >> are >> often >> tired after school
she >> sometimes >> forgets >> her keys
I >> never >> drink >> coffee
Tom >> is >> always >> hungry`,
      fix: `On Monday I play football. => I play football on Monday.
Every day we go to school. => We go to school every day.
I play often tennis. => I often play tennis.
She is late always. => She is always late.
Pizza likes Tom. => Tom likes pizza.
We go every Sunday to the lake. => We go to the lake every Sunday.
My brother never is tired. => My brother is never tired.
In the evening watches my dad TV. => My dad watches TV in the evening.
I have today a test. => I have a test today.
Yesterday was I at home. => I was at home yesterday.`
    },
    levels: {
      1: {
        ichkann: ['Du kennst die Satzstellung Subjekt – Verb – Objekt.', 'Du kannst einfache englische Sätze richtig ordnen.'],
        tasks: [
          { type: 'order', pool: 'svo', n: 3, title: 'Make sentences.', instr: 'Number the parts: subject – verb – object. Write the sentence with a capital letter and a full stop.' },
          { type: 'order', pool: 'freq', n: 2, title: 'always, often, never …', instr: 'Number the parts in the right order.' }
        ]
      },
      2: {
        ichkann: ['Du weißt: Ort vor Zeit (place before time).', 'Du kannst Häufigkeitswörter richtig stellen.'],
        tasks: [
          { type: 'order', pool: 'place', n: 3, title: 'Place before time', instr: 'Number the parts in the right order.' },
          { type: 'order', pool: 'freq', n: 1, title: 'always, often, never …', instr: 'Number the parts in the right order.' }
        ]
      },
      3: {
        ichkann: ['Du erkennst falsche Satzstellung und verbesserst sie.', 'Du vermeidest die deutsche Wortstellung im Englischen.'],
        tasks: [
          { type: 'pair', pool: 'fix', n: 5, title: 'Correct the word order.', instr: 'These sentences have German word order. Write them correctly.' },
          { type: 'order', pool: 'place', n: 2, title: 'Place before time', instr: 'Number the parts in the right order.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ questions
  def({
    id: 'e-questions', title: 'Questions and question tags', klassen: [1, 2, 3], img: 'MiniHoS_Schwarz_Nachdenken-Frage',
    merk: '<b>Fragewörter</b>: what (was), where (wo/wohin), when (wann), who (wer), why (warum), how (wie), which (welche/r), whose (wessen), how many/much (wie viele/viel), how old, what time. <b>Fragen mit Hilfsverb</b>: Fragewort + do/does/did + Subjekt + Verb: Where <b>do</b> you live? When <b>does</b> the film start? Mit to be/can: Where <b>is</b> he? What <b>can</b> you see? <b>Subjektfrage</b> (Wer/Was tut etwas?) – ohne do: <b>Who called</b> you? (Jemand rief an.) <b>Objektfrage</b>: Who <b>did</b> you call? <b>Question tags</b> (Bestätigungsfragen, „oder?“): bejahter Satz → verneinter Anhang: It\'s cold, <b>isn\'t it</b>? Verneinter Satz → bejahter Anhang: You don\'t like fish, <b>do you</b>?',
    pools: {
      word: `[Where] do you live? – In Graz.
[When] is your birthday? – In May.
[Who] is your best friend? – Lisa.
[What] is your favourite colour? – Blue.
[How old] are you? – I'm eleven.
[Why] are you late? – Because I missed the bus.
[How many] brothers have you got? – Two.
[What time] does the film start? – At eight.
[Whose] bag is this? – It's Tom's.
[How] do you get to school? – By bike.
[Which] T-shirt do you like, the red one or the blue one? – The red one.
[How much] is the ice cream? – Two euros.
[Where] are my keys? – On the table.
[Who] is that boy? – That's my cousin.
[When] do you get up? – At half past six.
[What] are you doing? – I'm reading.`,
      choose: `{Where|When|Who} is the station? – Next to the park.
{When|Where|Why} does school start? – At 7.45.
{Who|What|How} is your English teacher? – Mrs Smith.
{Why|Where|Who} are you sad? – Because my cat is ill.
{How|What|Who} are you? – I'm fine, thanks.
{What|Who|When} do you have for breakfast? – Toast and tea.
{How many|How much|How old} pets have you got? – Three.
{How much|How many|How old} is this T-shirt? – Ten euros.
{Whose|Who|Which} phone is this? – It's mine.
{How old|How many|How much} is your sister? – She's fourteen.`,
      ask: `Lisa plays tennis. :: When? => When does Lisa play tennis?
Tom lives in Linz. :: Where? => Where does Tom live?
They go swimming. :: How often? => How often do they go swimming?
My parents work in Vienna. :: Where? => Where do your parents work?
The film starts at seven. :: When? => When does the film start?
Mia likes horses. :: Why? => Why does Mia like horses?
We have lunch at school. :: Where? => Where do you have lunch?
He gets up early. :: What time? => What time does he get up?
She went to London. :: When? => When did she go to London?
They bought a new car. :: Why? => Why did they buy a new car?
Ben can play the guitar. :: What? => What can Ben play?
The children are in the garden. :: Where? => Where are the children?`,
      subj: `Someone called you. :: Who? => Who called you?
You called someone. :: Who? => Who did you call?
Something happened. :: What? => What happened?
You saw something. :: What? => What did you see?
Somebody ate my cake! :: Who? => Who ate my cake?
Lisa met someone. :: Who? => Who did Lisa meet?
Something is in the box. :: What? => What is in the box?
Tom likes someone. :: Who? => Who does Tom like?
Someone knows the answer. :: Who? => Who knows the answer?
Mia wants something. :: What? => What does Mia want?`,
      tags: `It's cold today, [isn't it]?
You like pizza, [don't you]?
Tom can swim, [can't he]?
She isn't at home, [is she]?
They live in Graz, [don't they]?
You didn't see him, [did you]?
We're late, [aren't we]?
Your sister plays the piano, [doesn't she]?
You haven't got a pen, [have you]?
It was a great party, [wasn't it]?
He doesn't eat meat, [does he]?
You went to the cinema, [didn't you]?
Lisa has got a dog, [hasn't she]?
They aren't ready, [are they]?
You will help me, [won't you]?
I'm right, [aren't I]?`
    },
    levels: {
      1: {
        ichkann: ['Du kennst die wichtigsten Fragewörter.', 'Du kannst zu einer Antwort das passende Fragewort finden.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 6, title: 'Which question word?', instr: 'Circle the correct question word.' },
          { type: 'gap', pool: 'word', n: 8, title: 'Question words', instr: 'Fill in the question word. Look at the answer.' }
        ]
      },
      2: {
        ichkann: ['Du kannst Fragen mit Fragewort und do/does/did bilden.', 'Du kannst Fragen mit be und can bilden.'],
        tasks: [
          { type: 'pair', pool: 'ask', n: 6, title: 'Ask questions.', instr: 'Use the question word.' },
          { type: 'gap', pool: 'word', n: 6, title: 'Question words', instr: 'Fill in the question word.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Subjekt- und Objektfragen unterscheiden.', 'Du kannst question tags bilden (…, isn\'t it?).'],
        tasks: [
          { type: 'pair', pool: 'subj', n: 4, inline: true, head: 'Sentence', col: 'Question', title: 'Who called you? – Who did you call?', instr: 'Ask with Who or What. With or without do/did?' },
          { type: 'gap', pool: 'tags', n: 8, bw: 7, title: 'Question tags', instr: 'Add the question tag.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ prepositions
  def({
    id: 'e-prepositions', title: 'Prepositions of place and time', klassen: [1, 2], img: 'MiniHoS_Unterwegs_Rucksack',
    merk: '<b>Ort</b>: in (in), on (auf), under (unter), next to (neben), behind (hinter), in front of (vor), between (zwischen), opposite (gegenüber), above (über). at home, at school, at the station. <b>Zeit</b>: <b>at</b> + Uhrzeit und Feiertage: at 7 o\'clock, at night, at the weekend, at Christmas. <b>on</b> + Tag/Datum: on Monday, on 3rd May, on my birthday. <b>in</b> + Monat, Jahreszeit, Jahr, Tageszeit: in July, in winter, in 2025, in the morning. <b>Verkehrsmittel</b>: by bus, by car, by bike – aber <b>on foot</b>.',
    pools: {
      place: `The cat is sleeping {in|on|under} its basket.
My books are {in|on|under} my bag.
The picture is {on|in|under} the wall.
The bus stop is {next to|between|in} the school.
Lisa is sitting {between|next to|behind} Tom and Ben.
We can't see the garden from the street. It's {behind|in front of|between} the house.
Our car is parked {in front of|behind|between} the house, right next to the street.
The lamp hangs {above|under|between} the table.
The bank is {opposite|in|on} the post office, on the other side of the street.
The dog is hiding {under|on|above} the bed. Only its nose is sticking out.
The milk is {in|on|at} the fridge.
I'm waiting {at|in|on} the bus stop.`,
      time: `My birthday is [in] May.
School starts [at] 7.45.
We have English [on] Monday.
I go skiing [in] winter.
We open our presents [at] Christmas.
I was born [in] 2014.
She gets up early [in] the morning.
The party is [on] Saturday.
I never go out [at] night.
We go to the lake [at] the weekend.
My grandma's birthday is [on] 12th June.
The shop closes [at] six o'clock.
It's very hot [in] July.
We have a test [on] Friday morning.
I do my homework [in] the afternoon.
What do you do [on] your birthday?`,
      how: `I go to school [by] bus.
We usually walk. We go [on] foot.
They went to Italy [by] car.
My dad goes to work [by] train.
She came [by] bike.
We flew to London. We went [by] plane.`,
      mix: `The keys are {on|at|in} the table.
I'll meet you {at|on|in} five o'clock.
We go swimming {in|on|at} summer.
My parents are {at|on|in} work.
The film is {on|in|at} TV tonight.
Is there a park {near|at|on} your house?
We have no school {on|in|at} Sunday.
He lives {in|at|on} London.
My cousin is coming {at|in|on} Easter.
I'm {at|in|on} home all day.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst sagen, wo etwas ist (in, on, under, next to …).', 'Du kennst die wichtigsten Präpositionen des Ortes.'],
        tasks: [
          { type: 'gap', pool: 'place', n: 8, title: 'Where is it?', instr: 'Circle the correct preposition.' },
          { type: 'gap', pool: 'how', n: 4, title: 'How do you get there?', instr: 'by or on?' }
        ]
      },
      2: {
        ichkann: ['Du kannst at, on und in bei Zeitangaben richtig verwenden.', 'Du weißt: by bus, aber on foot.'],
        tasks: [
          { type: 'gap', pool: 'time', n: 10, title: 'at, on or in?', instr: 'Fill in at, on or in.' },
          { type: 'gap', pool: 'how', n: 3, title: 'by or on?', instr: 'Fill in by or on.' }
        ]
      },
      3: {
        ichkann: ['Du verwendest Präpositionen für Ort und Zeit sicher.', 'Du kennst feste Wendungen wie at home, at work, on TV.'],
        tasks: [
          { type: 'gap', pool: 'mix', n: 7, title: 'Choose the preposition.', instr: 'Circle the correct word.' },
          { type: 'gap', pool: 'time', n: 6, title: 'at, on or in?', instr: 'Fill in the gaps.' },
          { type: 'gap', pool: 'place', n: 4, title: 'Where is it?', instr: 'Circle the correct preposition.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ modal verbs
  def({
    id: 'e-modals', title: 'can, must, have to, should', klassen: [1, 2, 3], img: 'MiniHoS_Geste_Stopp',
    merk: 'Modalverben haben <b>kein s</b> bei he/she/it und werden mit der Grundform verbunden: She can swim. <b>can / can\'t</b>: können / nicht können, dürfen: I can ride a bike. Can I go out? <b>must / mustn\'t</b>: müssen / <b>nicht dürfen</b>! You mustn\'t run here. <b>have to / don\'t have to</b>: müssen / <b>nicht müssen</b>: I don\'t have to get up early on Sunday. He has to help at home. <b>should / shouldn\'t</b>: sollte(st) – Ratschlag: You should go to bed. <b>could</b>: konnte, könnte. <b>may / might</b>: vielleicht: It might rain.',
    pools: {
      can: `Birds [can] fly, but penguins [can't].
I [can] swim, but I [can't] dive.
Fish [can't] walk.
My little brother is two. He [can't] read yet.
[Can] you help me, please?
Lisa [can] speak three languages.
Sorry, I [can't] come to your party.
Cats [can] see in the dark.
Tom is ill. He [can't] go to school.
[Can] I open the window? It's hot.`,
      ability: `fish / swim :: ✓ => Fish can swim.
dogs / fly :: ✗ => Dogs can't fly.
my grandma / ride a bike :: ✓ => My grandma can ride a bike.
babies / drive a car :: ✗ => Babies can't drive a car.
I / play the guitar :: ✓ => I can play the guitar.
elephants / jump :: ✗ => Elephants can't jump.
my dog / catch a ball :: ✓ => My dog can catch a ball.
snakes / climb trees :: ✓ => Snakes can climb trees.`,
      must: `You {mustn't|don't have to} use your phone in class. It's not allowed.
It's Sunday. I {don't have to|mustn't} get up early.
You {mustn't|don't have to} play with fire. It's dangerous.
We {don't have to|mustn't} wear a uniform at our school. We can wear what we want.
Drivers {mustn't|don't have to} drive too fast.
You {don't have to|mustn't} help me. I can do it alone.
You {mustn't|don't have to} swim here. There are sharks!
Tomorrow is a holiday. We {don't have to|mustn't} go to school.
Students {mustn't|don't have to} eat in the computer room.
You {don't have to|mustn't} bring food. There's lots to eat at the party.`,
      haveto: `My mum [has to] work on Saturdays.
I [have to] tidy my room every week.
Tom [doesn't have to] wear glasses. His eyes are fine.
We [have to] be at school at 7.45.
[Does] she [have to] take the bus?
They [don't have to] pay. It's free.
My sister [has to] practise the piano every day.
You [don't have to] shout. I can hear you.`,
      should: `I've got a headache. :: rest => You should rest.
I'm always tired. :: go to bed earlier => You should go to bed earlier.
My tooth hurts. :: see a dentist => You should see a dentist.
I eat too many sweets. :: eat more fruit => You should eat more fruit.
I'm cold. :: put on a jacket => You should put on a jacket.
I didn't learn for the test. :: not watch TV now => You shouldn't watch TV now.
My room is a mess. :: tidy it => You should tidy it.
I'm bored. :: read a book => You should read a book.
I always forget my homework. :: write it down => You should write it down.
My phone battery is empty. :: charge it => You should charge it.`,
      mix: `Look at the clouds. It {might|must} rain later.
When I was five, I {could|can} ride a bike.
You {should|must} try this cake. It's delicious!
{May|Must} I come in?
I'm not sure. I {might|must} go to the party.
You {mustn't|don't have to} touch the paintings in the museum.
Ben {can't|mustn't} come. He's ill.
My grandpa {could|can} run very fast when he was young.
You look tired. You {should|might} have a break.
In Austria children {have to|might} go to school for nine years.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst sagen, was du kannst und nicht kannst (can, can\'t).', 'Du kannst um Erlaubnis fragen (Can I …?).'],
        tasks: [
          { type: 'gap', pool: 'can', n: 7, title: 'can or can\'t?', instr: 'Fill in can or can\'t.' },
          { type: 'pair', pool: 'ability', n: 5, title: 'What can they do?', instr: '✓ = can, ✗ = can\'t. Write sentences.' }
        ]
      },
      2: {
        ichkann: ['Du kennst den Unterschied zwischen mustn\'t und don\'t have to.', 'Du kannst have to und has to richtig verwenden.'],
        tasks: [
          { type: 'gap', pool: 'must', n: 6, title: 'mustn\'t or don\'t have to?', instr: 'Circle the correct form. mustn\'t = it\'s not allowed; don\'t have to = it\'s not necessary.' },
          { type: 'gap', pool: 'haveto', n: 6, bw: 10, title: 'have to / has to', instr: 'Fill in have to, has to, don\'t have to or doesn\'t have to.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Ratschläge mit should und shouldn\'t geben.', 'Du verwendest could, may und might richtig.'],
        tasks: [
          { type: 'pair', pool: 'should', n: 5, title: 'Give advice.', instr: 'Use should or shouldn\'t.' },
          { type: 'gap', pool: 'mix', n: 7, title: 'Which modal verb?', instr: 'Circle the correct word.' }
        ]
      }
    }
  });
})();
