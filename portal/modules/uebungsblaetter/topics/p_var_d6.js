/* Deutsch – mehr Varianten, Teil 6: alle Pools mindestens 5 × so groß wie die Aufgabenzahl */
(function () {
  const ext = UB.extendTopic;

  // ---------- Argumentieren / Erörterung: je drei Themen, die Pools sind in beiden Themen gleich
  const arg = {
    uniform: `Bei Ausflügen erkennt man sofort, wer zur Klasse gehört.|P
Die Schule tritt nach außen einheitlich auf.|P
Unterschiede zwischen armen und reichen Familien fallen weniger auf.|P
Lehrkräfte erkennen Fremde im Schulhaus schneller.|P
Im Sommer kann eine Uniform zu warm sein.|C
Wer schnell wächst, braucht oft eine neue Uniform.|C
Gemobbt wird trotzdem – dann eben wegen anderer Dinge.|C
In Österreich ist es nicht üblich, Uniformen zu tragen.|C`,
    handy: `Man kann ein Tafelbild schnell abfotografieren.|P
Jugendliche lernen, verantwortungsvoll mit Medien umzugehen.|P
Man kann sich nach der Schule mit Freunden verabreden.|P
Wer krank ist, bekommt die Hausübung schnell geschickt.|P
Manche schummeln bei Tests mit dem Handy.|C
Fotos von anderen werden ohne Erlaubnis verschickt.|C
Wer kein teures Handy hat, wird manchmal ausgegrenzt.|C
Ständige Nachrichten sorgen für Stress.|C`,
    haustier: `Ein Haustier ist ein treuer Freund.|P
Wer ein Tier hat, gewöhnt sich an einen festen Tagesablauf.|P
Mit einem Hund lernt man leichter andere Menschen kennen.|P
Ein Hund kann das Haus bewachen.|P
In vielen Mietwohnungen sind Haustiere verboten.|C
Ein Tier kann Möbel und Schuhe beschädigen.|C
Wenn das Tier stirbt, ist die Trauer groß.|C
Manche Kinder verlieren schnell die Lust an der Pflege.|C`
  };
  ext('argumentieren', { more: Object.assign({ teile: `Zum Beispiel kann man in der Schulküche gesund kochen lernen.|BSP` }, arg) });
  ext('eroerterung', { more: arg });

  // ---------- Wortarten und Wortbildung
  ext('praepositionen', { more: { sorte: `aufgrund|G
angesichts|G
inmitten|G
samt|D
gemäß|D` } });
  ext('wortbildung', { more: {
    familie: `Fahrschule|F
Fahrgast|F
Fahrstuhl|F
Spielregel|S
Kartenspiel|S
Spielverderber|S
Zeitschrift|W
Schreibschrift|W`,
    art: `der Sonnenschirm|Z
die Freundschaft|A`,
    nomen: `bereit :: -schaft => die Bereitschaft`,
    zerlegen: `der Spielplatz => spielen + Platz (Verb + Nomen)`
  } });
  ext('nomen', { more: {
    konkret: `die Hoffnung|A
der Kugelschreiber|K`,
    zusammen: `der Apfel + der Baum => der Apfelbaum`,
    zerlegen: `die Sonnenbrille :: Bestimmungswort + Grundwort => Sonne + Brille`,
    mehrzahl4: `das Komma => die Kommas / Kommata`
  } });
  ext('verben', { more: { stark: `geben :: du => du gibst` } });
  ext('adjektive', { more: { unreg: `bald => eher – am ehesten
wenig => weniger – am wenigsten
schwarz => schwärzer – am schwärzesten` } });
  ext('pronomen', { more: { art: `Ich erinnere **mich** an den Urlaub.|Refl` } });
  ext('satzarten', { more: { art: `Wie viel kostet das Eis?|F` } });

  // ---------- Sätze
  ext('satzgefuege', { more: { komma4: `Obwohl es regnete, gingen wir spazieren, weil der Hund hinausmusste.` } });
  ext('relativsaetze', { more: { pronomen: `Das ist das Fahrrad, {das|dem|den} ich zum Geburtstag bekommen habe.` } });
  ext('indirekte-rede', { more: {
    umformen: `Tim erzählt: „Ich lerne Gitarre.“ => Tim erzählt, er lerne Gitarre.`,
    ersatz: `wir lesen => wir läsen / würden lesen`
  } });
  ext('gliedsaetze', { more: { konj4: `[Indem] du jeden Tag übst, wirst du besser.` } });

  // ---------- Rechtschreibung
  ext('gleich-klingend', { more: {
    verl: `der Stran{d|t} → die Strände
der Krie{g|k} → die Kriege
das Sie{b|p} → die Siebe
der Rau{b|p} → rauben
das Schil{d|t} → die Schilder
frem{d|t} → fremder`,
    verlFrei: `der Stran? => der Strand – die Strände
das Schil? => das Schild – die Schilder`,
    endent: `{ent|end}spannen
{ent|end}gegen
der {Ent|End}wurf`
  } });
  ext('dehnung-schaerfung', { more: {
    markierung: `Stroh|H
Höhle|H
Seele|D
Krieg|I`,
    wahl: `Der {Hammer|Hamer} liegt im Keller.`,
    sort: `Gabel|L`,
    fehler: `Die Kinder spilen im Garten. => Die Kinder spielen im Garten.`
  } });
  ext('s-ss-sz', { more: {
    regel: `wissen|K
Größe|L
bloß|L`,
    einsetzen: `Der Schlü{ss|ß|s}el passt nicht.
Die Wolken sind wei{ß|ss|s}.`,
    probe: `der Krei? => der Kreis – die Kreise`
  } });
  ext('getrennt-zusammen', { more: { wahl: `Papa will heute das {Auto waschen|autowaschen}.
Wir waren {gestern Abend|gesternabend} im Kino.
Ich möchte {Gitarre spielen|gitarrespielen} lernen.` } });
  ext('beistrich', { more: {
    einfach: `Wir spielen Fußball, Tennis und Volleyball.`,
    satz: `Sobald ich fertig bin, rufe ich dich an.`
  } });

  // ---------- Schreiben
  ext('personenbeschreibung', { more: {
    wortfeld: `Bob|H
Kurzhaarschnitt|H
Zahnlücke|G
gedrungen|S`,
    aufbau: `Gesamteindruck: Alter, Größe, Figur >> Gesicht und Haare >> Kleidung von oben nach unten >> Besonderheiten wie Brille oder Narbe
Name und Alter >> Figur und Größe >> Kopf: Haare, Augen, Nase, Mund >> Kleidung und Schuhe`
  } });
  ext('gegenstandsbeschreibung', { more: { adj: `achteckig|Fo
smaragdgrün|Fa
aus Bambus|M` } });
  ext('vorgangsbeschreibung', { more: {
    verben: `Du [schneidest] die Gurke in dünne Scheiben.`,
    form: `Ich wasche den Salat. :: man-Form => Man wäscht den Salat.`
  } });
  ext('brief', { more: { art: `Alles Liebe|P` } });
  ext('charakteristik', { more: {
    beleg: `Sie ist klug. || Sie ist klug: Sie löst das Rätsel, an dem alle anderen scheitern. || b || Eigenschaft mit Beleg
Paul ist so arg. || Paul ist rücksichtslos, denn er drängt sich immer in der Schlange vor. || b || sachlich mit Beleg
Ich glaub, sie hat Angst. || Sie ist ängstlich: Nachts lässt sie immer das Licht brennen. || b || Beleg statt Vermutung
Er war am Anfang schüchtern. || Am Anfang ist er schüchtern, am Ende spricht er vor der ganzen Klasse. || b || Präsens und Entwicklung`,
    teile: `Mia ist außerdem sehr neugierig: Sie öffnet jede verschlossene Tür.|H
Am Ende bewundere ich Mia, weil sie nie aufgibt.|S`
  } });

  // Ersatz für Zeilen, die es schon gab
  ext('nomen', { more: { konkret: `das Glück|A
der Regenschirm|K`, zusammen: `der Regen + der Bogen => der Regenbogen`, zerlegen: `der Schulbus :: Bestimmungswort + Grundwort => Schule + Bus` } });
  ext('wortbildung', { more: { art: `die Dunkelheit|A`, nomen: `leiten :: -ung => die Leitung
Mann :: -schaft => die Mannschaft
verbinden :: -ung => die Verbindung`, zerlegen: `die Turnhalle => turnen + Halle (Verb + Nomen)
der Rotstift => rot + Stift (Adjektiv + Nomen)
der Blumentopf => Blume + Topf (Nomen + Nomen)
das Schwimmbad => schwimmen + Bad (Verb + Nomen)
das Weißbrot => weiß + Brot (Adjektiv + Nomen)` } });
  ext('s-ss-sz', { more: { einsetzen: `Wir rei{s|ss|ß}en nach Italien.` } });
  ext('getrennt-zusammen', { more: { wahl: `{Irgendwann|Irgend wann} besuchen wir Paris.
{Irgendwo|Irgend wo} liegt mein Schlüssel.` } });
  ext('vorgangsbeschreibung', { more: { form: `Ich koche die Nudeln. :: du-Form => Du kochst die Nudeln.
Ich mische die Farben. :: man-Form => Man mischt die Farben.` } });

  ext('charakteristik', { more: { auftrag: `Charakterisiere die **Hexe** aus „Hänsel und Gretel“. => Einleitung: Märchen, Figur ; Eigenschaften mit Belegen aus dem Märchen ; Wie wirkt sie auf die Kinder? ; Schluss mit eigener Meinung
Schreibe eine Charakteristik über eine **Figur aus einer Serie**, die du gut kennst. => Einleitung: Serie, Figur ; drei Eigenschaften mit Beispielen ; Beziehungen zu anderen Figuren ; Schluss
Charakterisiere den **Gegenspieler** (Bösewicht) aus einem Buch oder Film. => Einleitung ; Eigenschaften mit Belegen ; Was will er oder sie erreichen? ; Schluss mit Meinung
Charakterisiere eine **Figur aus einer Sage** (z. B. der Rattenfänger von Hameln oder der liebe Augustin). => Einleitung: Sage, Figur ; Eigenschaften mit Belegen ; Rolle in der Sage ; Schluss` } });
})();
