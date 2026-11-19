/* Gliedsätze (Adverbialsätze) – 4. Klasse */
UB.simple({
  id: 'gliedsaetze', title: 'Gliedsätze', area: 'sprache', klassen: [4], img: 'MiniHoS_Erklaeren_Tafel-Idee',
  merk: 'Ein <b>Gliedsatz</b> ist ein Nebensatz, der ein Satzglied ersetzt. <b>Adverbialsätze</b> sagen, unter welchen Umständen etwas geschieht: <b>Kausalsatz</b> (Grund: weil, da), <b>Temporalsatz</b> (Zeit: als, wenn, nachdem, bevor, während, seit), <b>Konditionalsatz</b> (Bedingung: wenn, falls), <b>Konzessivsatz</b> (Gegengrund: obwohl), <b>Finalsatz</b> (Zweck: damit, um … zu), <b>Konsekutivsatz</b> (Folge: sodass, so … dass). Auch Subjekt und Objekt können als Gliedsatz stehen: <i>Wer zu spät kommt</i>, muss warten. Ich hoffe, <i>dass du kommst</i>.',
  pools: {
    konj: `Wir bleiben zu Hause, {weil|obwohl|damit} es regnet.
Wir gehen spazieren, {obwohl|weil|damit} es regnet.
Ich spare Geld, {damit|obwohl|nachdem} ich mir ein Rad kaufen kann.
{Nachdem|Obwohl|Damit} wir gegessen hatten, spielten wir Karten.
{Falls|Obwohl|Sodass} es schneit, fällt das Training aus.
Er rannte so schnell, {dass|damit|weil} er den Bus noch erwischte.
{Bevor|Weil|Sodass} du gehst, räum bitte auf!
{Während|Damit|Obwohl} Mama kocht, decke ich den Tisch.
Sie lernte viel, {sodass|obwohl|bevor} sie den Test bestand.
{Seit|Damit|Obwohl} wir umgezogen sind, fahre ich mit dem Bus.
Ich schreibe es auf, {damit|weil|obwohl} ich es nicht vergesse.
{Als|Wenn|Falls} ich klein war, hatte ich Angst vor Hunden.`,
    art: `Wir bleiben drinnen, **weil es stürmt**.|kausal
**Da er krank war**, fehlte er.|kausal
**Als die Glocke läutete**, liefen alle hinaus.|temporal
**Nachdem wir gegessen hatten**, gingen wir spazieren.|temporal
Ich warte, **bis du kommst**.|temporal
**Wenn du Hilfe brauchst**, ruf mich an.|konditional
**Falls es regnet**, nehmen wir den Bus.|konditional
**Obwohl er müde war**, lernte er weiter.|konzessiv
Wir gingen baden, **obwohl das Wasser kalt war**.|konzessiv
Ich lerne, **damit ich die Prüfung schaffe**.|final
Sie stand früh auf, **um den Zug zu erreichen**.|final
Es regnete so stark, **dass die Straße überflutet war**.|konsekutiv
Er war müde, **sodass er sofort einschlief**.|konsekutiv`,
    umformen: `**Wegen des Regens** bleiben wir zu Hause. :: Kausalsatz => Weil es regnet, bleiben wir zu Hause.
**Trotz der Kälte** gingen wir baden. :: Konzessivsatz => Obwohl es kalt war, gingen wir baden.
**Nach dem Essen** putze ich die Zähne. :: Temporalsatz => Nachdem ich gegessen habe, putze ich die Zähne.
**Bei schönem Wetter** grillen wir. :: Konditionalsatz => Wenn das Wetter schön ist, grillen wir.
**Zur Verbesserung meiner Note** lerne ich jeden Tag. :: Finalsatz => Damit sich meine Note verbessert, lerne ich jeden Tag.
**Vor dem Schlafengehen** lese ich. :: Temporalsatz => Bevor ich schlafen gehe, lese ich.
**Aus Angst** lief der Hund weg. :: Kausalsatz => Weil er Angst hatte, lief der Hund weg.
**Trotz seiner Verletzung** spielte er weiter. :: Konzessivsatz => Obwohl er verletzt war, spielte er weiter.
**Während der Ferien** besuche ich meine Tante. :: Temporalsatz => Während ich Ferien habe, besuche ich meine Tante.
**Ohne Fleiß** gibt es keinen Erfolg. :: Konditionalsatz => Wenn man nicht fleißig ist, hat man keinen Erfolg.`
  },
  levels: {
    1: {
      ichkann: ['Du kannst die passende Konjunktion für einen Nebensatz wählen.', 'Du erkennst, ob ein Nebensatz einen Grund, eine Zeit oder eine Bedingung angibt.'],
      tasks: [
        { type: 'gap', pool: 'konj', n: 8, title: 'Welche Konjunktion passt?', instr: 'Kreise die passende Konjunktion ein.' },
        { type: 'choice', pool: 'art', keys: ['kausal', 'temporal', 'konditional'], cover: true, n: 6, title: 'Was gibt der Nebensatz an?', instr: 'Kreuze an.', opts: [['kausal', 'Grund'], ['temporal', 'Zeit'], ['konditional', 'Bedingung']] }
      ]
    },
    2: {
      ichkann: ['Du kannst sechs Arten von Adverbialsätzen nach ihrer Bedeutung bestimmen.', 'Du kannst Satzglieder in Gliedsätze umformen.'],
      tasks: [
        { type: 'choice', pool: 'art', cover: true, keys: ['kausal', 'temporal', 'konditional', 'konzessiv', 'final', 'konsekutiv'], n: 8, asText: true, col: 'Bedeutung', title: 'Was gibt der Nebensatz an?', instr: 'Schreibe: Grund, Zeit, Bedingung, Gegengrund, Zweck oder Folge.', opts: [['kausal', 'Grund'], ['temporal', 'Zeit'], ['konditional', 'Bedingung'], ['konzessiv', 'Gegengrund'], ['final', 'Zweck'], ['konsekutiv', 'Folge']] },
        { type: 'pair', pool: 'umformen', n: 4, title: 'Vom Satzglied zum Gliedsatz', instr: 'Forme den unterstrichenen Teil in einen Nebensatz um.' }
      ]
    },
    3: {
      ichkann: ['Du kennst die Fachbegriffe Kausal-, Temporal-, Konditional-, Konzessiv-, Final- und Konsekutivsatz.', 'Du kannst Adverbialsätze gezielt bilden.'],
      tasks: [
        { type: 'choice', pool: 'art', cover: true, keys: ['kausal', 'temporal', 'konditional', 'konzessiv', 'final', 'konsekutiv'], n: 8, asText: true, col: 'Gliedsatz', title: 'Bestimme die Adverbialsätze.', instr: 'Verwende die Fachbegriffe.', opts: [['kausal', 'Kausalsatz'], ['temporal', 'Temporalsatz'], ['konditional', 'Konditionalsatz'], ['konzessiv', 'Konzessivsatz'], ['final', 'Finalsatz'], ['konsekutiv', 'Konsekutivsatz']] },
        { type: 'pair', pool: 'umformen', n: 5, title: 'Vom Satzglied zum Gliedsatz', instr: 'Bilde den angegebenen Adverbialsatz.' }
      ]
    }
  }
});
