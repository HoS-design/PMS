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
Die Stadt, {in der|in die|in dem} ich wohne, liegt an der Mur.`,
    verbinden: `Ich lese ein Buch. Das Buch ist spannend. => Ich lese ein Buch, das spannend ist.
Das ist mein Freund. Er wohnt in Graz. => Das ist mein Freund, der in Graz wohnt.
Der Ball liegt im Garten. Ich habe ihn gesucht. => Der Ball, den ich gesucht habe, liegt im Garten.
Die Lehrerin ist nett. Wir mögen sie sehr. => Die Lehrerin, die wir sehr mögen, ist nett.
Das Mädchen gewinnt. Ihm gehört das rote Rad. => Das Mädchen, dem das rote Rad gehört, gewinnt.
Der Nachbar kommt zu Besuch. Sein Hund ist entlaufen. => Der Nachbar, dessen Hund entlaufen ist, kommt zu Besuch.
Wir besuchen die Burg. Sie steht auf dem Berg. => Wir besuchen die Burg, die auf dem Berg steht.
Der Film war lustig. Wir haben ihn gestern gesehen. => Der Film, den wir gestern gesehen haben, war lustig.
Ich helfe dem Mann. Er hat sich verlaufen. => Ich helfe dem Mann, der sich verlaufen hat.
Die Schüler bekommen eine Urkunde. Ihnen ist das Projekt gelungen. => Die Schüler, denen das Projekt gelungen ist, bekommen eine Urkunde.`,
    beistrich: `Der Kuchen, den Oma gebacken hat, schmeckt herrlich.
Das ist das Lied, das ich so mag.
Der Bus, der zur Schule fährt, hat Verspätung.
Ich kenne den Jungen, der dort Fußball spielt.
Die Jacke, die du trägst, ist schön.
Das Haus, in dem ich wohne, ist sehr alt.
Wir suchen die Katze, die entlaufen ist.
Der Lehrer, dessen Tasche verschwunden ist, sucht überall.`,
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
die Stadt, **in der ich wohne**|Rel`
  },
  levels: {
    1: {
      ichkann: ['Du kannst das passende Relativpronomen einsetzen.', 'Du setzt Beistriche bei Relativsätzen.'],
      tasks: [
        { type: 'gap', pool: 'pronomen', n: 6, filter: x => !/dessen|deren|denen|mit dem|in der/.test(x.q.split('{')[1].split('|')[0]), title: 'Welches Relativpronomen passt?', instr: 'Kreise das richtige Wort ein.' },
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
