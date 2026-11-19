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
Der Schaden wird **auf etwa 5000 Euro geschätzt**.|Folgen
**Am Dienstag um 10.15 Uhr** stürzte ein Schüler im Turnsaal.|Wann
Der Schüler stürzte **im Turnsaal**.|Wo
**Ein Schüler der 2a** stürzte beim Turnen.|Wer
Der Schüler **knickte beim Weitsprung um**.|Was
Er rutschte aus, **weil der Boden nass war**.|Warum
Er fiel **mit voller Wucht auf die Hand**.|Wie
**Ein Arzt stellte eine Verstauchung fest**.|Folgen
Die Feuerwehr rückte **am Freitagabend** aus.|Wann`,
    sachlich: `Der arme Junge schrie fürchterlich vor Schmerzen. || Der Junge wurde am Bein verletzt. || b || ohne Gefühle und Ausschmückungen
Ich glaube, der Autofahrer war total blöd. || Der Autofahrer bremste zu spät. || b || keine eigene Meinung
Plötzlich krachte es ganz schrecklich laut! || Gegen 8 Uhr stießen die beiden Fahrzeuge zusammen. || b || genaue Zeitangabe statt Spannung
Lena rief: „Ich habe alles gesehen!“ || Eine Schülerin beobachtete den Unfall. || b || keine wörtliche Rede
Der Radfahrer fährt über die Kreuzung. || Der Radfahrer fuhr über die Kreuzung. || b || Zeitform Präteritum
Irgendwann am Vormittag passierte irgendwo was. || Am Dienstag um 10.15 Uhr stürzte ein Schüler im Turnsaal. || b || W-Fragen genau beantworten
Am Ende war alles voll arg. || Der Verletzte wurde in die Unfallambulanz gebracht. || b || sachliche Folgen nennen
Das war der beste Wandertag aller Zeiten! || Am 3. Oktober wanderte die Klasse 1a auf den Schöckl. || b || sachlich statt begeistert
Der blöde Hund hat alles kaputt gemacht. || Ein Hund beschädigte die Blumenbeete. || b || ohne Bewertung
Ich bin dann total erschrocken. || Ein Schüler bemerkte den Rauch. || b || keine Ich-Gefühle
Mama sagte: „Ruf sofort an!“ || Die Mutter verständigte die Polizei. || b || keine wörtliche Rede
Der Bus kommt zu spät an. || Der Bus kam zu spät an. || b || Präteritum
Es war so unglaublich laut, dass alle fast taub wurden. || Die Musik war sehr laut. || b || nicht übertreiben`,
    umformen: `Total verrückt rannte der Hund einfach auf die Straße! => Der Hund lief auf die Fahrbahn.
Mega spannend war das Finale, wir haben geschrien wie verrückt! => Im Finale feuerten die Zuschauer die Mannschaften lautstark an.
Ich hatte voll Angst, als es plötzlich brannte. => Gegen 14 Uhr brach im Werkraum ein Feuer aus.
Der arme Max hat sich ganz furchtbar wehgetan. => Max verletzte sich am Knöchel.
„Ruft sofort die Rettung!“, schrie die Lehrerin. => Die Lehrerin verständigte die Rettung.
Es war ein wunderschöner, sonniger Tag und alle waren gut gelaunt. => Am 20. Mai fand bei Sonnenschein das Schulfest statt.
Wahnsinn, unsere Mannschaft hat endlich gewonnen! => Die Mannschaft der Schule gewann das Spiel.
Der arme alte Mann ist voll hingefallen. => Ein älterer Mann stürzte.
„Alle raus!“, brüllte der Hausmeister. => Der Hausmeister forderte alle auf, das Gebäude zu verlassen.
Ich glaube, der Fahrer war zu schnell. => Laut Zeugen fuhr der Fahrer zu schnell.
Es war total spannend und alle haben geschrien. => Das Publikum feuerte die Läuferinnen an.
Plötzlich krachte es ganz fürchterlich. => Um 14.10 Uhr stießen zwei Autos zusammen.`,
    ordnen: `Am Dienstag, dem 5. März, fand in der Turnhalle das Völkerballturnier der ersten Klassen statt. >> Zu Beginn begrüßte der Direktor alle Mannschaften. >> In der Vorrunde spielte jede Klasse gegen jede. >> Im Finale besiegte die 1c die 1a knapp mit 3 : 2. >> Zum Abschluss erhielten alle Teams eine Urkunde.
Am Freitag gegen 16 Uhr brach in einer Garage in der Feldgasse ein Feuer aus. >> Ein Nachbar bemerkte den Rauch und verständigte die Feuerwehr. >> Wenige Minuten später trafen zwei Löschfahrzeuge ein. >> Die Feuerwehrleute löschten den Brand innerhalb einer halben Stunde. >> Verletzt wurde niemand, die Garage ist jedoch zerstört.
Am Mittwoch um 10.20 Uhr rutschte Lena Berger aus der 2b im Stiegenhaus der Schule aus. >> Der Boden war nach dem Wischen noch nass. >> Sie stürzte auf das linke Handgelenk. >> Ihr Lehrer leistete Erste Hilfe und verständigte die Eltern. >> Im Krankenhaus wurde eine Verstauchung festgestellt.
Am Donnerstag, dem 12. Mai, besuchte die Klasse 2b das Naturkundemuseum in Graz. >> Um 8 Uhr fuhr die Klasse mit dem Bus vom Schulhof ab. >> Im Museum führte eine Biologin die Schülerinnen und Schüler durch die Ausstellung. >> Anschließend durften alle Fossilien unter dem Mikroskop untersuchen. >> Gegen 13 Uhr kehrte die Klasse zur Schule zurück.
Am Samstag gegen 15 Uhr lief ein Hund auf die Fahrbahn der Bundesstraße bei Gleisdorf. >> Ein Autofahrer bremste stark und wich aus. >> Dabei geriet sein Wagen in den Straßengraben. >> Der Fahrer blieb unverletzt, der Hund lief davon. >> Die Polizei sucht nun den Besitzer des Hundes.
Am Montag um 9.30 Uhr startete in der Turnhalle der Lesewettbewerb der ersten Klassen. >> Zuerst lasen alle Teilnehmenden einen bekannten Text vor. >> Danach mussten sie einen unbekannten Text vortragen. >> Die Jury bewertete Betonung und Lesetempo. >> Am Ende gewann Elif aus der 1a.`,
    auftrag: `Schreibe einen **Unfallbericht** für die Direktion. Fakten: Dienstag, 14. Mai, 10.15 Uhr – Turnsaal – Max Huber (2b) – beim Weitsprung umgeknickt – Lehrer kühlt den Fuß – Eltern holen Max ab – Arzt stellt Verstauchung fest. => alle W-Fragen ; Präteritum ; zeitliche Reihenfolge ; sachlich, ohne Gefühle
Schreibe für die **Schülerzeitung** einen Bericht über den Wandertag. Fakten: Donnerstag, 19. September – Klasse 2a mit Frau Lang und Herrn Kern – Wanderung auf den Schöckl – Start 8 Uhr beim Parkplatz – Jause beim Gipfelkreuz – Abstieg im Regen – Rückkehr 15 Uhr. => alle W-Fragen ; Präteritum ; kein Ich-Erlebnis, sondern Information
Schreibe eine **Zeitungsmeldung**. Fakten: Samstag, 22 Uhr – Hauptplatz in Gleisdorf – Lieferwagen rollt ohne Fahrer los – prallt gegen Brunnen – niemand verletzt – Handbremse nicht angezogen – Schaden 8000 Euro. => Schlagzeile ; wichtigste Information zuerst ; Präteritum ; sachlich
Schreibe einen **Bericht für die Schulhomepage** über den Lesetag. Fakten: Freitag, 25. April – ganze Schule – Autorin Maria Pichler liest aus ihrem Buch – Lesestationen in allen Klassen – Bücherflohmarkt – Erlös 420 Euro für die Bibliothek. => alle W-Fragen ; Präteritum ; sachlich
Schreibe einen **Unfallbericht** für die Direktion. Fakten: Montag, 3. März, 12.40 Uhr – Schulhof – Sara Lang (1b) – rutscht auf Eis aus – Schulärztin kühlt das Handgelenk – Mutter holt Sara ab – Prellung. => alle W-Fragen ; Präteritum ; sachlich
Schreibe für die **Schülerzeitung** einen Bericht über den Schikurs. Fakten: 10.–14. Februar – Klassen 2a und 2b – Schladming – vier Gruppen – Abschlussrennen am Freitag – alle unverletzt zurück. => W-Fragen ; Präteritum ; Information statt Ich-Erlebnis
Schreibe eine **Zeitungsmeldung**. Fakten: Mittwoch, 7 Uhr – Bahnhof Leoben – Zug bleibt wegen eines umgestürzten Baums stehen – 200 Fahrgäste warten eine Stunde – Feuerwehr räumt die Strecke – niemand verletzt. => Schlagzeile ; Wichtigstes zuerst ; Präteritum
Schreibe einen **Bericht für die Schulhomepage** über das Schulfest. Fakten: Samstag, 14. Juni – Schulhof – Theaterstück der 1c – Flohmarkt und Buffet – Erlös 950 Euro für neue Sportgeräte. => W-Fragen ; Präteritum ; sachlich
Schreibe einen **Bericht** über einen Feueralarm. Fakten: Donnerstag, 10.05 Uhr – Probealarm – alle Klassen verlassen das Schulhaus in vier Minuten – Sammelplatz am Sportplatz – Feuerwehr lobt die Schule. => W-Fragen ; Reihenfolge ; Präteritum
Schreibe eine **Zeitungsmeldung** über ein Fundtier. Fakten: Sonntag – Stadtpark Graz – Spaziergänger findet eine Schildkröte – Tierheim nimmt sie auf – Besitzer meldet sich am Montag. => Schlagzeile ; W-Fragen ; sachlich`
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
