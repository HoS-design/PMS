/* Satzarten – 1. Klasse */
UB.simple({
  id: 'satzarten', title: 'Satzarten', area: 'sprache', klassen: [1], img: 'MiniHoS_Geste_Fragezeichen',
  merk: '<b>Aussagesatz</b>: Er teilt etwas mit. Am Ende steht ein Punkt. <b>Fragesatz</b>: Am Ende steht ein Fragezeichen. W-Fragen (Ergänzungsfragen) beginnen mit einem Fragewort (Wer? Wann? Warum?), Entscheidungsfragen beginnen mit dem Verb und man antwortet mit Ja oder Nein. <b>Aufforderungssatz</b>: Man bittet oder befiehlt etwas. Am Ende steht meist ein Rufzeichen. <b>Ausrufesatz</b>: Man drückt ein Gefühl aus (Freude, Schreck, Staunen). Am Ende steht ein Rufzeichen.',
  pools: {
    zeichen: `Wann beginnt der Film{?|.|!}
Ich gehe heute ins Schwimmbad{.|?|!}
Hör sofort damit auf{!|.|?}
Hast du deine Hausübung gemacht{?|.|!}
Wir fahren morgen nach Salzburg{.|?|!}
Hilfe, ein Wespennest{!|.|?}
Wie heißt dein Hund{?|.|!}
Mein Bruder spielt gern Gitarre{.|?|!}
Schließ bitte die Tür{!|.|?}
Was für ein toller Tag{!|.|?}
Kommst du heute mit{?|.|!}
Die Schule beginnt um acht Uhr{.|?|!}
Pass auf, das Glas fällt{!|.|?}
Warum weinst du{?|.|!}
Wie spät ist es{?|.|!}
Wir fahren im Sommer ans Meer{.|?|!}
Komm sofort zurück{!|.|?}
Was für ein schönes Bild{!|.|?}
Hast du Geschwister{?|.|!}
Meine Oma wohnt in Klagenfurt{.|?|!}
Gib mir bitte das Buch{!|.|?}
Wo hast du die Schere hingelegt{?|.|!}
Hurra, wir haben Ferien{!|.|?}
Der Unterricht endet um 13 Uhr{.|?|!}
Warum lachst du{?|.|!}
Sei bitte leise{!|.|?}
Ich habe heute keine Hausübung{.|?|!}
Kannst du mir helfen{?|.|!}
Au, mein Knie{!|.|?}
Wer hat den Ball{?|.|!}`,
    art: `Wir besuchen heute die Oma.|AU
Der Zug hat Verspätung.|AU
Meine Katze heißt Mimi.|AU
Morgen schreiben wir einen Test.|AU
Wo wohnst du?|F
Hast du Hunger?|F
Wann kommt der Bus?|F
Darf ich mitspielen?|F
Mach bitte das Licht aus!|AF
Setzt euch hin!|AF
Gib mir bitte den Radiergummi!|AF
Räum dein Zimmer auf!|AF
Juhu, wir haben gewonnen!|AR
Oh, ist das schön!|AR
Au, das tut weh!|AR
So ein Pech!|AR
Ich habe zwei Brüder.|AU
Der Film dauert zwei Stunden.|AU
Im Herbst fallen die Blätter.|AU
Mein Lieblingsessen ist Pizza.|AU
Warum bist du so traurig?|F
Kommt Oma heute?|F
Wie heißt deine Lehrerin?|F
Magst du Schokolade?|F
Schließ bitte das Fenster!|AF
Hört genau zu!|AF
Bring mir bitte ein Glas Wasser!|AF
Pass gut auf!|AF
Hurra, endlich Ferien!|AR
Oje, ich habe mein Heft vergessen!|AR
Wie schön das Meer glitzert!|AR
Pfui, ist das eklig!|AR`,
    umformen: `Du kommst morgen mit. :: Entscheidungsfrage => Kommst du morgen mit?
Lena spielt Klavier. :: Entscheidungsfrage => Spielt Lena Klavier?
Der Bus fährt um sieben Uhr ab. :: W-Frage nach der Zeit => Wann fährt der Bus ab?
Max wohnt in Graz. :: W-Frage nach dem Ort => Wo wohnt Max?
Du räumst dein Zimmer auf. :: Aufforderungssatz => Räum dein Zimmer auf!
Ihr seid leise. :: Aufforderungssatz => Seid leise!
Die Oma backt einen Kuchen. :: W-Frage nach der Person => Wer backt einen Kuchen?
Wir haben heute frei. :: Entscheidungsfrage => Haben wir heute frei?
Paul ist krank, weil er nass geworden ist. :: W-Frage nach dem Grund => Warum ist Paul krank?
Du hilfst mir beim Tragen. :: Aufforderungssatz => Hilf mir beim Tragen!
Mia kauft Brot. :: W-Frage nach der Sache => Was kauft Mia?
Das Fest beginnt am Samstag. :: W-Frage nach der Zeit => Wann beginnt das Fest?
Lena wohnt in Wien. :: Entscheidungsfrage => Wohnt Lena in Wien?
Du hast deine Hausübung gemacht. :: Entscheidungsfrage => Hast du deine Hausübung gemacht?
Der Film beginnt um acht Uhr. :: W-Frage nach der Zeit => Wann beginnt der Film?
Die Katze schläft unter dem Bett. :: W-Frage nach dem Ort => Wo schläft die Katze?
Du schließt die Tür. :: Aufforderungssatz => Schließ die Tür!
Ihr hört gut zu. :: Aufforderungssatz => Hört gut zu!
Paul hat das Fenster geöffnet. :: W-Frage nach der Person => Wer hat das Fenster geöffnet?
Tom isst einen Apfel. :: W-Frage nach der Sache => Was isst Tom?
Mia weint, weil sie hingefallen ist. :: W-Frage nach dem Grund => Warum weint Mia?
Du bist pünktlich. :: Aufforderungssatz => Sei pünktlich!
Die Oma kommt morgen. :: Entscheidungsfrage => Kommt die Oma morgen?
Die Klasse fährt nach Graz. :: W-Frage nach dem Ziel => Wohin fährt die Klasse?`,
    frage: `Wohin fährst du in den Ferien?|E
Kommst du mit ins Kino?|J
Wer hat das Fenster geöffnet?|E
Ist das dein Heft?|J
Warum bist du so spät?|E
Hast du Geschwister?|J
Wie alt ist deine Schwester?|E
Kannst du schwimmen?|J
Was isst du am liebsten?|E
Gehört der Ball dir?|J
Wann beginnt die Schule?|E
Hast du Hunger?|J
Wo wohnt deine Oma?|E
Spielst du ein Instrument?|J
Warum weinst du?|E
Kommst du morgen?|J
Wie heißt dein Hund?|E
Ist das dein Fahrrad?|J
Wer hat angerufen?|E
Darf ich mitspielen?|J`
  },
  levels: {
    1: {
      ichkann: ['Du kannst die vier Satzarten unterscheiden.', 'Du setzt das richtige Satzschlusszeichen.'],
      tasks: [
        { type: 'gap', pool: 'zeichen', n: 8, title: 'Punkt, Fragezeichen oder Rufzeichen?', instr: 'Kreise das richtige Satzzeichen ein.' },
        { type: 'choice', pool: 'art', cover: true, keys: ['AU', 'F', 'AF', 'AR'], n: 8, title: 'Welche Satzart ist das?', instr: 'Kreuze an.', opts: [['AU', 'Aussage'], ['F', 'Frage'], ['AF', 'Aufforderung'], ['AR', 'Ausruf']] }
      ]
    },
    2: {
      ichkann: ['Du kannst Satzarten bestimmen.', 'Du kannst Aussagesätze in Fragen und Aufforderungen umformen.'],
      tasks: [
        { type: 'choice', pool: 'art', cover: true, keys: ['AU', 'F', 'AF', 'AR'], n: 6, title: 'Welche Satzart ist das?', instr: 'Kreuze an.', opts: [['AU', 'Aussagesatz'], ['F', 'Fragesatz'], ['AF', 'Aufforderungssatz'], ['AR', 'Ausrufesatz']] },
        { type: 'pair', pool: 'umformen', n: 5, title: 'Forme die Sätze um.', instr: 'Schreibe den Satz in der angegebenen Satzart mit dem richtigen Satzzeichen.' }
      ]
    },
    3: {
      ichkann: ['Du kannst Ergänzungsfragen und Entscheidungsfragen unterscheiden.', 'Du kannst Sätze gezielt in eine andere Satzart umformen.'],
      tasks: [
        { type: 'choice', pool: 'frage', cover: true, keys: ['E', 'J'], n: 6, head: 'Frage', title: 'Welche Frageart ist das?', instr: 'Kreuze an.', opts: [['E', 'Ergänzungsfrage (W-Frage)'], ['J', 'Entscheidungsfrage']] },
        { type: 'pair', pool: 'umformen', n: 6, title: 'Forme die Sätze um.', instr: 'Schreibe den Satz in der angegebenen Satzart.' }
      ]
    }
  }
});
