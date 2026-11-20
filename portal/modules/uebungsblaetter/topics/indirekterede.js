/* Indirekte Rede und Konjunktiv I – 3./4. Klasse */
UB.simple({
  id: 'indirekte-rede', title: 'Indirekte Rede (Konjunktiv I)', area: 'sprache', klassen: [3, 4], img: 'MiniHoS_Rosa_Notizblock',
  merk: 'Mit der <b>indirekten Rede</b> gibt man wieder, was jemand gesagt hat – ohne Anführungszeichen. Man verwendet den <b>Konjunktiv I</b>: Er sagt, er <i>sei</i> müde / er <i>habe</i> Hunger / er <i>komme</i> später. Die Pronomen werden angepasst (ich → er/sie, mein → sein/ihr). Ist der Konjunktiv I gleich wie der Indikativ (sie <i>haben</i>), nimmt man den <b>Konjunktiv II</b> (sie <i>hätten</i>) oder die würde-Form. Fragen werden mit „ob“ oder dem Fragewort eingeleitet: Sie fragt, ob er mitkomme.',
  pools: {
    formen: `er kommt => er komme
sie hat => sie habe
er ist => er sei
sie kann => sie könne
er weiß => er wisse
sie will => sie wolle
er geht => er gehe
sie muss => sie müsse
er liest => er lese
sie sieht => sie sehe
er wird => er werde
sie fährt => sie fahre
er darf => er dürfe
sie gibt => sie gebe
es regnet => es regne
sie sind => sie seien
er schläft => er schlafe
sie arbeitet => sie arbeite
er kann => er könne
sie weiß => sie wisse
er nimmt => er nehme
sie läuft => sie laufe
er hilft => er helfe
es gibt => es gebe`,
    umformen: `Lena sagt: „Ich bin müde.“ => Lena sagt, sie sei müde.
Max erklärt: „Der Bus kommt zu spät.“ => Max erklärt, der Bus komme zu spät.
Paul sagt: „Ich habe meinen Schlüssel verloren.“ => Paul sagt, er habe seinen Schlüssel verloren.
Die Ärztin sagt zu Paul: „Du musst im Bett bleiben.“ => Die Ärztin sagt zu Paul, er müsse im Bett bleiben.
Der Bürgermeister betont: „Die Straße wird bald repariert.“ => Der Bürgermeister betont, die Straße werde bald repariert.
Anna erzählt: „Mein Bruder fährt nach Wien.“ => Anna erzählt, ihr Bruder fahre nach Wien.
Der Trainer sagt: „Das Spiel beginnt um drei Uhr.“ => Der Trainer sagt, das Spiel beginne um drei Uhr.
Mia behauptet: „Ich kann das allein.“ => Mia behauptet, sie könne das allein.
Die Lehrerin sagt: „Ihr habt gut gearbeitet.“ => Die Lehrerin sagt, wir hätten gut gearbeitet.
Tom berichtet: „Die Kinder spielen im Hof.“ => Tom berichtet, die Kinder würden im Hof spielen. (auch: spielten)
Anna fragt Tom: „Kommst du mit?“ => Anna fragt Tom, ob er mitkomme.
Der Polizist fragt den Mann: „Wo wohnen Sie?“ => Der Polizist fragt den Mann, wo er wohne.
Lisa sagt: „Ich weiß die Antwort.“ => Lisa sagt, sie wisse die Antwort.
Der Reporter meldet: „Der Sturm ist vorbei.“ => Der Reporter meldet, der Sturm sei vorbei.
Tim sagt: „Ich habe keine Zeit.“ => Tim sagt, er habe keine Zeit.
Oma erzählt: „Früher gab es kein Internet.“ => Oma erzählt, früher habe es kein Internet gegeben.
Die Lehrerin sagt: „Der Test ist leicht.“ => Die Lehrerin sagt, der Test sei leicht.
Lena meint: „Mein Rad ist kaputt.“ => Lena meint, ihr Rad sei kaputt.
Der Wetterbericht meldet: „Morgen schneit es.“ => Der Wetterbericht meldet, morgen schneie es.
Max behauptet: „Ich kenne den Weg.“ => Max behauptet, er kenne den Weg.
Der Busfahrer sagt: „Der Bus fährt gleich ab.“ => Der Busfahrer sagt, der Bus fahre gleich ab.
Mia sagt: „Ich will Tierärztin werden.“ => Mia sagt, sie wolle Tierärztin werden.
Der Trainer fragt: „Wer spielt heute im Tor?“ => Der Trainer fragt, wer heute im Tor spiele.
Paul fragt Lena: „Hast du meinen Stift?“ => Paul fragt Lena, ob sie seinen Stift habe.
Die Kinder rufen: „Wir haben gewonnen!“ => Die Kinder rufen, sie hätten gewonnen.
Die Eltern sagen: „Wir kommen später.“ => Die Eltern sagen, sie würden später kommen. (auch: kämen)
Der Arzt sagt zu Lisa: „Du darfst morgen wieder turnen.“ => Der Arzt sagt zu Lisa, sie dürfe morgen wieder turnen.
Ben erklärt: „Das Spiel ist ganz einfach.“ => Ben erklärt, das Spiel sei ganz einfach.`,
    erkennen: `Er sagt, er **sei** krank.|K1
Sie meint, sie **habe** keine Zeit.|K1
Der Wetterbericht meldet, es **werde** kälter.|K1
Er behauptet, er **könne** fliegen.|K1
Wenn ich Zeit **hätte**, käme ich mit.|K2
Ich **wäre** gern am Meer.|K2
**Könntest** du mir bitte helfen?|K2
Wenn es nicht **regnete**, gingen wir hinaus.|K2
Er **ist** heute krank.|I
Sie **hat** keine Zeit.|I
Wir **kommen** morgen.|I
Ich **kann** gut schwimmen.|I
Sie sagt, sie **komme** später.|K1
Er meint, er **wisse** es nicht.|K1
Die Zeitung schreibt, die Brücke **sei** gesperrt.|K1
Lena erzählt, ihr Bruder **habe** Fieber.|K1
Wenn ich reich **wäre**, würde ich ein Pferd kaufen.|K2
Ich **hätte** gern ein Eis.|K2
**Würdest** du mir helfen?|K2
Wenn er Zeit **hätte**, käme er mit.|K2
Er **kommt** morgen.|I
Sie **weiß** die Antwort.|I
Wir **haben** Hunger.|I
Es **regnet** seit Stunden.|I`,
    zurueck: `Lena sagt, sie sei müde. => Lena sagt: „Ich bin müde.“
Max meint, er habe keine Lust. => Max meint: „Ich habe keine Lust.“
Der Trainer sagt, das Training falle aus. => Der Trainer sagt: „Das Training fällt aus.“
Mia erzählt, ihr Hund könne Kunststücke. => Mia erzählt: „Mein Hund kann Kunststücke.“
Der Arzt sagt, Paul müsse viel trinken. => Der Arzt sagt: „Paul muss viel trinken.“
Oma fragt, ob wir Hunger hätten. => Oma fragt: „Habt ihr Hunger?“
Tim sagt, er habe keine Zeit. => Tim sagt: „Ich habe keine Zeit.“
Lena meint, ihr Rad sei kaputt. => Lena meint: „Mein Rad ist kaputt.“
Der Busfahrer sagt, der Bus fahre gleich ab. => Der Busfahrer sagt: „Der Bus fährt gleich ab.“
Mia sagt, sie wolle Tierärztin werden. => Mia sagt: „Ich will Tierärztin werden.“
Paul fragt Lena, ob sie seinen Stift habe. => Paul fragt Lena: „Hast du meinen Stift?“
Die Lehrerin sagt, der Test sei leicht. => Die Lehrerin sagt: „Der Test ist leicht.“
Ben erklärt, das Spiel sei ganz einfach. => Ben erklärt: „Das Spiel ist ganz einfach.“
Max behauptet, er kenne den Weg. => Max behauptet: „Ich kenne den Weg.“`
  },
  levels: {
    1: {
      ichkann: ['Du kannst Formen im Konjunktiv I bilden.', 'Du kannst einfache Sätze in die indirekte Rede setzen.'],
      tasks: [
        { type: 'pair', pool: 'formen', n: 8, inline: true, head: 'Indikativ', col: 'Konjunktiv I', title: 'Bilde den Konjunktiv I.', instr: 'Schreibe die Form im Konjunktiv I auf.' },
        { type: 'pair', pool: 'umformen', n: 4, filter: x => !/ob |wo |wer |hätten|würden|spielten|müsse im|gegeben/.test(x.a), title: 'Setze in die indirekte Rede.', instr: 'Schreibe den Satz ohne Anführungszeichen mit Konjunktiv I. Passe die Pronomen an.' }
      ]
    },
    2: {
      ichkann: ['Du kannst direkte Rede in indirekte Rede umformen.', 'Du kannst indirekte Rede wieder in direkte Rede umwandeln.'],
      tasks: [
        { type: 'pair', pool: 'umformen', n: 5, filter: x => !/spielten/.test(x.a), title: 'Setze in die indirekte Rede.', instr: 'Verwende den Konjunktiv I und passe die Pronomen an.' },
        { type: 'pair', pool: 'zurueck', n: 3, title: 'Zurück zur direkten Rede', instr: 'Schreibe den Satz als direkte Rede mit Doppelpunkt und Anführungszeichen.' }
      ]
    },
    3: {
      ichkann: ['Du kannst Indikativ, Konjunktiv I und Konjunktiv II unterscheiden.', 'Du weißt, wann man in der indirekten Rede den Konjunktiv II als Ersatzform verwendet.'],
      tasks: [
        { type: 'choice', pool: 'erkennen', cover: true, keys: ['I', 'K1', 'K2'], n: 6, title: 'Bestimme den Modus.', instr: 'Kreuze an.', opts: [['I', 'Indikativ'], ['K1', 'Konjunktiv I'], ['K2', 'Konjunktiv II']] },
        { type: 'pair', pool: 'umformen', n: 5, filter: x => /ob |wo |wer |hätten|würden|spielten|müsse im|gegeben|könne/.test(x.a), title: 'Setze in die indirekte Rede.', instr: 'Achtung: Fragen, Ersatzformen und Pronomen!' }
      ]
    }
  }
});
