/* Deutsch – Stufe 4 · Profi, Teil 3 (Schreiben) */
(function () {
  const ext = UB.extendTopic;

  // ------------------------------------------------------------------ Erzählung
  ext('erzaehlung', {
    more: {
      stil4: `Dann ging ich in den Keller. Dann hörte ich ein Geräusch. :: abwechslungsreiche Satzanfänge => Langsam stieg ich in den Keller hinab. Plötzlich hörte ich ein seltsames Geräusch.
Ich hatte Angst. :: Gefühl zeigen statt nennen => Mein Herz klopfte wie wild und meine Hände zitterten.
Er sagte, ich solle weglaufen. :: wörtliche Rede => „Lauf weg!“, schrie er.
Der Hund ging schnell über die Straße. :: treffendes Verb => Der Hund raste über die Straße.
Es war ein schöner Tag. :: anschaulich beschreiben => Die Sonne strahlte und ein warmer Wind wehte über die Wiese.
Am Ende war alles gut. :: Schluss mit Gefühl => Erleichtert ließ ich mich ins Gras fallen – das war gerade noch einmal gut gegangen.`,
      auftrag4: `Schreibe eine Erzählung, die mit diesem Satz endet: **„… und seitdem schließe ich immer die Tür ab.“** => Spannungsbogen hin zum Schlusssatz ; Höhepunkt ; Gefühle und Gedanken
Erzähle ein Erlebnis aus der Sicht eines **Gegenstandes** (z. B. eines Schulrucksacks oder eines Fahrrads). => Ich-Form ; was der Gegenstand sieht, hört, fühlt ; witziger oder spannender Höhepunkt
Schreibe eine Erzählung zu den Reizwörtern: **Gewitter – Taschenlampe – Keller – Brief – Erleichterung**. => alle fünf Wörter ; sinnvolle Handlung ; Höhepunkt
Schreibe eine Erzählung mit einer **Rückblende**: Beginne mitten im Höhepunkt und erzähle dann, wie es dazu kam. => Einstieg mitten im Geschehen ; Rückblende im Plusquamperfekt ; Schluss`
    },
    level4: {
      ichkann: ['Du überarbeitest Sätze stilistisch (Satzanfänge, Verben, Gefühle, wörtliche Rede).', 'Du schreibst Erzählungen mit besonderen Vorgaben (Schlusssatz, Perspektive, Reizwörter, Rückblende).'],
      tasks: [
        { type: 'pair', pool: 'stil4', n: 4, title: 'Überarbeite die Sätze.', instr: 'Beachte den Tipp und schreibe den Satz besser.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Präteritum (Rückblende: Plusquamperfekt)', 'Spannungsbogen mit Höhepunkt', 'innere Handlung (Gefühle, Gedanken)', 'wörtliche Rede', 'treffende Verben und Adjektive', '250–300 Wörter'], plan: [['Einleitung', 'Wer? Wo? Wann? – oder Einstieg mitten im Geschehen'], ['Hauptteil', 'Spannung steigern'], ['Höhepunkt', 'ausführlich, mit Gefühlen und wörtlicher Rede'], ['Schluss', 'Auflösung, Gedanken']], note: 'Schreibe deine Erzählung in dein Heft. Kontrolliere sie danach mit der Checkliste.', title: 'Schreibauftrag' }
      ]
    }
  });

  // ------------------------------------------------------------------ Gegenstandsbeschreibung
  ext('gegenstandsbeschreibung', {
    more: {
      verben4: `Das Etui [besteht] aus festem, rotem Leder.
Auf der Vorderseite [befindet] sich ein Reißverschluss.
Der Griff [ist] mit einem Gummiband [versehen].
Ein schmaler Streifen [verläuft] quer über den Deckel.
Oben [ragt] eine kurze Antenne heraus.
Am unteren Ende [schließt] die Flasche mit einem Schraubverschluss [ab].
Die Tasche [verfügt] über zwei Seitenfächer.
Der Schirm [lässt] sich auf Knopfdruck [öffnen].`,
      auftrag4: `Du willst dein altes Fahrrad im Internet verkaufen. Schreibe eine **genaue, sachliche Beschreibung** für die Anzeige. => Marke, Farbe, Größe ; Ausstattung (Gangschaltung, Licht, Korb) ; Zustand, Gebrauchsspuren
Du hast im Museum einen **ungewöhnlichen Gegenstand** gesehen (z. B. ein altes Telefon). Beschreibe ihn so genau, dass man ihn zeichnen kann. => Gesamteindruck ; Teile von oben nach unten ; Material, Farbe, Form, Maße
Beschreibe dein **Handy** oder ein anderes Gerät für eine Verlustanzeige bei der Polizei. => Marke, Modell, Farbe ; Hülle, Kratzer, Aufkleber ; Besonderheiten`
    },
    level4: {
      ichkann: ['Du verwendest Fachverben der Beschreibung (besteht aus, befindet sich, ist versehen mit).', 'Du beschreibst Gegenstände so genau, dass man sie zeichnen oder wiedererkennen kann.'],
      tasks: [
        { type: 'gap', pool: 'verben4', n: 6, wordbox: true, title: 'Treffende Verben', instr: 'Setze die Verben aus dem Kasten ein.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Präsens', 'sachlich, ohne Wertung', 'vom Ganzen zu den Einzelheiten', 'Fachbegriffe, Maße, Material', 'treffende Verben statt „ist“ und „hat“', '150–200 Wörter'], plan: [['Einleitung', 'Was ist es? Gesamteindruck'], ['Hauptteil', 'Einzelheiten geordnet'], ['Schluss', 'Besonderheiten, Zustand']], note: 'Schreibe die Beschreibung in dein Heft.', title: 'Schreibauftrag' }
      ]
    }
  });

  // ------------------------------------------------------------------ Personenbeschreibung
  ext('personenbeschreibung', {
    more: {
      sachlich: `Sie hat wunderschöne Haare. => Sie hat schulterlange, glatte, dunkelblonde Haare.
Er sieht total komisch aus. => Er trägt eine grüne Wollmütze und eine runde Brille.
Sie ist ziemlich groß. => Sie ist etwa 1,75 m groß und schlank.
Er hat eine hässliche Narbe. => Über seiner linken Augenbraue verläuft eine kleine Narbe.
Sie trägt coole Schuhe. => Sie trägt weiße Turnschuhe mit roten Schnürsenkeln.
Er ist alt. => Er ist etwa 70 Jahre alt und hat graue Haare.`,
      auftrag4: `Beschreibe eine **erfundene Person** so genau, dass deine Mitschülerinnen und Mitschüler sie nach deinem Text zeichnen können. => Gesamteindruck ; Kopf: Gesicht, Haare, Augen ; Kleidung von oben nach unten ; auffällige Merkmale
Beschreibe eine **Figur aus einem Buch oder Film**. Beschreibe zuerst das Aussehen sachlich, danach in einem eigenen Absatz ihr Verhalten. => Aussehen sachlich ; Verhalten mit Beispielen aus der Handlung ; Absätze
Schreibe einen **Steckbrief und eine Personenbeschreibung** für eine Fahndung nach einem (erfundenen) Taschendieb. => Steckbrief: Alter, Größe, Gestalt ; Beschreibung: Gesicht, Kleidung, Merkmale ; zuletzt gesehen`
    },
    level4: {
      ichkann: ['Du ersetzt wertende durch sachliche, genaue Angaben.', 'Du beschreibst Personen so genau, dass man sie zeichnen oder erkennen kann.'],
      tasks: [
        { type: 'pair', pool: 'sachlich', n: 3, title: 'Sachlich statt wertend', instr: 'Schreibe den Satz sachlich und genau.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Präsens', 'sachlich, ohne Bewertung', 'feste Reihenfolge', 'genaue Adjektive und Maße', 'treffende Verben (trägt, reicht bis, verläuft)', '150–200 Wörter'], plan: [['Gesamteindruck', 'Alter, Größe, Gestalt'], ['Kopf', 'Gesicht, Haare, Augen'], ['Kleidung', 'von oben nach unten'], ['Merkmale', 'Besonderheiten']], note: 'Schreibe die Beschreibung in dein Heft.', title: 'Schreibauftrag' }
      ]
    }
  });

  // ------------------------------------------------------------------ Vorgangsbeschreibung
  ext('vorgangsbeschreibung', {
    more: {
      passiv: `Du schneidest die Zwiebel klein. => Die Zwiebel wird klein geschnitten.
Man füllt das Glas mit Wasser. => Das Glas wird mit Wasser gefüllt.
Du legst die Kressesamen auf die Watte. => Die Kressesamen werden auf die Watte gelegt.
Man rührt den Teig zwei Minuten lang. => Der Teig wird zwei Minuten lang gerührt.
Du stellst das Glas an einen hellen Ort. => Das Glas wird an einen hellen Ort gestellt.
Man schraubt den Deckel fest zu. => Der Deckel wird fest zugeschraubt.`,
      auftrag4: `Beschreibe ein **Experiment** für den Biologieunterricht: Kresse auf Watte wachsen lassen. Schreibe im **Passiv**. => Material ; Schritte im Passiv ; Beobachtung nach einigen Tagen
Schreibe eine **Bastelanleitung** für einen Papierflieger so genau, dass jemand ihn ohne Bild nachbauen kann. => Material ; jeder Faltschritt genau ; Tipp zum Werfen
Erkläre, wie man ein **Fahrrad-Patschen** (einen platten Reifen) repariert. Verwende die man-Form. => Werkzeug ; Schritte in der richtigen Reihenfolge ; Verbindungswörter ; Sicherheitstipp`
    },
    level4: {
      ichkann: ['Du formst Anweisungen ins Passiv um.', 'Du schreibst genaue Anleitungen ohne Bilder, einheitlich in einer Form.'],
      tasks: [
        { type: 'pair', pool: 'passiv', n: 4, title: 'Passiv', instr: 'Schreibe den Satz im Passiv.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Präsens', 'Material am Anfang', 'lückenlose, richtige Reihenfolge', 'einheitlich: Passiv oder man-Form', 'abwechslungsreiche Verbindungswörter', 'genaue Verben und Mengenangaben'], plan: [['Material', 'Was braucht man?'], ['Schritte', 'ohne Lücken, genau'], ['Schluss', 'Ergebnis, Tipp']], note: 'Schreibe die Anleitung in dein Heft.', title: 'Schreibauftrag' }
      ]
    }
  });

  // ------------------------------------------------------------------ Brief
  ext('brief', {
    more: {
      formell: `Hallo Bürgermeister, der Spielplatz ist voll kaputt! => Sehr geehrter Herr Bürgermeister, leider ist der Spielplatz in einem schlechten Zustand.
Schickt mir mal Infos über eure Zimmer. => Ich ersuche Sie, mir Informationen über Ihre Zimmer zu senden.
Das geht gar nicht, dass der Bus immer zu spät kommt! => Leider kommt der Bus in letzter Zeit häufig zu spät.
Ich will mein Geld zurück! => Ich bitte Sie, mir den Kaufpreis zurückzuerstatten.
Danke schon mal! => Vielen Dank im Voraus für Ihre Bemühungen.
Tschüss! => Mit freundlichen Grüßen`,
      auftrag4: `Schreibe einen **Beschwerdebrief** an die Gemeinde: Der Weg zur Schule hat keine Beleuchtung und ist im Winter gefährlich. Mach einen Vorschlag. => Betreff ; Problem genau beschreiben ; Folgen ; Vorschlag ; höfliche Bitte
Eure Klasse plant eine Projektwoche in Wien. Schreibe eine **Anfrage an eine Jugendherberge**. => Betreff ; Zeitraum, Anzahl der Personen ; Fragen zu Zimmern, Verpflegung, Preisen ; Bitte um Angebot
Du hast online Kopfhörer bestellt, die nicht funktionieren. Schreibe eine **Reklamation** an den Händler. => Bestellnummer, Datum ; Mangel genau beschreiben ; Forderung (Umtausch, Geld zurück) ; Frist`
    },
    level4: {
      ichkann: ['Du formulierst umgangssprachliche Sätze in höfliche, sachliche Briefsprache um.', 'Du schreibst Beschwerden, Anfragen und Reklamationen formal richtig.'],
      tasks: [
        { type: 'pair', pool: 'formell', n: 4, title: 'Formell formulieren', instr: 'Schreibe den Satz höflich und sachlich.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Absender, Empfänger, Ort/Datum, Betreff', 'passende Anrede und Grußformel', 'sachliche, höfliche Sprache', 'Sie/Ihnen/Ihr groß', 'klares Anliegen mit Begründung', 'Absätze'], plan: [['Betreff', 'Worum geht es?'], ['Einleitung', 'Anlass'], ['Hauptteil', 'genaue Angaben, Begründung'], ['Schluss', 'Bitte, Frist, Dank']], note: 'Schreibe den Brief in dein Heft oder am Computer.', title: 'Schreibauftrag' }
      ]
    }
  });

  // ------------------------------------------------------------------ Bericht
  ext('bericht', {
    more: {
      umf4: `Total peinlich: Der Bus kam einfach nicht und wir standen ewig herum! => Der Bus kam mit 20 Minuten Verspätung.
Der Schiedsrichter war blind, er hat das Foul nicht gesehen! => Der Schiedsrichter ahndete das Foul nicht.
„Hilfe!“, schrie die Frau ganz laut. => Die Frau rief um Hilfe.
Ich glaube, der Fahrer hat nicht aufgepasst. => Laut Zeugen war der Fahrer unaufmerksam.
Die Feuerwehr war super schnell da und hat alles gerettet. => Die Feuerwehr traf nach wenigen Minuten ein und löschte den Brand.
Es war ein Mega-Event mit voll vielen Leuten. => Rund 300 Personen besuchten die Veranstaltung.`,
      auftrag4: `Schreibe einen **Zeitungsbericht** für die Schulhomepage. Notizen: Freitag, 21. März – Schulhof – Spendenlauf aller Klassen – 412 Schülerinnen und Schüler – 1 380 Runden – 4 150 € für das Tierheim Graz – Direktorin bedankt sich – Scheckübergabe am 28. März. => Überschrift und Vorspann (Wer? Was? Wann? Wo?) ; Ablauf ; Ergebnis ; Aussage der Direktorin in indirekter Rede
Schreibe einen **Unfallbericht für die Versicherung**. Notizen: Mittwoch, 8.10 Uhr – Fahrradständer vor der Schule – Lena (13) – Rad fällt um – Spiegel eines parkenden Autos zerkratzt – Autobesitzer Herr Kern – Kontaktdaten ausgetauscht. => alle W-Fragen ; Reihenfolge ; Präteritum ; sachlich, ohne Schuldzuweisung`
    },
    level4: {
      ichkann: ['Du formulierst Ausdrücke sachlich und ohne Wertung um.', 'Du schreibst einen Zeitungs- oder Unfallbericht mit Überschrift, Vorspann und indirekter Rede.'],
      tasks: [
        { type: 'pair', pool: 'umf4', n: 4, title: 'Sachlich formulieren', instr: 'Schreibe den Satz so, dass er in einen Bericht passt.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Überschrift', 'Vorspann mit den wichtigsten W-Fragen', 'Präteritum', 'zeitliche Reihenfolge', 'sachlich, keine Gefühle', 'Aussagen in indirekter Rede'], plan: [['Überschrift', 'kurz, informativ'], ['Vorspann', 'Wer? Was? Wann? Wo?'], ['Hauptteil', 'Wie? Warum? Ablauf'], ['Schluss', 'Folgen, Ausblick']], note: 'Schreibe den Bericht in dein Heft.', title: 'Schreibauftrag' }
      ]
    }
  });

  // ------------------------------------------------------------------ Nacherzählung / Inhaltsangabe (Texte aus Stufe 3)
  const nach = UB.topics.find(x => x.id === 'nacherzaehlung');
  if (nach) {
    nach.pools.perspektive = `Erzähle die Geschichte oben **aus der Sicht einer anderen Figur** in der Ich-Form. => Ich-Form ; Gedanken und Gefühle dieser Figur ; Reihenfolge bleibt gleich ; Präteritum`;
    const t3 = nach.levels[3].tasks;
    nach.levels[4] = {
      ichkann: ['Du erzählst eine Geschichte in eigenen Worten nach.', 'Du erzählst sie aus der Sicht einer anderen Figur (Perspektivwechsel).'],
      tasks: [t3[0], t3[2], { type: 'write', pool: 'perspektive', lines: 6, check: ['Ich-Form', 'Gedanken und Gefühle', 'Handlung vollständig', 'Präteritum'], title: 'Perspektivwechsel', instr: '' }]
    };
  }
  const inh = UB.topics.find(x => x.id === 'inhaltsangabe');
  if (inh) {
    inh.pools.deutung = `Was will die Geschichte oben aussagen? Schreibe einen **Schlussteil** mit deiner Deutung (4–5 Sätze). => Botschaft / Lehre ; Bezug zur Handlung ; eigene Meinung begründen ; Präsens`;
    const t3 = inh.levels[3].tasks;
    inh.levels[4] = {
      ichkann: ['Du schreibst eine vollständige Inhaltsangabe mit Einleitung, Hauptteil und Schluss.', 'Du deutest eine Geschichte und begründest deine Meinung.'],
      tasks: [t3[0], t3[2], { type: 'write', pool: 'deutung', lines: 5, check: ['Präsens', 'Botschaft benennen', 'Begründung'], title: 'Deutung', instr: '' }]
    };
  }

  // ------------------------------------------------------------------ Argumentieren
  ext('argumentieren', {
    more: {
      gegen: `„Handys braucht man in der Pause für Notfälle.“ => Das stimmt zwar, aber im Notfall kann man auch im Sekretariat anrufen.
„Schuluniformen sind teuer.“ => Zwar kostet eine Uniform Geld, doch dafür muss man weniger Markenkleidung kaufen.
„Hausübungen nehmen Freizeit weg.“ => Natürlich kostet die Hausübung Zeit, aber kurze, sinnvolle Aufgaben helfen beim Lernen.
„Ein Hund macht zu viel Arbeit.“ => Ein Hund braucht zwar viel Pflege, dafür lernt man Verantwortung und bewegt sich mehr.`,
      auftrag4: `Schreibe eine **Stellungnahme** für die Schülerzeitung: „Soll es an unserer Schule eine Woche ohne Handy geben?“ Gehe auch auf ein Gegenargument ein und entkräfte es. => klare Meinung ; zwei Argumente mit Begründung und Beispiel ; Gegenargument entkräften ; Appell
Der Elternverein schlägt vor, den Schulbeginn auf 8.30 Uhr zu verlegen. Schreibe einen **Leserbrief** dazu. => Anrede, Bezug ; Argumente ; Gegenargument entkräften ; Forderung, Grußformel`
    },
    level4: {
      ichkann: ['Du baust Behauptungen zu vollständigen Argumenten aus (Begründung, Beispiel).', 'Du entkräftest Gegenargumente (zwar …, aber …).'],
      tasks: [
        { type: 'pair', pool: 'gegen', n: 2, title: 'Gegenargumente entkräften', instr: 'Antworte mit „zwar …, aber …“ oder „Das stimmt, aber …“.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Behauptung – Begründung – Beispiel', 'Gegenargument entkräftet', 'Verbindungswörter (außerdem, deshalb, zwar … aber)', 'sachliche Sprache', 'Schluss mit Forderung', '200–250 Wörter'], plan: [['Einleitung', 'Anlass, eigene Meinung'], ['Argumente', 'zwei, mit Begründung und Beispiel'], ['Gegenargument', 'nennen und entkräften'], ['Schluss', 'Forderung, Appell']], note: 'Schreibe den Text in dein Heft.', title: 'Schreibauftrag' }
      ]
    }
  });

  // ------------------------------------------------------------------ Erörterung
  ext('eroerterung', {
    more: {
      auftrag4: `Erörtere die Frage: **Sollen Jugendliche ab 16 Jahren bei allen Wahlen mitbestimmen dürfen?** Beziehe beide Seiten ein und komme zu einem begründeten Urteil. => Hinführung ; Contra (schwach → stark) ; Pro (schwach → stark) ; Abwägung im Schluss
Erörtere: **Sollen Schulen auf Schulbücher aus Papier verzichten und nur noch Tablets verwenden?** => Hinführung mit aktuellem Anlass ; Argumente beider Seiten mit Beispielen ; Fazit mit Ausblick
Erörtere: **Ist ein Auslandsjahr während der Schulzeit sinnvoll?** => Hinführung ; Chancen und Risiken ; persönliche Abwägung`,
      verbind: `Ein weiteres Argument [für] Tablets ist das geringe Gewicht.
[Darüber hinaus] sind digitale Bücher immer aktuell.
[Andererseits] schadet langes Lesen am Bildschirm den Augen.
[Das wichtigste] Argument ist jedoch die Konzentration.
[Abschließend] lässt sich sagen, dass beides Vor- und Nachteile hat.
[Zwar] sind Tablets teuer, [doch] sie ersetzen viele Bücher.`
    },
    level4: {
      ichkann: ['Du erörterst anspruchsvolle Fragen mit Argumenten beider Seiten.', 'Du verknüpfst Argumente mit passenden Überleitungen und kommst zu einem begründeten Urteil.'],
      tasks: [
        { type: 'gap', pool: 'verbind', n: 5, wordbox: true, title: 'Überleitungen', instr: 'Setze die Wörter aus dem Kasten ein.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Hinführung und Fragestellung', 'Gegenseite zuerst, stärkstes Argument zuletzt', 'jedes Argument mit Begründung und Beispiel', 'Überleitungen', 'Abwägung und begründetes Urteil', '350–400 Wörter'], plan: [['Einleitung', 'Anlass, Frage'], ['Contra', 'schwach → stark'], ['Pro', 'schwach → stark'], ['Schluss', 'Abwägung, Urteil, Ausblick']], note: 'Schreibe die Erörterung in dein Heft.', title: 'Schreibauftrag' }
      ]
    }
  });

  // ------------------------------------------------------------------ Bewerbung
  ext('bewerbung', {
    more: {
      formel: `Ich will bei Ihnen arbeiten. => Hiermit bewerbe ich mich um die ausgeschriebene Lehrstelle als …
Ich hab das in der Zeitung gesehen. => Ihre Anzeige in der Kleinen Zeitung vom 12. Mai hat mein Interesse geweckt.
Ich kann gut mit Computern. => Ich arbeite sicher mit Computern, zum Beispiel …
Ich bin halt sehr nett. => Ich bin hilfsbereit und arbeite gern im Team.
Schreiben Sie mir zurück! => Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.
Liebe Grüße => Mit freundlichen Grüßen`,
      auftrag4: `**Stellenanzeige:** Das Hotel Seeblick am Wörthersee sucht für Juli und August eine **Ferialpraktikantin / einen Ferialpraktikanten** (ab 15 Jahren) für Service und Rezeption. Wir erwarten Freundlichkeit, Zuverlässigkeit und Englischkenntnisse. Bewerbungen an: Hotel Seeblick, z. H. Frau Mag. Petra Moser, Seestraße 12, 9220 Velden. => vollständiger Briefkopf ; Bezug auf die Anzeige ; Motivation ; Stärken mit Beispielen ; Bitte um Gespräch ; Beilagen
Schreibe zusätzlich einen **tabellarischen Lebenslauf** zur Bewerbung für das Hotel Seeblick. => persönliche Daten ; Schulbildung ; Kenntnisse (Sprachen, EDV) ; Interessen`
    },
    level4: {
      ichkann: ['Du formulierst Sätze in passende Bewerbungssprache um.', 'Du schreibst eine vollständige Bewerbung mit Lebenslauf.'],
      tasks: [
        { type: 'pair', pool: 'formel', n: 4, title: 'Bewerbungssprache', instr: 'Schreibe den Satz so, wie er in eine Bewerbung passt.' },
        { type: 'write', pool: 'auftrag4', lines: 0, check: ['Absender, Empfänger, Ort/Datum, Betreff', 'Bezug auf die Anzeige', 'Motivation und Stärken mit Beispielen', 'formelle Sprache, Sie groß', 'Bitte um Gespräch', 'Beilagen'], plan: [['Einleitung', 'Bewerbung worauf? Anzeige'], ['Hauptteil', 'Motivation, Stärken, Erfahrungen'], ['Schluss', 'Bitte um Gespräch, Grußformel'], ['Beilagen', 'Lebenslauf, Zeugnis']], note: 'Schreibe die Bewerbung in dein Heft oder am Computer.', title: 'Schreibauftrag' }
      ]
    }
  });
})();
