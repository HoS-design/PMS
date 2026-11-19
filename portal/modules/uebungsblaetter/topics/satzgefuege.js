/* Hauptsatz und Nebensatz – 2./3. Klasse */
UB.simple({
  id: 'satzgefuege', title: 'Hauptsatz und Nebensatz', area: 'sprache', klassen: [2, 3], img: 'MiniHoS_Erklaeren_Tafel-Idee',
  merk: 'Im <b>Hauptsatz</b> steht das gebeugte Verb an 2. Stelle: <i>Wir bleiben drinnen.</i> Im <b>Nebensatz</b> steht es am Ende: <i>…, weil es regnet.</i> Ein Nebensatz kann nicht allein stehen. Er beginnt oft mit einer Konjunktion (weil, dass, wenn, obwohl, als, damit) oder einem Relativpronomen (der, die, das). <b>Satzreihe</b>: Hauptsatz + Hauptsatz (verbunden mit und, oder, aber, denn, sondern). <b>Satzgefüge</b>: Hauptsatz + Nebensatz. Haupt- und Nebensatz trennt man immer mit einem Beistrich.',
  pools: {
    erkennen: `**Wir bleiben zu Hause**, weil es regnet.|H
Wir bleiben zu Hause, **weil es regnet**.|N
**Als ich nach Hause kam**, war niemand da.|N
Als ich nach Hause kam, **war niemand da**.|H
Ich weiß, **dass du recht hast**.|N
**Ich weiß**, dass du recht hast.|H
**Wenn die Sonne scheint**, gehen wir baden.|N
Wenn die Sonne scheint, **gehen wir baden**.|H
**Lena lernt fleißig**, damit sie den Test schafft.|H
Lena lernt fleißig, **damit sie den Test schafft**.|N
Das ist der Hund, **der immer bellt**.|N
**Obwohl er müde war**, spielte er weiter.|N
Obwohl er müde war, **spielte er weiter**.|H
**Ich komme mit**, wenn ich Zeit habe.|H`,
    verbinden: `Es regnet. Wir bleiben drinnen. :: weil => Wir bleiben drinnen, weil es regnet.
Ich habe Hunger. Ich esse einen Apfel. :: weil => Ich esse einen Apfel, weil ich Hunger habe.
Das Wetter ist schön. Wir fahren ins Freibad. :: wenn => Wenn das Wetter schön ist, fahren wir ins Freibad.
Max ist krank. Er geht in die Schule. :: obwohl => Obwohl Max krank ist, geht er in die Schule.
Ich hoffe es. Du kommst morgen. :: dass => Ich hoffe, dass du morgen kommst.
Wir beeilen uns. Wir verpassen den Bus nicht. :: damit => Wir beeilen uns, damit wir den Bus nicht verpassen.
Ich kam nach Hause. Das Essen war schon fertig. :: als => Als ich nach Hause kam, war das Essen schon fertig.
Lena übt jeden Tag. Sie wird immer besser. :: und => Lena übt jeden Tag und sie wird immer besser.
Ich wollte kommen. Ich war krank. :: aber => Ich wollte kommen, aber ich war krank.
Wir bleiben drinnen. Es regnet. :: denn => Wir bleiben drinnen, denn es regnet.
Er trinkt keinen Kaffee. Er trinkt Tee. :: sondern => Er trinkt keinen Kaffee, sondern Tee.
Das Fest ist vorbei. Wir räumen auf. :: nachdem => Nachdem das Fest vorbei ist, räumen wir auf.`,
    art: `Ich lese ein Buch und mein Bruder spielt.|R
Wir bleiben drinnen, weil es regnet.|G
Er ist müde, aber er spielt weiter.|R
Ich glaube, dass morgen die Sonne scheint.|G
Kommst du mit oder bleibst du hier?|R
Wenn du willst, helfe ich dir.|G
Ich gehe schlafen, denn ich bin müde.|R
Das Buch, das ich lese, ist spannend.|G
Der Bus kam zu spät, deshalb verpassten wir den Anfang.|R
Obwohl es kalt war, gingen wir spazieren.|G
Wir gehen nicht ins Kino, sondern wir spielen Minigolf.|R
Als der Wecker klingelte, sprang ich aus dem Bett.|G`
  },
  levels: {
    1: {
      ichkann: ['Du kannst Hauptsatz und Nebensatz unterscheiden.', 'Du weißt: Im Nebensatz steht das Verb am Ende.'],
      tasks: [
        { type: 'choice', pool: 'erkennen', cover: true, keys: ['H', 'N'], n: 8, title: 'Hauptsatz oder Nebensatz?', instr: 'Ist der unterstrichene Teil ein Hauptsatz oder ein Nebensatz? Kreuze an.', opts: [['H', 'Hauptsatz'], ['N', 'Nebensatz']] },
        { type: 'pair', pool: 'verbinden', n: 4, filter: x => /:: (weil|dass)/.test(x.raw), title: 'Verbinde die Sätze.', instr: 'Verwende das angegebene Wort. Achte auf den Beistrich und das Verb am Ende.' }
      ]
    },
    2: {
      ichkann: ['Du kannst Sätze mit Konjunktionen verbinden.', 'Du setzt den Beistrich zwischen Haupt- und Nebensatz.'],
      tasks: [
        { type: 'choice', pool: 'erkennen', cover: true, keys: ['H', 'N'], n: 6, title: 'Hauptsatz oder Nebensatz?', instr: 'Kreuze an.', opts: [['H', 'Hauptsatz'], ['N', 'Nebensatz']] },
        { type: 'pair', pool: 'verbinden', n: 5, filter: x => !/:: (und|aber|denn|sondern)/.test(x.raw), title: 'Verbinde die Sätze.', instr: 'Verwende das angegebene Wort. Achte auf den Beistrich und das Verb am Ende.' }
      ]
    },
    3: {
      ichkann: ['Du kannst Satzreihe und Satzgefüge unterscheiden.', 'Du kannst Sätze mit neben- und unterordnenden Konjunktionen verbinden.'],
      tasks: [
        { type: 'choice', pool: 'art', cover: true, keys: ['R', 'G'], n: 7, title: 'Satzreihe oder Satzgefüge?', instr: 'Kreuze an.', opts: [['R', 'Satzreihe'], ['G', 'Satzgefüge']] },
        { type: 'pair', pool: 'verbinden', n: 5, title: 'Verbinde die Sätze.', instr: 'Verwende das angegebene Wort. Denk an den Beistrich und an die Stellung des Verbs.' }
      ]
    }
  }
});
