/* Englisch – Ausbau und Stufe 4 · Profi, Teil 2 (Vergangenheit und Zukunft) */
(function () {
  const ext = UB.extendTopic;

  // ------------------------------------------------------------------ irregular verbs
  ext('e-irregular', {
    more: {
      gap: `My brother [broke:break] his arm last winter.
We [drove:drive] to Italy in the summer.
I [heard:hear] a strange noise last night.
Lisa [sent:send] me a postcard from Spain.
The film [began:begin] at eight.
She [chose:choose] the red dress.
Our neighbours [sold:sell] their house.
He [threw:throw] the ball over the fence.`,
      mix3: `I have never [seen:see] a whale.
Yesterday I [saw:see] a fox.
She has [written:write] three books.
She [wrote:write] her first book in 2010.
Have you ever [eaten:eat] sushi?
We [ate:eat] pizza last night.
The thief was [caught:catch] by the police.
Tom [caught:catch] the ball with one hand.
Who has [taken:take] my pen?
I [took:take] the bus this morning.
The window was [broken:break] in the storm.
My little sister [broke:break] my glasses.
I've [forgotten:forget] my homework!
I [forgot:forget] my keys yesterday.
Has the bell [rung:ring] yet?
The phone [rang:ring] twice.`,
      text: `Last Saturday we [went] to the zoo. We [saw] lions and elephants, and I [took] lots of photos. My little brother [fell] asleep on the bus home.
Yesterday I [met] Lisa in town. We [bought] some new clothes and then we [had] an ice cream. It [was] a great day!
Tom [lost] his phone last week, but luckily a woman [found] it and [gave] it back to him.
When I [woke] up this morning, I [felt] ill. My mum [made] me some tea and I [slept] until lunchtime.`
    },
    level4: {
      ichkann: ['Du kannst past simple und past participle im Satz unterscheiden.', 'Du verwendest unregelmäßige Verben in Texten ohne Hilfe.'],
      tasks: [
        { type: 'gap', pool: 'mix3', n: 8, title: 'Second or third form?', instr: 'Past simple (went) or past participle (gone)? Look at the sentence.' },
        { type: 'gap', pool: 'text', n: 2, title: 'Complete the texts.', instr: 'Fill in the past simple. There are no verbs in brackets – find a verb that fits.' },
        { type: 'fn', fn: (rng) => {
          const L = [['gehen', 'go', 'went', 'gone'], ['sehen', 'see', 'saw', 'seen'], ['nehmen', 'take', 'took', 'taken'], ['schreiben', 'write', 'wrote', 'written'], ['essen', 'eat', 'ate', 'eaten'], ['trinken', 'drink', 'drank', 'drunk'], ['fliegen', 'fly', 'flew', 'flown'], ['werfen', 'throw', 'threw', 'thrown'], ['vergessen', 'forget', 'forgot', 'forgotten'], ['wählen', 'choose', 'chose', 'chosen'], ['brechen', 'break', 'broke', 'broken'], ['sprechen', 'speak', 'spoke', 'spoken'], ['singen', 'sing', 'sang', 'sung'], ['beginnen', 'begin', 'began', 'begun'], ['fallen', 'fall', 'fell', 'fallen'], ['stehlen', 'steal', 'stole', 'stolen']];
          const vs = rng.fresh(L, 8, v => v[1]);
          const mk = (sol) => UB.table(['Deutsch', 'Infinitive', 'Past simple', 'Past participle'], vs.map(v => [UB.esc(v[0]), sol ? UB.sol(v[1]) : '', sol ? UB.sol(v[2]) : '', sol ? UB.sol(v[3]) : '']), 'even');
          return { title: 'All three forms', instr: 'Write all three English forms.', body: mk(false), sol: mk(true) };
        } }
      ]
    }
  });

  // ------------------------------------------------------------------ past simple
  ext('e-pastsimple', {
    more: {
      gap: `We [stayed:stay] at a hotel by the sea.
The teacher [explained:explain] the rule again.
I [tried:try] sushi for the first time.
My grandpa [taught:teach] me to fish.
The children [ran:run] into the garden.
She [paid:pay] for the tickets.`,
      text: `Last summer my family [went] to Croatia. We [stayed] in a small hotel near the beach. Every day we [swam] in the sea. One evening we [didn't go] to the restaurant – we [had] a picnic on the beach instead.
"[Did] you [enjoy] the party?" – "Yes, I [did]. We [danced] all night." – "[Did] Tom [come], too?" – "No, he [didn't]. He [was] ill."
In 1969 Neil Armstrong [walked] on the moon. Millions of people [watched] it on TV. He [said]: "That's one small step for man …"
Yesterday [was] a terrible day. I [missed] the bus, I [forgot] my lunch and it [rained] all afternoon. I [didn't have] an umbrella!`,
      trans: `Gestern habe ich meine Oma besucht. => I visited my grandma yesterday.
Wir sind letzten Sommer nach Spanien geflogen. => We flew to Spain last summer.
Hast du den Film gesehen? – Nein. => Did you see the film? – No, I didn't.
Sie hat ihre Hausübung nicht gemacht. => She didn't do her homework.
Wo warst du am Samstag? => Where were you on Saturday?
Ich habe vor zwei Wochen ein neues Fahrrad gekauft. => I bought a new bike two weeks ago.
Warum bist du so früh gegangen? => Why did you leave so early?
Es hat die ganze Nacht geschneit. => It snowed all night.`,
      err: `Yesterday I go to the cinema. => Yesterday I went to the cinema.
Did you saw Tom? => Did you see Tom?
We didn't went to school. => We didn't go to school.
She buyed a new dress. => She bought a new dress.
They was very tired. => They were very tired.
Where you went last summer? => Where did you go last summer?
I have seen him yesterday. => I saw him yesterday.
He studyed all night. => He studied all night.`
    },
    level4: {
      ichkann: ['Du erzählst in Texten im past simple – mit Verneinungen und Fragen.', 'Du übersetzt deutsche Perfekt-Sätze mit Zeitangabe ins past simple.', 'Du findest typische Fehler (did … saw, buyed, I have seen him yesterday).'],
      tasks: [
        { type: 'gap', pool: 'text', n: 2, title: 'Complete the texts.', instr: 'Fill in the gaps. There are no verbs in brackets.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: 'Careful: German „ich habe … gesehen“ is often past simple in English!' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ past progressive / used to
  ext('e-pastprogressive', {
    more: {
      when: `I [was reading:read] when the doorbell [rang:ring].
They [were playing:play] cards when the lights [went:go] out.
While Mum [was driving:drive], we [were singing:sing] songs.
He [cut:cut] his finger while he [was cooking:cook].`,
      text: `It was a cold winter evening. Snow [was falling] and the wind [was blowing]. I [was sitting] by the fire when suddenly someone [knocked] at the door.
When I [arrived] at the party, everybody [was dancing]. Lisa [was talking] to a boy I didn't know.
My grandpa [used to] work in a mine. He [didn't use to] have a car, so he [walked] to work every day.
While we [were waiting] for the bus, it [started] to rain. We [didn't have] an umbrella!`,
      trans: `Ich habe ferngesehen, als du angerufen hast. => I was watching TV when you called.
Während sie kochte, las er die Zeitung. => While she was cooking, he was reading the newspaper.
Früher hatte ich lange Haare. => I used to have long hair.
Was hast du gestern um acht Uhr gemacht? => What were you doing at eight o'clock yesterday?
Es regnete, als wir das Haus verließen. => It was raining when we left the house.
Früher haben wir in Linz gewohnt. => We used to live in Linz.
Er ist vom Rad gefallen, als er nach Hause fuhr. => He fell off his bike when he was riding home.`,
      err: `I was watch TV when you called. => I was watching TV when you called.
While I cooked, the phone was ringing. => While I was cooking, the phone rang.
I use to play tennis when I was young. => I used to play tennis when I was young.
They was sleeping at midnight. => They were sleeping at midnight.
Did you used to live here? => Did you use to live here?
We was playing cards at midnight. => We were playing cards at midnight.`
    },
    level4: {
      ichkann: ['Du erzählst mit past simple und past progressive (Hintergrund – Handlung).', 'Du verwendest used to sicher – auch in Fragen und Verneinungen.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 2, title: 'Complete the texts.', instr: 'Past simple, past progressive or used to? There are no verbs in brackets.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ future
  ext('e-future', {
    more: {
      choose: `I'm sure our team {will|is going to} win. (a guess)
We {'re going to|'ll} move to Vienna in August. We've already found a flat.
Oh no, I've forgotten my wallet! – Don't worry, I {'ll|'m going to} pay.
Watch out! That glass {'s going to|'ll} fall!`,
      text: `"What [are] you [going to] do in the holidays?" – "We [are going to] visit my aunt in London. We've already booked the flights."
"It's very hot in here." – "Wait, I ['ll] open the window."
I think robots [will] do a lot of work in the future, but they [won't] replace teachers.
Look at those dark clouds! It [is going to] rain. Let's go inside.
"[Are] you [meeting] Tom tomorrow?" – "Yes, I [am]. We're going to the cinema at 6."
The train [leaves] at 7.15 tomorrow morning, so we [will] have to get up early.`,
      trans: `Ich werde nächstes Jahr Spanisch lernen. (Plan) => I'm going to learn Spanish next year.
Ich glaube, es wird morgen regnen. => I think it will rain tomorrow.
Keine Sorge, ich helfe dir! => Don't worry, I'll help you!
Wir treffen uns morgen um drei. (fest vereinbart) => We're meeting tomorrow at three.
Der Zug fährt um 7 Uhr ab. => The train leaves at 7 o'clock.
Was wirst du am Wochenende machen? => What are you going to do at the weekend?
Pass auf! Du wirst fallen! => Be careful! You're going to fall!
Sie wird nicht kommen. => She won't come.`,
      err: `I will to visit my grandma. => I will visit my grandma.
It's going rain. => It's going to rain.
Will she comes tomorrow? => Will she come tomorrow?
Will you to help me? => Will you help me?
The phone is ringing. – I'm going to answer it! => The phone is ringing. – I'll answer it!
We going to play football. => We're going to play football.`
    },
    level4: {
      ichkann: ['Du wählst in Texten die passende Zukunftsform (will, going to, present progressive, present simple).', 'Du übersetzt deutsche Präsens- und Futursätze passend.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Which future form?', instr: 'Fill in the gaps.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: 'Choose the correct future form.' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ present perfect
  ext('e-presentperfect', {
    more: {
      tense: `Look! I {have cut|cut} my finger. It's bleeding.
Shakespeare {wrote|has written} many plays.
How long {have you had|did you have} your dog? – For three years.
I {have just finished|just finished} my homework. Can I go out now?`,
      text: `"[Have] you ever [been] to London?" – "Yes, I [have]. I [went] there last year with my school."
I [have lived] in Graz [since] 2018. Before that, I [lived] in Linz for five years.
Oh no! Someone [has stolen] my bike! I [left] it here an hour ago.
Tom [has been] ill [for] a week. He [hasn't been] to school since Monday.
"[Have] you [finished] your homework [yet]?" – "No, I [haven't]. I [have] only just [started]."`,
      trans: `Ich war noch nie in Amerika. => I have never been to America.
Hast du schon gegessen? => Have you eaten yet?
Ich wohne seit drei Jahren hier. => I have lived here for three years.
Sie kennt ihn seit 2020. => She has known him since 2020.
Ich habe gestern meinen Schlüssel verloren. => I lost my key yesterday.
Ich habe meinen Schlüssel verloren. (Ich habe ihn jetzt nicht.) => I have lost my key.
Wie lange wartest du schon? => How long have you been waiting?
Er hat gerade angerufen. => He has just called.`,
      err: `I have seen him yesterday. => I saw him yesterday.
I live here since 2015. => I have lived here since 2015.
Have you ever went to Paris? => Have you ever been to Paris?
She has finished her homework already yesterday. => She finished her homework yesterday.
I know her for five years. => I have known her for five years.
Did you ever eat snails? => Have you ever eaten snails?
We have been here since two hours. => We have been here for two hours.
He hasn't called already. => He hasn't called yet.`
    },
    level4: {
      ichkann: ['Du verwendest present perfect und past simple in Texten richtig.', 'Du übersetzt „seit“ richtig (for/since + present perfect).', 'Du findest typische Fehler (I live here since …, I have seen him yesterday).'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Present perfect or past simple?', instr: 'Fill in the gaps.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: 'Careful with „seit“!' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ past perfect
  ext('e-pastperfect', {
    more: {
      form: `When the firefighters arrived, the house [had burned:burn] down.
I recognised her because I [had met:meet] her before.
They [hadn't finished:not finish] the work when the boss came in.
By the time I got home, my brother [had eaten:eat] all the cake.`,
      text: `When I got to school, I realised that I [had forgotten] my sports bag. I [had left] it on the bus!
Lisa was nervous because she [had never flown] before. Her parents [had booked] the tickets months ago.
After the guests [had left], we [cleaned] the whole flat. It [had been] a great party.
The police found the car, but the thieves [had] already [disappeared].`,
      trans: `Als wir ankamen, hatte der Film schon begonnen. => When we arrived, the film had already started.
Nachdem sie gegessen hatte, ging sie ins Bett. => After she had eaten, she went to bed.
Ich hatte ihn vorher noch nie gesehen. => I had never seen him before.
Er war müde, weil er nicht geschlafen hatte. => He was tired because he hadn't slept.
Bevor wir losfuhren, hatten wir das Auto vollgetankt. => Before we left, we had filled up the car.
Sie sagte, dass sie den Schlüssel verloren hatte. => She said that she had lost the key.`,
      err: `When we arrived, the train already left. => When we arrived, the train had already left.
After he had finish, he went home. => After he had finished, he went home.
I had saw the film before. => I had seen the film before.
She was hungry because she didn't ate. => She was hungry because she hadn't eaten.
Before I went out, I have done my homework. => Before I went out, I had done my homework.`
    },
    level4: {
      ichkann: ['Du erzählst mit past simple und past perfect in längeren Texten.', 'Du übersetzt Sätze mit „hatte … gemacht“ ins Englische.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Past simple or past perfect? There are no verbs in brackets.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });
})();
