/* Beistrichsetzung – 1.–4. Klasse */
UB.simple({
  id: 'beistrich', title: 'Beistriche setzen', area: 'rechtschreibung', klassen: [1, 2, 3, 4], img: 'MiniHoS_Schreiben_Bleistift',
  merk: 'Ein <b>Beistrich</b> steht: 1. bei <b>Aufzählungen</b> (nicht vor und/oder): Äpfel, Birnen und Bananen. 2. vor <b>aber, sondern, doch</b>: klein, aber stark. 3. nach <b>Anreden und Ausrufen</b>: Lena, komm her! Ach, wie schade! 4. zwischen <b>Haupt- und Nebensatz</b>: Ich weiß, dass du recht hast. 5. bei <b>Einschüben</b> und Beifügungen (Appositionen) – vorne und hinten: Tom, mein Freund, kommt. 6. vor <b>Infinitivgruppen</b> mit um, ohne, statt/anstatt, außer, als: Ich lerne, um gute Noten zu bekommen. 7. bei der <b>direkten Rede</b> nach dem Redesatz: „Komm her“, rief Mama.',
  pools: {
    einfach: `Ich kaufe Äpfel, Birnen und Bananen.
Lena, kommst du heute mit?
Ach, das ist aber schade!
Er ist klein, aber sehr stark.
Wir spielen nicht Fußball, sondern Volleyball.
Max, Paul, Lea und Mia gehen ins Kino.
Komm sofort her, Bello!
Ja, ich komme gern mit.
Der Hund bellt, knurrt und springt am Zaun hoch.
Sie ist müde, aber glücklich.
In meiner Schultasche sind Hefte, Bücher, Stifte und eine Jause.
Oh, wie schön ist dieser Ausblick!
Mama, darf ich noch draußen spielen?
Wir fahren nicht ans Meer, sondern in die Berge.
Ich mag Hunde, Katzen und Pferde.
Hallo, wie geht es dir?
Wir brauchen Mehl, Zucker, Eier und Milch.
Papa, hilfst du mir bitte?
Juhu, wir haben gewonnen!
Das Kleid ist schön, aber teuer.
Er trinkt keinen Kaffee, sondern Tee.
Lena, Tom und Max spielen Fußball.
Nein, das stimmt nicht.
Der Hund schnüffelt, bellt und wedelt mit dem Schwanz.
Pass auf, Paul!
Wir fahren nicht mit dem Zug, sondern mit dem Bus.
Im Garten wachsen Tomaten, Gurken und Salat.
Oh, wie lustig!
Kinder, kommt zum Essen!
Der Test war schwer, aber fair.`,
    satz: `Ich weiß, dass du recht hast.
Wenn es regnet, bleiben wir drinnen.
Wir bleiben drinnen, weil es regnet.
Als ich nach Hause kam, war niemand da.
Obwohl er müde war, spielte er weiter.
Das Buch, das ich lese, ist spannend.
Ich hoffe, dass du bald gesund wirst.
Der Hund, der dort bellt, gehört unserem Nachbarn.
Nachdem wir gegessen hatten, gingen wir spazieren.
Weißt du, wann der Bus kommt?
Lena fragt, ob wir mitkommen.
Ich bin froh, dass die Ferien beginnen.
Die Jacke, die du trägst, ist sehr schön.
Bevor du gehst, mach bitte das Licht aus.
Weil es regnet, nehmen wir den Bus.
Ich weiß nicht, ob er kommt.
Er spielte weiter, obwohl er müde war.
Wir warten, bis du fertig bist.
Die Frau, die dort steht, ist meine Tante.
Wenn du willst, kannst du mitkommen.
Er sagt, dass er keine Zeit hat.
Nachdem wir gegessen hatten, spielten wir Karten.
Der Ball, den ich suche, ist weg.
Ich lese ein Buch, während du schläfst.
Sie lernt viel, damit sie gute Noten bekommt.
Als ich klein war, hatte ich einen Hasen.
Weißt du, wo mein Schlüssel ist?
Das Kind, dem ich geholfen habe, lächelt.`,
    schwer: `Herr Maier, unser Hausmeister, repariert das Fenster.
Ich lerne viel, um gute Noten zu bekommen.
Er ging, ohne sich zu verabschieden.
„Komm sofort her“, rief Mama.
Statt zu lernen, spielte sie Computer.
Graz, die Landeshauptstadt der Steiermark, liegt an der Mur.
„Hast du meine Jacke gesehen?“, fragte Paul.
Sie half mir, anstatt mich auszulachen.
Unser Hund, ein frecher Dackel, bellt jeden Briefträger an.
Tom sagte: „Ich komme morgen, wenn ich Zeit habe.“
Wir hatten nichts zu tun, außer zu warten.
Lena, meine beste Freundin, wohnt neben mir.
„Wir gewinnen“, rief der Trainer, „wenn wir zusammenhalten!“
Er rannte los, um den Bus noch zu erreichen.
Frau Berger, unsere Lehrerin, hat Geburtstag.
Er ging nach Hause, ohne ein Wort zu sagen.
„Ich bin müde“, sagte Lena.
Anstatt zu helfen, schaute er zu.
Wien, die Hauptstadt Österreichs, liegt an der Donau.
Sie spart, um sich ein Fahrrad zu kaufen.
„Wo warst du?“, fragte Mama.
Max, mein kleiner Bruder, geht noch in den Kindergarten.
Er kam, ohne anzuklopfen, ins Zimmer.
„Komm mit“, sagte Paul, „es wird lustig.“
Unser Nachbar, ein netter alter Herr, gießt unsere Blumen.
Statt fernzusehen, las sie ein Buch.
Wir übten lange, um das Spiel zu gewinnen.
„Hilfe!“, rief das Kind.`,
    regel: `Ich kaufe Brot, Butter und Käse.|A
Max, hilf mir bitte!|R
Er ist alt, aber noch fit.|G
Ich weiß, dass du kommst.|N
Das Haus, das am See steht, ist alt.|N
Anna, meine Cousine, besucht uns.|E
Ich spare, um mir ein Rad zu kaufen.|I
Wir haben Hefte, Stifte und Bücher.|A
Ach, wie dumm von mir!|R
Er kam nicht mit dem Bus, sondern zu Fuß.|G
Wenn du willst, helfe ich dir.|N
Unser Lehrer, Herr Gruber, ist krank.|E
Sie ging, ohne zu grüßen.|I
Wir kaufen Äpfel, Birnen und Trauben.|A
Mama, wo ist meine Jacke?|R
Oh, das tut mir leid!|R
Sie ist klein, aber flink.|G
Wir fahren nicht heute, sondern morgen.|G
Ich glaube, dass es regnet.|N
Als es dunkel wurde, gingen wir heim.|N
Herr Huber, unser Nachbar, ist nett.|E
Er lernt, um den Test zu bestehen.|I
Sie ging, ohne sich umzudrehen.|I
Der Hund, der bellt, heißt Rex.|N`
  },
  levels: {
    1: {
      ichkann: ['Du setzt Beistriche bei Aufzählungen.', 'Du setzt Beistriche nach Anreden und Ausrufen und vor „aber“ und „sondern“.'],
      tasks: [
        { type: 'commas', pool: 'einfach', n: 9, title: 'Setze die Beistriche.', instr: 'Trage die fehlenden Beistriche direkt in die Sätze ein. Achtung: vor „und“ steht in Aufzählungen kein Beistrich.' }
      ]
    },
    2: {
      ichkann: ['Du trennst Haupt- und Nebensätze mit einem Beistrich ab.', 'Du setzt Beistriche bei Relativsätzen vorne und hinten.'],
      tasks: [
        { type: 'commas', pool: 'satz', n: 7, title: 'Haupt- und Nebensatz', instr: 'Unterstreiche den Nebensatz und setze die Beistriche.' },
        { type: 'commas', pool: 'einfach', n: 4, title: 'Wiederholung', instr: 'Setze die Beistriche.' }
      ]
    },
    3: {
      ichkann: ['Du setzt Beistriche bei Einschüben, Infinitivgruppen und in der direkten Rede.', 'Du kannst begründen, warum ein Beistrich steht.'],
      tasks: [
        { type: 'commas', pool: 'schwer', n: 7, title: 'Setze die Beistriche.', instr: 'Einschübe, Infinitivgruppen und direkte Rede – trage alle Beistriche ein.' },
        { type: 'choice', pool: 'regel', cover: true, keys: ['A', 'R', 'G', 'N', 'E', 'I'], n: 7, asText: true, col: 'Regel', title: 'Warum steht hier ein Beistrich?', instr: 'Schreibe: Aufzählung, Anrede/Ausruf, Gegensatz, Nebensatz, Einschub oder Infinitivgruppe.', opts: [['A', 'Aufzählung'], ['R', 'Anrede/Ausruf'], ['G', 'Gegensatz'], ['N', 'Nebensatz'], ['E', 'Einschub'], ['I', 'Infinitivgruppe']] }
      ]
    }
  }
});
