/* Deutsch – Stufe 4 · Profi, Teil 1 (Grammatik) */
(function () {
  const ext = UB.extendTopic = UB.extendTopic || function (id, o) {
    const t = UB.topics.find(x => x.id === id); if (!t) return;
    Object.entries(o.more || {}).forEach(([k, v]) => { t.pools[k] = (t.pools[k] ? t.pools[k] + '\n' : '') + v; });
    if (o.level4) t.levels[4] = o.level4;
  };

  // ------------------------------------------------------------------ Wortarten
  ext('wortarten', {
    more: {
      reihe4: `Der kleine Hund schläft unter dem Tisch. => Artikel – Adjektiv – Nomen – Verb – Präposition – Artikel – Nomen
Wir fahren morgen mit dem Zug nach Wien. => Pronomen – Verb – Adverb – Präposition – Artikel – Nomen – Präposition – Nomen
Lena liest gern, aber Tom spielt lieber. => Nomen – Verb – Adverb – Konjunktion – Nomen – Verb – Adverb
Mein Bruder wartet dort auf seinen Freund. => Pronomen – Nomen – Verb – Adverb – Präposition – Pronomen – Nomen
Die alte Frau geht langsam über die Straße. => Artikel – Adjektiv – Nomen – Verb – Adjektiv – Präposition – Artikel – Nomen
Er kommt heute nicht, weil er krank ist. => Pronomen – Verb – Adverb – Adverb – Konjunktion – Pronomen – Adjektiv – Verb
Im Sommer schwimmen wir oft im See. => Präposition – Nomen – Verb – Pronomen – Adverb – Präposition – Nomen`
    },
    level4: {
      ichkann: ['Du bestimmst alle Wortarten in längeren Sätzen.', 'Du unterscheidest Adjektiv und Adverb, Artikel und Pronomen.', 'Du erkennst Nominalisierungen.'],
      tasks: [
        { type: 'pair', pool: 'reihe4', n: 4, title: 'Bestimme jedes Wort.', instr: 'Schreibe die Wortarten der Reihe nach auf. Fachbegriffe: Nomen, Verb, Adjektiv, Artikel, Pronomen, Präposition, Konjunktion, Adverb.' },
        { type: 'choice', pool: 'markiert', cover: true, keys: ['N', 'V', 'A', 'Art', 'P', 'Prä', 'K', 'Adv'], n: 10, asText: true, col: 'Wortart', title: 'Bestimme die unterstrichenen Wörter.', instr: 'Verwende die Fachbegriffe.', opts: [['N', 'Nomen'], ['V', 'Verb'], ['A', 'Adjektiv'], ['Art', 'Artikel'], ['P', 'Pronomen'], ['Prä', 'Präposition'], ['K', 'Konjunktion'], ['Adv', 'Adverb']] }
      ]
    }
  });

  // ------------------------------------------------------------------ Nomen
  ext('nomen', {
    more: {
      mehrzahl4: `das Museum => die Museen
das Thema => die Themen
der Kaktus => die Kakteen
das Album => die Alben
der Globus => die Globen / Globusse
das Virus => die Viren
das Lexikon => die Lexika
der Rhythmus => die Rhythmen
das Studium => die Studien
das Datum => die Daten
die Firma => die Firmen
das Konto => die Konten`,
      fuge: `der Geburtstag => Geburt + s + Tag
das Hundefutter => Hund + e + Futter
die Arbeitszeit => Arbeit + s + Zeit
die Sonnenbrille => Sonne + n + Brille
das Schweinefleisch => Schwein + e + Fleisch
der Liebesbrief => Liebe + s + Brief
die Kinderzeitung => Kind + er + Zeitung
das Bilderbuch => Bild + er + Buch
die Mausefalle => Maus + e + Falle
der Verkehrsunfall => Verkehr + s + Unfall`,
      text4: `Beim [Laufen:laufen] habe ich mir den Fuß verletzt. Das [Schlimmste:schlimm] war, dass niemand in der Nähe war.
Zum [Lesen:lesen] braucht meine Oma eine Brille. Sie wünscht allen viel [Gutes:gut].
Das [Schwimmen:schwimmen] im See ist heute verboten. Wir haben nichts [Besonderes:besonders] vor.
Mein Bruder liebt das [Kochen:kochen]. Er probiert gern etwas [Neues:neu] aus.`
    },
    level4: {
      ichkann: ['Du kennst schwierige Mehrzahlformen (Museen, Kakteen, Lexika).', 'Du erkennst Fugenelemente in Komposita.', 'Du schreibst Nominalisierungen groß.'],
      tasks: [
        { type: 'pair', pool: 'mehrzahl4', n: 6, inline: true, head: 'Einzahl', col: 'Mehrzahl', title: 'Schwierige Mehrzahl', instr: 'Schreibe die Mehrzahl mit Artikel auf.' },
        { type: 'pair', pool: 'fuge', n: 5, inline: true, head: 'Kompositum', col: 'Bestandteile + Fugenelement', title: 'Fugenelemente', instr: 'Zerlege und schreibe das Fugenelement (s, e, n, er) dazwischen.' },
        { type: 'gap', pool: 'text4', n: 3, title: 'Nominalisierungen', instr: 'Setze das Wort in Klammern passend ein. Groß oder klein?' }
      ]
    }
  });

  // ------------------------------------------------------------------ Verben
  ext('verben', {
    more: {
      stark: `lesen :: du => du liest
nehmen :: er => er nimmt
fahren :: du => du fährst
laufen :: sie => sie läuft
essen :: du => du isst
geben :: er => er gibt
sehen :: du => du siehst
halten :: er => er hält
wissen :: du => du weißt
werfen :: sie => sie wirft
treffen :: du => du triffst
schlafen :: er => er schläft
helfen :: du => du hilfst
tragen :: sie => sie trägt`,
      imp: `lesen (du / ihr) => Lies! – Lest!
nehmen (du / ihr) => Nimm! – Nehmt!
helfen (du / ihr) => Hilf! – Helft!
essen (du / ihr) => Iss! – Esst!
geben (du / ihr) => Gib! – Gebt!
sprechen (du / ihr) => Sprich! – Sprecht!
sein (du / ihr) => Sei! – Seid!
werfen (du / ihr) => Wirf! – Werft!
laufen (du / ihr) => Lauf! – Lauft!
fahren (du / ihr) => Fahr! – Fahrt!`,
      fehler: `Du nehmst dir zu viel. => Du nimmst dir zu viel.
Er lest gerne Comics. => Er liest gerne Comics.
Gebe mir bitte das Buch! => Gib mir bitte das Buch!
Du esst zu schnell. => Du isst zu schnell.
Seit leise, Kinder! => Seid leise, Kinder!
Er laufte nach Hause. => Er lief nach Hause.
Helf mir bitte! => Hilf mir bitte!
Du fahrst zu schnell. => Du fährst zu schnell.`
    },
    level4: {
      ichkann: ['Du bildest die Personalformen starker Verben (du liest, er nimmt).', 'Du bildest den Imperativ in Einzahl und Mehrzahl.', 'Du findest Fehler bei Verbformen.'],
      tasks: [
        { type: 'pair', pool: 'stark', n: 6, inline: true, head: 'Verb → Person', col: 'Personalform', title: 'Achtung, Vokalwechsel!', instr: 'Schreibe die richtige Form auf.' },
        { type: 'pair', pool: 'imp', n: 4, inline: true, head: 'Verb', col: 'Imperativ: du – ihr', title: 'Imperativ', instr: 'Schreibe die Befehlsform für du und für ihr.' },
        { type: 'error', pool: 'fehler', n: 3, title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Adjektive
  ext('adjektive', {
    more: {
      unreg: `gut => besser – am besten
viel => mehr – am meisten
gern => lieber – am liebsten
hoch => höher – am höchsten
nah => näher – am nächsten
groß => größer – am größten
dunkel => dunkler – am dunkelsten
teuer => teurer – am teuersten`,
      dekl: `Der [große:groß] Hund bellt. Ich spiele mit dem [großen:groß] Hund.
Ein [kleines:klein] Kind weint. Die Mutter tröstet das [kleine:klein] Kind.
Wir wohnen in einem [alten:alt] Haus mit einem [schönen:schön] Garten.
Sie trägt einen [roten:rot] Pullover und [neue:neu] Schuhe.
Mit [frischem:frisch] Brot und [heißer:heiß] Milch beginnt der Tag.
Das ist der Hund meines [besten:gut] Freundes.`,
      fehler: `Mein Bruder ist größer wie ich. => Mein Bruder ist größer als ich.
Das ist das beste Eis wo es gibt. => Das ist das beste Eis, das es gibt.
Der Berg ist am höchsten von allen. => (richtig)
Sie ist am schönsten. => (richtig)
Das ist mehr besser. => Das ist besser.
Er ist so groß als sein Vater. => Er ist so groß wie sein Vater.
Das ist der optimalste Weg. => Das ist der optimale Weg.
Ich habe am meisten Hunger als du. => Ich habe mehr Hunger als du.`
    },
    level4: {
      ichkann: ['Du steigerst auch unregelmäßige Adjektive (gut – besser – am besten).', 'Du beugst Adjektive richtig (dem großen Hund, mit frischem Brot).', 'Du findest Fehler beim Vergleichen.'],
      tasks: [
        { type: 'pair', pool: 'unreg', n: 6, inline: true, head: 'Positiv', col: 'Komparativ – Superlativ', title: 'Unregelmäßige Steigerung', instr: 'Schreibe die Steigerungsformen auf.' },
        { type: 'gap', pool: 'dekl', n: 4, title: 'Adjektive beugen', instr: 'Setze das Adjektiv in der richtigen Form ein.' },
        { type: 'error', pool: 'fehler', n: 4, filter: x => !/richtig/.test(x.a), title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Pronomen
  ext('pronomen', {
    more: {
      text4: `Lena hat [ihren:ihr] Hund verloren. Sie sucht [ihn] überall. Ihr Bruder hilft [ihr] beim Suchen.
Max und Tom haben [sich] gestritten. Jetzt reden [sie] nicht mehr miteinander.
Das ist das Mädchen, [das] neben mir wohnt. [Ihre] Mutter ist Ärztin.
Kannst du [mir] helfen? Ich habe [meinen:mein] Schlüssel vergessen.
Die Kinder freuen [sich] auf die Ferien. [Ihre] Koffer sind schon gepackt.`,
      fehler: `Der Mann, wo dort steht, ist mein Onkel. => Der Mann, der dort steht, ist mein Onkel.
Dem Peter sein Fahrrad ist kaputt. => Peters Fahrrad ist kaputt.
Ich habe mir gefreut. => Ich habe mich gefreut.
Gib es ihn! => Gib es ihm!
Das ist das Buch, was ich suche. => Das ist das Buch, das ich suche.
Er hat sich das Bein gebrochen. => (richtig)
Ich habe mich die Hände gewaschen. => Ich habe mir die Hände gewaschen.
Hast du dein Hausübung? => Hast du deine Hausübung?`
    },
    level4: {
      ichkann: ['Du verwendest alle Pronomen in Texten richtig.', 'Du vermeidest Fehler wie „der Mann, wo …“ oder „dem Peter sein …“.'],
      tasks: [
        { type: 'gap', pool: 'text4', n: 3, title: 'Pronomen im Text', instr: 'Setze das passende Pronomen in der richtigen Form ein.' },
        { type: 'error', pool: 'fehler', n: 4, filter: x => !/richtig/.test(x.a), title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' },
        { type: 'choice', pool: 'art', cover: true, keys: ['Pers', 'Poss', 'Refl', 'Dem', 'Rel'], n: 6, asText: true, col: 'Pronomen', title: 'Bestimme die Pronomen.', instr: 'Personal-, Possessiv-, Reflexiv-, Demonstrativ- oder Relativpronomen?', opts: [['Pers', 'Personalpronomen'], ['Poss', 'Possessivpronomen'], ['Refl', 'Reflexivpronomen'], ['Dem', 'Demonstrativpronomen'], ['Rel', 'Relativpronomen']] }
      ]
    }
  });

  // ------------------------------------------------------------------ Satzarten
  ext('satzarten', {
    more: {
      wfrage: `**Der Postbote** bringt ein Paket. => Wer bringt ein Paket?
Das Konzert beginnt **um acht Uhr**. => Wann beginnt das Konzert?
Lena fährt morgen **nach Wien**. => Wohin fährt Lena morgen?
Der Hund gehört **meinem Bruder**. => Wem gehört der Hund?
Wir bleiben **wegen des Regens** zu Hause. => Warum bleibt ihr zu Hause?
Tom liest **ein spannendes Buch**. => Was liest Tom?
Das ist **Annas** Rucksack. => Wessen Rucksack ist das?
Wir treffen uns **im Park**. => Wo treffen wir uns?`,
      zeichen4: `Mama fragt[:] „Hast du deine Hausübung gemacht[?]“
„Komm sofort her[!]“[,] ruft der Vater.
Weißt du, wann der Zug fährt[?]
Ich frage mich, ob er kommt[.]
„Wie schön ist das[!]“[,] staunt Lena.
Er will wissen, wo wir wohnen[.]`
    },
    level4: {
      ichkann: ['Du stellst zu jedem Satzglied die passende W-Frage.', 'Du setzt Satzzeichen auch bei indirekten Fragen und wörtlicher Rede richtig.'],
      tasks: [
        { type: 'pair', pool: 'wfrage', n: 5, title: 'Frage nach dem fett gedruckten Teil.', instr: 'Bilde eine Ergänzungsfrage (W-Frage).' },
        { type: 'gap', pool: 'zeichen4', n: 3, title: 'Satzzeichen', instr: 'Setze die fehlenden Satzzeichen ein. Achtung bei indirekten Fragen!' },
        { type: 'pair', pool: 'umformen', n: 3, title: 'Forme die Sätze um.', instr: 'Schreibe den Satz in der angegebenen Satzart.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Präpositionen
  ext('praepositionen', {
    more: {
      gen: `Wegen [des schlechten Wetters:das schlechte Wetter] fällt das Spiel aus.
Trotz [der Kälte:die Kälte] gingen wir spazieren.
Während [des Unterrichts:der Unterricht] ist das Handy aus.
Statt [eines Kuchens:ein Kuchen] backen wir Kekse.
Innerhalb [einer Woche:eine Woche] muss das Projekt fertig sein.
Wegen [seines Fußes:sein Fuß] kann er nicht mitspielen.
Trotz [des Regens:der Regen] fand das Konzert statt.
Außerhalb [der Stadt:die Stadt] ist es ruhiger.`,
      fehler: `Wegen dem Regen bleiben wir zu Hause. => Wegen des Regens bleiben wir zu Hause.
Ich gehe zu die Oma. => Ich gehe zur Oma.
Das Bild hängt an die Wand. => Das Bild hängt an der Wand.
Ich hänge das Bild an der Wand. => Ich hänge das Bild an die Wand.
Trotz dem Sturm fuhren sie los. => Trotz des Sturms fuhren sie los.
Er kommt mit seinen Freund. => Er kommt mit seinem Freund.
Wir warten auf den Bus. => (richtig)
Sie geht ohne ihrem Schirm. => Sie geht ohne ihren Schirm.`,
      text4: `Ich lege das Buch auf [den] Tisch. Jetzt liegt es auf [dem] Tisch.
Die Katze springt unter [das] Bett und versteckt sich unter [dem] Bett.
Wir hängen das Poster an [die] Wand. Jetzt hängt es an [der] Wand.
Er stellt das Rad in [die] Garage. Dort steht es in [der] Garage.
Tom setzt sich neben [mich]. Jetzt sitzt er neben [mir].`
    },
    level4: {
      ichkann: ['Du verwendest Präpositionen mit Genitiv (wegen, trotz, während) richtig.', 'Du unterscheidest Wo? (Dativ) und Wohin? (Akkusativ) sicher.', 'Du findest typische Präpositionsfehler.'],
      tasks: [
        { type: 'gap', pool: 'gen', n: 5, title: 'Präpositionen mit Genitiv', instr: 'Setze den Ausdruck in Klammern im Genitiv ein.' },
        { type: 'gap', pool: 'text4', n: 3, title: 'Wo? oder Wohin?', instr: 'Setze den Artikel bzw. das Pronomen ein.' },
        { type: 'error', pool: 'fehler', n: 4, filter: x => !/richtig/.test(x.a), title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Wortbildung
  ext('wortbildung', {
    more: {
      familie4: `Die [Entdeckung:entdecken] Amerikas veränderte die Welt.
Das war eine sehr [freundliche:Freund] Antwort.
Die [Gesundheit:gesund] ist das Wichtigste.
Er hat die Aufgabe [richtig:Richtigkeit] gelöst.
Die [Ankunft:ankommen] des Zuges verzögert sich.
Das Wasser ist [ungenießbar:genießen].
Wir danken für Ihre [Aufmerksamkeit:aufmerksam].
Sie fuhr [vorsichtig:Vorsicht] über die Kreuzung.
Seine [Erklärung:erklären] war sehr verständlich.
Das ist eine [wunderbare:Wunder] Idee!`,
      wortart: `Freund → Adjektiv => freundlich
schön → Nomen => die Schönheit
fahren → Nomen (Person) => der Fahrer
Glück → Adjektiv => glücklich
lesen → Adjektiv => lesbar
frei → Nomen => die Freiheit
Kraft → Adjektiv => kräftig
heizen → Nomen => die Heizung
klar → Verb => klären
Zweifel → Verb => zweifeln`
    },
    level4: {
      ichkann: ['Du bildest aus einem Wortstamm Wörter verschiedener Wortarten.', 'Du setzt die passende Form in Sätze ein.'],
      tasks: [
        { type: 'gap', pool: 'familie4', n: 6, title: 'Die passende Wortform', instr: 'Bilde aus dem Wort in Klammern die passende Form.' },
        { type: 'pair', pool: 'wortart', n: 6, inline: true, head: 'Wort → Wortart', col: 'neues Wort', title: 'Wortarten wechseln', instr: 'Bilde ein Wort der angegebenen Wortart.' },
        { type: 'pair', pool: 'zerlegen', n: 3, inline: true, head: 'Kompositum', col: 'Bestandteile (Wortarten)', title: 'Zerlege die Komposita.', instr: 'Schreibe die Bestandteile und ihre Wortarten auf.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Satzgefüge
  ext('satzgefuege', {
    more: {
      komma4: `Als wir nach Hause kamen, merkten wir, dass die Tür offen war.
Der Film, den wir gestern gesehen haben, war spannend, aber zu lang.
Ich weiß nicht, ob er kommt, weil er krank ist.
Wenn du willst, können wir morgen, nachdem die Schule aus ist, ins Kino gehen.
Obwohl es regnete, spielten die Kinder, die keine Jacken hatten, im Garten.
Sie sagte, dass sie keine Zeit habe, und ging.
Weil der Bus Verspätung hatte, kamen wir zu spät, was der Lehrer nicht lustig fand.
Nachdem er gegessen hatte, legte er sich hin, denn er war sehr müde.`,
      verb4: `Ich habe keine Zeit. Ich muss lernen. :: weil – Nebensatz vorne => Weil ich lernen muss, habe ich keine Zeit.
Es war kalt. Wir gingen baden. :: obwohl – Nebensatz vorne => Obwohl es kalt war, gingen wir baden.
Er hatte gegessen. Er ging schlafen. :: nachdem => Nachdem er gegessen hatte, ging er schlafen.
Sie lernt viel. Sie will den Test bestehen. :: damit => Sie lernt viel, damit sie den Test besteht.
Der Hund bellt. Er hat Hunger. :: weil – Nebensatz hinten => Der Hund bellt, weil er Hunger hat.
Du kommst mit. Ich freue mich. :: wenn – Nebensatz vorne => Wenn du mitkommst, freue ich mich.`
    },
    level4: {
      ichkann: ['Du setzt in langen Satzgefügen mit mehreren Nebensätzen alle Beistriche.', 'Du verbindest Sätze mit dem Nebensatz vorne oder hinten.'],
      tasks: [
        { type: 'commas', pool: 'komma4', n: 6, title: 'Setze alle Beistriche.', instr: 'Achtung: Manche Sätze haben mehrere Nebensätze.' },
        { type: 'pair', pool: 'verb4', n: 4, title: 'Verbinde die Sätze.', instr: 'Verwende das angegebene Wort. Achte auf die Stellung des Nebensatzes.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Relativsätze
  ext('relativsaetze', {
    more: {
      fall4: `Das ist der Mann, [dessen] Auto gestohlen wurde.
Die Frau, [deren] Hund so laut bellt, wohnt neben uns.
Das ist das Haus, in [dem] ich geboren wurde.
Der Freund, mit [dem] ich telefoniert habe, wohnt in Linz.
Die Kinder, [denen] ich geholfen habe, bedankten sich.
Das ist die Stadt, in [der] meine Großeltern leben.
Der Lehrer, auf [den] wir warten, ist noch nicht da.
Die Schülerinnen, [deren] Projekt gewonnen hat, freuen sich.
Das Buch, von [dem] ich dir erzählt habe, ist ausgeliehen.
Die Freunde, mit [denen] ich in den Urlaub fahre, kommen morgen.`,
      verb4: `Das ist mein Onkel. Sein Garten ist riesig. => Das ist mein Onkel, dessen Garten riesig ist.
Ich kenne die Frau. Ihr Sohn geht in meine Klasse. => Ich kenne die Frau, deren Sohn in meine Klasse geht.
Das ist der Freund. Ich fahre mit ihm in den Urlaub. => Das ist der Freund, mit dem ich in den Urlaub fahre.
Die Kinder spielen im Hof. Ich habe ihnen Eis gekauft. => Die Kinder, denen ich Eis gekauft habe, spielen im Hof.
Hier ist das Heft. Ich habe es gesucht. => Hier ist das Heft, das ich gesucht habe.`
    },
    level4: {
      ichkann: ['Du verwendest Relativpronomen in allen Fällen (dessen, deren, denen).', 'Du bildest Relativsätze mit Präposition (mit dem, in der, auf den).'],
      tasks: [
        { type: 'gap', pool: 'fall4', n: 7, title: 'Welches Relativpronomen?', instr: 'Setze das Relativpronomen in der richtigen Form ein.' },
        { type: 'pair', pool: 'verb4', n: 4, title: 'Verbinde mit einem Relativsatz.', instr: 'Achte auf Fall, Präposition und Beistriche.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Indirekte Rede
  ext('indirekte-rede', {
    more: {
      ersatz: `sie haben => sie hätten (Konj. I „sie haben“ = Indikativ)
wir kommen => wir kämen / würden kommen
ich gehe => ich ginge / würde gehen
sie spielen => sie würden spielen
ihr habt => ihr hättet
wir wissen => wir wüssten
ich kann => ich könne (eindeutig)
sie müssen => sie müssten`,
      um4: `Lena fragt: „Kommst du morgen mit?“ => Lena fragt, ob ich morgen mitkomme / mitkäme.
Der Lehrer fragt: „Wer hat das Fenster geöffnet?“ => Der Lehrer fragt, wer das Fenster geöffnet habe.
Mama sagt: „Räum dein Zimmer auf!“ => Mama sagt, ich solle mein Zimmer aufräumen.
Die Kinder sagen: „Wir haben Hunger.“ => Die Kinder sagen, sie hätten Hunger.
Tom erzählt: „Ich war gestern im Kino.“ => Tom erzählt, er sei gestern im Kino gewesen.
Die Ärztin rät: „Bleiben Sie im Bett!“ => Die Ärztin rät, er / sie solle im Bett bleiben.
Max meint: „Morgen wird es regnen.“ => Max meint, morgen werde es regnen.
Die Eltern sagen: „Wir kommen später.“ => Die Eltern sagen, sie würden später kommen / kämen später.`
    },
    level4: {
      ichkann: ['Du verwendest Ersatzformen, wenn der Konjunktiv I wie der Indikativ aussieht.', 'Du gibst Fragen und Aufforderungen in indirekter Rede wieder (ob …, solle …).'],
      tasks: [
        { type: 'pair', pool: 'ersatz', n: 5, inline: true, head: 'Indikativ', col: 'Konjunktiv / Ersatzform', title: 'Ersatzformen', instr: 'Wenn der Konjunktiv I gleich wie der Indikativ ist, nimmst du den Konjunktiv II oder die würde-Form.' },
        { type: 'pair', pool: 'um4', n: 6, title: 'Setze in die indirekte Rede.', instr: 'Fragen mit ob/W-Wort, Aufforderungen mit solle(n), Ersatzformen beachten.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Konjunktiv II
  ext('konjunktiv-2', {
    more: {
      verg: `Wenn ich das [gewusst hätte:wissen], [wäre:sein] ich früher gekommen.
Wenn wir den Bus nicht [verpasst hätten:verpassen], [wären:sein] wir pünktlich gewesen.
Wenn du [gelernt hättest:lernen], [hättest:haben] du den Test bestanden.
Wenn es nicht [geregnet hätte:regnen], [hätten:haben] wir gegrillt.
Wenn sie [angerufen hätte:anrufen], [hätte:haben] ich sie abgeholt.
Wenn er vorsichtiger [gewesen wäre:sein], [wäre:sein] das nicht passiert.`,
      fehler: `Wenn ich Zeit würde haben, würde ich kommen. => Wenn ich Zeit hätte, würde ich kommen.
Wenn ich das gewusst habe, wäre ich gekommen. => Wenn ich das gewusst hätte, wäre ich gekommen.
Ich wünschte, ich bin größer. => Ich wünschte, ich wäre größer.
Ich würde helfen, wenn ich könnte würde. => Ich würde helfen, wenn ich könnte.
Wenn es nicht regnen würde, würden wir baden gehen. => (richtig – würde-Form ist hier möglich)
Hätte ich mehr Geld, würde ich ein Fahrrad kaufen. => (richtig)`
    },
    level4: {
      ichkann: ['Du bildest irreale Bedingungssätze der Vergangenheit (wenn ich … gewusst hätte …).', 'Du findest Fehler beim Konjunktiv II.'],
      tasks: [
        { type: 'gap', pool: 'verg', n: 5, title: 'Hätte ich doch …!', instr: 'Setze den Konjunktiv II der Vergangenheit ein.' },
        { type: 'error', pool: 'fehler', n: 3, filter: x => !/richtig/.test(x.a), title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' },
        { type: 'pair', pool: 'wunsch', n: 3, title: 'Wünsche', instr: 'Schreibe einen Wunschsatz im Konjunktiv II.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Gliedsätze
  ext('gliedsaetze', {
    more: {
      konj4: `Er übte jeden Tag, [sodass] er schließlich gewann.
Sie half mir, [ohne dass] ich sie darum gebeten hatte.
[Sobald] du fertig bist, gehen wir los.
[Seitdem] er umgezogen ist, sehen wir uns selten.
Du kannst mitkommen, [falls] du Zeit hast.
Er lernte Vokabeln, [indem] er sie auf Kärtchen schrieb.
[Während] ich koche, deckst du den Tisch.
[Bevor] du gehst, mach bitte das Licht aus.`,
      zurueck: `Weil es regnet, bleiben wir zu Hause. :: Satzglied => Wegen des Regens bleiben wir zu Hause.
Obwohl es kalt war, gingen wir baden. :: Satzglied => Trotz der Kälte gingen wir baden.
Nachdem wir gegessen hatten, spielten wir. :: Satzglied => Nach dem Essen spielten wir.
Wenn es schneit, fahren wir Ski. :: Satzglied => Bei Schnee fahren wir Ski.
Damit er gesund wird, nimmt er Medizin. :: Satzglied => Zu seiner Genesung nimmt er Medizin.
Während wir Ferien hatten, war es heiß. :: Satzglied => Während der Ferien war es heiß.`
    },
    level4: {
      ichkann: ['Du verwendest auch sodass, ohne dass, sobald, seitdem, indem richtig.', 'Du formst Gliedsätze in Satzglieder um und umgekehrt.'],
      tasks: [
        { type: 'gap', pool: 'konj4', n: 6, wordbox: true, title: 'Welche Konjunktion passt?', instr: 'Setze die Konjunktionen aus dem Kasten ein.' },
        { type: 'pair', pool: 'zurueck', n: 4, title: 'Vom Gliedsatz zum Satzglied', instr: 'Forme den Nebensatz in ein Satzglied um.' },
        { type: 'pair', pool: 'umformen', n: 2, title: 'Vom Satzglied zum Gliedsatz', instr: 'Bilde den angegebenen Adverbialsatz.' }
      ]
    }
  });
})();
