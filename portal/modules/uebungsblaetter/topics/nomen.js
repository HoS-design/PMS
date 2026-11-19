/* Nomen – 1. Klasse */
UB.simple({
  id: 'nomen', title: 'Nomen', area: 'sprache', klassen: [1], img: 'MiniHoS_Lesen_Buch-Sitzend',
  merk: '<b>Nomen</b> bezeichnen Lebewesen, Dinge, Gefühle und Gedanken. Man schreibt sie groß. Jedes Nomen hat ein Geschlecht: männlich (der), weiblich (die) oder sächlich (das). Es steht in der Einzahl oder Mehrzahl. <b>Konkrete</b> Nomen kann man anfassen (Tisch), <b>abstrakte</b> nicht (Mut). Aus zwei Nomen entsteht ein <b>zusammengesetztes Nomen</b>: Haus + Tür = die Haustür. Das letzte Wort (Grundwort) bestimmt den Artikel.',
  pools: {
    artikel: `{der|die|das} Tisch
{die|der|das} Lampe
{das|der|die} Fenster
{der|die|das} Apfel
{die|der|das} Schule
{das|der|die} Buch
{der|die|das} Löffel
{die|der|das} Gabel
{das|der|die} Messer
{der|die|das} Baum
{die|der|das} Blume
{das|der|die} Pferd
{der|die|das} Regen
{die|der|das} Wolke
{das|der|die} Wetter
{der|die|das} Mut
{die|der|das} Freude
{das|der|die} Glück
{der|die|das} Bleistift
{die|der|das} Tasche
{das|der|die} Heft
{der|die|das} Zug
{die|der|das} Brücke
{das|der|die} Kind`,
    mehrzahl: `der Baum => die Bäume
das Haus => die Häuser
die Maus => die Mäuse
das Kind => die Kinder
der Apfel => die Äpfel
die Blume => die Blumen
der Vogel => die Vögel
das Buch => die Bücher
die Nacht => die Nächte
der Hund => die Hunde
das Auto => die Autos
die Hand => die Hände
der Freund => die Freunde
die Stadt => die Städte
das Glas => die Gläser
der Fuß => die Füße
die Kuh => die Kühe
das Bild => die Bilder
der Zahn => die Zähne
die Wand => die Wände`,
    konkret: `der Tisch|K
die Freude|A
der Hund|K
der Mut|A
das Fahrrad|K
die Angst|A
der Schuh|K
die Hoffnung|A
die Brille|K
das Glück|A
der Stein|K
die Wut|A
das Kissen|K
die Freundschaft|A
der Ball|K
die Idee|A
die Jacke|K
der Ärger|A
der Teller|K
die Langeweile|A`,
    zusammen: `das Haus + die Tür => die Haustür
der Schnee + der Mann => der Schneemann
die Hand + der Schuh => der Handschuh
das Fenster + das Glas => das Fensterglas
der Apfel + der Baum => der Apfelbaum
die Schule + die Tasche => die Schultasche
der Regen + der Schirm => der Regenschirm
das Bett + die Decke => die Bettdecke
der Fuß + der Ball => der Fußball
die Sonne + die Brille => die Sonnenbrille
das Wasser + die Flasche => die Wasserflasche
der Zahn + die Bürste => die Zahnbürste
die Tomate + die Suppe => die Tomatensuppe
das Rad + der Weg => der Radweg
der Käse + das Brot => das Käsebrot
der Garten + die Tür => die Gartentür
die Hand + die Tasche => die Handtasche
der Baum + das Haus => das Baumhaus
die Suppe + der Teller => der Suppenteller
der Schuh + der Karton => der Schuhkarton
das Glas + die Flasche => die Glasflasche
der Winter + die Jacke => die Winterjacke`,
    zerlegen: `die Haustür :: Bestimmungswort + Grundwort => Haus + Tür
der Schneemann :: Bestimmungswort + Grundwort => Schnee + Mann
der Handschuh :: Bestimmungswort + Grundwort => Hand + Schuh
das Klassenzimmer :: Bestimmungswort + Grundwort => Klasse + Zimmer
die Zahnbürste :: Bestimmungswort + Grundwort => Zahn + Bürste
der Apfelbaum :: Bestimmungswort + Grundwort => Apfel + Baum
das Kinderzimmer :: Bestimmungswort + Grundwort => Kinder + Zimmer
die Sonnenbrille :: Bestimmungswort + Grundwort => Sonne + Brille
der Fußball :: Bestimmungswort + Grundwort => Fuß + Ball
das Vogelnest :: Bestimmungswort + Grundwort => Vogel + Nest
das Baumhaus :: Bestimmungswort + Grundwort => Baum + Haus
der Schulweg :: Bestimmungswort + Grundwort => Schule + Weg
die Wasserflasche :: Bestimmungswort + Grundwort => Wasser + Flasche
der Regenschirm :: Bestimmungswort + Grundwort => Regen + Schirm
die Gartentür :: Bestimmungswort + Grundwort => Garten + Tür
die Winterjacke :: Bestimmungswort + Grundwort => Winter + Jacke
das Käsebrot :: Bestimmungswort + Grundwort => Käse + Brot
der Suppenteller :: Bestimmungswort + Grundwort => Suppe + Teller`,
    genus: `Mond|m
Sonne|f
Mädchen|n
Löffel|m
Gabel|f
Messer|n
Käfer|m
Brücke|f
Zimmer|n
Rucksack|m
Zeitung|f
Häuschen|n
Hunger|m
Wahrheit|f
Ergebnis|n
Igel|m
Freundschaft|f
Spiel|n`
  },
  levels: {
    1: {
      ichkann: ['Du kannst zu jedem Nomen den richtigen Artikel finden.', 'Du kannst die Mehrzahl von Nomen bilden.', 'Du kannst Nomen erkennen, die man nicht anfassen kann.'],
      tasks: [
        { type: 'gap', pool: 'artikel', n: 10, cols2: true, title: 'der, die oder das?', instr: 'Kreise den richtigen Artikel ein.' },
        { type: 'pair', pool: 'mehrzahl', n: 6, inline: true, head: 'Einzahl', col: 'Mehrzahl', title: 'Einzahl und Mehrzahl', instr: 'Schreibe die Mehrzahl mit Artikel auf.' },
        { type: 'choice', pool: 'konkret', cover: true, keys: ['K', 'A'], n: 5, head: 'Nomen', title: 'Kann man das anfassen?', instr: 'Kreuze an.', opts: [['K', 'kann ich anfassen'], ['A', 'kann ich nicht anfassen']] }
      ]
    },
    2: {
      ichkann: ['Du kannst Einzahl und Mehrzahl bilden.', 'Du kannst Nomen zusammensetzen.', 'Du kannst konkrete und abstrakte Nomen unterscheiden.'],
      tasks: [
        { type: 'pair', pool: 'mehrzahl', n: 5, inline: true, head: 'Einzahl', col: 'Mehrzahl', title: 'Einzahl und Mehrzahl', instr: 'Schreibe die Mehrzahl mit Artikel auf.' },
        { type: 'pair', pool: 'zusammen', n: 5, inline: true, head: 'Wörter', col: 'Zusammengesetztes Nomen', title: 'Setze zusammen.', instr: 'Schreibe das neue Nomen mit dem richtigen Artikel auf.' },
        { type: 'choice', pool: 'konkret', cover: true, keys: ['K', 'A'], n: 5, head: 'Nomen', title: 'Konkret oder abstrakt?', instr: 'Kreuze an.', opts: [['K', 'konkret (anfassbar)'], ['A', 'abstrakt']] }
      ]
    },
    3: {
      ichkann: ['Du kennst die Fachbegriffe Genus (maskulin, feminin, neutrum) und Numerus (Singular, Plural).', 'Du kannst Komposita in Bestimmungswort und Grundwort zerlegen.', 'Du kannst Konkreta und Abstrakta unterscheiden.'],
      tasks: [
        { type: 'choice', pool: 'genus', cover: true, keys: ['m', 'f', 'n'], n: 6, head: 'Nomen', title: 'Bestimme das Genus.', instr: 'Kreuze an.', opts: [['m', 'maskulin'], ['f', 'feminin'], ['n', 'neutrum']] },
        { type: 'pair', pool: 'zerlegen', n: 4, inline: true, head: 'Kompositum', col: 'Bestimmungswort + Grundwort', title: 'Zerlege die Komposita.', instr: 'Schreibe Bestimmungswort und Grundwort auf. Das Grundwort bestimmt den Artikel.' },
        { type: 'choice', pool: 'konkret', cover: true, keys: ['K', 'A'], n: 5, head: 'Nomen', title: 'Konkretum oder Abstraktum?', instr: 'Kreuze an.', opts: [['K', 'Konkretum'], ['A', 'Abstraktum']] }
      ]
    }
  }
});
