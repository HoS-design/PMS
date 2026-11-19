/* Bewerbung und Lebenslauf – 4. Klasse */
UB.simple({
  id: 'bewerbung', title: 'Bewerbung und Lebenslauf', area: 'schreiben', klassen: [4], img: 'MiniHoS_Lob_Daumen-Hoch',
  merk: '<b>Bewerbungsschreiben</b> (formeller Brief): Absender – Empfänger – Ort, Datum – Betreff – Anrede – Einleitung (Worauf bewerbe ich mich? Wie habe ich davon erfahren?) – Hauptteil (Warum interessiert mich der Beruf? Was kann ich? Welche Stärken habe ich – mit Beispiel?) – Schluss (Bitte um ein Gespräch oder eine Schnupperlehre) – Mit freundlichen Grüßen – Unterschrift – Beilagen. <b>Lebenslauf</b>: tabellarisch mit Foto, persönlichen Daten, Schulbildung, Praktika, Kenntnissen (Sprachen, EDV) und Interessen.',
  pools: {
    aufbau: `Absender >> Empfänger >> Ort und Datum >> Betreff >> Anrede >> Einleitung: Worauf bewerbe ich mich? >> Hauptteil: Warum gerade ich? >> Schluss: Bitte um ein Gespräch >> Grußformel und Unterschrift >> Beilagen`,
    besser: `Hi, ich will bei euch arbeiten. || Hiermit bewerbe ich mich um eine Schnupperlehre als Tischler. || b || formelle Sprache
Ich bin halt voll motiviert. || Ich bin zuverlässig und arbeite gern genau, zum Beispiel beim Bauen von Modellen im Werkunterricht. || b || Stärke mit Beispiel belegen
Ich brauche Geld, deshalb will ich den Job. || Der Beruf interessiert mich, weil ich gern mit Menschen arbeite. || b || Interesse am Beruf zeigen
Melden Sie sich halt, wenn Sie wollen. || Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr. || b || höflicher Schluss
Sehr geehrte Damen und Herren! Ich heiße Max und bin 14. || Sehr geehrte Damen und Herren, durch Ihre Anzeige auf der Lehrstellenbörse habe ich erfahren, dass Sie einen Lehrling suchen. || b || Bezug auf die Anzeige in der Einleitung
Betreff: Job || Betreff: Bewerbung um eine Lehrstelle als Einzelhandelskauffrau || b || genauer Betreff
Ich kann eh alles. || Ich arbeite gern im Team, wie bei unserem Klassenprojekt im Werkunterricht. || b || konkret statt angeberisch
Ihr Laden ist cool. || Ihr Betrieb hat mich bei meinem Schnuppertag beeindruckt. || b || formell und konkret
Ich hab keine Lust mehr auf Schule. || Ich möchte nach der Pflichtschule einen praktischen Beruf erlernen. || b || positiv formulieren
Tschüss! || Mit freundlichen Grüßen || b || passende Grußformel`,
    lebenslauf: `Geburtsdatum|J
besuchte Schulen|J
Lieblingsessen|N
Sprachkenntnisse|J
Kontaktdaten (Adresse, Telefon, E-Mail)|J
Namen meiner besten Freunde|N
Praktika und Schnuppertage|J
EDV-Kenntnisse|J
Spitzname|N
Hobbys und Interessen|J
Lieblingsserie|N
Erste-Hilfe-Kurs|J`,
    auftrag: `**Stellenanzeige:** Tischlerei Holzmann in Weiz sucht ab September einen Lehrling (m/w/d). Wir erwarten handwerkliches Geschick, Genauigkeit und Freude an der Arbeit mit Holz. Bewerbungen an: Tischlerei Holzmann, z. H. Frau Petra Holzmann, Gewerbepark 3, 8160 Weiz. => Bezug auf die Anzeige ; Interesse am Beruf begründen ; zwei Stärken mit Beispiel ; Bitte um Schnupperlehre
**Stellenanzeige:** Der Supermarkt „Frischmarkt“ in Graz bietet eine Lehrstelle als Einzelhandelskauffrau/-mann. Du bist freundlich, kontaktfreudig und rechnest gern? Dann schicke deine Bewerbung an Herrn Markus Steiner, Annenstraße 20, 8020 Graz. => Bezug auf die Anzeige ; Warum dieser Beruf? ; Stärken mit Beispiel ; höflicher Schluss
**Ferialjob:** Das Freibad Gleisdorf sucht für Juli Aushilfen an der Kassa und im Buffet (ab 15 Jahren). Bewerbungen an Frau Sabine Koller, Badgasse 1, 8200 Gleisdorf. => Zeitraum ; Erfahrungen ; Zuverlässigkeit mit Beispiel ; Bitte um Antwort
**Schnupperlehre:** Das Kfz-Unternehmen Autohaus Berger bietet Schnuppertage in der Werkstatt an. Anfragen an Herrn Thomas Berger, Industriestraße 5, 8010 Graz. => Interesse an Technik ; Was möchtest du kennenlernen? ; Wann hast du Zeit? ; formeller Schluss
**Stellenanzeige:** Die Gärtnerei Grünwald in Feldbach sucht einen Lehrling (m/w/d). Du arbeitest gern im Freien und hast Freude an Pflanzen? Bewerbung an Herrn Johann Grünwald, Gartenweg 4, 8330 Feldbach. => Bezug auf die Anzeige ; Interesse begründen ; Stärken mit Beispiel ; Bitte um Schnupperlehre
**Schnupperlehre:** Die Bäckerei Mehlstaub in Hartberg bietet Schnuppertage in der Backstube an. Anfragen an Frau Eva Mehlstaub, Hauptplatz 7, 8230 Hartberg. => Interesse ; Wann hast du Zeit? ; höflicher Schluss
**Stellenanzeige:** Das Elektrounternehmen Funke sucht Lehrlinge als Elektrotechniker (m/w/d). Wir erwarten technisches Interesse und Genauigkeit. Bewerbung an Frau Petra Funke, Industriegasse 12, 8401 Kalsdorf. => Bezug ; Interesse an Technik ; Stärken mit Beispiel ; Bitte um Gespräch
**Ferialjob:** Die Stadtbücherei sucht im August Aushilfen zum Einordnen von Büchern (ab 15 Jahren). Bewerbung an Frau Monika Leser, Bücherplatz 1, 8010 Graz. => Zeitraum ; Warum passt der Job zu dir? ; Zuverlässigkeit belegen ; Bitte um Antwort`
  },
  levels: {
    1: {
      ichkann: ['Du kennst den Aufbau eines Bewerbungsschreibens.', 'Du weißt, was in einen Lebenslauf gehört.'],
      tasks: [
        { type: 'order', pool: 'aufbau', n: 1, title: 'Aufbau eines Bewerbungsschreibens', instr: 'Nummeriere die Teile von 1 bis 10.' },
        { type: 'choice', pool: 'lebenslauf', cover: true, keys: ['J', 'N'], n: 8, head: 'Angabe', title: 'Gehört das in den Lebenslauf?', instr: 'Kreuze an.', opts: [['J', 'ja'], ['N', 'nein']] }
      ]
    },
    2: {
      ichkann: ['Du formulierst höflich und überzeugend.', 'Du kannst Stärken mit Beispielen belegen.'],
      tasks: [
        { type: 'ab', pool: 'besser', n: 4, title: 'Welcher Satz passt in eine Bewerbung?', instr: 'Kreuze an.' },
        { type: 'text', title: 'Meine Stärken', instr: 'Schreibe zwei deiner Stärken auf und belege jede mit einem Beispiel aus Schule oder Freizeit.', html: UB.lines(4), solHtml: '<div class="item"><span class="sol">Beispiel: Ich bin hilfsbereit. In der Klasse helfe ich oft Mitschülern bei Mathematik.</span></div>' }
      ]
    },
    3: {
      ichkann: ['Du kannst ein vollständiges Bewerbungsschreiben verfassen (Schularbeitsprobe).'],
      tasks: [
        { type: 'write', pool: 'auftrag', lines: 0, check: ['Absender, Empfänger, Ort/Datum, Betreff', 'Bezug auf die Anzeige', 'Interesse am Beruf', 'Stärken mit Beispiel', 'Bitte um Gespräch', 'formelle Sprache, Sie groß', 'Beilagen'], plan: [['Einleitung', 'Worauf bewerbe ich mich? Woher weiß ich davon?'], ['Hauptteil', 'Warum dieser Beruf? Was kann ich?'], ['Schluss', 'Bitte um Gespräch, Grußformel'], ['Beilagen', 'Lebenslauf, Zeugnis']], note: 'Schreibe die Bewerbung in dein Heft oder am Computer.', title: 'Schreibauftrag' },
        { type: 'ab', pool: 'besser', n: 2, title: 'Zur Kontrolle', instr: 'Kreuze an.' }
      ]
    }
  }
});
