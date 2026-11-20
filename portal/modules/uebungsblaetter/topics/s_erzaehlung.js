/* Erzählen: Erlebnis- und Reizworterzählung – 1./2. Klasse */
(function () {
  const CHECK = ['Präteritum', 'spannende Überschrift', 'Einleitung – Hauptteil – Höhepunkt – Schluss', 'Gefühle und Gedanken', 'wörtliche Rede', 'abwechslungsreiche Satzanfänge', '170–200 Wörter'];
  UB.simple({
    id: 'erzaehlung', title: 'Erzählen', area: 'schreiben', klassen: [1, 2], img: 'MiniHoS_Lesen_Buch-Burg',
    merk: '<b>Erzählung</b>: Erzählzeit ist die Mitvergangenheit (Präteritum). <b>Einleitung</b>: Wer? Wo? Wann? – kurz. <b>Hauptteil</b>: Die Spannung steigt Schritt für Schritt bis zum <b>Höhepunkt</b>, der am ausführlichsten erzählt wird. <b>Schluss</b>: Wie ging es aus? Kurz, eventuell mit einem Gedanken. Mach deine Geschichte lebendig: wörtliche Rede, Gefühle und Gedanken, treffende Verben und Adjektive, abwechslungsreiche Satzanfänge, eine Überschrift, die neugierig macht, aber nicht alles verrät.',
    pools: {
      ordnen: `Letzten Sommer fuhr ich mit meiner Familie an den Wörthersee. >> Am zweiten Tag lieh ich mir ein Tretboot aus und fuhr weit hinaus. >> Plötzlich zogen dunkle Wolken auf und der Wind wurde immer stärker. >> Mit letzter Kraft trat ich in die Pedale, während die Wellen gegen das Boot klatschten. >> Endlich erreichte ich das Ufer, wo mich Papa erleichtert in die Arme schloss.
An einem verschneiten Samstag gingen Lena und ich rodeln. >> Wir zogen unsere Schlitten auf den steilsten Hügel. >> Bei der dritten Fahrt raste ich direkt auf einen Baum zu. >> Im letzten Moment ließ ich mich seitlich in den Schnee fallen. >> Lachend lagen wir danach im Schnee und tranken zu Hause heißen Kakao.
Am Montag bemerkte ich in der Pause, dass meine Jause fehlte. >> Ich suchte in meiner Schultasche, unter der Bank und im Gang. >> Da sah ich, dass Bello, der Schulhund, an etwas kaute. >> „Das ist doch mein Wurstbrot!“, rief ich und alle lachten. >> Seitdem packe ich meine Jause immer in die Box mit Deckel.
In den Herbstferien besuchte ich meine Oma am Bauernhof. >> Am Abend sollte ich die Hühner in den Stall bringen. >> Doch das freche Huhn Berta flatterte über den Zaun und lief davon. >> Ich jagte es durch den ganzen Garten, bis es sich im Holzstoß versteckte. >> Mit Federn im Haar trug ich Berta stolz zurück in den Stall.
Vor dem Fußballturnier war ich so aufgeregt wie noch nie. >> Unsere Mannschaft spielte im Finale gegen die stärkste Schule. >> Kurz vor Schluss stand es noch immer null zu null. >> Da bekam ich den Ball, lief los und schoss mit voller Kraft. >> Als der Ball im Netz zappelte, jubelte die ganze Klasse.
Eines Nachts wachte ich von einem seltsamen Geräusch auf. >> Es kratzte und raschelte direkt unter meinem Fenster. >> Mit zitternden Händen knipste ich die Taschenlampe an. >> Im Lichtkegel saß ein kleiner Igel und schaute mich an. >> Erleichtert kroch ich zurück ins Bett und schlief bald wieder ein.
Am letzten Schultag vor den Ferien hatte unsere Klasse einen Ausflug in den Kletterpark. >> Ich wollte unbedingt den schwierigsten Parcours schaffen. >> Ganz oben auf der wackeligen Hängebrücke zitterten meine Knie. >> Ich atmete tief durch, hielt mich am Seil fest und setzte einen Fuß vor den anderen. >> Als ich das Ziel erreichte, klatschte die ganze Klasse.
An einem Sonntag backte ich mit meiner Oma einen Kuchen. >> Wir rührten den Teig und schoben ihn in den Ofen. >> Dann spielten wir Karten und vergaßen die Zeit. >> Plötzlich roch es verbrannt und schwarzer Rauch quoll aus dem Ofen. >> Lachend aßen wir am Ende Eis statt Kuchen.
In den Sommerferien zelteten wir am Ufer der Mur. >> In der Nacht hörten wir draußen ein lautes Schnaufen. >> Papa nahm die Taschenlampe und öffnete vorsichtig das Zelt. >> Vor uns stand eine Kuh und fraß unser Brot. >> Am nächsten Morgen erzählten wir allen von unserem nächtlichen Besuch.
Am Freitag sollte ich vor der Klasse mein Referat halten. >> Die ganze Nacht konnte ich vor Aufregung kaum schlafen. >> Als ich vorne stand, war mein Kopf plötzlich leer. >> Da sah ich meine Freundin, die mir aufmunternd zunickte, und begann zu sprechen. >> Am Ende bekam ich sogar Applaus.`,
      besser: `Dann ging ich nach Hause. Dann aß ich. Dann schlief ich. || Danach ging ich nach Hause. Nach dem Essen fiel ich todmüde ins Bett. || b || abwechslungsreiche Satzanfänge
Ich gehe in den Wald und sehe ein Reh. || Ich ging in den Wald und sah ein Reh. || b || Erzählzeit ist die Mitvergangenheit
Ich hatte große Angst. || Mein Herz klopfte wie wild und meine Knie zitterten. || b || Gefühle zeigen statt nur nennen
Mama sagte, dass ich sofort kommen soll. || „Komm sofort her!“, rief Mama. || b || wörtliche Rede macht lebendig
Der Hund war groß und gefährlich. || Der riesige Hund fletschte knurrend die Zähne. || b || treffende Adjektive und Verben
Mein Ausflug || Gefangen im Gewitter || b || Die Überschrift macht neugierig.
Es war Montag, das Wetter war schön, ich trug eine blaue Jacke und hatte Turnschuhe an. || An einem sonnigen Montag machte sich unsere Klasse auf den Weg zur Burg. || b || Die Einleitung ist kurz und nennt nur das Wichtige.
Plötzlich hörte ich ein lautes Krachen. || Dann war da ein Geräusch. || a || „Plötzlich“ und ein genaues Wort erzeugen Spannung.
Wir gewannen. Es war super. || Als der Schiedsrichter abpfiff, rissen wir jubelnd die Arme hoch. || b || Der Höhepunkt wird ausführlich erzählt.
Am Ende ging alles gut aus. Das war mein Erlebnis. Ende. || Noch heute muss ich lachen, wenn ich an diesen Tag denke. || b || Ein guter Schluss rundet ab.
Wir gingen in den Wald. Wir gingen zum Bach. Wir gingen nach Hause. || Zuerst wanderten wir durch den Wald, später spielten wir am Bach. Erst am Abend kehrten wir heim. || b || abwechslungsreiche Verben und Satzanfänge
Ich habe mich gefreut. || Vor Freude machte ich einen Luftsprung. || b || Gefühle zeigen statt nennen
Da kam ein Mann. || Da tauchte ein großer Mann mit einem schwarzen Hut auf. || b || anschaulich beschreiben
Lena hat gerufen, dass ich kommen soll. || „Komm schnell!“, rief Lena. || b || wörtliche Rede`,
      verben: `Der Dieb [schlich] leise durch den dunklen Flur.
Mit dem verletzten Fuß [humpelte] Max zum Arzt.
Gemütlich [schlenderten] wir durch die Altstadt.
Lena [stolperte] über einen Stein und fiel hin.
Weil der Bus schon da war, [rannte] ich los.
Die Maus [huschte] blitzschnell in ihr Loch.
„Pst!“, [flüsterte] Paul, „da ist jemand.“
„Hilfe!“, [schrie] das Mädchen verzweifelt.
„Warum bist du so spät?“, [fragte] Mama streng.
„Ich habe gewonnen!“, [jubelte] Mia.
„Darf ich bitte mitkommen?“, [bettelte] mein kleiner Bruder.
„Das stimmt doch gar nicht!“, [widersprach] Tom.`,
      merkmal: `Erzählzeit Mitvergangenheit (Präteritum)|J
Erzählzeit Gegenwart (Präsens)|N
wörtliche Rede|J
Gefühle und Gedanken|J
lange Einleitung mit vielen Nebensachen|N
ein ausführlich erzählter Höhepunkt|J
Überschrift, die schon das Ende verrät|N
immer gleiche Satzanfänge (dann, dann, dann)|N
treffende Verben und Adjektive|J
Überschrift, die neugierig macht|J
nur Tatsachen aufzählen wie in einem Bericht|N
ein kurzer Schluss|J`,
      auftrag: `Schreibe eine Erlebniserzählung zum Thema: **Das war knapp!** => Erzähle von einem Erlebnis, bei dem fast etwas schiefgegangen wäre. ; Der Höhepunkt ist der Moment, in dem es knapp wird.
Schreibe eine Erlebniserzählung zum Thema: **Mein peinlichstes Erlebnis** => Ein echtes oder erfundenes Erlebnis ; Gefühle (Scham, Erleichterung) zeigen
Schreibe eine Erlebniserzählung zum Thema: **Allein zu Hause** => Spannung langsam aufbauen ; Geräusche und Gedanken beschreiben
Schreibe eine Erlebniserzählung zum Thema: **Ein Tag, den ich nie vergesse** => Ein besonderer Tag ; Höhepunkt ausführlich erzählen
Schreibe eine Geschichte mit den Reizwörtern: **Gewitter – Taschenlampe – Katze** => Alle drei Reizwörter kommen vor ; Reizwörter sind wichtig für die Handlung
Schreibe eine Geschichte mit den Reizwörtern: **Schlüssel – Keller – Geburtstag** => Alle drei Reizwörter kommen vor ; Spannung bis zum Höhepunkt steigern
Schreibe eine Geschichte mit den Reizwörtern: **Zug – Rucksack – fremder Mann** => Alle drei Reizwörter kommen vor ; Ein überraschendes Ende ist erlaubt
Schreibe eine Geschichte mit den Reizwörtern: **Nebel – Pfiff – Hund** => Alle drei Reizwörter kommen vor ; Stimmung mit Adjektiven erzeugen
Schreibe eine Erlebniserzählung zum Thema: **Plötzlich war es still** => Spannung aufbauen ; Was passiert nach der Stille? ; Gefühle zeigen
Schreibe eine Erlebniserzählung zum Thema: **Mein erster Tag in der neuen Schule** => Erwartungen und Gefühle ; ein besonderer Moment als Höhepunkt
Schreibe eine Erlebniserzählung zum Thema: **Verlaufen!** => Wo und wie hast du dich verlaufen? ; Angst und Erleichterung zeigen
Schreibe eine Geschichte mit den Reizwörtern: **Baumhaus – Sturm – Taschenmesser** => Alle drei Reizwörter kommen vor ; Höhepunkt ausführlich erzählen
Schreibe eine Geschichte mit den Reizwörtern: **Fundbüro – Brief – Überraschung** => Alle drei Reizwörter kommen vor ; überraschendes Ende
Schreibe eine Geschichte mit den Reizwörtern: **Schulausflug – Höhle – Fledermaus** => Alle drei Reizwörter kommen vor ; Spannung mit Geräuschen erzeugen`,
      einleitung: `Schreibe nur die **Einleitung** zu einer Erzählung mit dem Titel **„Das verschwundene Handy“**. => Wer? Wo? Wann? ; zwei bis drei Sätze ; Präteritum
Schreibe nur die **Einleitung** zu einer Erzählung mit dem Titel **„Gefangen im Lift“**. => Wer? Wo? Wann? ; zwei bis drei Sätze ; Präteritum
Schreibe nur die **Einleitung** zu einer Erzählung mit dem Titel **„Der Ausflug, der ins Wasser fiel“**. => Wer? Wo? Wann? ; zwei bis drei Sätze ; Präteritum
Schreibe nur die **Einleitung** zu einer Erzählung mit dem Titel **„Eine Nacht im Zelt“**. => Wer? Wo? Wann? ; zwei bis drei Sätze ; Präteritum
Schreibe nur die **Einleitung** zu einer Erzählung mit dem Titel **„Der geheimnisvolle Brief“**. => Wer? Wo? Wann? ; zwei bis drei Sätze ; Präteritum
Schreibe nur die **Einleitung** zu einer Erzählung mit dem Titel **„Allein im Wald“**. => Wer? Wo? Wann? ; zwei bis drei Sätze ; Präteritum
Schreibe nur die **Einleitung** zu einer Erzählung mit dem Titel **„Das Tor in letzter Sekunde“**. => Wer? Wo? Wann? ; zwei bis drei Sätze ; Präteritum
Schreibe nur die **Einleitung** zu einer Erzählung mit dem Titel **„Hilfe, der Hund ist weg!“**. => Wer? Wo? Wann? ; zwei bis drei Sätze ; Präteritum`
    },
    levels: {
      1: {
        ichkann: ['Du kennst den Aufbau einer Erzählung.', 'Du erkennst, was eine Erzählung lebendig macht.'],
        tasks: [
          { type: 'order', pool: 'ordnen', n: 1, title: 'Bring die Geschichte in die richtige Reihenfolge.', instr: 'Nummeriere von 1 bis 5. Wo ist der Höhepunkt?' },
          { type: 'ab', pool: 'besser', n: 3, title: 'Welcher Satz ist besser?', instr: 'Kreuze den Satz an, der besser in eine Erzählung passt.' },
          { type: 'choice', pool: 'merkmal', cover: true, keys: ['J', 'N'], n: 6, head: 'Merkmal', title: 'Was gehört in eine gute Erzählung?', instr: 'Kreuze an.', opts: [['J', 'ja'], ['N', 'nein']] }
        ]
      },
      2: {
        ichkann: ['Du verwendest treffende Verben statt „gehen“ und „sagen“.', 'Du kannst eine kurze, passende Einleitung schreiben.', 'Du kannst Sätze lebendiger machen.'],
        tasks: [
          { type: 'gap', pool: 'verben', n: 6, wordbox: true, title: 'Treffende Verben', instr: 'Setze das passende Verb aus dem Kasten ein.' },
          { type: 'ab', pool: 'besser', n: 3, title: 'Welcher Satz ist besser?', instr: 'Kreuze an. Kannst du sagen, warum?' },
          { type: 'write', pool: 'einleitung', lines: 4, title: 'Eine Einleitung schreiben', instr: '' }
        ]
      },
      3: {
        ichkann: ['Du kannst eine Erzählung planen.', 'Du schreibst eine spannende Erzählung mit Höhepunkt (Schularbeitsprobe).'],
        tasks: [
          { type: 'ab', pool: 'besser', n: 2, title: 'Zum Aufwärmen: Was ist besser?', instr: 'Kreuze an.' },
          { type: 'write', pool: 'auftrag', lines: 0, check: CHECK, plan: [['Einleitung', 'Wer? Wo? Wann?'], ['Hauptteil', 'Was passiert Schritt für Schritt?'], ['Höhepunkt', 'Der spannendste Moment – Gefühle, wörtliche Rede'], ['Schluss', 'Wie ging es aus?']], note: 'Schreibe deine Erzählung in dein Heft. Kontrolliere sie danach mit der Checkliste.', title: 'Schreibauftrag' }
        ]
      }
    }
  });
})();
