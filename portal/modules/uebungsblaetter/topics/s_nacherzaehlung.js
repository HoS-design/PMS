/* Nacherzählung mit Fabeln (nach Äsop, neu erzählt) – 2. Klasse */
(function () {
  const { esc, sol, lines, table, box } = UB;
  const FABELN = [
    { t: 'Der Fuchs und der Rabe', text: 'Ein Rabe hatte ein Stück Käse gestohlen und setzte sich damit auf einen hohen Ast. Ein hungriger Fuchs kam vorbei und roch den Käse. Weil er nicht auf den Baum klettern konnte, überlegte er sich eine List. „Guten Tag, schöner Rabe!“, rief er. „Wie prächtig deine Federn glänzen! Wenn deine Stimme genauso schön ist, bist du der König aller Vögel.“ Der Rabe fühlte sich geschmeichelt. Er wollte unbedingt zeigen, wie schön er singen konnte, und öffnete den Schnabel. Da fiel der Käse hinunter. Der Fuchs schnappte ihn sofort und lachte: „Merke dir: Wer jedem Schmeichler glaubt, verliert am Ende alles.“',
      steps: ['Der Rabe sitzt mit einem gestohlenen Käse auf einem Ast.', 'Der Fuchs riecht den Käse und denkt sich eine List aus.', 'Er lobt die Federn und die Stimme des Raben.', 'Der Rabe öffnet den Schnabel, um zu singen.', 'Der Käse fällt hinunter und der Fuchs schnappt ihn.'],
      lehre: 'Man soll Schmeichlern nicht trauen.' },
    { t: 'Der Hase und die Schildkröte', text: 'Ein Hase machte sich ständig über die langsame Schildkröte lustig. Eines Tages sagte die Schildkröte: „Lass uns um die Wette laufen!“ Der Hase lachte laut, war aber einverstanden. Beim Startsignal sauste er davon und war bald weit voraus. Weil er sich so sicher war, legte er sich unter einen Baum und schlief ein. Die Schildkröte aber kroch langsam und ohne Pause weiter. Sie kam am schlafenden Hasen vorbei und näherte sich Schritt für Schritt dem Ziel. Als der Hase endlich aufwachte, rannte er so schnell er konnte. Doch es war zu spät: Die Schildkröte hatte das Ziel bereits erreicht.',
      steps: ['Der Hase verspottet die langsame Schildkröte.', 'Die Schildkröte fordert ihn zu einem Wettlauf heraus.', 'Der Hase rennt los und legt sich dann schlafen.', 'Die Schildkröte kriecht ohne Pause weiter.', 'Die Schildkröte erreicht vor dem Hasen das Ziel.'],
      lehre: 'Ausdauer führt eher zum Ziel als Übermut.' },
    { t: 'Der Löwe und die Maus', text: 'Ein Löwe schlief in der Sonne. Eine kleine Maus lief über ihn hinweg und weckte ihn auf. Wütend packte der Löwe die Maus mit seiner Pranke. „Bitte lass mich frei!“, flehte die Maus. „Vielleicht kann ich dir eines Tages helfen.“ Der Löwe lachte über diese Idee, ließ sie aber laufen. Einige Zeit später geriet der Löwe in das Netz eines Jägers. Er brüllte und zerrte, doch er konnte sich nicht befreien. Die Maus hörte das Brüllen und eilte herbei. Mit ihren scharfen Zähnen nagte sie die Seile durch, bis der Löwe frei war. „Siehst du“, sagte die Maus, „auch die Kleinen können den Großen helfen.“',
      steps: ['Die Maus weckt den schlafenden Löwen.', 'Der Löwe fängt die Maus, lässt sie aber frei.', 'Der Löwe gerät in das Netz eines Jägers.', 'Die Maus hört sein Brüllen und eilt herbei.', 'Sie nagt die Seile durch und befreit den Löwen.'],
      lehre: 'Auch Kleine und Schwache können Großen helfen.' },
    { t: 'Die Grille und die Ameise', text: 'Den ganzen Sommer lang zirpte und sang die Grille auf der Wiese. Die Ameise dagegen schleppte jeden Tag Körner in ihren Bau. „Warum arbeitest du bei diesem herrlichen Wetter?“, fragte die Grille. „Ich sammle Vorräte für den Winter“, antwortete die Ameise. Die Grille lachte nur und sang weiter. Doch dann kam der Winter. Schnee bedeckte die Wiese und die Grille fand nichts mehr zu essen. Hungrig und frierend klopfte sie bei der Ameise an und bat um etwas Futter. „Was hast du im Sommer gemacht?“, fragte die Ameise. „Ich habe gesungen“, antwortete die Grille leise.',
      steps: ['Die Grille singt den ganzen Sommer.', 'Die Ameise sammelt Vorräte für den Winter.', 'Die Grille lacht über die fleißige Ameise.', 'Im Winter findet die Grille nichts zu essen.', 'Sie bittet die Ameise um Futter.'],
      lehre: 'Wer rechtzeitig vorsorgt, muss später keine Not leiden.' },
    { t: 'Der Fuchs und der Storch', text: 'Der Fuchs lud den Storch zum Abendessen ein. Er servierte eine köstliche Suppe – allerdings auf einem flachen Teller. Der Fuchs schleckte seinen Teller in Windeseile leer. Der Storch aber konnte mit seinem langen Schnabel kaum etwas aufnehmen und blieb hungrig. Einige Tage später lud der Storch den Fuchs zu sich ein. Diesmal gab es Fleischstückchen in einer hohen Vase mit engem Hals. Der Storch steckte seinen Schnabel hinein und aß genüsslich. Der Fuchs dagegen leckte nur außen an der Vase und musste hungrig nach Hause gehen. Da verstand er, wie sich der Storch bei ihm gefühlt hatte.',
      steps: ['Der Fuchs lädt den Storch zum Essen ein.', 'Er serviert die Suppe auf einem flachen Teller.', 'Der Storch bleibt hungrig.', 'Der Storch lädt den Fuchs ein und serviert das Essen in einer hohen Vase.', 'Der Fuchs bleibt hungrig und versteht seinen Fehler.'],
      lehre: 'Wie man andere behandelt, so wird man selbst behandelt.' },
    { t: 'Der Hirtenjunge und der Wolf', text: 'Ein Hirtenjunge hütete die Schafe in der Nähe eines Dorfes. Weil ihm langweilig war, rief er eines Tages laut: „Hilfe, ein Wolf!“ Die Bauern ließen ihre Arbeit liegen und rannten mit Stöcken herbei. Doch es war kein Wolf da, und der Junge lachte sie aus. Ein paar Tage später spielte er denselben Streich noch einmal. Wieder kamen die Bauern umsonst. Kurz darauf schlich tatsächlich ein Wolf aus dem Wald und fiel über die Herde her. „Hilfe, ein Wolf!“, schrie der Junge verzweifelt. Doch diesmal kam niemand, denn keiner glaubte ihm mehr.',
      steps: ['Dem Hirtenjungen ist langweilig.', 'Er ruft „Wolf!“, obwohl kein Wolf da ist.', 'Er wiederholt den Streich.', 'Ein echter Wolf greift die Herde an.', 'Niemand glaubt dem Jungen mehr und keiner hilft.'],
      lehre: 'Wer lügt, dem glaubt man nicht, auch wenn er die Wahrheit sagt.' },
    { t: 'Die Stadtmaus und die Feldmaus', text: 'Eine Feldmaus lud ihre Freundin aus der Stadt zu sich ein. Sie bot ihr Körner, Wurzeln und ein paar trockene Beeren an. Die Stadtmaus rümpfte die Nase. „Wie kannst du nur so ärmlich leben?“, fragte sie. „Komm mit mir in die Stadt, dort gibt es die feinsten Speisen!“ Also wanderten die beiden in die Stadt. In einer großen Speisekammer fanden sie Käse, Kuchen und Speck. Doch kaum hatten sie zu essen begonnen, ging die Tür auf und die Köchin kam herein. Die Mäuse flüchteten zitternd in ein Loch. Kurz darauf schlich auch noch eine Katze vorbei. Da sagte die Feldmaus: „Lebe wohl! Lieber esse ich meine Körner in Ruhe, als hier jeden Bissen in Angst zu verschlingen.“',
      steps: ['Die Feldmaus bewirtet die Stadtmaus mit einfachem Essen.', 'Die Stadtmaus lädt sie in die Stadt ein.', 'In der Speisekammer gibt es feine Speisen.', 'Die Köchin und eine Katze stören die Mäuse beim Essen.', 'Die Feldmaus kehrt lieber in ihr ruhiges Leben zurück.'],
      lehre: 'Ein einfaches Leben in Ruhe ist mehr wert als Reichtum in Angst.' },
    { t: 'Der Frosch und der Ochse', text: 'Ein junger Frosch sah zum ersten Mal einen Ochsen auf der Wiese. Aufgeregt hüpfte er zu seiner Mutter. „Ich habe ein riesiges Tier gesehen, so groß wie ein Berg!“, rief er. Die alte Froschmutter wollte nicht zugeben, dass es etwas Größeres gab als sie. Sie holte tief Luft und blähte sich auf. „War es so groß?“, fragte sie. „Viel größer!“, antwortete der kleine Frosch. Die Mutter blies sich noch mehr auf. „Und jetzt?“ – „Noch viel, viel größer!“ Die Froschmutter pumpte und pumpte, bis sie schließlich mit einem lauten Knall zerplatzte.',
      steps: ['Ein junger Frosch sieht einen Ochsen.', 'Er erzählt seiner Mutter von dem riesigen Tier.', 'Die Mutter bläht sich auf, um gleich groß zu sein.', 'Der junge Frosch sagt, der Ochse sei noch größer.', 'Die Mutter bläst sich immer weiter auf, bis sie platzt.'],
      lehre: 'Wer mehr sein will, als er ist, schadet sich selbst.' },
    { t: 'Der Esel in der Löwenhaut', text: 'Ein Esel fand im Wald das Fell eines Löwen, das ein Jäger dort vergessen hatte. Er warf es sich über und lief stolz durch die Gegend. Alle Tiere, denen er begegnete, flohen erschrocken vor ihm. Der Esel genoss es, so gefürchtet zu sein. Schließlich kam er zu einem Fuchs. Um ihn noch mehr zu erschrecken, wollte der Esel brüllen wie ein Löwe. Doch aus seinem Maul kam nur ein lautes „I-ah!“. Der Fuchs lachte: „Fast hätte ich mich auch gefürchtet – hätte ich dich nicht schreien gehört!“',
      steps: ['Ein Esel findet ein Löwenfell und zieht es an.', 'Alle Tiere fliehen vor ihm.', 'Der Esel genießt es, gefürchtet zu sein.', 'Beim Fuchs will er brüllen, doch er schreit „I-ah“.', 'Der Fuchs durchschaut ihn und lacht ihn aus.'],
      lehre: 'Wer sich verstellt, verrät sich früher oder später selbst.' }
  ];

  function story(rng) {
    if (!rng.fabel) rng.fabel = rng.pick(FABELN);
    return rng.fabel;
  }
  const storyBox = (f) => '<div class="story"><h4>' + esc(f.t) + ' <span class="hint">(Fabel nach Äsop)</span></h4>' + esc(f.text) + '</div>';

  function lesen(rng) {
    const f = story(rng);
    return { title: 'Lies die Fabel genau.', instr: 'Lies sie zweimal. Unterstreiche beim zweiten Mal die wichtigsten Handlungsschritte.', body: storyBox(f), sol: storyBox(f) };
  }
  function ordnen(rng) {
    const f = story(rng);
    let idx = f.steps.map((s, i) => i);
    for (let t = 0; t < 5; t++) { idx = rng.shuffle(idx); if (idx.some((v, i) => v !== i)) break; }
    const r = (solution) => '<div class="orderbox">' + idx.map(i => '<div class="item ord">' + (solution ? '<span class="numbox">' + sol(i + 1) + '</span>' : '<span class="numbox"></span>') + ' ' + esc(f.steps[i]) + '</div>').join('') + '</div>';
    return { title: 'Die Handlungsschritte', instr: 'Bring die Schritte in die richtige Reihenfolge (1 bis 5).', body: r(false), sol: r(true) };
  }
  function lehre(rng) {
    const f = story(rng);
    return { title: 'Die Lehre', instr: 'Was will uns die Fabel sagen? Schreibe die Lehre in einem Satz auf.', body: lines(1), sol: '<div class="item">' + sol(esc(f.lehre)) + '</div>' };
  }
  function stichwort(rng) {
    const f = story(rng);
    const rowsB = f.steps.map((s, i) => [String(i + 1) + '.', '']);
    const rowsS = f.steps.map((s, i) => [String(i + 1) + '.', sol(esc(s))]);
    return { title: 'Stichwortzettel', instr: 'Notiere zu jedem Handlungsschritt zwei bis vier Stichwörter – keine ganzen Sätze.', body: table(['Schritt', 'Stichwörter'], rowsB, 'plan sm'), sol: table(['Schritt', 'Beispiel'], rowsS) };
  }
  function schreiben(rng, level) {
    const f = story(rng);
    const check = ['Präteritum', 'Reihenfolge einhalten', 'eigene Worte', 'nichts dazuerfinden', 'wichtige wörtliche Rede übernehmen', 'Überschrift'];
    const body = '<div class="checklist"><b>Checkliste:</b> ' + check.map(c => '☐ ' + esc(c)).join('&nbsp;&nbsp; ') + '</div>' +
      (level === 2 ? lines(4) : '<div class="item"><b>Lege das Blatt um und erzähle die Fabel in deinem Heft nach – nur mit Hilfe deines Stichwortzettels.</b></div>');
    return { title: 'Erzähle nach.', instr: level === 2 ? 'Erzähle den Anfang der Fabel (den ersten Schritt) in eigenen Worten nach.' : '', body, sol: '<ul class="solist">' + f.steps.map(s => '<li>' + sol(esc(s)) + '</li>').join('') + '</ul>' };
  }

  UB.simple({
    id: 'nacherzaehlung', title: 'Nacherzählung', area: 'schreiben', klassen: [2], img: 'MiniHoS_Rosa_Lesen-Buch',
    pool: () => FABELN.map(f => storyBox(f) + '<div class="item"><b>Lehre:</b> ' + esc(f.lehre) + '</div><ol class="pool-ol">' + f.steps.map(x => '<li>' + esc(x) + '</li>').join('') + '</ol>').join(''),
    merk: '<b>Nacherzählung</b>: Erzähle eine Geschichte mit eigenen Worten nach. Halte die Reihenfolge ein und erfinde nichts dazu. Erzählzeit ist das Präteritum. Wichtige wörtliche Reden darfst du übernehmen. Tipp: Lies den Text zweimal, mach dir einen Stichwortzettel und erzähle dann ohne Vorlage. <b>Fabel</b>: kurze Geschichte, in der Tiere wie Menschen handeln; am Ende steht eine Lehre.',
    pools: {
      merkmal: `in eigenen Worten erzählen|J
die Figuren richtig benennen|J
Erzählzeit Präteritum|J
neue Figuren dazuerfinden|N
das Ende verändern|N
wichtige wörtliche Reden übernehmen|J
den Text Wort für Wort abschreiben|N
im Präsens erzählen|N
eine passende Überschrift|J
die eigene Meinung zur Geschichte einbauen|N`
    },
    levels: {
      1: {
        ichkann: ['Du kannst die Handlungsschritte einer Geschichte ordnen.', 'Du weißt, was bei einer Nacherzählung wichtig ist.'],
        tasks: [
          { type: 'fn', fn: lesen }, { type: 'fn', fn: ordnen },
          { type: 'choice', pool: 'merkmal', cover: true, keys: ['J', 'N'], n: 5, head: 'Bei einer Nacherzählung …', title: 'Was ist richtig?', instr: 'Kreuze an.', opts: [['J', 'richtig'], ['N', 'falsch']] }
        ]
      },
      2: {
        ichkann: ['Du kannst einen Stichwortzettel anlegen.', 'Du kannst den Anfang einer Geschichte in eigenen Worten nacherzählen.'],
        tasks: [{ type: 'fn', fn: lesen }, { type: 'fn', fn: stichwort }, { type: 'fn', fn: schreiben }]
      },
      3: {
        ichkann: ['Du kannst eine Fabel vollständig nacherzählen (Schularbeitsprobe).', 'Du kannst die Lehre einer Fabel formulieren.'],
        tasks: [{ type: 'fn', fn: lesen }, { type: 'fn', fn: stichwort }, { type: 'fn', fn: lehre }, { type: 'fn', fn: schreiben }]
      }
    }
  });
})();
