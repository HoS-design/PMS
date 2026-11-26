/* Neue Deutsch-Themen: Sprachliche Bilder (3./4.), Redewendungen und Sprichwörter (2./3.), Charakteristik (3./4.) */
(function () {
  // ------------------------------------------------------------------ Sprachliche Bilder und Stilmittel
  const STIL = [['V', 'Vergleich'], ['M', 'Metapher'], ['P', 'Personifikation'], ['U', 'Übertreibung'], ['A', 'Alliteration'], ['L', 'Lautmalerei'], ['R', 'rhetorische Frage']];

  UB.simple({
    id: 'stilmittel', title: 'Sprachliche Bilder und Stilmittel', area: 'sprache', klassen: [3, 4], img: 'MiniHoS_Kreativ_Bild',
    merk: '<b>Sprachliche Bilder</b> und <b>Stilmittel</b> machen Texte lebendig und anschaulich. <b>Vergleich</b> (mit „wie“ oder „als ob“): Er ist stark wie ein Bär. <b>Metapher</b> (Vergleich ohne „wie“, ein Wort bekommt eine übertragene Bedeutung): ein Meer aus Blumen, Sie hat ein Herz aus Gold. <b>Personifikation</b> (Dinge, Pflanzen oder Tiere handeln wie Menschen): Der Wind heult ums Haus. <b>Übertreibung</b>: Ich habe dir das schon tausendmal gesagt. <b>Alliteration</b> (Wörter beginnen mit demselben Laut): Milch macht müde Männer munter. <b>Lautmalerei</b> (Wörter ahmen Geräusche nach): peng, plätschern, kikeriki. <b>Rhetorische Frage</b> (eine Frage, auf die man keine Antwort erwartet): Wer will schon verlieren?',
    pools: {
      erkennen: `Er ist stark wie ein Bär.|V
Sie rennt so schnell wie der Wind.|V
Das Wasser ist kalt wie Eis.|V
Er schläft wie ein Murmeltier.|V
Ihre Augen leuchten wie Sterne.|V
Er tut so, als ob er nichts gehört hätte.|V
Der Kuchen ist hart wie Stein.|V
Das Baby ist leicht wie eine Feder.|V
Sie singt wie eine Nachtigall.|V
Mein Bruder ist ein echter Angsthase.|M
Sie hat ein Herz aus Gold.|M
Ein Meer aus Blumen bedeckt die Wiese.|M
Er ist das schwarze Schaf der Familie.|M
Du bist mein Sonnenschein.|M
Unser Lehrer ist ein wandelndes Lexikon.|M
Am Himmel schwimmen Wattebäusche.|M
Die Torhüterin hat Nerven aus Stahl.|M
Lena ist eine richtige Leseratte.|M
Der Wind heult ums Haus.|P
Die Sonne lacht vom Himmel.|P
Der Wecker schreit mich jeden Morgen an.|P
Die Bäume tanzen im Sturm.|P
Der Mond schaut neugierig durchs Fenster.|P
Die Blumen lassen die Köpfe hängen.|P
Das alte Haus seufzt im Wind.|P
Die Wellen küssen den Strand.|P
Der Computer streikt schon wieder.|P
Ich habe dir das schon tausendmal gesagt.|U
Ich bin todmüde.|U
Mein Rucksack wiegt eine Tonne.|U
Ich warte schon seit einer Ewigkeit.|U
Wir haben uns totgelacht.|U
Das dauert ja hundert Jahre!|U
Ich könnte ein ganzes Pferd essen.|U
Der Turm ist himmelhoch.|U
Bei dem Lärm platzt mir gleich der Kopf.|U
Milch macht müde Männer munter.|A
Fischers Fritz fischt frische Fische.|A
Wir gehen bei Wind und Wetter hinaus.|A
Tim tanzt total toll.|A
Max malt mutige Monster.|A
Sie kamen mit Mann und Maus.|A
Lisa liebt lila Lollis.|A
Der Hund macht: „Wau, wau!“|L
Plötzlich machte es peng!|L
Die Uhr tickt: Tick, tack.|L
Die Biene summt: Sss!|L
„Kikeriki!“, kräht der Hahn.|L
Mit einem lauten Platsch fiel er ins Wasser.|L
Bumm! Die Tür fiel ins Schloss.|L
Der Bach plätschert über die Steine.|L
Wer will schon gern verlieren?|R
Ist das nicht ein herrlicher Tag?|R
Wer hätte das gedacht?|R
Warum muss immer ich aufräumen?|R
Wie oft soll ich das noch sagen?|R
Bin ich etwa dein Diener?|R
Wer mag schon Hausübungen?|R`,
      vergleich: `Er ist stark wie ein [Bär].
Sie läuft schnell wie der [Wind].
Das Wasser ist kalt wie [Eis].
Das Brot ist hart wie [Stein].
Die Daunendecke ist leicht wie eine [Feder].
Sie ist flink wie ein [Wiesel].
Er ist schlau wie ein [Fuchs].
Er schläft wie ein [Murmeltier].
Sie ist neugierig wie eine [Katze].
Er ist hungrig wie ein [Wolf].
Sie singt wie eine [Nachtigall].
Er ist stur wie ein [Esel].
Ihre Wangen sind rot wie eine [Tomate].
Sie ist fleißig wie eine [Biene].
Das Wasser ist klar wie [Glas].
Vor Schreck wurde er weiß wie die [Wand].
Es ist dunkel wie in der [Nacht].
Das Kind sitzt still wie eine [Maus] in der Ecke.`,
      metapher: `ein Herz aus Gold haben => sehr gutherzig sein
das schwarze Schaf sein => anders sein als die anderen (oft im negativen Sinn)
ein Angsthase sein => sehr ängstlich sein
eine Leseratte sein => sehr gern lesen
Nerven aus Stahl haben => auch in schwierigen Lagen ruhig bleiben
ein Brett vor dem Kopf haben => etwas nicht verstehen
die rosarote Brille aufhaben => alles zu positiv sehen
ein Fass ohne Boden => etwas, das immer mehr Geld kostet
eine Schlafmütze sein => verschlafen oder sehr langsam sein
ein Bücherwurm sein => sehr viel lesen
ein Meer aus Blumen => sehr viele Blumen
auf Wolke sieben schweben => sehr glücklich und verliebt sein
das Eis brechen => eine angespannte Stimmung lockern
ein Wolf im Schafspelz => jemand, der freundlich wirkt, aber böse Absichten hat
ein Dach über dem Kopf haben => eine Wohnung haben`,
      umformen: `Die Sonne scheint. :: Personifikation => z. B. Die Sonne lacht vom Himmel.
Der Junge ist sehr schnell. :: Vergleich => z. B. Der Junge ist schnell wie der Blitz.
Ich bin sehr müde. :: Übertreibung => z. B. Ich bin todmüde.
Auf der Wiese wachsen viele Blumen. :: Metapher => z. B. Die Wiese ist ein Meer aus Blumen.
Der Regen fällt auf das Dach. :: Lautmalerei => z. B. Plitsch, platsch – der Regen trommelt aufs Dach.
Der Wind weht. :: Personifikation => z. B. Der Wind pfeift ein Lied.
Die Tasche ist schwer. :: Übertreibung => z. B. Die Tasche wiegt eine Tonne.
Das Mädchen ist mutig. :: Vergleich => z. B. Das Mädchen ist mutig wie ein Löwe.
Die Blätter fallen von den Bäumen. :: Personifikation => z. B. Die Blätter tanzen von den Bäumen.
Ich habe lange gewartet. :: Übertreibung => z. B. Ich habe eine Ewigkeit gewartet.
Er liest sehr viel. :: Metapher => z. B. Er ist eine richtige Leseratte.
Der Hund bellt. :: Lautmalerei => z. B. „Wau, wau!“, bellt der Hund.
Das Wasser ist sehr kalt. :: Vergleich => z. B. Das Wasser ist kalt wie Eis.
Das alte Auto fährt nicht mehr. :: Personifikation => z. B. Das alte Auto streikt.
Niemand mag Regen. :: rhetorische Frage => z. B. Wer mag schon Regen?`,
      text: `Beschreibe einen **Sturm** in fünf bis sechs Sätzen. Verwende mindestens drei sprachliche Bilder. => Personifikation (Der Wind heult …) ; Vergleich (… wie …) ; Lautmalerei (Wusch! Krach!)
Beschreibe den **ersten Schnee** am Morgen. Verwende mindestens drei sprachliche Bilder. => Vergleich (weiß wie …) ; Metapher (eine Decke aus …) ; Personifikation
Beschreibe eine **laute Pause** im Schulhof. Verwende mindestens drei Stilmittel. => Lautmalerei ; Übertreibung ; Vergleich
Beschreibe einen **heißen Sommertag** im Freibad. Verwende mindestens drei sprachliche Bilder. => Personifikation (Die Sonne brennt …) ; Vergleich ; Übertreibung
Schreibe eine **Werbeanzeige** für eine neue Eissorte. Verwende Alliteration, Übertreibung und eine rhetorische Frage. => Alliteration (Süß, sahnig, …) ; Übertreibung ; rhetorische Frage`
    },
    levels: {
      1: {
        ichkann: ['Du erkennst Vergleiche, Personifikationen und Übertreibungen.', 'Du kannst Vergleiche mit „wie“ ergänzen.'],
        tasks: [
          { type: 'merk', title: 'Sprachliche Bilder', html: '<b>Vergleich</b>: mit „wie“ (stark wie ein Bär). <b>Personifikation</b>: Dinge handeln wie Menschen (Der Wind heult). <b>Übertreibung</b>: Ich habe tausendmal angerufen.' },
          { type: 'choice', pool: 'erkennen', keys: ['V', 'P', 'U'], cover: true, n: 8, opts: [['V', 'Vergleich'], ['P', 'Personifikation'], ['U', 'Übertreibung']], title: 'Welches sprachliche Bild ist das?', instr: 'Kreuze an.' },
          { type: 'gap', pool: 'vergleich', n: 8, wordbox: true, title: 'Ergänze die Vergleiche.', instr: 'Setze die Wörter aus dem Kasten ein.' }
        ]
      },
      2: {
        ichkann: ['Du erkennst Vergleich, Metapher, Personifikation, Übertreibung und Alliteration.', 'Du erklärst die Bedeutung von Metaphern.'],
        tasks: [
          { type: 'merk', title: 'Stilmittel', html: '<b>Vergleich</b>: mit „wie“ (stark wie ein Bär). <b>Metapher</b>: Vergleich ohne „wie“ (ein Meer aus Blumen). <b>Personifikation</b>: Der Wind heult. <b>Übertreibung</b>: tausendmal. <b>Alliteration</b>: Milch macht müde Männer munter.' },
          { type: 'choice', pool: 'erkennen', keys: ['V', 'M', 'P', 'U', 'A'], cover: true, n: 6, opts: STIL.slice(0, 5), title: 'Welches Stilmittel ist das?', instr: 'Kreuze an.' },
          { type: 'pair', pool: 'metapher', n: 4, inline: true, head: 'sprachliches Bild', col: 'Was bedeutet das?', title: 'Was ist gemeint?', instr: 'Erkläre die Metaphern mit eigenen Worten.' }
        ]
      },
      3: {
        ichkann: ['Du bestimmst sieben Stilmittel sicher.', 'Du verwendest sprachliche Bilder in eigenen Sätzen.'],
        tasks: [
          { type: 'choice', pool: 'erkennen', keys: STIL.map(s => s[0]), cover: true, n: 10, asText: true, col: 'Stilmittel', w: 11, opts: STIL, title: 'Bestimme die Stilmittel.', instr: 'Schreibe: Vergleich, Metapher, Personifikation, Übertreibung, Alliteration, Lautmalerei oder rhetorische Frage.' },
          { type: 'pair', pool: 'umformen', n: 5, title: 'Mach den Satz lebendiger.', instr: 'Schreibe den Satz neu und verwende das angegebene Stilmittel.' }
        ]
      },
      4: {
        ichkann: ['Du bestimmst Stilmittel und erklärst ihre Wirkung.', 'Du schreibst einen anschaulichen Text mit sprachlichen Bildern.'],
        tasks: [
          { type: 'choice', pool: 'erkennen', keys: STIL.map(s => s[0]), cover: true, n: 5, asText: true, col: 'Stilmittel', w: 11, opts: STIL, title: 'Bestimme die Stilmittel.', instr: 'Schreibe den Fachbegriff dazu.' },
          { type: 'pair', pool: 'umformen', n: 3, title: 'Mach den Satz lebendiger.', instr: 'Verwende das angegebene Stilmittel.' },
          { type: 'write', pool: 'text', lines: 5, check: ['mindestens drei Stilmittel', 'treffende Verben', 'Präsens oder Präteritum einheitlich'], title: 'Schreibauftrag', instr: 'Unterstreiche in deinem Text die Stilmittel.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ Redewendungen und Sprichwörter
  UB.simple({
    id: 'redewendungen', title: 'Redewendungen und Sprichwörter', area: 'sprache', klassen: [2, 3], img: 'MiniHoS_Gesicht_Zwinkern',
    merk: '<b>Redewendungen</b> sind feste Wortgruppen mit einer übertragenen Bedeutung. Man darf sie nicht wörtlich nehmen: <i>Tomaten auf den Augen haben</i> heißt „etwas nicht sehen“, <i>Schwein haben</i> heißt „Glück haben“. <b>Sprichwörter</b> sind ganze Sätze, die eine Lebensweisheit, einen Rat oder eine Warnung ausdrücken: <i>Übung macht den Meister.</i> <i>Lügen haben kurze Beine.</i> Redewendungen und Sprichwörter machen die Sprache bildhaft – in sachlichen Texten (Bericht, Bewerbung) verwendet man sie aber sparsam.',
    pools: {
      bedeutung: `Tomaten auf den Augen haben => etwas nicht sehen, das direkt vor einem liegt
jemandem einen Bären aufbinden => jemandem eine Lüge erzählen
Schwein haben => Glück haben
jemandem die Daumen drücken => jemandem Glück wünschen
auf dem Holzweg sein => sich irren
ins Fettnäpfchen treten => etwas Unpassendes sagen oder tun
jemandem auf den Wecker gehen => jemanden nerven
die Nase voll haben => genug von etwas haben
um den heißen Brei herumreden => nicht direkt sagen, worum es geht
zwei Fliegen mit einer Klappe schlagen => zwei Dinge auf einmal erledigen
etwas auf die lange Bank schieben => etwas aufschieben
Hals über Kopf => sehr schnell, überstürzt
jemandem die kalte Schulter zeigen => jemanden absichtlich nicht beachten
ein Auge zudrücken => großzügig über einen Fehler hinwegsehen
den Nagel auf den Kopf treffen => genau das Richtige sagen
aus der Haut fahren => sehr wütend werden
Däumchen drehen => nichts tun, sich langweilen
jemandem reinen Wein einschenken => jemandem die Wahrheit sagen
sich wie ein Fisch im Wasser fühlen => sich sehr wohlfühlen
Öl ins Feuer gießen => einen Streit noch schlimmer machen
etwas an die große Glocke hängen => etwas überall herumerzählen
Lampenfieber haben => vor einem Auftritt nervös sein
das Handtuch werfen => aufgeben
unter einer Decke stecken => heimlich zusammenarbeiten
Schmetterlinge im Bauch haben => verliebt sein
im selben Boot sitzen => in derselben (schwierigen) Lage sein`,
      wahl: `Ich habe {Schwein|Hund|Pech} gehabt – den Bus habe ich gerade noch erwischt.
Hast du {Tomaten|Gurken|Äpfel} auf den Augen? Da liegt doch dein Heft!
Ich drücke dir die {Daumen|Finger|Zehen} für den Test.
Du gehst mir echt auf den {Wecker|Kalender|Teller}!
Jetzt habe ich die {Nase|Ohren|Augen} voll vom Regen.
Red nicht um den heißen {Brei|Tee|Kakao} herum!
Mit dem Rad zum Bäcker – so schlage ich zwei {Fliegen|Mücken|Bienen} mit einer Klappe.
Er hat mir einen {Bären|Hasen|Löwen} aufgebunden.
Mit dieser Antwort bist du auf dem {Holzweg|Waldweg|Feldweg}.
Da bin ich ganz schön ins {Fettnäpfchen|Wasserglas|Marmeladeglas} getreten.
Vor dem Theaterstück hatte ich {Lampenfieber|Kerzenfieber|Ofenfieber}.
Wir sitzen alle im selben {Boot|Auto|Zug}.
Er hat den {Nagel|Hammer|Bohrer} auf den Kopf getroffen.
Sie fühlt sich wie ein {Fisch|Vogel|Hund} im Wasser.
Schieb die Hausübung nicht auf die lange {Bank|Bahn|Leiter}!
Seit dem Ausflug hat Mia {Schmetterlinge|Bienen|Käfer} im Bauch.`,
      sprichwort: `Übung macht den Meister. => Wer viel übt, wird gut.
Morgenstund hat Gold im Mund. => Wer früh aufsteht, schafft viel.
Wer zuletzt lacht, lacht am besten. => Erst am Ende zeigt sich, wer gewinnt.
Lügen haben kurze Beine. => Lügen werden schnell entdeckt.
Aller Anfang ist schwer. => Am Anfang fällt etwas Neues schwer.
Ohne Fleiß kein Preis. => Für Erfolg muss man sich anstrengen.
Der Apfel fällt nicht weit vom Stamm. => Kinder sind oft wie ihre Eltern.
Viele Köche verderben den Brei. => Wenn zu viele mitreden, gelingt es nicht.
Was du heute kannst besorgen, das verschiebe nicht auf morgen. => Erledige Dinge gleich.
Reden ist Silber, Schweigen ist Gold. => Manchmal ist es besser, nichts zu sagen.
Wer andern eine Grube gräbt, fällt selbst hinein. => Wer anderen schaden will, schadet sich oft selbst.
Ende gut, alles gut. => Wenn es gut ausgeht, ist der Ärger vergessen.
Kommt Zeit, kommt Rat. => Mit der Zeit findet man eine Lösung.
Eile mit Weile. => Wer sich zu sehr beeilt, macht Fehler.
Hunde, die bellen, beißen nicht. => Wer laut droht, tut oft nichts.
Der frühe Vogel fängt den Wurm. => Wer früh dran ist, hat Vorteile.
Wer A sagt, muss auch B sagen. => Was man angefangen hat, muss man auch fortsetzen.
Rom wurde nicht an einem Tag erbaut. => Große Dinge brauchen Zeit.`,
      ergaenzen: `Übung macht den [Meister].
Lügen haben kurze [Beine].
Ohne Fleiß kein [Preis].
Aller Anfang ist [schwer].
Ende gut, alles [gut].
Morgenstund hat [Gold] im Mund.
Viele Köche verderben den [Brei].
Der Apfel fällt nicht weit vom [Stamm].
Kommt Zeit, kommt [Rat].
Reden ist Silber, Schweigen ist [Gold].
Eile mit [Weile].
Der frühe Vogel fängt den [Wurm].
Wer zuletzt lacht, lacht am [besten].
Hunde, die bellen, [beißen] nicht.
Rom wurde nicht an einem [Tag] erbaut.`,
      art: `Schwein haben|R
Übung macht den Meister.|S
die Nase voll haben|R
Lügen haben kurze Beine.|S
auf dem Holzweg sein|R
Ohne Fleiß kein Preis.|S
Hals über Kopf|R
Eile mit Weile.|S
ins Fettnäpfchen treten|R
Aller Anfang ist schwer.|S
das Handtuch werfen|R
Ende gut, alles gut.|S
Tomaten auf den Augen haben|R
Kommt Zeit, kommt Rat.|S
zwei Fliegen mit einer Klappe schlagen|R
Der frühe Vogel fängt den Wurm.|S`,
      situation: `Lena hat den Zug gerade noch erwischt. => Sie hat Schwein gehabt.
Tom sucht seine Brille, dabei hat er sie auf. => Er hat Tomaten auf den Augen.
Max hat keine Lust mehr auf den Regen. => Er hat die Nase voll.
Mia ist vor dem Auftritt sehr nervös. => Sie hat Lampenfieber.
Ben erzählt eine erfundene Geschichte und alle glauben sie. => Er bindet allen einen Bären auf.
Paul sagt nicht klar, was er eigentlich will. => Er redet um den heißen Brei herum.
Jonas gibt beim Lauf nach der Hälfte auf. => Er wirft das Handtuch.
Oma geht einkaufen und bringt dabei gleich die Post weg. => Sie schlägt zwei Fliegen mit einer Klappe.
Die Lehrerin sieht über einen kleinen Fehler hinweg. => Sie drückt ein Auge zu.
Er schiebt das Aufräumen immer wieder auf. => Er schiebt es auf die lange Bank.
Anna sagt genau das Richtige. => Sie trifft den Nagel auf den Kopf.
Lisa ist frisch verliebt. => Sie hat Schmetterlinge im Bauch.`,
      geschichte: `Schreibe eine kurze Geschichte, die zum Sprichwort **„Lügen haben kurze Beine“** passt. => Wer lügt und warum? ; Wie kommt die Lüge heraus? ; Was lernt die Figur daraus?
Schreibe eine kurze Geschichte, die zum Sprichwort **„Übung macht den Meister“** passt. => Was kann die Figur am Anfang nicht? ; Wie übt sie? ; Wie geht es aus?
Schreibe eine kurze Geschichte, die zum Sprichwort **„Wer andern eine Grube gräbt, fällt selbst hinein“** passt. => Wer will wem schaden? ; Wie geht der Plan schief? ; Ende mit Lehre
Schreibe eine kurze Geschichte, die zum Sprichwort **„Ende gut, alles gut“** passt. => Was geht zuerst schief? ; Höhepunkt ; gutes Ende`
    },
    levels: {
      1: {
        ichkann: ['Du kennst häufige Redewendungen.', 'Du verstehst, dass man Redewendungen nicht wörtlich nimmt.'],
        tasks: [
          { type: 'gap', pool: 'wahl', n: 8, title: 'Welches Wort passt?', instr: 'Kreise das Wort ein, das die Redewendung vollständig macht.' },
          { type: 'pair', pool: 'bedeutung', n: 6, inline: true, head: 'Redewendung', col: 'Was bedeutet das?', title: 'Was ist gemeint?', instr: 'Erkläre die Redewendungen mit eigenen Worten.' }
        ]
      },
      2: {
        ichkann: ['Du unterscheidest Redewendungen und Sprichwörter.', 'Du kannst Sprichwörter vervollständigen.'],
        tasks: [
          { type: 'choice', pool: 'art', n: 8, opts: [['R', 'Redewendung'], ['S', 'Sprichwort']], head: 'Ausdruck', title: 'Redewendung oder Sprichwort?', instr: 'Kreuze an. Tipp: Ein Sprichwort ist ein ganzer Satz.' },
          { type: 'gap', pool: 'ergaenzen', n: 6, wordbox: true, title: 'Ergänze die Sprichwörter.', instr: 'Setze die Wörter aus dem Kasten ein.' }
        ]
      },
      3: {
        ichkann: ['Du erklärst die Lehre eines Sprichworts.', 'Du findest zu einer Situation die passende Redewendung.'],
        tasks: [
          { type: 'pair', pool: 'sprichwort', n: 5, title: 'Was will das Sprichwort sagen?', instr: 'Erkläre die Lehre mit eigenen Worten.' },
          { type: 'pair', pool: 'situation', n: 5, inline: true, head: 'Situation', col: 'passende Redewendung', title: 'Welche Redewendung passt?', instr: 'Schreibe eine passende Redewendung dazu.' }
        ]
      },
      4: {
        ichkann: ['Du verwendest Redewendungen passend.', 'Du schreibst eine Geschichte zu einem Sprichwort.'],
        tasks: [
          { type: 'pair', pool: 'situation', n: 4, inline: true, head: 'Situation', col: 'passende Redewendung', title: 'Welche Redewendung passt?', instr: 'Schreibe eine passende Redewendung dazu.' },
          { type: 'write', pool: 'geschichte', lines: 11, check: ['Einleitung, Hauptteil, Schluss', 'Lehre am Ende erkennbar', 'Präteritum'], title: 'Schreibauftrag', instr: 'Schreibe in dein Heft oder auf die Linien.' }
        ]
      }
    }
  });

  // ------------------------------------------------------------------ Charakteristik
  UB.simple({
    id: 'charakteristik', title: 'Charakteristik', area: 'schreiben', klassen: [3, 4], img: 'MiniHoS_Spielen_Theatermaske',
    merk: '<b>Charakteristik</b>: Du beschreibst eine Person – oft eine Figur aus einem Buch oder Film –, und zwar nicht nur ihr Aussehen, sondern vor allem ihren <b>Charakter</b>: Eigenschaften, Verhalten, Gefühle und Beziehungen zu anderen. Jede Eigenschaft begründest du mit einem <b>Beleg</b> (Beispiel aus dem Text): „Tom ist hilfsbereit, denn er trägt der alten Frau die Tasche.“ <b>Aufbau</b>: Einleitung (Wer? Aus welchem Buch? erster Eindruck) – Hauptteil (Aussehen kurz, dann Eigenschaften mit Belegen) – Schluss (eigene Meinung, Wirkung der Figur). Schreibe im <b>Präsens</b> und sachlich.',
    pools: {
      eigenschaft: `schlank|A
lockige Haare|A
Sommersprossen|A
groß gewachsen|A
trägt eine Brille|A
kräftig|A
blasse Haut|A
Narbe am Kinn|A
hilfsbereit|C
ehrgeizig|C
schüchtern|C
mutig|C
eifersüchtig|C
zuverlässig|C
neugierig|C
hinterlistig|C
großzügig|C
ungeduldig|C
humorvoll|C
selbstbewusst|C
braune Augen|A
kurze schwarze Haare|A
sportliche Figur|A
ehrlich|C
geduldig|C
frech|C
dunkle Augenbrauen|A
vergesslich|C`,
      verhalten: `Lena teilt ihre Jause mit allen. => großzügig (oder: hilfsbereit)
Tom gibt nie auf, auch wenn es schwer ist. => ausdauernd (oder: ehrgeizig)
Mia traut sich nicht, in der Klasse etwas zu sagen. => schüchtern
Ben kommt immer pünktlich und hält seine Versprechen. => zuverlässig
Anna will immer alles wissen und fragt viel. => neugierig
Paul springt ins kalte Wasser, um den Hund zu retten. => mutig
Lisa lacht viel und erzählt gern Witze. => humorvoll (oder: fröhlich)
Max sagt immer die Wahrheit. => ehrlich
Sara wird schnell wütend, wenn sie warten muss. => ungeduldig
Jonas gönnt seinem Bruder den Erfolg nicht. => neidisch (oder: eifersüchtig)
Emma hilft ihrem Opa jeden Tag im Garten. => hilfsbereit
Leo glaubt an sich und spricht vor der ganzen Schule. => selbstbewusst
Nina macht ihre Hausübung immer sofort und sehr ordentlich. => fleißig (oder: gewissenhaft)
Felix lügt, um sich einen Vorteil zu verschaffen. => unehrlich (oder: hinterlistig)
Clara tröstet ihre Freundin, als diese traurig ist. => einfühlsam (oder: mitfühlend)`,
      beleg: `Tom ist mutig. || Tom ist mutig, denn er stellt sich vor seinen kleinen Bruder, als die Großen ihn ärgern. || b || Eigenschaft mit Beleg
Mia ist voll nett. || Mia ist hilfsbereit: Sie zeigt der neuen Schülerin das ganze Schulhaus. || b || genaue Eigenschaft und Beleg
Er war immer ehrlich. || Er ist ehrlich, denn er gibt die gefundene Geldbörse sofort ab. || b || Präsens und Beleg
Lisa hat lange Haare und eine rote Jacke. || Lisa wirkt zuerst schüchtern, im Laufe der Geschichte wird sie aber immer mutiger. || b || Charakter statt nur Aussehen
Ich finde ihn blöd. || Am Ende finde ich ihn sympathisch, weil er seinen Fehler zugibt. || b || begründete Meinung im Schluss
Ben ist faul, glaub ich. || Ben ist bequem: Er lässt immer seine Schwester den Müll hinaustragen. || b || sachlich und mit Beleg`,
      teile: `In dem Jugendbuch „Der Schatz im Moor“ ist Tim die Hauptfigur.|E
Tim ist zwölf Jahre alt und lebt mit seiner Mutter in Graz.|E
Er ist sehr hilfsbereit, denn er hilft seiner Nachbarin beim Einkaufen.|H
Seine größte Schwäche ist die Ungeduld: Beim Warten wird er schnell wütend.|H
Mir gefällt Tim, weil er am Ende seinen Fehler zugibt.|S
Insgesamt ist Tim eine Figur, mit der man mitfiebert.|S
Zu seiner Schwester hat er ein enges Verhältnis.|H
Er trägt meistens eine rote Kappe und Turnschuhe.|H
Ich würde mir Tim als Freund wünschen.|S
Die Geschichte von Lena Huber erzählt, wie Tim ein Geheimnis lüftet.|E
Tim ist mutig: Er geht allein in den dunklen Keller.|H
Am Anfang wirkt Tim etwas schüchtern.|E`,
      adjektive: `Sie verschenkt ihr Taschengeld an Freunde. Sie ist [großzügig].
Er macht seine Arbeit gründlich und genau. Er ist [gewissenhaft].
Sie redet ununterbrochen. Sie ist [gesprächig].
Er traut sich alles. Er ist [mutig].
Sie denkt nur an sich. Sie ist [egoistisch].
Er wartet ruhig, auch wenn es lange dauert. Er ist [geduldig].
Sie lacht über jeden Witz und ist immer gut gelaunt. Sie ist [fröhlich].
Er glaubt jede Geschichte. Er ist [leichtgläubig].
Sie will immer die Beste sein. Sie ist [ehrgeizig].
Er vergisst ständig seine Sachen. Er ist [vergesslich].`,
      auftrag: `Schreibe eine **Charakteristik** über die Hauptfigur deines Lieblingsbuchs. => Einleitung: Titel, Autorin oder Autor, Figur ; Hauptteil: Aussehen kurz, dann drei Eigenschaften mit Belegen ; Schluss: deine Meinung zur Figur
Charakterisiere eine **Figur aus einem Film**, den du gut kennst. => Wer ist die Figur? ; Eigenschaften mit Beispielen aus dem Film ; Wie verändert sich die Figur? ; deine Meinung
Charakterisiere die Hauptfigur einer **Kurzgeschichte**, die ihr im Unterricht gelesen habt. => Einleitung ; Eigenschaften mit Textbelegen ; Beziehungen zu anderen Figuren ; Schluss
Schreibe eine Charakteristik über eine **Märchenfigur** (z. B. Rotkäppchen, der Wolf, Hänsel). => Einleitung ; Eigenschaften mit Belegen aus dem Märchen ; Schluss`
    },
    levels: {
      1: {
        ichkann: ['Du unterscheidest Aussehen und Charakter.', 'Du findest zu einem Verhalten die passende Eigenschaft.'],
        tasks: [
          { type: 'sort', pool: 'eigenschaft', n: 12, opts: [['A', 'Aussehen'], ['C', 'Charakter']], title: 'Aussehen oder Charakter?', instr: 'Schreibe die Wörter in die richtige Spalte.' },
          { type: 'pair', pool: 'verhalten', n: 6, inline: true, head: 'Verhalten', col: 'Eigenschaft', title: 'Welche Eigenschaft zeigt sich hier?', instr: 'Schreibe ein passendes Adjektiv dazu.' }
        ]
      },
      2: {
        ichkann: ['Du verwendest genaue Adjektive für Charaktereigenschaften.', 'Du begründest Eigenschaften mit Belegen.'],
        tasks: [
          { type: 'gap', pool: 'adjektive', n: 6, wordbox: true, title: 'Treffende Adjektive', instr: 'Setze die Adjektive aus dem Kasten ein.' },
          { type: 'ab', pool: 'beleg', n: 4, title: 'Welcher Satz passt besser in eine Charakteristik?', instr: 'Kreuze an.' }
        ]
      },
      3: {
        ichkann: ['Du kennst den Aufbau einer Charakteristik.', 'Du ordnest Sätze Einleitung, Hauptteil und Schluss zu.'],
        tasks: [
          { type: 'merk', title: 'Aufbau', html: '<b>Einleitung</b>: Wer? Aus welchem Buch oder Film? Erster Eindruck. <b>Hauptteil</b>: Aussehen kurz, dann Eigenschaften mit Belegen, Beziehungen zu anderen. <b>Schluss</b>: eigene Meinung, Wirkung der Figur.' },
          { type: 'choice', pool: 'teile', n: 6, opts: [['E', 'Einleitung'], ['H', 'Hauptteil'], ['S', 'Schluss']], title: 'Wohin gehört der Satz?', instr: 'Kreuze an.' },
          { type: 'pair', pool: 'verhalten', n: 4, inline: true, head: 'Verhalten', col: 'Eigenschaft', title: 'Welche Eigenschaft zeigt sich hier?', instr: 'Schreibe ein passendes Adjektiv dazu.' }
        ]
      },
      4: {
        ichkann: ['Du schreibst eine vollständige Charakteristik.', 'Du belegst jede Eigenschaft mit einem Beispiel.'],
        tasks: [
          { type: 'write', pool: 'auftrag', lines: 13, check: ['Präsens', 'Eigenschaften mit Belegen', 'Einleitung – Hauptteil – Schluss', 'sachlich'], title: 'Schreibauftrag', instr: 'Plane zuerst: Notiere drei Eigenschaften und je einen Beleg. Schreibe dann deine Charakteristik.' }
        ]
      }
    }
  });
})();
