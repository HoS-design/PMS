/* Konjunktiv II – 3./4. Klasse */
UB.simple({
  id: 'konjunktiv-2', title: 'Konjunktiv II', area: 'sprache', klassen: [3, 4], img: 'MiniHoS_Gesicht_Nachdenken-Idee',
  merk: 'Mit dem <b>Konjunktiv II</b> drückt man aus, was nicht wirklich ist: Wünsche (Hätte ich doch Ferien!), Bedingungen, die nicht erfüllt sind (Wenn ich reich wäre, würde ich reisen.), und höfliche Bitten (Könnten Sie mir helfen?). Man bildet ihn aus der Mitvergangenheit, oft mit Umlaut: hatte → hätte, war → wäre, kam → käme, konnte → könnte. Bei den meisten Verben verwendet man die <b>würde-Form</b>: ich würde spielen.',
  pools: {
    formen: `ich habe => ich hätte
ich bin => ich wäre
er kommt => er käme / er würde kommen
ich kann => ich könnte
du darfst => du dürftest
sie weiß => sie wüsste
es gibt => es gäbe
ich muss => ich müsste
wir werden => wir würden
ihr seid => ihr wärt
er geht => er ginge / er würde gehen
sie spielt => sie würde spielen
ich lache => ich würde lachen
wir haben => wir hätten
du bist => du wärst
sie mag => sie möchte`,
    irreal: `Wenn ich reich [wäre:sein], [würde:werden] ich eine Weltreise machen.
Wenn es nicht so kalt [wäre:sein], [könnten:können] wir baden gehen.
Wenn ich Flügel [hätte:haben], [würde:werden] ich über die Berge fliegen.
Wenn du früher aufstehen [würdest:werden], [hättest:haben] du mehr Zeit.
Wenn wir einen Hund [hätten:haben], [müssten:müssen] wir jeden Tag spazieren gehen.
Wenn ich mehr Zeit [hätte:haben], [würde:werden] ich Gitarre lernen.
Wenn Max nicht krank [wäre:sein], [käme:kommen] er mit.
Wenn ich das [wüsste:wissen], [würde:werden] ich es dir sagen.`,
    hoeflich: `Gib mir das Salz! => Würdest du mir bitte das Salz geben?
Mach das Fenster zu! => Könntest du bitte das Fenster schließen?
Hilf mir! => Würdest du mir bitte helfen?
Erklären Sie mir den Weg! => Könnten Sie mir bitte den Weg erklären?
Leih mir dein Lineal! => Würdest du mir bitte dein Lineal leihen?
Seid leise! => Könntet ihr bitte leise sein?
Ich will ein Eis. => Ich hätte gern ein Eis. / Ich möchte bitte ein Eis.
Warten Sie kurz! => Würden Sie bitte kurz warten?`,
    wunsch: `Ich habe keinen Hund. => Hätte ich doch einen Hund! / Ich wünschte, ich hätte einen Hund.
Es ist nicht Sommer. => Wäre doch Sommer! / Ich wünschte, es wäre Sommer.
Ich kann nicht fliegen. => Könnte ich doch fliegen! / Ich wünschte, ich könnte fliegen.
Meine Freundin ist nicht da. => Wäre meine Freundin doch da!
Wir haben heute Schule. => Hätten wir heute doch frei!
Ich weiß die Antwort nicht. => Wüsste ich doch die Antwort!`
  },
  levels: {
    1: {
      ichkann: ['Du kannst wichtige Formen im Konjunktiv II bilden.', 'Du kannst höfliche Bitten formulieren.'],
      tasks: [
        { type: 'pair', pool: 'formen', n: 8, inline: true, head: 'Indikativ', col: 'Konjunktiv II', title: 'Bilde den Konjunktiv II.', instr: 'Schreibe die Konjunktiv-II-Form oder die würde-Form auf.' },
        { type: 'pair', pool: 'hoeflich', n: 4, title: 'Höflich bitten', instr: 'Forme die Aufforderung in eine höfliche Bitte um.' }
      ]
    },
    2: {
      ichkann: ['Du kannst Bedingungssätze mit dem Konjunktiv II bilden.', 'Du kannst Wünsche im Konjunktiv II ausdrücken.'],
      tasks: [
        { type: 'gap', pool: 'irreal', n: 5, title: 'Was wäre, wenn …?', instr: 'Setze die Verben im Konjunktiv II ein.' },
        { type: 'pair', pool: 'wunsch', n: 3, title: 'Wünsche', instr: 'Schreibe einen Wunschsatz im Konjunktiv II.' },
        { type: 'pair', pool: 'hoeflich', n: 3, title: 'Höflich bitten', instr: 'Forme in eine höfliche Bitte um.' }
      ]
    },
    3: {
      ichkann: ['Du kannst den Konjunktiv II für Irreales, Wünsche und Höflichkeit verwenden.', 'Du kannst eigene Bedingungssätze formulieren.'],
      tasks: [
        { type: 'gap', pool: 'irreal', n: 5, title: 'Irreale Bedingungssätze', instr: 'Setze die Verben im Konjunktiv II ein.' },
        { type: 'pair', pool: 'formen', n: 6, inline: true, filter: x => !/würde spielen|würde lachen/.test(x.a), head: 'Indikativ', col: 'Konjunktiv II', title: 'Formen', instr: 'Bilde die Konjunktiv-II-Form.' },
        { type: 'text', title: 'Was wäre, wenn …', instr: 'Schreibe drei eigene Sätze mit „Wenn …, würde …“.', html: UB.lines(3), solHtml: '<div class="item"><span class="sol">Beispiel: Wenn ich zaubern könnte, würde ich die Hausübung verschwinden lassen.</span></div>' }
      ]
    }
  }
});
