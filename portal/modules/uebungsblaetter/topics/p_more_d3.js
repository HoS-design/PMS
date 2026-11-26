/* Deutsch – größere Aufgabenpools (Teil 3) */
(function () {
  const ext = UB.extendTopic;

  ext('nomen', { more: {
    artikel: `{die|der|das} Sonne
{der|die|das} Hund
{das|der|die} Haus
{die|der|das} Katze
{der|die|das} Schrank
{das|der|die} Fahrrad`,
    mehrzahl4: `das Zentrum => die Zentren
der Atlas => die Atlanten / Atlasse
das Gymnasium => die Gymnasien
das Risiko => die Risiken
das Prisma => die Prismen
das Stadion => die Stadien`,
    fuge: `die Hochzeitstorte => Hochzeit + s + Torte
der Kinderwagen => Kind + er + Wagen
die Sonnenblume => Sonne + n + Blume
das Liebeslied => Liebe + s + Lied
der Arbeitsplatz => Arbeit + s + Platz`,
    text4: `Beim [Essen:essen] spricht man nicht mit vollem Mund. Das [Beste:gut] kommt zum Schluss.
Das [Radfahren:Rad fahren] macht mir Spaß. Ich wünsche dir alles [Liebe:lieb].
Zum [Malen:malen] brauche ich Pinsel. Heute gibt es nichts [Neues:neu].
Vom vielen [Lernen:lernen] bin ich müde. Ich habe etwas [Wichtiges:wichtig] vergessen.
Das [Singen:singen] im Chor gefällt mir. Ich wünsche dir alles [Gute:gut].`
  } });

  ext('adjektive', { more: {
    unreg: `alt => älter – am ältesten
jung => jünger – am jüngsten
warm => wärmer – am wärmsten
kurz => kürzer – am kürzesten
lang => länger – am längsten
klug => klüger – am klügsten
stark => stärker – am stärksten
sauer => saurer – am sauersten
arm => ärmer – am ärmsten`,
    dekl: `Die [kleine:klein] Katze schläft auf dem [weichen:weich] Sofa.
Ich trinke gern [kalten:kalt] Saft.
Wir fahren mit dem [neuen:neu] Auto in den [großen:groß] Park.
Er hat einen [netten:nett] Bruder und eine [kluge:klug] Schwester.
Das [blaue:blau] Kleid gefällt mir.
Mit [warmem:warm] Wasser wäscht man sich die Hände.`,
    fehler: `Das ist die schönste Blume, wo ich kenne. => Das ist die schönste Blume, die ich kenne.
Sie ist älter wie ihr Bruder. => Sie ist älter als ihr Bruder.
Der Turm ist hocher als das Haus. => Der Turm ist höher als das Haus.
Das ist am bestesten. => Das ist am besten.
Er läuft gleich schnell als ich. => Er läuft gleich schnell wie ich.
Das ist das einzigste Problem. => Das ist das einzige Problem.`
  } });

  ext('verben', { more: {
    stark: `sprechen :: du => du sprichst
vergessen :: er => er vergisst
waschen :: du => du wäschst
stehlen :: er => er stiehlt`
  } });

  ext('pronomen', { more: {
    text4: `Mein Opa sucht [seinen:sein] Hut. Ich helfe [ihm] dabei.
Wir haben [uns] sehr gefreut, als [unsere:unser] Tante kam.
Das ist der Lehrer, [der] uns Mathe unterrichtet. [Seine] Stunden sind spannend.
Lisa, kannst du [dich] noch erinnern? Ich habe [dir] ein Foto geschickt.`,
    fehler: `Die Frau, wo ich kenne, ist nett. => Die Frau, die ich kenne, ist nett.
Ich wasche mich die Haare. => Ich wasche mir die Haare.
Gib mich das Heft! => Gib mir das Heft!
Das ist mein Freund, wo in Graz wohnt. => Das ist mein Freund, der in Graz wohnt.
Ich treffe mir morgen mit Tom. => Ich treffe mich morgen mit Tom.`
  } });

  ext('brief', { more: {
    art: `Servus Jakob,|P
Sehr geehrter Herr Professor,|F
Ich vermisse dich!|P
Für Rückfragen stehe ich Ihnen gerne zur Verfügung.|F
Grüß deine Eltern von mir!|P
Ich erlaube mir, Ihnen folgende Frage zu stellen.|F`,
    formell: `Kann ich mal anrufen? => Darf ich Sie telefonisch kontaktieren?
Ich hab Ihre Mail gekriegt. => Vielen Dank für Ihre E-Mail.
Sorry, dass ich so spät antworte. => Ich bitte um Entschuldigung für meine späte Antwort.`
  } });
})();
