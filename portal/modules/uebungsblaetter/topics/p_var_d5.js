/* Deutsch – mehr Varianten, Teil 5 (Ergänzung zu Teil 3 und 4) */
(function () {
  const ext = UB.extendTopic;

  ext('praepositionen', { more: {
    artikel: `Wegen {des|dem|den} Regens bleiben wir drinnen.
Trotz {der|die|den} Kälte gehen wir hinaus.
Während {der|die|den} Pause spielen wir Fußball.
Statt {eines|einem|einen} Briefes schreibe ich eine Karte.
Seit {einem|einen|eines} Jahr lerne ich Gitarre.
Wegen {der|die|dem} Hitze ist das Freibad voll.
Trotz {des|dem|den} Lärms schläft das Baby.
Während {des|dem|der} Unterrichts ist das Handy aus.
Seit {der|die|den} Geburt meiner Schwester bin ich großer Bruder.
Statt {des|dem|den} Busses nehmen wir das Rad.
Wegen {eines|einem|einen} Unfalls gab es einen Stau.
Trotz {seiner|seine|seinem} Erkältung ging er zur Schule.`
  } });

  ext('vorgangsbeschreibung', { more: {
    form: `Man schält die Kartoffeln. :: Passiv => Die Kartoffeln werden geschält.
Man schneidet das Brot in Scheiben. :: Passiv => Das Brot wird in Scheiben geschnitten.
Man gießt die Milch in den Topf. :: Passiv => Die Milch wird in den Topf gegossen.
Man klebt die Teile zusammen. :: Passiv => Die Teile werden zusammengeklebt.
Man faltet das Papier zweimal. :: Passiv => Das Papier wird zweimal gefaltet.
Man stellt den Topf auf den Herd. :: Passiv => Der Topf wird auf den Herd gestellt.
Man misst die Länge ab. :: Passiv => Die Länge wird abgemessen.
Man rührt die Soße um. :: Passiv => Die Soße wird umgerührt.
Man bemalt die Steine bunt. :: Passiv => Die Steine werden bunt bemalt.
Man legt die Äpfel auf das Blech. :: Passiv => Die Äpfel werden auf das Blech gelegt.`,
    verben: `Du [knetest] den Teig.
Du [schüttest] das Wasser weg.`
  } });

  ext('wortbildung', { more: {
    nomen: `heizen :: -ung => die Heizung
zahlen :: -ung => die Zahlung
leiten :: -ung => die Leitung
wohnen :: -ung => die Wohnung
hoffen :: -ung => die Hoffnung
trennen :: -ung => die Trennung
offen :: -heit => die Offenheit
dumm :: -heit => die Dummheit
bereit :: -schaft => die Bereitschaft
eigen :: -schaft => die Eigenschaft`,
    art: `der Kühlschrank|Z
unglücklich|A
die Ordnung|A
das Badezimmer|Z
ehrlich|A
der Turnschuh|Z
die Höflichkeit|A
das Zahnweh|Z`,
    familie: `Fahrzeug|F
Vorfahrt|F
Fahrplan|F
Beifahrer|F
spielerisch|S
Spielfeld|S
Brettspiel|S
Schreibfehler|W
Schriftsteller|W
beschreiben|W`,
    wortart: `kurz → Verb => kürzen
Mut → Adjektiv => mutig
backen → Nomen (Person) => der Bäcker
tief → Nomen => die Tiefe
Freund → Adjektiv => freundlich
laufen → Nomen (Person) => der Läufer`
  } });

  ext('bewerbung', { more: {
    lebenslauf: `Telefonnummer und E-Mail-Adresse|J
Lieblingsfarbe|N
Spitzname aus der Klasse|N
Kurse in der Freizeit (z. B. Musikschule)|J`
  } });

  ext('wortarten', { more: {
    reihe: `Der kleine Hund bellt. :: 4 Wörter => Artikel – Adjektiv – Nomen – Verb
Wir essen Pizza. :: 3 Wörter => Pronomen – Verb – Nomen
Die Katze fängt eine Maus. :: 5 Wörter => Artikel – Nomen – Verb – Artikel – Nomen
Sie trinkt kalten Saft. :: 4 Wörter => Pronomen – Verb – Adjektiv – Nomen
Mein Opa liest die Zeitung. :: 5 Wörter => Pronomen – Nomen – Verb – Artikel – Nomen
Das Wasser ist warm. :: 4 Wörter => Artikel – Nomen – Verb – Adjektiv`,
    woerter: `Pinsel|N
Decke|N
schreien|V
ehrlich|A`
  } });

  ext('gegenstandsbeschreibung', { more: {
    adj: `flach|Fo
zylinderförmig|Fo
herzförmig|Fo
sternförmig|Fo
halbrund|Fo
spitz|Fo
orange|Fa
violett|Fa
rosa|Fa
olivgrün|Fa
cremeweiß|Fa
kupferfarben|Fa
aus Seide|M
aus Karton|M
aus Stahl|M
aus Kork|M
aus Filz|M
aus Aluminium|M`
  } });

  ext('personenbeschreibung', { more: {
    wortfeld: `Locken|H
Stirnfransen|H
Dutt|H
schulterlang|H
grau meliert|H
Narbe|G
Lachfalten|G
hohe Stirn|G
schmales Kinn|G
volle Lippen|G
muskulös|S
athletisch|S
hager|S
zart gebaut|S
untersetzt|S`
  } });

  ext('dehnung-schaerfung', { more: {
    markierung: `Fehler|H
Zahn|H
Jahr|H
Bohne|H
Lehrer|H
Klee|D
Fee|D
Schnee|D
Paar|D
Aal|D
Fliege|I
Spiel|I
Sieb|I
Ziel|I`,
    sort: `Hammer|K
Pfanne|K
Kissen|K
Schiff|K
Mann|K
Löffel|K
Igel|L
Brot|L
Mond|L
Lama|L
Sofa|L
Zebra|L`,
    wahl: `Die {Schule|Schuhle} beginnt um acht.
Das {Ziel|Zil} ist nah.
Der {Fehler|Feler} war klein.
Die {Wanne|Wane} ist voll.
Wir {hoffen|hofen} auf Sonne.`,
    paar: `Wir singen ein {Lied|Lid}.
Mir zuckt das {Lid|Lied}.
{Wieder|Wider} regnet es.`
  } });

  ext('gleich-klingend', { more: {
    verl: `das Lan{d|t} → die Länder
die Han{d|t} → die Hände
der Freun{d|t} → die Freunde
das Gel{d|t} → die Gelder
wil{d|t} → wilder
der Sta{b|p} → die Stäbe
der Die{b|p} → die Diebe
gro{b|p} → grober
der Kru{g|k} → die Krüge
der Sie{g|k} → die Siege
der Zu{g|k} → die Züge
der We{g|k} → die Wege
der Hu{t|d} → die Hüte
bun{t|d} → bunter`,
    verlFrei: `der Sie? => der Sieg – die Siege
der Kru? => der Krug – die Krüge
wil? => wild – wilder
der Sta? => der Stab – die Stäbe
bun? => bunt – bunter
das Lan? => das Land – die Länder
die Han? => die Hand – die Hände`,
    umlaut: `der R{äu|eu}ber (rauben)
der S{äu|eu}gling (saugen)
r{äu|eu}chern (Rauch)
die Sch{äu|eu}me (Schaum)
die B{eu|äu}te
h{eu|äu}len`,
    endent: `{ent|end}kommen
das {End|Ent}ergebnis
der {End|Ent}spurt
{ent|end}scheiden
{ent|end}wickeln`
  } });

  ext('s-ss-sz', { more: {
    regel: `Messer|K
Kasse|K
Rüssel|K
Schüssel|K
Gasse|K
Biss|K
Grüße|L
Gefäß|L
Spieß|L
Stoß|L
Floß|L
Ruß|L`,
    probe: `der Ri? => der Riss – die Risse
der Spie? => der Spieß – die Spieße
der Sto? => der Stoß – die Stöße
das Flo? => das Floß – die Flöße
der Pa? => der Pass – die Pässe
das Ga? => das Gas – die Gase`
  } });

  ext('adjektive', { more: {
    unreg: `krank => kränker – am kränksten
hart => härter – am härtesten
gesund => gesünder – am gesündesten
dumm => dümmer – am dümmsten
kalt => kälter – am kältesten
schwach => schwächer – am schwächsten
grob => gröber – am gröbsten
eitel => eitler – am eitelsten`,
    steigern: `nett => netter – am nettesten
froh => froher – am frohesten
dick => dicker – am dicksten
dünn => dünner – am dünnsten
frisch => frischer – am frischesten
reich => reicher – am reichsten
sauber => sauberer – am saubersten`,
    gegenteil: `alt => jung (oder: neu)
nah => fern
heiß => kalt
scharf => stumpf`,
    bilden: `die Ehre :: -lich => ehrlich
der Frieden :: -lich => friedlich
der Saft :: -ig => saftig`
  } });

  ext('nomen', { more: {
    mehrzahl4: `das Praktikum => die Praktika
das Forum => die Foren
der Rhythmus => die Rhythmen
der Organismus => die Organismen
das Medium => die Medien
das Material => die Materialien
das Fossil => die Fossilien
das Ministerium => die Ministerien
der Zirkus => die Zirkusse`,
    artikel: `{der|die|das} Kuchen
{die|der|das} Nase
{das|der|die} Ei
{der|die|das} Fisch
{die|der|das} Kirsche
{das|der|die} Zelt
{der|die|das} Zahn
{die|der|das} Uhr
{das|der|die} Herz`,
    mehrzahl: `der Topf => die Töpfe
das Blatt => die Blätter
die Bank => die Bänke
der Wolf => die Wölfe
das Loch => die Löcher
die Wurst => die Würste
der Frosch => die Frösche`,
    konkret: `die Hoffnung|A
der Rucksack|K
die Freude|A`,
    zusammen: `die Hand + der Schuh => der Handschuh
der Regen + die Jacke => die Regenjacke`,
    fuge: `das Kinderbett => Kind + er + Bett
die Wochenzeitung => Woche + n + Zeitung`
  } });

  ext('indirekte-rede', { more: {
    formen: `er gibt => er gebe
sie fährt => sie fahre
er läuft => er laufe
sie trägt => sie trage
er isst => er esse
sie soll => sie solle
er mag => er möge`
  } });

  ext('konjunktiv-2', { more: {
    formen: `ich darf => ich dürfte
ihr kommt => ihr kämt (oder: ihr würdet kommen)
sie (Mehrzahl) wissen => sie wüssten
es wird => es würde`,
    verg: `Wenn Lisa den Bus [genommen hätte:nehmen], [wäre:sein] sie nicht nass geworden.
Wenn ihr mir [geholfen hättet:helfen], [wäre:sein] ich schneller fertig gewesen.`
  } });

  ext('brief', { more: {
    art: `Liebe Grüße|P
Sehr geehrte Frau Direktorin,|F
Ich freue mich auf deine Antwort!|P
Ich ersuche Sie um eine Rückmeldung.|F
Hey du!|P
Für Ihre Bemühungen danke ich Ihnen.|F`,
    anrede: `Wir laden {Sie|sie} herzlich ein.
Gefällt {Ihnen|ihnen} das Geschenk?`
  } });

  ext('verben', { more: {
    imp: `tragen (du / ihr) => Trag! – Tragt!
vergessen (du / ihr) => Vergiss! – Vergesst!
treffen (du / ihr) => Triff! – Trefft!
bringen (du / ihr) => Bring! – Bringt!
trinken (du / ihr) => Trink! – Trinkt!`,
    befehl: `Du nimmst den Schirm mit. => Nimm den Schirm mit!
Du wirfst den Müll weg. => Wirf den Müll weg!`
  } });

  ext('verwechslung', { more: {
    wahl: `Ich {lerne|lehre} für den Test.
Die {Mine|Miene} im Stift ist leer.
Er macht eine traurige {Miene|Mine}.
Am {Ende|Ente} des Films haben alle geweint.
Die {Ente|Ende} schwimmt im Teich.`
  } });

  ext('satzarten', { more: {
    zeichen: `Pass auf das Auto auf{!|.|?}
Wo wohnst du{?|.|!}`,
    frage: `Wohin fährst du?|E
Bist du müde?|J`,
    umformen: `Wir gehen ins Kino. :: Entscheidungsfrage => Gehen wir ins Kino?
Du schreibst leise. :: Aufforderungssatz => Schreib leise!`
  } });

  ext('relativsaetze', { more: {
    attribut: `das Fahrrad **mit der roten Klingel**|Präp
der Hund **des Nachbarn**|Gen`
  } });

  ext('gliedsaetze', { more: {
    art: `**Weil ich Hunger hatte**, aß ich ein Brot.|kausal
Wir warten, **bis der Regen aufhört**.|temporal`
  } });
})();
