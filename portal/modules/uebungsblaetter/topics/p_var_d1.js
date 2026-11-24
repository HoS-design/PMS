/* Deutsch – mehr Varianten für die sechs Blätter, Teil 1 (Sprachbetrachtung) */
(function () {
  const ext = UB.extendTopic;

  ext('wortarten', { more: {
    woerter: `Fenster|N
springen|V
fröhlich|A
Wiese|N
schreiben|V`,
    markiert: `Der Vogel **singt** ein Lied.|V
Wir wohnen in einem **alten** Haus.|A
Mein **Bruder** spielt Gitarre.|N
Die Sonne scheint **hell**.|A
Lena **malt** ein Bild.|V
Im **Sommer** fahren wir ans Meer.|N`,
    reihe: `Die Kinder lachen laut. :: 4 Wörter => Artikel – Nomen – Verb – Adjektiv
Er liest ein spannendes Buch. :: 5 Wörter => Pronomen – Verb – Artikel – Adjektiv – Nomen`,
    reihe4: `Meine Freundin wohnt in einem kleinen Dorf. => Pronomen – Nomen – Verb – Präposition – Artikel – Adjektiv – Nomen
Tom und Lisa spielen im Garten Fußball. => Nomen – Konjunktion – Nomen – Verb – Präposition – Nomen – Nomen
Ich warte, weil der Zug Verspätung hat. => Pronomen – Verb – Konjunktion – Artikel – Nomen – Nomen – Verb`
  } });

  ext('nomen', { more: {
    artikel: `{der|die|das} Stuhl
{die|der|das} Blume
{das|der|die} Auto
{der|die|das} Apfel
{die|der|das} Tasche
{das|der|die} Brot
{der|die|das} Löffel
{die|der|das} Gabel
{das|der|die} Messer
{der|die|das} Schrank`,
    mehrzahl: `der Ball => die Bälle
die Hand => die Hände
das Kind => die Kinder
der Vogel => die Vögel`,
    genus: `Baum|m
Blume|f
Haus|n
Löffel|m
Tasche|f
Fahrrad|n`,
    mehrzahl4: `das Album => die Alben
der Atlas => die Atlanten / Atlasse
das Visum => die Visa
der Globus => die Globen / Globusse
das Datum => die Daten
der Rhythmus => die Rhythmen`,
    fuge: `das Schweinefleisch => Schwein + e + Fleisch
der Liebesbrief => Liebe + s + Brief
die Sonnenbrille => Sonne + n + Brille
das Kinderzimmer => Kind + er + Zimmer
der Bahnhofsplatz => Bahnhof + s + Platz`,
    text4: `Das [Beste:best] am Urlaub war das [Tauchen:tauchen] im Meer.
Beim [Kochen:kochen] hat Papa etwas [Neues:neu] ausprobiert.
Zum [Einschlafen:einschlafen] höre ich leise Musik. Ich wünsche dir alles [Liebe:lieb].`
  } });

  ext('verben', { more: {
    form: `rennen :: er => er rennt
kochen :: sie => sie kocht
singen :: ich => ich singe
tanzen :: ihr => ihr tanzt`,
    stark: `sehen :: er => er sieht
laufen :: du => du läufst
essen :: sie => sie isst
schlafen :: er => er schläft
sprechen :: du => du sprichst
geben :: sie => sie gibt`,
    imp: `essen (du / ihr) => Iss! – Esst!
geben (du / ihr) => Gib! – Gebt!
sprechen (du / ihr) => Sprich! – Sprecht!
kommen (du / ihr) => Komm! – Kommt!
sehen (du / ihr) => Sieh! – Seht!
laufen (du / ihr) => Lauf! – Lauft!`,
    fehler: `Er eßt gerne Pizza. => Er isst gerne Pizza.
Sie fahrt mit dem Bus. => Sie fährt mit dem Bus.
Les das Buch! => Lies das Buch!
Du sprechst zu leise. => Du sprichst zu leise.`
  } });

  ext('adjektive', { more: {
    steigern: `laut => lauter – am lautesten
warm => wärmer – am wärmsten
lang => länger – am längsten
leise => leiser – am leisesten
jung => jünger – am jüngsten
dunkel => dunkler – am dunkelsten`,
    gegenteil: `hell => dunkel
schnell => langsam
warm => kalt
voll => leer
dick => dünn
nass => trocken
schwer => leicht
hoch => tief`,
    bilden: `der Regen :: -isch => regnerisch
die Freude :: -ig => freudig
der Freund :: -lich => freundlich
der Sand :: -ig => sandig
das Glück :: -lich => glücklich
das Holz :: -ig => holzig
der Mut :: -ig => mutig
der Schmutz :: -ig => schmutzig`,
    unreg: `hoch => höher – am höchsten
nah => näher – am nächsten
viel => mehr – am meisten
groß => größer – am größten
gut => besser – am besten
gern => lieber – am liebsten`,
    dekl: `Mit dem [neuen:neu] Fahrrad fahre ich zur Schule.
Die [bunten:bunt] Blätter fallen von den [hohen:hoch] Bäumen.
Ich trinke gern [kalte:kalt] Milch mit einem [frischen:frisch] Brötchen.
Wir sehen einen [lustigen:lustig] Film.`,
    fehler: `Das ist am besten Kuchen. => Das ist der beste Kuchen.
Sie ist so groß als ich. => Sie ist so groß wie ich.`
  } });

  ext('pronomen', { more: {
    besitz: `Wir besuchen [unsere:unser] Großeltern.
Habt ihr [eure:euer] Bücher dabei?`,
    art: `Wir sehen **uns** morgen.|Refl
Das ist **mein** Fahrrad.|Poss
**Sie** wohnt in Graz.|Pers
Er wäscht **sich** die Hände.|Refl
Ist das **dein** Hund?|Poss
Ich helfe **dir** gern.|Pers
**Unser** Lehrer ist sehr nett.|Poss
Kinder, freut **euch**!|Refl
Wir besuchen **sie** morgen.|Pers
Lena sucht **ihre** Brille.|Poss
Ich habe **mich** verletzt.|Refl
Gib **mir** bitte das Salz!|Pers`,
    text4: `Tom hat [seinen:sein] Schlüssel vergessen. [Er] klingelt bei [seiner:sein] Nachbarin.
Wir haben [uns] auf die Ferien gefreut. [Unsere] Koffer waren schon gepackt.
Kennst du den Jungen, [der] dort steht? [Sein] Vater ist mein Trainer.`,
    fehler: `Das ist dem Lisa ihr Heft. => Das ist Lisas Heft.
Wir haben uns geeilt, wo wir zu spät waren. => Wir haben uns beeilt, weil wir zu spät waren.
Gib mich bitte das Buch! => Gib mir bitte das Buch!`
  } });

  ext('satzarten', { more: {
    zeichen: `Was für ein schöner Tag{!|.|?}
Wo ist meine Jacke{?|.|!}`,
    frage: `Hast du Hunger?|J
Warum weinst du?|E
Spielst du Gitarre?|J
Wie heißt dein Hund?|E`,
    wfrage: `Tom spielt **am Nachmittag** Fußball. => Wann spielt Tom Fußball?
**Die Katze** schläft auf dem Sofa. => Wer schläft auf dem Sofa?
Lena kauft **ein Buch**. => Was kauft Lena?
Wir fahren **mit dem Zug** nach Graz. => Womit fahren wir nach Graz?
Max kommt **wegen des Regens** zu spät. => Warum kommt Max zu spät?`,
    zeichen4: `„Wo warst du so lange[?]“[,] fragte die Mutter.
Der Lehrer sagt[:] „Packt eure Sachen ein[!]“
Ich frage mich, ob es morgen regnet[.]`
  } });

  ext('praepositionen', { more: {
    sorte: `nach|D
seit|D
von|D
zu|D
aus|D
gegenüber|D
durch|A
für|A
gegen|A
ohne|A
um|A
bis|A
entlang|A
bei|D
mit|D
für|A`,
    gen: `Statt [eines Fahrrads:ein Fahrrad] bekam ich ein Skateboard.
Innerhalb [einer Woche:eine Woche] war alles erledigt.
Wegen [der Krankheit:die Krankheit] fehlte Lena.
Trotz [des Lärms:der Lärm] schlief das Baby.
Während [der Ferien:die Ferien] fahren wir ans Meer.`,
    text4: `Ich stelle die Vase auf [den] Tisch. Jetzt steht sie auf [dem] Tisch.
Der Hund läuft in [den] Garten. Jetzt spielt er in [dem] Garten.
Wir setzen uns neben [die] Tür. Nun sitzen wir neben [der] Tür.`,
    fehler: `Ich fahre mit den Bus. => Ich fahre mit dem Bus.
Das Geschenk ist für dir. => Das Geschenk ist für dich.
Trotz dem Regen gingen wir hinaus. => Trotz des Regens gingen wir hinaus.`
  } });

  ext('wortbildung', { more: {
    art: `der Gartenzaun|Z
unglücklich|A
die Haustür|Z
die Schönheit|A
das Fußballspiel|Z
freundlich|A`,
    nomen: `heilen :: -ung => die Heilung
krank :: -heit => die Krankheit
ehrlich :: -keit => die Ehrlichkeit
frech :: -heit => die Frechheit
leiten :: -ung => die Leitung
wichtig :: -keit => die Wichtigkeit
meinen :: -ung => die Meinung
dunkel :: -heit => die Dunkelheit`,
    familie: `Spieler|S
Schreiber|W
Spielplatz|S
schriftlich|W
Fahrzeug|F
Spielzeug|S
Schrift|W
befahren|F
verspielt|S`,
    familie4: `Wir hatten [Glück:glücklich] beim Würfeln.
Die [Erfindung:erfinden] des Rades war sehr wichtig.
Er antwortete [höflich:Hof] auf alle Fragen.
Die [Dunkelheit:dunkel] machte mir Angst.
Das war eine [schwierige:schwer] Aufgabe.
Ihre [Freundlichkeit:freundlich] gefällt allen.`,
    wortart: `lesen → Nomen (Person) => der Leser
Kraft → Adjektiv => kräftig
schnell → Nomen => die Schnelligkeit
Sonne → Adjektiv => sonnig
erklären → Nomen => die Erklärung
Gefahr → Adjektiv => gefährlich`
  } });

  ext('satzgefuege', { more: {
    komma4: `Obwohl ich müde war, las ich das Buch zu Ende, weil es so spannend war.
Ich hoffe, dass du bald gesund wirst und wieder in die Schule kommst.
Wenn es morgen schön ist, fahren wir an den See, wo wir picknicken.
Als das Telefon läutete, stand ich gerade unter der Dusche.
Das Mädchen, das neben mir sitzt, heißt Lena.
Weil der Bus nicht kam, gingen wir zu Fuß, obwohl es regnete.
Er fragte, ob wir mitkommen wollen.
Nachdem wir gegessen hatten, spielten wir Karten, bis es dunkel wurde.
Ich weiß, dass du recht hast, aber ich bin trotzdem traurig.`,
    verb4: `Ich gehe nicht hinaus. Es regnet. :: weil – Nebensatz vorne => Weil es regnet, gehe ich nicht hinaus.
Er war krank. Er ging in die Schule. :: obwohl => Er ging in die Schule, obwohl er krank war.
Sie hatte die Hausübung gemacht. Sie traf ihre Freundin. :: nachdem – Nebensatz vorne => Nachdem sie die Hausübung gemacht hatte, traf sie ihre Freundin.
Du hilfst mir. Ich bin schneller fertig. :: wenn – Nebensatz vorne => Wenn du mir hilfst, bin ich schneller fertig.`
  } });

  ext('relativsaetze', { more: {
    attribut: `das Haus **meiner Oma**|Gen
der Mann **mit dem Hut**|Präp`,
    fall4: `Das ist die Lehrerin, [der] ich das Heft gegeben habe.
Der Bus, mit [dem] ich fahre, ist immer pünktlich.
Das Kind, [dessen] Ball im Teich liegt, weint.
Die Freunde, [denen] ich vertraue, helfen mir immer.
Das ist das Buch, [das] ich dir empfohlen habe.
Die Stadt, in [der] ich wohne, ist klein.
Der Hund, [den] wir gefunden haben, gehört Frau Huber.
Die Kinder, [deren] Eltern hier arbeiten, dürfen mitkommen.
Das ist der Freund, auf [den] ich warte.
Die Oma, bei [der] ich wohne, kocht sehr gut.`,
    verb4: `Das ist die Nachbarin. Ihr Hund bellt immer. => Das ist die Nachbarin, deren Hund immer bellt.
Ich lese ein Buch. Es ist sehr spannend. => Ich lese ein Buch, das sehr spannend ist.
Das ist mein Trainer. Ich verdanke ihm viel. => Das ist mein Trainer, dem ich viel verdanke.
Wir besuchen die Stadt. Mein Opa ist dort geboren. => Wir besuchen die Stadt, in der mein Opa geboren ist.`
  } });

  ext('indirekte-rede', { more: {
    formen: `sie geht => sie gehe
er kann => er könne
sie will => sie wolle
er weiß => er wisse
sie muss => sie müsse
er fährt => er fahre
sie sieht => sie sehe
er darf => er dürfe`,
    ersatz: `sie gehen => sie gingen / würden gehen
wir haben => wir hätten
ich komme => ich käme / würde kommen
sie kaufen => sie würden kaufen
wir wissen => wir wüssten`,
    um4: `Tom sagt: „Ich habe keine Zeit.“ => Tom sagt, er habe keine Zeit.
Die Ärztin sagt: „Du musst im Bett bleiben.“ => Die Ärztin sagt, ich müsse im Bett bleiben.
Lisa fragt: „Wann beginnt der Film?“ => Lisa fragt, wann der Film beginne.
Der Trainer sagt: „Wir spielen am Samstag.“ => Der Trainer sagt, sie spielten / würden am Samstag spielen.
Opa sagt: „Ich war früher Bergsteiger.“ => Opa sagt, er sei früher Bergsteiger gewesen.
Die Polizistin sagt: „Der Dieb ist geflohen.“ => Die Polizistin sagt, der Dieb sei geflohen.`
  } });

  ext('konjunktiv-2', { more: {
    formen: `ich kann => ich könnte
wir gehen => wir gingen / würden gehen
du hast => du hättest
sie ist => sie wäre
er muss => er müsste
ich weiß => ich wüsste
wir sind => wir wären
ihr habt => ihr hättet
sie darf => sie dürfte
es gibt => es gäbe`,
    verg: `Wenn es nicht [geregnet hätte:regnen], [wären:sein] wir wandern gegangen.
Wenn ich früher [aufgestanden wäre:aufstehen], [hätte:haben] ich den Bus erwischt.
Wenn Tom [aufgepasst hätte:aufpassen], [wäre:sein] das nicht passiert.
Wenn ihr [angerufen hättet:anrufen], [hätten:haben] wir gewartet.
Wenn ich mehr Geld [gehabt hätte:haben], [hätte:haben] ich das Rad gekauft.`,
    fehler: `Wenn ich reich wäre, kaufe ich ein Pferd. => Wenn ich reich wäre, würde ich ein Pferd kaufen.`
  } });

  ext('gliedsaetze', { more: {
    konj4: `[Bevor] du gehst, mach bitte das Licht aus.
Ich warte, [bis] du fertig bist.
[Damit] wir pünktlich sind, fahren wir früher los.
[Falls] es regnet, nehmen wir den Bus.
Er lachte, [obwohl] er traurig war.
[Seitdem] wir umgezogen sind, gehe ich zu Fuß zur Schule.`,
    zurueck: `Bevor wir abfuhren, aßen wir noch etwas. :: Satzglied => Vor der Abfahrt aßen wir noch etwas.
Während es gewitterte, blieben wir drinnen. :: Satzglied => Während des Gewitters blieben wir drinnen.
Weil sie krank war, fehlte Lena. :: Satzglied => Wegen ihrer Krankheit fehlte Lena.
Wenn es regnet, fällt das Fest aus. :: Satzglied => Bei Regen fällt das Fest aus.`
  } });
})();
