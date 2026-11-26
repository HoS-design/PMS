/* Argumentieren, Leserbrief (3.) und Erörterung (4.) */
(function () {
  const PRO = {
    uniform: `Niemand wird wegen seiner Kleidung ausgelacht.|P
Man spart morgens Zeit beim Anziehen.|P
Das Gemeinschaftsgefühl wird gestärkt.|P
Markenkleidung verliert an Bedeutung.|P
Man kann seinen persönlichen Stil nicht zeigen.|C
Die Anschaffung kostet die Familien Geld.|C
Viele finden Uniformen unbequem.|C
Kleidung ist ein Teil der eigenen Persönlichkeit.|C`,
    handy: `In Notfällen kann man die Eltern erreichen.|P
Man kann im Unterricht schnell etwas nachschlagen.|P
Viele Lern-Apps sind hilfreich.|P
Man kann Fahrpläne und Termine abrufen.|P
In der Pause wird weniger miteinander gesprochen.|C
Handys lenken vom Lernen ab.|C
Es kann zu Cybermobbing kommen.|C
Teure Geräte können gestohlen werden.|C`,
    haustier: `Kinder lernen, Verantwortung zu übernehmen.|P
Ein Hund sorgt für tägliche Bewegung an der frischen Luft.|P
Tiere trösten, wenn man traurig ist.|P
Man lernt viel über die Bedürfnisse von Tieren.|P
Tierarzt und Futter kosten viel Geld.|C
In den Ferien braucht man eine Betreuung für das Tier.|C
Manche Menschen sind allergisch gegen Tierhaare.|C
Die Pflege kostet täglich Zeit.|C`
  };
  const THEMA = { uniform: 'Sollen Schulen eine Schuluniform einführen?', handy: 'Sollen Handys in der Schule erlaubt sein?', haustier: 'Soll jede Familie mit Kindern ein Haustier haben?' };
  const sortSpec = (k) => ({ type: 'sort', pool: k, n: 8, cover: true, keys: ['P', 'C'], title: 'Pro oder Contra? – ' + THEMA[k], instr: 'Ordne die Argumente.', opts: [['P', 'Pro (dafür)'], ['C', 'Contra (dagegen)']] });

  const teile = `Handys sollten in der Pause erlaubt sein.|B
Man sollte täglich Sport machen.|B
Schulen sollten einen Schulgarten haben.|B
Hausübungen sind wichtig.|B
denn man kann sich mit Freunden für den Nachmittag verabreden.|G
weil Bewegung den Körper gesund hält.|G
weil Kinder dort lernen, woher unser Essen kommt.|G
denn durch Wiederholen festigt sich das Gelernte.|G
Zum Beispiel kann man den Eltern Bescheid geben, wenn der Bus ausfällt.|BSP
Wer zum Beispiel jeden Tag Rad fährt, ist meist fitter.|BSP
Unsere Nachbarschule erntet zum Beispiel jedes Jahr eigene Kartoffeln.|BSP
Wer zum Beispiel Vokabeln jeden Tag wiederholt, weiß sie beim Test viel sicherer.|BSP`;

  const argOrder = `Haustiere sind gut für Kinder. >> Sie lernen dabei, Verantwortung zu übernehmen. >> Wer einen Hund hat, muss zum Beispiel jeden Tag mit ihm spazieren gehen – auch bei Regen.
Die Schule sollte später beginnen. >> Viele Jugendliche sind am frühen Morgen noch sehr müde. >> In der ersten Stunde gähnen zum Beispiel oft fast alle in der Klasse.
Wir brauchen mehr Radwege. >> Radfahren ist gesund und schont die Umwelt. >> In Graz fahren zum Beispiel immer mehr Menschen mit dem Rad zur Arbeit.
Lesen ist wichtig. >> Wer viel liest, erweitert seinen Wortschatz. >> Leseratten finden zum Beispiel beim Aufsatzschreiben leichter die passenden Wörter.`;

  const konn = `Ich bin für längere Pausen, [denn] man kann sich besser erholen.
Bewegung ist gesund. [Außerdem] macht sie gute Laune.
Viele Schüler sind morgens müde. [Deshalb] sollte die Schule später beginnen.
Handys sind praktisch. [Allerdings] lenken sie oft vom Lernen ab.
[Erstens] spart man Zeit, zweitens schont man die Umwelt.
Lesen erweitert den Wortschatz. [Zum Beispiel] lernt man neue Fremdwörter.
[Zusammenfassend] lässt sich sagen, dass die Vorteile überwiegen.
Hausübungen sind wichtig, [weil] man das Gelernte wiederholt.
Ich bin gegen Schuluniformen, [weil] man seinen Stil nicht zeigen kann.
[Einerseits] ist ein Handy praktisch, andererseits lenkt es ab.
Der Ausflug ist teuer. [Trotzdem] möchten alle mitfahren.
[Schließlich] ist Bewegung wichtig für die Gesundheit.`;

  const besser = `Schuluniformen sind blöd. || Schuluniformen sind problematisch, weil man seinen eigenen Stil nicht zeigen kann. || b || Ein Argument braucht eine Begründung.
Radfahren ist gesund, weil es gesund ist. || Radfahren ist gesund, weil es Herz und Muskeln stärkt. || b || Keine Begründung im Kreis
Alle wissen doch, dass Hausübungen sinnlos sind. || Hausübungen sind umstritten, weil sie viel Freizeit kosten. || b || Keine Verallgemeinerung („alle“)
Du hast keine Ahnung, deshalb hast du unrecht. || Ich sehe das anders, weil ein Haustier viel Zeit kostet. || b || Sachlich bleiben, nicht die Person angreifen
Ich finde Sport toll. || Sport ist wichtig, denn er hilft, Stress abzubauen. Zum Beispiel fühle ich mich nach dem Training entspannter. || b || Behauptung, Begründung und Beispiel
Das ist halt so. || Das ist sinnvoll, weil Kinder dadurch selbstständiger werden. || b || Begründung statt Behauptung
Jeder normale Mensch sieht das so. || Viele Eltern sehen das so, wie eine Umfrage an unserer Schule zeigt. || b || keine Verallgemeinerung, Beleg nennen`;

  const einl = `Ich schreibe jetzt eine Erörterung über Handys. || Fast jede Schülerin und jeder Schüler besitzt heute ein Smartphone. Doch sollen Handys in der Schule erlaubt sein? || b || Die Einleitung führt zum Thema hin und nennt die Frage.
In meinem Schluss sage ich jetzt meine Meinung. || Nach Abwägung der Argumente bin ich der Meinung, dass Handys nur in den Pausen erlaubt sein sollten. || b || Der Schluss zieht ein Fazit.
Erstens ist das so. Zweitens ist das so. || Das wichtigste Argument ist jedoch, dass … || b || Das stärkste Argument kommt zum Schluss.`;

  const CHECK_A = ['Behauptung – Begründung – Beispiel', 'sachliche Sprache', 'Verbindungswörter', 'eigene Meinung klar formuliert', 'Präsens'];
  const auftragA = `Schreibe einen **Leserbrief** an die Schülerzeitung: „Sollen Handys in der Pause erlaubt sein?“ => Anrede und Bezug zum Thema ; zwei bis drei Argumente mit Begründung und Beispiel ; Schluss mit Forderung
Die Direktion überlegt, die **Hausübungen** abzuschaffen. Schreibe eine **Stellungnahme** für das Schulforum. => klare Meinung ; drei Argumente ; Gegenargument entkräften
Deine Gemeinde will den **Spielplatz** in einen Parkplatz umbauen. Schreibe einen Leserbrief an die Gemeindezeitung. => Bezug auf den Plan ; Argumente ; Vorschlag
Soll eure Schule einen **Schulgarten** anlegen? Schreibe eine Stellungnahme. => Meinung ; Argumente mit Beispielen ; Schluss
Die Schule überlegt, ein **Handyfach** für alle einzuführen. Schreibe eine Stellungnahme für die Schülerzeitung. => Meinung ; zwei bis drei Argumente ; Schluss mit Vorschlag
Soll es an eurer Schule einen **Pausenverkauf mit Süßigkeiten** geben? Schreibe einen Leserbrief. => Meinung ; Argumente mit Beispielen ; Forderung
In deiner Gemeinde soll das **Freibad geschlossen** werden. Schreibe einen Leserbrief an die Gemeindezeitung. => Bezug ; Argumente ; Wunsch
Sollen **Hausübungen am Wochenende** verboten werden? Schreibe eine Stellungnahme. => Meinung ; Argumente ; Gegenargument entkräften`;

  const auftragE = `Erörtere die Frage: **Sollen Handys an Schulen verboten werden?** => Einleitung mit Hinführung ; Pro- und Contra-Argumente ; stärkstes Argument zuletzt ; Schluss mit eigener Meinung
Erörtere die Frage: **Ist ein Haustier für Kinder sinnvoll?** => Einleitung ; Argumente dafür und dagegen ; Abwägung im Schluss
Erörtere die Frage: **Sollte die Schule erst um 9 Uhr beginnen?** => Einleitung ; Pro und Contra ; Schluss
Erörtere die Frage: **Brauchen wir noch gedruckte Bücher?** => Einleitung ; Argumente ; Schluss mit Ausblick
Erörtere die Frage: **Sollen Jugendliche einen Ferialjob annehmen?** => Einleitung ; Vorteile und Nachteile ; begründete Meinung
Erörtere die Frage: **Sollte es an Schulen eine Schuluniform geben?** => Einleitung ; Pro und Contra ; Fazit
Erörtere die Frage: **Sollen Kinder ein eigenes Smartphone haben?** => Einleitung ; Pro und Contra ; Fazit
Erörtere die Frage: **Ist Fast Food an Schulen sinnvoll?** => Einleitung ; Argumente ; begründete Meinung
Erörtere die Frage: **Sollte jede Schule einen Schulgarten haben?** => Einleitung ; Pro und Contra ; Ausblick
Erörtere die Frage: **Sollen Schulen Noten abschaffen?** => Einleitung ; Argumente beider Seiten ; Fazit`;

  UB.simple({
    id: 'argumentieren', title: 'Argumentieren und Leserbrief', area: 'schreiben', klassen: [3], img: 'MiniHoS_Pose_Selbstbewusst',
    merk: 'Ein <b>Argument</b> hat drei Teile: <b>Behauptung</b> (These): Was meine ich? – <b>Begründung</b>: Warum? (weil, denn) – <b>Beispiel</b>: Woran sieht man das? (zum Beispiel, etwa). Verbindungswörter: außerdem, deshalb, allerdings, erstens, schließlich, zusammenfassend. <b>Leserbrief/Stellungnahme</b>: Bezug auf das Thema – Meinung – Argumente – Schluss mit Forderung oder Wunsch. Bleib sachlich und greif niemanden persönlich an.',
    pools: { teile, argOrder, konn, besser, auftragA, uniform: PRO.uniform, handy: PRO.handy, haustier: PRO.haustier },
    levels: {
      1: {
        ichkann: ['Du kennst die drei Teile eines Arguments.', 'Du unterscheidest Pro- und Contra-Argumente.'],
        tasks: [
          { type: 'choice', pool: 'teile', cover: true, keys: ['B', 'G', 'BSP'], n: 6, head: 'Satz', title: 'Behauptung, Begründung oder Beispiel?', instr: 'Kreuze an.', opts: [['B', 'Behauptung'], ['G', 'Begründung'], ['BSP', 'Beispiel']] },
          { oneOf: [sortSpec('uniform'), sortSpec('handy'), sortSpec('haustier')] }
        ]
      },
      2: {
        ichkann: ['Du kannst ein Argument richtig aufbauen.', 'Du verwendest passende Verbindungswörter.'],
        tasks: [
          { type: 'order', pool: 'argOrder', n: 2, title: 'Bau das Argument.', instr: 'Nummeriere: 1 Behauptung, 2 Begründung, 3 Beispiel.' },
          { type: 'gap', pool: 'konn', n: 5, wordbox: true, title: 'Verbindungswörter', instr: 'Setze das passende Wort aus dem Kasten ein.' },
          { type: 'ab', pool: 'besser', n: 2, title: 'Welches Argument ist besser?', instr: 'Kreuze an.' }
        ]
      },
      3: {
        ichkann: ['Du kannst einen Leserbrief oder eine Stellungnahme schreiben (Schularbeitsprobe).'],
        tasks: [
          { type: 'ab', pool: 'besser', n: 2, title: 'Zum Aufwärmen', instr: 'Kreuze das bessere Argument an.' },
          { type: 'write', pool: 'auftragA', lines: 0, check: CHECK_A, plan: [['Einleitung', 'Bezug zum Thema, eigene Meinung'], ['Argument 1', 'Behauptung – Begründung – Beispiel'], ['Argument 2', 'Behauptung – Begründung – Beispiel'], ['Schluss', 'Forderung, Wunsch']], note: 'Schreibe den Text in dein Heft.', title: 'Schreibauftrag' }
        ]
      }
    }
  });

  UB.simple({
    id: 'eroerterung', title: 'Erörterung', area: 'schreiben', klassen: [4], img: 'MiniHoS_Erklaeren_Diagramm',
    merk: '<b>Erörterung</b>: Eine Frage wird mit Argumenten von allen Seiten betrachtet. <b>Einleitung</b>: Hinführung zum Thema (aktueller Anlass, Erfahrung) und die Frage. <b>Hauptteil</b>: bei der dialektischen (Pro-Contra-)Erörterung zuerst die Argumente der Gegenseite, dann die eigene Seite; innerhalb jeder Seite vom schwächsten zum stärksten Argument. Jedes Argument: Behauptung – Begründung – Beispiel. <b>Schluss</b>: Abwägung, eigene begründete Meinung, eventuell Ausblick. Zeitform Präsens, sachliche Sprache.',
    pools: { besser, einl, konn, auftragE, uniform: PRO.uniform, handy: PRO.handy, haustier: PRO.haustier },
    levels: {
      1: {
        ichkann: ['Du kannst Argumente nach Pro und Contra ordnen.', 'Du erkennst gute Einleitungs- und Schlusssätze.'],
        tasks: [
          { oneOf: [sortSpec('uniform'), sortSpec('handy'), sortSpec('haustier')] },
          { type: 'ab', pool: 'einl', n: 2, title: 'Was ist besser?', instr: 'Kreuze an.' },
          { type: 'ab', pool: 'besser', n: 2, title: 'Welches Argument überzeugt?', instr: 'Kreuze an.' }
        ]
      },
      2: {
        ichkann: ['Du verknüpfst Argumente mit passenden Verbindungswörtern.', 'Du kannst eine Einleitung schreiben.'],
        tasks: [
          { type: 'gap', pool: 'konn', n: 6, wordbox: true, title: 'Verbindungswörter', instr: 'Setze ein.' },
          { type: 'write', pool: 'auftragE', lines: 6, title: 'Schreibe die Einleitung.', instr: 'Führe zum Thema hin und stelle die Frage.' }
        ]
      },
      3: {
        ichkann: ['Du kannst eine dialektische Erörterung planen und schreiben (Schularbeitsprobe).'],
        tasks: [
          { type: 'write', pool: 'auftragE', lines: 0, check: ['Einleitung mit Hinführung und Frage', 'Gegenseite zuerst', 'stärkstes Argument zuletzt', 'jedes Argument mit Begründung und Beispiel', 'Verbindungswörter', 'begründetes Fazit', 'Präsens'], plan: [['Einleitung', 'Anlass, Frage'], ['Contra', 'zwei Argumente (schwach → stark)'], ['Pro', 'zwei bis drei Argumente (schwach → stark)'], ['Schluss', 'Abwägung, Meinung, Ausblick']], note: 'Schreibe die Erörterung in dein Heft (etwa 300–350 Wörter).', title: 'Schreibauftrag' }
        ]
      }
    }
  });
})();
