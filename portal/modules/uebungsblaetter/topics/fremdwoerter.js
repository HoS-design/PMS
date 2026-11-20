/* Fremdwörter – 3./4. Klasse */
UB.simple({
  id: 'fremdwoerter', title: 'Fremdwörter', area: 'rechtschreibung', klassen: [3, 4], img: 'MiniHoS_Forschen_Globus',
  merk: '<b>Fremdwörter</b> kommen aus anderen Sprachen (Griechisch, Latein, Französisch, Englisch). Typische Schreibungen: <b>ph</b> (Physik, Strophe), <b>th</b> (Theater, Mathematik), <b>y</b> (Gymnastik, Typ), <b>rh</b> (Rhythmus). Typische Endungen: <b>-ieren</b> (telefonieren), <b>-ik</b> (Musik), <b>-ion</b> (Information), <b>-tät</b> (Qualität), <b>-ismus</b> (Tourismus), <b>-ie</b> (Fantasie). Schlag im Zweifel im Wörterbuch nach!',
  pools: {
    schreibung: `Wir gehen ins {Theater|Teater|Theather}.
In {Physik|Füsik|Fysik} machen wir Versuche.
Die {Strophe|Strofe|Stroffe} hat vier Zeilen.
Heute haben wir {Mathematik|Matematik|Mathemathik}.
Im Turnsaal machen wir {Gymnastik|Gümnastik|Gimnastik}.
Ich höre gern {Musik|Musick|Muhsik}.
Wir {telefonieren|telefonihren|telefoniren} jeden Abend.
Das Auto hat eine gute {Qualität|Kwalität|Qualitet}.
Ich brauche eine {Information|Informatzion|Informazion}.
Der Mechaniker muss das Rad {reparieren|repariren|reparihren}.
Der {Rhythmus|Rythmus|Rhytmus} ist schnell.
Das ist ein lustiger {Typ|Tüp|Tyb}.
Meine Schwester studiert {Biologie|Biologi|Bjologie}.
In der {Bibliothek|Bibliotek|Biblyothek} ist es leise.
Wir lernen das {Alphabet|Alfabet|Alphabeth}.
Die {Apotheke|Apoteke|Apotheeke} hat bis 18 Uhr offen.
Der {Computer|Kompjuter|Computa} ist neu.
Wir gehen ins {Museum|Musehum|Museumm}.
Das {Thermometer|Termometer|Thermomether} zeigt 20 Grad.
In {Geografie|Geogravie|Geograpfie} lernen wir Landkarten lesen.
Der {Pilot|Pilott|Piloth} landet das Flugzeug.
Die {Polizei|Polizai|Pollizei} kommt.
Wir {diskutieren|diskutiren|diskuttieren} über das Thema.
Das {Hobby|Hobi|Hoby} meines Vaters ist Angeln.
Wir sehen ein {Video|Wideo|Vidio} an.
Der {Rhythmus|Rythmus|Rhythmuss} ist schwierig.`,
    bedeutung: `die Biografie => die Lebensbeschreibung
das Thermometer => der Wärmemesser
der Autor => der Verfasser
das Interview => die Befragung
die Diskussion => das Streitgespräch, die Aussprache
das Experiment => der Versuch
die Situation => die Lage
der Konflikt => der Streit
die Information => die Auskunft
kreativ => schöpferisch, einfallsreich
reparieren => wiederherstellen, richten
die Fantasie => die Vorstellungskraft
das Resultat => das Ergebnis
die Distanz => die Entfernung
das Hobby => die Freizeitbeschäftigung
die Garage => der Abstellraum fürs Auto
der Ingenieur => der Techniker
ignorieren => nicht beachten`,
    endung: `telefon- => telefonieren
reparat- => die Reparatur
Inform- => die Information
Qualit- => die Qualität
Mus- => die Musik
Fantas- => die Fantasie
Tour- => der Tourismus
Techn- => die Technik
Situat- => die Situation
diskut- => diskutieren
interess- => sich interessieren
Elektr- => die Elektrik
Präsentat- => die Präsentation
Universit- => die Universität
Biolog- => die Biologie
trainier- => trainieren
Grafi- => die Grafik`
  },
  levels: {
    1: {
      ichkann: ['Du kennst typische Schreibungen von Fremdwörtern (ph, th, y, rh).', 'Du schreibst häufige Fremdwörter richtig.'],
      tasks: [
        { type: 'pair', pool: 'bedeutung', n: 6, inline: true, head: 'Fremdwort', col: 'deutsches Wort', title: 'Was bedeutet das?', instr: 'Schreibe ein deutsches Wort mit derselben Bedeutung dazu.' }
      ]
    },
    2: {
      ichkann: ['Du kannst Fremdwörter durch deutsche Wörter ersetzen.', 'Du kennst typische Endungen von Fremdwörtern.'],
      tasks: [
        { type: 'pair', pool: 'bedeutung', n: 8, inline: true, head: 'Fremdwort', col: 'deutsches Wort', title: 'Was bedeutet das?', instr: 'Schreibe ein deutsches Wort mit derselben Bedeutung dazu.' },
      ]
    },
    3: {
      ichkann: ['Du kannst Fremdwörter mit typischen Endungen bilden.', 'Du verwendest Fremdwörter passend.'],
      tasks: [
        { type: 'pair', pool: 'endung', n: 6, inline: true, head: 'Wortteil', col: 'Fremdwort mit Endung', title: 'Ergänze die Endung.', instr: 'Verwende -ieren, -ik, -ion, -tät, -ur, -ie oder -ismus.' },
        { type: 'pair', pool: 'bedeutung', n: 8, inline: true, head: 'Fremdwort', col: 'deutsches Wort', title: 'Übersetze ins Deutsche.', instr: 'Schreibe ein deutsches Wort mit derselben Bedeutung.' }
      ]
    }
  }
});
