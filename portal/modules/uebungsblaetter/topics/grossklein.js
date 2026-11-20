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
{Paul|paul} wohnt in {Graz|graz}.
Der {Wind|wind} weht {kalt|Kalt}.
{Unsere|unsere} {Lehrerin|lehrerin} heißt Frau Berger.
{Im|im} {Sommer|sommer} fahren wir nach {Kärnten|kärnten}.
Ich {esse|Esse} gern {Äpfel|äpfel}.
Die {Kinder|kinder} {spielen|Spielen} im Hof.
Mein {Hund|hund} heißt {Bello|bello}.
Das {Wasser|wasser} ist {klar|Klar}.
{Gestern|gestern} {war|War} ich im Kino.
Die {Freundschaft|freundschaft} ist {wichtig|Wichtig}.
Am {Himmel|himmel} sind {viele|Viele} {Sterne|sterne}.
Der {Zug|zug} fährt nach {Salzburg|salzburg}.
{Wir|wir} haben große {Freude|freude}.
Die {Blumen|blumen} sind {bunt|Bunt}.
Ich {habe|Habe} keine {Angst|angst}.
{Lena|lena} trinkt einen {Tee|tee}.
Der {Mut|mut} des Feuerwehrmannes ist {groß|Groß}.
Wir {laufen|Laufen} durch den {Wald|wald}.
Die {Sonne|sonne} geht {unter|Unter}.`,
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
Beim {Spielen|spielen} vergessen wir die Zeit.
Das {Turnen|turnen} macht uns Spaß.
Ich {turne|Turne} gern.
Beim {Essen|essen} spricht man nicht.
Wir {essen|Essen} um zwölf Uhr.
Zum {Malen|malen} brauche ich Farben.
Ich {male|Male} ein Bild.
Ich habe etwas {Lustiges|lustiges} gesehen.
Das war ein {lustiger|Lustiger} Film.
Er wünscht dir viel {Glück|glück} und alles {Liebe|liebe}.
Im {Freien|freien} ist es kalt.
Sie hat nichts {Neues|neues} erzählt.
Das {Rechnen|rechnen} fällt mir leicht.
Ich kann gut {rechnen|Rechnen}.
Beim {Laufen|laufen} habe ich Seitenstechen bekommen.
Wir haben viel {Schönes|schönes} erlebt.
Er mag das {Rote|rote} am liebsten.
Vom {Schreien|schreien} bin ich heiser.
Lass das {Lachen|lachen}!
Sie {lachen|Lachen} laut.
Wir {laufen|Laufen} um die Wette.
Wir {turnen|Turnen} am Reck.
Wir {malen|Malen} ein Bild für Oma.
Wir {spielen|Spielen} im Hof Fangen.
Das ist eine {gute|Gute} Idee.
Ich habe ein {neues|Neues} Heft.
Das ist das {beste|Beste} Eis der Stadt.
Das war ein {schönes|Schönes} Fest.
Wir sehen ein {lustiges|Lustiges} Video.
Das {rote|Rote} Auto gehört mir.`,
    paar: `Der Hund ist {weg|Weg}.
Der {Weg|weg} ist steil.
Die Autos {rasen|Rasen} vorbei.
Der {Rasen|rasen} ist grün.
Der Bettler ist {arm|Arm}.
Mein {Arm|arm} tut weh.
Die Birne ist {reif|Reif}.
Am Morgen liegt {Reif|reif} auf der Wiese.
Die Musik ist {laut|Laut}.
Ich höre einen leisen {Laut|laut}.
Halte dich gut {fest|Fest}!
Das {Fest|fest} war toll.
Die {Fliegen|fliegen} summen.
Die Vögel {fliegen|Fliegen} in den Süden.
Der {Wagen|wagen} ist rot.
Wir {wagen|Wagen} den Sprung ins Wasser.
Die Blätter {fallen|Fallen} vom Baum.
Der Jäger stellt {Fallen|fallen} auf.
Der {Laden|laden} hat schon zu.
Wir {laden|Laden} dich zur Party ein.
Mein {Rücken|rücken} tut weh.
Wir {rücken|Rücken} näher zusammen.
Die {Waren|waren} im Geschäft sind teuer.
Gestern {waren|Waren} wir im Kino.
Wir {essen|Essen} heute Pizza.
Das {Essen|essen} ist fertig.
Wir sehen uns {morgen|Morgen} wieder.
Am {Morgen|morgen} scheint die Sonne.`,
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
Wir fahren an den {Stillen|stillen} Ozean.
Am {Dienstag|dienstag} haben wir Musik.
Wir haben {dienstags|Dienstags} Musik.
Heute {Morgen|morgen} hat es geschneit.
{Morgens|morgens} trinke ich Tee.
Ich trinke {morgens|Morgens} Tee.
Am {Wochenende|wochenende} fahren wir weg.
Gestern {Nachmittag|nachmittag} war ich beim Training.
Wir gehen {abends|Abends} spazieren.
Am {Abend|abend} lese ich.
Liebe Frau Berger, ich danke {Ihnen|ihnen} herzlich.
Haben {Sie|sie} gut geschlafen, Herr Maier?
Die Großeltern sagen, {sie|Sie} kommen bald.
Wir fahren zum {Wolfgangsee|wolfgangsee}.
Der {Große|große} Bär ist ein Sternbild.
Der {große|Große} Hund bellt.
Wir baden in einem {stillen|Stillen} See.
Das {rote|Rote} Auto parkt vor dem Haus.
Wir sehen uns {morgen|Morgen} wieder.
Kommt {ihr|Ihr} mit ins Kino?
Herr Maier, ist das {Ihr|ihr} Auto?
Lena und Tom? Ich habe {ihnen|Ihnen} geschrieben.
Frau Berger, ist das {Ihre|ihre} Tasche?
Die Kinder holen {ihre|Ihre} Jacken.`,
    fehler: `heute gehen wir ins kino. => Heute gehen wir ins Kino.
mein bruder hat einen neuen ball. => Mein Bruder hat einen neuen Ball.
im sommer fahren wir ans meer. => Im Sommer fahren wir ans Meer.
das schwimmen im see macht spaß. => Das Schwimmen im See macht Spaß.
beim spielen fiel lena hin. => Beim Spielen fiel Lena hin.
ich wünsche dir alles liebe. => Ich wünsche dir alles Liebe.
am freitag gehen wir wandern. => Am Freitag gehen wir wandern.
die katze schläft auf dem warmen ofen. => Die Katze schläft auf dem warmen Ofen.
zum laufen brauche ich gute schuhe. => Zum Laufen brauche ich gute Schuhe.
wir haben viel neues gelernt. => Wir haben viel Neues gelernt.
die sonne scheint hell. => Die Sonne scheint hell.
unser lehrer heißt herr gruber. => Unser Lehrer heißt Herr Gruber.
am montag haben wir turnen. => Am Montag haben wir Turnen.
das lesen macht mir spaß. => Das Lesen macht mir Spaß.
beim essen läuft kein fernseher. => Beim Essen läuft kein Fernseher.
ich habe etwas schönes gefunden. => Ich habe etwas Schönes gefunden.
wir fahren im winter nach tirol. => Wir fahren im Winter nach Tirol.
meine katze schläft gern im warmen. => Meine Katze schläft gern im Warmen.
zum basteln brauchen wir kleber. => Zum Basteln brauchen wir Kleber.
lena hat viel neues erlebt. => Lena hat viel Neues erlebt.
der hund bellt laut. => Der Hund bellt laut.
mein opa wohnt in linz. => Mein Opa wohnt in Linz.`
  },
  levels: {
    1: {
      ichkann: ['Du schreibst Nomen und Namen groß.', 'Du schreibst das erste Wort im Satz groß.'],
      cards: [{ type: 'gap', pool: 'paar' }],
      tasks: [
        { type: 'gap', pool: 'satz', n: 8, title: 'Groß oder klein?', instr: 'Kreise die richtige Schreibung ein.' },
        { type: 'error', pool: 'fehler', n: 3, filter: x => !/schwimmen|spielen|liebe|laufen|neues|lesen|essen|schönes|warmen|basteln/.test(x.q), title: 'Schreibe richtig ab.', instr: 'Hier stimmt die Groß- und Kleinschreibung nicht. Schreibe die Sätze richtig auf.' }
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
