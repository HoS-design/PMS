/* Deutsch – Stufe 4 · Profi, Teil 2 (Rechtschreibung) */
(function () {
  const ext = UB.extendTopic;

  // ------------------------------------------------------------------ Groß- und Kleinschreibung
  ext('gross-klein', {
    more: {
      schwer: `Ich wünsche dir alles {Gute|gute} zum Geburtstag.
Das war das {Beste|beste}, was mir passieren konnte.
Wir treffen uns {morgen|Morgen} früh am Bahnhof.
Sie ist die {Erste|erste}, die das Ziel erreicht.
Zum {ersten|Ersten} Mal sah ich das Meer.
{Alt|alt} und {Jung|jung} feierten gemeinsam.
Beim {Zuhören|zuhören} schlief er ein.
Wir fahren an den {Stillen|stillen} Ozean.
Er kommt {dienstagabends|Dienstagabends} nach Hause.
Am {Dienstagabend|dienstagabend} spielen wir Karten.
Das ist nichts {Neues|neues} für mich.
Sie hat etwas {Schönes|schönes} gemalt.
Wir haben viel {Spaß|spaß} gehabt.
Die {Wiener|wiener} Philharmoniker spielen heute.
Kannst du mir {etwas|Etwas} Wasser bringen?
Er lief {schnell|Schnell} nach Hause.`,
      fehler4: `gestern abend haben wir beim essen viel gelacht. => Gestern Abend haben wir beim Essen viel gelacht.
das schönste am urlaub war das schwimmen im meer. => Das Schönste am Urlaub war das Schwimmen im Meer.
sehr geehrte frau huber, vielen dank für ihren brief. => Sehr geehrte Frau Huber, vielen Dank für Ihren Brief.
am montagmorgen fahren wir mit dem bus nach graz. => Am Montagmorgen fahren wir mit dem Bus nach Graz.
sie wünschte uns alles gute und viel glück. => Sie wünschte uns alles Gute und viel Glück.
abends lese ich gern etwas spannendes. => Abends lese ich gern etwas Spannendes.
zum lernen brauche ich ruhe. => Zum Lernen brauche ich Ruhe.
im großen und ganzen war es ein schöner tag. => Im Großen und Ganzen war es ein schöner Tag.`
    },
    level4: {
      ichkann: ['Du schreibst auch schwierige Fälle richtig (alles Gute, zum ersten Mal, morgen früh, dienstagabends).', 'Du verbesserst ganze Sätze ohne Hilfe.'],
      tasks: [
        { type: 'gap', pool: 'schwer', n: 8, title: 'Groß oder klein?', instr: 'Kreise die richtige Schreibung ein.' },
        { type: 'error', pool: 'fehler4', n: 4, title: 'Schreibe die Sätze richtig.', instr: 'Hier ist alles kleingeschrieben. Verbessere die Großschreibung.' }
      ]
    }
  });

  // ------------------------------------------------------------------ s, ss, ß
  ext('s-ss-sz', {
    more: {
      text4: `Wir sa{ß|ss|s}en am Flu{ss|ß|s} und a{ß|ss|s}en Kuchen.
Der Hund bei{ß|ss|s}t nicht, er spielt blo{ß|ss|s}.
Hast du gewu{ss|ß|s}t, da{ss|ß|s} das Gra{s|ss|ß} na{ss|ß|s} ist?
Ich mu{ss|ß|s} noch ein Gla{s|ss|ß} Wa{ss|ß|s}er holen.
Er schlo{ss|ß|s} die Tür und lie{ß|ss|s} den Schlü{ss|ß|s}el stecken.
Drau{ß|ss|s}en ist es hei{ß|ss|s}, drinnen ist es kühl.
Die Prei{s|ss|ß}e sind gro{ß|ss|s}, aber das Ergebni{s|ss|ß} ist gut.`,
      fehler: `Wir müßen jetzt gehen. => Wir müssen jetzt gehen.
Die Strasse ist naß. => Die Straße ist nass.
Er weis es nicht. => Er weiß es nicht.
Ich habe das Fenster geschloßen. => Ich habe das Fenster geschlossen.
Der Fuss tut weh. => Der Fuß tut weh.
Das Ergebniß ist gut. => Das Ergebnis ist gut.
Er heisst Max. => Er heißt Max.
Wir assen Spaghetti. => Wir aßen Spaghetti.`
    },
    level4: {
      ichkann: ['Du entscheidest in Texten sicher zwischen s, ss und ß.', 'Du begründest die Schreibung mit der Länge des Vokals.'],
      tasks: [
        { type: 'gap', pool: 'text4', n: 5, title: 's, ss oder ß?', instr: 'Kreise die richtige Schreibung ein.' },
        { type: 'error', pool: 'fehler', n: 5, title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Dehnung und Schärfung
  ext('dehnung-schaerfung', {
    more: {
      paar: `Das {Lied|Lid} gefällt mir. (Gesang)
Mir zuckt das {Lid|Lied}. (am Auge)
Er malt ein Bild. Der Müller {mahlt|malt} das Korn.
Das Festessen ist ein großes {Mahl|Mal}.
Ich war schon einmal da – das erste {Mal|Mahl}.
Der {Wal|Wahl} ist ein Säugetier.
Morgen ist die {Wahl|Wal} des Klassensprechers.
Die {Miene|Mine} des Lehrers war ernst. (Gesichtsausdruck)
Die {Mine|Miene} im Kugelschreiber ist leer.
Sie hat einen eleganten {Stil|Stiel}. (Art)
Der {Stiel|Stil} der Blume ist lang.
Der Raum ist ganz {leer|lehr}.`,
      fehler: `Das Bot schwimmt auf dem See. => Das Boot schwimmt auf dem See.
Wir faren mit dem Rad. => Wir fahren mit dem Rad.
Die Biene sitzt auf der Blüte. => (richtig)
Der Ball rollt unter den Stul. => Der Ball rollt unter den Stuhl.
Im Somer ist es heiß. => Im Sommer ist es heiß.
Er hat einen schönen Kam. => Er hat einen schönen Kamm.
Der Teer ist schwarz. => (richtig)
Wir spilen im Garten. => Wir spielen im Garten.`
    },
    level4: {
      ichkann: ['Du unterscheidest gleich klingende Wörter mit verschiedener Schreibung (Lied – Lid, Wal – Wahl).', 'Du findest Dehnungs- und Schärfungsfehler.'],
      tasks: [
        { type: 'gap', pool: 'paar', n: 8, title: 'Welches Wort passt?', instr: 'Kreise ein. Achte auf die Bedeutung.' },
        { type: 'error', pool: 'fehler', n: 4, filter: x => !/richtig/.test(x.a), title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' },
        { type: 'sort', pool: 'markierung', cover: true, keys: ['H', 'D', 'I'], n: 6, title: 'Kennzeichen der Dehnung', instr: 'Ordne die Wörter.', opts: [['H', 'Dehnungs-h'], ['D', 'Doppelvokal'], ['I', 'ie']] }
      ]
    }
  });

  // ------------------------------------------------------------------ gleich klingende Laute
  ext('gleich-klingend', {
    more: {
      mix4: `Der Wal{d|t} ist im Herbs{t|d} bun{t|d}.
Das Kin{d|t} spiel{t|d} im San{d|t}.
Der Zwer{g|k} trug einen gel{b|p}en Hu{t|d}.
Die Br{ü|ie}cke ist l{ä|e}nger als gedacht.
Wir sind {end|ent}lich {ent|end}spannt.
Er war l{ä|e}stig und {ä|e}rgerlich.
Der Ber{g|k} ist hoch und das Wetter kal{t|d}.
Das Gel{d|t} lag auf dem Ra{d|t}weg.
Sie gr{ä|e}bt im Garten nach Sch{ä|e}tzen.
Das Fl{ug|uk}zeug lan{d|t}et pün{k|g}tlich.`,
      fehler: `Der Hunt bellt laut. => Der Hund bellt laut.
Wir fahren mit dem Zuk. => Wir fahren mit dem Zug.
Die Leufe sind schnell. => Die Läufe sind schnell.
Es ist entlich Sommer. => Es ist endlich Sommer.
Das Kleit ist rot. => Das Kleid ist rot.
Die Heuser sind alt. => Die Häuser sind alt.
Das Fahrrad ist billich. => Das Fahrrad ist billig.
Er ist entgültig fertig. => Er ist endgültig fertig.`
    },
    level4: {
      ichkann: ['Du entscheidest in Texten sicher zwischen d/t, g/k, b/p, ä/e, äu/eu, end/ent.', 'Du findest solche Fehler und verbesserst sie mit einer Probe.'],
      tasks: [
        { type: 'gap', pool: 'mix4', n: 6, title: 'Alles gemischt', instr: 'Kreise ein. Mach die Verlängerungs- oder Ableitungsprobe im Kopf.' },
        { type: 'error', pool: 'fehler', n: 5, title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Beistrich
  ext('beistrich', {
    more: {
      profi: `„Wenn du willst“, sagte Lena, „können wir morgen ins Kino gehen.“
Herr Huber, der neue Hausmeister, der aus Linz kommt, hat das Fenster repariert.
Statt zu lernen, spielte er den ganzen Nachmittag, was seine Mutter ärgerte.
Ich hoffe, dass du kommst, und freue mich schon sehr.
Am Montag, dem 3. März, beginnt der Kurs.
Sie lief, so schnell sie konnte, nach Hause.
Obwohl er müde war und Hunger hatte, half er uns, die Kisten zu tragen.
Ja, ich weiß, dass das schwierig ist, aber wir schaffen es.
Er fragte, ob wir Zeit hätten, und wartete auf unsere Antwort.
Das Buch, das du mir geliehen hast, habe ich, ohne es zu wollen, beschädigt.`
    },
    level4: {
      ichkann: ['Du setzt Beistriche auch in langen Sätzen mit Einschüben, Infinitivgruppen und wörtlicher Rede.', 'Du weißt, wo kein Beistrich stehen darf.'],
      tasks: [
        { type: 'commas', pool: 'profi', n: 6, title: 'Setze alle Beistriche.', instr: 'Achtung: Die Sätze sind lang und haben mehrere Beistriche.' },
        { type: 'choice', pool: 'regel', cover: true, keys: ['A', 'R', 'G', 'N', 'E', 'I'], n: 6, asText: true, col: 'Regel', title: 'Warum steht hier ein Beistrich?', instr: 'Schreibe: Aufzählung, Anrede/Ausruf, Gegensatz, Nebensatz, Einschub oder Infinitivgruppe.', opts: [['A', 'Aufzählung'], ['R', 'Anrede/Ausruf'], ['G', 'Gegensatz'], ['N', 'Nebensatz'], ['E', 'Einschub'], ['I', 'Infinitivgruppe']] }
      ]
    }
  });

  // ------------------------------------------------------------------ Verwechslungswörter
  ext('verwechslung', {
    more: {
      wahl4: `Er ist {seit|seid} gestern krank, {wieder|wider} einmal.
Das ist nicht {wahr|war}, das {war|wahr} ein Scherz!
Die Pflanze ist {tot|Tod}, ihr {Tod|tot} kam plötzlich.
Ich nehme Tee {statt|Stadt} Kaffee, wir fahren in die {Stadt|statt}.
Das Blatt {fiel|viel} vom Baum, es lagen {viele|fiele} Blätter da.
{Seid|Seit} ihr fertig? {Seit|Seid} einer Stunde warten wir!
Das ist {wider|wieder} die Vernunft – mach das nie {wieder|wider}!
Die {Lehre|Leere} im Kühlschrank ärgert mich. Er macht eine {Lehre|Leere} als Tischler.`,
      fehler: `Seid wann wohnst du hier? => Seit wann wohnst du hier?
Das ist nicht war. => Das ist nicht wahr.
Wir fahren in die Statt. => Wir fahren in die Stadt.
Er viel vom Fahrrad. => Er fiel vom Fahrrad.
Ich bin wider da. => Ich bin wieder da.
Der Vogel ist Tod. => Der Vogel ist tot.
Ihr seit sehr nett. => Ihr seid sehr nett.
Das Glas ist lehr. => Das Glas ist leer.`
    },
    level4: {
      ichkann: ['Du unterscheidest Verwechslungswörter auch, wenn mehrere in einem Satz vorkommen.', 'Du findest und verbesserst solche Fehler.'],
      tasks: [
        { type: 'gap', pool: 'wahl4', n: 5, title: 'Welches Wort passt?', instr: 'Kreise ein. In jedem Satz gibt es zwei Stellen.' },
        { type: 'error', pool: 'fehler', n: 5, title: 'Finde den Fehler.', instr: 'Schreibe den Satz richtig.' }
      ]
    }
  });

  // ------------------------------------------------------------------ Fremdwörter
  ext('fremdwoerter', {
    more: {
      schreibung4: `Wir essen im {Restaurant|Restorant|Restaurang}.
Der {Rhythmus|Rythmus|Rhytmus} der Musik ist schnell.
Im Zimmer herrscht totales {Chaos|Kaos|Chaoss}.
Der {Ingenieur|Inschenör|Ingenör} plant die Brücke.
Wo ist die {Toilette|Toalette|Toillette}?
Sie gab ein {Interview|Interwiew|Intervju}.
Er braucht {Courage|Kurasche|Curage}, um das zu sagen.
Im Garten wächst {Rhabarber|Rabarber|Rhabarba}.
Der {Chirurg|Schirurg|Kirurg} operiert.
Mein {Portemonnaie|Portmonnee|Portmonai} ist leer.`,
      satz: `Der [Experte] erklärte, wie die Maschine funktioniert.
Wir müssen das Problem [analysieren], bevor wir es lösen.
Die [Temperatur] ist heute auf 30 Grad gestiegen.
Bitte [informiere] mich, wenn du ankommst.
Unser [Projekt] über Vulkane war ein Erfolg.
Er hat eine gute [Idee] für die Party.
Die [Situation] im Stau war schwierig.
Der Arzt stellte die [Diagnose] Grippe.`
    },
    level4: {
      ichkann: ['Du schreibst schwierige Fremdwörter richtig (Rhythmus, Ingenieur, Portemonnaie).', 'Du verwendest Fremdwörter passend im Satz.'],
      tasks: [
        { type: 'gap', pool: 'schreibung4', n: 7, title: 'Richtig geschrieben?', instr: 'Kreise die richtige Schreibung ein.' },
        { type: 'gap', pool: 'satz', n: 6, wordbox: true, title: 'Fremdwörter im Satz', instr: 'Setze die Wörter aus dem Kasten ein.' }
      ]
    }
  });
})();
