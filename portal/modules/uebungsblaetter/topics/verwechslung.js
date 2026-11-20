/* Verwechslungswörter – 2./3. Klasse */
UB.simple({
  id: 'verwechslung', title: 'Verwechslungswörter', area: 'rechtschreibung', klassen: [2, 3], img: 'MiniHoS_Geste_Stopp',
  merk: '<b>seit</b> (Zeit: seit Montag) – <b>seid</b> (Verb sein: ihr seid). <b>wieder</b> (noch einmal) – <b>wider</b> (gegen: widersprechen). <b>tot</b> (Adjektiv) – <b>der Tod</b> (Nomen). <b>statt</b> (anstatt) – <b>die Stadt</b>. <b>viel</b> (Menge) – <b>fiel</b> (fallen). <b>war</b> (sein) – <b>wahr</b> (richtig). <b>mal</b> (einmal) – <b>das Mal</b> (zum ersten Mal). <b>malen</b> (Bild) – <b>mahlen</b> (Mühle). <b>die Seite</b> (Buch) – <b>die Saite</b> (Gitarre). <b>das Lied</b> (singen) – <b>das Lid</b> (Auge). <b>ist</b> (sein) – <b>isst</b> (essen).',
  pools: {
    wahl: `Wir warten {seit|seid} einer Stunde.
Wo {seid|seit} ihr gewesen?
Morgen kommt er {wieder|wider}.
Er hat mir {widersprochen|wiedersprochen}.
Die Fliege ist {tot|tod}.
Der {Tod|Tot} des Königs machte alle traurig.
In der {Stadt|Statt} gibt es ein Kino.
{Statt|Stadt} Saft trinke ich Wasser.
Das Glas {fiel|viel} zu Boden.
Ich habe heute {viel|fiel} gelernt.
Das ist nicht {wahr|war}.
Gestern {war|wahr} ich krank.
Komm {mal|Mal} her!
Ich war zum ersten {Mal|mal} in Wien.
Die {Saite|Seite} der Gitarre ist gerissen.
Schlagt das Buch auf {Seite|Saite} 12 auf.
Wir singen ein {Lied|Lid}.
Mein Augen{lid|lied} zuckt.
Er gab mir einen guten {Rat|Rad}.
Mein {Rad|Rat} hat einen Platten.
Die Mühle {mahlt|malt} das Korn.
Lena {malt|mahlt} ein Bild.
Er {isst|ist} eine Banane.
Sie {ist|isst} heute müde.
Das {Wiedersehen|Widersehen} war schön.
Ihr {seid|seit} spät dran.
{Seit|Seid} wann wohnst du hier?
{Seid|Seit} bitte pünktlich!
Er kommt {wieder|wider} zu spät.
Der Wind weht {wider|wieder} die Fahrtrichtung.
Der Baum ist {tot|tod}.
Er hatte {Todesangst|Totesangst}.
Wir fahren in die {Stadt|Statt}.
{Statt|Stadt} zu lernen, spielt er.
Im Herbst {fiel|viel} das Laub.
Es gibt {viel|fiel} zu tun.
Ist das {wahr|war}?
Gestern {war|wahr} ein schöner Tag.
Ruf mich {mal|Mal} an!
Beim ersten {Mal|mal} war ich nervös.
Lies bitte die nächste {Seite|Saite}.
Die Geige hat vier {Saiten|Seiten}.
Er {isst|ist} gern Nudeln.
Mein Bruder {ist|isst} zehn Jahre alt.
Ich {weiß|weis} die Antwort.
Das Hemd ist {weiß|weis}.`,
    saetze: `seit – seid => Seit Montag bin ich krank. / Ihr seid sehr nett.
wieder – wider => Ich komme wieder. / Das ist wider die Regeln.
tot – Tod => Die Pflanze ist tot. / Der Tod gehört zum Leben.
Stadt – statt => Graz ist eine Stadt. / Statt Tee trinke ich Kakao.
viel – fiel => Ich lese viel. / Der Ball fiel ins Wasser.
war – wahr => Es war kalt. / Das ist wahr.
malen – mahlen => Ich male ein Bild. / Der Müller mahlt Mehl.
ist – isst => Er ist groß. / Er isst Brot.`,
    fehler: `Seid wann wohnst du hier? => Seit wann wohnst du hier?
Ihr seit herzlich eingeladen. => Ihr seid herzlich eingeladen.
Das ist doch nicht war! => Das ist doch nicht wahr!
Der Apfel viel vom Baum. => Der Apfel fiel vom Baum.
Er hat mir wiedersprochen. => Er hat mir widersprochen.
Wir fahren in die Statt. => Wir fahren in die Stadt.
Der Vogel ist tod. => Der Vogel ist tot.
Zum ersten mal war ich am Meer. => Zum ersten Mal war ich am Meer.
Ich gehe morgen widder in die Schule. => Ich gehe morgen wieder in die Schule.
Er ist eine Semmel. => Er isst eine Semmel.
Wo seit ihr gewesen? => Wo seid ihr gewesen?
Er ist sein Brot. => Er isst sein Brot.
Viel Spaß, und kommt gesund wider! => Viel Spaß, und kommt gesund wieder!
Wir wohnen in einer großen Statt. => Wir wohnen in einer großen Stadt.
Das ist nicht war. => Das ist nicht wahr.
Ich habe fiel gelernt. => Ich habe viel gelernt.
Seid gestern bin ich krank. => Seit gestern bin ich krank.
Das war das erste mal. => Das war das erste Mal.
Die Pflanze ist tod. => Die Pflanze ist tot.
Die Seite der Gitarre ist gerissen. => Die Saite der Gitarre ist gerissen.
Ich weis es nicht. => Ich weiß es nicht.
Sie hat mir wiedersprochen. => Sie hat mir widersprochen.`
  },
  levels: {
    1: {
      ichkann: ['Du unterscheidest seit/seid, war/wahr, viel/fiel und ist/isst.', 'Du findest das richtige Wort mit einer Probe.'],
      tasks: [
        { type: 'gap', pool: 'wahl', n: 12, filter: x => !/wider|Wider|Saite|Lid|lid|mahlt|Tod/.test(x.q), title: 'Welches Wort passt?', instr: 'Kreise das richtige Wort ein.' }
      ]
    },
    2: {
      ichkann: ['Du unterscheidest viele gleich klingende Wörter.', 'Du findest Fehler in Sätzen.'],
      tasks: [
        { type: 'gap', pool: 'wahl', n: 10, title: 'Welches Wort passt?', instr: 'Kreise das richtige Wort ein.' },
        { type: 'error', pool: 'fehler', n: 3, title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig auf.' }
      ]
    },
    3: {
      ichkann: ['Du kannst gleich klingende Wörter in eigenen Sätzen richtig verwenden.', 'Du kannst die Bedeutung erklären.'],
      tasks: [
        { type: 'gap', pool: 'wahl', n: 8, title: 'Welches Wort passt?', instr: 'Kreise ein.' },
        { type: 'pair', pool: 'saetze', n: 4, title: 'Eigene Sätze', instr: 'Schreibe zu jedem Wortpaar zwei Sätze, die den Unterschied zeigen.' }
      ]
    }
  }
});
