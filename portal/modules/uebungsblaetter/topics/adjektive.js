/* Adjektive – 1. Klasse */
UB.simple({
  id: 'adjektive', title: 'Adjektive', area: 'sprache', klassen: [1], img: 'MiniHoS_Kreativ_Bild',
  merk: '<b>Adjektive</b> sagen, wie jemand oder etwas ist: groß, freundlich, rot. Man kann sie <b>steigern</b>: Grundstufe (schnell) – Vergleichsstufe (schneller) – Höchststufe (am schnellsten). Achtung: gut – besser – am besten, viel – mehr – am meisten. Beim Vergleich: <i>so groß <b>wie</b></i> (gleich) – <i>größer <b>als</b></i> (ungleich). Mit den Nachsilben -ig, -lich, -isch, -bar, -sam, -haft bildet man Adjektive: sonnig, freundlich, stürmisch, essbar.',
  pools: {
    steigern: `schnell => schneller – am schnellsten
klein => kleiner – am kleinsten
groß => größer – am größten
alt => älter – am ältesten
jung => jünger – am jüngsten
warm => wärmer – am wärmsten
lang => länger – am längsten
laut => lauter – am lautesten
schön => schöner – am schönsten
gut => besser – am besten
viel => mehr – am meisten
hoch => höher – am höchsten
nah => näher – am nächsten
kalt => kälter – am kältesten
stark => stärker – am stärksten
dunkel => dunkler – am dunkelsten
klug => klüger – am klügsten
teuer => teurer – am teuersten`,
    stufe: `Mein Rucksack ist **schwer**.|G
Der Elefant ist **schwerer** als das Pferd.|V
Der Blauwal ist das **schwerste** Tier.|H
Heute ist es **kälter** als gestern.|V
Im Jänner ist es **am kältesten**.|H
Die Suppe ist **heiß**.|G
Lisa läuft **am schnellsten**.|H
Mein Bruder ist **älter** als ich.|V
Das Wasser ist **klar**.|G
Dieser Film ist **besser** als der andere.|V
Das ist der **beste** Kuchen.|H
Der Weg ist **lang**.|G
Der Rhein ist **länger** als die Mur.|V
Der Großglockner ist der **höchste** Berg Österreichs.|H
Unser Hund ist sehr **brav**.|G
Die Giraffe ist **größer** als das Pferd.|V
Der Gepard ist das **schnellste** Landtier.|H
Das Buch ist **spannend**.|G
Im Juli ist es **am heißesten**.|H
Mein Zimmer ist **kleiner** als deines.|V
Der Tee ist **stark**.|G
Lena singt **am schönsten**.|H
Heute bin ich **müder** als gestern.|V
Die Straße ist **breit**.|G
Das ist die **längste** Brücke der Stadt.|H
Max ist **jünger** als Paul.|V
Der Apfel ist **süß**.|G`,
    vergleich: `Tom ist größer {als|wie} Max.
Lisa ist so groß {wie|als} Anna.
Der Tee ist heißer {als|wie} der Kakao.
Mein Fahrrad ist so schnell {wie|als} deines.
Heute ist es wärmer {als|wie} gestern.
Der Test war nicht so schwer {wie|als} gedacht.
Ein Elefant ist schwerer {als|wie} eine Maus.
Ich bin genauso alt {wie|als} du.
Mathe gefällt mir besser {als|wie} Turnen.
Das Wasser ist so kalt {wie|als} Eis.
Der Zug ist schneller {als|wie} das Auto.
Mein Bruder ist so alt {wie|als} dein Bruder.
Heute ist es nicht so heiß {wie|als} gestern.
Die Katze ist kleiner {als|wie} der Hund.
Das Buch ist genauso spannend {wie|als} der Film.
Ein Hase ist schneller {als|wie} eine Schnecke.
Paul ist doppelt so groß {wie|als} sein Bruder.
Mathe ist schwerer {als|wie} Zeichnen.
Das Wasser ist so klar {wie|als} Glas.
Lena liest lieber {als|wie} sie fernsieht.`,
    bilden: `die Sonne :: -ig => sonnig
der Wind :: -ig => windig
der Durst :: -ig => durstig
der Schmutz :: -ig => schmutzig
der Freund :: -lich => freundlich
das Glück :: -lich => glücklich
die Gefahr :: -lich => gefährlich
der Sturm :: -isch => stürmisch
der Neid :: -isch => neidisch
der Regen :: -isch => regnerisch
essen :: -bar => essbar
trinken :: -bar => trinkbar
lesen :: -bar => lesbar
sparen :: -sam => sparsam
der Held :: -haft => heldenhaft
das Kind :: -lich => kindlich`,
    gegenteil: `groß => klein
alt => jung
laut => leise
hell => dunkel
schnell => langsam
warm => kalt
voll => leer
schwer => leicht
fleißig => faul
mutig => ängstlich
traurig => fröhlich
weich => hart
nass => trocken
früh => spät
dick => dünn
sauber => schmutzig`
  },
  levels: {
    1: {
      ichkann: ['Du kannst Adjektive steigern.', 'Du kannst „wie“ und „als“ beim Vergleich richtig verwenden.', 'Du kennst Gegensatzpaare.'],
      tasks: [
        { type: 'pair', pool: 'steigern', n: 6, inline: true, filter: x => !/^(gut|viel|hoch|nah|teuer|dunkel) /.test(x.raw), head: 'Grundstufe', col: 'Vergleichsstufe – Höchststufe', title: 'Steigere die Adjektive.', instr: 'Schreibe die Vergleichsstufe und die Höchststufe auf.' },
        { type: 'gap', pool: 'vergleich', n: 5, title: 'wie oder als?', instr: 'Kreise das richtige Wort ein.' },
        { type: 'pair', pool: 'gegenteil', n: 6, inline: true, head: 'Adjektiv', col: 'Gegenteil', title: 'Finde das Gegenteil.', instr: 'Schreibe das passende Adjektiv auf.' }
      ]
    },
    2: {
      ichkann: ['Du kannst auch unregelmäßige Adjektive steigern.', 'Du kannst Steigerungsstufen erkennen.', 'Du kannst mit Nachsilben Adjektive bilden.'],
      tasks: [
        { type: 'pair', pool: 'steigern', n: 5, inline: true, head: 'Grundstufe', col: 'Vergleichsstufe – Höchststufe', title: 'Steigere die Adjektive.', instr: 'Achtung: Manche Adjektive verändern sich stark.' },
        { type: 'choice', pool: 'stufe', cover: true, keys: ['G', 'V', 'H'], n: 5, title: 'Welche Stufe ist das?', instr: 'Kreuze an.', opts: [['G', 'Grundstufe'], ['V', 'Vergleichsstufe'], ['H', 'Höchststufe']] },
        { type: 'pair', pool: 'bilden', n: 5, inline: true, head: 'Wort → Nachsilbe', col: 'Adjektiv', title: 'Bilde Adjektive.', instr: 'Verwende die angegebene Nachsilbe.' }
      ]
    },
    3: {
      ichkann: ['Du kennst die Fachbegriffe Positiv, Komparativ und Superlativ.', 'Du kannst Adjektive mit Suffixen bilden.', 'Du verwendest „wie“ und „als“ beim Vergleich richtig.'],
      tasks: [
        { type: 'choice', pool: 'stufe', cover: true, keys: ['G', 'V', 'H'], n: 6, title: 'Bestimme die Steigerungsform.', instr: 'Kreuze an.', opts: [['G', 'Positiv'], ['V', 'Komparativ'], ['H', 'Superlativ']] },
        { type: 'pair', pool: 'bilden', n: 6, inline: true, head: 'Wort → Suffix', col: 'Adjektiv', title: 'Bilde Adjektive mit Suffixen.', instr: 'Achtung: Manchmal ändert sich der Wortstamm.' },
        { type: 'gap', pool: 'vergleich', n: 5, title: 'wie oder als?', instr: 'Kreise ein. Gleichheit: wie – Ungleichheit: als.' }
      ]
    }
  }
});
