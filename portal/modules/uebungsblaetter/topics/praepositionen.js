/* Präpositionen und Fall – 2. Klasse */
UB.simple({
  id: 'praepositionen', title: 'Präpositionen', area: 'sprache', klassen: [2], img: 'MiniHoS_Erklaeren_Tafel-Idee',
  merk: '<b>Präpositionen</b> (Verhältniswörter) bestimmen den Fall des folgenden Nomens. Mit dem <b>3. Fall</b> (Dativ): aus, bei, mit, nach, seit, von, zu. Mit dem <b>4. Fall</b> (Akkusativ): durch, für, gegen, ohne, um. Mit dem <b>2. Fall</b> (Genitiv): wegen, während, trotz, statt. <b>Wechselpräpositionen</b> (an, auf, hinter, in, neben, über, unter, vor, zwischen): Wo? → 3. Fall (Die Katze liegt auf dem Sofa.) – Wohin? → 4. Fall (Die Katze springt auf das Sofa.).',
  pools: {
    sorte: `aus|D
bei|D
mit|D
nach|D
seit|D
von|D
zu|D
durch|A
für|A
gegen|A
ohne|A
um|A
wegen|G
während|G
trotz|G
statt|G`,
    artikel: `Ich gehe mit {dem|den|des} Hund spazieren.
Das Geschenk ist für {den|dem|des} Opa.
Wir laufen durch {den|dem|des} Wald.
Lena kommt aus {der|die|des} Schule.
Ohne {meinen|meinem|meines} Schlüssel komme ich nicht hinein.
Nach {dem|den|des} Essen putze ich die Zähne.
Wegen {des|dem|den} Regens bleiben wir zu Hause.
Seit {dem|den|des} Sommer spiele ich Gitarre.
Wir sind gegen {den|dem|des} Plan.
Er wohnt bei {seiner|seine|seines} Tante.
Trotz {des|dem|den} Schnees fahren wir los.
Max fährt zu {seinem|seinen|seines} Freund.
Während {der|die|dem} Pause essen wir eine Jause.
Der Weg führt um {den|dem|des} See herum.`,
    wechsel: `Die Katze liegt auf **dem Sofa**.|D
Die Katze springt auf **das Sofa**.|A
Das Bild hängt an **der Wand**.|D
Ich hänge das Bild an **die Wand**.|A
Der Ball rollt unter **den Tisch**.|A
Der Ball liegt unter **dem Tisch**.|D
Wir gehen in **die Küche**.|A
Wir kochen in **der Küche**.|D
Ich stelle die Vase auf **den Tisch**.|A
Die Vase steht auf **dem Tisch**.|D
Der Vogel fliegt über **das Haus**.|A
Die Lampe hängt über **dem Esstisch**.|D
Lena setzt sich neben **ihre Freundin**.|A
Lena sitzt neben **ihrer Freundin**.|D
Das Auto fährt hinter **das Haus**.|A
Das Auto parkt hinter **dem Haus**.|D`,
    lueck: `Wir stellen das Fahrrad in [die:die/der] Garage.
Das Fahrrad steht in [der:die/der] Garage.
Ich lege das Buch auf [den:den/dem] Schreibtisch.
Das Buch liegt auf [dem:den/dem] Schreibtisch.
Der Hund kriecht unter [das:das/dem] Bett.
Der Hund schläft unter [dem:das/dem] Bett.
Tom hängt die Jacke an [den:den/dem] Haken.
Die Jacke hängt an [dem:den/dem] Haken.
Mia stellt sich vor [die:die/der] Tafel.
Mia steht vor [der:die/der] Tafel.`
  },
  levels: {
    1: {
      ichkann: ['Du kannst nach Präpositionen den richtigen Artikel wählen.', 'Du weißt, welche Präpositionen den 3. Fall und welche den 4. Fall verlangen.'],
      tasks: [
        { type: 'gap', pool: 'artikel', n: 8, filter: x => !/Wegen|Trotz|Während/.test(x.q), title: 'Welcher Artikel passt?', instr: 'Kreise die richtige Form ein.' },
        { type: 'sort', pool: 'sorte', keys: ['D', 'A'], n: 12, title: 'Ordne die Präpositionen.', instr: 'Welcher Fall folgt? Tipp: Bilde einen Satz, z. B. „mit dem Hund“.', opts: [['D', 'mit dem 3. Fall'], ['A', 'mit dem 4. Fall']] }
      ]
    },
    2: {
      ichkann: ['Du kannst Präpositionen mit dem 2., 3. und 4. Fall verwenden.', 'Du kannst mit Wo? und Wohin? den richtigen Fall finden.'],
      tasks: [
        { type: 'gap', pool: 'artikel', n: 7, title: 'Welcher Artikel passt?', instr: 'Kreise die richtige Form ein.' },
        { type: 'choice', pool: 'wechsel', cover: true, keys: ['D', 'A'], n: 6, title: 'Wo? oder Wohin?', instr: 'Frage nach dem unterstrichenen Teil und kreuze an.', opts: [['D', 'Wo? → 3. Fall'], ['A', 'Wohin? → 4. Fall']] },
        { type: 'gap', pool: 'lueck', n: 4, title: 'Setze den Artikel ein.', instr: 'Frage zuerst: Wo? oder Wohin?' }
      ]
    },
    3: {
      ichkann: ['Du kannst Präpositionen nach Dativ, Akkusativ und Genitiv ordnen.', 'Du kannst Wechselpräpositionen richtig verwenden.'],
      tasks: [
        { type: 'sort', pool: 'sorte', n: 12, cover: true, keys: ['D', 'A', 'G'], title: 'Ordne die Präpositionen.', instr: 'Welchen Fall verlangt die Präposition?', opts: [['D', 'Dativ'], ['A', 'Akkusativ'], ['G', 'Genitiv']] },
        { type: 'choice', pool: 'wechsel', cover: true, keys: ['D', 'A'], n: 5, title: 'Wechselpräpositionen', instr: 'Bestimme den Fall des unterstrichenen Teils.', opts: [['D', 'Dativ (Lage: wo?)'], ['A', 'Akkusativ (Richtung: wohin?)']] },
        { type: 'gap', pool: 'artikel', n: 4, filter: x => /Wegen|Trotz|Während|Seit/.test(x.q), title: 'Genitiv oder Dativ?', instr: 'Kreise die richtige Form ein.' }
      ]
    }
  }
});
