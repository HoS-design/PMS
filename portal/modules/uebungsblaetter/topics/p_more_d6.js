/* Deutsch – größere Aufgabenpools (Teil 6) */
(function () {
  const ext = UB.extendTopic;

  ext('nacherzaehlung', { more: {
    merkmal: `den Höhepunkt spannend erzählen|J
den Inhalt vollständig wiedergeben|J
Gefühle der Figuren wiedergeben|J
eine Fortsetzung dazuschreiben|N
alle Namen weglassen|N`,
    perspektive: `Erzähle die Geschichte oben **so, als wärst du selbst dabei gewesen** (Ich-Form, als Beobachterin oder Beobachter). => Ich-Form ; was du siehst und hörst ; Reihenfolge bleibt gleich ; Präteritum
Erzähle die Geschichte oben **mit einem anderen Schluss** nach. Der Anfang bleibt gleich, nur das Ende änderst du. => Anfang und Hauptteil wie im Original ; neuer, passender Schluss ; Präteritum ; wörtliche Rede`
  } });

  ext('inhaltsangabe', { more: {
    merkmal: `Antworten auf die W-Fragen|J
Nebensachen weglassen|J
Absätze sinnvoll gliedern|J
Zusammenhänge erklären (weil, deshalb)|J
Spannung aufbauen|N
Gefühle ausmalen|N
Umgangssprache (voll cool, krass)|N
Ausrufe und Fragen an die Leserinnen und Leser|N`,
    deutung: `Welche Figur der Geschichte oben findest du am interessantesten? Begründe deine Meinung in einem **Schlussteil** (4–5 Sätze). => Figur benennen ; Begründung mit Textstellen ; eigene Meinung ; Präsens
Schreibe einen **Schlussteil**, in dem du die Geschichte oben mit deinem eigenen Leben vergleichst (4–5 Sätze). => Botschaft benennen ; Vergleich mit eigenen Erfahrungen ; Begründung ; Präsens`
  } });

  ext('gross-klein', { more: {
    schwer: `Beim {Schwimmen|schwimmen} habe ich mich erkältet.
Das {Wichtigste|wichtigste} ist die Gesundheit.
Wir sehen uns {heute|Heute} {Abend|abend}.
Er hat {nichts|Nichts} gesagt.
Sie kam am {Morgen|morgen} zu spät.
Ich gehe {abends|Abends} gern spazieren.
Das ist etwas {Besonderes|besonderes}.
Wir fahren in die {steirische|Steirische} Hauptstadt.`,
    fehler4: `heute morgen hat es geschneit. => Heute Morgen hat es geschneit.
beim radfahren trage ich immer einen helm. => Beim Radfahren trage ich immer einen Helm.
das wichtigste ist, dass du gesund bist. => Das Wichtigste ist, dass du gesund bist.
liebe oma, wie geht es dir? => Liebe Oma, wie geht es dir?`
  } });

  ext('erzaehlung', { more: {
    merkmal: `abwechslungsreiche Satzanfänge|J
Spannung langsam steigern|J
Gedanken der Hauptfigur zeigen|J
die Lösung gleich am Anfang verraten|N
Umgangssprache wie im Chat|N
ein Ende, das unverständlich bleibt|N`,
    verben: `Das Pferd [galoppierte] über die Wiese.
Vorsichtig [kletterte] Tim auf den Baum.
Der Junge [sprang] mit einem Satz über den Bach.
„Ich habe Angst“, [murmelte] sie leise.
„Lass das sofort!“, [schimpfte] der Hausmeister.
„Das ist ja unglaublich!“, [staunte] Opa.`
  } });

  ext('wortarten', { more: {
    reihe4: `Das rote Auto steht vor unserem Haus. => Artikel – Adjektiv – Nomen – Verb – Präposition – Pronomen – Nomen
Ich esse gern Äpfel und Birnen. => Pronomen – Verb – Adverb – Nomen – Konjunktion – Nomen
Die Kinder spielen heute in dem großen Garten. => Artikel – Nomen – Verb – Adverb – Präposition – Artikel – Adjektiv – Nomen
Sie singt laut, denn sie ist fröhlich. => Pronomen – Verb – Adjektiv – Konjunktion – Pronomen – Verb – Adjektiv
Unser Lehrer erklärt uns die neue Regel. => Pronomen – Nomen – Verb – Pronomen – Artikel – Adjektiv – Nomen`
  } });

  ext('beistrich', { more: {
    profi: `Lena, kommst du bitte einmal her?
Wir kauften Äpfel, Birnen, Bananen und Trauben.
„Ich komme gleich“, rief Max, „warte noch kurz!“
Er versprach, pünktlich zu sein, kam aber trotzdem zu spät.
Mein Onkel, ein begeisterter Bergsteiger, war schon auf dem Großglockner.
Nachdem wir gegessen hatten, gingen wir, obwohl es regnete, spazieren.
Ach, das ist aber schade!
Wien, die Hauptstadt Österreichs, hat fast zwei Millionen Einwohner.`
  } });
})();
