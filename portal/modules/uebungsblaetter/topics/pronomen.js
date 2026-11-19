/* Pronomen – 1./2. Klasse */
UB.simple({
  id: 'pronomen', title: 'Pronomen', area: 'sprache', klassen: [1, 2], img: 'MiniHoS_Geste_Winken',
  merk: '<b>Pronomen</b> (Fürwörter) stehen für ein Nomen oder begleiten es. <b>Personalpronomen</b>: ich, du, er, sie, es, wir, ihr, sie (mich, dir, ihm …). <b>Possessivpronomen</b> zeigen, wem etwas gehört: mein, dein, sein, ihr, unser, euer. <b>Reflexivpronomen</b> beziehen sich auf das Subjekt: ich wasche mich. <b>Demonstrativpronomen</b> weisen hin: dieser, jener, der da. <b>Relativpronomen</b> leiten einen Relativsatz ein: der, die, das, welcher.',
  pools: {
    ersetzen: `Lena kommt heute. [Sie] bringt einen Kuchen mit.
Der Hund bellt laut. [Er] hat Hunger.
Das Baby schläft. [Es] ist müde.
Max und Ben spielen Fußball. [Sie] sind ein gutes Team.
Ich gebe Paul den Ball. Ich gebe [ihm] den Ball.
Ich sehe Mia. Ich winke [ihr] zu.
Wo ist mein Bleistift? Ich finde [ihn] nicht.
Die Kinder warten. Der Busfahrer begrüßt [sie].
Das Fenster ist offen. Bitte schließ [es]!
Anna hat Geburtstag. Wir schenken [ihr] ein Buch.
Mein Opa ist krank. Wir besuchen [ihn] morgen.
Die Blumen sind schön. Ich gieße [sie] jeden Tag.`,
    besitz: `Ich habe [meinen:mein] Schlüssel verloren.
Hast du [deine:dein] Hausübung gemacht?
Paul sucht [seinen:sein] Rucksack.
Lena zeigt mir [ihr:ihr] neues Fahrrad.
Wir besuchen [unsere:unser] Großeltern.
Habt ihr [euer:euer] Zimmer aufgeräumt?
Die Kinder holen [ihre:ihr] Jacken.
Ich leihe dir [mein:mein] Lineal.
Mia ruft [ihren:ihr] Hund.
Der Lehrer korrigiert [seine:sein] Tests.
Wir feiern [unseren:unser] Sieg.
Max gibt [seiner:sein] Schwester ein Geschenk.`,
    art: `**Ich** gehe heute schwimmen.|Pers
Kommst **du** mit?|Pers
Ich gebe **ihm** das Heft.|Pers
**Wir** fahren nach Wien.|Pers
Das ist **mein** Hund.|Poss
**Unsere** Klasse gewinnt.|Poss
Wo ist **dein** Heft?|Poss
Paul holt **seine** Jacke.|Poss
Ich wasche **mich**.|Refl
Er freut **sich** auf die Ferien.|Refl
Wir beeilen **uns**.|Refl
**Dieses** Buch gefällt mir.|Dem
**Jener** Mann dort ist mein Onkel.|Dem
**Das** habe ich nicht gewusst.|Dem
Der Ball, **der** im Garten liegt, gehört Max.|Rel
Das ist die Frau, **die** uns geholfen hat.|Rel
Das Haus, **das** am See steht, ist alt.|Rel
Der Film, **den** wir gesehen haben, war spannend.|Rel`,
    reflexiv: `Ich freue [mich] auf die Ferien.
Du wäschst [dich] jeden Morgen.
Max ärgert [sich] über den Fehler.
Wir treffen [uns] am Nachmittag.
Habt ihr [euch] schon angemeldet?
Die Kinder verstecken [sich] im Garten.
Ich putze [mir] die Zähne.
Lena kämmt [sich] die Haare.
Du hast [dich] verlaufen.
Wir beeilen [uns].`
  },
  levels: {
    1: {
      ichkann: ['Du kannst Nomen durch Personalpronomen ersetzen.', 'Du kannst Possessivpronomen richtig einsetzen.'],
      tasks: [
        { type: 'gap', pool: 'ersetzen', n: 6, title: 'Ersetze das Nomen.', instr: 'Setze das passende Personalpronomen ein: er, sie, es, ihn, ihm, ihr …' },
        { type: 'gap', pool: 'besitz', n: 7, title: 'Wem gehört es?', instr: 'Setze das Possessivpronomen in der richtigen Form ein.' }
      ]
    },
    2: {
      ichkann: ['Du kannst Personalpronomen und Possessivpronomen richtig verwenden.', 'Du kannst Personalpronomen, Possessivpronomen und Reflexivpronomen unterscheiden.'],
      tasks: [
        { type: 'gap', pool: 'besitz', n: 6, title: 'Wem gehört es?', instr: 'Setze das Possessivpronomen in der richtigen Form ein.' },
        { type: 'gap', pool: 'reflexiv', n: 5, title: 'mich, dich, sich …', instr: 'Setze das Reflexivpronomen ein.' },
        { type: 'choice', pool: 'art', keys: ['Pers', 'Poss', 'Refl'], cover: true, n: 6, title: 'Welches Pronomen ist das?', instr: 'Kreuze an.', opts: [['Pers', 'Personalpronomen'], ['Poss', 'Possessivpronomen'], ['Refl', 'Reflexivpronomen']] }
      ]
    },
    3: {
      ichkann: ['Du kennst fünf Arten von Pronomen.', 'Du kannst Pronomen im Satz bestimmen.'],
      tasks: [
        { type: 'choice', pool: 'art', cover: true, keys: ['Pers', 'Poss', 'Refl', 'Dem', 'Rel'], n: 10, asText: true, col: 'Pronomen', title: 'Bestimme die Pronomen.', instr: 'Schreibe: Personal-, Possessiv-, Reflexiv-, Demonstrativ- oder Relativpronomen.', opts: [['Pers', 'Personalpronomen'], ['Poss', 'Possessivpronomen'], ['Refl', 'Reflexivpronomen'], ['Dem', 'Demonstrativpronomen'], ['Rel', 'Relativpronomen']] },
        { type: 'gap', pool: 'ersetzen', n: 5, title: 'Ersetze das Nomen.', instr: 'Setze das Personalpronomen im richtigen Fall ein.' }
      ]
    }
  }
});
