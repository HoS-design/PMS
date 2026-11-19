/* Direkte Rede – 1. und 2. Klasse
   Redesätze sind fertig vorgegeben; nur Name, Stellung und Begleitverb wechseln. */
(function () {
  const { esc, lines, sol, blank, table, box } = UB;

  const SPEECH = [
    { t: 'Hilfe', e: '!' }, { t: 'Pass auf', e: '!' }, { t: 'Komm sofort zurück', e: '!' },
    { t: 'Das gibt es doch nicht', e: '!' }, { t: 'Mein Drachen fliegt weg', e: '!' }, { t: 'Wir haben gewonnen', e: '!' },
    { t: 'Wo bist du', e: '?' }, { t: 'Hast du meinen Hund gesehen', e: '?' }, { t: 'Kannst du mir helfen', e: '?' },
    { t: 'Wie spät ist es', e: '?' }, { t: 'Wer hat das gemacht', e: '?' }, { t: 'Kommst du morgen mit', e: '?' },
    { t: 'Ich habe den Bus verpasst', e: '.' }, { t: 'Der Drachen hängt im Baum', e: '.' }, { t: 'Das war knapp', e: '.' },
    { t: 'Ich räume das sofort auf', e: '.' }, { t: 'Morgen schreiben wir einen Test', e: '.' }
  ];
  const SPLIT = [
    { a: 'Komm schnell', b: 'der Bus fährt gleich ab', e: '!' },
    { a: 'Schau mal', b: 'da oben hängt dein Drachen', e: '!' },
    { a: 'Weißt du', b: 'wo Krümel sein könnte', e: '?' },
    { a: 'Keine Sorge', b: 'wir finden ihn bestimmt', e: '.' },
    { a: 'Vorsicht', b: 'das Glas ist ganz voll', e: '!' },
    { a: 'Hör zu', b: 'ich habe eine Idee', e: '.' }
  ];
  const SAY = [
    { cue: 'wollte nicht, dass die anderen etwas hören.', s: 'Der Schlüssel liegt unter der Matte.', v: 'flüsterte' },
    { cue: 'wollte etwas wissen.', s: 'Wo ist mein Hamster?', v: 'fragte' },
    { cue: 'hatte schreckliche Angst.', s: 'Hilfe, ein Hund!', v: 'schrie' },
    { cue: 'freute sich riesig über das Tor.', s: 'Wir haben gewonnen!', v: 'jubelte' },
    { cue: 'war müde und traurig.', s: 'Jetzt ist alles kaputt.', v: 'seufzte' },
    { cue: 'ärgerte sich über den Bruder.', s: 'Lass meine Sachen in Ruhe!', v: 'schimpfte' },
    { cue: 'sprach leise mit sich selbst.', s: 'Wo habe ich nur mein Heft?', v: 'murmelte' },
    { cue: 'wollte, dass alle es verstehen.', s: 'So baut man einen Schneemann.', v: 'erklärte' },
    { cue: 'wollte unbedingt mitkommen.', s: 'Bitte, nimm mich mit!', v: 'bettelte' },
    { cue: 'konnte es kaum glauben.', s: 'Das ist ja unglaublich!', v: 'staunte' }
  ];
  const verbFor = (e, rng) => e === '?' ? 'fragte' : (e === '!' ? rng.pick(['rief', 'schrie']) : rng.pick(['sagte', 'meinte', 'erklärte']));

  // liefert { plain: ohne Satzzeichen, full: richtig, speech, comp }
  function make(form, rng) {
    const name = rng.pick(UB.NAMES);
    if (form === 'mitte') {
      const s = rng.fresh(SPLIT, 1, x => x.a)[0]; const v = s.e === '?' ? 'fragte' : rng.pick(['rief', 'sagte']);
      return { plain: s.a + ' ' + v + ' ' + name + ' ' + s.b, full: '„' + s.a + '“, ' + v + ' ' + name + ', „' + s.b + s.e + '“', speech: s.a + ' … ' + s.b, comp: v + ' ' + name, name };
    }
    const s = rng.fresh(SPEECH, 1, x => x.t)[0]; const v = verbFor(s.e, rng);
    if (form === 'vorne') return { plain: name + ' ' + v + ' ' + s.t, full: name + ' ' + v + ': „' + s.t + s.e + '“', speech: s.t, comp: name + ' ' + v, name };
    return { plain: s.t + ' ' + v + ' ' + name, full: '„' + s.t + (s.e === '.' ? '' : s.e) + '“, ' + v + ' ' + name + '.', speech: s.t, comp: v + ' ' + name, name };
  }

  const MERK = {
    1: '<div class="merk"><b>Merke:</b> Was jemand sagt, steht zwischen Redezeichen: <b>Lena ruft: „Hilfe!“</b><br>Nach dem Begleitsatz steht ein Doppelpunkt.</div>',
    2: '<div class="merk"><b>Merke:</b> Begleitsatz vorne: <b>Lena ruft: „Hilfe!“</b><br>Begleitsatz hinten: <b>„Hilfe!“, ruft Lena.</b> — Nach dem Redesatz kommt ein Beistrich.</div>',
    3: ''
  };

  function taskSetzen(level, rng) {
    const forms = level === 1 ? ['vorne'] : (level === 2 ? ['vorne', 'hinten'] : ['vorne', 'hinten', 'mitte']);
    const n = level === 1 ? 5 : (level === 2 ? 6 : 4);
    const its = [];
    for (let i = 0; i < n; i++) its.push(make(forms[i % forms.length], rng));
    const sh = rng.shuffle(its);
    return {
      title: 'Setze die Satzzeichen.',
      instr: 'Schreibe die Sätze mit allen Satzzeichen ab: „ “ : , ! ? .',
      body: MERK[level] + sh.map(x => '<div class="item">' + esc(x.plain) + '</div>' + lines(1)).join(''),
      sol: sh.map(x => '<div class="item">' + sol(esc(x.full)) + '</div>').join('')
    };
  }

  function taskTeile(level, rng) {
    const its = [];
    const forms = level === 3 ? ['vorne', 'hinten', 'mitte'] : ['vorne', 'hinten', 'vorne', 'hinten'];
    forms.forEach(f => its.push(make(f, rng)));
    const head = level === 3 ? ['Satz', 'Begleitsatz', 'Redesatz'] : ['Satz', 'Wer spricht?', 'Was wird gesagt?'];
    return {
      title: level === 3 ? 'Begleitsatz und Redesatz' : 'Wer spricht? Was wird gesagt?',
      instr: level === 3 ? 'Schreibe Begleitsatz und Redesatz getrennt auf.' : 'Schreibe auf, wer spricht und was gesagt wird.',
      body: table(head, its.map(x => [esc(x.full), blank(7), blank(9)])),
      sol: table(head, its.map(x => [esc(x.full), sol(esc(level === 3 ? x.comp : x.name)), sol(esc(x.speech))]))
    };
  }

  function taskVerben(level, rng) {
    const its = rng.fresh(SAY, 5, x => x.s);
    const verbs = rng.shuffle(its.map(x => x.v));
    const rows = its.map(x => ({ x, name: rng.pick(UB.NAMES) }));
    const line = (r, v) => esc(r.name) + ' ' + esc(r.x.cue) + ' „' + esc(r.x.s.replace(/\.$/, '')) + '“, ' + v + ' ' + esc(r.name) + '.';
    return {
      title: 'Statt „sagte“: Welches Verb passt?',
      instr: 'Setze das passende Verb aus dem Kasten ein.',
      body: '<div class="wordbox">' + verbs.map(esc).join(' · ') + '</div>' + rows.map(r => '<div class="item">' + line(r, blank(7)) + '</div>').join(''),
      sol: rows.map(r => '<div class="item">' + line(r, sol(esc(r.x.v))) + '</div>').join('')
    };
  }

  function taskDialog(level, rng) {
    const name1 = rng.pick(UB.NAMES), name2 = rng.pick(UB.NAMES.filter(n => n !== name1));
    return {
      title: 'Schreibe ein kurzes Gespräch.',
      instr: name1 + ' und ' + name2 + ' finden auf dem Schulweg eine Geldbörse. Schreibe vier Sätze mit direkter Rede. Verwende alle drei Stellungen des Begleitsatzes und nicht „sagte“.',
      body: lines(4),
      sol: '<div class="item">Eigene Lösung. Beispiel:</div><div class="item">' + sol(esc('„Schau mal“, rief ' + name1 + ', „da liegt eine Geldbörse!“')) + '<br>' +
        sol(esc(name2 + ' fragte: „Wem gehört die wohl?“')) + '<br>' + sol(esc('„Wir bringen sie zum Fundamt“, schlug ' + name1 + ' vor.')) + '</div>'
    };
  }

  UB.register({
    id: 'direkte-rede',
    title: 'Direkte Rede',
    area: 'rechtschreibung',
    klassen: [1, 2],
    img: 'MiniHoS_Schreiben_Stift-Heft',
    levels: {
      1: { ichkann: ['Du kannst die Redezeichen „ “ richtig setzen.', 'Du weißt, dass nach dem Begleitsatz ein Doppelpunkt steht.'] },
      2: { ichkann: ['Du kannst Satzzeichen bei vorangestelltem und nachgestelltem Begleitsatz setzen.', 'Du kannst statt „sagte“ ein genaueres Verb verwenden.'] },
      3: { ichkann: ['Du kannst Begleitsatz und Redesatz benennen.', 'Du kannst Satzzeichen auch bei eingeschobenem Begleitsatz setzen.', 'Du kannst ein Gespräch mit direkter Rede schreiben.'] }
    },
    build(level, rng) {
      if (level === 1) return [taskSetzen(1, rng), taskTeile(1, rng)];
      if (level === 2) return [taskSetzen(2, rng), taskVerben(2, rng)];
      return [taskSetzen(3, rng), taskTeile(3, rng), taskDialog(3, rng)];
    },
    pool() {
      return '<p class="hint">Redesätze (Begleitsatz vorne/hinten):</p>' + table(['Redesatz', 'Zeichen'], SPEECH.map(s => [esc(s.t), esc(s.e)])) +
        '<p class="hint">Eingeschoben:</p>' + table(['Teil 1', 'Teil 2', 'Zeichen'], SPLIT.map(s => [esc(s.a), esc(s.b), esc(s.e)])) +
        '<p class="hint">Statt „sagte“:</p>' + table(['Situation (… + Name)', 'Rede', 'Verb'], SAY.map(s => [esc(s.cue), esc(s.s), esc(s.v)]));
    }
  });
})();
