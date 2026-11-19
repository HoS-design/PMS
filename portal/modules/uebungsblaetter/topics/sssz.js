/* s, ss oder ß – 1./2. Klasse */
UB.simple({
  id: 's-ss-sz', title: 's, ss oder ß', area: 'rechtschreibung', klassen: [1, 2], img: 'MiniHoS_Original_Notizbuch',
  merk: 'Nach einem <b>kurzen</b> Selbstlaut schreibt man <b>ss</b>: Fluss, essen, Schloss. Nach einem <b>langen</b> Selbstlaut oder nach einem Zwielaut (ei, au, eu) schreibt man <b>ß</b>, wenn das s scharf (stimmlos) klingt: Straße, groß, heißen, draußen. Klingt das s weich (summend), schreibt man <b>s</b>: Rose, Hase, lesen. Am Wortende hilft die <b>Verlängerungsprobe</b>: Gras – Gräser (weich → s), Fuß – Füße (scharf, lang → ß), Kuss – küssen (kurz → ss).',
  pools: {
    einsetzen: `Der Flu{ss|ß|s} ist breit.
Wir e{ss|ß|s}en Nudeln.
Die Stra{ß|ss|s}e ist na{ss|ß|s}.
Das Gra{s|ss|ß} ist grün.
Er hei{ß|ss|s}t Tom.
Ich wei{ß|ss|s} es nicht.
Der Kuchen ist sü{ß|ss|s}.
Das Gla{s|ss|ß} ist zerbrochen.
Die Mau{s|ss|ß} ist grau.
Wir spielen Fu{ß|ss|s}ball.
Wir mü{ss|ß|s}en jetzt gehen.
Das Schlo{ss|ß|s} ist alt.
Die Kinder spielen drau{ß|ss|s}en.
Der Bu{s|ss|ß} kommt gleich.
Die Ro{s|ss|ß}e duftet.
Ich gie{ß|ss|s}e die Blumen.
Gib mir einen Ku{ss|ß|s}!
Das Floß ist gro{ß|ss|s}.
Wir le{s|ss|ß}en ein Buch.
Der Ha{s|ss|ß}e hoppelt über die Wiese.
Ich mu{ss|ß|s} noch lernen.
Die Klasse ist sehr flei{ß|ss|s}ig.`,
    regel: `Fluss|K
Kuss|K
essen|K
Schloss|K
müssen|K
Tasse|K
Klasse|K
Straße|L
Fuß|L
groß|L
grüßen|L
Spieß|L
heißen|L
draußen|L
Rose|W
Hase|W
lesen|W
Wiese|W
Gras|W
Haus|W`,
    probe: `das Gra? => das Gras – die Gräser
der Fu? => der Fuß – die Füße
der Ku? => der Kuss – küssen
das Hau? => das Haus – die Häuser
der Flu? => der Fluss – die Flüsse
gro? => groß – größer
das Gla? => das Glas – die Gläser
der Strau? => der Strauß – die Sträuße
das Fa? => das Fass – die Fässer
die Mau? => die Maus – die Mäuse
der Gru? => der Gruß – die Grüße
na? => nass – nässer
der Prei? => der Preis – die Preise
der Ri? => der Riss – die Risse
das Lo? => das Los – die Lose
der Schlu? => der Schluss – die Schlüsse
hei? => heiß – heißer
das Gebi? => das Gebiss – die Gebisse
das Mo? => das Moos – die Moose
der Gu? => der Guss – die Güsse`
  },
  levels: {
    1: {
      ichkann: ['Du hörst, ob ein Selbstlaut kurz oder lang ist.', 'Du schreibst Wörter mit s, ss und ß richtig.'],
      tasks: [
        { type: 'gap', pool: 'einsetzen', n: 10, title: 's, ss oder ß?', instr: 'Sprich das Wort deutlich. Kreise den richtigen Buchstaben ein.' },
        { type: 'sort', pool: 'regel', keys: ['K', 'L'], cover: true, n: 10, title: 'Kurz oder lang?', instr: 'Ordne die Wörter: kurzer Selbstlaut → ss, langer Selbstlaut oder Zwielaut → ß.', opts: [['K', 'kurzer Selbstlaut: ss'], ['L', 'langer Selbstlaut/Zwielaut: ß']] }
      ]
    },
    2: {
      ichkann: ['Du kannst begründen, warum man s, ss oder ß schreibt.', 'Du kannst die Verlängerungsprobe anwenden.'],
      tasks: [
        { type: 'gap', pool: 'einsetzen', n: 8, title: 's, ss oder ß?', instr: 'Kreise den richtigen Buchstaben ein.' },
        { type: 'pair', pool: 'probe', n: 6, inline: true, head: 'Wort', col: 'Verlängerung und richtige Schreibung', title: 'Verlängerungsprobe', instr: 'Verlängere das Wort (Mehrzahl, Steigerung oder Verb). Dann weißt du, wie es geschrieben wird.' }
      ]
    },
    3: {
      ichkann: ['Du kennst die Regeln für s, ss und ß.', 'Du kannst stimmhaftes und stimmloses s unterscheiden.'],
      tasks: [
        { type: 'sort', pool: 'regel', cover: true, keys: ['K', 'L', 'W'], n: 12, title: 'Ordne nach der Regel.', instr: 'Warum schreibt man das Wort so?', opts: [['K', 'kurzer Vokal → ss'], ['L', 'langer Vokal/Diphthong, stimmlos → ß'], ['W', 'stimmhaftes s → s']] },
        { type: 'pair', pool: 'probe', n: 6, inline: true, head: 'Wort', col: 'Verlängerung und richtige Schreibung', title: 'Verlängerungsprobe', instr: 'Verlängere das Wort und schreibe es richtig.' }
      ]
    }
  }
});
