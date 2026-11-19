/* Bericht – 2./3. Klasse */
UB.simple({
  id: 'bericht', title: 'Bericht', area: 'schreiben', klassen: [2, 3], img: 'MiniHoS_Original_Notizbuch',
  merk: 'Ein <b>Bericht</b> informiert sachlich und genau über ein Ereignis (Unfall, Schulveranstaltung, Zeitungsmeldung). Er beantwortet die <b>W-Fragen</b>: Wer? Was? Wann? Wo? Wie? Warum? Welche Folgen? Zeitform ist das <b>Präteritum</b>. Erzähle in der richtigen zeitlichen Reihenfolge, ohne Spannung, ohne Gefühle, ohne eigene Meinung und ohne wörtliche Rede. Aufbau: Einleitung (Wer? Wann? Wo? Was?) – Hauptteil (Wie? Warum? genauer Ablauf) – Schluss (Folgen).',
  pools: {
    wfrage: `**Am Montag gegen 7.30 Uhr** stießen zwei Fahrzeuge zusammen.|Wann
Der Unfall passierte **an der Kreuzung Hauptstraße – Schulgasse**.|Wo
**Ein zwölfjähriger Radfahrer** wurde dabei verletzt.|Wer
Der Radfahrer **stieß mit einem Lieferwagen zusammen**.|Was
Er fuhr über die Kreuzung, **weil er die rote Ampel übersah**.|Warum
Der Radfahrer fuhr **mit hoher Geschwindigkeit** den Berg hinunter.|Wie
Er wurde **mit leichten Verletzungen ins Krankenhaus gebracht**.|Folgen
**Beim Sportfest am 14. Juni** gewann die 2b den Staffellauf.|Wann
Das Sportfest fand **auf dem Sportplatz der Schule** statt.|Wo
**Rund 200 Schülerinnen und Schüler** nahmen teil.|Wer
Die Feuerwehr pumpte den Keller aus, **weil ein Rohr gebrochen war**.|Warum
Der Schaden wird **auf etwa 5000 Euro geschätzt**.|Folgen`,
    sachlich: `Der arme Junge schrie fürchterlich vor Schmerzen. || Der Junge wurde am Bein verletzt. || b || ohne Gefühle und Ausschmückungen
Ich glaube, der Autofahrer war total blöd. || Der Autofahrer bremste zu spät. || b || keine eigene Meinung
Plötzlich krachte es ganz schrecklich laut! || Gegen 8 Uhr stießen die beiden Fahrzeuge zusammen. || b || genaue Zeitangabe statt Spannung
Lena rief: „Ich habe alles gesehen!“ || Eine Schülerin beobachtete den Unfall. || b || keine wörtliche Rede
Der Radfahrer fährt über die Kreuzung. || Der Radfahrer fuhr über die Kreuzung. || b || Zeitform Präteritum
Irgendwann am Vormittag passierte irgendwo was. || Am Dienstag um 10.15 Uhr stürzte ein Schüler im Turnsaal. || b || W-Fragen genau beantworten
Am Ende war alles voll arg. || Der Verletzte wurde in die Unfallambulanz gebracht. || b || sachliche Folgen nennen`,
    umformen: `Total verrückt rannte der Hund einfach auf die Straße! => Der Hund lief auf die Fahrbahn.
Mega spannend war das Finale, wir haben geschrien wie verrückt! => Im Finale feuerten die Zuschauer die Mannschaften lautstark an.
Ich hatte voll Angst, als es plötzlich brannte. => Gegen 14 Uhr brach im Werkraum ein Feuer aus.
Der arme Max hat sich ganz furchtbar wehgetan. => Max verletzte sich am Knöchel.
„Ruft sofort die Rettung!“, schrie die Lehrerin. => Die Lehrerin verständigte die Rettung.
Es war ein wunderschöner, sonniger Tag und alle waren gut gelaunt. => Am 20. Mai fand bei Sonnenschein das Schulfest statt.`,
    ordnen: `Am Dienstag, dem 5. März, fand in der Turnhalle das Völkerballturnier der ersten Klassen statt. >> Zu Beginn begrüßte der Direktor alle Mannschaften. >> In der Vorrunde spielte jede Klasse gegen jede. >> Im Finale besiegte die 1c die 1a knapp mit 3 : 2. >> Zum Abschluss erhielten alle Teams eine Urkunde.
Am Freitag gegen 16 Uhr brach in einer Garage in der Feldgasse ein Feuer aus. >> Ein Nachbar bemerkte den Rauch und verständigte die Feuerwehr. >> Wenige Minuten später trafen zwei Löschfahrzeuge ein. >> Die Feuerwehrleute löschten den Brand innerhalb einer halben Stunde. >> Verletzt wurde niemand, die Garage ist jedoch zerstört.
Am Mittwoch um 10.20 Uhr rutschte Lena Berger aus der 2b im Stiegenhaus der Schule aus. >> Der Boden war nach dem Wischen noch nass. >> Sie stürzte auf das linke Handgelenk. >> Ihr Lehrer leistete Erste Hilfe und verständigte die Eltern. >> Im Krankenhaus wurde eine Verstauchung festgestellt.`,
    auftrag: `Schreibe einen **Unfallbericht** für die Direktion. Fakten: Dienstag, 14. Mai, 10.15 Uhr – Turnsaal – Max Huber (2b) – beim Weitsprung umgeknickt – Lehrer kühlt den Fuß – Eltern holen Max ab – Arzt stellt Verstauchung fest. => alle W-Fragen ; Präteritum ; zeitliche Reihenfolge ; sachlich, ohne Gefühle
Schreibe für die **Schülerzeitung** einen Bericht über den Wandertag. Fakten: Donnerstag, 19. September – Klasse 2a mit Frau Lang und Herrn Kern – Wanderung auf den Schöckl – Start 8 Uhr beim Parkplatz – Jause beim Gipfelkreuz – Abstieg im Regen – Rückkehr 15 Uhr. => alle W-Fragen ; Präteritum ; kein Ich-Erlebnis, sondern Information
Schreibe eine **Zeitungsmeldung**. Fakten: Samstag, 22 Uhr – Hauptplatz in Gleisdorf – Lieferwagen rollt ohne Fahrer los – prallt gegen Brunnen – niemand verletzt – Handbremse nicht angezogen – Schaden 8000 Euro. => Schlagzeile ; wichtigste Information zuerst ; Präteritum ; sachlich
Schreibe einen **Bericht für die Schulhomepage** über den Lesetag. Fakten: Freitag, 25. April – ganze Schule – Autorin Maria Pichler liest aus ihrem Buch – Lesestationen in allen Klassen – Bücherflohmarkt – Erlös 420 Euro für die Bibliothek. => alle W-Fragen ; Präteritum ; sachlich`
  },
  levels: {
    1: {
      ichkann: ['Du kennst die W-Fragen eines Berichts.', 'Du erkennst sachliche Sätze.'],
      tasks: [
        { type: 'choice', pool: 'wfrage', n: 7, asText: true, col: 'W-Frage', title: 'Welche W-Frage wird beantwortet?', instr: 'Schreibe: Wer? Was? Wann? Wo? Wie? Warum? oder Welche Folgen?', opts: [['Wann', 'Wann?'], ['Wo', 'Wo?'], ['Wer', 'Wer?'], ['Was', 'Was?'], ['Warum', 'Warum?'], ['Wie', 'Wie?'], ['Folgen', 'Welche Folgen?']] },
        { type: 'ab', pool: 'sachlich', n: 4, title: 'Welcher Satz passt in einen Bericht?', instr: 'Kreuze an.' }
      ]
    },
    2: {
      ichkann: ['Du kannst Sätze sachlich umformulieren.', 'Du kannst einen Bericht in die richtige Reihenfolge bringen.'],
      tasks: [
        { type: 'order', pool: 'ordnen', n: 1, title: 'Bring den Bericht in die richtige Reihenfolge.', instr: 'Nummeriere von 1 bis 5.' },
        { type: 'pair', pool: 'umformen', n: 4, title: 'Mach es sachlich.', instr: 'Schreibe den Satz so um, dass er in einen Bericht passt.' }
      ]
    },
    3: {
      ichkann: ['Du kannst aus Fakten einen vollständigen Bericht schreiben (Schularbeitsprobe).'],
      tasks: [
        { type: 'ab', pool: 'sachlich', n: 2, title: 'Zum Aufwärmen', instr: 'Kreuze den Satz an, der in einen Bericht passt.' },
        { type: 'write', pool: 'auftrag', lines: 0, check: ['Präteritum', 'alle W-Fragen', 'zeitliche Reihenfolge', 'sachlich, keine Gefühle', 'keine wörtliche Rede', 'passende Überschrift'], plan: [['Einleitung', 'Wer? Wann? Wo? Was?'], ['Hauptteil', 'Wie? Warum? Ablauf'], ['Schluss', 'Folgen']], note: 'Schreibe den Bericht in dein Heft.', title: 'Schreibauftrag' }
      ]
    }
  }
});
