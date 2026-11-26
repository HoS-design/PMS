/* Inhaltsangabe – 3./4. Klasse. Die Kurzgeschichten sind eigens für diese Blätter geschrieben. */
(function () {
  const { esc, sol, lines, table } = UB;
  const TEXTE = [
    { t: 'Die rote Jacke', a: 'Jana Wolf', text: 'Jeden Morgen stand Mia an der Bushaltestelle neben Leonie, die immer dieselbe rote Jacke trug. Die anderen Mädchen tuschelten darüber und lachten. Mia lachte mit, obwohl ihr dabei unwohl war. Eines Tages fehlte Leonie. In der Klasse erzählte die Lehrerin, dass Leonies Familie in eine kleinere Wohnung ziehen musste, weil ihr Vater seine Arbeit verloren hatte. Am Nachmittag ging Mia an den Kleidersäcken vorbei, die sie selbst für die Sammlung gepackt hatte. Sie dachte lange nach. Am nächsten Morgen setzte sie sich im Bus neben Leonie. „Deine Jacke hat eine schöne Farbe“, sagte sie. Leonie sah sie überrascht an und lächelte zum ersten Mal seit Wochen.',
      einl: 'In der Kurzgeschichte „Die rote Jacke“ von Jana Wolf geht es um ein Mädchen, das erkennt, wie verletzend Auslachen ist, und Mut zur Freundlichkeit zeigt.',
      kern: ['Mia lacht mit den anderen über Leonies rote Jacke, obwohl sie sich dabei unwohl fühlt.', 'Sie erfährt, dass Leonies Familie in Geldnot ist.', 'Mia denkt nach und setzt sich am nächsten Tag zu Leonie.', 'Sie macht ihr ein Kompliment, und Leonie lächelt.'] },
    { t: 'Das Handy im Schnee', a: 'Paul Reiter', text: 'Auf dem Heimweg von der Schule fand Tim im Schnee ein teures Handy. Der Bildschirm leuchtete auf: zwanzig verpasste Anrufe von „Mama“. Tims Freund Kevin grinste. „Behalt es doch! Niemand hat dich gesehen.“ Tim steckte das Handy ein und ging weiter. Zu Hause konnte er sich nicht auf die Hausübung konzentrieren. Immer wieder musste er an die vielen Anrufe denken. Schließlich ging er zur Polizeiinspektion und gab das Handy ab. Zwei Tage später läutete es an der Tür. Ein älterer Mann stand davor. „Auf diesem Handy sind die einzigen Fotos meiner verstorbenen Frau“, sagte er mit zitternder Stimme und drückte Tim fest die Hand.',
      einl: 'In der Kurzgeschichte „Das Handy im Schnee“ von Paul Reiter geht es um einen Jungen, der ein gefundenes Handy trotz Versuchung zurückgibt.',
      kern: ['Tim findet ein Handy mit vielen verpassten Anrufen.', 'Sein Freund rät ihm, es zu behalten.', 'Tim hat ein schlechtes Gewissen und gibt das Handy bei der Polizei ab.', 'Der Besitzer bedankt sich, weil auf dem Handy wertvolle Erinnerungen sind.'] },
    { t: 'Der Sprung', a: 'Lisa Hofer', text: 'Alle aus der Klasse waren schon vom Fünfmeterbrett gesprungen, nur Noah stand noch oben. Unten riefen die anderen seinen Namen. Seine Beine zitterten, und das Wasser schien unendlich weit entfernt. Er drehte sich um und wollte die Leiter wieder hinunterklettern. Da sah er seine kleine Schwester am Beckenrand, die ihm zuwinkte. Am Vormittag hatte er ihr noch erklärt, dass man vor nichts Angst haben müsse. Noah atmete tief ein, lief los und sprang. Als er wieder auftauchte, jubelte niemand – die anderen waren längst zum Buffet gegangen. Nur seine Schwester klatschte begeistert. Noah grinste. Das reichte ihm völlig.',
      einl: 'In der Kurzgeschichte „Der Sprung“ von Lisa Hofer geht es um einen Jungen, der seine Angst überwindet – nicht für die anderen, sondern für sich und seine Schwester.',
      kern: ['Noah steht als Letzter auf dem Fünfmeterbrett und hat Angst.', 'Er will schon aufgeben, als er seine Schwester sieht.', 'Er überwindet sich und springt.', 'Nur seine Schwester jubelt, und das genügt Noah.'] },
    { t: 'Funkstille', a: 'Eva Brunner', text: 'Als in der ganzen Siedlung der Strom ausfiel, saß Familie Gruber plötzlich im Dunkeln. Kein Fernseher, kein WLAN, die Handys hatten kaum noch Akku. Paula, die sonst nur in ihrem Zimmer chattete, maulte laut. Papa holte Kerzen und ein altes Brettspiel aus dem Keller. Zuerst spielte Paula nur widerwillig mit. Doch bald lachten alle, weil Opa bei jedem Würfeln seltsame Geschichten aus seiner Kindheit erzählte. Als nach drei Stunden das Licht wieder anging, schaute sich Paula überrascht um. „Schon?“, fragte sie. Am nächsten Abend klopfte sie an die Wohnzimmertür – mit dem Brettspiel unter dem Arm.',
      einl: 'In der Kurzgeschichte „Funkstille“ von Eva Brunner geht es um ein Mädchen, das bei einem Stromausfall entdeckt, wie schön gemeinsame Zeit mit der Familie sein kann.',
      kern: ['In der Siedlung fällt der Strom aus, Paula ist verärgert.', 'Der Vater holt Kerzen und ein Brettspiel.', 'Die Familie hat viel Spaß, Opa erzählt Geschichten.', 'Als der Strom zurück ist, will Paula am nächsten Abend wieder spielen.'] },
    { t: 'Der leere Platz', a: 'Martin Steiner', text: 'Seit Wochen saß Amir in der Klasse allein in der letzten Reihe. Er war neu, sprach noch wenig Deutsch und schaute meistens aus dem Fenster. Beim Fußballspielen in der Pause wurde er nie ausgewählt. Eines Tages vergaß Lukas sein Jausenbrot. Sein Magen knurrte so laut, dass alle lachten. Ohne ein Wort zu sagen, brach Amir sein Fladenbrot in zwei Hälften und legte eine davon auf Lukas’ Tisch. Lukas war überrascht und bedankte sich verlegen. In der nächsten Pause rief er: „Amir spielt in meinem Team!“ Am nächsten Morgen war der Platz neben Amir nicht mehr leer.',
      einl: 'In der Kurzgeschichte „Der leere Platz“ von Martin Steiner geht es um einen neuen Schüler, der durch eine kleine Geste der Hilfsbereitschaft Anschluss in der Klasse findet.',
      kern: ['Amir ist neu in der Klasse und sitzt allein.', 'Lukas hat seine Jause vergessen und wird ausgelacht.', 'Amir teilt sein Brot mit Lukas.', 'Lukas nimmt Amir ins Team auf und setzt sich neben ihn.'] },
    { t: 'Das Geheimnis im Keller', a: 'Sabine Kern', text: 'Jeden Abend verschwand Opa für eine Stunde im Keller und schloss die Tür hinter sich ab. Hannah war schrecklich neugierig. Als Opa eines Nachmittags beim Arzt war, fand sie den Schlüssel in der Küchenlade. Mit klopfendem Herzen stieg sie die Treppe hinunter. Im Keller roch es nach Holz und Farbe. Unter einem Tuch stand ein wunderschönes Puppenhaus mit winzigen Möbeln und einem Namensschild: „Für Hannah“. In diesem Moment hörte sie Schritte. Opa stand in der Tür und seufzte: „Eigentlich sollte es eine Überraschung zu deinem Geburtstag sein.“ Hannah wurde rot, umarmte ihn aber fest.',
      einl: 'In der Kurzgeschichte „Das Geheimnis im Keller“ von Sabine Kern geht es um ein neugieriges Mädchen, das zu früh ein Geschenk ihres Großvaters entdeckt.',
      kern: ['Opa verbringt jeden Abend heimlich Zeit im Keller.', 'Hannah nimmt den Schlüssel und schleicht in den Keller.', 'Sie entdeckt ein Puppenhaus, das Opa für sie gebaut hat.', 'Opa ertappt sie, Hannah schämt sich und umarmt ihn.'] }
  ];
  const text = (rng) => (rng.text = rng.text || rng.fresh(TEXTE, 1, x => '#text#' + x.t)[0]);
  const box = (x) => '<div class="story"><h4>' + esc(x.t) + ' <span class="hint">(Kurzgeschichte von ' + esc(x.a) + ')</span></h4>' + esc(x.text) + '</div>';

  const lesen = (rng) => { const x = text(rng); return { title: 'Lies die Kurzgeschichte.', instr: 'Lies zweimal und unterstreiche die wichtigsten Handlungsschritte.', body: box(x), sol: box(x) }; };
  const einleitung = (rng) => { const x = text(rng); return { title: 'Der Einleitungssatz', instr: 'Schreibe einen Einleitungssatz: Textsorte, Titel, Autor/Autorin und Thema (Worum geht es?).', body: lines(2), sol: '<div class="item">' + sol(esc(x.einl)) + '</div>' }; };
  const kern = (rng) => {
    const x = text(rng);
    return { title: 'Die Handlungsschritte', instr: 'Fasse die Handlung in vier Schritten zusammen – im Präsens.', body: table(['', 'Handlungsschritt'], x.kern.map((k, i) => [String(i + 1) + '.', '']), 'plan sm'), sol: table(['', 'Handlungsschritt'], x.kern.map((k, i) => [String(i + 1) + '.', sol(esc(k))])) };
  };
  const schreiben = (rng) => {
    const x = text(rng);
    const check = ['Einleitungssatz', 'Präsens', 'eigene Worte', 'keine wörtliche Rede', 'sachlich, ohne Meinung', 'wichtigste Schritte in der richtigen Reihenfolge', 'kürzer als das Original'];
    return { title: 'Schreibe die Inhaltsangabe.', instr: '', body: '<div class="checklist"><b>Checkliste:</b> ' + check.map(c => '☐ ' + esc(c)).join('&nbsp;&nbsp; ') + '</div><div class="item"><b>Schreibe deine Inhaltsangabe (etwa 80–120 Wörter) in dein Heft.</b></div>', sol: '<div class="item">' + sol(esc(x.einl)) + '</div><ul class="solist">' + x.kern.map(k => '<li>' + sol(esc(k)) + '</li>').join('') + '</ul>' };
  };

  UB.simple({
    id: 'inhaltsangabe', title: 'Inhaltsangabe', area: 'schreiben', klassen: [3, 4], img: 'MiniHoS_Lesen_Buch-Sitzend',
    pool: () => TEXTE.map(x => box(x) + '<div class="item"><b>Einleitung:</b> ' + esc(x.einl) + '</div><ol class="pool-ol">' + x.kern.map(k => '<li>' + esc(k) + '</li>').join('') + '</ol>').join(''),
    merk: '<b>Inhaltsangabe</b>: kurze, sachliche Zusammenfassung eines Textes. <b>Einleitungssatz</b>: Textsorte, Titel, Autor/Autorin, (Erscheinungsjahr) und Thema – „In der Kurzgeschichte „…“ von … geht es um …“. <b>Hauptteil</b>: die wichtigsten Handlungsschritte in der richtigen Reihenfolge. Zeitform: <b>Präsens</b> (Vorzeitiges im Perfekt). Keine wörtliche Rede – stattdessen indirekte Rede oder Umschreibung. Keine Spannung, keine eigene Meinung, eigene Worte statt Zitate.',
    pools: {
      merkmal: `Präsens als Zeitform|J
wörtliche Rede übernehmen|N
eigene Meinung im Hauptteil|N
Einleitungssatz mit Textsorte, Titel, Autor und Thema|J
sachliche Sprache|J
spannende Ausschmückungen|N
wichtigste Handlungsschritte in der richtigen Reihenfolge|J
ganze Sätze aus dem Text abschreiben|N
kürzer als der Originaltext|J
Präteritum als Zeitform|N`,
      praesens: `Tom rannte zum Bahnhof. => Tom rennt zum Bahnhof.
Lisa fand einen Brief. => Lisa findet einen Brief.
Die Kinder stritten sich. => Die Kinder streiten sich.
Er hatte den Schlüssel vergessen und kehrte um. => Er hat den Schlüssel vergessen und kehrt um.
Mia gewann das Rennen. => Mia gewinnt das Rennen.
Nachdem sie gegessen hatten, gingen sie hinaus. => Nachdem sie gegessen haben, gehen sie hinaus.
Der Hund lief davon. => Der Hund läuft davon.
Sie wusste nicht, was sie tun sollte. => Sie weiß nicht, was sie tun soll.
Die Kinder liefen in den Wald. => Die Kinder laufen in den Wald.
Opa erzählte eine Geschichte. => Opa erzählt eine Geschichte.
Sie hatte Angst und versteckte sich. => Sie hat Angst und versteckt sich.
Tim gab das Handy ab. => Tim gibt das Handy ab.
Nachdem er aufgewacht war, rannte er los. => Nachdem er aufgewacht ist, rennt er los.
Mia schwieg. => Mia schweigt.`,
      rede: `„Ich komme nicht mit“, sagte Lisa. => Lisa weigert sich mitzukommen. / Lisa sagt, sie komme nicht mit.
„Gib mir sofort das Handy!“, rief der Vater. => Der Vater fordert das Handy zurück.
„Kannst du mir helfen?“, fragte Tim. => Tim bittet um Hilfe.
„Es tut mir leid“, flüsterte Mia. => Mia entschuldigt sich.
„Das war ich nicht!“, rief Ben. => Ben streitet die Tat ab.
„Du bist meine beste Freundin“, sagte Lena. => Lena bezeichnet sie als ihre beste Freundin.
„Wir müssen sofort los!“, drängte Mama. => Die Mutter drängt zum Aufbruch.
„Danke für deine Hilfe“, sagte der Mann. => Der Mann bedankt sich für die Hilfe.
„Ich habe Angst“, flüsterte Noah. => Noah gibt zu, dass er Angst hat.
„Komm sofort nach Hause!“, rief Mama. => Die Mutter ruft ihn nach Hause.
„Das ist mein Platz!“, schrie Tom. => Tom beansprucht den Platz für sich.
„Willst du mitspielen?“, fragte Lena. => Lena lädt sie zum Mitspielen ein.
„Gut gemacht!“, sagte der Trainer. => Der Trainer lobt sie.
„Ich verrate nichts“, versprach Max. => Max verspricht, nichts zu verraten.`,
      einleitung: `Kurzgeschichte – „Der Fahrstuhl“ – Anna Berger – 2019 – ein Mädchen überwindet seine Angst => In der Kurzgeschichte „Der Fahrstuhl“ von Anna Berger aus dem Jahr 2019 geht es um ein Mädchen, das seine Angst überwindet.
Fabel – „Der Löwe und die Maus“ – Äsop – Hilfsbereitschaft von Schwachen => In der Fabel „Der Löwe und die Maus“ von Äsop geht es darum, dass auch Schwache den Starken helfen können.
Jugendbuch – „Sommer am See“ – Tom Bauer – 2021 – Freundschaft zwischen zwei sehr verschiedenen Jungen => Im Jugendbuch „Sommer am See“ von Tom Bauer aus dem Jahr 2021 geht es um die Freundschaft zwischen zwei sehr verschiedenen Jungen.
Zeitungsbericht – „Hund rettet Wanderer“ – 2024 – ein Hund findet einen verletzten Wanderer => Im Zeitungsbericht „Hund rettet Wanderer“ aus dem Jahr 2024 geht es um einen Hund, der einen verletzten Wanderer findet.
Kurzgeschichte – „Die Mutprobe“ – Lena Huber – 2020 – ein Junge lässt sich nicht zu einer gefährlichen Mutprobe überreden => In der Kurzgeschichte „Die Mutprobe“ von Lena Huber aus dem Jahr 2020 geht es um einen Jungen, der sich nicht zu einer gefährlichen Mutprobe überreden lässt.
Fabel – „Der Fuchs und der Rabe“ – Äsop – Schmeichelei => In der Fabel „Der Fuchs und der Rabe“ von Äsop geht es darum, dass man Schmeichlern nicht trauen soll.`
    },
    levels: {
      1: {
        ichkann: ['Du kennst die Merkmale einer Inhaltsangabe.', 'Du kannst Sätze ins Präsens setzen.', 'Du kannst einen Einleitungssatz bilden.'],
        tasks: [
          { type: 'choice', pool: 'merkmal', cover: true, keys: ['J', 'N'], n: 6, head: 'In einer Inhaltsangabe …', title: 'Richtig oder falsch?', instr: 'Kreuze an.', opts: [['J', 'richtig'], ['N', 'falsch']] },
          { type: 'pair', pool: 'praesens', n: 4, inline: true, head: 'Präteritum', col: 'Präsens', title: 'Ins Präsens setzen', instr: 'Schreibe die Sätze im Präsens.' },
          { type: 'pair', pool: 'einleitung', n: 2, title: 'Einleitungssätze', instr: 'Bilde aus den Angaben einen vollständigen Einleitungssatz.' }
        ]
      },
      2: {
        ichkann: ['Du ersetzt wörtliche Rede durch indirekte Rede oder Umschreibungen.', 'Du kannst die Handlungsschritte eines Textes erkennen.'],
        tasks: [
          { type: 'pair', pool: 'rede', n: 2, title: 'Ohne wörtliche Rede', instr: 'Gib den Inhalt ohne wörtliche Rede wieder.' },
          { type: 'fn', fn: lesen }, { type: 'fn', fn: kern }
        ]
      },
      3: {
        ichkann: ['Du kannst eine vollständige Inhaltsangabe schreiben (Schularbeitsprobe).'],
        tasks: [{ type: 'fn', fn: lesen }, { type: 'fn', fn: einleitung }, { type: 'fn', fn: kern }, { type: 'fn', fn: schreiben }]
      }
    }
  });
})();
