/* Getrennt- und Zusammenschreibung – 3./4. Klasse (Entwurf: bitte prüfen) */
UB.simple({
  id: 'getrennt-zusammen', title: 'Getrennt oder zusammen?', area: 'rechtschreibung', klassen: [3, 4], img: 'MiniHoS_Gesicht_Nachdenken-Idee', review: true,
  merk: '<b>Getrennt</b> schreibt man meist: Nomen + Verb (Rad fahren, Klavier spielen, Ski fahren), Verb + Verb (spazieren gehen, schwimmen lernen), Zeitangaben (heute Abend, morgen früh), Fügungen mit „sein“ (da sein, zusammen sein). <b>Zusammen</b> schreibt man: Wörter mit irgend- (irgendwann, irgendwo, irgendetwas), Verben mit verblasstem Nomen (teilnehmen, stattfinden, heimgehen, eislaufen), zu-Infinitive von trennbaren Verben (aufzuräumen, mitzukommen) und Verbindungen mit neuer Gesamtbedeutung (krankschreiben, schwarzfahren). Bei „kennenlernen“ ist beides erlaubt.',
  pools: {
    wahl: `Wir gehen am Sonntag {Rad fahren|radfahren}.
Lena möchte {Klavier spielen|klavierspielen} lernen.
Im Winter gehen wir {Ski fahren|skifahren}.
Nach dem Essen wollen wir {spazieren gehen|spazierengehen}.
Mein kleiner Bruder will {schwimmen lernen|schwimmenlernen}.
Wir treffen uns {heute Abend|heuteabend}.
Wir fahren {morgen früh|morgenfrüh} los.
{Irgendwann|Irgend wann} besuche ich dich.
Hast du {irgendetwas|irgend etwas} gehört?
Ich habe meinen Schlüssel {irgendwo|irgend wo} verloren.
Wir wollen am Wettbewerb {teilnehmen|Teil nehmen}.
Das Fest wird im Garten {stattfinden|statt finden}.
Im Winter gehen wir {eislaufen|Eis laufen}.
Vergiss nicht, dein Zimmer {aufzuräumen|auf zu räumen}!
Hast du Lust {mitzukommen|mit zu kommen}?
Die Ärztin hat mich {krankgeschrieben|krank geschrieben}.
Er ist mit dem Bus {schwarzgefahren|schwarz gefahren}.
Morgen müssen alle pünktlich {da sein|dasein}.
Wir wollen {zusammen sein|zusammensein}.
Er ist schnell {heimgegangen|heim gegangen}.
Am Nachmittag gehen wir {Fußball spielen|fußballspielen}.
Ich möchte {Gitarre spielen|gitarrespielen} lernen.
Wir treffen uns {morgen Abend|morgenabend}.
{Irgendjemand|Irgend jemand} hat die Tür offen gelassen.
Kommst du {irgendwann|irgend wann} vorbei?
Wir gehen jetzt {einkaufen|ein kaufen}.
Ich habe keine Lust, {mitzuspielen|mit zu spielen}.
Lena hat versprochen, {pünktlich zu sein|pünktlichzusein}.
Der Unterricht hat schon {angefangen|an gefangen}.
Wir wollen {Ski fahren|skifahren} lernen.
Er will {Auto fahren|autofahren} lernen.
Die Klasse will beim Theaterstück {mitmachen|mit machen}.
Die Kinder sollen im Garten {spielen gehen|spielengehen}.
Nach dem Turnen sind alle {müde geworden|müdegeworden}.
Wir haben uns {gestern Abend|gesternabend} getroffen.`
  },
  levels: {
    1: {
      ichkann: ['Du schreibst Nomen + Verb und Verb + Verb getrennt.', 'Du schreibst Wörter mit irgend- zusammen.'],
      tasks: [
        { type: 'merk', title: 'Die wichtigsten Regeln', html: 'Getrennt: Nomen + Verb (Rad fahren), Verb + Verb (spazieren gehen), Zeitangaben (heute Abend). Zusammen: irgend- (irgendwann), teilnehmen, stattfinden, eislaufen, zu-Infinitive (aufzuräumen).' },
        { type: 'gap', pool: 'wahl', n: 8, filter: x => /Rad|Klavier|spazieren|schwimmen|Irgend|irgend|heute Abend|morgen früh|Fußball|Gitarre|Auto|morgen Abend|gestern Abend|spielen gehen/.test(x.q), title: 'Getrennt oder zusammen?', instr: 'Kreise die richtige Schreibung ein.' }
      ]
    },
    2: {
      ichkann: ['Du kennst die wichtigsten Regeln der Getrennt- und Zusammenschreibung.', 'Du schreibst zu-Infinitive richtig.'],
      tasks: [
        { type: 'merk', title: 'Die wichtigsten Regeln', html: 'Getrennt: Nomen + Verb (Rad fahren), Verb + Verb (spazieren gehen), Zeitangaben (heute Abend). Zusammen: irgend- (irgendwann), teilnehmen, stattfinden, eislaufen, zu-Infinitive (aufzuräumen).' },
        { type: 'gap', pool: 'wahl', n: 10, filter: x => !/schwarz|krank|zusammen sein/.test(x.q), title: 'Getrennt oder zusammen?', instr: 'Kreise die richtige Schreibung ein.' }
      ]
    },
    3: {
      ichkann: ['Du erkennst Verbindungen mit neuer Gesamtbedeutung.', 'Du kannst deine Entscheidung mit einer Regel begründen.'],
      tasks: [
        { type: 'gap', pool: 'wahl', n: 10, title: 'Getrennt oder zusammen?', instr: 'Kreise ein. Schreibe bei drei Sätzen die Regel an den Rand.' }
      ]
    }
  }
});
