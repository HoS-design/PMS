/* Englisch – Ausbau und Stufe 4 · Profi, Teil 3 (weitere Grammatik) */
(function () {
  const ext = UB.extendTopic;

  // ------------------------------------------------------------------ comparison
  ext('e-comparison', {
    more: {
      gap: `Is a cheetah [faster:fast] than a lion?
This is [the most boring:boring] lesson of the week.
My room is [tidier:tidy] than my brother's room.
Winter is [the coldest:cold] season.
Today I feel [better:good] than yesterday.
Mount Everest is [the highest:high] mountain in the world.`,
      text: `Vienna is [bigger] than Graz, but Graz is [more beautiful] – in my opinion! The [oldest] building in Graz is over 800 years old.
My sister is two years [older] than me, but I am [taller] than her. She is the [best] swimmer in our family.
This phone is [more expensive] than that one, but it isn't [as] good [as] the new model.
The test was [easier] than I thought. It wasn't [as] difficult [as] the last one.
Which is the [most dangerous] animal in the world? – The mosquito! It's much [more dangerous] than a shark.`,
      trans: `Mein Bruder ist größer als ich. => My brother is taller than me.
Das ist der beste Film, den ich je gesehen habe. => This is the best film I have ever seen.
Englisch ist leichter als Französisch. => English is easier than French.
Sie ist so alt wie ich. => She is as old as me.
Der Test war nicht so schwer wie gedacht. => The test wasn't as difficult as I thought.
Das ist das teuerste Handy im Geschäft. => This is the most expensive mobile phone in the shop.
Mir geht es heute schlechter. => I feel worse today.
Je mehr, desto besser. => The more, the better.`,
      err: `My brother is more tall than me. => My brother is taller than me.
This is the most good pizza. => This is the best pizza.
She is older as me. => She is older than me.
It's the biggest city of Austria. => It's the biggest city in Austria.
This test was more easier. => This test was easier.
He is as tall than his dad. => He is as tall as his dad.
My marks are badder than yours. => My marks are worse than yours.`
    },
    level4: {
      ichkann: ['Du vergleichst in Texten sicher (than, as … as, Superlativ).', 'Du kannst Vergleiche ins Englische übersetzen.', 'Du findest typische Fehler (more tall, older as, badder).'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Fill in the gaps. There are no adjectives in brackets.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ quantity
  ext('e-quantity', {
    more: {
      muchmany: `How {many|much} languages do you speak?
There weren't {many|much} children in the park.
How {much|many} sugar do you take in your tea?
She doesn't eat {much|many} sweets.`,
      some: `[Somebody] has taken my pen!
Is there [anything] I can do to help?
I've got [nothing] to wear!
We searched [everywhere] for the cat.`,
      text: `There isn't [much] milk left, and there are only [a few] eggs. We need to go shopping.
"How [many] people came to the party?" – "Not [many]. But we had [a lot of] fun!"
I'm hungry. Is there [anything] to eat? – Sorry, there's [nothing] in the fridge.
[Everybody] knows the answer. It's easy! – Well, [nobody] told me.
Can I have [a little] more time, please? I've only got [a few] questions left.`,
      trans: `Wie viel Geld hast du? => How much money have you got?
Wie viele Leute waren dort? => How many people were there?
Ich habe nur ein paar Freunde hier. => I've only got a few friends here.
Kann ich ein bisschen Milch haben? => Can I have a little milk?
Niemand hat angerufen. => Nobody called.
Ich habe nichts gesehen. => I didn't see anything. / I saw nothing.
Hast du irgendwo meine Schlüssel gesehen? => Have you seen my keys anywhere?
Alle mögen ihn. => Everybody likes him.`
    },
    level4: {
      ichkann: ['Du verwendest Mengenangaben und some-/any-/no-/every-Wörter in Texten sicher.', 'Du übersetzt „niemand, nichts, ein paar, ein bisschen“ richtig.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'much, many, a lot of, a few, a little, some-/any-/no-/every- words' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'error', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ adverbs
  ext('e-adverbs', {
    more: {
      choose: `She smiled {happily|happy} at me.
The exam was {surprisingly|surprising} easy.
He is {extremely|extreme} tall.
This cake smells {wonderful|wonderfully}.
I {hardly|hard} know him – I've only met him once.
You did that {well|good}!`,
      text: `Tom is a [careful] driver. He always drives [carefully] and never too [fast].
The music was very [loud], so I couldn't hear you. Can you speak a bit more [loudly]?
Lisa speaks English [well]. Her pronunciation is really [good].
The soup tastes [delicious]! You cook [wonderfully].
He answered the question [correctly], but he spoke so [quietly] that nobody heard him.`,
      trans: `Sie spricht sehr gut Englisch. => She speaks English very well.
Fahr bitte vorsichtig! => Please drive carefully!
Er ist ein guter Schwimmer. => He is a good swimmer.
Du siehst müde aus. => You look tired.
Wir haben hart gearbeitet. => We worked hard.
Das klingt toll! => That sounds great!
Der Hund bellte laut. => The dog barked loudly.
Sie lächelte glücklich. => She smiled happily.`,
      err: `She sings very good. => She sings very well.
Drive careful! => Drive carefully!
You look tiredly. => You look tired.
He runs very fastly. => He runs very fast.
We worked hardly all day. => We worked hard all day.
The soup tastes deliciously. => The soup tastes delicious.`
    },
    level4: {
      ichkann: ['Du wählst in Texten sicher zwischen Adjektiv und Adverb.', 'Du kennst hard – hardly und good – well.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Adjective or adverb?', instr: 'Fill in the gaps. There are no words in brackets.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ relative clauses
  ext('e-relative', {
    more: {
      gap: `This is the dog [which] bit my brother.
The girl [whose] phone was stolen called the police.
Do you know a shop [where] I can buy cheap shoes?`,
      text: `Last week I met a girl [who] lives in Australia. Her dad, [who] is a pilot, flies to Europe every month.
This is the restaurant [where] we celebrated my birthday. The pizza [which / that] I had was fantastic.
The man [whose] car was stolen talked to the police. The car, [which] was brand new, was found the next day.
Is that the boy [who / that] won the competition? I think the prize [which / that] he got was a laptop.`,
      trans: `Das ist das Mädchen, das neben mir wohnt. => That's the girl who lives next to me.
Das Buch, das du mir gegeben hast, ist toll. => The book (that) you gave me is great.
Ich kenne einen Jungen, dessen Mutter Ärztin ist. => I know a boy whose mother is a doctor.
Das ist das Haus, in dem ich geboren wurde. => That's the house where I was born.
Mein Onkel, der in London lebt, kommt uns besuchen. => My uncle, who lives in London, is coming to visit us.
Der Film, den wir gesehen haben, war langweilig. => The film (which) we saw was boring.`,
      err: `The man which lives here is nice. => The man who lives here is nice.
This is the town where I was born there. => This is the town where I was born.
My sister, that lives in Vienna, is a nurse. => My sister, who lives in Vienna, is a nurse.
The boy who's bike was stolen is sad. => The boy whose bike was stolen is sad.
The film what we saw was great. => The film which we saw was great.`
    },
    level4: {
      ichkann: ['Du verwendest Relativsätze in Texten sicher – auch mit Beistrichen.', 'Du kannst deutsche Relativsätze ins Englische übersetzen.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Fill in who, which, that, whose, where or when.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ conditionals
  ext('e-conditionals', {
    more: {
      choose: `If I {had|have} wings, I would fly to school.
Unless you {hurry|will hurry}, you'll miss the bus.
If he {had told|told} me earlier, I would have come.
What would you do if you {saw|see} a ghost?`,
      text: `If it [rains] tomorrow, we [will] stay at home and watch a film.
If I [were] rich, I [would] buy a big house by the sea. But I'm not rich, so I [won't].
If you [had] listened to me, you [wouldn't] have got lost!
I [would] help you if I [had] time, but I'm really busy today.
If we [leave] now, we [will] catch the train. If we [had left] earlier, we [wouldn't] be in such a hurry.`,
      trans: `Wenn du mich anrufst, komme ich. => If you call me, I'll come.
Wenn ich du wäre, würde ich mich entschuldigen. => If I were you, I would apologise.
Wenn ich Zeit hätte, würde ich dir helfen. => If I had time, I would help you.
Wenn du gelernt hättest, hättest du den Test bestanden. => If you had studied, you would have passed the test.
Was würdest du tun, wenn du eine Million gewinnen würdest? => What would you do if you won a million?
Wenn wir den Bus verpassen, kommen wir zu spät. => If we miss the bus, we will be late.`,
      err: `If I will see him, I tell him. => If I see him, I will tell him.
If I would be rich, I would travel. => If I were rich, I would travel.
If you had came, you would have seen him. => If you had come, you would have seen him.
If I have time, I would help you. => If I had time, I would help you.
If he studies, he passes the test tomorrow. => If he studies, he will pass the test tomorrow.`
    },
    level4: {
      ichkann: ['Du verwendest alle drei Typen von if-Sätzen in Texten.', 'Du übersetzt deutsche Bedingungssätze (würde, hätte) richtig.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Fill in the gaps. Which type of if-clause is it?' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ passive
  ext('e-passive', {
    more: {
      mix: `The museum [was opened:open] in 1990.
Lunch [is being prepared:prepare] right now.
Your parcel [will be delivered:deliver] tomorrow.
The car [has been repaired:repair].`,
      text: `Our school [was built] in 1965. Last year it [was renovated] and a new gym [was added].
English [is spoken] in many countries. It [is taught] in almost every school in Europe.
"Where is my bike?" – "I'm afraid it [has been stolen]. The police [have been called]."
The new shopping centre [will be opened] next spring. More than 50 shops [will be built].
Every year thousands of tons of plastic [are thrown] into the sea.`,
      trans: `In Österreich wird Deutsch gesprochen. => German is spoken in Austria.
Das Haus wurde 1900 gebaut. => The house was built in 1900.
Mein Fahrrad wurde gestohlen. => My bike was stolen. / My bike has been stolen.
Die Ergebnisse werden morgen veröffentlicht. => The results will be published tomorrow.
Das Buch wurde von J. K. Rowling geschrieben. => The book was written by J. K. Rowling.
Handys müssen im Unterricht ausgeschaltet werden. => Mobile phones must be switched off in class.`,
      err: `The house was build in 1950. => The house was built in 1950.
English is speak in Canada. => English is spoken in Canada.
The letters was sent yesterday. => The letters were sent yesterday.
The thief was caught from the police. => The thief was caught by the police.
My bike has stolen. => My bike has been stolen.`
    },
    level4: {
      ichkann: ['Du verwendest das Passiv in verschiedenen Zeiten in Texten.', 'Du übersetzt deutsche Passivsätze (wird/wurde … + Partizip) ins Englische.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Complete the texts.', instr: 'Use the passive. There are no verbs in brackets.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 3, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ reported speech
  ext('e-reported', {
    more: {
      st: `"I don't like spinach." :: Ben said … => Ben said (that) he didn't like spinach.
"We are going to move." :: They told me … => They told me (that) they were going to move.
"I must go now." :: She said … => She said (that) she had to go.
"I was ill yesterday." :: Tom said … => Tom said (that) he had been ill the day before.`,
      q: `"Where did you buy it?" :: She asked me … => She asked me where I had bought it.
"Will you come?" :: He asked me … => He asked me if I would come.
"How old is your sister?" :: Lisa asked me … => Lisa asked me how old my sister was.`,
      mix: `"I'm tired," said Lisa. => Lisa said (that) she was tired.
"Don't touch the dog!" said Dad. => Dad told me not to touch the dog.
"Do you speak French?" Tom asked me. => Tom asked me if I spoke French.
"We'll call you tomorrow," they said. => They said (that) they would call me the next day.
"Close the door, please," Mum said to me. => Mum asked me to close the door.
"Where have you been?" my teacher asked. => My teacher asked where I had been.
"I can't find my keys," Ben said. => Ben said (that) he couldn't find his keys.
"Are you coming to the party?" she asked us. => She asked us if we were coming to the party.`
    },
    level4: {
      ichkann: ['Du gibst Aussagen, Fragen und Aufforderungen gemischt in indirekter Rede wieder.', 'Du verschiebst Zeiten, Pronomen und Zeitangaben richtig.'],
      tasks: [
        { type: 'pair', pool: 'mix', n: 5, title: 'Statements, questions and orders', instr: 'Write the sentences in reported speech.' },
        { type: 'pair', pool: 'st', n: 2, title: 'Statements', instr: 'Change tenses and time words.' },
        { type: 'gap', pool: 'saytell', n: 4, title: 'say or tell?', instr: 'Fill in the correct form.' }
      ]
    }
  });

  // ------------------------------------------------------------------ gerund / infinitive
  ext('e-gerund', {
    more: {
      gap: `I'm looking forward to [meeting:meet] you.
He avoided [answering:answer] the question.
They agreed [to share:share] the money.
She suggested [going:go] to the beach.
I can't afford [to buy:buy] a new phone.
Would you mind [closing:close] the door?`,
      text: `I love [reading], but I hate [doing] homework. Next year I want [to learn] Spanish because I'm interested in [travelling].
My dad gave up [smoking] last year. Now he enjoys [running] every morning and he has decided [to run] a marathon.
"Do you fancy [going] to the cinema?" – "I'd love [to come], but I need [to finish] my project."
Thank you for [inviting] me. I'm really looking forward to [seeing] you all.`,
      trans: `Ich lese gern Comics. => I like reading comics.
Sie möchte Tierärztin werden. => She wants to become a vet.
Danke, dass du mir geholfen hast. => Thank you for helping me.
Ich freue mich darauf, dich zu sehen. => I'm looking forward to seeing you.
Er ist gut im Zeichnen. => He's good at drawing.
Wir haben beschlossen, zu Hause zu bleiben. => We decided to stay at home.
Rauchen ist ungesund. => Smoking is unhealthy.
Hör auf zu reden! => Stop talking!`,
      err: `I enjoy to swim. => I enjoy swimming.
She wants going home. => She wants to go home.
I'm looking forward to see you. => I'm looking forward to seeing you.
He's good in play chess. => He's good at playing chess.
Thank you for help me. => Thank you for helping me.
We decided staying at home. => We decided to stay at home.`
    },
    level4: {
      ichkann: ['Du wählst in Texten sicher zwischen -ing und to + Grundform.', 'Du übersetzt Sätze mit „gern“, „darauf freuen“, „gut in“ richtig.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 2, title: 'Complete the texts.', instr: '-ing or to + infinitive? There are no verbs in brackets.' },
        { type: 'pair', pool: 'trans', n: 4, title: 'Translate into English.', instr: '' },
        { type: 'error', pool: 'err', n: 4, title: 'Find the mistake.', instr: 'Write the sentences correctly.' }
      ]
    }
  });

  // ------------------------------------------------------------------ linking words
  ext('e-linking', {
    more: {
      text: `{Despite|Although} the rain, we went for a walk.
She was tired. {Nevertheless|Because}, she finished her homework.
{Unless|If not} you hurry, you'll miss the bus.
I stayed at home {because of|because} the storm.
{In spite of|Although} being ill, he went to school.
Some people love cities, {whereas|because} others prefer the countryside.`,
      prof: `[Although] it was raining, we went for a walk. [However], we got very wet.
I wanted to buy the jacket, [but] it was too expensive. [So] I bought a T-shirt instead.
[First], mix the flour and the eggs. [Then] add the milk. [Finally], bake the cake for 30 minutes.
[In my opinion], homework is important [because] it helps us to practise. [On the other hand], it can be stressful.
We stayed inside [because of] the storm. [After] it had stopped, we went out to look at the damage.`,
      trans: `Obwohl es kalt war, gingen wir schwimmen. => Although it was cold, we went swimming.
Wir blieben wegen des Regens zu Hause. => We stayed at home because of the rain.
Ich war müde, deshalb ging ich früh ins Bett. => I was tired, so I went to bed early.
Trotz des Regens spielten wir Fußball. => Despite the rain, we played football.
Zuerst frühstückte ich, dann ging ich zur Schule. => First I had breakfast, then I went to school.
Meiner Meinung nach ist das eine gute Idee. => In my opinion, that's a good idea.`
    },
    level4: {
      ichkann: ['Du verwendest auch despite, because of, whereas und nevertheless richtig.', 'Du verbindest Sätze in Texten abwechslungsreich.'],
      tasks: [
        { type: 'gap', pool: 'prof', n: 3, title: 'Complete the texts.', instr: 'Fill in linking words. There is no box.' },
        { type: 'gap', pool: 'text', n: 6, filter: x => /Despite|Nevertheless|Unless|because of|In spite|whereas/.test(x.q), title: 'Linking words for experts', instr: 'Circle the correct word.' },
        { type: 'pair', pool: 'trans', n: 3, title: 'Translate into English.', instr: '' }
      ]
    }
  });

  // ------------------------------------------------------------------ word formation
  ext('e-wordformation', {
    more: {
      family: `He gave a very [emotional:emotion] speech at the wedding.
We had a [wonderful:wonder] time on holiday.
His [explanation:explain] was very clear.
It's [illegal:legal] to drive without a licence.
She spoke [confidently:confident] in front of the class.
The [discovery:discover] of the treasure was in all the newspapers.`,
      text: `The museum was really [interesting:interest]. The guide gave us a lot of [information:inform] and answered all our questions [patiently:patient].
It was very [kind:kindness] of you to help me. Your [kindness:kind] means a lot to me.
Don't be so [impatient:patient]! The bus will come soon. It's [usually:usual] on time.
The [driver:drive] was very [careless:care]. He didn't look and caused an [accident:accidental].`
    },
    level4: {
      ichkann: ['Du bildest in Texten die passende Wortform (Nomen, Adjektiv, Adverb, Gegenteil).', 'Du erkennst, welche Wortart in eine Lücke passt.'],
      tasks: [
        { type: 'gap', pool: 'text', n: 3, title: 'Word families in texts', instr: 'Use the word in brackets in the correct form.' },
        { type: 'gap', pool: 'family', n: 6, title: 'Word families', instr: 'Use the word in brackets in the correct form.' }
      ]
    }
  });
})();
