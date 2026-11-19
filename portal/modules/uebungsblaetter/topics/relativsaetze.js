/* Relativsätze und Attribute – 3. Klasse */
UB.simple({
  id: 'relativsaetze', title: 'Relativsätze und Attribute', area: 'sprache', klassen: [3], img: 'MiniHoS_Forschen_Lupe',
  merk: 'Ein <b>Relativsatz</b> beschreibt ein Nomen genauer. Er beginnt mit einem Relativpronomen (der, die, das, dem, den, dessen, deren, welcher …), das Verb steht am Ende. Das Relativpronomen richtet sich im Geschlecht nach dem Bezugswort, der Fall ergibt sich aus dem Relativsatz. Relativsätze werden mit Beistrich abgetrennt, eingeschobene mit zwei Beistrichen. <b>Attribute</b> sind Beifügungen zu einem Nomen: Adjektivattribut (das <u>rote</u> Auto), Genitivattribut (das Auto <u>meines Vaters</u>), präpositionales Attribut (das Haus <u>am See</u>), Apposition (Tom, <u>mein Freund</u>, …), Relativsatz (Attributsatz).',
  pools: {
    pronomen: `Das ist der Hund, {der|den|dem} immer bellt.
Das ist der Hund, {den|der|dem} ich gefüttert habe.
Das ist der Hund, {dem|der|den} ich einen Knochen gebe.
Die Frau, {die|der|deren} dort steht, ist meine Lehrerin.
Die Frau, {der|die|deren} ich geholfen habe, war sehr dankbar.
Das Buch, {das|dass|dem} ich lese, ist spannend.
Das Kind, {dessen|das|dem} Ball verloren ging, weint.
Die Kinder, {deren|die|denen} Eltern warten, gehen zum Ausgang.
Der Mann, {dessen|der|dem} Auto kaputt ist, ruft den Abschleppdienst.
Die Freunde, {denen|die|deren} ich vertraue, verraten nichts.
Der Zug, {mit dem|mit den|mit der} wir fahren, ist pünktlich.
Die Stadt, {in der|in die|in dem} ich wohne, liegt an der Mur.
Das ist das Fahrrad, {das|dem|dessen} mir Opa geschenkt hat.
Der Lehrer, {dem|den|der} wir zuhören, erzählt spannend.
Die Kinder, {die|denen|deren} im Hof spielen, sind laut.
Die Katze, {deren|die|der} Fell weiß ist, heißt Flocke.
Der Junge, {den|dem|der} ich angerufen habe, kommt gleich.
Das Haus, {in dem|in das|in der} wir wohnen, ist alt.
Die Freundin, {der|die|deren} ich ein Buch geliehen habe, ruft an.
Der Baum, {der|den|dem} vor dem Haus steht, ist hundert Jahre alt.
Die Spieler, {denen|die|deren} der Trainer gratuliert, jubeln.
Der Film, {den|der|dem} wir gestern gesehen haben, war spannend.
Das Mädchen, {dessen|das|dem} Hund entlaufen ist, weint.
Die Stadt, {in die|in der|in dem} wir fahren, liegt am Meer.
Die Frau, {mit der|mit die|mit dem} ich gesprochen habe, ist Ärztin.
Der Stift, {mit dem|mit den|mit der} ich schreibe, ist leer.
Das Lied, {das|dass|den} im Radio läuft, gefällt mir.
Die Nachbarn, {deren|die|denen} Garten so schön ist, sind nett.
Der Mann, {dem|den|dessen} ich den Weg erklärt habe, bedankt sich.
Die Schule, {die|der|deren} ich besuche, ist groß.`,
    verbinden: `Ich lese ein Buch. Das Buch ist spannend. => Ich lese ein Buch, das spannend ist.
Das ist mein Freund. Er wohnt in Graz. => Das ist mein Freund, der in Graz wohnt.
Der Ball liegt im Garten. Ich habe ihn gesucht. => Der Ball, den ich gesucht habe, liegt im Garten.
Die Lehrerin ist nett. Wir mögen sie sehr. => Die Lehrerin, die wir sehr mögen, ist nett.
Das Mädchen gewinnt. Ihm gehört das rote Rad. => Das Mädchen, dem das rote Rad gehört, gewinnt.
Der Nachbar kommt zu Besuch. Sein Hund ist entlaufen. => Der Nachbar, dessen Hund entlaufen ist, kommt zu Besuch.
Wir besuchen die Burg. Sie steht auf dem Berg. => Wir besuchen die Burg, die auf dem Berg steht.
Der Film war lustig. Wir haben ihn gestern gesehen. => Der Film, den wir gestern gesehen haben, war lustig.
Ich helfe dem Mann. Er hat sich verlaufen. => Ich helfe dem Mann, der sich verlaufen hat.
Die Schüler bekommen eine Urkunde. Ihnen ist das Projekt gelungen. => Die Schüler, denen das Projekt gelungen ist, bekommen eine Urkunde.
Ich habe einen Freund. Er wohnt in Wien. => Ich habe einen Freund, der in Wien wohnt.
Die Jacke ist warm. Ich habe sie gekauft. => Die Jacke, die ich gekauft habe, ist warm.
Das ist die Lehrerin. Ihr gehört das Auto. => Das ist die Lehrerin, der das Auto gehört.
Wir besuchen die Großeltern. Sie wohnen am Land. => Wir besuchen die Großeltern, die am Land wohnen.
Das Buch liegt auf dem Tisch. Du suchst es. => Das Buch, das du suchst, liegt auf dem Tisch.
Ich danke der Frau. Sie hat mir geholfen. => Ich danke der Frau, die mir geholfen hat.
Das ist der Hund. Ich gehe mit ihm spazieren. => Das ist der Hund, mit dem ich spazieren gehe.
Die Kinder spielen. Ihre Eltern sitzen im Café. => Die Kinder, deren Eltern im Café sitzen, spielen.
Der Zug hat Verspätung. Wir warten auf ihn. => Der Zug, auf den wir warten, hat Verspätung.
Die Torte schmeckt gut. Mama hat sie gebacken. => Die Torte, die Mama gebacken hat, schmeckt gut.
Das ist mein Onkel. Ich habe ihm geschrieben. => Das ist mein Onkel, dem ich geschrieben habe.
Der See ist sehr tief. Wir baden in ihm. => Der See, in dem wir baden, ist sehr tief.
Die Freunde kommen. Ich habe sie eingeladen. => Die Freunde, die ich eingeladen habe, kommen.
Der Junge lacht. Sein Drachen fliegt hoch. => Der Junge, dessen Drachen hoch fliegt, lacht.`,
    beistrich: `Der Kuchen, den Oma gebacken hat, schmeckt herrlich.
Das ist das Lied, das ich so mag.
Der Bus, der zur Schule fährt, hat Verspätung.
Ich kenne den Jungen, der dort Fußball spielt.
Die Jacke, die du trägst, ist schön.
Das Haus, in dem ich wohne, ist sehr alt.
Wir suchen die Katze, die entlaufen ist.
Der Lehrer, dessen Tasche verschwunden ist, sucht überall.
Die Lehrerin, die uns Mathe unterrichtet, ist nett.
Ich kenne ein Lokal, das gute Pizza macht.
Der Hund, den wir gefunden haben, ist sehr lieb.
Das Mädchen, dem ich geholfen habe, bedankt sich.
Wir fahren in die Stadt, in der meine Tante wohnt.
Der Ball, mit dem wir spielen, ist alt.
Die Kinder, deren Eltern arbeiten, gehen in den Hort.
Das Buch, das du mir geliehen hast, ist toll.
Er erzählt eine Geschichte, die niemand glaubt.
Der Junge, der neben mir sitzt, heißt Jonas.
Das Fahrrad, das im Hof steht, gehört mir.
Wir besuchen das Museum, das neu eröffnet wurde.
Der Film, den wir sehen wollten, lief nicht mehr.
Die Torte, die Oma gebacken hat, ist schon weg.`,
    attribut: `das **rote** Auto|Adj
ein **spannendes** Buch|Adj
die **kleine** Katze|Adj
das Auto **meines Vaters**|Gen
die Tasche **der Lehrerin**|Gen
der Hund **unserer Nachbarn**|Gen
das Haus **am See**|Präp
die Frau **mit dem Hut**|Präp
der Weg **zur Schule**|Präp
Tom, **mein bester Freund**, kommt heute.|App
Graz, **die Hauptstadt der Steiermark**, liegt an der Mur.|App
Frau Huber, **unsere Klassenvorständin**, ist krank.|App
der Mann, **der dort steht**|Rel
das Buch, **das ich lese**|Rel
die Stadt, **in der ich wohne**|Rel
ein **lustiger** Film|Adj
der **neue** Lehrer|Adj
die **kalte** Suppe|Adj
der Garten **meiner Oma**|Gen
das Ende **des Films**|Gen
die Farbe **des Autos**|Gen
das Buch **über Dinosaurier**|Präp
ein Zimmer **mit Balkon**|Präp
die Brücke **über den Fluss**|Präp
Wien, **die Hauptstadt Österreichs**, ist groß.|App
Bello, **unser Hund**, bellt laut.|App
Herr Maier, **der Hausmeister**, repariert alles.|App
die Frau, **die dort wartet**|Rel
der Ball, **den ich suche**|Rel
das Kind, **dem ich helfe**|Rel`
  },
  levels: {
    1: {
      ichkann: ['Du kannst das passende Relativpronomen einsetzen.', 'Du setzt Beistriche bei Relativsätzen.'],
      tasks: [
        { type: 'gap', pool: 'pronomen', n: 6, filter: x => !/dessen|deren|denen| /.test(x.q.split('{')[1].split('|')[0]), title: 'Welches Relativpronomen passt?', instr: 'Kreise das richtige Wort ein.' },
        { type: 'commas', pool: 'beistrich', n: 5, title: 'Setze die Beistriche.', instr: 'Trage die fehlenden Beistriche direkt in die Sätze ein.' }
      ]
    },
    2: {
      ichkann: ['Du kannst zwei Sätze mit einem Relativsatz verbinden.', 'Du kannst auch „dem“, „den“, „dessen“ und „deren“ richtig verwenden.'],
      tasks: [
        { type: 'gap', pool: 'pronomen', n: 6, title: 'Welches Relativpronomen passt?', instr: 'Kreise das richtige Wort ein.' },
        { type: 'pair', pool: 'verbinden', n: 4, title: 'Verbinde mit einem Relativsatz.', instr: 'Der zweite Satz wird zum Relativsatz. Achte auf die Beistriche.' }
      ]
    },
    3: {
      ichkann: ['Du kennst fünf Arten von Attributen.', 'Du kannst Relativsätze bilden und als Attributsätze erkennen.'],
      tasks: [
        { type: 'choice', pool: 'attribut', cover: true, keys: ['Adj', 'Gen', 'Präp', 'App', 'Rel'], n: 8, asText: true, head: 'Ausdruck', col: 'Attribut', title: 'Bestimme die Attribute.', instr: 'Schreibe: Adjektivattribut, Genitivattribut, präpositionales Attribut, Apposition oder Relativsatz.', opts: [['Adj', 'Adjektivattribut'], ['Gen', 'Genitivattribut'], ['Präp', 'präpositionales Attribut'], ['App', 'Apposition'], ['Rel', 'Relativsatz']] },
        { type: 'pair', pool: 'verbinden', n: 4, filter: x => /dem|den|dessen|denen/.test(x.a), title: 'Verbinde mit einem Relativsatz.', instr: 'Achte auf den Fall des Relativpronomens.' }
      ]
    }
  }
});
