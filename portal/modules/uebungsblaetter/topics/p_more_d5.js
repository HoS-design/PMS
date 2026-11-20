/* Deutsch – größere Aufgabenpools (Teil 5: Sprachbetrachtung) */
(function () {
  const ext = UB.extendTopic;

  ext('verwechslung', { more: {
    saetze: `das – dass => Das Buch ist spannend. / Ich hoffe, dass du kommst.
Lid – Lied => Mir zuckt das Lid. / Wir singen ein Lied.
Wal – Wahl => Der Wal schwimmt im Meer. / Morgen ist die Wahl.
Mine – Miene => Die Mine im Bleistift ist abgebrochen. / Er macht eine ernste Miene.`,
    wahl4: `Der {Wal|Wahl} taucht auf, morgen ist die {Wahl|Wal}.
Mir zuckt das {Lid|Lied}, aber ich singe trotzdem ein {Lied|Lid}.
Er {isst|ist} gerade, denn er {ist|isst} sehr hungrig.
Wir fahren in die {Stadt|statt}, {statt|Stadt} zu Hause zu bleiben.
Ich {malte|mahlte} ein Bild, der Müller {mahlte|malte} Korn.
Ich habe dich {seit|seid} Wochen nicht gesehen. Wo {seid|seit} ihr gewesen?
Das {Meer|Mehr} ist blau, ich will {mehr|Meer} davon sehen.`
  } });

  ext('satzgefuege', { more: {
    komma4: `Ich glaube, dass es morgen regnet, weil der Himmel so grau ist.
Der Hund, der im Garten bellt, gehört unserem Nachbarn, der gerade verreist ist.
Wenn es schneit, bauen wir einen Schneemann, sobald wir Zeit haben.
Er fragte, ob wir mitkommen, und wartete auf eine Antwort.
Weil sie verschlafen hatte, verpasste sie den Bus, der um sieben fährt.
Das Mädchen, das neben mir sitzt, heißt Mia.
Bevor wir losfahren, prüfen wir, ob alle Fenster geschlossen sind.`,
    verb4: `Es regnete. Wir blieben drinnen. :: weil – Nebensatz hinten => Wir blieben drinnen, weil es regnete.
Er war müde. Er spielte weiter. :: obwohl – Nebensatz hinten => Er spielte weiter, obwohl er müde war.
Ich bin fertig. Ich rufe dich an. :: sobald – Nebensatz vorne => Sobald ich fertig bin, rufe ich dich an.
Sie war klein. Sie hatte Angst vor Hunden. :: als – Nebensatz vorne => Als sie klein war, hatte sie Angst vor Hunden.
Wir sparen. Wir wollen ein Zelt kaufen. :: damit => Wir sparen, damit wir ein Zelt kaufen können.
Du hast Zeit. Hilf mir bitte. :: wenn – Nebensatz vorne => Wenn du Zeit hast, hilf mir bitte.`
  } });

  ext('satzarten', { more: {
    wfrage: `Mia wohnt **in Graz**. => Wo wohnt Mia?
Der Film beginnt **um acht Uhr**. => Wann beginnt der Film?
**Mein Opa** hat Geburtstag. => Wer hat Geburtstag?
Ich schenke **meiner Mutter** Blumen. => Wem schenkst du Blumen?
Lisa ist traurig, **weil ihr Hamster krank ist**. => Warum ist Lisa traurig?
Tom fährt **mit dem Rad** zur Schule. => Wie fährt Tom zur Schule?
Das Fahrrad **meiner Schwester** ist rot. => Wessen Fahrrad ist rot?`,
    zeichen4: `Opa sagt[:] „Ich gehe jetzt spazieren[.]“
„Hast du Hunger[?]“[,] fragt Mama.
Kannst du mir sagen, wie spät es ist[?]`
  } });

  ext('relativsaetze', { more: {
    fall4: `Das ist das Mädchen, [dessen] Bruder in meiner Klasse ist.
Der Bus, mit [dem] wir fahren, hat Verspätung.
Die Lehrerin, [der] wir Blumen geschenkt haben, freute sich.
Das ist der Park, in [dem] wir Fußball spielen.
Die Nachbarn, [deren] Katze verschwunden ist, suchen überall.
Der Stuhl, auf [dem] du sitzt, wackelt.
Die Schüler, [denen] der Ausflug gefallen hat, wollen wieder hinfahren.
Das ist die Freundin, [die] ich seit dem Kindergarten kenne.`,
    verb4: `Das ist die Lehrerin. Ihr Unterricht ist spannend. => Das ist die Lehrerin, deren Unterricht spannend ist.
Ich treffe meinen Cousin. Ich habe ihm ein Buch geliehen. => Ich treffe meinen Cousin, dem ich ein Buch geliehen habe.
Das ist der See. Wir baden in ihm. => Das ist der See, in dem wir baden.
Wir besuchen die Nachbarn. Ihr Haus ist neu. => Wir besuchen die Nachbarn, deren Haus neu ist.
Der Ball ist weg. Wir haben mit ihm gespielt. => Der Ball, mit dem wir gespielt haben, ist weg.
Das ist das Kind. Sein Fahrrad wurde gestohlen. => Das ist das Kind, dessen Fahrrad gestohlen wurde.
Hier sind die Fotos. Ich habe sie im Urlaub gemacht. => Hier sind die Fotos, die ich im Urlaub gemacht habe.`
  } });

  ext('indirekte-rede', { more: {
    ersatz: `wir haben => wir hätten
ich komme => ich käme / würde kommen
sie (Mehrzahl) wissen => sie wüssten
er hat => er habe (eindeutig)
sie (Mehrzahl) können => sie könnten
er weiß => er wisse (eindeutig)
wir lernen => wir würden lernen`,
    um4: `Anna sagt: „Ich habe keine Zeit.“ => Anna sagt, sie habe keine Zeit.
Der Trainer ruft: „Lauft schneller!“ => Der Trainer ruft, wir sollten schneller laufen.
Opa erzählt: „Früher gab es kein Handy.“ => Opa erzählt, früher habe es kein Handy gegeben.
Die Lehrerin fragt: „Habt ihr die Hausübung?“ => Die Lehrerin fragt, ob wir die Hausübung hätten.
Ben sagt: „Ich bin müde.“ => Ben sagt, er sei müde.
Die Polizei meldet: „Der Täter ist geflohen.“ => Die Polizei meldet, der Täter sei geflohen.
Lisa fragt: „Wo wohnst du?“ => Lisa fragt, wo ich wohne.
Papa sagt: „Ich kann heute nicht kommen.“ => Papa sagt, er könne heute nicht kommen.
Mia erklärt: „Wir fahren nach Italien.“ => Mia erklärt, sie würden nach Italien fahren.
Der Arzt sagt: „Sie müssen viel trinken.“ => Der Arzt sagt, ich müsse viel trinken.`
  } });

  ext('gliedsaetze', { more: {
    konj4: `[Obwohl] er müde war, lernte er weiter.
Ich bleibe zu Hause, [weil] ich krank bin.
[Nachdem] wir gegessen hatten, gingen wir spazieren.
Sie spart Geld, [damit] sie ein Rad kaufen kann.
[Als] ich klein war, hatte ich einen Hamster.
Warte hier, [bis] ich zurückkomme.
[Wenn] es regnet, nehmen wir den Bus.
Er rannte so schnell, [dass] er außer Atem war.
[Solange] du Fieber hast, bleibst du im Bett.
Er tat so, [als ob] er nichts gehört hätte.`,
    zurueck: `Als er ankam, regnete es. :: Satzglied => Bei seiner Ankunft regnete es.
Bevor das Spiel beginnt, wärmen wir uns auf. :: Satzglied => Vor dem Spiel wärmen wir uns auf.
Weil er krank war, fehlte er. :: Satzglied => Wegen seiner Krankheit fehlte er.
Wenn es dunkel wird, gehen die Lichter an. :: Satzglied => Bei Dunkelheit gehen die Lichter an.
Obwohl es stürmte, fuhr die Fähre. :: Satzglied => Trotz des Sturms fuhr die Fähre.
Nachdem die Schule aus ist, treffen wir uns. :: Satzglied => Nach der Schule treffen wir uns.`
  } });
})();
