/* Englisch – Vergangenheit und Zukunft (2.–4. Klasse) */
(function () {
  const E = { fach: 'englisch', lang: 'en', area: 'e-grammar' };
  const def = (o) => UB.simple(Object.assign({}, E, o));

  // Unregelmäßige Verben: Grundform – past simple – past participle – Deutsch
  const IRR = `be|was/were|been|sein
begin|began|begun|beginnen
break|broke|broken|brechen
bring|brought|brought|bringen
build|built|built|bauen
buy|bought|bought|kaufen
catch|caught|caught|fangen
choose|chose|chosen|wählen
come|came|come|kommen
cut|cut|cut|schneiden
do|did|done|tun, machen
drink|drank|drunk|trinken
drive|drove|driven|fahren
eat|ate|eaten|essen
fall|fell|fallen|fallen
feel|felt|felt|fühlen
find|found|found|finden
fly|flew|flown|fliegen
forget|forgot|forgotten|vergessen
get|got|got|bekommen
give|gave|given|geben
go|went|gone|gehen
have|had|had|haben
hear|heard|heard|hören
know|knew|known|wissen, kennen
leave|left|left|verlassen
lose|lost|lost|verlieren
make|made|made|machen
meet|met|met|treffen
pay|paid|paid|bezahlen
put|put|put|legen, stellen
read|read|read|lesen
ride|rode|ridden|reiten, fahren
run|ran|run|laufen
say|said|said|sagen
see|saw|seen|sehen
sell|sold|sold|verkaufen
send|sent|sent|schicken
sing|sang|sung|singen
sit|sat|sat|sitzen
sleep|slept|slept|schlafen
speak|spoke|spoken|sprechen
spend|spent|spent|ausgeben, verbringen
swim|swam|swum|schwimmen
take|took|taken|nehmen
teach|taught|taught|unterrichten
tell|told|told|erzählen
think|thought|thought|denken
throw|threw|thrown|werfen
understand|understood|understood|verstehen
wear|wore|worn|tragen (Kleidung)
win|won|won|gewinnen
write|wrote|written|schreiben`.split('\n').map(l => l.split('|'));
  const irrPair = (col) => IRR.map(v => v[0] + ' :: ' + v[3] + ' => ' + v[col]).join('\n');

  // ------------------------------------------------------------------ irregular verbs
  def({
    id: 'e-irregular', title: 'Irregular verbs', klassen: [2, 3], img: 'MiniHoS_Schwarz_Notizblock',
    merk: '<b>Unregelmäßige Verben</b> muss man lernen – am besten in drei Formen: Grundform – past simple – past participle: go – went – gone, see – saw – seen, buy – bought – bought. Das <b>past simple</b> brauchst du für die Vergangenheit (Yesterday I <b>went</b> …), das <b>past participle</b> (3. Form) für das present perfect (I have <b>gone</b> …) und das Passiv (It was <b>built</b> …). Tipp: Lerne Gruppen: buy – bought, bring – brought, think – thought, catch – caught, teach – taught.',
    pools: {
      past: irrPair(1),
      part: irrPair(2),
      gap: `Yesterday I [went:go] to the cinema.
We [saw:see] a great film last week.
Tom [bought:buy] a new bike on Saturday.
I [ate:eat] too much at the party.
She [wrote:write] a long letter to her grandma.
They [took:take] the bus to the city.
My dad [made:make] a cake for my birthday.
I [met:meet] Lisa at the station.
We [swam:swim] in the lake last summer.
He [forgot:forget] his homework again.
The children [sang:sing] a song.
I [found:find] ten euros in the street!
Our team [won:win] the match.
She [told:tell] me a funny story.
I [slept:sleep] for ten hours last night.
My grandparents [gave:give] me a book.`
    },
    levels: {
      1: {
        ichkann: ['Du kennst das past simple von wichtigen unregelmäßigen Verben.', 'Du kannst unregelmäßige Verben im Satz verwenden.'],
        tasks: [
          { type: 'pair', pool: 'past', n: 10, inline: true, head: 'Verb (Deutsch)', col: 'Past simple', title: 'What\'s the past simple?', instr: 'Write the past form.' },
          { type: 'gap', pool: 'gap', n: 7, title: 'Yesterday …', instr: 'Fill in the past simple of the verb in brackets.' }
        ]
      },
      2: {
        ichkann: ['Du kennst die drei Formen unregelmäßiger Verben.', 'Du kannst past simple und past participle unterscheiden.'],
        tasks: [
          { type: 'fn', fn: (rng) => {
            const vs = rng.fresh(IRR, 10, v => v[0]);
            const show = vs.map((v, i) => i % 3);
            const cell = (v, k, i, sol) => k === show[i] ? '<b>' + UB.esc(v[k]) + '</b>' : (sol ? UB.sol(UB.esc(v[k])) : '');
            const mk = (sol) => UB.table(['Infinitive', 'Past simple', 'Past participle', 'Deutsch'], vs.map((v, i) => [cell(v, 0, i, sol), cell(v, 1, i, sol), cell(v, 2, i, sol), UB.esc(v[3])]), 'even');
            return { title: 'Complete the table.', instr: 'Write the missing forms.', body: mk(false), sol: mk(true) };
          } },
          { type: 'pair', pool: 'part', n: 6, inline: true, head: 'Verb (Deutsch)', col: 'Past participle', title: 'The third form', instr: 'Write the past participle.' }
        ]
      },
      3: {
        ichkann: ['Du beherrschst die drei Formen der unregelmäßigen Verben.', 'Du kannst sie in Sätzen sicher verwenden.'],
        tasks: [
          { type: 'fn', fn: (rng) => {
            const vs = rng.fresh(IRR, 12, v => v[0]);
            const mk = (sol) => UB.table(['Infinitive', 'Past simple', 'Past participle', 'Deutsch'], vs.map(v => ['<b>' + UB.esc(v[0]) + '</b>', sol ? UB.sol(UB.esc(v[1])) : '', sol ? UB.sol(UB.esc(v[2])) : '', UB.esc(v[3])]), 'even');
            return { title: 'Three forms', instr: 'Write the past simple and the past participle.', body: mk(false), sol: mk(true) };
          } },
          { type: 'gap', pool: 'gap', n: 5, title: 'Yesterday …', instr: 'Fill in the past simple.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ past simple
  def({
    id: 'e-pastsimple', title: 'Past simple', klassen: [2], img: 'MiniHoS_Lesen_Buch-Burg',
    merk: '<b>Past simple</b> für abgeschlossene Handlungen in der Vergangenheit, oft mit Zeitangabe: yesterday, last week, two days ago, in 2020. <b>to be</b>: I/he/she/it <b>was</b>, we/you/they <b>were</b>. <b>Regelmäßige Verben</b> + -ed: play – played, live – lived, stop – stopped, study – studied. <b>Unregelmäßige Verben</b> lernen: go – went, see – saw. <b>Verneinung</b> mit <b>didn\'t</b> + Grundform: I didn\'t go. <b>Frage</b> mit <b>Did</b> + Grundform: Did you see it? – Yes, I did. / No, I didn\'t. Nach did steht nie die past-Form!',
    pools: {
      waswere: `I [was] at home yesterday.
We [were] in Italy last summer.
The film [was] very funny.
Tom and Ben [were] late for school.
It [was] cold last night.
My parents [were] at work.
[Were] you at the party? – Yes, I [was].
The shops [were] closed on Sunday.
She [was] eleven last year.
You [were] right!
[Was] the test difficult? – No, it [wasn't].
There [were] lots of people at the concert.`,
      ed: `play => played
live => lived
stop => stopped
study => studied
watch => watched
love => loved
plan => planned
cry => cried
help => helped
dance => danced
carry => carried
travel => travelled
open => opened
try => tried
shop => shopped
want => wanted`,
      gap: `Last week we [visited:visit] our grandparents.
I [watched:watch] a film yesterday evening.
She [went:go] to London two years ago.
They [played:play] football after school.
We [had:have] pizza for dinner.
My brother [stopped:stop] the car.
The train [arrived:arrive] late.
I [saw:see] a fox in our garden.
Tom [studied:study] for the test all weekend.
We [bought:buy] new shoes on Saturday.
Lisa [came:come] home at six.
It [rained:rain] all day yesterday.
I [lost:lose] my keys last week.
My parents [got:get] married in 2010.`,
      neg: `I went to school yesterday. :: not => I didn't go to school yesterday.
She played tennis. :: not => She didn't play tennis.
We saw the film. :: not => We didn't see the film.
Tom bought a phone. :: not => Tom didn't buy a phone.
They had breakfast. :: not => They didn't have breakfast.
It snowed last winter. :: not => It didn't snow last winter.
I did my homework. :: not => I didn't do my homework.
My dad made dinner. :: not => My dad didn't make dinner.
Lisa wrote an email. :: not => Lisa didn't write an email.
We won the match. :: not => We didn't win the match.`,
      quest: `you / see the film => Did you see the film?
she / go to the party => Did she go to the party?
they / win the game => Did they win the game?
Tom / call you => Did Tom call you?
you / have a nice weekend => Did you have a nice weekend?
your parents / buy a new car => Did your parents buy a new car?
it / rain yesterday => Did it rain yesterday?
Lisa / pass the test => Did Lisa pass the test?
you / sleep well => Did you sleep well?
the children / like the cake => Did the children like the cake?`,
      wh: `Where [did] you [go] last summer? – To Spain.
What [did] you [eat] for lunch? – Spaghetti.
When [did] the film [start]? – At eight.
Who [did] you [meet] in town? – Lisa.
Why [did] Tom [leave] early? – He was tired.
How [did] you [get] home? – By bus.
What time [did] you [get up] today? – At seven.
Where [did] your parents [meet]? – At university.`,
      error: `Did you went to school? => Did you go to school?
I didn't saw him. => I didn't see him.
She goed home. => She went home.
We was at the cinema. => We were at the cinema.
He didn't played football. => He didn't play football.
They buyed a new car. => They bought a new car.
Did she called you? => Did she call you?
I stoped the music. => I stopped the music.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst was und were richtig verwenden.', 'Du kannst das past simple regelmäßiger Verben (-ed) bilden.'],
        tasks: [
          { type: 'gap', pool: 'waswere', n: 7, title: 'was or were?', instr: 'Fill in was, were or wasn\'t / weren\'t.' },
          { type: 'pair', pool: 'ed', n: 8, inline: true, head: 'Verb', col: 'Past simple', title: 'Regular verbs', instr: 'Write the -ed form. Careful with the spelling!' }
        ]
      },
      2: {
        ichkann: ['Du kannst Sätze im past simple bilden – auch mit unregelmäßigen Verben.', 'Du kannst Sätze im past simple mit didn\'t verneinen.'],
        tasks: [
          { type: 'gap', pool: 'gap', n: 7, title: 'What happened?', instr: 'Fill in the past simple.' },
          { type: 'pair', pool: 'neg', n: 5, inline: true, head: 'Sentence', col: 'Negative sentence', title: 'Make the sentences negative.', instr: 'Use didn\'t + infinitive.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Fragen im past simple mit did stellen.', 'Du findest Fehler im past simple und verbesserst sie.'],
        tasks: [
          { type: 'pair', pool: 'quest', n: 4, inline: true, head: 'Words', col: 'Question', title: 'Ask questions.', instr: 'Use Did … ?' },
          { type: 'gap', pool: 'wh', n: 4, title: 'Questions with question words', instr: 'Fill in did and the verb.' },
          { type: 'error', pool: 'error', n: 4, inline: true, head: 'Wrong', col: 'Right', title: 'Find the mistakes.', instr: 'Write the sentences correctly.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ past progressive, used to
  def({
    id: 'e-pastprogressive', title: 'Past progressive and used to', klassen: [2, 3], img: 'MiniHoS_Schwarz_Lesen-Buch',
    merk: '<b>Past progressive</b>: was/were + -ing. Für eine Handlung, die zu einem Zeitpunkt in der Vergangenheit <b>gerade im Gange</b> war: At 8 o\'clock I <b>was watching</b> TV. Oft mit dem past simple: Eine laufende Handlung wird <b>unterbrochen</b>: I <b>was having</b> a shower <b>when</b> the phone <b>rang</b>. <b>while</b> = während (zwei Handlungen gleichzeitig): While I was cooking, my sister was reading. <b>used to</b> + Grundform: Gewohnheit früher, die es heute nicht mehr gibt: I <b>used to</b> play with dolls. Did you use to …? I didn\'t use to …',
    pools: {
      form: `At 7 o'clock I [was having:have] breakfast.
Yesterday at 5 we [were playing:play] football.
When I came home, my mum [was cooking:cook].
The sun [was shining:shine] all day.
What [were you doing:you / do] at 9 last night?
The children [were sleeping:sleep] when the storm started.
Tom [was talking:talk] on the phone.
I [wasn't listening:not listen], sorry.
They [were waiting:wait] at the bus stop.
Lisa [was reading:read] in her room.`,
      when: `I [was walking:walk] home when it [started:start] to rain.
We [were watching:watch] TV when the lights [went:go] out.
When the teacher [came:come] in, the students [were talking:talk].
She [was riding:ride] her bike when she [fell:fall] off.
While I [was doing:do] my homework, my brother [was playing:play] games.
The phone [rang:ring] while I [was having:have] a shower.
When I [saw:see] Tom, he [was waiting:wait] for the bus.
While we [were having:have] dinner, the cat [jumped:jump] on the table.`,
      choose: `I {was sleeping|slept} when the alarm went off.
When I came home, my dad {was cooking|cooked} dinner.
Yesterday I {went|was going} to the cinema with Lisa.
While she {was reading|read}, I was writing emails.
He {broke|was breaking} his arm when he fell off his bike.
At 10 o'clock last night I {was watching|watched} a film.
We {met|were meeting} Tom in town and had an ice cream.
It {was snowing|snowed} when we left the house.`,
      usedto: `When I was little, I [used to] play with toy cars.
My grandpa [used to] work on a farm.
We [used to] live in Linz, but now we live in Graz.
[Did] you [use to] have long hair?
I [didn't use to] like vegetables, but now I love them.
There [used to] be a cinema here.
My mum [used to] ride a motorbike.
Tom [didn't use to] be so tall!`,
      past: `I played with dolls. :: not any more => I used to play with dolls.
My dad had a beard. :: not any more => My dad used to have a beard.
We lived in a small flat. :: not any more => We used to live in a small flat.
I was afraid of dogs. :: not any more => I used to be afraid of dogs.
Lisa went to ballet lessons. :: not any more => Lisa used to go to ballet lessons.
My parents didn't have a car. :: now: they have one => My parents didn't use to have a car.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst das past progressive (was/were + -ing) bilden.', 'Du kannst sagen, was du zu einem Zeitpunkt in der Vergangenheit gerade getan hast.'],
        tasks: [
          { type: 'gap', pool: 'form', n: 8, title: 'What were they doing?', instr: 'Use was / were + -ing.' },
          { type: 'gap', pool: 'choose', n: 4, title: 'Simple or progressive?', instr: 'Circle the correct form.' }
        ]
      },
      2: {
        ichkann: ['Du kannst past progressive und past simple in einem Satz verbinden (when, while).', 'Du erkennst, welche Handlung unterbrochen wird.'],
        tasks: [
          { type: 'gap', pool: 'when', n: 6, title: 'when and while', instr: 'Use the past progressive or the past simple.' },
          { type: 'gap', pool: 'choose', n: 6, title: 'Simple or progressive?', instr: 'Circle the correct form.' }
        ]
      },
      3: {
        ichkann: ['Du kannst mit used to über frühere Gewohnheiten sprechen.', 'Du verwendest past simple und past progressive sicher.'],
        tasks: [
          { type: 'gap', pool: 'usedto', n: 6, title: 'used to', instr: 'Fill in used to, didn\'t use to or did … use to.' },
          { type: 'pair', pool: 'past', n: 3, title: 'Things have changed.', instr: 'Write sentences with used to / didn\'t use to.' },
          { type: 'gap', pool: 'when', n: 4, title: 'when and while', instr: 'Use the past progressive or the past simple.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ future
  def({
    id: 'e-future', title: 'Future: going to and will', klassen: [2, 3], img: 'MiniHoS_Forschen_Fernrohr',
    merk: '<b>going to</b> + Grundform: <b>Pläne und Absichten</b> (I\'m going to visit my aunt next week) und wenn man etwas schon <b>sieht</b>: Look at the clouds! It\'s going to rain. <b>will</b> (\'ll) + Grundform: <b>Vermutungen</b> (I think it will be sunny), <b>spontane Entscheidungen</b> (The phone is ringing. – I\'ll get it!), Angebote und Versprechen (I\'ll help you). Verneinung: won\'t. <b>Present progressive</b> für fest <b>vereinbarte Termine</b>: I\'m meeting Tom at 3 tomorrow. Signalwörter: tomorrow, next week, soon, in 2030.',
    pools: {
      goingto: `I [am going to visit:visit] my grandma next weekend.
We [are going to watch:watch] a film tonight.
Tom [is going to buy:buy] a new bike.
They [are going to play:play] tennis tomorrow.
Look at the sky! It [is going to rain:rain].
My sister [is going to study:study] in Vienna.
I [am not going to eat:not eat] any sweets this week.
Be careful! You [are going to fall:fall]!
What [are you going to do:you / do] in the holidays?
We [are going to have:have] a party on Saturday.`,
      will: `I think it [will be:be] sunny tomorrow.
Don't worry, I [will help:help] you.
In 2050 people [will live:live] on Mars.
I'm sure you [will pass:pass] the test.
The phone is ringing. – I ['ll get:get] it!
I'm tired. I think I ['ll go:go] to bed.
She [won't come:not come] to the party. She's ill.
Maybe it [will snow:snow] at Christmas.
I promise I [won't tell:not tell] anybody.
Robots [will do:do] our homework in the future.`,
      choose: `I've decided. I {'m going to|'ll} learn Spanish next year.
It's cold in here. – I {'ll|'m going to} close the window.
Look at that car! It {'s going to|'ll} crash!
I think Austria {will|is going to} win the match. (a guess)
We've bought the tickets. We {'re going to|'ll} see the concert on Friday.
I'm thirsty. – Wait, I {'ll|'m going to} get you some water.
In the future, cars {will|are going to} fly. (a guess)
My parents have booked a hotel. They {'re going to|'ll} stay in Rome.
I don't understand this. – Don't worry, I {'ll|'m going to} explain it.
She's studying hard. She {'s going to|'ll} be a doctor.`,
      arr: `I [am meeting:meet] Tom at the café at 3 tomorrow.
We [are flying:fly] to London on Monday. We've got the tickets.
My aunt [is coming:come] for dinner tonight.
What [are you doing:you / do] on Saturday?
The bus [leaves:leave] at 7.30 tomorrow morning.
I [am seeing:see] the dentist on Friday.
They [are getting:get] married in June.
The film [starts:start] at 8 p.m.`,
      plans: `What are you going to do next weekend? Write 5 sentences with going to. => I'm going to … ; We're going to … ; I'm not going to …
What will the world be like in 2070? Write 5 predictions with will / won't. => People will … ; Cars won't … ; I think … ; Maybe …
Write about your plans for the summer holidays (going to) and one guess about the weather (will). => going to for plans ; will for guesses ; time words`
    },
    levels: {
      1: {
        ichkann: ['Du kannst mit going to über Pläne sprechen.', 'Du kannst sagen, was gleich passieren wird (Look! It\'s going to …).'],
        tasks: [
          { type: 'gap', pool: 'goingto', n: 9, title: 'going to', instr: 'Use am / is / are going to + the verb.' },
          { type: 'write', pool: 'plans', filter: x => /going to\. =>/.test(x.raw), n: 1, lines: 6, title: 'Your plans', instr: '' }
        ]
      },
      2: {
        ichkann: ['Du kannst mit will Vermutungen, Versprechen und spontane Entscheidungen ausdrücken.', 'Du kannst will und going to unterscheiden.'],
        tasks: [
          { type: 'gap', pool: 'will', n: 6, title: 'will or won\'t', instr: 'Use will / won\'t + the verb.' },
          { type: 'gap', pool: 'choose', n: 6, title: 'will or going to?', instr: 'Circle the correct form.' }
        ]
      },
      3: {
        ichkann: ['Du kannst feste Termine mit dem present progressive ausdrücken.', 'Du wählst die passende Zukunftsform (will, going to, present progressive).'],
        tasks: [
          { type: 'gap', pool: 'choose', n: 5, title: 'will or going to?', instr: 'Circle the correct form.' },
          { type: 'gap', pool: 'arr', n: 5, title: 'Fixed plans and timetables', instr: 'Use the present progressive (or the present simple for timetables).' },
          { type: 'write', pool: 'plans', n: 1, lines: 5, title: 'Write about the future.', instr: '' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ present perfect
  def({
    id: 'e-presentperfect', title: 'Present perfect', klassen: [3, 4], img: 'MiniHoS_Lob_Ziel',
    merk: '<b>Present perfect</b>: have/has + past participle (3. Form): I <b>have seen</b>, she <b>has gone</b>. Verwendet, wenn das <b>Ergebnis jetzt wichtig</b> ist oder der <b>Zeitpunkt nicht genannt</b> wird: I\'ve lost my keys (ich habe sie jetzt nicht). Have you <b>ever</b> been to London? I\'ve <b>never</b> eaten sushi. Signalwörter: ever, never, just, already, yet (in Fragen/Verneinung am Satzende), so far. <b>for</b> + Zeitdauer (for two years), <b>since</b> + Zeitpunkt (since 2020, since Monday). <b>Past simple</b>, wenn ein <b>Zeitpunkt in der Vergangenheit</b> genannt wird (yesterday, last year, ago, in 2019): I saw him yesterday. <b>Present perfect progressive</b>: have/has been + -ing – etwas dauert bis jetzt an: I\'ve been waiting for an hour.',
    pools: {
      form: `I [have finished:finish] my homework.
She [has lost:lose] her phone.
We [have seen:see] this film three times.
Tom [has broken:break] his leg.
They [have bought:buy] a new house.
I [have never been:never / be] to America.
[Have you ever eaten:you / ever / eat] snails?
My parents [have gone:go] to the supermarket.
The bus [has just left:just / leave].
I [haven't done:not do] my homework yet.
She [has already read:already / read] the book.
[Has Tom called:Tom / call] you yet?
We [have known:know] each other for years.
It [has stopped:stop] raining.`,
      ever: `Have you ever been to London? :: ✓ => Yes, I have.
Has she ever eaten sushi? :: ✗ => No, she hasn't.
Have they ever seen a whale? :: ✓ => Yes, they have.
Has Tom ever flown in a plane? :: ✗ => No, he hasn't.
Have you ever met a famous person? :: ✗ => No, I haven't.
Has your dad ever cooked dinner? :: ✓ => Yes, he has.`,
      jay: `I've {just|yet} had lunch, so I'm not hungry.
Have you finished your homework {yet|already}?
She has {already|yet} seen the film. She saw it last week.
We haven't been to the new café {yet|just}.
The train has {just|yet} arrived – hurry up!
I've {never|ever} been to Spain.
Have you {ever|never} ridden a horse?
Tom has {already|yet} done the shopping.`,
      forsince: `I have lived in Graz [since] 2015.
We have known each other [for] five years.
She has been ill [since] Monday.
They have had their dog [for] three months.
I haven't seen Tom [since] the summer.
My dad has worked here [for] a long time.
It has rained [for] two days.
Lisa has played the piano [since] she was six.
We have been at this school [for] two years.
I haven't eaten anything [since] breakfast.`,
      tense: `I {saw|have seen} Tom yesterday.
I {have never been|never was} to Paris.
We {went|have gone} to Italy last summer.
She {has lived|lived} here since 2018.
{Did you see|Have you seen} the match last night?
{Have you ever eaten|Did you ever eat} Indian food?
My grandpa {died|has died} in 2010.
Oh no! I {have lost|lost} my keys. I can't open the door.
Two years ago we {moved|have moved} to Linz.
I {have known|knew} Lisa for six years.`,
      prog: `I [have been waiting:wait] for the bus for twenty minutes.
It [has been raining:rain] all day.
She [has been learning:learn] English for four years.
We [have been playing:play] football since two o'clock.
How long [have you been sitting:you / sit] here?
Tom is tired. He [has been working:work] all day.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst das present perfect mit have/has + 3. Form bilden.', 'Du kannst mit ever und never über Erfahrungen sprechen.'],
        tasks: [
          { type: 'gap', pool: 'form', n: 7, title: 'have / has + past participle', instr: 'Use the present perfect.' },
          { type: 'pair', pool: 'ever', n: 4, inline: true, head: 'Question', col: 'Short answer', title: 'Have you ever …?', instr: '✓ = yes, ✗ = no. Write short answers.' }
        ]
      },
      2: {
        ichkann: ['Du kannst just, already, yet, ever und never richtig verwenden.', 'Du kannst for und since unterscheiden.'],
        tasks: [
          { type: 'gap', pool: 'jay', n: 6, title: 'just, already, yet, ever, never', instr: 'Circle the correct word.' },
          { type: 'gap', pool: 'forsince', n: 7, title: 'for or since?', instr: 'for + period of time, since + point in time.' }
        ]
      },
      3: {
        ichkann: ['Du kannst present perfect und past simple unterscheiden.', 'Du kannst das present perfect progressive bilden.'],
        tasks: [
          { type: 'gap', pool: 'tense', n: 6, title: 'Present perfect or past simple?', instr: 'Circle the correct form. Look for time words!' },
          { type: 'gap', pool: 'prog', n: 4, title: 'How long …?', instr: 'Use the present perfect progressive (have/has been + -ing).' },
          { type: 'gap', pool: 'forsince', n: 4, title: 'for or since?', instr: 'Fill in for or since.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ past perfect
  def({
    id: 'e-pastperfect', title: 'Past perfect', klassen: [4], img: 'MiniHoS_Planen_Uhr',
    merk: '<b>Past perfect</b>: had + past participle. Damit zeigt man, dass etwas <b>noch früher</b> passiert war als eine andere Handlung in der Vergangenheit (Vorvergangenheit): When we arrived at the station, the train <b>had</b> already <b>left</b>. Typisch mit after, before, when, by the time, already: After she <b>had finished</b> her homework, she went out. Verneinung: hadn\'t + 3. Form. Beim Erzählen: past simple für die Handlung, past perfect für die Vorgeschichte.',
    pools: {
      form: `When we got to the cinema, the film [had started:start].
She was sad because she [had lost:lose] her bag.
After I [had done:do] my homework, I watched TV.
I didn't know the film because I [hadn't seen:not see] it before.
By the time the police came, the thief [had escaped:escape].
Tom was hungry because he [hadn't eaten:not eat] all day.
When I came home, my parents [had gone:go] to bed.
She [had never been:never / be] on a plane before her trip to London.
After they [had left:leave], we cleaned the kitchen.
We couldn't get in because I [had forgotten:forget] my key.`,
      choose: `When I arrived, the party {had already started|already started}.
After we {had eaten|ate} lunch, we went for a walk.
Yesterday I {met|had met} Lisa in town.
She told me that she {had seen|saw} the film twice.
I was tired because I {hadn't slept|didn't sleep} well.
When the teacher came in, we {stopped|had stopped} talking.
The street was wet. It {had rained|rained} in the night.
Before he went to bed, he {had brushed|brushes} his teeth.`,
      join: `First she finished her homework. Then she called Lisa. :: After … => After she had finished her homework, she called Lisa.
First the train left. Then we arrived at the station. :: When … already => When we arrived at the station, the train had already left.
First I lost my ticket. Then I had to buy a new one. :: because => I had to buy a new one because I had lost my ticket.
First they cleaned the house. Then the guests came. :: Before … => Before the guests came, they had cleaned the house.
First Tom read the book. Then he saw the film. :: After … => After Tom had read the book, he saw the film.
First the shop closed. Then I got there. :: When … => When I got there, the shop had closed.`
    },
    levels: {
      1: {
        ichkann: ['Du kannst das past perfect mit had + 3. Form bilden.', 'Du verstehst, dass das past perfect das „noch Frühere“ ausdrückt.'],
        tasks: [
          { type: 'gap', pool: 'form', n: 7, title: 'had + past participle', instr: 'Use the past perfect.' },
          { type: 'gap', pool: 'choose', n: 4, title: 'Which tense?', instr: 'Circle the correct form.' }
        ]
      },
      2: {
        ichkann: ['Du kannst past simple und past perfect in einem Satz verbinden.', 'Du verwendest after, before und when mit dem past perfect.'],
        tasks: [
          { type: 'pair', pool: 'join', n: 4, title: 'What happened first?', instr: 'Join the sentences. Use the word in brackets.' },
          { type: 'gap', pool: 'choose', n: 5, title: 'Which tense?', instr: 'Circle the correct form.' }
        ]
      },
      3: {
        ichkann: ['Du kannst Vorgeschichten beim Erzählen mit dem past perfect ausdrücken.', 'Du verwendest past simple, past progressive und past perfect sicher.'],
        tasks: [
          { type: 'gap', pool: 'form', n: 5, title: 'had + past participle', instr: 'Use the past perfect.' },
          { type: 'pair', pool: 'join', n: 3, title: 'What happened first?', instr: 'Join the sentences.' },
          { type: 'gap', pool: 'choose', n: 4, title: 'Which tense?', instr: 'Circle the correct form.' }
        ]
      }
    }
  });
})();
