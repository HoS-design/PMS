/* Deutsch – größere Aufgabenpools (Teil 1) */
(function () {
  const ext = UB.extendTopic;

  ext('dehnung-schaerfung', { more: {
    wahl: `Der {Löffel|Löfel} liegt neben dem Teller.
Die {Pfanne|Pfane} ist heiß.
Wir {schwimmen|schwimen} im See.
Das {Wetter|Weter} ist schön.
Das {Bett|Bet} ist weich.
Der {Kaffee|Kafe} ist heiß.
Die {Wiese|Wise} ist grün.
Der {Schnee|Schne} ist weiß.
Das {Zimmer|Zimer} ist hell.
Der Hund {bellt|belt}.
Mein {Sohn|Son} ist acht Jahre alt.`,
    sort: `Kissen|K
Himmel|K
Wasser|K
Pfanne|K
Schlitten|K
Mappe|K
Puppe|K
Nase|L
Rose|L
Tafel|L
Name|L
Blume|L
Ziege|L
Hose|L`,
    markierung: `Fahne|H
Sohn|H
Lehrer|H
Ohr|H
Saal|D
Schnee|D
Waage|D
See|D
Ziege|I
Spiegel|I
Fieber|I
Dieb|I`,
    paar: `Das {Meer|Mehr} ist heute ganz ruhig.
Ich möchte {mehr|Meer} Saft.
Nach der Party herrschte {Leere|Lehre} im Kühlschrank.
Er macht eine {Lehre|Leere} als Tischler.
Die {Sohle|Sole} meines Schuhs ist kaputt.
Die {Ware|Wahre} wird morgen geliefert.
Das ist eine {wahre|ware} Geschichte.`,
    fehler: `Die Schule beginnt um acht Ur. => Die Schule beginnt um acht Uhr.
Der Kafee ist heiß. => Der Kaffee ist heiß.
Die Bine fliegt zur Blume. => Die Biene fliegt zur Blume.
Wir wonen in Graz. => Wir wohnen in Graz.`
  } });

  ext('s-ss-sz', { more: {
    einsetzen: `Die Ta{ss|ß|s}e ist voll.
Das macht gro{ß|ss|s}en Spa{ß|ss|s}.
Die Ka{ss|ß|s}e ist geschlossen.
Wir rei{s|ss|ß}en nach Italien.
Das Me{ss|ß|s}er ist scharf.
Die Hose ist zu gro{ß|ss|s}.
Der Rie{s|ss|ß}e ist stark.
Ich ha{ss|ß|s}e Spinat.`,
    regel: `Pass|K
Nuss|K
Wasser|K
Messer|K
Kasse|K
Gruß|L
Soße|L
beißen|L
Fleiß|L
Maß|L
süß|L
Nase|W
Vase|W
Bluse|W
Käse|W
reisen|W`,
    text4: `Der Ha{s|ss|ß}e sa{ß|ss|s} auf der Wie{s|ss|ß}e.
Ich wei{ß|ss|s}, da{ss|ß|s} du gern Nü{ss|ß|s}e i{ss|ß|s}t.
Wir mu{ss|ß|s}ten lange drau{ß|ss|s}en warten.
Die Ta{ss|ß|s}e fiel auf den Fu{ß|ss|s}boden.
Er gie{ß|ss|s}t das Gra{s|ss|ß} mit Wa{ss|ß|s}er.
Lie{s|ss|ß} bitte das Buch, es ist spannend!
Der Flu{ss|ß|s} flie{ß|ss|s}t ins Meer.
Das Me{ss|ß|s}er ist spitz und gro{ß|ss|s}.`,
    fehler: `Das Wasser ist heiss. => Das Wasser ist heiß.
Ich weiss es nicht. => Ich weiß es nicht.
Der Schlüßel ist weg. => Der Schlüssel ist weg.
Wir grüssen die Lehrerin. => Wir grüßen die Lehrerin.
Die Nuß ist hart. => Die Nuss ist hart.
Ich esse gern Käße. => Ich esse gern Käse.
Wir haben viel Spass. => Wir haben viel Spaß.`
  } });

  ext('gegenstandsbeschreibung', { more: {
    adj: `rund|Fo
kegelförmig|Fo
herzförmig|Fo
sechseckig|Fo
länglich|Fo
spitz zulaufend|Fo
dunkelblau|Fa
rosa|Fa
cremeweiß|Fa
olivgrün|Fa
schwarz-weiß gestreift|Fa
bunt gemustert|Fa
aus Stoff|M
aus Gummi|M
aus Papier|M
aus Porzellan|M
aus Wolle|M
aus Stein|M`,
    verben: `Ein breiter Gurt [hält] die Tasche auf der Schulter.
Am Griff [hängt] ein kleiner Anhänger.
Der Becher [fasst] einen halben Liter.
Zwei Schnallen [verschließen] die Klappe.
Ein buntes Muster [ziert] den Rand des Tellers.
Die Lampe [leuchtet] in warmem Gelb.
Das Etui [lässt] sich mit einem Klettverschluss schließen.`,
    verben4: `Die Kanne [fasst] zwei Liter.
An der Seite [befindet] sich ein kleiner Henkel.
Der Deckel [ist] mit kleinen Sternen [verziert].
Ein schwarzer Gurt [führt] über die Schulter.
Das Zifferblatt [zeigt] römische Ziffern.
Die Lampe [lässt] sich in der Höhe [verstellen].`
  } });
})();
