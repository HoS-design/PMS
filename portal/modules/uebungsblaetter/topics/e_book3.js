/* Englisch 3. Klasse – Grammatik passend zum Schulbuch (Units 1–14)
   Neue Themen: Wiederholung Present/Past simple, if-clauses Typ 1 + 2 mit unless,
   be allowed to / let / could / be able to, present perfect continuous, Passiv (present + past).
   Außerdem: Zuordnung der Klassen und Reihenfolge wie im Buch. */
(function () {
  const E = { fach: 'englisch', lang: 'en', area: 'e-grammar' };
  const def = (o) => UB.simple(Object.assign({}, E, o));

  // ------------------------------------------------------------------ Unit 1: Present simple / Past simple (revision)
  def({
    id: 'e-revision3', title: 'Present simple and past simple (revision)', klassen: [3], img: 'MiniHoS_Lesen_Buch-Sitzend',
    merk: '<b>Present simple</b>: Gewohnheiten und Tatsachen – every day, usually, often, never. he/she/it + <b>s</b>: she plays. Verneinung und Frage mit <b>do/does</b>: I don\'t play, does he play? <b>Past simple</b>: abgeschlossen in der Vergangenheit – yesterday, last week, ago, in 2020. Regelmäßig + <b>ed</b> (played), unregelmäßige Verben lernen (go – went). Verneinung und Frage mit <b>did</b> + Grundform: I didn\'t go, did you see …? Nach does und did steht immer die <b>Grundform</b>!',
    pools: {
      ps: `Tom [plays:play] football every Saturday.
My mum [works:work] in a hospital.
We [don't watch:not watch] TV in the morning.
[Does your sister like:your sister / like] horses?
The shop [closes:close] at 6 o'clock.
My dad [doesn't drink:not drink] coffee.
She always [goes:go] to school by bus.
[Do you play:you / play] an instrument?
It often [rains:rain] in November.
My brother [watches:watch] too many videos.
Lisa [has:have] two cats and a dog.
They never [eat:eat] meat.`,
      past: `Yesterday we [went:go] to the cinema.
I [didn't see:not see] Tom at the party.
[Did you finish:you / finish] your homework?
Last summer my family [visited:visit] Croatia.
She [bought:buy] a new jacket last week.
We [had:have] pizza for dinner yesterday.
He [didn't come:not come] to school on Monday.
I [wrote:write] a long email to my friend.
[Did they win:they / win] the match last Sunday?
The film [started:start] at 8 o'clock.
I [lost:lose] my keys two days ago.
My grandparents [lived:live] in Vienna in 1990.`,
      choose: `My dad usually {drives|drove} to work, but yesterday he {took|takes} the bus.
We {went|go} to the zoo last weekend.
She {doesn't like|didn't like} spinach. She never eats it.
{Did|Do} you see the football match last night?
I {get up|got up} at 7 o'clock every day.
Two years ago we {moved|move} to Graz.
He {plays|played} the guitar every evening.
What {did you do|do you do} last Saturday?
My sister {visits|visited} our grandma every Sunday.
I {didn't go|don't go} to school yesterday because I was ill.`,
      neg: `She lives in Graz. :: question => Does she live in Graz?
I like fish. :: negative => I don't like fish.
They play tennis. :: question => Do they play tennis?
He walks to school. :: negative => He doesn't walk to school.
We went to the beach. :: negative => We didn't go to the beach.
You saw the film. :: question => Did you see the film?
Tom bought a new bike. :: question => Did Tom buy a new bike?
My cat eats cheese. :: negative => My cat doesn't eat cheese.
She wrote a letter. :: negative => She didn't write a letter.
Your brother plays the drums. :: question => Does your brother play the drums?`,
      err: `She don't like pizza. => She doesn't like pizza.
Did you went to the party? => Did you go to the party?
He play football every day. => He plays football every day.
I didn't saw him. => I didn't see him.
Yesterday I go to the cinema. => Yesterday I went to the cinema.
Does she likes cats? => Does she like cats?
We buyed a new car. => We bought a new car.
My dad doesn't works on Sundays. => My dad doesn't work on Sundays.`,
      write: `What do you usually do at the weekend – and what did you do last weekend? Write 6 sentences. => At the weekend I usually … ; Last weekend I … ; present simple – past simple`
    },
    levels: {
      1: {
        ichkann: ['Du kannst das present simple bilden (he/she/it + s).', 'Du kannst das past simple bilden.'],
        tasks: [
          { type: 'gap', pool: 'ps', n: 6, title: 'Present simple', instr: 'Use the present simple.' },
          { type: 'gap', pool: 'past', n: 6, title: 'Past simple', instr: 'Use the past simple.' }
        ]
      },
      2: {
        ichkann: ['Du erkennst an Signalwörtern, welche Zeit du brauchst.', 'Du kannst Verneinungen und Fragen bilden.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 7, title: 'Present or past?', instr: 'Circle the correct form. Look for signal words!' },
          { type: 'pair', pool: 'neg', n: 5, title: 'Questions and negatives', instr: 'Write the question or the negative sentence.' }
        ]
      },
      3: {
        ichkann: ['Du verwendest beide Zeiten sicher.', 'Du findest typische Fehler.'],
        tasks: [
          { type: 'gap', pool: 'past', n: 5, title: 'Past simple', instr: 'Use the past simple.' },
          { type: 'pair', pool: 'neg', n: 4, title: 'Questions and negatives', instr: 'Write the question or the negative sentence.' },
          { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
        ]
      },
      4: {
        ichkann: ['Du findest Fehler mit do/does/did sicher.', 'Du schreibst über Gewohnheiten und Vergangenes.'],
        tasks: [
          { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the sentences correctly.' },
          { type: 'gap', pool: 'choose', n: 4, title: 'Present or past?', instr: 'Circle the correct form.' },
          { type: 'write', pool: 'write', n: 1, lines: 5, title: 'Your weekend', instr: '' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ Unit 5 + 13: if-clauses type 1 and 2, unless
  def({
    id: 'e-cond12', title: 'If-clauses: type 1, type 2 and unless', klassen: [3], img: 'MiniHoS_Erklaeren_Idee-Gluehbirne',
    merk: '<b>Typ 1</b> (gut möglich): <b>if</b> + present simple, <b>will</b> + Grundform: If it rains, we will stay at home. <b>unless</b> = wenn … nicht: Unless you hurry, you will miss the bus. (= If you don\'t hurry …) <b>Typ 2</b> (nur vorgestellt, unwahrscheinlich): <b>if</b> + past simple, <b>would</b> + Grundform: If I had a dog, I would walk it every day. Bei to be oft <b>were</b>: If I were you, I would … Im if-Satz steht <b>nie will oder would</b>! Steht der if-Satz vorne, kommt ein Beistrich.',
    pools: {
      t1: `If it [rains:rain] tomorrow, we will stay at home.
If you hurry, you [will catch:catch] the bus.
If I [see:see] Tom, I will tell him.
We [will go:go] swimming if it is sunny.
If you [don't eat:not eat] your vegetables, you won't get dessert.
If she studies, she [will pass:pass] the test.
I [won't come:not come] if you invite Max.
If we [miss:miss] the train, we will be late.
Mum [will be:be] angry if we don't tidy up.
If you [break:break] a mirror, you will have bad luck – some people say.`,
      unless: `{Unless|If} you hurry, you will miss the bus.
{If|Unless} it is sunny, we will have a picnic.
You won't get better {unless|if} you stay in bed.
{Unless|If} you tell me the truth, I won't help you.
I'll call you {if|unless} I need help.
We'll be late {unless|if} we leave now.
{If|Unless} you touch the dog, it will bite you.
You can't come in {unless|if} you have a ticket.`,
      untr: `If you don't study, you won't pass the test. :: unless => Unless you study, you won't pass the test.
If we don't leave now, we'll be late. :: unless => Unless we leave now, we'll be late.
If you don't water the plants, they will die. :: unless => Unless you water the plants, they will die.
If it doesn't stop raining, we won't go out. :: unless => Unless it stops raining, we won't go out.
If you don't say sorry, she won't talk to you. :: unless => Unless you say sorry, she won't talk to you.`,
      t2: `If I [had:have] a dog, I would walk it every day.
If I were rich, I [would travel:travel] around the world.
If she [lived:live] in London, she would visit the museums.
What [would you do:you / do] if you found 100 euros?
If I [were:be] you, I would say sorry.
We [would go:go] to the beach if we lived in Spain.
If he [knew:know] the answer, he would tell us.
If I could fly, I [would visit:visit] my friend in Australia.
She [wouldn't be:not be] so tired if she went to bed earlier.
If we [didn't have:not have] school, I would sleep all day.`,
      choose: `If it {is|will be} sunny tomorrow, we'll have a picnic.
If I {won|would win} the lottery, I would buy a horse.
If I {were|am} you, I would take an umbrella.
If she {calls|will call}, I'll tell her the news.
I {would help|will help} you if I had more time.
If you {don't hurry|won't hurry}, you'll be late.
If I {had|have} wings, I would fly to school.
{Unless|If} you practise, you won't get better.`,
      err: `If it will rain, we will stay at home. => If it rains, we will stay at home.
If I would have a lot of money, I would buy a car. => If I had a lot of money, I would buy a car.
If you will help me, I will help you. => If you help me, I will help you.
If I was you, I would go to the doctor. => If I were you, I would go to the doctor.
Unless you don't hurry, you will be late. => Unless you hurry, you will be late.
If he studied, he will pass. => If he studied, he would pass.`,
      write: `What will you do if it is sunny at the weekend? Write 5 sentences. => If it is sunny, I will … ; present simple in the if-clause ; will + infinitive
What would you do if you were the head teacher of your school? Write 5 sentences. => If I were the head teacher, I would … ; past simple in the if-clause ; would + infinitive`
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
        ichkann: ['Du kannst unless richtig verwenden.', 'Du kannst Sätze mit if … not in Sätze mit unless umformen.'],
        tasks: [
          { type: 'gap', pool: 'unless', n: 6, title: 'if or unless?', instr: 'Circle the correct word.' },
          { type: 'pair', pool: 'untr', n: 3, title: 'Use unless.', instr: 'Rewrite the sentences.' },
          { type: 'gap', pool: 't1', n: 4, title: 'If-clauses type 1', instr: 'Use the present simple or will / won\'t.' }
        ]
      },
      3: {
        ichkann: ['Du kannst if-Sätze vom Typ 2 bilden.', 'Du kannst Typ 1 und Typ 2 unterscheiden.'],
        tasks: [
          { type: 'gap', pool: 't2', n: 7, title: 'If-clauses type 2', instr: 'Use the past simple or would / wouldn\'t.' },
          { type: 'gap', pool: 'choose', n: 5, title: 'Type 1 or type 2?', instr: 'Circle the correct form.' }
        ]
      },
      4: {
        ichkann: ['Du findest typische Fehler in if-Sätzen.', 'Du schreibst eigene if-Sätze vom Typ 2.'],
        tasks: [
          { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the sentences correctly.' },
          { type: 'gap', pool: 'choose', n: 5, title: 'Which form?', instr: 'Circle the correct form.' },
          { type: 'write', pool: 'write', filter: x => /would you do/.test(x.q), n: 1, lines: 5, title: 'Imagine …', instr: '' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ Unit 9 + 10: be allowed to, let, could, be able to
  def({
    id: 'e-permission', title: 'Permission and ability: be allowed to, let, could, be able to', klassen: [3], img: 'MiniHoS_Geste_Stopp',
    merk: '<b>Erlaubnis</b>: <b>be allowed to</b> + Grundform: I\'m allowed to stay up late. We aren\'t allowed to use phones. Are you allowed to …? Mit <b>let</b> (lassen): My parents <b>let</b> me go to the party. Mum doesn\'t let me eat sweets. <b>Vergangenheit</b>: <b>could</b> / <b>couldn\'t</b> (konnte – allgemein), <b>was/were able to</b> (hat es in einer bestimmten Situation geschafft), <b>was/were allowed to</b> (durfte). <b>Zukunft</b>: <b>will be able to</b>, <b>will be allowed to</b>. <b>Present perfect</b>: <b>have been able to</b>, <b>have been allowed to</b>. Nach can, could und let steht die Grundform ohne to.',
    pools: {
      allowed: `We [aren't allowed to:not / be allowed to] use our phones in class.
[Are you allowed to:you / be allowed to] stay up late at the weekend?
I [am allowed to:be allowed to] go to the cinema with my friends.
My little sister [isn't allowed to:not / be allowed to] watch horror films.
[Is Tom allowed to:Tom / be allowed to] come to the party?
Students [are allowed to:be allowed to] use a dictionary in the test.
You [aren't allowed to:not / be allowed to] swim in this lake.
My brother [is allowed to:be allowed to] drive Dad's car.
Dogs [aren't allowed to:not / be allowed to] go into the supermarket.`,
      let: `My parents [let:let] me go to the party on Saturday.
Mum doesn't [let:let] me eat sweets before dinner.
Our teacher [lets:let] us listen to music while we work.
Will your dad [let:let] you come to the concert?
The coach didn't [let:let] me play in the match.
Please [let:let] me help you!
My grandma always [lets:let] me stay up late.`,
      lettr: `I'm not allowed to play computer games. :: my mum / let => My mum doesn't let me play computer games.
We are allowed to wear caps at school. :: our teacher / let => Our teacher lets us wear caps at school.
Lisa isn't allowed to have a pet. :: her parents / let => Her parents don't let her have a pet.
I am allowed to use Dad's laptop. :: my dad / let => My dad lets me use his laptop.
Tom isn't allowed to go out after 9. :: his parents / let => His parents don't let him go out after 9.
My parents let me stay at my friend's house. :: be allowed to => I am allowed to stay at my friend's house.`,
      past: `When I was four, I [could:can] already swim.
Yesterday I [was able to:be able to] repair my bike myself.
When we were small, we [weren't allowed to:not / be allowed to] go out alone.
I [couldn't:can / not] sleep last night because of the storm.
The firefighters [were able to:be able to] save all the people.
[Were you allowed to:you / be allowed to] watch TV when you were little?
My grandpa [could:can] speak three languages when he was young.
The test was hard, but I [was able to:be able to] answer all the questions.
Last year we [were allowed to:be allowed to] go on a school trip to Vienna.`,
      fut: `Next year I [will be able to:be able to] speak better English.
I [haven't been able to:not / be able to] sleep well this week.
You [will be allowed to:be allowed to] use a calculator in the test.
[Will you be able to:you / be able to] come to my party?
She [has been able to:be able to] ride a bike since she was five.
When you are 18, you [will be allowed to:be allowed to] vote.
We [haven't been allowed to:not / be allowed to] use the gym this month.
One day robots [will be able to:be able to] do our homework.`,
      choose: `Sorry, I {couldn't|can't} come to your party last Saturday.
When I was little, I {wasn't allowed to|didn't let} go out alone.
My parents {let|allow} me stay at my friend's house.
Next week I {will be able to|can} help you.
I'm sorry, you {aren't allowed to|don't let} take photos here.
After a lot of practice, she {was able to|can} win the race.
{Are|Do} you allowed to wear make-up at school?
He {hasn't been able to|couldn't} play football since he broke his leg.`,
      write: `What are you allowed to do at home – and what aren't you allowed to do? Write 6 sentences. => I'm allowed to … ; I'm not allowed to … ; My parents let me … ; My parents don't let me …
What could you do when you were six – and what will you be able to do when you are 20? Write 6 sentences. => When I was six, I could … ; I couldn't … ; When I'm 20, I will be able to …`
    },
    levels: {
      1: {
        ichkann: ['Du kannst mit be allowed to sagen, was man darf und was nicht.'],
        tasks: [
          { type: 'gap', pool: 'allowed', n: 7, title: 'be allowed to', instr: 'Use the correct form of be allowed to.' },
          { type: 'write', pool: 'write', filter: x => /allowed/.test(x.q), n: 1, lines: 5, title: 'At home', instr: '' }
        ]
      },
      2: {
        ichkann: ['Du kannst let richtig verwenden.', 'Du kannst Sätze mit be allowed to in Sätze mit let umformen.'],
        tasks: [
          { type: 'gap', pool: 'let', n: 5, title: 'let', instr: 'Use let or lets.' },
          { type: 'pair', pool: 'lettr', n: 4, title: 'Rewrite the sentences.', instr: 'Use the words in brackets.' }
        ]
      },
      3: {
        ichkann: ['Du kannst über Können und Dürfen in der Vergangenheit sprechen (could, was able to, was allowed to).', 'Du kannst die Formen in der Zukunft und im present perfect bilden.'],
        tasks: [
          { type: 'gap', pool: 'past', n: 6, title: 'In the past', instr: 'Use could, was / were able to or was / were allowed to.' },
          { type: 'gap', pool: 'fut', n: 5, title: 'Future and present perfect', instr: 'Use will be able to / will be allowed to or have been able to / allowed to.' }
        ]
      },
      4: {
        ichkann: ['Du wählst sicher die richtige Form.', 'Du schreibst über früher und später.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 6, title: 'Which form?', instr: 'Circle the correct form.' },
          { type: 'pair', pool: 'lettr', n: 3, title: 'Rewrite the sentences.', instr: 'Use the words in brackets.' },
          { type: 'write', pool: 'write', filter: x => /could you do/.test(x.q), n: 1, lines: 5, title: 'Then and later', instr: '' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ Unit 11: present perfect continuous
  def({
    id: 'e-ppcont', title: 'Present perfect continuous', klassen: [3, 4], img: 'MiniHoS_Planen_Uhr',
    merk: '<b>Present perfect continuous</b>: <b>have/has been + -ing</b>. Eine Handlung hat in der Vergangenheit begonnen und <b>dauert noch an</b> (oder ist gerade vorbei, man sieht noch die Folgen): I have been waiting for an hour. Your eyes are red – have you been crying? <b>for</b> + Zeitdauer (for two hours), <b>since</b> + Zeitpunkt (since 9 o\'clock). Frage: <b>How long</b> have you been learning English? Geht es um ein <b>Ergebnis</b> oder um <b>wie viele</b>, nimmt man das present perfect: I have read three books.',
    pools: {
      form: `I [have been waiting:wait] for you for an hour!
She [has been learning:learn] English since she was six.
We [have been living:live] in Graz for five years.
It [has been raining:rain] all day.
How long [have you been playing:you / play] the piano?
My brother [has been sleeping:sleep] since lunch.
They [have been working:work] on the project for three weeks.
[Has he been waiting:he / wait] long?
I [haven't been feeling:not feel] well for a few days.
The children [have been watching:watch] TV all afternoon.`,
      howlong: `Sarah / learn English / 3 years :: How long …? => How long has Sarah been learning English? – She has been learning English for three years.
Tom / play football / 2015 :: How long …? => How long has Tom been playing football? – He has been playing football since 2015.
you / wait / 20 minutes :: How long …? => How long have you been waiting? – I have been waiting for 20 minutes.
your parents / live here / 2010 :: How long …? => How long have your parents been living here? – They have been living here since 2010.
Mia / read this book / Monday :: How long …? => How long has Mia been reading this book? – She has been reading it since Monday.`,
      why: `Your eyes are red. :: you / cry? => Have you been crying?
Tom is out of breath. :: he / run => He has been running.
The street is wet. :: it / rain => It has been raining.
You look tired. :: you / work / all day? => Have you been working all day?
Your hands are dirty. :: you / play / in the garden? => Have you been playing in the garden?
Lisa's face is red. :: she / sit / in the sun => She has been sitting in the sun.`,
      choose: `I {have been reading|have read} this book since Monday, but I haven't finished it yet.
I {have read|have been reading} three books this month.
She {has been playing|has played} tennis for two hours. She's very tired.
We {have visited|have been visiting} London twice.
How long {have you been waiting|have you waited} for the bus?
He {has written|has been writing} five emails today.
It {has been snowing|has snowed} since early this morning.
How many cakes {have you eaten|have you been eating}?`,
      forsince: `She has been playing tennis [for] five years.
I have been waiting [since] 10 o'clock.
We have been living here [for] a long time.
He has been working [since] Monday.
They have been talking [for] two hours.
It has been raining [since] yesterday.
I have been learning French [since] 2024.
My dad has been cooking [for] an hour.`,
      err: `I am waiting here since 10 o'clock. => I have been waiting here since 10 o'clock.
She has been learning English for 2020. => She has been learning English since 2020.
How long are you living in Graz? => How long have you been living in Graz?
He have been playing all day. => He has been playing all day.
We have been knowing him for years. => We have known him for years.
I have been eating three apples today. => I have eaten three apples today.`,
      write: `What have you been doing lately? Write 5 sentences about things you started in the past and are still doing. => I have been learning … for … ; I have been … since … ; have / has been + -ing`
    },
    levels: {
      1: {
        ichkann: ['Du kannst das present perfect continuous bilden (have/has been + -ing).', 'Du kannst for und since richtig verwenden.'],
        tasks: [
          { type: 'gap', pool: 'form', n: 7, title: 'have / has been + -ing', instr: 'Use the present perfect continuous.' },
          { type: 'gap', pool: 'forsince', n: 5, wordbox: true, title: 'for or since?', instr: 'for + period of time, since + point in time.' }
        ]
      },
      2: {
        ichkann: ['Du kannst mit How long …? fragen und antworten.', 'Du kannst erklären, was jemand gerade gemacht hat.'],
        tasks: [
          { type: 'pair', pool: 'howlong', n: 3, title: 'How long …?', instr: 'Write the question and the answer.' },
          { type: 'pair', pool: 'why', n: 4, title: 'What has happened?', instr: 'Use the present perfect continuous.' }
        ]
      },
      3: {
        ichkann: ['Du unterscheidest present perfect und present perfect continuous.'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 6, title: 'Simple or continuous?', instr: 'Circle the correct form.' },
          { type: 'gap', pool: 'form', n: 5, title: 'have / has been + -ing', instr: 'Use the present perfect continuous.' }
        ]
      },
      4: {
        ichkann: ['Du findest typische Fehler.', 'Du schreibst über Dinge, die schon länger andauern.'],
        tasks: [
          { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the sentences correctly.' },
          { type: 'gap', pool: 'choose', n: 4, title: 'Simple or continuous?', instr: 'Circle the correct form.' },
          { type: 'write', pool: 'write', n: 1, lines: 5, title: 'Your turn', instr: '' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ Unit 12: passive (present and past) / by
  def({
    id: 'e-passive3', title: 'The passive: present and past', klassen: [3], img: 'MiniHoS_Erklaeren_Diagramm',
    merk: 'Im <b>Passiv</b> ist wichtig, <b>was passiert</b> – nicht, wer es tut. <b>Present simple passive</b>: <b>am/is/are + 3. Form</b>: Cheese is made from milk. <b>Past simple passive</b>: <b>was/were + 3. Form</b>: The bridge was built in 1900. Wer es tut, steht mit <b>by</b>: Romeo and Juliet was written by Shakespeare. Verneinung: isn\'t / wasn\'t made. Frage: Is it made …? Was it built …? Aus dem Objekt des Aktivsatzes wird das Subjekt des Passivsatzes.',
    pools: {
      present: `Cheese [is made:make] from milk.
English [is spoken:speak] in many countries.
These cars [are produced:produce] in Germany.
The classroom [is cleaned:clean] every evening.
Coffee [is grown:grow] in Brazil.
The letters [are delivered:deliver] at 9 o'clock.
[Is breakfast served:breakfast / serve] at the hotel?
Our homework [isn't checked:not check] every day.
Millions of photos [are taken:take] every day.
Rice [is eaten:eat] all over the world.`,
      past: `The telephone [was invented:invent] by Alexander Graham Bell.
The Eiffel Tower [was built:build] in 1889.
My bike [was stolen:steal] last night.
The pyramids [were built:build] thousands of years ago.
The window [was broken:break] by a football.
These photos [were taken:take] by my grandpa.
[Was the thief caught:the thief / catch] by the police?
The match [wasn't cancelled:not cancel] because of the rain.
The first Harry Potter book [was written:write] by J. K. Rowling.
Penicillin [was discovered:discover] by Alexander Fleming.`,
      active: `Shakespeare wrote Romeo and Juliet. => Romeo and Juliet was written by Shakespeare.
Someone cleans the room every day. => The room is cleaned every day.
Thomas Edison invented the light bulb. => The light bulb was invented by Thomas Edison.
A dog bit the postman. => The postman was bitten by a dog.
They make these shoes in Italy. => These shoes are made in Italy.
The storm destroyed many houses. => Many houses were destroyed by the storm.
Millions of people visit Vienna every year. => Vienna is visited by millions of people every year.
Mozart composed this piece. => This piece was composed by Mozart.
The police found the stolen car. => The stolen car was found by the police.
People speak German in Austria. => German is spoken in Austria.`,
      choose: `The windows {are cleaned|clean} every week.
This bridge {was built|built} in 1950.
Spanish {is spoken|speaks} in Mexico.
The cake {was eaten|ate} by the children.
Our school {was opened|is opened} in 1975.
Many tourists {visit|are visited} Salzburg every year.
The money {was found|found} by a little boy.
Smartphones {are used|used} by millions of people every day.`,
      err: `The house was build in 1920. => The house was built in 1920.
English is speak in Canada. => English is spoken in Canada.
The cars is washed every week. => The cars are washed every week.
The book was written from Mark Twain. => The book was written by Mark Twain.
The cake were eaten by the kids. => The cake was eaten by the kids.
My phone was stealed. => My phone was stolen.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst das present simple passive bilden (am/is/are + 3. Form).'],
        tasks: [
          { type: 'gap', pool: 'present', n: 8, title: 'Present simple passive', instr: 'Use am / is / are + past participle.' }
        ]
      },
      2: {
        ichkann: ['Du kannst das past simple passive bilden (was/were + 3. Form).', 'Du erkennst, ob ein Satz im Aktiv oder Passiv stehen muss.'],
        tasks: [
          { type: 'gap', pool: 'past', n: 7, title: 'Past simple passive', instr: 'Use was / were + past participle.' },
          { type: 'gap', pool: 'choose', n: 4, title: 'Active or passive?', instr: 'Circle the correct form.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Aktivsätze ins Passiv umformen und by verwenden.'],
        tasks: [
          { type: 'pair', pool: 'active', n: 6, title: 'Active → passive', instr: 'Write the sentences in the passive. Use by if it is important who did it.' },
          { type: 'gap', pool: 'choose', n: 4, title: 'Active or passive?', instr: 'Circle the correct form.' }
        ]
      },
      4: {
        ichkann: ['Du findest typische Fehler im Passiv.', 'Du verwendest present und past passive sicher.'],
        tasks: [
          { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the sentences correctly.' },
          { type: 'pair', pool: 'active', n: 4, title: 'Active → passive', instr: 'Write the sentences in the passive.' },
          { type: 'gap', pool: 'past', n: 3, title: 'Past simple passive', instr: 'Use was / were + past participle.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ Unit 4: much / nearly with comparatives; Unit 3: time linkers
  UB.extendTopic('e-comparison', { more: {
    much: `A plane is [much faster:fast] than a train.
My new phone is [much better:good] than my old one.
Today it is [much colder:cold] than yesterday.
This test was [much easier:easy] than the last one.
A whale is [much bigger:big] than a shark.
Maths is [much more interesting:interesting] than I thought.
The second film was [much worse:bad] than the first one.
Living in the city is [much more expensive:expensive] than living in a village.`,
    nearly: `Ben is 1.48 m. Tom is 1.50 m. :: nearly / tall => Ben is nearly as tall as Tom.
My bike cost 300 €. Your bike cost 310 €. :: nearly / expensive => My bike was nearly as expensive as yours.
Lisa ran 100 m in 15 seconds, Mia in 15.2 seconds. :: nearly / fast => Mia was nearly as fast as Lisa.
Graz has 300 000 people. Vienna has 2 000 000. :: not nearly / big => Graz is not nearly as big as Vienna.
Tim is 12. His cousin is 12 too. :: as … as / old => Tim is as old as his cousin.
A cat weighs 4 kg. A dog weighs 30 kg. :: not nearly / heavy => A cat is not nearly as heavy as a dog.`
  } });
  UB.extendTopic('e-linking', { more: {
    time: `[First], open the box carefully.
We went to the park. [After that], we had an ice cream.
I was reading [while] my sister was watching TV.
[When] I arrived at the station, the train had left.
Brush your teeth [before] you go to bed.
[As soon as] I get home, I'll call you.
We waited for hours. [Finally], the bus came.
[After] the film, we went home.
It started to rain [while] we were walking home.
[Then] we put the cake in the oven.`
  } });

  // ------------------------------------------------------------------ Aufgaben für die neuen Pools
  const find = (id) => UB.topics.find(t => t.id === id);
  const comp = find('e-comparison');
  if (comp) {
    comp.levels[3] = {
      ichkann: ['Du kannst Vergleiche mit much verstärken (much bigger).', 'Du kannst mit as … as, not as … as und nearly as … as vergleichen.'],
      tasks: [
        { type: 'gap', pool: 'much', n: 5, title: 'much + comparative', instr: 'Use much + the comparative.' },
        { type: 'pair', pool: 'nearly', n: 3, title: 'as … as, nearly as … as', instr: 'Write a sentence. Use the words in brackets.' },
        { type: 'gap', pool: 'choose', n: 4, title: 'Circle the correct form.', instr: 'Which one is right?' }
      ]
    };
    comp.merk = comp.merk.replace('This film is <b>not as</b> good <b>as</b> the book.', 'This film is <b>not as</b> good <b>as</b> the book. <b>nearly as … as</b> = fast so … wie. Verstärken mit <b>much</b>: much bigger, much more interesting.');
  }
  const link = find('e-linking');
  if (link) {
    link.levels[2] = {
      ichkann: ['Du kannst Zeitwörter (first, then, after that, when, while …) verwenden.', 'Du kannst Sätze mit when, if, although verbinden.'],
      tasks: [
        { type: 'gap', pool: 'time', n: 6, wordbox: true, title: 'Time linkers', instr: 'Use the words from the box.' },
        { type: 'gap', pool: 'mid', n: 5, wordbox: true, title: 'when, if, although …', instr: 'Use the words from the box.' }
      ]
    };
  }

  // ------------------------------------------------------------------ Klassen wie im Buch
  const set = (id, k) => { const t = find(id); if (t) t.klassen = k; };
  set('e-comparison', [2, 3]);
  set('e-conditionals', [4]);
  set('e-pronouns', [1, 2]);
  set('e-modals', [1, 2]);
  set('e-quantity', [2]);
  set('e-adverbs', [2]);
  set('e-gerund', [4]);

  // Reihenfolge in der Themenliste der 3. Klasse wie im Buch (Unit 1–14)
  UB.ORDER = UB.ORDER || {};
  UB.ORDER['englisch-3'] = ['e-revision3', 'e-irregular', 'e-pastprogressive', 'e-linking', 'e-comparison', 'e-cond12', 'e-relative', 'e-presentperfect',
    'e-permission', 'e-ppcont', 'e-passive3', 'e-future', 'e-questions'];
})();
