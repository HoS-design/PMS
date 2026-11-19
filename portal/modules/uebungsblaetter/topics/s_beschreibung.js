/* Beschreiben: Gegenstand/Tier (1.), Person (2.), Vorgang (2.) */
(function () {
  const CHECK_G = ['Präsens', 'sachlich, ohne Gefühle', 'vom Ganzen zu den Einzelheiten', 'genaue Adjektive (Farbe, Form, Material)', 'treffende Verben statt „ist“ und „hat“'];

  UB.simple({
    id: 'gegenstandsbeschreibung', title: 'Gegenstände und Tiere beschreiben', area: 'schreiben', klassen: [1], img: 'MiniHoS_Forschen_Lupe',
    merk: '<b>Beschreibung</b>: Schreibe im Präsens, sachlich und genau, damit sich andere den Gegenstand oder das Tier vorstellen können. Aufbau: <b>Einleitung</b> (Was ist es? Gesamteindruck: Größe, Form, Farbe) – <b>Hauptteil</b> (Einzelheiten in sinnvoller Reihenfolge, z. B. von oben nach unten oder von außen nach innen) – <b>Schluss</b> (Besonderheiten, Verwendung). Verwende genaue Adjektive (dunkelblau, rechteckig, aus Leder) und treffende Verben (befindet sich, besteht aus, ist verziert mit).',
    pools: {
      besser: `Mein Rucksack ist voll cool und ich mag ihn sehr. || Mein Rucksack ist aus dunkelblauem, wasserfestem Stoff. || b || Eine Beschreibung ist sachlich und genau.
Der Rucksack war blau. || Der Rucksack ist blau. || b || Beschreibungen stehen im Präsens.
An der Seite sind so Dinger. || An beiden Seiten befinden sich Netztaschen für Trinkflaschen. || b || genaue Bezeichnungen
Die Katze ist irgendwie gefleckt. || Das Fell der Katze ist weiß mit rotbraunen Flecken. || b || genaue Farben und Muster
Das Ding ist ungefähr so groß wie ein anderes Ding. || Die Federschachtel ist etwa 20 Zentimeter lang und 8 Zentimeter breit. || b || genaue Maße
Der Hund hat ein Fell. Der Hund hat Ohren. Der Hund hat einen Schwanz. || Der Hund hat ein kurzes, braunes Fell, Schlappohren und einen buschigen Schwanz. || b || abwechslungsreiche Sätze
Die Kappe ist schön. || Die rote Kappe hat einen breiten Schirm und ein weißes Logo. || b || „schön“ sagt nichts aus
Die Flasche ist halt so lila. || Die Trinkflasche ist hellviolett und hat einen silbernen Deckel. || b || genaue Farbe und Einzelheiten
Der Hase hat lange Ohren gehabt. || Der Hase hat lange, aufgestellte Ohren. || b || Präsens
Oben ist ein Ding zum Tragen. || Oben befindet sich ein gepolsterter Tragegriff. || b || genaue Bezeichnung
Die Tasche ist super praktisch und echt toll. || Die Tasche hat vier Fächer und einen verstellbaren Schultergurt. || b || sachlich statt Bewertung
Die Schachtel ist eckig. || Die Schachtel ist rechteckig, etwa 30 Zentimeter lang und aus Karton. || b || Maße und Material`,
      adj: `rechteckig|Fo
oval|Fo
kugelrund|Fo
dreieckig|Fo
zylinderförmig|Fo
quadratisch|Fo
hellgrün|Fa
silbern|Fa
dunkelrot|Fa
beige|Fa
türkis|Fa
goldgelb|Fa
aus Holz|M
aus Leder|M
aus Kunststoff|M
aus Metall|M
aus Baumwolle|M
aus Glas|M`,
      verben: `Der Rucksack [besteht] aus wasserfestem Stoff.
Auf der Vorderseite [befindet] sich ein großes Fach.
Ein silberner Reißverschluss [verschließt] das Hauptfach.
Über den Rücken der Katze [verläuft] ein dunkler Streifen.
Das Fell des Hasen [glänzt] in der Sonne.
Die Kappe [schützt] vor der Sonne.
Kleine Sterne [verzieren] den Deckel der Dose.
Der Schwanz des Hundes [endet] in einer weißen Spitze.`,
      auftrag: `In der Fundkiste der Schule liegen viele Rucksäcke. Beschreibe **deinen Rucksack** so genau, dass der Schulwart ihn sofort findet. => Gesamteindruck: Größe, Form, Farbe ; Fächer, Reißverschlüsse, Anhänger ; Besonderheiten (Name, Aufkleber)
Du hast deine **Federschachtel** verloren. Schreibe eine Verlustanzeige für das Schwarze Brett. => Größe, Farbe, Material ; Inhalt ; Besonderheiten
Schreibe einen **Tiersteckbrief**: Beschreibe ein Haustier oder ein Tier, das du gut kennst. => Größe und Körperbau ; Fell, Farbe, Kopf, Beine, Schwanz ; besondere Merkmale und Verhalten
Ein Hund ist entlaufen. Schreibe eine **Suchanzeige**, damit ihn alle erkennen. => Rasse, Größe, Fell ; Halsband, besondere Merkmale ; Wo zuletzt gesehen?
Beschreibe dein **Lieblingsspielzeug** oder deinen Lieblingsgegenstand. => Gesamteindruck ; Einzelheiten von oben nach unten ; Verwendung
Beschreibe dein **Fahrrad** für die Fahrradbörse. => Art, Größe, Farbe ; Rahmen, Lenker, Sattel, Reifen ; Zubehör und Zustand
Beschreibe deine **Schultasche** für die Fundkiste. => Gesamteindruck ; Fächer und Verschlüsse ; Besonderheiten
Beschreibe deinen **Lieblingsbecher** oder deine Trinkflasche. => Form, Farbe, Material ; Aufdruck ; Besonderheiten
Ein Kater ist entlaufen. Schreibe eine **Suchanzeige**. => Größe, Fell, Augen ; Halsband ; besondere Merkmale und Verhalten
Beschreibe ein **Tier aus dem Zoo** für ein Tierlexikon. => Größe und Körperbau ; Fell oder Haut, Kopf, Beine ; Besonderheiten`
    },
    levels: {
      1: {
        ichkann: ['Du kannst genaue Adjektive für Form, Farbe und Material finden.', 'Du erkennst, was eine gute Beschreibung ausmacht.'],
        tasks: [
          { type: 'sort', pool: 'adj', cover: true, keys: ['Fo', 'Fa', 'M'], n: 12, title: 'Form, Farbe oder Material?', instr: 'Ordne die Wörter.', opts: [['Fo', 'Form'], ['Fa', 'Farbe'], ['M', 'Material']] },
          { type: 'ab', pool: 'besser', n: 3, title: 'Welcher Satz ist besser?', instr: 'Kreuze den Satz an, der besser in eine Beschreibung passt.' }
        ]
      },
      2: {
        ichkann: ['Du verwendest treffende Verben statt „ist“ und „hat“.', 'Du kannst Sätze genauer und sachlicher machen.'],
        tasks: [
          { type: 'gap', pool: 'verben', n: 5, wordbox: true, title: 'Treffende Verben', instr: 'Setze das passende Verb aus dem Kasten ein.' },
          { type: 'ab', pool: 'besser', n: 3, title: 'Welcher Satz ist besser?', instr: 'Kreuze an.' },
          { type: 'write', pool: 'auftrag', lines: 5, title: 'Schreibe den Anfang.', instr: 'Schreibe nur die Einleitung: Was ist es? Wie wirkt es auf den ersten Blick?' }
        ]
      },
      3: {
        ichkann: ['Du kannst eine Beschreibung planen und vollständig schreiben (Schularbeitsprobe).'],
        tasks: [
          { type: 'ab', pool: 'besser', n: 2, title: 'Zum Aufwärmen', instr: 'Kreuze den besseren Satz an.' },
          { type: 'write', pool: 'auftrag', lines: 0, check: CHECK_G, plan: [['Einleitung', 'Was ist es? Gesamteindruck'], ['Hauptteil', 'Einzelheiten in sinnvoller Reihenfolge'], ['Schluss', 'Besonderheiten, Verwendung']], note: 'Schreibe die Beschreibung in dein Heft und kontrolliere sie mit der Checkliste.', title: 'Schreibauftrag' }
        ]
      }
    }
  });

  UB.simple({
    id: 'personenbeschreibung', title: 'Personen beschreiben', area: 'schreiben', klassen: [2], img: 'MiniHoS_Pose_Selbstbewusst',
    merk: '<b>Personenbeschreibung</b>: Präsens, sachlich, keine Bewertungen. Reihenfolge: <b>Gesamteindruck</b> (Geschlecht, Alter, Größe, Gestalt) – <b>Kopf</b> (Gesicht, Haare, Augen, Nase, Mund) – <b>Kleidung</b> (von oben nach unten) – <b>besondere Merkmale</b> (Brille, Narbe, Gang). Verwende genaue Adjektive: schulterlange, gewellte Haare; schmale, leicht gebogene Nase.',
    pools: {
      aufbau: `Gesamteindruck: Geschlecht, Alter, Größe, Gestalt >> Kopf: Gesichtsform, Haare, Augen, Nase, Mund >> Kleidung: von oben nach unten >> Besondere Merkmale: Brille, Narbe, Gang`,
      besser: `Er hat Haare. || Er hat kurze, lockige, kastanienbraune Haare. || b || genaue Adjektive
Sie schaut irgendwie nett aus. || Ihre grünen Augen blicken freundlich. || b || konkret statt allgemein
Er war groß. || Er ist etwa 1,80 Meter groß. || b || Präsens und genaue Angaben
Sie hat eine hässliche Nase. || Ihre Nase ist schmal und leicht gebogen. || b || sachlich, ohne Bewertung
Er hat ein T-Shirt, eine Hose und Schuhe an. || Er trägt ein graues Kapuzenshirt, eine dunkle Jeans und weiße Turnschuhe. || b || genaue Kleidung, treffendes Verb
Die Frau ist alt. || Die Frau ist etwa 70 Jahre alt. || b || genaue Schätzung
Sie hat so komische Schuhe. || Sie trägt knallgelbe Gummistiefel. || b || genau und ohne Bewertung
Er hat Augen. || Er hat große, hellblaue Augen. || b || genaue Adjektive
Sie ist voll dünn. || Sie ist schlank. || b || sachliche Sprache
Sein Gesicht ist normal. || Sein Gesicht ist rund, auf der Nase hat er Sommersprossen. || b || konkret beschreiben`,
      wortfeld: `lockig|H
glatt|H
gewellt|H
schulterlang|H
gescheitelt|H
Sommersprossen|G
Stupsnase|G
Grübchen|G
Hakennase|G
schlank|S
kräftig|S
zierlich|S
muskulös|S
untersetzt|S`,
      auftrag: `Ein Mädchen wird vermisst. Schreibe für die Polizei eine **Vermisstenmeldung** mit einer genauen Personenbeschreibung (erfundene Person). => Alter, Größe, Gestalt ; Gesicht und Haare ; Kleidung ; besondere Merkmale
Beschreibe **eine erfundene Figur** für ein Computerspiel so genau, dass ein Grafiker sie zeichnen kann. => Gesamteindruck ; Kopf ; Kleidung und Ausrüstung ; besondere Merkmale
Schreibe einen **Steckbrief** für einen erfundenen Bankräuber, der auf der Flucht ist. => Gesamteindruck ; Gesicht ; Kleidung ; besondere Merkmale, Gang
Beschreibe eine **Figur aus einem Buch oder Film**, ohne den Namen zu nennen. Die anderen sollen raten. => Gesamteindruck ; Gesicht und Haare ; Kleidung ; typische Merkmale
Beschreibe einen erfundenen **Superhelden** oder eine Superheldin so genau, dass man ihn oder sie zeichnen kann. => Gesamteindruck ; Kopf ; Kostüm ; besondere Merkmale
Auf dem Schulfest ist ein kleines Kind verloren gegangen. Schreibe eine **Durchsage** mit Personenbeschreibung (erfundene Person). => Alter, Größe ; Haare, Gesicht ; Kleidung ; Merkmale
Beschreibe eine **erfundene Lehrerin** für eine Geschichte. => Gesamteindruck ; Gesicht und Haare ; Kleidung ; typische Merkmale
Beschreibe einen **erfundenen Räuber** für ein Fahndungsplakat. => Größe, Gestalt ; Gesicht ; Kleidung ; auffällige Merkmale`
    },
    levels: {
      1: {
        ichkann: ['Du kennst die Reihenfolge einer Personenbeschreibung.', 'Du findest genaue Wörter für Haare, Gesicht und Gestalt.'],
        tasks: [
          { type: 'order', pool: 'aufbau', n: 1, title: 'In welcher Reihenfolge beschreibst du?', instr: 'Nummeriere von 1 bis 4.' },
          { type: 'sort', pool: 'wortfeld', cover: true, keys: ['H', 'G', 'S'], n: 12, title: 'Wortfeld Aussehen', instr: 'Ordne die Wörter.', opts: [['H', 'Haare'], ['G', 'Gesicht'], ['S', 'Gestalt']] },
          { type: 'ab', pool: 'besser', n: 2, title: 'Welcher Satz ist besser?', instr: 'Kreuze an.' }
        ]
      },
      2: {
        ichkann: ['Du beschreibst sachlich und genau.', 'Du verwendest treffende Adjektive und Verben.'],
        tasks: [
          { type: 'ab', pool: 'besser', n: 4, title: 'Welcher Satz ist besser?', instr: 'Kreuze an.' },
          { type: 'write', pool: 'auftrag', lines: 6, title: 'Beschreibe den Kopf.', instr: 'Schreibe nur den Teil über Gesicht und Haare – mindestens vier genaue Sätze.' }
        ]
      },
      3: {
        ichkann: ['Du kannst eine vollständige Personenbeschreibung planen und schreiben (Schularbeitsprobe).'],
        tasks: [
          { type: 'order', pool: 'aufbau', n: 1, title: 'Aufbau', instr: 'Nummeriere.' },
          { type: 'write', pool: 'auftrag', lines: 0, check: ['Präsens', 'sachlich, ohne Bewertung', 'Reihenfolge: Gesamteindruck – Kopf – Kleidung – Merkmale', 'genaue Adjektive', 'treffende Verben (trägt, reicht bis)'], plan: [['Gesamteindruck', 'Alter, Größe, Gestalt'], ['Kopf', 'Gesicht, Haare, Augen'], ['Kleidung', 'von oben nach unten'], ['Merkmale', 'Brille, Narbe, Gang …']], note: 'Schreibe die Beschreibung in dein Heft.', title: 'Schreibauftrag' }
        ]
      }
    }
  });

  UB.simple({
    id: 'vorgangsbeschreibung', title: 'Vorgänge beschreiben', area: 'schreiben', klassen: [2], img: 'MiniHoS_Erklaeren_Tafel-Idee',
    merk: '<b>Vorgangsbeschreibung</b> (Anleitung, Rezept, Spielregel): Präsens, genaue Reihenfolge, einheitliche Form – entweder „du“ (Du schneidest …), „man“ (Man schneidet …) oder Passiv (Das Brot wird geschnitten). Zuerst Material oder Zutaten nennen, dann die Arbeitsschritte. Verbinde die Schritte mit Wörtern wie zuerst, danach, anschließend, sobald, zum Schluss. Verwende genaue Verben: schälen, verrühren, falten.',
    pools: {
      schritte: `Zuerst wäschst du die Äpfel. >> Dann schneidest du sie in kleine Stücke. >> Anschließend gibst du die Stücke mit etwas Wasser in einen Topf. >> Danach lässt du alles etwa zehn Minuten köcheln. >> Zum Schluss zerdrückst du die weichen Äpfel mit einer Gabel.
Zuerst legst du ein Blatt Papier vor dich hin. >> Dann faltest du es einmal der Länge nach in der Mitte. >> Danach knickst du die oberen Ecken zur Mittellinie. >> Anschließend faltest du die Flügel nach unten. >> Zum Schluss lässt du den Papierflieger fliegen.
Zuerst legst du Watte auf einen flachen Teller. >> Dann befeuchtest du die Watte mit Wasser. >> Anschließend streust du die Kressesamen darauf. >> Danach stellst du den Teller an einen hellen Platz. >> Nach etwa einer Woche kannst du die Kresse ernten.
Zuerst füllst du Wasser in den Wasserkocher. >> Sobald das Wasser kocht, gießt du es in eine Tasse. >> Danach hängst du einen Teebeutel hinein. >> Nach drei bis fünf Minuten nimmst du den Beutel heraus. >> Zum Schluss süßt du den Tee mit etwas Honig.
Zuerst schraubst du die Ventilkappe ab. >> Dann setzt du die Pumpe auf das Ventil. >> Anschließend pumpst du, bis der Reifen fest ist. >> Danach nimmst du die Pumpe ab. >> Zum Schluss schraubst du die Ventilkappe wieder auf.
Zuerst bestreichst du eine Scheibe Brot mit Butter. >> Dann legst du eine Scheibe Käse darauf. >> Anschließend schneidest du eine Tomate in dünne Scheiben. >> Danach legst du die Tomatenscheiben auf den Käse. >> Zum Schluss streust du etwas Salz darüber.
Zuerst nimmst du ein quadratisches Blatt Papier. >> Dann faltest du es diagonal zu einem Dreieck. >> Anschließend faltest du die beiden Ecken nach oben. >> Danach knickst du die Spitze nach unten. >> Zum Schluss malst du ein Gesicht auf den Papierhund.
Zuerst legst du die Zahnbürste und die Zahnpasta bereit. >> Dann gibst du eine erbsengroße Menge Zahnpasta auf die Bürste. >> Anschließend putzt du die Kauflächen. >> Danach putzt du die Außen- und Innenseiten. >> Zum Schluss spülst du den Mund mit Wasser aus.
Zuerst mischt du alle Karten gut durch. >> Dann teilst du an jede Person sieben Karten aus. >> Anschließend legst du eine Karte offen in die Mitte. >> Danach legt reihum jeder eine passende Karte ab. >> Wer zuerst keine Karten mehr hat, gewinnt.`,
      verben: `Du [schälst] die Kartoffeln mit einem Sparschäler.
Du [rührst] den Teig glatt.
Du [faltest] das Blatt in der Mitte.
Du [pumpst] den Reifen auf.
Du [verquirlst] die Eier mit der Milch.
Du [klebst] die beiden Teile zusammen.
Du [gießt] das heiße Wasser in die Kanne.
Du [streust] etwas Salz darüber.`,
      form: `Ich nehme zwei Eier. :: man-Form => Man nimmt zwei Eier.
Ich schneide das Brot in Scheiben. :: du-Form => Du schneidest das Brot in Scheiben.
Ich gieße die Milch in den Topf. :: man-Form => Man gießt die Milch in den Topf.
Ich falte das Papier. :: du-Form => Du faltest das Papier.
Ich rühre den Teig um. :: Passiv => Der Teig wird umgerührt.
Ich schäle die Äpfel. :: Passiv => Die Äpfel werden geschält.
Ich lege die Wurst auf das Brot. :: du-Form => Du legst die Wurst auf das Brot.
Ich wasche den Salat. :: man-Form => Man wäscht den Salat.
Ich stelle den Teller in den Kühlschrank. :: Passiv => Der Teller wird in den Kühlschrank gestellt.`,
      auftrag: `Beschreibe, wie man einen **Kakao** zubereitet. => Zutaten und Geräte ; Schritte in der richtigen Reihenfolge ; einheitlich du- oder man-Form
Erkläre einem jüngeren Kind die Regeln deines **Lieblingsspiels** (zum Beispiel Tempelhüpfen, Völkerball, Uno). => Material und Spieleranzahl ; Ablauf ; Wer gewinnt?
Schreibe ein Rezept für ein **Butterbrot mit Schnittlauch**. => Zutaten ; Arbeitsschritte ; Tipp zum Schluss
Beschreibe, wie man einen **Fahrradreifen** aufpumpt. => Werkzeug ; Schritte ; Kontrolle am Schluss
Beschreibe, wie man **Zähne richtig putzt**. => Material ; Schritte ; Dauer
Beschreibe, wie man **Kresse** auf Watte zieht. => Material ; Schritte ; Pflege und Ernte
Schreibe ein Rezept für einen **Obstsalat**. => Zutaten ; Arbeitsschritte ; Tipp
Beschreibe, wie man eine **Pflanze umtopft**. => Material ; Schritte ; Pflege danach
Erkläre, wie man ein **Lesezeichen bastelt**. => Material ; Schritte ; Verwendung
Beschreibe, wie man eine **Schultasche richtig packt**. => Was braucht man? ; Reihenfolge ; Tipp`
    },
    levels: {
      1: {
        ichkann: ['Du bringst Arbeitsschritte in die richtige Reihenfolge.', 'Du verwendest genaue Verben.'],
        tasks: [
          { type: 'order', pool: 'schritte', n: 1, title: 'Bring die Schritte in die richtige Reihenfolge.', instr: 'Nummeriere von 1 bis 5.' },
          { type: 'gap', pool: 'verben', n: 6, wordbox: true, title: 'Genaue Verben', instr: 'Setze das passende Verb aus dem Kasten ein.' }
        ]
      },
      2: {
        ichkann: ['Du schreibst in einheitlicher du-, man- oder Passivform.', 'Du verbindest die Schritte mit passenden Wörtern.'],
        tasks: [
          { type: 'pair', pool: 'form', n: 4, filter: x => !/Passiv/.test(x.hint), title: 'Einheitliche Form', instr: 'Schreibe den Satz in der angegebenen Form.' },
          { type: 'order', pool: 'schritte', n: 1, title: 'Reihenfolge', instr: 'Nummeriere von 1 bis 5 und unterstreiche die Verbindungswörter.' },
          { type: 'write', pool: 'auftrag', lines: 4, title: 'Material und Zutaten', instr: 'Schreibe nur auf, was man braucht (Material/Zutaten).' }
        ]
      },
      3: {
        ichkann: ['Du kannst eine vollständige Vorgangsbeschreibung schreiben (Schularbeitsprobe).', 'Du kannst auch das Passiv verwenden.'],
        tasks: [
          { type: 'pair', pool: 'form', n: 3, filter: x => /Passiv/.test(x.hint), title: 'Passiv', instr: 'Schreibe den Satz im Passiv.' },
          { type: 'write', pool: 'auftrag', lines: 0, check: ['Präsens', 'Material/Zutaten am Anfang', 'richtige Reihenfolge', 'einheitliche Form (du, man oder Passiv)', 'Verbindungswörter', 'genaue Verben'], plan: [['Material', 'Was braucht man?'], ['Schritte', '1., 2., 3. …'], ['Schluss', 'Ergebnis, Tipp']], note: 'Schreibe die Vorgangsbeschreibung in dein Heft.', title: 'Schreibauftrag' }
        ]
      }
    }
  });
})();
