/* Deutsch – größere Aufgabenpools (Teil 4: Schreiben) */
(function () {
  const ext = UB.extendTopic;

  ext('bewerbung', { more: {
    lebenslauf: `Name und Vorname|J
Staatsbürgerschaft|J
Lieblingsfarbe|N
Schulabschluss|J
Ehrenamt (z. B. Jugendfeuerwehr)|J
Lieblingsband|N
Kleidergröße|N
Ferialjobs|J
Anzahl der Follower|N
Punktestand im Lieblingsspiel|N
Mitgliedschaft im Sportverein|J
Sternzeichen|N`,
    formel: `Ich bin voll zuverlässig. => Ich bin zuverlässig: In der Schule habe ich zum Beispiel alle Aufgaben pünktlich abgegeben.
Ich hab schon mal so was gemacht. => Bei einem Schnuppertag konnte ich bereits erste Erfahrungen sammeln.
Ich schick Ihnen noch mein Zeugnis. => Als Beilage finden Sie meinen Lebenslauf und mein letztes Zeugnis.`,
    auftrag4: `**Stellenanzeige:** Die Bäckerei Huber in Graz bietet ab September eine **Lehrstelle als Bäckerin / Bäcker**. Wir wünschen uns Pünktlichkeit, Teamgeist und Freude am Backen. Bewerbungen an: Bäckerei Huber, z. H. Herrn Karl Huber, Annenstraße 8, 8020 Graz. => vollständiger Briefkopf ; Bezug auf die Anzeige ; Motivation ; Stärken mit Beispielen ; Bitte um Gespräch ; Beilagen
Du möchtest in den Ferien eine **Schnupperwoche** in einer Tierarztpraxis machen. Schreibe eine **Bewerbung ohne Stellenanzeige** (Initiativbewerbung). => Briefkopf und Betreff ; warum gerade diese Praxis ; Stärken mit Beispielen ; gewünschter Zeitraum ; Bitte um Rückmeldung`
  } });

  ext('argumentieren', { more: {
    teile: `Jede Klasse sollte ein Haustier haben.|B
weil Kinder dabei Verantwortung lernen.|G
Zum Beispiel müssen die Kinder abwechselnd das Futter besorgen.|BSP
Schulen sollten mehr Ausflüge machen.|B
denn man lernt viel, wenn man Dinge selbst sieht.|G
Bei einem Besuch im Museum versteht man Geschichte zum Beispiel viel besser.|BSP`,
    argOrder: `Kinder sollten im Haushalt helfen. >> So lernen sie, selbstständig zu werden. >> Wer zum Beispiel regelmäßig kocht, kann sich später leichter selbst versorgen.
Vor unserer Schule sollte es einen Zebrastreifen geben. >> Viele Kinder müssen eine stark befahrene Straße überqueren. >> Jeden Morgen fahren zum Beispiel hunderte Autos an der Schule vorbei.`,
    gegen: `„Ausflüge kosten zu viel Geld.“ => Ausflüge kosten zwar Geld, aber man kann günstige Ziele in der Nähe wählen.
„Mit dem Rad zur Schule zu fahren, ist gefährlich.“ => Es gibt zwar Gefahren, doch mit Helm und auf Radwegen ist man gut geschützt.`,
    auftrag4: `In deiner Gemeinde soll der Jugendtreff geschlossen werden. Schreibe einen **Leserbrief** an die Gemeindezeitung. => Anrede, Anlass ; zwei Argumente mit Beispielen ; Gegenargument entkräften ; Vorschlag ; Grußformel
Schreibe eine **Stellungnahme**: „Sollen Schülerinnen und Schüler ihren Unterricht bewerten dürfen?“ => klare Meinung ; Argumente mit Begründung und Beispiel ; Gegenargument entkräften ; Schluss mit Forderung`
  } });

  ext('vorgangsbeschreibung', { more: {
    verben: `Du [schneidest] das Brot in Scheiben.
Du [streust] Zucker über den Kuchen.
Du [bestreichst] das Brot mit Butter.
Du [knetest] den Teig mit den Händen.
Du [misst] einen halben Liter Milch ab.
Du [wickelst] das Geschenk in Papier ein.
Du [bohrst] ein kleines Loch in den Deckel.
Du [schüttelst] die Flasche kräftig.
Du [mischst] die Farben auf der Palette.
Du [wiegst] 200 Gramm Mehl ab.`,
    form: `Ich schneide die Tomaten. :: man-Form => Man schneidet die Tomaten.
Ich drücke auf den Knopf. :: du-Form => Du drückst auf den Knopf.
Ich messe die Länge ab. :: man-Form => Man misst die Länge ab.
Ich knete den Teig. :: Passiv => Der Teig wird geknetet.
Ich schalte den Ofen ein. :: Passiv => Der Ofen wird eingeschaltet.
Ich wiege das Mehl ab. :: Passiv => Das Mehl wird abgewogen.`,
    passiv: `Du schälst die Kartoffeln. => Die Kartoffeln werden geschält.
Man legt das Papier auf den Tisch. => Das Papier wird auf den Tisch gelegt.
Du gießt das Wasser ab. => Das Wasser wird abgegossen.
Man streicht die Wand zweimal. => Die Wand wird zweimal gestrichen.
Du klebst die Teile zusammen. => Die Teile werden zusammengeklebt.
Man bäckt den Kuchen 40 Minuten. => Der Kuchen wird 40 Minuten gebacken.`
  } });

  ext('konjunktiv-2', { more: {
    verg: `Wenn wir früher [aufgestanden wären:aufstehen], [hätten:haben] wir den Zug erwischt.
Wenn du mich [gefragt hättest:fragen], [hätte:haben] ich dir geholfen.
Wenn ich das Buch [gelesen hätte:lesen], [wüsste:wissen] ich das Ende.
Wenn sie nicht krank [gewesen wäre:sein], [wäre:sein] sie mitgekommen.
Wenn Tom besser [aufgepasst hätte:aufpassen], [hätte:haben] er das Tor geschossen.
Wenn es nicht so kalt [gewesen wäre:sein], [wären:sein] wir baden gegangen.
Wenn ich meinen Schlüssel nicht [vergessen hätte:vergessen], [wäre:sein] ich schon zu Hause.
Wenn ihr leiser [gewesen wärt:sein], [hätte:haben] das Baby weitergeschlafen.
Wenn der Bus pünktlich [gekommen wäre:kommen], [hätten:haben] wir den Film nicht verpasst.`,
    fehler: `Wenn ich reich wäre, ich würde reisen. => Wenn ich reich wäre, würde ich reisen.
Ich hätte gerne kommen. => Ich wäre gerne gekommen.
Wenn er Zeit hätte gehabt, wäre er gekommen. => Wenn er Zeit gehabt hätte, wäre er gekommen.
Ich würde froh, wenn du kämst. => Ich wäre froh, wenn du kämst.
Wenn wir gewonnen hätten, würden wir gefeiert. => Wenn wir gewonnen hätten, hätten wir gefeiert.`
  } });

  ext('eroerterung', { more: {
    einl: `Jetzt kommen die Argumente dagegen. || Gegen ein Handyverbot spricht jedoch, dass … || b || Überleitung statt Ankündigung
Das war mein Hauptteil. Ende. || Abschließend lässt sich festhalten, dass beide Seiten gute Gründe haben. || b || ein richtiger Schlusssatz
Handys sind gut und schlecht. || Handys haben sowohl Vorteile als auch Nachteile, die man genau abwägen sollte. || b || sachlich und genau`,
    konn: `Viele Jugendliche lesen gerne. [Dennoch] greifen sie immer seltener zu Büchern.
[Zweitens] ist Bewegung gut für die Konzentration.
Der Schulweg ist gefährlich, [daher] brauchen wir einen Zebrastreifen.
[Im Gegensatz dazu] sind Tablets leichter als Schulbücher.
[Darüber hinaus] fördert Musik die Kreativität.
Ich bin für eine Schuluniform, [obwohl] sie teuer ist.`,
    verbind: `[Ein weiterer] Vorteil ist, dass man weniger tragen muss.
[Demgegenüber] steht das Problem der Ablenkung.
[Hinzu kommt], dass Tablets oft kaputtgehen.
[Folglich] sollten Schulen beide Möglichkeiten anbieten.
[Gegen] diese Meinung spricht, dass Bücher keinen Akku brauchen.
[Insgesamt] überwiegen meiner Meinung nach die Vorteile.
[Ferner] kann man digitale Bücher leichter aktualisieren.
[Einerseits] sind Bücher günstig, [andererseits] sind sie schwer.
[Somit] komme ich zu dem Schluss, dass eine Mischung sinnvoll ist.`
  } });

  ext('bericht', { more: {
    umf4: `Ein Typ hat sich voll aufgeregt und herumgeschrien. => Ein Mann beschwerte sich lautstark.
Wir haben super gewonnen, 3:0, die anderen waren echt schwach! => Unsere Mannschaft gewann das Spiel mit 3:0.
Die Polizei war mega schnell da. => Die Polizei traf nach wenigen Minuten ein.`,
    auftrag4: `Schreibe einen **Bericht für die Schülerzeitung** über den Wandertag. Notizen: Donnerstag, 3. Oktober – Klasse 3b – Wanderung auf den Schöckl – Start 8 Uhr beim Schulbus – Aufstieg drei Stunden – Mittagessen auf der Hütte – Regen beim Abstieg – Rückkehr 16 Uhr. => Überschrift und Vorspann ; Ablauf in zeitlicher Reihenfolge ; Präteritum ; sachlich
Schreibe einen **Polizeibericht** zu diesen Notizen: Samstag, 22.30 Uhr – Parkplatz beim Einkaufszentrum – zwei Jugendliche bemerken Rauch aus einem Müllcontainer – rufen die Feuerwehr (122) – Brand nach 15 Minuten gelöscht – niemand verletzt – Ursache unbekannt. => alle W-Fragen ; zeitliche Reihenfolge ; Präteritum ; sachlich, ohne Vermutungen`
  } });
})();
