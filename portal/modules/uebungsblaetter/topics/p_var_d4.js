/* Deutsch – mehr Varianten, Teil 4 (Rechtschreibung und Texte): jeder Pool mindestens 5 × so groß wie die Aufgabenzahl */
(function () {
  const ext = UB.extendTopic;

  ext('gross-klein', { more: {
    fehler: `die katze schläft auf dem sofa. => Die Katze schläft auf dem Sofa.
am samstag fahren wir nach wien. => Am Samstag fahren wir nach Wien.
meine schwester heißt anna. => Meine Schwester heißt Anna.
der apfel ist rot. => Der Apfel ist rot.
im sommer ist es heiß. => Im Sommer ist es heiß.
unser hund bellt am abend. => Unser Hund bellt am Abend.`,
    schwer: `Wir treffen uns am {Abend|abend}.
Ich komme {morgen|Morgen} wieder.
Das {Lesen|lesen} macht mir Spaß.
Sie hat viel {Neues|neues} erlebt.
Beim {Schwimmen|schwimmen} bin ich schnell.
Er ist der {Beste|beste} in der Klasse.
Wir essen {heute|Heute} Mittag Pizza.
Ich wünsche dir alles {Gute|gute}.
Wir fahren {montags|Montags} zum Training.
Im {Großen|großen} und Ganzen bin ich zufrieden.`,
    satz: `Der {Hund|hund} {bellt|Bellt} am {Zaun|zaun}.
Am {Abend|abend} lese ich {gern|Gern}.
Meine {Oma|oma} {backt|Backt} einen {Kuchen|kuchen}.
Die {Vögel|vögel} {singen|Singen} am {Morgen|morgen}.
Wir {essen|Essen} {heute|Heute} {Nudeln|nudeln}.
Das {Wasser|wasser} ist {warm|Warm}.
Der {Lehrer|lehrer} {erklärt|Erklärt} die {Aufgabe|aufgabe}.
Unser {Auto|auto} ist {rot|Rot}.
Am {Montag|montag} {gehen|Gehen} wir {schwimmen|Schwimmen}.`,
    nominal: `Beim {Laufen|laufen} trinke ich viel.
Ich habe etwas {Schönes|schönes} gesehen.
Zum {Lesen|lesen} brauche ich eine Brille.
Das {Schwimmen|schwimmen} macht Spaß.
Wir lernen nichts {Neues|neues}.
Alles {Gute|gute} zum Geburtstag!
Ich habe einen {schönen|Schönen} Tag.`,
    zeit: `Wir treffen uns am {Montagabend|montagabend}.
Ich komme {morgen|Morgen} früh.
Frau Lang, haben {Sie|sie} Zeit?
Die Kinder sagen, dass {sie|Sie} müde sind.
Wir gehen {heute|Heute} Abend ins Theater.`,
    fehler4: `beim schwimmen habe ich meine brille verloren. => Beim Schwimmen habe ich meine Brille verloren.
am dienstag haben wir deutsch. => Am Dienstag haben wir Deutsch.
ich wünsche dir alles gute. => Ich wünsche dir alles Gute.
gestern abend haben wir etwas lustiges erlebt. => Gestern Abend haben wir etwas Lustiges erlebt.
das schönste am urlaub war das meer. => Das Schönste am Urlaub war das Meer.`
  } });

  ext('s-ss-sz', { more: {
    einsetzen: `Der Fu{ß|ss|s}ball ist rund.
Wir e{ss|ß|s}en zu Mittag.
Das Gra{s|ss|ß} ist grün.
Der Fu{ß|ss|s}ball ist rund.
Der Flu{ss|ß|s} ist breit.
Ich mu{ss|ß|s} lernen.
Die Kla{ss|ß|s}e ist laut.
Die Ha{s|ss|ß}en hoppeln.
Der Kä{s|ss|ß}e stinkt.
Das Wa{ss|ß|s}er ist kalt.
Er bei{ß|ss|s}t in den Apfel.
Die Blumen gie{ß|ss|s}en wir am Abend.
Ich le{s|ss|ß}e ein Buch.
Der Schlü{ss|ß|s}el ist weg.`,
    regel: `Kuss|K
Fass|K
Schloss|K
Tasse|K
Wasser|K
Klasse|K
Fluss|K
Nuss|K
essen|K
lassen|K
müssen|K
Kissen|K
Pass|K
besser|K
Straße|L
Fuß|L
groß|L
Gruß|L
heiß|L
weiß|L
Strauß|L
außen|L
fließen|L
Spaß|L
Kloß|L
gießen|L`,
    probe: `der Fu? => der Fuß – die Füße
das Fa? => das Fass – die Fässer
der Strau? => der Strauß – die Sträuße
das Gla? => das Glas – die Gläser
der Flu? => der Fluss – die Flüsse
das Gra? => das Gras – die Gräser
der Klo? => der Kloß – die Klöße
der Ku? => der Kuss – die Küsse
das Hau? => das Haus – die Häuser
gro? => groß – größer`,
    fehler: `Der Fluß ist breit. => Der Fluss ist breit.
Wir müßen lernen. => Wir müssen lernen.
Die Strasse ist nass. => Die Straße ist nass.
Ich habe kalte Füsse. => Ich habe kalte Füße.
Das Waßer ist warm. => Das Wasser ist warm.
Er isst gern Nüße. => Er isst gern Nüsse.
Das Schloß ist alt. => Das Schloss ist alt.`,
    text4: `Wir e{ss|ß|s}en Nü{ss|ß|s}e und Ro{s|ss|ß}inen.
Die Stra{ß|ss|s}e ist na{ss|ß|s}.
Der Ha{s|ss|ß}e frisst Gra{s|ss|ß}.
Ich mu{ss|ß|s} den Schlü{ss|ß|s}el suchen.
Mein Fu{ß|ss|s} ist hei{ß|ss|s}.
Wir gie{ß|ss|s}en die Ro{s|ss|ß}en.`
  } });

  ext('dehnung-schaerfung', { more: {
    wahl: `Die {Biene|Bine} summt.
Das {Boot|Bot} schwimmt auf dem See.
Ich {kenne|kene} den Weg.
Der {Teller|Teler} ist leer.
Die {Sonne|Sone} scheint.
Wir {spielen|spilen} im Garten.
Der {Löffel|Löfel} liegt auf dem Tisch.
Das {Meer|Mer} ist blau.
Das {Zimmer|Zimer} ist hell.
Ich brauche einen {Kamm|Kam}.
Der {Tee|Te} ist heiß.
Das {Bett|Bet} ist weich.
Die {Puppe|Pupe} hat blonde Haare.
Mein {Lehrer|Lerer} ist nett.
Der {Hahn|Han} kräht.
Das {Haar|Har} ist lang.`,
    sort: `Mutter|K
Teller|K
Puppe|K
Himmel|K
Wasser|K
Kanne|K
Butter|K
Sonne|K
Brille|K
Suppe|K
Hase|L
Rose|L
Biene|L
Nase|L
Ofen|L
Leben|L
Schule|L
Regen|L
Tiger|L`,
    markierung: `Bahn|H
Zahl|H
Mehl|H
Huhn|H
Kohle|H
Sohn|H
Ohr|H
Uhr|H
Stuhl|H
Boot|D
Moos|D
Meer|D
Saal|D
Haar|D
Beere|D
Teer|D
Liebe|I
Brief|I
Riese|I
Dieb|I
Tier|I
Knie|I`,
    paar: `Das {Meer|mehr} ist tief.
Ich möchte {mehr|Meer} Eis.
Der {Wal|Wahl} ist ein Säugetier.
Morgen ist die {Wahl|Wal} des Klassensprechers.
Die {Miene|Mine} des Lehrers war ernst.
Wir {malen|mahlen} ein Bild.
Die Mühle {mahlt|malt} das Korn.
Der {Stiel|Stil} der Blume ist lang.`,
    fehler: `Der Han kräht am Morgen. => Der Hahn kräht am Morgen.
Wir faren mit dem Zug. => Wir fahren mit dem Zug.
Das Bot schwimmt auf dem See. => Das Boot schwimmt auf dem See.
Die Sone scheint hell. => Die Sonne scheint hell.
Mein Bruder ist zen Jahre alt. => Mein Bruder ist zehn Jahre alt.`
  } });

  ext('gleich-klingend', { more: {
    verl: `das Ra{d|t} → die Räder
der Ber{g|k} → die Berge
der Wal{d|t} → die Wälder
run{d|t} → runder
der Ta{g|k} → die Tage
das Kin{d|t} → die Kinder
das Pfer{d|t} → die Pferde
der Kor{b|p} → die Körbe
das Kal{b|p} → die Kälber
lie{b|p} → lieber
das Hem{d|t} → die Hemden
der Zwer{g|k} → die Zwerge
kal{t|d} → kälter
das Bil{d|t} → die Bilder
der Fein{d|t} → die Feinde
gel{b|p} → gelber
klu{g|k} → klüger`,
    umlaut: `die H{äu|eu}ser (Haus)
die M{äu|eu}se (Maus)
l{äu|eu}ten (laut)
die B{äu|eu}che (Bauch)
die Str{äu|eu}cher (Strauch)
die Br{äu|eu}te (Braut)
s{äu|eu}bern (sauber)
die L{äu|eu}se (Laus)
die Z{äu|eu}ne (Zaun)
r{äu|eu}men (Raum)
das Geb{äu|eu}de (bauen)
das H{eu|äu}
h{eu|äu}te
n{eu|äu}n
die L{eu|äu}te
der Fr{eu|äu}nd
t{eu|äu}er
die B{eu|äu}le
das Kr{eu|äu}z
die Sch{eu|äu}ne`,
    verlFrei: `der Ber? => der Berg – die Berge
run? => rund – runder
das Ra? => das Rad – die Räder
der Kor? => der Korb – die Körbe
gel? => gelb – gelber
das Kin? => das Kind – die Kinder
klu? => klug – klüger
das Pfer? => das Pferd – die Pferde
der Zwer? => der Zwerg – die Zwerge`,
    mix4: `Das Ra{d|t} steh{t|d} im Hof.
Das Kin{d|t} tr{ä|e}gt einen Kor{b|p}.
Der Zwer{g|k} wohnt im Ber{g|k}.
Die H{äu|eu}ser sind n{eu|äu}.
Er {ent|end}deckt einen Schatz.
Der Winter ist {end|ent}lich vorbei.
Der Die{b|p} l{äu|eu}ft weg.`,
    fehler: `Das Kint spielt im Sand. => Das Kind spielt im Sand.
Der Berk ist hoch. => Der Berg ist hoch.
Die Meuse fressen Käse. => Die Mäuse fressen Käse.
Der Ball ist runt. => Der Ball ist rund.
Wir gehen in den Walt. => Wir gehen in den Wald.
Das ist entlich vorbei. => Das ist endlich vorbei.
Die Heuser sind alt. => Die Häuser sind alt.`,
    endent: `{ent|end}decken
das {End|Ent}e
{ent|end}fernen
die {End|Ent}station
{ent|end}schuldigen
{end|ent}gültig`
  } });

  ext('beistrich', { more: {
    einfach: `Ich esse gern Äpfel, Birnen und Bananen.
Lisa, kommst du mit?
Ach, das ist schade!
Der Tee ist heiß, aber gut.
Wir brauchen Mehl, Zucker, Eier und Milch.
Papa, wo ist mein Schal?
Ja, ich komme gleich.
Das Zimmer ist klein, aber gemütlich.
Im Zoo sehen wir Löwen, Affen, Elefanten und Giraffen.
Nein, das stimmt nicht.
Max, Leon und Sara gehen schwimmen.`,
    satz: `Ich bleibe drinnen, weil es regnet.
Wenn du Zeit hast, komm vorbei.
Ich hoffe, dass du bald gesund wirst.
Der Ball, den ich gefunden habe, ist rot.
Bevor wir essen, waschen wir die Hände.
Sie singt, während sie kocht.
Weißt du, wann der Zug fährt?`,
    schwer: `„Ich komme gleich“, rief Mama.
Herr Gruber, unser Hausmeister, repariert die Tür.
Anstatt zu lernen, spielte er am Handy.
Sie ging früh schlafen, um ausgeschlafen zu sein.
„Wo warst du?“, fragte Papa.
Graz, die Hauptstadt der Steiermark, liegt an der Mur.
Ohne ein Wort zu sagen, ging er hinaus.`,
    regel: `Lisa, Ben und Mia spielen Fangen.|A
Paul, kommst du mit?|R
Ich wollte kommen, doch ich war krank.|G
Ich komme, sobald ich fertig bin.|N
Wien, die Hauptstadt Österreichs, ist groß.|E
Er öffnete das Fenster, um frische Luft hereinzulassen.|I
Nicht du, sondern ich bin dran.|G
Frau Berger, darf ich etwas fragen?|R`,
    profi: `Als wir nach Hause kamen, merkten wir, dass jemand die Tür offen gelassen hatte.
Mein Bruder, der in Wien studiert, kommt am Wochenende, um uns zu besuchen.
Ja, ich habe verstanden, was du meinst.
Statt zu warten, rannte sie los, obwohl es regnete.
Unsere Lehrerin, Frau Berger, sagte, dass der Test verschoben wird.
Tom, hast du gesehen, wo ich meinen Schlüssel hingelegt habe?`
  } });

  ext('verwechslung', { more: {
    wahl: `{Seid|Seit} ihr schon fertig?
{Seit|Seid} gestern bin ich krank.
Wir wohnen in einer großen {Stadt|statt}.
{Statt|Stadt} Saft trinke ich Wasser.
Im Herbst {fiel|viel} das Laub von den Bäumen.
Ich habe {viel|fiel} Hunger.
Er {isst|ist} gern Nudeln.
Das Wetter {ist|isst} schön.
Das ist {wahr|war} – ich habe es selbst gesehen.
Wir {waren|wahren} gestern im Kino.
{Man|Mann} darf hier nicht rauchen.
Der {Mann|Man} trägt einen Hut.
Die {Wahl|Wal} zum Klassensprecher ist morgen.
Der {Wal|Wahl} ist das größte Tier der Welt.
{Weißt|Weist} du die Lösung?
Er {malt|mahlt} ein Bild.
Die Lehrerin {lehrt|leert} Mathematik.
Er {leert|lehrt} den Mistkübel.
Ich {fiel|viel} vom Fahrrad.
Der {Rat|Rad} meiner Oma hat mir geholfen.
Mein {Rad|Rat} hat einen Platten.
Oma {backt|packt} einen Kuchen.
Er {packt|backt} den Koffer.
{Wen|Wenn} hast du getroffen?
{Wenn|Wen} es regnet, bleiben wir drinnen.
Ich esse {den|denn} Apfel.
Ich bleibe hier, {denn|den} ich bin müde.`,
    saetze: `Seite – Saite => Lies die Seite 12. / Die Saite der Gitarre ist gerissen.
seit – seid => Seit Montag regnet es. / Seid bitte leise!
Rat – Rad => Mein Opa gibt mir einen guten Rat. / Ich fahre mit dem Rad zur Schule.
viel – fiel => Ich habe viel Spaß. / Der Apfel fiel vom Baum.
Mann – man => Der Mann liest Zeitung. / Hier darf man nicht parken.
leeren – lehren => Wir leeren den Papierkorb. / Lehrerinnen lehren die Kinder.`,
    wahl4: `Ich habe {viel|fiel} gelernt, trotzdem {fiel|viel} mir die Antwort nicht ein.
{Seid|Seit} leise, {seit|seid} einer Stunde schläft das Baby!
Der {Mann|Man} sagt, {man|Mann} dürfe hier nicht parken.
Ich {weiß|weis}, dass dein Hemd {weiß|weis} ist.
Mein {Rad|Rat} ist kaputt – wer weiß einen {Rat|Rad}?
Er {packt|backt} den Koffer, während Oma einen Kuchen {backt|packt}.`
  } });

  ext('fremdwoerter', { more: {
    bedeutung: `die Idee => der Einfall
die Pause => die Unterbrechung
der Kommentar => die Anmerkung
aktiv => tätig
das Zentrum => die Mitte
das Training => die Übung
der Moment => der Augenblick
präzise => genau
das Detail => die Einzelheit
die Instruktion => die Anleitung`,
    endung: `Diskuss- => die Diskussion
notier- => notieren
Elektrizit- => die Elektrizität
Kult- => die Kultur
Fotograf- => die Fotografie
Gymnast- => die Gymnastik
Real- => die Realität
Optim- => der Optimismus
studier- => studieren`,
    schreibung4: `Ich spiele {Volleyball|Wolleyball|Vollyball}.
Das {Restaurant|Restorant|Restaurang} ist voll.
Er trägt eine {Jeans|Dschiens|Jiens}.
Im Sommer machen wir {Camping|Kemping|Kämping}.
Die {Toilette|Toalette|Toilete} ist besetzt.
Ich trinke gern {Orangensaft|Oranschensaft|Orangsaft}.
Der {Chef|Schef|Scheff} ist streng.
Das {Interview|Interwju|Interwiev} war spannend.
Sie trägt ein buntes {T-Shirt|Tischört|T-Schirt}.`,
    satz: `Der [Pilot] landet das Flugzeug.
Wir haben ein spannendes [Experiment] gemacht.
Die [Diskussion] dauerte eine Stunde.
Der [Computer] ist abgestürzt.
Das [Konzert] beginnt um 19 Uhr.
Sie hat eine gute [Idee].
Die [Temperatur] ist gestiegen.`
  } });

  ext('erzaehlung', { more: {
    merkmal: `Spannungswörter wie plötzlich oder auf einmal|J
Absätze für Einleitung, Hauptteil und Schluss|J
treffende Verben und Adjektive|J
eine Erzählperspektive durchhalten (ich oder er/sie)|J
Einleitung mit Ort, Zeit und Personen|J
Figuren ohne Namen und ohne Beschreibung|N
die Zeitform wechseln, wie es gerade passt|N
alles ganz kurz in einem Satz erzählen|N`,
    besser: `Es war einmal ein Tag. || An einem stürmischen Herbstabend klopfte es plötzlich an unserer Tür. || b || spannender Anfang
Dann war es vorbei. || Endlich war die Gefahr vorüber und wir atmeten erleichtert auf. || b || Gefühle zeigen`,
    verben: `„Hilfe!“, [schrie] das Mädchen.
Leise [schlich] die Katze durch den Garten.
Der Hund [knurrte] den Fremden an.
Vor Freude [jubelten] die Kinder.
Plötzlich [stolperte] Tom über einen Stein.
„Psst!“, [flüsterte] Mia.
Der Regen [prasselte] gegen das Fenster.`,
    stil4: `Ich hatte Angst. :: Gefühle zeigen => Mein Herz klopfte wie wild und meine Knie zitterten.
Das Essen war gut. :: anschaulich beschreiben => Die Pizza duftete nach Käse und Basilikum und schmeckte köstlich.
Er ging ins Haus. :: treffendes Verb => Er schlich auf Zehenspitzen ins Haus.`
  } });

  ext('gegenstandsbeschreibung', { more: {
    adj: `rund|Fo
eckig|Fo
oval|Fo
quadratisch|Fo
rechteckig|Fo
würfelförmig|Fo
länglich|Fo
dreieckig|Fo
dunkelblau|Fa
hellgrün|Fa
silbern|Fa
dunkelgrau|Fa
rötlich|Fa
türkis|Fa
beige|Fa
himmelblau|Fa
aus Holz|M
aus Metall|M
aus Glas|M
aus Leder|M
aus Kunststoff|M
aus Baumwolle|M
aus Ton|M`,
    besser: `Der Ball ist groß. || Der Ball hat einen Durchmesser von etwa 20 Zentimetern. || b || genaue Maße
Das Ding vorne ist zum Aufmachen. || Vorne befindet sich ein Reißverschluss zum Öffnen. || b || genaue Bezeichnung
Die Kappe war rot. || Die Kappe ist rot und hat einen schwarzen Schirm. || b || Präsens und Einzelheiten
Die Lampe ist voll schön. || Die Lampe hat einen runden Schirm aus weißem Stoff. || b || sachlich statt Bewertung`,
    verben: `Ein langer Reißverschluss [schließt] die Tasche.
Der Griff [besteht] aus Holz.
Ein Band [hält] den Deckel fest.
Die Uhr [hat] ein rundes Zifferblatt.
Kleine Punkte [schmücken] den Becher.`,
    verben4: `Die Tasche [besteht] aus festem Leder.
Ein breiter Riemen [verbindet] die beiden Seiten.
Auf dem Deckel [befindet] sich ein Logo.
Der Rucksack [verfügt] über drei Fächer.
Am Boden [sind] vier Füße [angebracht].
Ein Muster aus Blättern [ziert] die Vase.`
  } });

  ext('personenbeschreibung', { more: {
    wortfeld: `lockig|H
blond|H
gewellt|H
Pferdeschwanz|H
Zöpfe|H
Glatze|H
Igelfrisur|H
kurz geschnitten|H
Sommersprossen|G
Grübchen|G
Stupsnase|G
buschige Augenbrauen|G
blaue Augen|G
schmale Lippen|G
Vollbart|G
Pausbacken|G
schlank|S
kräftig|S
zierlich|S
sportlich|S
mittelgroß|S
breitschultrig|S
schlaksig|S
klein|S`,
    besser: `Sie hat so Haare. || Sie hat kurze, schwarze Locken. || b || genau statt ungenau
Er hatte eine Brille. || Er trägt eine runde Brille mit dünnem Metallrahmen. || b || Präsens und Einzelheiten
Er sieht cool aus. || Er trägt eine schwarze Lederjacke und weiße Turnschuhe. || b || sachlich statt umgangssprachlich
Sie ist halt mittel. || Sie ist etwa 1,60 Meter groß und schlank. || b || genaue Angaben`,
    sachlich: `Seine Haare sind komisch. => Er hat kurze, abstehende braune Haare.
Sie hat eine hässliche Mütze. => Sie trägt eine graue Wollmütze mit Bommel.
Er ist voll groß. => Er ist ungefähr 1,90 Meter groß.`
  } });

  ext('vorgangsbeschreibung', { more: {
    verben: `Du [schneidest] den Apfel in Stücke.
Du [gießt] das Wasser in den Topf.
Du [klebst] die beiden Teile zusammen.
Du [faltest] das Papier in der Mitte.
Du [streust] Zucker über den Kuchen.
Du [rührst] den Teig glatt.
Du [schraubst] den Deckel fest.
Du [schälst] die Kartoffeln.`,
    form: `Ich schäle die Kartoffeln. :: man-Form => Man schält die Kartoffeln.
Ich gieße das Wasser ab. :: man-Form => Man gießt das Wasser ab.
Ich falte das Blatt. :: du-Form => Du faltest das Blatt.
Ich nehme zwei Eier. :: man-Form => Man nimmt zwei Eier.
Ich schneide das Brot. :: du-Form => Du schneidest das Brot.
Ich lege die Folie darüber. :: man-Form => Man legt die Folie darüber.
Ich lasse den Kleber trocknen. :: man-Form => Man lässt den Kleber trocknen.
Ich halte den Pinsel schräg. :: du-Form => Du hältst den Pinsel schräg.
Ich gebe Salz dazu. :: man-Form => Man gibt Salz dazu.
Ich lese die Anleitung genau. :: du-Form => Du liest die Anleitung genau.`,
    passiv: `Man schneidet die Äpfel klein. => Die Äpfel werden klein geschnitten.
Du faltest das Blatt. => Das Blatt wird gefaltet.
Man rührt den Teig um. => Der Teig wird umgerührt.
Du schraubst den Deckel zu. => Der Deckel wird zugeschraubt.
Man stellt die Form in den Ofen. => Die Form wird in den Ofen gestellt.`
  } });

  ext('brief', { more: {
    art: `Liebe Oma,|P
Mit freundlichen Grüßen|F
Sehr geehrte Damen und Herren,|F
Liebe Tante Eva,|P
Bussi und bis bald!|P
Ich bedanke mich für Ihre Unterstützung.|F
Wie geht es dir?|P
Ich wende mich mit folgendem Anliegen an Sie.|F
Hab dich lieb!|P`,
    anrede: `Können {Sie|sie} mir bitte helfen?
Ich danke {Ihnen|ihnen} für das Geschenk.
Darf ich {Sie|sie} etwas fragen?
Wir haben {Ihren|ihren} Brief erhalten.
Wie geht es {Ihrer|ihrer} Familie?
Ich schicke {Ihnen|ihnen} die Unterlagen.
Lena und Tom sagen, dass {sie|Sie} morgen kommen.
Meine Tante schreibt, dass {sie|Sie} uns besucht.`,
    besser: `Hi Frau Lang! || Sehr geehrte Frau Lang, || b || passende Anrede
Schicken Sie mir das sofort! || Könnten Sie mir das bitte zusenden? || b || höfliche Bitte
Ich hab da mal eine Frage. || Ich habe eine Frage zu Ihrem Angebot. || b || keine Umgangssprache
Danke, war cool. || Vielen Dank für Ihre Hilfe. || b || höflich und sachlich`,
    formell: `Ich will den Termin verschieben. => Ich möchte Sie bitten, den Termin zu verschieben.
Wo ist meine Bestellung? => Leider habe ich meine Bestellung noch nicht erhalten.
Das Ding funktioniert nicht. => Leider funktioniert das Gerät nicht.`
  } });

  ext('inhaltsangabe', { more: {
    merkmal: `sachliche Überleitungen (danach, schließlich)|J
in eigenen Worten schreiben|J
Orts- und Zeitangaben nennen|J
die wichtigsten Personen nennen|J
auch das Ende der Geschichte verraten|J
Vermutungen, wie es weitergehen könnte|N
Smileys und Abkürzungen|N
jedes Detail genau nacherzählen|N`,
    praesens: `Lisa lief nach Hause. => Lisa läuft nach Hause.
Der König sprach mit dem Diener. => Der König spricht mit dem Diener.
Die Kinder fanden eine Karte. => Die Kinder finden eine Karte.
Er wusste die Antwort. => Er weiß die Antwort.`,
    einleitung: `Märchen – „Frau Holle“ – Brüder Grimm – Fleiß wird belohnt => In dem Märchen „Frau Holle“ von den Brüdern Grimm geht es darum, dass Fleiß belohnt wird.
Jugendbuch – „Rico, Oskar und die Tieferschatten“ – Andreas Steinhöfel – 2008 – zwei Freunde lösen einen Kriminalfall => In dem Jugendbuch „Rico, Oskar und die Tieferschatten“ von Andreas Steinhöfel aus dem Jahr 2008 geht es um zwei Freunde, die einen Kriminalfall lösen.`
  } });

  ext('nacherzaehlung', { more: {
    merkmal: `die Reihenfolge der Handlung einhalten|J
die Hauptfigur beibehalten|J
wichtige Stellen nicht weglassen|J
die Namen der Figuren ändern|N
Stichwörter statt Sätze schreiben|N`
  } });

  ext('bericht', { more: {
    wfrage: `**Zwei Radfahrer** stießen auf dem Radweg zusammen.|Wer
**Am Montag um 7.30 Uhr** fuhr der Schulbus los.|Wann
Der Unfall passierte **vor dem Haupteingang der Schule**.|Wo
Der Fahrer übersah die rote Ampel, **weil er abgelenkt war**.|Warum
Die Kinder retteten die Katze **mit einer Leiter**.|Wie
**Ein Fenster** wurde beschädigt.|Was
**Der Turnsaal bleibt bis Freitag gesperrt.**|Folgen`,
    sachlich: `Das Spiel war einfach mega spannend! || Das Spiel endete 2 : 2. || b || sachlich statt begeistert
Die Polizei kommt um 15 Uhr. || Die Polizei kam um 15 Uhr. || b || Präteritum
Der Typ ist voll schnell weggerannt. || Der Mann lief davon. || b || keine Umgangssprache
Ich glaube, der Fahrer war schuld. || Der Fahrer hatte die Vorfahrt nicht beachtet. || b || Tatsachen statt Vermutungen`,
    umformen: `Es hat total laut gekracht! => Es gab einen lauten Knall.
Der Rauch war voll schwarz und unheimlich! => Es stieg schwarzer Rauch auf.
Die Kinder haben sich wahnsinnig gefreut! => Die Kinder freuten sich.
Der Hund war plötzlich weg, oje! => Der Hund lief davon.`,
    umf4: `Die Feuerwehr war echt superschnell da. => Die Feuerwehr traf nach wenigen Minuten ein.
Wir haben die anderen voll fertiggemacht, 5 : 0! => Unsere Mannschaft gewann mit 5 : 0.
Ein Auto ist irgendwie in den Zaun gekracht. => Ein Auto prallte gegen den Zaun.`
  } });

  ext('argumentieren', { more: {
    teile: `Handys sollten in der Pause erlaubt sein.|B
weil man sich nach dem Unterricht entspannen möchte.|G
Zum Beispiel können Freunde gemeinsam ein Video ansehen.|BSP
Jede Klasse sollte einen Klassenrat haben.|B
denn so können alle mitreden.|G
Bei uns hat der Klassenrat zum Beispiel neue Pausenspiele ausgesucht.|BSP`,
    argOrder: `Kinder sollten Sport im Verein machen. >> Sport hält gesund und macht Freunde. >> Im Fußballverein lernt man zum Beispiel, als Team zu spielen.
Die Schule sollte einen Schulgarten haben. >> Dort lernen Kinder, wo Lebensmittel herkommen. >> Man kann zum Beispiel eigene Tomaten ziehen und ernten.`,
    konn: `Lesen macht Spaß. [Außerdem] lernt man neue Wörter.
Der Weg ist gefährlich. [Deshalb] brauchen wir einen Lotsen.
[Zum Beispiel] könnten wir eine Spendenaktion starten.
Fernsehen ist entspannend. [Trotzdem] sollte man nicht zu viel fernsehen.
[Zuerst] möchte ich die Vorteile nennen.`,
    besser: `Hausübungen sind blöd. || Hausübungen sind sinnvoll, weil man den Stoff wiederholt. || b || Begründung statt Wertung
Alle wollen das so. || Viele in unserer Klasse wünschen sich das, wie unsere Umfrage zeigt. || b || Beleg statt Verallgemeinerung`,
    gegen: `„Ein Schulgarten macht zu viel Arbeit.“ => Ein Schulgarten macht zwar Arbeit, aber man lernt dabei viel über Pflanzen.
„Klassenfahrten sind zu teuer.“ => Klassenfahrten kosten zwar Geld, doch man kann sparen, zum Beispiel mit einer Jugendherberge.`
  } });

  ext('eroerterung', { more: {
    einl: `Ich schreibe jetzt über Hausübungen. || Fast alle Schülerinnen und Schüler machen täglich Hausübungen. Sind sie wirklich sinnvoll? || b || sachlicher Einstieg mit Frage
Das Thema ist Handys. || Laut einer Umfrage besitzt fast jedes Kind ab zehn Jahren ein Handy. Sollte es in der Schule verboten werden? || b || Einstieg mit Tatsache und Frage`,
    besser: `Ich finde das halt gut. || Ich bin dafür, weil die Vorteile deutlich überwiegen. || b || begründete Meinung
Jetzt kommt das zweite Argument. || Ein weiteres Argument für die Schuluniform ist, dass sie Streit über Kleidung verhindert. || b || Überleitung statt Ankündigung`,
    konn: `[Erstens] fördert Sport die Gesundheit.
Lesen ist wichtig, [denn] es erweitert den Wortschatz.
[Andererseits] kostet ein Haustier viel Zeit.
[Abschließend] möchte ich festhalten, dass beide Seiten wichtig sind.
Viele sind dagegen. [Dennoch] überwiegen die Vorteile.
[Außerdem] spart man Geld.`,
    verbind: `[Zum einen] spart man Zeit, [zum anderen] Geld.
[Dafür] spricht, dass man Zeit spart.
[Zusammenfassend] lässt sich sagen, dass die Vorteile überwiegen.
[Dagegen] spricht, dass die Geräte teuer sind.
[Aus diesem Grund] bin ich für einen Versuch.`
  } });

  ext('bewerbung', { more: {
    lebenslauf: `Geburtsort|J
Geburtsdatum|J
Bewerbungsfoto|J
Lieblingsessen|N
Größe und Gewicht|N
Haarfarbe|N
Lieblingsfilm|N
Noten aller Schularbeiten|N
Name des Haustiers|N
Lieblingsserie|N
Datum und Unterschrift|J
Erste-Hilfe-Kurs|J
Lieblingsemoji|N
Höhe des Taschengelds|N`,
    besser: `Ich hab Bock auf den Job. || Ich interessiere mich sehr für diesen Beruf. || b || keine Umgangssprache
Ich bin halt ganz okay in Mathe. || In Mathematik habe ich die Note „Gut“. || b || genaue Angaben
Hallo Leute, || Sehr geehrte Frau Berger, || b || passende Anrede
Ich kann Ihnen helfen, glaub ich. || Mit meiner Erfahrung aus dem Schnuppertag kann ich Ihr Team gut unterstützen. || b || selbstbewusst und konkret`,
    formel: `Ich will bei Ihnen arbeiten. => Hiermit bewerbe ich mich um eine Lehrstelle in Ihrem Betrieb.
Ich hab Ihre Anzeige gesehen. => Ich habe Ihre Anzeige in der Zeitung gelesen.
Ich kann gut mit Leuten. => Ich arbeite gerne im Team und gehe offen auf Menschen zu.`
  } });
})();
