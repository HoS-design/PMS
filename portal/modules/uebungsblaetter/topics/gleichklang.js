/* Gleich und ähnlich klingende Laute – 1./2. Klasse */
UB.simple({
  id: 'gleich-klingend', title: 'Ähnlich klingende Laute', area: 'rechtschreibung', klassen: [1, 2], img: 'MiniHoS_Gesicht_Zwinkern',
  merk: '<b>b oder p, d oder t, g oder k?</b> Verlängere das Wort: der Hund – die Hunde, gelb – gelber, der Berg – die Berge. <b>ä oder e, äu oder eu?</b> Suche ein verwandtes Wort mit a oder au: die Hände – die Hand, die Häuser – das Haus. Gibt es keines, schreibt man meist e oder eu: die Leute, heute. <b>end- oder ent-?</b> end- kommt von „Ende“ (endlich, endgültig), sonst schreibt man die Vorsilbe ent- (entdecken, entlang).',
  pools: {
    verl: `der Wal{d|t} → die Wälder
das Bil{d|t} → die Bilder
der Ber{g|k} → die Berge
gel{b|p} → gelber
der Kor{b|p} → die Körbe
das Pfer{d|t} → die Pferde
der Wal{d|t} → die Wälder
lie{b|p} → lieber
kal{t|d} → kälter
das Kin{d|t} → die Kinder
run{d|t} → runder
der Sie{g|k} → die Siege
das Lan{d|t} → die Länder
hal{b|p} → halbe
der Zwer{g|k} → die Zwerge
der Stau{b|p} → staubig
der Hu{t|d} → die Hüte
klu{g|k} → klüger`,
    verlFrei: `der Hun? => der Hund – die Hunde
gel? => gelb – gelber
der Ber? => der Berg – die Berge
das Pfer? => das Pferd – die Pferde
der Kor? => der Korb – die Körbe
klu? => klug – klüger
der Wal? => der Wald – die Wälder
der Sie? => der Sieg – die Siege
lie? => lieb – lieber
das Lan? => das Land – die Länder
der Hu? => der Hut – die Hüte
run? => rund – runder
der Zwer? => der Zwerg – die Zwerge
der Stau? => der Staub – staubig
das Kin? => das Kind – die Kinder
mil? => mild – milder
der Ta? => der Tag – die Tage
blon? => blond – blonder
hal? => halb – halbe`,
    umlaut: `die H{äu|eu}ser (Haus)
die L{eu|äu}te
die M{äu|eu}se
h{eu|äu}te
die F{eu|äu}erwehr
tr{äu|eu}men
n{eu|äu}n
die Gl{ä|e}ser
die H{ä|e}nde
k{ä|e}lter
die W{ä|e}lder
die {Ä|E}pfel
er f{ä|e}hrt
die St{ä|e}dte
das F{e|ä}ld
l{ä|e}nger
die B{äu|eu}me
das Kr{eu|äu}z
die Schl{ä|e}ge
die Z{ä|e}hne
die L{äu|eu}fer
die {Eu|Äu}le
l{äu|eu}ten
die B{eu|äu}le
die Fr{eu|äu}nde
die R{äu|eu}ber
d{eu|äu}tlich
die Kr{äu|eu}ter
die W{ä|e}nde
die B{ä|e}nke
das B{e|ä}tt
die K{ä|e}lte
die H{e|ä}fte`,
    endent: `{ent|end}decken
{end|ent}lich
{ent|end}täuscht
das Wochen{end|ent}e
{end|ent}gültig
{ent|end}scheiden
{ent|end}lang
die {End|Ent}station
{ent|end}fernt
{ent|end}wickeln
die {End|Ent}runde
{ent|end}schuldigen
{ent|end}laufen
{end|ent}los
{ent|end}schlossen
der {End|Ent}spurt
{ent|end}stehen
das {End|Ent}ergebnis
{ent|end}führen
{ent|end}zwei
die {Ent|End}täuschung
{End|Ent}lich Ferien!`
  },
  levels: {
    1: {
      ichkann: ['Du kannst mit der Verlängerungsprobe b/p, d/t und g/k unterscheiden.', 'Du findest verwandte Wörter mit a und au.'],
      tasks: [
        { type: 'gap', pool: 'verl', n: 10, filter: x => !/ss|Stric/.test(x.q), cols2: true, title: 'Verlängere!', instr: 'Die Verlängerung hilft dir. Kreise den richtigen Buchstaben ein.' },
        { type: 'gap', pool: 'umlaut', n: 8, cols2: true, filter: x => !/ä\|e|e\|ä|Ä/.test(x.q), title: 'äu oder eu?', instr: 'Gibt es ein verwandtes Wort mit au? Dann schreibst du äu. Kreise ein.' }
      ]
    },
    2: {
      ichkann: ['Du wendest die Verlängerungsprobe ohne Hilfe an.', 'Du schreibst ä/e, äu/eu und end-/ent- richtig.'],
      tasks: [
        { type: 'pair', pool: 'verlFrei', n: 6, inline: true, head: 'Wort', col: 'Verlängerung und richtige Schreibung', title: 'Verlängerungsprobe', instr: 'Verlängere das Wort und schreibe es richtig.' },
        { type: 'gap', pool: 'umlaut', n: 10, cols2: true, title: 'ä/e oder äu/eu?', instr: 'Kreise ein.' },
        { type: 'gap', pool: 'endent', n: 6, cols2: true, title: 'end- oder ent-?', instr: 'Hat das Wort mit „Ende“ zu tun? Kreise ein.' }
      ]
    },
    3: {
      ichkann: ['Du kannst Rechtschreibproben (Verlängerungsprobe, Ableitungsprobe) gezielt einsetzen.', 'Du kannst deine Schreibung begründen.'],
      tasks: [
        { type: 'pair', pool: 'verlFrei', n: 6, inline: true, head: 'Wort', col: 'Verlängerungsprobe', title: 'Verlängerungsprobe', instr: 'Schreibe die Probe und das richtige Wort auf.' },
        { type: 'gap', pool: 'umlaut', n: 10, cols2: true, title: 'Ableitungsprobe', instr: 'Kreise ein. Schreibe bei äu und ä das verwandte Wort an den Rand.' },
        { type: 'gap', pool: 'endent', n: 6, cols2: true, title: 'end- oder ent-?', instr: 'Kreise ein.' }
      ]
    }
  }
});
