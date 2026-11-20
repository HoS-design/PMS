/* Deutsch – größere Aufgabenpools (Teil 2) */
(function () {
  const ext = UB.extendTopic;

  ext('personenbeschreibung', { more: {
    wortfeld: `kraus|H
strähnig|H
kurz geschnitten|H
zu einem Zopf geflochten|H
gefärbt|H
Schnurrbart|G
Pausbacken|G
Muttermal|G
buschige Augenbrauen|G
spitzes Kinn|G
stämmig|S
schmächtig|S
groß gewachsen|S
breitschultrig|S
sportlich|S`,
    besser: `Er hat eine Jacke. || Er trägt eine dunkelblaue Daunenjacke mit Kapuze. || b || genaue Kleidung
Ihre Haare sind schön. || Ihre Haare sind lang, rotbraun und zu einem Zopf geflochten. || b || sachlich und genau`,
    sachlich: `Er hat einen lustigen Bart. => Er hat einen kurzen, rotbraunen Vollbart.
Sie hat eine schräge Jacke an. => Sie trägt eine gelbe Regenjacke mit schwarzen Knöpfen.
Er ist dick. => Er ist kräftig gebaut.`
  } });

  ext('wortbildung', { more: {
    art: `der Bleistift|Z
die Freundschaft|A
unklar|A
das Kinderzimmer|Z`,
    familie: `Fahrkarte|F
Beifahrer|F
Fahrplan|F
Ausfahrt|F
Fahrzeug|F
Spielfeld|S
Mitspieler|S
Schauspiel|S
Brettspiel|S
spielen|S
abschreiben|W
Handschrift|W
Abschrift|W
Rechtschreibung|W`,
    familie4: `Die [Freundschaft:Freund] der beiden hält schon lange.
Wir warten auf die [Entscheidung:entscheiden] der Jury.
Die Aufgabe war [unlösbar:lösen].
Sie lachte [fröhlich:froh].
Die [Bewegung:bewegen] hält uns fit.
Das ist eine [gefährliche:Gefahr] Kurve.
Er antwortete [ehrlich:Ehre].
Die [Erfindung:erfinden] des Rades war wichtig.`,
    wortart: `Kind → Adjektiv => kindlich
spielen → Nomen (Person) => der Spieler
warm → Nomen => die Wärme
Sonne → Adjektiv => sonnig
bewegen → Nomen => die Bewegung
Hilfe → Adjektiv => hilfreich
leicht → Verb => erleichtern
Gefahr → Adjektiv => gefährlich`
  } });

  ext('praepositionen', { more: {
    sorte: `entgegen|D
ab|D
wider|A
oberhalb|G
unterhalb|G
jenseits|G
diesseits|G
infolge|G
mithilfe|G
anstelle|G`,
    gen: `Während [der Ferien:die Ferien] fahren wir ans Meer.
Wegen [eines Unfalls:ein Unfall] gab es einen Stau.
Trotz [seiner Verletzung:seine Verletzung] spielte er weiter.
Statt [des Busses:der Bus] nahmen wir den Zug.
Innerhalb [des Hauses:das Haus] ist Rauchen verboten.
Während [der Pause:die Pause] essen wir unsere Jause.
Wegen [des Staus:der Stau] kamen wir zu spät.`,
    text4: `Ich stelle die Vase auf [den] Tisch. Jetzt steht sie auf [dem] Tisch.
Der Hund läuft in [den] Garten. Jetzt spielt er in [dem] Garten.
Mia legt das Heft unter [die] Bank. Jetzt liegt es unter [der] Bank.
Wir hängen die Lampe über [den] Tisch. Jetzt hängt sie über [dem] Tisch.`,
    fehler: `Ich fahre mit den Bus. => Ich fahre mit dem Bus.
Das Geschenk ist für meinem Bruder. => Das Geschenk ist für meinen Bruder.
Während dem Essen spricht man nicht. => Während des Essens spricht man nicht.
Wir gehen durch dem Wald. => Wir gehen durch den Wald.
Ich wohne seit einen Jahr hier. => Ich wohne seit einem Jahr hier.`
  } });

  ext('fremdwoerter', { more: {
    bedeutung: `der Dialog => das Zwiegespräch
die Region => das Gebiet
das Motiv => der Beweggrund
die Kooperation => die Zusammenarbeit
das Problem => die Schwierigkeit
die Konkurrenz => der Wettbewerb`,
    schreibung4: `Die {Physik|Füsik|Fysik} ist mein Lieblingsfach.
Wir fahren mit dem {Taxi|Taksi|Taxie}.
Das {Theater|Teater|Theather} beginnt um acht.
Die {Garage|Garasche|Garahsche} ist voll.
Er spielt {Klavier|Klawier|Klafier}.
Der {Computer|Kompjuter|Computa} ist neu.
Das {Baby|Bebi|Beibi} schläft.
Der {Clown|Klaun|Claun} macht Witze.
Die {Pizza|Pitza|Piza} schmeckt gut.
Wir besuchen ein {Museum|Musäum|Museom}.
Sie trinkt gern {Kakao|Kakau|Cacao}.`,
    satz: `Die [Reparatur] des Autos war teuer.
Wir haben lange über das Thema [diskutiert].
Der [Pilot] landete das Flugzeug sicher.
Im [Labor] machen wir einen Versuch.
Das [Thermometer] zeigt minus fünf Grad.
Sie hat eine tolle [Präsentation] gehalten.
Er [trainiert] dreimal pro Woche.
Das [Publikum] klatschte begeistert.
Der [Tourist] fragte nach dem Weg.
Die [Qualität] der Schuhe ist sehr gut.`
  } });

  ext('gleich-klingend', { more: {
    verl: `das Gel{d|t} → die Gelder
der Zu{g|k} → die Züge
der Die{b|p} → die Diebe
gesun{d|t} → gesünder
der Mon{d|t} → die Monde
der Ta{g|k} → die Tage
das Gra{b|p} → die Gräber
der Hun{d|t} → die Hunde
das Lie{d|t} → die Lieder
star{k|g} → stärker
der Schran{k|g} → die Schränke
das Bro{t|d} → die Brote`,
    mix4: `Der Hun{d|t} bell{t|d} im Garten.
Die B{ä|e}ume tragen {Ä|E}pfel.
Wir fahren {ent|end}lang des Flusses.
Der Kor{b|p} ist voller Bro{t|d}.
Sie ist {ent|end}täuscht.
Das Gel{d|t} lieg{t|d} im Schran{k|g}.
Er l{ä|e}uft schnell zum Zu{g|k}.
Die H{ä|e}nde sind schmutzig.`,
    fehler: `Der Wint ist kalt. => Der Wind ist kalt.
Das Brod ist frisch. => Das Brot ist frisch.
Die Beume sind grün. => Die Bäume sind grün.
Der Diep wurde gefasst. => Der Dieb wurde gefasst.
Er ist sehr starg. => Er ist sehr stark.
Die Hente sind kalt. => Die Hände sind kalt.
Er ist endtäuscht. => Er ist enttäuscht.`
  } });
})();
