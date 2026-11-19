/* Groß- und Kleinschreibung – 1.–3. Klasse */
UB.simple({
  id: 'gross-klein', title: 'Groß- und Kleinschreibung', area: 'rechtschreibung', klassen: [1, 2, 3], img: 'MiniHoS_Lob_Checkliste',
  merk: '<b>Groß</b> schreibt man: das erste Wort im Satz, Nomen und Namen, die höfliche Anrede (Sie, Ihnen, Ihr). <b>Nominalisierung</b>: Verben und Adjektive werden zu Nomen, wenn ein Signalwort davorsteht – Artikel (das Lesen), Präposition mit Artikel (beim Spielen, zum Lachen, im Dunkeln) oder Mengenwort (etwas Schönes, viel Neues, nichts Besonderes, alles Gute). <b>Zeitangaben</b>: am Montag, heute Abend (Nomen → groß) – montags, abends (mit -s → klein).',
  pools: {
    satz: `Der {Hund|hund} bellt im {Garten|garten}.
{Meine|meine} Schwester {liest|Liest} ein Buch.
Wir {fahren|Fahren} mit dem {Zug|zug} nach Wien.
Am {Abend|abend} {essen|Essen} wir Nudeln.
Die {Katze|katze} ist {schwarz|Schwarz}.
{Morgen|morgen} schreiben wir einen {Test|test}.
Lena hat große {Angst|angst} vor dem {Gewitter|gewitter}.
Das {Fahrrad|fahrrad} ist {kaputt|Kaputt}.
{Im|im} Winter ist es {kalt|Kalt}.
Opa erzählt eine {lustige|Lustige} {Geschichte|geschichte}.
Die {Freude|freude} über das {Geschenk|geschenk} ist groß.
{Paul|paul} wohnt in {Graz|graz}.`,
    nominal: `Beim {Schwimmen|schwimmen} bekomme ich Hunger.
Wir {schwimmen|Schwimmen} im See.
Das {Laufen|laufen} macht mir Spaß.
Ich {laufe|Laufe} jeden Tag.
Ich wünsche dir alles {Gute|gute}.
Das ist ein {gutes|Gutes} Buch.
Sie hat etwas {Spannendes|spannendes} erlebt.
Gibt es viel {Neues|neues}?
Heute ist nichts {Besonderes|besonderes} passiert.
Zum {Lesen|lesen} brauche ich eine Brille.
Im {Dunkeln|dunkeln} sehe ich nichts.
Wir lernen {lesen|Lesen} und {schreiben|Schreiben}.
Das {Schreiben|schreiben} fällt mir leicht.
Er hat wenig {Neues|neues} zu berichten.
Das {Beste|beste} kommt zum Schluss.
Beim {Spielen|spielen} vergessen wir die Zeit.`,
    zeit: `Am {Montag|montag} habe ich Turnen.
Wir haben {montags|Montags} Turnen.
Wir treffen uns heute {Abend|abend}.
Ich lese {abends|Abends} gern.
Morgen {früh|Früh} fahren wir los.
Am {Nachmittag|nachmittag} gehen wir schwimmen.
Wir gehen {nachmittags|Nachmittags} schwimmen.
Gestern {Abend|abend} war ich müde.
Könnten {Sie|sie} mir bitte helfen?
Ich danke {Ihnen|ihnen} für {Ihre|ihre} Hilfe.
Die Kinder sagen, {sie|Sie} hätten Hunger.
Das {Rote|rote} Kreuz hilft bei Unfällen.
Wir fahren an den {Stillen|stillen} Ozean.`,
    fehler: `heute gehen wir ins kino. => Heute gehen wir ins Kino.
mein bruder hat einen neuen ball. => Mein Bruder hat einen neuen Ball.
im sommer fahren wir ans meer. => Im Sommer fahren wir ans Meer.
das schwimmen im see macht spaß. => Das Schwimmen im See macht Spaß.
beim spielen fiel lena hin. => Beim Spielen fiel Lena hin.
ich wünsche dir alles liebe. => Ich wünsche dir alles Liebe.
am freitag gehen wir wandern. => Am Freitag gehen wir wandern.
die katze schläft auf dem warmen ofen. => Die Katze schläft auf dem warmen Ofen.
zum laufen brauche ich gute schuhe. => Zum Laufen brauche ich gute Schuhe.
wir haben viel neues gelernt. => Wir haben viel Neues gelernt.`
  },
  levels: {
    1: {
      ichkann: ['Du schreibst Nomen und Namen groß.', 'Du schreibst das erste Wort im Satz groß.'],
      tasks: [
        { type: 'gap', pool: 'satz', n: 8, title: 'Groß oder klein?', instr: 'Kreise die richtige Schreibung ein.' },
        { type: 'error', pool: 'fehler', n: 3, filter: x => !/schwimmen|spielen|liebe|laufen|neues/.test(x.q), title: 'Schreibe richtig ab.', instr: 'Hier stimmt die Groß- und Kleinschreibung nicht. Schreibe die Sätze richtig auf.' }
      ]
    },
    2: {
      ichkann: ['Du erkennst Signalwörter für Nominalisierungen.', 'Du schreibst nominalisierte Verben und Adjektive groß.'],
      tasks: [
        { type: 'gap', pool: 'nominal', n: 10, title: 'Groß oder klein?', instr: 'Achte auf Signalwörter: das, beim, zum, im, etwas, viel, nichts, alles. Kreise ein.' },
        { type: 'error', pool: 'fehler', n: 3, title: 'Schreibe richtig ab.', instr: 'Schreibe die Sätze in richtiger Groß- und Kleinschreibung auf.' }
      ]
    },
    3: {
      ichkann: ['Du schreibst Zeitangaben richtig.', 'Du schreibst die höfliche Anrede groß.', 'Du erkennst Nominalisierungen mit Fachbegriff.'],
      tasks: [
        { type: 'gap', pool: 'zeit', n: 8, title: 'Zeitangaben, Anrede und Namen', instr: 'Kreise die richtige Schreibung ein.' },
        { type: 'gap', pool: 'nominal', n: 6, title: 'Nominalisierung', instr: 'Kreise ein und unterstreiche das Signalwort.' }
      ]
    }
  }
});
