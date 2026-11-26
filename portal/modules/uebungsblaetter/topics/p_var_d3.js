/* Deutsch – mehr Varianten, Teil 3 (Sprachbetrachtung): jeder Pool mindestens 5 × so groß wie die Aufgabenzahl */
(function () {
  const ext = UB.extendTopic;

  ext('wortarten', { more: {
    woerter: `Kerze|N
Brücke|N
Wolke|N
Gabel|N
Zwiebel|N
Löffel|N
Insel|N
Schrank|N
Garten|N
klettern|V
flüstern|V
bauen|V
rechnen|V
tauchen|V
kochen|V
zählen|V
wandern|V
lachen|V
mutig|A
eckig|A
salzig|A
lustig|A
dunkel|A
weich|A
sauer|A
glatt|A
laut|A`,
    markiert: `Die Katze **schläft** auf dem Sofa.|V
Das Wasser im See ist **kalt**.|A
Am **Abend** lesen wir eine Geschichte.|N
Der Clown trägt eine **rote** Nase.|A
Opa **repariert** das Fahrrad.|V
Unsere **Lehrerin** erklärt die Aufgabe.|N
Die Suppe schmeckt **salzig**.|A
Die Kinder **basteln** Laternen.|V
Im **Wald** wachsen viele Pilze.|N
Lisa **schreibt** einen Brief.|V
Der **Zug** fährt um acht Uhr ab.|N
Wir trinken **warmen** Tee.|A
Das Baby **lacht** laut.|V
Auf dem Tisch steht eine **Vase**.|N
Der Weg ist **steil**.|A
Die Vögel **fliegen** nach Süden.|V
Meine **Tante** wohnt in Wien.|N
Das Kleid ist **bunt**.|A
Wir **springen** über die Pfütze.|V
Mein Hund ist sehr **lieb**.|A`,
    reihe: `Die Katze schläft auf dem Sofa. :: 6 Wörter => Artikel – Nomen – Verb – Präposition – Artikel – Nomen
Wir gehen heute in den Park. :: 6 Wörter => Pronomen – Verb – Adverb – Präposition – Artikel – Nomen
Lena singt und Tom tanzt. :: 5 Wörter => Nomen – Verb – Konjunktion – Nomen – Verb
Der Hund wartet vor der Tür. :: 6 Wörter => Artikel – Nomen – Verb – Präposition – Artikel – Nomen
Ich trinke Tee oder Saft. :: 5 Wörter => Pronomen – Verb – Nomen – Konjunktion – Nomen
Der Kuchen ist süß und lecker. :: 6 Wörter => Artikel – Nomen – Verb – Adjektiv – Konjunktion – Adjektiv
Bald beginnen die Ferien. :: 4 Wörter => Adverb – Verb – Artikel – Nomen
Wir fahren mit dem Bus nach Graz. :: 7 Wörter => Pronomen – Verb – Präposition – Artikel – Nomen – Präposition – Nomen
Oma backt oft Kekse. :: 4 Wörter => Nomen – Verb – Adverb – Nomen
Die Kinder lachen, denn der Clown stolpert. :: 7 Wörter => Artikel – Nomen – Verb – Konjunktion – Artikel – Nomen – Verb
Ich warte hier auf dich. :: 5 Wörter => Pronomen – Verb – Adverb – Präposition – Pronomen
Max und ich spielen draußen. :: 5 Wörter => Nomen – Konjunktion – Pronomen – Verb – Adverb
Der Vogel sitzt oben auf dem Dach. :: 7 Wörter => Artikel – Nomen – Verb – Adverb – Präposition – Artikel – Nomen
Das Buch liegt neben dem Bett. :: 6 Wörter => Artikel – Nomen – Verb – Präposition – Artikel – Nomen`,
    reihe4: `Mein kleiner Bruder spielt gern mit seinem Ball. => Pronomen – Adjektiv – Nomen – Verb – Adverb – Präposition – Pronomen – Nomen
Wir gehen morgen in den Zoo, weil das Wetter schön ist. => Pronomen – Verb – Adverb – Präposition – Artikel – Nomen – Konjunktion – Artikel – Nomen – Adjektiv – Verb
Die neue Lehrerin erklärt uns heute die Aufgabe. => Artikel – Adjektiv – Nomen – Verb – Pronomen – Adverb – Artikel – Nomen
Lisa liest ein spannendes Buch, aber sie ist müde. => Nomen – Verb – Artikel – Adjektiv – Nomen – Konjunktion – Pronomen – Verb – Adjektiv
Hinter dem alten Haus steht ein hoher Baum. => Präposition – Artikel – Adjektiv – Nomen – Verb – Artikel – Adjektiv – Nomen
Oft treffen wir unsere Freunde nach der Schule. => Adverb – Verb – Pronomen – Pronomen – Nomen – Präposition – Artikel – Nomen`
  } });

  ext('nomen', { more: {
    artikel: `{der|die|das} Tisch
{die|der|das} Lampe
{das|der|die} Fenster
{der|die|das} Teller
{die|der|das} Gabel
{das|der|die} Messer
{der|die|das} Schrank
{die|der|das} Wolke
{das|der|die} Pferd
{der|die|das} Vogel
{die|der|das} Banane
{das|der|die} Buch
{der|die|das} Regen
{die|der|das} Tür
{das|der|die} Bett
{der|die|das} Mond
{die|der|das} Brille
{das|der|die} Schaf
{der|die|das} Käfer`,
    mehrzahl: `die Maus => die Mäuse
das Buch => die Bücher
der Hut => die Hüte
die Stadt => die Städte
das Glas => die Gläser
der Vogel => die Vögel
die Nacht => die Nächte
das Dach => die Dächer
der Fuß => die Füße
die Hand => die Hände
das Rad => die Räder
der Baum => die Bäume`,
    genus: `Löffel|m
Gabel|f
Messer|n
Teller|m
Schüssel|f
Kissen|n
Spiegel|m
Treppe|f
Fenster|n
Garten|m`,
    mehrzahl4: `das Museum => die Museen
das Album => die Alben
das Thema => die Themen
das Virus => die Viren
das Konto => die Konten
das Lexikon => die Lexika
der Kaktus => die Kakteen
das Datum => die Daten
das Drama => die Dramen
die Firma => die Firmen
das Aquarium => die Aquarien`,
    fuge: `das Geburtstagsgeschenk => Geburtstag + s + Geschenk
die Hundehütte => Hund + e + Hütte
die Straßenbahn => Straße + n + Bahn
das Bilderbuch => Bild + er + Buch
die Mausefalle => Maus + e + Falle
die Zeitungsseite => Zeitung + s + Seite
das Eierbrot => Ei + er + Brot
die Katzenpfote => Katze + n + Pfote
der Bahnhofsplatz => Bahnhof + s + Platz`,
    konkret: `das Glück|A
der Stuhl|K
die Angst|A
das Kissen|K
die Freundschaft|A
die Gabel|K
der Mut|A`,
    zusammen: `der Sand + die Burg => die Sandburg
das Haus + die Tür => die Haustür
der Apfel + der Baum => der Apfelbaum
der Fuß + der Ball => der Fußball`,
    zerlegen: `der Fußball :: Bestimmungswort + Grundwort => Fuß + Ball
die Haustür :: Bestimmungswort + Grundwort => Haus + Tür
das Apfelmus :: Bestimmungswort + Grundwort => Apfel + Mus`,
    text4: `Beim [Spielen:spielen] habe ich die Zeit vergessen. Es gab viel [Spannendes:spannend] zu sehen.
Das [Schwimmen:schwimmen] im See war herrlich. Ich wünsche dir nur das [Beste:gut].
Zum [Lesen:lesen] brauche ich Ruhe. Wir haben etwas [Tolles:toll] erlebt.
Nach dem [Turnen:turnen] bin ich müde. Es gibt nichts [Schöneres:schön] als Ferien.`
  } });

  ext('verben', { more: {
    form: `spielen :: wir => wir spielen
lachen :: du => du lachst
malen :: ihr => ihr malt
schreiben :: er => er schreibt
hören :: ich => ich höre
bauen :: du => du baust
turnen :: er => er turnt
lernen :: ihr => ihr lernt
schwimmen :: wir => wir schwimmen
rufen :: du => du rufst
zeichnen :: er => er zeichnet
reiten :: du => du reitest`,
    stark: `lesen :: du => du liest
essen :: er => er isst
nehmen :: du => du nimmst
laufen :: sie => sie läuft
schlafen :: er => er schläft
tragen :: du => du trägst
treffen :: er => er trifft
fallen :: es => es fällt
werfen :: du => du wirfst
fahren :: er => er fährt`,
    imp: `geben (du / ihr) => Gib! – Gebt!
lesen (du / ihr) => Lies! – Lest!
helfen (du / ihr) => Hilf! – Helft!
nehmen (du / ihr) => Nimm! – Nehmt!
essen (du / ihr) => Iss! – Esst!
schlafen (du / ihr) => Schlaf! – Schlaft!
warten (du / ihr) => Warte! – Wartet!
sprechen (du / ihr) => Sprich! – Sprecht!
rufen (du / ihr) => Ruf! – Ruft!
öffnen (du / ihr) => Öffne! – Öffnet!`,
    art: `Wir wollen morgen **schwimmen**.|N
**Komm** sofort her!|B
Du **singst** sehr schön.|P`,
    befehl: `Du gibst mir das Buch. => Gib mir das Buch!
Du liest den Text laut vor. => Lies den Text laut vor!
Du sprichst lauter. => Sprich lauter!
Du isst dein Gemüse. => Iss dein Gemüse!
Du siehst genau hin. => Sieh genau hin!`,
    fehler: `Du lauft sehr schnell. => Du läufst sehr schnell.
Nehm dir ein Stück Kuchen! => Nimm dir ein Stück Kuchen!
Er tragt den Koffer. => Er trägt den Koffer.
Helf mir bitte! => Hilf mir bitte!`
  } });

  ext('adjektive', { more: {
    steigern: `klein => kleiner – am kleinsten
schnell => schneller – am schnellsten
langsam => langsamer – am langsamsten
laut => lauter – am lautesten
warm => wärmer – am wärmsten
lang => länger – am längsten
kurz => kürzer – am kürzesten
jung => jünger – am jüngsten
alt => älter – am ältesten
groß => größer – am größten
hell => heller – am hellsten
weich => weicher – am weichsten
süß => süßer – am süßesten
breit => breiter – am breitesten
billig => billiger – am billigsten
fleißig => fleißiger – am fleißigsten
schwer => schwerer – am schwersten
leicht => leichter – am leichtesten
bunt => bunter – am buntesten`,
    gegenteil: `laut => leise
hell => dunkel
voll => leer
hart => weich
breit => schmal
stark => schwach
reich => arm
billig => teuer
glatt => rau
fleißig => faul
mutig => ängstlich
gesund => krank
eng => weit
offen => geschlossen
lustig => traurig`,
    bilden: `der Durst :: -ig => durstig
die Gefahr :: -lich => gefährlich
die Sonne :: -ig => sonnig
der Schmutz :: -ig => schmutzig
das Glück :: -lich => glücklich
die Farbe :: -ig => farbig
der Herbst :: -lich => herbstlich
die Wolke :: -ig => wolkig
der Hunger :: -ig => hungrig
der Ärger :: -lich => ärgerlich
das Gold :: -en => golden
der Zorn :: -ig => zornig`,
    unreg: `gut => besser – am besten
viel => mehr – am meisten
hoch => höher – am höchsten
nah => näher – am nächsten
gern => lieber – am liebsten
teuer => teurer – am teuersten
dunkel => dunkler – am dunkelsten
groß => größer – am größten
alt => älter – am ältesten
warm => wärmer – am wärmsten
kurz => kürzer – am kürzesten
jung => jünger – am jüngsten
scharf => schärfer – am schärfsten
edel => edler – am edelsten`,
    fehler: `Mein Rad ist schneller wie deins. => Mein Rad ist schneller als deins.
Heute ist es mehr kälter als gestern. => Heute ist es kälter als gestern.
Der Elefant ist am größtesten. => Der Elefant ist am größten.
Das war der bestete Tag. => Das war der beste Tag.
Sie ist so groß als ich. => Sie ist so groß wie ich.
Das Auto ist teuerer als das Fahrrad. => Das Auto ist teurer als das Fahrrad.
Ich esse Schokolade am gernsten. => Ich esse Schokolade am liebsten.`,
    vergleich: `Der Elefant ist größer {als|wie} die Maus.
Mein Rad ist genauso schnell {wie|als} deins.
Im Winter ist es kälter {als|wie} im Sommer.
Lisa ist so alt {wie|als} ich.
Ein Auto ist teurer {als|wie} ein Fahrrad.
Das Buch ist nicht so spannend {wie|als} der Film.`,
    stufe: `Mein Bruder ist **größer** als ich.|V
Der Gepard ist das **schnellste** Tier.|H
Das Wasser ist **kalt**.|G
Pizza esse ich am **liebsten**.|H`,
    dekl: `Wir wohnen in einem [kleinen:klein] Haus mit einem [schönen:schön] Garten.
Ich esse gern [frisches:frisch] Brot.
Die [alte:alt] Frau füttert die [hungrigen:hungrig] Tauben.
Er trägt einen [roten:rot] Pullover.
Mit [großer:groß] Freude öffnete sie das Geschenk.`
  } });

  ext('pronomen', { more: {
    besitz: `Lena sucht [ihren:ihr] Schlüssel.
Wir besuchen [unsere:unser] Oma.
Max spielt mit [seiner:sein] Schwester.
Ich fahre mit [meinem:mein] Fahrrad.
Vergiss [deine:dein] Jacke nicht!
Die Kinder zeigen [ihre:ihr] Bilder.
Tom ruft [seinen:sein] Freund an.
Gebt mir bitte [eure:euer] Hefte!
Wir feiern [unseren:unser] Sieg.`,
    fehler: `Ich habe mir gestern verletzt. => Ich habe mich gestern verletzt.
Kannst du mich helfen? => Kannst du mir helfen?
Das Buch, wo ich lese, ist spannend. => Das Buch, das ich lese, ist spannend.
Ich freue mir auf die Ferien. => Ich freue mich auf die Ferien.
Sag es ihn bitte! => Sag es ihm bitte!`,
    ersetzen: `Der Hund bellt. [Er] hat Hunger.
Mama kommt. Ich helfe [ihr] beim Tragen.
Das Fahrrad ist neu. Papa hat [es] gekauft.`,
    reflexiv: `Ich wasche [mich] am Morgen.
Ihr freut [euch] auf die Ferien.
Tom kämmt [sich] die Haare.
Wir treffen [uns] am Bahnhof.
Du putzt [dir] die Zähne.
Ich wünsche [mir] einen Hund.`,
    art: `**Dieses** Buch gefällt mir.|Dem
Der Hund, **der** bellt, ist klein.|Rel
Das ist **unser** Haus.|Poss
**Er** spielt Fußball.|Pers
Wir freuen **uns** auf morgen.|Refl
**Jener** Mann dort ist mein Onkel.|Dem
Die Frau, **die** dort steht, ist Ärztin.|Rel
Habt ihr **eure** Jacken?|Poss
Ich gebe **ihm** den Ball.|Pers
Du sollst **dich** beeilen.|Refl
**Diese** Jacke ist zu klein.|Dem`,
    text4: `Das ist die Lehrerin, [die] uns Deutsch unterrichtet. [Ihr] Unterricht macht Spaß.
Tom hat [seinen:sein] Schlüssel verloren. Wir suchen [ihn] gemeinsam.
Die Kinder freuen [sich], weil [ihre:ihr] Oma kommt.
Kennst du das Mädchen, [das] dort singt? [Ihre] Stimme ist wunderschön.`
  } });

  ext('satzarten', { more: {
    frage: `Wann beginnt der Film?|E
Kommst du morgen mit?|J
Wo wohnt deine Oma?|E
Hast du Hunger?|J
Warum weinst du?|E
Magst du Pizza?|J
Was machst du am Wochenende?|E
Kann ich dir helfen?|J
Wie alt ist dein Bruder?|E
Regnet es draußen?|J`,
    zeichen: `Morgen fahren wir ans Meer{.|?|!}
Hast du deine Jause dabei{?|.|!}
Hurra, wir haben gewonnen{!|.|?}
Der Hund schläft im Körbchen{.|?|!}
Warum lachst du{?|.|!}
Komm sofort her{!|.|?}
Ich lese gern Comics{.|?|!}
Wie spät ist es{?|.|!}`,
    art: `Die Katze schläft.|AU
Hast du Zeit?|F
Räum bitte dein Zimmer auf!|AF
Juhu, es schneit!|AR
Wir fahren morgen nach Linz.|AU
Wann kommst du?|F
Setz dich hin!|AF
Au, das tut weh!|AR`,
    umformen: `Lisa trinkt Tee. :: Entscheidungsfrage => Trinkt Lisa Tee?
Du räumst auf. :: Aufforderungssatz => Räum auf!
Der Zug kommt um acht Uhr. :: W-Frage nach der Zeit => Wann kommt der Zug?
Max wohnt in Graz. :: W-Frage nach dem Ort => Wo wohnt Max?
Ihr seid leise. :: Aufforderungssatz => Seid leise!
Die Katze schläft. :: Entscheidungsfrage => Schläft die Katze?`,
    wfrage: `**Lena** spielt Gitarre. => Wer spielt Gitarre?
Ich sehe **den Bus**. => Wen oder was siehst du?
Wir treffen uns **um drei Uhr**. => Wann trefft ihr euch?
Der Ball liegt **unter dem Tisch**. => Wo liegt der Ball?
Tom gibt **seinem Freund** das Heft. => Wem gibt Tom das Heft?
Die Jacke **meines Bruders** ist blau. => Wessen Jacke ist blau?`,
    zeichen4: `Die Lehrerin fragt[:] „Wer hat das gemacht[?]“
Lisa ruft[:] „Pass auf[!]“
Ich weiß nicht, wo er wohnt[.]
„Wann gibt es Essen[?]“[,] fragt Max.`
  } });

  ext('praepositionen', { more: {
    artikel: `Wir gehen durch {den|dem|des} Park.
Das Geschenk ist für {meinen|meinem|meines} Vater.
Ich fahre mit {dem|den|der} Bus zur Schule.
Nach {der|die|den} Schule spielen wir Fußball.
Er kommt aus {der|die|dem} Küche.
Wir sitzen seit {einer|eine|einen} Stunde hier.
Ohne {meinen|meinem|meines} Schirm werde ich nass.
Die Katze läuft um {das|dem|des} Haus.
Lena geht zu {ihrer|ihre|ihren} Freundin.
Wir kämpfen gegen {den|dem|des} Wind.
Der Brief ist von {meinem|meinen|meines} Onkel.
Ich spiele mit {meinen|meinem|meine} Freunden.
Er wohnt bei {seiner|seine|seinen} Tante.
Sie geht ohne {ihren|ihrem|ihres} Hund spazieren.
Nach {dem|den|der} Essen putze ich die Zähne.`,
    gen: `Wegen [des Regens:der Regen] bleiben wir zu Hause.
Trotz [der Kälte:die Kälte] gehen wir schwimmen.
Während [des Films:der Film] war es ganz still.
Statt [eines Kuchens:ein Kuchen] gibt es Obst.
Außerhalb [der Stadt:die Stadt] ist es ruhig.
Innerhalb [einer Woche:eine Woche] muss das Projekt fertig sein.
Wegen [des Gewitters:das Gewitter] fiel das Training aus.`,
    text4: `Ich hänge das Bild an [die] Wand. Jetzt hängt es an [der] Wand.
Die Katze springt auf [das] Sofa. Jetzt liegt sie auf [dem] Sofa.
Er stellt das Fahrrad vor [das] Haus. Jetzt steht es vor [dem] Haus.
Lisa legt den Ball hinter [die] Hecke. Jetzt liegt er hinter [der] Hecke.
Ich stecke den Brief in [den] Umschlag. Jetzt steckt er in [dem] Umschlag.`,
    fehler: `Ich gehe mit meinen Bruder spazieren. => Ich gehe mit meinem Bruder spazieren.
Wegen dem Gewitter fiel das Spiel aus. => Wegen des Gewitters fiel das Spiel aus.
Die Blumen sind für meiner Mutter. => Die Blumen sind für meine Mutter.
Er kommt aus den Garten. => Er kommt aus dem Garten.
Wir fahren ohne unserem Hund. => Wir fahren ohne unseren Hund.
Nach den Unterricht gehen wir heim. => Nach dem Unterricht gehen wir heim.`
  } });

  ext('wortbildung', { more: {
    art: `der Regenschirm|Z
die Schönheit|A
unfreundlich|A
die Haustür|Z
das Lesebuch|Z
die Freiheit|A
das Fußballspiel|Z
ungesund|A
der Schreibtisch|Z
die Erklärung|A
verkaufen|A
das Wohnzimmer|Z
lesbar|A`,
    nomen: `wandern :: -ung => die Wanderung
zeichnen :: -ung => die Zeichnung
erklären :: -ung => die Erklärung
warnen :: -ung => die Warnung
üben :: -ung => die Übung
rechnen :: -ung => die Rechnung
ordnen :: -ung => die Ordnung
einladen :: -ung => die Einladung
landen :: -ung => die Landung
krank :: -heit => die Krankheit
frei :: -heit => die Freiheit
schön :: -heit => die Schönheit
dunkel :: -heit => die Dunkelheit
sicher :: -heit => die Sicherheit
faul :: -heit => die Faulheit
klug :: -heit => die Klugheit
Freund :: -schaft => die Freundschaft
Mann :: -schaft => die Mannschaft
Nachbar :: -schaft => die Nachbarschaft
Feind :: -schaft => die Feindschaft
Bote :: -schaft => die Botschaft
Wissen :: -schaft => die Wissenschaft
Meister :: -schaft => die Meisterschaft
Herr :: -schaft => die Herrschaft`,
    familie: `Fahrrad|F
Fahrer|F
Abfahrt|F
Fahrkarte|F
Fähre|F
Fahrbahn|F
abfahren|F
Spieler|S
Spielplatz|S
Beispiel|S
Spielzeug|S
verspielt|S
Fußballspiel|S
Schreibtisch|W
Schrift|W
unterschreiben|W
Kugelschreiber|W
Schreibheft|W`,
    wortart: `fahren → Nomen (Person) => der Fahrer
schön → Nomen => die Schönheit
lesen → Nomen (Person) => der Leser
Gefahr → Adjektiv => gefährlich
Sonne → Adjektiv => sonnig
kalt → Nomen => die Kälte
hoffen → Nomen => die Hoffnung
Glück → Adjektiv => glücklich
frei → Verb => befreien
dunkel → Verb => verdunkeln`,
    zerlegen: `der Schreibtisch => schreiben + Tisch (Verb + Nomen)
hellblau => hell + blau (Adjektiv + Adjektiv)
das Kleingeld => klein + Geld (Adjektiv + Nomen)
schneeweiß => Schnee + weiß (Nomen + Adjektiv)
der Spielplatz => spielen + Platz (Verb + Nomen)
die Haustür => Haus + Tür (Nomen + Nomen)`,
    familie4: `Das Wetter ist heute [sonnig:Sonne].
Wir danken für die [Einladung:einladen].
Er ist sehr [freundlich:Freund].
Die [Erklärung:erklären] war gut verständlich.
Das Baby schläft [friedlich:Frieden].
Die [Krankheit:krank] dauerte eine Woche.`
  } });

  ext('satzgefuege', { more: {
    verbinden: `Ich weiß es. Du hast Geburtstag. :: dass => Ich weiß, dass du Geburtstag hast.
Lena bleibt zu Hause. Sie ist krank. :: weil => Lena bleibt zu Hause, weil sie krank ist.
Wir hoffen es. Das Wetter wird schön. :: dass => Wir hoffen, dass das Wetter schön wird.
Max ist traurig. Sein Hund ist weggelaufen. :: weil => Max ist traurig, weil sein Hund weggelaufen ist.
Mama sagt es. Das Essen ist fertig. :: dass => Mama sagt, dass das Essen fertig ist.
Wir tragen Jacken. Es ist kalt. :: weil => Wir tragen Jacken, weil es kalt ist.
Ich freue mich. Du besuchst mich. :: dass => Ich freue mich, dass du mich besuchst.
Der Bus kommt zu spät. Es gibt einen Stau. :: weil => Der Bus kommt zu spät, weil es einen Stau gibt.
Tom merkt es. Er hat sein Heft vergessen. :: dass => Tom merkt, dass er sein Heft vergessen hat.
Ich lerne Englisch. Ich möchte nach London reisen. :: weil => Ich lerne Englisch, weil ich nach London reisen möchte.
Die Lehrerin erklärt es. Morgen fällt Turnen aus. :: dass => Die Lehrerin erklärt, dass morgen Turnen ausfällt.
Wir gehen nicht schwimmen. Das Wasser ist zu kalt. :: weil => Wir gehen nicht schwimmen, weil das Wasser zu kalt ist.
Es ist schön. Du bist wieder gesund. :: dass => Es ist schön, dass du wieder gesund bist.
Lisa lacht. Der Film ist lustig. :: weil => Lisa lacht, weil der Film lustig ist.`,
    erkennen: `**Ich bleibe zu Hause**, weil ich krank bin.|H
Ich bleibe zu Hause, **weil ich krank bin**.|N
**Als es dunkel wurde**, gingen wir heim.|N
Als es dunkel wurde, **gingen wir heim**.|H
Ich glaube, **dass du recht hast**.|N
**Der Hund bellt**, wenn es läutet.|H
Das Buch, **das ich lese**, ist spannend.|N`,
    art: `Ich gehe schlafen, weil ich müde bin.|G
Es regnet, aber wir gehen hinaus.|R
Ich ziehe eine Jacke an, denn es ist kalt.|R
Obwohl es kalt ist, gehen wir baden.|G
Lena liest und Tom malt.|R
Ich hoffe, dass du kommst.|G
Wir spielen Fußball, sobald die Schule aus ist.|G
Der Bus kam zu spät, deshalb verpassten wir den Film.|R`,
    komma4: `Als wir ankamen, sahen wir, dass das Tor geschlossen war.
Ich weiß nicht, ob er kommt, weil er krank ist.
Obwohl es regnete, gingen wir hinaus, denn wir wollten spielen.
Der Hund, der uns gehört, bellt, wenn es läutet.
Nachdem sie gegessen hatte, rief sie ihre Freundin an, die in Wien wohnt.
Wir fragten, wann der Zug fährt, und kauften die Karten.`,
    verb4: `Es regnete. Wir spielten Fußball. :: obwohl – Nebensatz vorne => Obwohl es regnete, spielten wir Fußball.
Ich bin heimgekommen. Ich mache die Hausübung. :: nachdem – Nebensatz vorne => Nachdem ich heimgekommen bin, mache ich die Hausübung.
Du gehst. Mach das Licht aus. :: bevor – Nebensatz vorne => Bevor du gehst, mach das Licht aus.
Sie lernt viel. Sie will den Test bestehen. :: damit => Sie lernt viel, damit sie den Test besteht.
Er war krank. Er ging zur Schule. :: obwohl – Nebensatz hinten => Er ging zur Schule, obwohl er krank war.`
  } });

  ext('relativsaetze', { more: {
    pronomen: `Das Kind, {das|dass|dem} dort spielt, ist mein Bruder.
Die Frau, {die|der|deren} im Garten arbeitet, ist meine Nachbarin.
Der Hund, {den|der|dem} ich gefunden habe, ist sehr lieb.
Das Fahrrad, {das|den|dem} ich mir wünsche, ist rot.
Die Lehrerin, {der|die|den} ich das Heft gebe, lächelt.
Der Schüler, {dem|den|der} ich helfe, lernt schnell.
Das Buch, {das|dass|dem} auf dem Tisch liegt, gehört mir.
Die Katze, {die|der|den} auf dem Dach sitzt, miaut.
Der Kuchen, {den|der|dem} Oma gebacken hat, schmeckt köstlich.
Das Mädchen, {dem|das|den} ich den Ball zuwerfe, fängt ihn.
Die Stadt, {die|der|den} wir besuchen, liegt am Meer.
Die Kinder, {die|denen|deren} im Hof spielen, sind laut.
Der Baum, {den|der|dem} wir gepflanzt haben, wächst schnell.
Die Jacke, {die|der|den} ich trage, ist warm.`,
    verbinden: `Das ist der Ball. Ich habe mit ihm gespielt. => Das ist der Ball, mit dem ich gespielt habe.
Die Kinder freuen sich. Ich habe ihnen Eis gekauft. => Die Kinder, denen ich Eis gekauft habe, freuen sich.
Der Mann ist Arzt. Sein Auto steht vor dem Haus. => Der Mann, dessen Auto vor dem Haus steht, ist Arzt.
Der Film war lustig. Wir haben über ihn gelacht. => Der Film, über den wir gelacht haben, war lustig.
Das ist mein Freund. Ich vertraue ihm. => Das ist mein Freund, dem ich vertraue.
Der Stuhl ist kaputt. Ich sitze auf ihm. => Der Stuhl, auf dem ich sitze, ist kaputt.
Das Mädchen gewinnt. Sein Pferd ist am schnellsten. => Das Mädchen, dessen Pferd am schnellsten ist, gewinnt.`,
    beistrich: `Die Katze, die auf dem Sofa schläft, heißt Minka.
Ich lese das Buch, das du mir geschenkt hast.
Der Bus, mit dem wir fahren, ist voll.
Das Haus, in dem ich wohne, ist alt.`,
    attribut: `das **rote** Auto|Adj
die Jacke **meines Bruders**|Gen
das Haus **am See**|Präp
Tom, **mein bester Freund**, …|App
der Hund, **der laut bellt**|Rel
die **kleine** Katze|Adj
der Garten **unserer Nachbarn**|Gen
die Tasse **aus Porzellan**|Präp
Frau Huber, **unsere Lehrerin**, …|App`,
    fall4: `Das ist das Haus, in [dem] ich geboren bin.
Der Freund, [dem] ich vertraue, hilft mir immer.
Die Kinder, [deren] Eltern im Urlaub sind, schlafen bei Oma.
Der Hund, [den] wir gefunden haben, heißt Bello.
Die Frau, mit [der] ich gesprochen habe, ist Ärztin.
Das Mädchen, [dessen] Fahrrad kaputt ist, geht zu Fuß.
Die Gäste, [denen] wir das Essen servieren, sind hungrig.`,
    verb4: `Das ist mein Onkel. Sein Hund ist sehr groß. => Das ist mein Onkel, dessen Hund sehr groß ist.
Ich kenne die Frau. Du hast mit ihr gesprochen. => Ich kenne die Frau, mit der du gesprochen hast.
Die Kinder spielen im Hof. Ich habe ihnen den Ball gegeben. => Die Kinder, denen ich den Ball gegeben habe, spielen im Hof.
Das ist die Brücke. Wir sind über sie gegangen. => Das ist die Brücke, über die wir gegangen sind.
Der Lehrer lobt die Schülerin. Ihr Aufsatz war am besten. => Der Lehrer lobt die Schülerin, deren Aufsatz am besten war.`
  } });

  ext('indirekte-rede', { more: {
    formen: `er kommt => er komme
sie schreibt => sie schreibe
er weiß => er wisse
sie kann => sie könne
er muss => er müsse
es ist => es sei
sie hat => sie habe
er will => er wolle
sie sieht => sie sehe
er nimmt => er nehme
sie liest => sie lese
er spricht => er spreche
sie darf => sie dürfe
er schläft => er schlafe
sie wird => sie werde`,
    umformen: `Die Lehrerin fragt: „Wer hat das Fenster geöffnet?“ => Die Lehrerin fragt, wer das Fenster geöffnet habe.
Mia fragt Tom: „Kommst du mit?“ => Mia fragt Tom, ob er mitkomme.
Der Arzt fragt: „Wo tut es weh?“ => Der Arzt fragt, wo es weh tue.
Die Kinder sagen: „Wir haben Hunger.“ => Die Kinder sagen, sie hätten Hunger.
Die Schüler erklären: „Wir lernen für den Test.“ => Die Schüler erklären, sie würden für den Test lernen.
Lena fragt ihre Mutter: „Darf ich ins Kino gehen?“ => Lena fragt ihre Mutter, ob sie ins Kino gehen dürfe.
Opa sagt: „Ich kann gut kochen.“ => Opa sagt, er könne gut kochen.
Der Polizist fragt: „Wer hat den Unfall gesehen?“ => Der Polizist fragt, wer den Unfall gesehen habe.
Die Nachbarn sagen: „Wir fahren morgen weg.“ => Die Nachbarn sagen, sie würden morgen wegfahren.
Tom fragt: „Wo ist mein Rucksack?“ => Tom fragt, wo sein Rucksack sei.
Die Trainerin sagt zu den Kindern: „Ihr habt toll gespielt.“ => Die Trainerin sagt zu den Kindern, sie hätten toll gespielt.
Der Bub fragt: „Kann ich mitspielen?“ => Der Bub fragt, ob er mitspielen könne.
Mama fragt Lisa: „Hast du deine Hausübung gemacht?“ => Mama fragt Lisa, ob sie ihre Hausübung gemacht habe.
Die Kinder erzählen: „Wir haben einen Igel gefunden.“ => Die Kinder erzählen, sie hätten einen Igel gefunden.
Der Busfahrer sagt: „Es gab einen Stau.“ => Der Busfahrer sagt, es habe einen Stau gegeben.`,
    ersatz: `wir haben => wir hätten
sie (Mehrzahl) kommen => sie würden kommen (oder: kämen)
ich kann => ich könne (eindeutig)
wir müssen => wir müssten
sie (Mehrzahl) sind => sie seien (eindeutig)
er geht => er gehe (eindeutig)
ich habe => ich hätte
wir spielen => wir würden spielen
sie (Mehrzahl) dürfen => sie dürften`,
    zurueck: `Tom sagt, er habe keinen Hunger. => Tom sagt: „Ich habe keinen Hunger.“
Oma erzählt, sie sei früher Lehrerin gewesen. => Oma erzählt: „Ich war früher Lehrerin.“`,
    erkennen: `Er sagt, er **sei** müde.|K1
Sie meint, sie **habe** keine Zeit.|K1
Wenn ich reich **wäre**, kaufte ich ein Pferd.|K2
Wir **gehen** heute ins Kino.|I
Er behauptet, er **könne** zaubern.|K1
Ich **würde** gern mitkommen.|K2
Tom **spielt** Fußball.|I`,
    um4: `Die Lehrerin sagt: „Morgen schreiben wir einen Test.“ => Die Lehrerin sagt, morgen würden wir einen Test schreiben.
Tom fragt mich: „Hast du Zeit?“ => Tom fragt mich, ob ich Zeit hätte.
Mama sagt zu mir: „Räum dein Zimmer auf!“ => Mama sagt, ich solle mein Zimmer aufräumen.
Der Reporter berichtet: „Das Spiel endet unentschieden.“ => Der Reporter berichtet, das Spiel ende unentschieden.
Lena fragt: „Wann beginnt der Film?“ => Lena fragt, wann der Film beginne.
Die Kinder sagen: „Wir sind müde.“ => Die Kinder sagen, sie seien müde.`
  } });

  ext('konjunktiv-2', { more: {
    formen: `ich habe => ich hätte
du bist => du wärst
wir können => wir könnten
er kommt => er käme (oder: er würde kommen)
sie geht => sie ginge (oder: sie würde gehen)
ich gebe => ich gäbe (oder: ich würde geben)
du sollst => du solltest
wir wissen => wir wüssten
es gibt => es gäbe
sie fährt => sie führe (oder: sie würde fahren)
ich mag => ich möchte`,
    fehler: `Wenn ich Zeit hätte, ich würde dich besuchen. => Wenn ich Zeit hätte, würde ich dich besuchen.
Wenn er schneller gelaufen wäre, hätte er den Bus erreichen. => Wenn er schneller gelaufen wäre, hätte er den Bus erreicht.
Wenn wir mehr Geld hätten, wir würden ein Haus kaufen. => Wenn wir mehr Geld hätten, würden wir ein Haus kaufen.
Wenn sie früher aufgestanden hätte, wäre sie pünktlich. => Wenn sie früher aufgestanden wäre, wäre sie pünktlich.
Ich wünschte, ich habe mehr Zeit. => Ich wünschte, ich hätte mehr Zeit.
Wenn du mich gefragt hast, hätte ich dir geholfen. => Wenn du mich gefragt hättest, hätte ich dir geholfen.`,
    hoeflich: `Mach das Fenster zu! => Könntest du bitte das Fenster zumachen?
Leihen Sie mir einen Stift! => Würden Sie mir bitte einen Stift leihen?
Wartet auf mich! => Könntet ihr bitte auf mich warten?`,
    irreal: `Wenn ich Flügel [hätte:haben], [würde:werden] ich fliegen.
Wenn es [schneien würde:schneien], [könnten:können] wir rodeln.
Wenn du mehr [schlafen würdest:schlafen], [wärst:sein] du nicht so müde.
Wenn wir einen Hund [hätten:haben], [gingen:gehen] wir oft spazieren.
Wenn ich mehr Geld [hätte:haben], [würde:werden] ich ein Fahrrad kaufen.`,
    wunsch: `Ich habe kein Haustier. => Hätte ich doch ein Haustier!
Die Ferien sind vorbei. => Wären doch noch Ferien!`,
    verg: `Wenn ich früher [aufgestanden wäre:aufstehen], [hätte:haben] ich den Bus erreicht.
Wenn du mich [gefragt hättest:fragen], [hätte:haben] ich dir geholfen.
Wenn wir mehr [geübt hätten:üben], [hätten:haben] wir gewonnen.
Wenn es nicht [geregnet hätte:regnen], [wären:sein] wir wandern gegangen.
Wenn er den Wecker [gehört hätte:hören], [wäre:sein] er pünktlich gewesen.`
  } });

  ext('gliedsaetze', { more: {
    art: `Wir bleiben drinnen, **weil es stark regnet**.|kausal
**Nachdem wir gegessen hatten**, gingen wir spazieren.|temporal
**Wenn du Hilfe brauchst**, ruf mich an.|konditional
**Da der Zug Verspätung hatte**, kamen wir zu spät.|kausal
**Bevor du gehst**, räum bitte auf.|temporal
Ich komme mit, **falls ich Zeit habe**.|konditional
**Während Mama kocht**, deckt Tom den Tisch.|temporal
Lena ist müde, **weil sie lange gelesen hat**.|kausal
**Sobald es hell wird**, brechen wir auf.|temporal
**Falls es morgen schneit**, bauen wir einen Schneemann.|konditional
Er trägt eine Brille, **da er schlecht sieht**.|kausal
**Als ich klein war**, hatte ich Angst vor Hunden.|temporal
**Sofern du pünktlich bist**, darfst du mitfahren.|konditional
Wir gewinnen nur, **wenn wir zusammenhalten**.|konditional`,
    konj4: `[Obwohl] es regnete, gingen wir spazieren.
Ich bleibe zu Hause, [weil] ich krank bin.
[Nachdem] wir gegessen hatten, spielten wir.
Sie lernt viel, [damit] sie den Test besteht.
[Bevor] du gehst, schließ bitte das Fenster.
[Während] ich lese, hört er Musik.
Wir wissen nicht, [ob] er kommt.`,
    konj: `Ich warte, {bis|obwohl|damit} du kommst.
{Obwohl|Weil|Damit} es kalt war, gingen wir baden.
Sie lernt, {damit|obwohl|bis} sie den Test schafft.
{Weil|Obwohl|Bis} ich krank bin, bleibe ich zu Hause.
Wir spielen draußen, {solange|obwohl|damit} es hell ist.`,
    umformen: `**Wegen des Regens** blieben wir zu Hause. :: Kausalsatz => Weil es regnete, blieben wir zu Hause.
**Nach dem Essen** putzen wir die Zähne. :: Temporalsatz => Nachdem wir gegessen haben, putzen wir die Zähne.`,
    zurueck: `Während wir aßen, läutete das Telefon. :: Satzglied => Während des Essens läutete das Telefon.
Weil es regnete, blieben wir drinnen. :: Satzglied => Wegen des Regens blieben wir drinnen.
Wenn es schneit, fahren wir langsamer. :: Satzglied => Bei Schnee fahren wir langsamer.
Obwohl er sich verletzt hatte, spielte er weiter. :: Satzglied => Trotz seiner Verletzung spielte er weiter.
Bevor wir abfahren, tanken wir. :: Satzglied => Vor der Abfahrt tanken wir.`
  } });
})();
