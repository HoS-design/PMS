/* Brief und E-Mail – 1.–3. Klasse */
UB.simple({
  id: 'brief', title: 'Brief und E-Mail', area: 'schreiben', klassen: [1, 2, 3], img: 'MiniHoS_Digital_Laptop',
  merk: '<b>Aufbau</b>: Ort und Datum – Anrede – Einleitung – Hauptteil – Schluss – Grußformel – Unterschrift. <b>Persönlicher Brief</b>: Liebe Oma, … / Hallo Max, … – Liebe Grüße. <b>Formeller Brief</b> (an Firmen, Ämter, Schule): Sehr geehrte Frau …, / Sehr geehrte Damen und Herren, … – Mit freundlichen Grüßen; dazu Absender, Empfänger und Betreff. Die höfliche Anrede schreibt man groß: Sie, Ihnen, Ihr. Nach der Anrede mit Beistrich geht es klein weiter. <b>E-Mail</b>: aussagekräftiger Betreff, kurze Absätze.',
  pools: {
    aufbau: `Ort und Datum >> Anrede >> Einleitung >> Hauptteil >> Schluss >> Grußformel >> Unterschrift
Absender >> Empfänger >> Ort und Datum >> Betreff >> Anrede >> Brieftext >> Grußformel und Unterschrift`,
    art: `Liebe Oma,|P
Sehr geehrte Frau Direktorin,|F
Hallo Max,|P
Sehr geehrte Damen und Herren,|F
Liebe Grüße|P
Mit freundlichen Grüßen|F
Hab dich lieb!|P
Ich ersuche Sie höflich um eine Antwort.|F
Bis bald!|P
Ich bedanke mich im Voraus für Ihre Mühe.|F
Wie geht es dir?|P
Sehr geehrter Herr Bürgermeister,|F`,
    besser: `Hey, ich will mein Geld zurück! || Ich ersuche Sie, mir den Kaufpreis zurückzuerstatten. || b || höflich und sachlich
Ich schreibe Ihnen, weil der Fußballplatz voll kaputt ist. || Ich wende mich an Sie, weil der Fußballplatz unserer Schule stark beschädigt ist. || b || keine Umgangssprache
Sehr geehrte Damen und Herren, Ich möchte mich beschweren. || Sehr geehrte Damen und Herren, ich möchte mich beschweren. || b || nach dem Beistrich klein weiter
Können sie mir helfen? || Können Sie mir helfen? || b || Höflichkeitsform groß
Tschüss, ciao! || Mit freundlichen Grüßen || b || passende Grußformel im formellen Brief
Betreff: Frage || Betreff: Anfrage zur Klassenfahrt am 12. Mai || b || genauer Betreff`,
    anrede: `Ich danke {Ihnen|ihnen} für {Ihre|ihre} Hilfe.
Haben {Sie|sie} meinen Brief erhalten?
Ich freue mich auf {Ihre|ihre} Antwort.
Die Kinder fragen, ob {sie|Sie} mitkommen dürfen.
Wir möchten {Sie|sie} herzlich einladen.
Gefällt {Ihnen|ihnen} unser Vorschlag?
Meine Eltern lassen {Sie|sie} grüßen.
Max und Lena sagen, {sie|Sie} hätten keine Zeit.`,
    auftrag: `Schreibe deiner Freundin oder deinem Freund eine **E-Mail aus dem Urlaub**. => Betreff ; Wo bist du? Was hast du erlebt? ; Frage an den Empfänger ; Grußformel
Bedanke dich in einem **Brief bei deinen Großeltern** für ein Geburtstagsgeschenk. => Ort und Datum ; Anrede ; Dank und warum dir das Geschenk gefällt ; Grußformel
**Lade deine Klasse** per E-Mail zu deiner Geburtstagsfeier ein. => Wann? Wo? Was ist geplant? ; Bitte um Antwort ; Grußformel
Dein neues Spiel ist nach zwei Tagen kaputt. Schreibe einen **Beschwerdebrief** an die Firma. => Absender, Empfänger, Betreff ; Was ist passiert? ; Was forderst du? ; Mit freundlichen Grüßen
Deine Klasse plant eine Projektwoche. Schreibe eine **Anfrage an eine Jugendherberge**. => Betreff ; Zeitraum und Personenanzahl ; Fragen zu Preisen und Programm ; höflicher Schluss
Schreibe der **Bürgermeisterin** einen Brief: Ihr wünscht euch einen Skaterpark. => Betreff ; Anliegen ; zwei bis drei Begründungen ; Bitte um Antwort`
  },
  levels: {
    1: {
      ichkann: ['Du kennst den Aufbau eines Briefs.', 'Du unterscheidest persönliche und formelle Anreden und Grußformeln.'],
      tasks: [
        { type: 'order', pool: 'aufbau', n: 1, filter: x => /^Ort/.test(x.raw), title: 'Wie ist ein Brief aufgebaut?', instr: 'Nummeriere die Teile von 1 bis 7.' },
        { type: 'choice', pool: 'art', cover: true, keys: ['P', 'F'], n: 6, head: 'Anrede oder Gruß', title: 'Persönlich oder formell?', instr: 'Kreuze an.', opts: [['P', 'persönlich'], ['F', 'formell']] },
        { type: 'write', pool: 'auftrag', lines: 4, filter: x => !/Beschwerde|Anfrage|Bürgermeisterin/.test(x.q), title: 'Schreibe eine kurze Nachricht.', instr: 'Vier bis fünf Sätze genügen.' }
      ]
    },
    2: {
      ichkann: ['Du schreibst die höfliche Anrede groß.', 'Du formulierst höflich und sachlich.'],
      tasks: [
        { type: 'gap', pool: 'anrede', n: 6, title: 'Groß oder klein?', instr: 'Kreise ein. Die höfliche Anrede (Sie, Ihnen, Ihr) schreibt man groß.' },
        { type: 'ab', pool: 'besser', n: 4, title: 'Was passt in einen formellen Brief?', instr: 'Kreuze an.' }
      ]
    },
    3: {
      ichkann: ['Du kannst einen formellen Brief planen und schreiben (Schularbeitsprobe).'],
      tasks: [
        { type: 'order', pool: 'aufbau', n: 1, filter: x => /^Absender/.test(x.raw), title: 'Aufbau eines formellen Briefs', instr: 'Nummeriere von 1 bis 7.' },
        { type: 'write', pool: 'auftrag', lines: 0, filter: x => /Beschwerde|Anfrage|Bürgermeisterin/.test(x.q), check: ['Absender, Empfänger, Ort/Datum, Betreff', 'passende Anrede', 'höfliche, sachliche Sprache', 'Sie/Ihnen/Ihr groß', 'klares Anliegen mit Begründung', 'Mit freundlichen Grüßen'], plan: [['Betreff', 'In wenigen Wörtern: Worum geht es?'], ['Einleitung', 'Warum schreibe ich?'], ['Hauptteil', 'Genaue Angaben, Begründungen, Fragen'], ['Schluss', 'Bitte, Dank, Grußformel']], note: 'Schreibe den Brief in dein Heft.', title: 'Schreibauftrag' }
      ]
    }
  }
});
