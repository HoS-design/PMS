/* Deutsch – mehr Varianten für die sechs Blätter, Teil 2 (Rechtschreibung und Schreiben) */
(function () {
  const ext = UB.extendTopic;

  ext('gross-klein', { more: {
    satz: `Die {Kinder|kinder} {spielen|Spielen} im {Park|park}.
Am {Abend|abend} {lese|Lese} ich ein {Buch|buch}.`,
    schwer: `Beim {Schwimmen|schwimmen} habe ich mich verletzt.
Ich habe heute nichts {Neues|neues} erlebt.
Wir sind am {Montag|montag} {abends|Abends} ins Kino gegangen.
Das {Laufen|laufen} fällt mir schwer.
Sie hat etwas {Schönes|schönes} gemalt.
Wir treffen uns {heute|Heute} {Nachmittag|nachmittag}.
Zum {Lesen|lesen} brauche ich Ruhe.
Er wünscht ihr alles {Liebe|liebe}.`,
    fehler4: `beim spielen hat lena etwas wichtiges vergessen. => Beim Spielen hat Lena etwas Wichtiges vergessen.
am sonntagmorgen fahren wir zum wandern. => Am Sonntagmorgen fahren wir zum Wandern.
liebe frau berger, danke für ihre hilfe! => Liebe Frau Berger, danke für Ihre Hilfe!
das lesen macht mir viel spaß. => Das Lesen macht mir viel Spaß.`
  } });

  ext('s-ss-sz', { more: {
    einsetzen: `Ich wei{ß|ss|s} die Antwort.
Das Wa{ss|ß|s}er ist kalt.
Wir gie{ß|ss|s}en die Blumen.
Die Mau{s|ss|ß} ist klein.
Der Schlü{ss|ß|s}el liegt am Tisch.
Er hat einen gro{ß|ss|s}en Hund.
Mein Bruder i{ss|ß|s}t gern Nudeln.
Die Ro{s|ss|ß}e duftet.
Der Ka{ss|ß|s}enzettel ist weg.`,
    regel: `Tasse|K
Klasse|K
Schloss|K
müssen|K
Wasser|K
Schlüssel|K
Straße|L
Fuß|L
heißen|L
groß|L
Gruß|L
draußen|L`,
    probe: `der Prei? => der Preis – die Preise
das Schlo? => das Schloss – die Schlösser
der Bi? => der Biss – die Bisse
das Gla? => das Glas – die Gläser`,
    text4: `Mein Gro{ß|ss|s}vater lie{ß|ss|s} mich gestern Rad fahren.
Wir mü{ss|ß|s}en die Tür schlie{ß|ss|s}en.
Im Flu{ss|ß|s} schwimmt ein gro{ß|ss|s}er Fisch.
Der Ra{s|ss|ß}en ist na{ss|ß|s} vom Regen.
Das Schlo{ss|ß|s} stand auf einem Fel{s|ss|ß}en.`,
    fehler: `Ich weiss nicht. => Ich weiß nicht.
Das Wasser ist heiss. => Das Wasser ist heiß.
Wir essen draussen. => Wir essen draußen.
Der Schlüßel ist weg. => Der Schlüssel ist weg.
Viele Grüsse! => Viele Grüße!`
  } });

  ext('dehnung-schaerfung', { more: {
    wahl: `Der {Ball|Bal} rollt.
Wir {wohnen|wonen} in Graz.
Die {Kanne|Kane} ist voll.
Der {Bär|Bärr} ist stark.
Die {Biene|Bine} summt.
Er {fällt|fält} hin.
Das {Meer|Mer} ist blau.`,
    sort: `Ball|K
Kanne|K
Teller|K
Puppe|K
Sonne|K
Hase|L
Ofen|L
Biene|L
Zahn|L
Schuh|L`,
    markierung: `Lehrer|H
Uhr|H
Kuh|H
fühlen|H
Bahn|H
ohne|H
Saal|D
Boot|D
leer|D
Moor|D
Tee|D
Zoo|D
Liebe|I
viel|I
Spiel|I
Brief|I
Wiese|I
Dieb|I`,
    paar: `Ich {fahre|fare} mit dem Rad. (Fahrzeug)
Die {Miete|Mitte} ist teuer. (Wohnung)
In der {Mitte|Miete} steht ein Baum.
Wir {kennen|kenen} uns schon lange.
Der {Schal|Schall} ist warm. (Kleidung)
Der {Schall|Schal} breitet sich aus. (Geräusch)
Der {Stahl|Stall} ist hart. (Metall)
Die Kühe stehen im {Stall|Stahl}.`
  } });

  ext('gleich-klingend', { more: {
    verl: `das Ra{d|t} → die Räder
der Kor{b|p} → die Körbe
das Zel{t|d} → die Zelte
der Hu{t|d} → die Hüte
der Die{b|p} → die Diebe
das Gel{d|t} → die Gelder
der Zu{g|k} → die Züge
der Win{d|t} → die Winde
das Lo{b|p} → loben`,
    umlaut: `die B{äu|eu}me (Baum)
die Fr{eu|äu}de
die Tr{äu|eu}me (Traum)
das F{eu|äu}er
die Kr{äu|eu}ter (Kraut)`,
    verlFrei: `der Kor? => der Korb – die Körbe
das Zel? => das Zelt – die Zelte
der Die? => der Dieb – die Diebe
der Zu? => der Zug – die Züge
run? => rund – runder`,
    endent: `{ent|end}lassen
das {End|Ent}spiel`,
    mix4: `Der Win{d|t} wehte das Lau{b|p} vom Ber{g|k}.
Im Wal{d|t} fan{d|t} ich einen run{d|t}en Stein.
Mein Freun{d|t} wohn{t|d} in einem gel{b|p}en Haus.
Wir sin{d|t} mit dem Zu{g|k} ans Meer gefahren.
Das Pfer{d|t} tra{b|p}te über das Fel{d|t}.`,
    fehler: `Das Kint spielt im Sant. => Das Kind spielt im Sand.
Mein Fahrrat ist kaputt. => Mein Fahrrad ist kaputt.
Die Beume sind grün. => Die Bäume sind grün.
Endlich ist die Arbeit entgültig fertig. => Endlich ist die Arbeit endgültig fertig.
Der Hunt hat einen Knochen. => Der Hund hat einen Knochen.`
  } });

  ext('beistrich', { more: {
    einfach: `Ich habe einen Hund, eine Katze und zwei Hasen.
Mama, darf ich heute länger aufbleiben?
Oh, wie schön ist das!
Das Wetter ist kalt, aber sonnig.
Tom, Lisa und Ben spielen Fußball.
Ja, ich komme gern mit.`,
    regel: `Weil es regnete, blieben wir drinnen.|N
Lena, meine beste Freundin, kommt heute.|E
Wir beeilten uns, um den Zug zu erreichen.|I
Hurra, wir haben gewonnen!|R`,
    profi: `Als wir am Bahnhof ankamen, war der Zug, auf den wir gewartet hatten, schon weg.
„Kommst du mit?“, fragte Tom, „oder bleibst du lieber hier?“
Ohne lange zu überlegen, sprang er ins Wasser, das sehr kalt war.
Meine Tante, die in Wien wohnt, besucht uns, wenn sie Urlaub hat.
Obwohl es regnete, gingen wir spazieren, denn wir brauchten frische Luft.
Ich frage mich, ob er kommt, und hoffe, dass er pünktlich ist.`
  } });

  ext('verwechslung', { more: {
    wahl: `Das ist nicht {wahr|war}!
Gestern {war|wahr} ich im Kino.`,
    saetze: `war – wahr => Gestern war ich krank. / Das ist wahr.
Lied – Lid => Wir singen ein Lied. / Das Lid schützt das Auge.
malen – mahlen => Ich male ein Bild. / Der Müller mahlt Mehl.
Stadt – statt => Graz ist eine Stadt. / Statt Tee trinke ich Saft.`,
    wahl4: `Der Hund war {tot|Tod}, sein {Tod|tot} machte uns traurig.
{Seid|Seit} ihr {seit|seid} gestern hier?
{Statt|Stadt} in die {Stadt|statt} zu fahren, blieben wir zu Hause.
Es {war|wahr} {wahr|war}, was sie erzählte.
Er singt ein {Lied|Lid} und schließt dabei ein {Lid|Lied}.`
  } });

  ext('fremdwoerter', { more: {
    bedeutung: `die Diskussion => das Gespräch, die Aussprache
das Programm => der Plan, die Abfolge
der Kommentar => die Erklärung, die Meinungsäußerung
die Garage => der Abstellraum für Autos
das Interview => die Befragung
die Kopie => die Abschrift, das Duplikat
der Assistent => der Helfer, Mitarbeiter
die Initiative => der erste Schritt, der Anstoß`,
    endung: `diskut- => diskutieren
Organisat- => die Organisation
interess- => interessant
Explos- => die Explosion
kontroll- => kontrollieren
Konzentrat- => die Konzentration`,
    schreibung4: `Wir fahren mit dem {Taxi|Taksi|Taxie}.
Der {Computer|Kompjuter|Computa} ist neu.
Im {Theater|Teater|Theather} sahen wir ein Stück.
Das {Physik|Fysik|Phisik}-Buch ist schwer.
Meine Schwester spielt {Klavier|Klawier|Clavier}.
Die {Chance|Schanse|Tschanse} ist groß.
Wir haben ein {Problem|Probleem|Prohblem}.`,
    satz: `Die [Polizei] ermittelt in dem Fall.
Ich habe meinen [Computer] neu gestartet.
Der [Pilot] landete das Flugzeug sicher.
Unsere Klasse macht ein [Projekt] über Bienen.
Wir hören im [Radio] die Nachrichten.
Der [Trainer] lobt die Mannschaft.`
  } });

  ext('erzaehlung', { more: {
    merkmal: `spannender Höhepunkt|J
passende Vergleiche (wie ein …)|J
Stichwörter statt ganzer Sätze|N
Geräusche und Gerüche beschreiben|J
den Schluss mitten im Satz abbrechen|N
Überschrift, die neugierig macht|J`,
    verben: `Vor Freude [hüpfte] Lena durch den Garten.
Der Wind [heulte] um das Haus.
Leise [flüsterte] Tom: „Hast du das gehört?“
Das Feuer [knisterte] im Ofen.
Der Hund [jaulte] vor der Tür.
Erschöpft [schleppte] sich der Wanderer den Berg hinauf.`,
    stil4: `Dann kam der Hund. Dann bellte der Hund. :: Sätze verbinden => Plötzlich stürmte der Hund herein und bellte wie verrückt.
Es war schön. :: genauer beschreiben => Die Sonne glitzerte auf dem See und es duftete nach frischem Gras.`
  } });

  ext('gegenstandsbeschreibung', { more: {
    adj: `dreieckig|Fo
eckig|Fo
länglich|Fo
herzförmig|Fo
dunkelblau|Fa
silbern|Fa
gestreift|Fa
hellgrün|Fa
aus Marmor|M
aus Metall|M
aus Kunststoff|M
aus Leder|M`,
    verben: `Der Griff [ist] aus schwarzem Gummi.
An der Seite [hängt] ein kleiner Anhänger.
Zwei Riemen [halten] den Rucksack auf dem Rücken.
Innen [liegt] ein weiches Futter.
Das Fell der Katze [glänzt] in der Sonne.`,
    verben4: `Die Lampe [steht] auf einem runden Fuß.
Der Deckel [lässt] sich leicht öffnen.
Das Handy [hat] eine schwarze Hülle.
Am Halsband [hängt] eine kleine Glocke.
Die Flasche [ist] aus durchsichtigem Glas.
Der Schirm [besteht] aus rotem Stoff.
Ein Schriftzug [ziert] die Vorderseite.
Die Uhr [besitzt] ein silbernes Armband.
Unter dem Deckel [befindet] sich ein Spiegel.
Die Tasche [wird] mit einem Magnetknopf verschlossen.`
  } });

  ext('personenbeschreibung', { more: {
    wortfeld: `kraus|H
schulterlang|H
dunkelblond|H
grau meliert|H
rote Wangen|G
Sommersprossen|G
schmale Lippen|G
Grübchen|G
buschige Augenbrauen|G
schlank|S
kräftig|S
zierlich|S
breitschultrig|S
mittelgroß|S
Pferdeschwanz|H
Stupsnase|G
Doppelkinn|G
sportlich|S
rundlich|S`,
    besser: `Sie hat ein Gesicht. || Sie hat ein schmales Gesicht mit hohen Wangenknochen. || b || genaue Beschreibung
Er trug Kleidung. || Er trägt eine dunkelblaue Jeans und einen grauen Kapuzenpulli. || b || Präsens und genaue Angaben
Ihre Nase ist halt so. || Ihre Nase ist klein und leicht nach oben gebogen. || b || konkret statt allgemein
Er ist voll alt. || Er ist ungefähr 70 Jahre alt. || b || sachlich statt umgangssprachlich`,
    sachlich: `Er hat hässliche Schuhe an. => Er trägt braune Lederschuhe.
Ihre Augen sind voll schön. => Sie hat große, hellblaue Augen.
Er ist irgendwie dick. => Er ist eher kräftig gebaut.`
  } });

  ext('vorgangsbeschreibung', { more: {
    verben: `Du [schneidest] das Papier entlang der Linie.
Du [klebst] die beiden Teile zusammen.
Du [gießt] die Milch in den Topf.
Du [verteilst] die Soße auf dem Teig.
Du [schraubst] den Deckel fest.
Du [heizt] den Backofen auf 180 Grad vor.`,
    form: `Ich rühre den Teig um. :: man-Form => Man rührt den Teig um.`,
    passiv: `Man mischt Mehl und Zucker. => Mehl und Zucker werden gemischt.
Du backst den Kuchen 30 Minuten. => Der Kuchen wird 30 Minuten gebacken.
Man schält die Äpfel. => Die Äpfel werden geschält.
Du faltest das Papier zweimal. => Das Papier wird zweimal gefaltet.`
  } });

  ext('brief', { more: {
    art: `Lieber Papa,|P
Sehr geehrter Herr Bürgermeister,|F
Hi Lisa,|P
Sehr geehrte Damen und Herren,|F
Mit freundlichen Grüßen|F
Schreib mir bald zurück!|P`,
    anrede: `Können {Sie|sie} mir bitte helfen?
Wie geht es {Ihnen|ihnen}?
Ich bedanke mich bei {Ihnen|ihnen} für die Einladung.
Ich habe {Ihren|ihren} Brief bekommen.
Darf ich {Sie|sie} etwas fragen?
Ich hoffe, {Sie|sie} haben schöne Ferien.
Wir freuen uns auf {Ihren|ihren} Besuch.
Ich wünsche {Ihnen|ihnen} alles Gute.
Haben {Sie|sie} am Montag Zeit?
Vielen Dank für {Ihre|ihre} schnelle Antwort.`,
    besser: `Hallo Herr Direktor, wie geht's? || Sehr geehrter Herr Direktor, || b || formelle Anrede
Das war voll super bei Ihnen! || Der Besuch bei Ihnen hat uns sehr gut gefallen. || b || keine Umgangssprache
Tschüss, Ihre Lena || Mit freundlichen Grüßen, Lena Huber || b || passender Schlussgruß
Ich will wissen, was das kostet. || Könnten Sie mir bitte den Preis mitteilen? || b || höfliche Bitte
Das Fahrrad ist Schrott! || Leider ist das Fahrrad bereits nach einer Woche kaputt. || b || sachlich bleiben
Ich warte auf eine Antwort, und zwar schnell! || Ich freue mich auf Ihre baldige Antwort. || b || höflicher Schluss`,
    formell: `Ich brauche eine Bestätigung, aber flott! => Ich ersuche Sie um eine rasche Bestätigung.
Gebt uns mal den Turnsaal am Freitag. => Wir möchten Sie bitten, uns am Freitag den Turnsaal zur Verfügung zu stellen.
Die Pizza war kalt und eklig. => Leider war die gelieferte Pizza kalt.`
  } });

  ext('nacherzaehlung', { more: {
    merkmal: `den Text in Reimen schreiben|N
die wichtigsten Ereignisse wiedergeben|J
Smileys einfügen|N
die Spannung erhalten|J
nur den Anfang erzählen|N`
  } });

  ext('bericht', { more: {
    wfrage: `**Gestern um 16 Uhr** brach in der Schulküche ein Feuer aus.|Wann
Das Feuer entstand **in der Schulküche im Erdgeschoss**.|Wo
**Eine Lehrerin** bemerkte den Rauch als Erste.|Wer
**Ein Topf mit Öl** hatte Feuer gefangen.|Was
Das Feuer entstand, **weil der Herd nicht ausgeschaltet war**.|Warum
Die Feuerwehr löschte den Brand **mit einer Löschdecke**.|Wie
**Die Küche bleibt eine Woche geschlossen.**|Folgen
**Am Samstagvormittag** fand das Schulfest statt.|Wann`,
    sachlich: `Es war echt der schlimmste Tag meines Lebens! || Am Dienstag wurde ein Schüler beim Turnen verletzt. || b || sachlich statt dramatisch
Der Ball flog sooo hoch über das Tor! || Der Ball flog über das Tor. || b || keine Übertreibungen
Ich fand das Spiel total langweilig. || Das Spiel endete 0 : 0. || b || keine eigene Meinung`,
    umformen: `Die Feuerwehr kam mit voll viel Tatütata angerast! => Die Feuerwehr traf mit Blaulicht und Sirene ein.
Der arme kleine Hund zitterte vor lauter Angst! => Der Hund zitterte.
Es hat wie verrückt geschüttet! => Es regnete stark.
Alle haben total panisch geschrien! => Mehrere Personen riefen um Hilfe.`,
    umf4: `Ein Riesenkrach – und die Scheibe war hin! => Gegen 10 Uhr zerbrach eine Fensterscheibe.
Die Polizei war voll schnell da! => Die Polizei traf nach fünf Minuten ein.
Der Dieb ist einfach abgehauen, unglaublich! => Der Täter flüchtete.`
  } });

  ext('inhaltsangabe', { more: {
    merkmal: `Fachbegriffe wie Erzähler oder Hauptfigur verwenden|J
spannende Ausschmückungen|N
sachliche Sprache|J
Zusammenfassung des Wesentlichen|J
Ich-Form der Erzählerin übernehmen|N
indirekte Rede statt wörtlicher Rede|J`,
    praesens: `Der Hund lief weg. => Der Hund läuft weg.
Sie hatte keine Zeit. => Sie hat keine Zeit.`,
    einleitung: `Sage – „Der Lindwurm von Klagenfurt“ – unbekannt – Mut gegen ein Ungeheuer => In der Sage „Der Lindwurm von Klagenfurt“ geht es darum, wie mutige Männer ein Ungeheuer besiegen.
Kurzgeschichte – „Das Brot“ – Wolfgang Borchert – 1946 – ein Ehepaar in schwerer Zeit => In der Kurzgeschichte „Das Brot“ von Wolfgang Borchert aus dem Jahr 1946 geht es um ein älteres Ehepaar, das in einer Zeit der Not zusammenhält.`
  } });

  ext('argumentieren', { more: {
    teile: `Denn wer viel sitzt, bekommt leicht Rückenschmerzen.|G
Zum Beispiel fahren in den Niederlanden fast alle Kinder mit dem Rad zur Schule.|BSP
Wir sollten weniger Plastik verwenden.|B
Weil Plastik oft im Meer landet und Tieren schadet.|G
In unserer Klasse hat zum Beispiel jeder eine eigene Trinkflasche.|BSP
Der Schulhof sollte mehr Bäume haben.|B`,
    argOrder: `Kinder sollten Haushaltsaufgaben übernehmen. >> So lernen sie, selbstständig zu werden. >> Wer zum Beispiel einmal pro Woche kocht, kann das später auch allein.
Jede Schule braucht eine Bibliothek. >> Dort können alle Kinder kostenlos lesen. >> Viele Familien können sich zum Beispiel nicht jedes Monat neue Bücher leisten.`,
    konn: `Hausübungen sind wichtig, [weil] man den Stoff wiederholt.
Ich bin gegen Handys im Unterricht. [Allerdings] sind sie in Notfällen nützlich.
[Erstens] spart das Fahrrad Geld, [zweitens] ist es gesund.
Sport ist gesund. [Deshalb] sollte es mehr Turnstunden geben.
Der Ausflug ist teuer. [Trotzdem] sollten alle mitfahren dürfen.
[Zum Beispiel] könnte man einen Flohmarkt veranstalten.
Bücher sind spannend. [Außerdem] verbessern sie die Rechtschreibung.
[Schließlich] sollten auch die Schülerinnen und Schüler mitentscheiden.`,
    besser: `Pausen sind einfach so wichtig. || Längere Pausen sind wichtig, weil man sich dann besser konzentrieren kann. || b || Ein Argument braucht eine Begründung.`,
    gegen: `„Ein Haustier macht nur Arbeit.“ => Ein Haustier macht zwar Arbeit, aber man lernt dabei Verantwortung.
„Lesen ist langweilig.“ => Manche finden Lesen langweilig, doch es gibt für jeden spannende Bücher.`
  } });

  ext('eroerterung', { more: {
    einl: `Handys sind schlecht, das weiß jeder. || Immer mehr Jugendliche verbringen täglich mehrere Stunden am Handy. Ist das ein Problem? || b || sachlicher Einstieg mit Frage
So, das war jetzt meine Erörterung. || Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen. || b || Fazit statt Ankündigung`,
    besser: `Tablets sind cool. || Tablets sind praktisch, weil man viele Bücher in einem Gerät hat. || b || Begründung statt Wertung`,
    konn: `[Zwar] ist das Auto bequem, [aber] es schadet der Umwelt.
Viele Schüler wünschen sich einen späteren Unterrichtsbeginn, [weil] sie morgens müde sind.
[Darüber hinaus] fördert Sport den Teamgeist.
[Dagegen] spricht, dass die Kosten sehr hoch sind.
[Folglich] sollte man beide Seiten abwägen.
[Abschließend] möchte ich festhalten, dass …`,
    verbind: `[Ein wichtiges Argument] für Schuluniformen ist der Zusammenhalt.
[Dem steht gegenüber], dass Uniformen teuer sind.
[Außerdem] kann man mit Tablets Papier sparen.
[Ein Nachteil] ist jedoch die lange Bildschirmzeit.
[Zusammenfassend] lässt sich sagen, dass beide Seiten gute Argumente haben.`
  } });

  ext('bewerbung', { more: {
    lebenslauf: `Staatsbürgerschaft|J
Lieblingsfarbe|N
Sprachkenntnisse|J
Lieblingssüßigkeit|N
Mopedausweis|J
Hobbys und Interessen|J
Kontostand|N
Lieblingsserie|N`,
    besser: `Ich hab Bock auf die Lehre. || Ich interessiere mich sehr für eine Lehre als Elektrotechnikerin. || b || formelle Sprache
Ich kann alles gut. || Besonders gut kann ich mit Werkzeug umgehen, das habe ich beim Schnuppern gezeigt. || b || konkrete Stärke
Schreiben Sie mir zurück! || Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr. || b || höflicher Schluss
Lg Tom || Mit freundlichen Grüßen, Tom Berger || b || passender Gruß
Meine Noten sind halt nicht so gut. || In Mathematik und Werken habe ich gute Noten. || b || Stärken hervorheben
Ich hab da so ein Praktikum gemacht. || Im März absolvierte ich ein einwöchiges Praktikum in einer Tischlerei. || b || genaue Angaben`,
    formel: `Ich bin nett und so. => Ich bin freundlich, hilfsbereit und arbeite gern im Team.
Ich will nicht immer nur sitzen. => Ein Beruf, in dem ich mich bewege und handwerklich arbeite, interessiert mich sehr.
Bitte melden Sie sich. => Ich freue mich, wenn Sie mich zu einem Vorstellungsgespräch einladen.`
  } });
})();
