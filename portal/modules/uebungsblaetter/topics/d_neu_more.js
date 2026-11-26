/* Mehr Varianten für die neuen Deutsch-Themen (Stilmittel, Redewendungen, Charakteristik, Getrennt/Zusammen) */
(function () {
  const ext = UB.extendTopic;

  ext('stilmittel', { more: {
    erkennen: `Sie ist frei wie ein Vogel.|V
Er ist stolz wie ein Pfau.|V
Der Fisch ist glatt wie ein Aal.|V
Die Kleine ist brav wie ein Lamm.|V
Er ist so langsam wie eine Schnecke.|V
Das Laub raschelt, als ob jemand flüstert.|V
Der Nebel kriecht über die Felder.|P
Der Schnee deckt die Stadt zu.|P
Der Bach erzählt leise Geschichten.|P
Die Ampel zwinkert uns zu.|P
Das Feuer frisst sich durch den Wald.|P
Die Stille umarmt das Dorf.|P
Ich habe tausend Fragen.|U
Meine Füße sind Eisklötze.|M
Das ist der beste Tag aller Zeiten!|U
Es hat eine Million Grad.|U
Ich bin vor Lachen fast gestorben.|U
Die Schlange an der Kassa war kilometerlang.|U
Vor Freude sprang er bis zum Mond.|U`,
    vergleich: `Er ist frei wie ein [Vogel].
Sie ist stolz wie ein [Pfau].
Die Seife ist glatt wie ein [Aal].
Das Kind ist brav wie ein [Lamm].
Er ist langsam wie eine [Schnecke].
Er ist schnell wie der [Blitz].
Die Katze schleicht leise wie ein [Schatten].
Das Fleisch ist zäh wie [Leder].
Das Messer ist scharf wie eine [Rasierklinge].
Der Honig ist süß wie [Zucker].
Ihr Haar ist schwarz wie die [Nacht].
Das Hemd ist weiß wie [Schnee].
Der Ball ist rund wie eine [Kugel].
Die Wiese ist grün wie [Gras].
Er ist treu wie ein [Hund].
Sie ist schlank wie eine [Tanne].
Er ist groß wie ein [Riese].
Der Mann ist arm wie eine [Kirchenmaus].
Sie zittert wie [Espenlaub].
Sie ist gesund wie ein [Fisch] im Wasser.
Er frisst wie ein [Scheunendrescher].
Die Zimmer sind hell wie der [Tag].`,
    metapher: `ein Brückentag => ein freier Tag zwischen Feiertag und Wochenende
ein Ohrwurm => ein Lied, das man nicht mehr aus dem Kopf bekommt
ein Sturm im Wasserglas => viel Aufregung um eine Kleinigkeit
ein Fels in der Brandung sein => sehr ruhig und verlässlich sein
eine Schnapsidee => eine verrückte, unvernünftige Idee
ein Hasenfuß sein => ein Feigling sein
die Spitze des Eisbergs => nur ein kleiner Teil eines großen Problems
ein Rabenvater => ein Vater, der sich schlecht um seine Kinder kümmert
der Zahn der Zeit => Dinge werden mit der Zeit alt und kaputt
ein Lichtblick => etwas Erfreuliches in einer schweren Zeit`,
    umformen: `Der Mond scheint. :: Personifikation => z. B. Der Mond schaut neugierig auf die Stadt.
Der Kuchen ist sehr süß. :: Vergleich => z. B. Der Kuchen ist süß wie Honig.
Das Zimmer ist unordentlich. :: Übertreibung => z. B. In meinem Zimmer sieht es aus wie nach einem Erdbeben.
Die Glocke läutet. :: Lautmalerei => z. B. Bim, bam – die Glocke läutet.
Der Mann ist sehr groß. :: Vergleich => z. B. Der Mann ist groß wie ein Riese.
Das Feuer brennt im Kamin. :: Personifikation => z. B. Das Feuer tanzt im Kamin.
Der Test war schwierig. :: Übertreibung => z. B. Der Test war das Schwierigste der Welt.
Alle wollen Ferien. :: rhetorische Frage => z. B. Wer will keine Ferien?
Der Wecker läutet laut. :: Lautmalerei => z. B. Rrrring! Der Wecker reißt mich aus dem Schlaf.
Sie ist sehr ruhig. :: Metapher => z. B. Sie ist ein Fels in der Brandung.`
  } });

  ext('redewendungen', { more: {
    bedeutung: `die Ohren spitzen => genau zuhören
jemandem ein Loch in den Bauch fragen => jemandem sehr viele Fragen stellen
ins kalte Wasser springen => etwas Neues ohne Vorbereitung wagen
sich etwas hinter die Ohren schreiben => sich etwas gut merken
den Kopf in den Sand stecken => ein Problem nicht sehen wollen`,
    wahl: `Spitz die {Ohren|Augen|Nase}, jetzt kommt das Wichtigste!
Mein kleiner Bruder fragt mir ein Loch in den {Bauch|Kopf|Arm}.
Am ersten Tag im neuen Verein bin ich ins kalte {Wasser|Bad|Meer} gesprungen.
Schreib dir das hinter die {Ohren|Augen|Haare}!
Steck nicht den Kopf in den {Sand|Schnee|Schlamm}!
Bei der Nachricht bin ich aus allen {Wolken|Himmeln|Sternen} gefallen.
Er hat zwei linke {Hände|Füße|Ohren} – alles geht ihm kaputt.
Sie hat einen grünen {Daumen|Finger|Zeh} – bei ihr wächst alles.
Jetzt ist der {Groschen|Euro|Taler} gefallen – endlich verstehe ich es!
Bis zur Schule ist es nur ein {Katzensprung|Hundesprung|Mäusesprung}.
Er lebt wie die {Made|Raupe|Ameise} im Speck.
Da hast du den {Vogel|Fisch|Hasen} abgeschossen!
Ich verstehe nur {Bahnhof|Flughafen|Busstation}.
Sie hat die {Nase|Hand|Stirn} vorn – sie ist die Beste.
Wir müssen jetzt in den sauren {Apfel|Birne|Zitrone} beißen.
Das passt wie die {Faust|Hand|Zehe} aufs Auge.
Er hat sich die {Finger|Zehen|Ohren} verbrannt.
Bleib auf dem {Teppich|Boden|Sofa}!
Das geht mir gegen den {Strich|Strom|Wind}.
Ihm ist eine {Laus|Fliege|Mücke} über die Leber gelaufen.
Sie wickelt alle um den kleinen {Finger|Daumen|Zeh}.
Nimm mich nicht auf den {Arm|Kopf|Fuß}!
Mir liegt das Wort auf der {Zunge|Lippe|Nase}.
Es ist höchste {Eisenbahn|Straßenbahn|Seilbahn}!`,
    ergaenzen: `Was Hänschen nicht lernt, lernt Hans [nimmermehr].
Wer nicht hören will, muss [fühlen].
Der Klügere gibt [nach].
Probieren geht über [Studieren].
Gut Ding braucht [Weile].
Wer suchet, der [findet].
Einmal ist [keinmal].
Ein Unglück kommt selten [allein].
Geteiltes Leid ist halbes [Leid].
Wer im Glashaus sitzt, soll nicht mit [Steinen] werfen.
Es ist noch kein Meister vom [Himmel] gefallen.
Auf Regen folgt [Sonnenschein].
Steter Tropfen höhlt den [Stein].
Wer rastet, der [rostet].
Neue Besen kehren [gut].`,
    art: `jemandem einen Bären aufbinden|R
Wer nicht hören will, muss fühlen.|S
die Daumen drücken|R
Der Klügere gibt nach.|S
aus allen Wolken fallen|R
Probieren geht über Studieren.|S
zwei linke Hände haben|R
Gut Ding braucht Weile.|S
einen grünen Daumen haben|R
Wer suchet, der findet.|S
in den sauren Apfel beißen|R
Einmal ist keinmal.|S
nur Bahnhof verstehen|R
Steter Tropfen höhlt den Stein.|S
um den heißen Brei herumreden|R
Wer rastet, der rostet.|S
die Ohren spitzen|R
Auf Regen folgt Sonnenschein.|S
ein Auge zudrücken|R
Geteiltes Leid ist halbes Leid.|S
Lampenfieber haben|R
Es ist noch kein Meister vom Himmel gefallen.|S
den Kopf in den Sand stecken|R
Wer im Glashaus sitzt, soll nicht mit Steinen werfen.|S`,
    sprichwort: `Der Klügere gibt nach. => Wer vernünftig ist, beendet einen Streit.
Probieren geht über Studieren. => Man lernt viel, wenn man etwas einfach ausprobiert.
Wer suchet, der findet. => Wer sich bemüht, hat Erfolg.
Einmal ist keinmal. => Ein einziger Versuch oder Fehler zählt nicht viel.
Geteiltes Leid ist halbes Leid. => Wenn man Sorgen teilt, sind sie leichter.
Steter Tropfen höhlt den Stein. => Mit Ausdauer erreicht man viel.
Wer rastet, der rostet. => Wer sich nicht bewegt oder übt, wird schwächer.`,
    situation: `Felix kann nichts reparieren, ohne dass etwas kaputtgeht. => Er hat zwei linke Hände.
Bei Oma wachsen alle Pflanzen prächtig. => Sie hat einen grünen Daumen.
Endlich versteht Lara die Matheaufgabe. => Bei ihr ist der Groschen gefallen.
Leon versteht beim Vortrag überhaupt nichts. => Er versteht nur Bahnhof.
Die Kinder müssen eine unangenehme Aufgabe erledigen. => Sie müssen in den sauren Apfel beißen.
Tim ignoriert seine schlechten Noten einfach. => Er steckt den Kopf in den Sand.
Die Nachricht überrascht Sophie völlig. => Sie fällt aus allen Wolken.
Der kleine Bruder stellt hundert Fragen hintereinander. => Er fragt mir ein Loch in den Bauch.
Der Opa ist heute schlecht gelaunt. => Ihm ist eine Laus über die Leber gelaufen.
Lea kommt das Wort einfach nicht in den Sinn. => Es liegt ihr auf der Zunge.
Ella bekommt von allen, was sie will. => Sie wickelt alle um den kleinen Finger.
Ben hat mit seinem Kostüm alle übertroffen. => Er hat den Vogel abgeschossen.
Es ist schon sehr spät, wir müssen los! => Es ist höchste Eisenbahn.`
  } });

  ext('charakteristik', { more: {
    eigenschaft: `Pferdeschwanz|A
Zahnspange|A
Grübchen|A
breite Schultern|A
spitze Nase|A
Tattoo am Arm|A
klein und zierlich|A
Lachfalten|A
gepflegter Bart|A
blaue Augen|A
lange Wimpern|A
muskulös|A
Glatze|A
Ohrringe|A
Stirnband|A
rote Haare|A
fröhlich|C
ängstlich|C
höflich|C
faul|C
fleißig|C
stur|C
launisch|C
egoistisch|C
treu|C
geizig|C
bescheiden|C
abenteuerlustig|C
nachdenklich|C
streng|C
verträumt|C
tollpatschig|C`,
    adjektive: `Sie hilft sofort, wenn jemand Hilfe braucht. Sie ist [hilfsbereit].
Er gibt nie etwas von seinen Sachen ab. Er ist [geizig].
Sie stolpert ständig über ihre eigenen Füße. Sie ist [tollpatschig].
Er spricht nie über seine Erfolge. Er ist [bescheiden].
Sie sucht immer neue Abenteuer. Sie ist [abenteuerlustig].
Er bleibt bei seiner Meinung, auch wenn er unrecht hat. Er ist [stur].
Sie hält immer zu ihren Freunden. Sie ist [treu].
Er denkt lange über alles nach. Er ist [nachdenklich].
Sie träumt oft mit offenen Augen. Sie ist [verträumt].
Er sagt immer „Bitte“ und „Danke“. Er ist [höflich].
Sie hat vor vielen Dingen Angst. Sie ist [ängstlich].
Er bringt alle zum Lachen. Er ist [witzig].
Sie lässt sich nichts gefallen und widerspricht oft. Sie ist [frech].
Er tut nur das Nötigste. Er ist [faul].
Sie verzeiht schnell und ist nie lange böse. Sie ist [versöhnlich].
Er achtet sehr auf Regeln und duldet keine Fehler. Er ist [streng].
Sie spricht mit allen und findet schnell Freunde. Sie ist [kontaktfreudig].
Er plant alles genau voraus. Er ist [vorausschauend].
Sie ist mit wenig zufrieden. Sie ist [genügsam].
Er hält, was er verspricht. Er ist [zuverlässig].`,
    teile: `Im Roman „Die Insel der Möwen“ steht die elfjährige Sara im Mittelpunkt.|E
Mia, die Hauptfigur des Films, ist auf den ersten Blick ein ganz normales Mädchen.|E
In der Kurzgeschichte „Der Wettlauf“ von Max Gruber geht es um den Schüler Leon.|E
Sara hat lange, dunkle Haare und trägt meistens eine Brille.|H
Leon ist sehr ehrgeizig: Jeden Morgen trainiert er vor der Schule.|H
Mia ist hilfsbereit, denn sie kümmert sich um den verletzten Hund.|H
Mit ihrer Mutter streitet Sara oft, aber sie versöhnen sich immer schnell.|H
Leon verändert sich im Lauf der Geschichte: Am Ende ist er nicht mehr so überheblich.|H
Ich finde Mia sympathisch, weil sie nie aufgibt.|S
Für mich ist Leon ein Vorbild, obwohl er Fehler macht.|S
Sara würde ich gerne kennenlernen.|S
Zusammenfassend ist Mia eine mutige und warmherzige Figur.|S
Ihr bester Freund ist der stille Jonas, dem sie alles erzählt.|H
Die Geschichte spielt in einem kleinen Dorf in der Steiermark, wo Leon mit seinem Vater lebt.|E
Seine Ungeduld bringt ihn oft in Schwierigkeiten.|H
Am Ende der Geschichte hat mich Sara wirklich beeindruckt.|S`,
    verhalten: `Noah lässt seine kleine Schwester immer mitspielen. => geduldig (oder: rücksichtsvoll)
Amelie entschuldigt sich sofort, wenn sie einen Fehler gemacht hat. => einsichtig (oder: ehrlich)
Elias verrät das Geheimnis seines Freundes nicht. => verschwiegen (oder: treu)
Laura plant ihre Woche genau und vergisst nie einen Termin. => ordentlich (oder: zuverlässig)
David gibt mit seinen neuen Schuhen an. => angeberisch (oder: eingebildet)
Sophie bleibt ruhig, als alle anderen in Panik geraten. => gelassen (oder: besonnen)
Luca lacht über andere, wenn ihnen etwas misslingt. => schadenfroh
Hannah probiert jede Woche etwas Neues aus. => neugierig (oder: abenteuerlustig)
Jakob räumt nie sein Zimmer auf. => unordentlich (oder: faul)
Marie gibt ihr ganzes Taschengeld für ein Geschenk für ihre Mutter aus. => großzügig (oder: liebevoll)
Simon schiebt die Schuld immer auf andere. => unfair (oder: feige)
Ida setzt sich für einen Mitschüler ein, der ausgelacht wird. => mutig (oder: gerecht)
Moritz redet nur über sich selbst. => egoistisch (oder: selbstverliebt)
Zoe glaubt alles, was im Internet steht. => leichtgläubig
Valentin teilt sich seine Zeit gut ein und lernt jeden Tag ein bisschen. => diszipliniert (oder: fleißig)`,
    beleg: `Lena ist sportlich. || Lena ist sportlich: Sie läuft jeden Morgen vor der Schule fünf Kilometer. || b || Beleg mit Beispiel
Max ist lieb. || Max ist fürsorglich, denn er pflegt den kranken Vogel gesund. || b || genaues Adjektiv und Beleg
Er hat dann geholfen. || Er hilft seinem Freund, obwohl er selbst wenig Zeit hat. || b || Präsens und Beleg
Die Figur ist halt komisch. || Die Figur ist geheimnisvoll, denn sie verrät niemandem ihren Namen. || b || sachlich mit Beleg
Sie ist mutig, sagt man. || Sie ist mutig: Sie klettert als Erste über die schmale Brücke. || b || Beleg statt Behauptung
Am Schluss ist er voll gut. || Am Schluss zeigt sich, dass er seine Fehler einsieht und sich entschuldigt. || b || Entwicklung der Figur
Ich mag sie, weil sie halt so ist. || Ich mag sie, weil sie immer ehrlich zu ihren Freunden ist. || b || begründete Meinung
Er ist gemein, glaube ich. || Er ist gemein, denn er versteckt die Tasche seines Mitschülers. || b || Beleg mit Beispiel
Tom ist der Held. || Tom ist die Hauptfigur der Geschichte „Das Floß“ von Eva Berger. || b || genaue Einleitung
Sie redet viel. || Sie ist sehr gesprächig und erzählt in jeder Pause von ihren Erlebnissen. || b || Eigenschaft mit Beispiel`
  } });

  ext('getrennt-zusammen', { more: {
    wahl: `Ich möchte {Gitarre spielen|gitarrespielen} lernen.
Wir wollen am Wochenende {Rad fahren|radfahren}.
Mein Opa kann nicht mehr {Auto fahren|autofahren}.
Am Samstag gehen wir {Fußball spielen|fußballspielen}.
Nach der Schule wollen wir {spazieren gehen|spazierengehen}.
Meine Schwester will {schwimmen lernen|schwimmenlernen}.
Wir sehen uns {morgen Abend|morgenabend}.
Er kommt {morgen früh|morgenfrüh} zurück.
{Irgendwo|Irgend wo} muss meine Jacke sein.
{Irgendjemand|Irgend jemand} hat geklopft.
Kannst du {irgendetwas|irgend etwas} sehen?
{Irgendwie|Irgend wie} schaffen wir das.
Wir haben uns {gestern Abend|gesternabend} gesehen.
Ich gehe {heute Abend|heuteabend} ins Kino.
Möchtest du {Klavier spielen|klavierspielen} lernen?
Die Kinder wollen draußen {spielen gehen|spielengehen}.
Er kann sehr gut {Rad fahren|radfahren}.
Darf ich mit dir {Auto fahren|autofahren}?
{Irgendwann|Irgend wann} fahren wir ans Meer.
Wir gehen {heute Abend|heuteabend} schwimmen.
Wir müssen {morgen früh|morgenfrüh} aufstehen.`,
    regel: `Tennis spielen|NV
Klavier üben|NV
Zeitung lesen|NV
Schlittschuh laufen|NV
lesen lernen|VV
schlafen gehen|VV
baden gehen|VV
sitzen bleiben (auf dem Stuhl)|VV
morgen Abend|Z
heute Mittag|Z
irgendetwas|I
irgendwie|I
irgendwohin|I
abzuholen|ZI
einzukaufen|ZI
mitzuspielen|ZI
aufzustehen|ZI
krankmelden|NB
schwarzmalen (sehr negativ sehen)|NB
kaltstellen (jemandem die Macht nehmen)|NB
blaumachen (schwänzen)|NB
schwerfallen (Mühe machen)|NB`,
    fehler: `Wir gehen heute Nachmittag schwimmenlernen. => Wir gehen heute Nachmittag schwimmen lernen.
Irgend jemand hat meine Jause gegessen. => Irgendjemand hat meine Jause gegessen.
Hast du Zeit, mich ab zu holen? => Hast du Zeit, mich abzuholen?
Er will fußballspielen gehen. => Er will Fußball spielen gehen.
Der Ausflug wird bei Regen nicht statt finden. => Der Ausflug wird bei Regen nicht stattfinden.
Wir treffen uns morgenabend. => Wir treffen uns morgen Abend.
Ich habe keine Lust, früh auf zu stehen. => Ich habe keine Lust, früh aufzustehen.
Er hat gestern blau gemacht. => Er hat gestern blaugemacht.`
  } });
})();
