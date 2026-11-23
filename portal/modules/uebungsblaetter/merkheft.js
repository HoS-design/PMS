/* Merkheft: macht aus dem Merktext eines Themas eine abwechslungsreiche Merkseite.
   1. Automatisch: „<b>Begriff</b> (Zusatz): Erklärung“ wird zu Regel-Kärtchen.
   2. Kuratiert (UB.MERK[id]): Tabellen, Skizzen, Ablaufpfeile, Beispielsätze.
      { html }   ersetzt den ganzen Inhalt
      { side }   steht rechts neben den Kärtchen
      { after }  steht unter den Kärtchen
      { before } steht über den Kärtchen */
(function () {
  const strip = (h) => h.replace(/<[^>]+>/g, '');

  // ---------------------------------------------------------------- automatische Gliederung
  function parse(m) {
    const starts = [];
    const re = /<b>/g; let k;
    while ((k = re.exec(m))) { const pre = m.slice(0, k.index).trim(); if (!pre || /[.!?;]$/.test(pre) || /[.!?]["“]?$/.test(pre)) starts.push(k.index); }
    let intro = m.slice(0, starts.length ? starts[0] : m.length).trim();
    const cards = []; const extra = [];
    starts.forEach((s, i) => {
      const seg = m.slice(s, i + 1 < starts.length ? starts[i + 1] : m.length).trim();
      const c = seg.match(/^<b>([^<]+?)<\/b>\s*(\([^)]*\)|[^:<.(]{1,6})?\s*:\s*([\s\S]*)$/);
      if (c) cards.push({ term: c[1].replace(/:$/, ''), sub: c[2] ? c[2].trim().replace(/^\((.*)\)$/, '$1') : '', body: c[3] });
      else if (!cards.length) intro += (intro ? ' ' : '') + seg;
      else extra.push(seg);
    });
    return { intro, cards, extra };
  }
  // Sätze trennen – nicht bei Ordnungszahlen (2. Mittelwort) und Abkürzungen (z. B., bzw.)
  function sents(h) {
    const out = []; let last = 0; const re = /[.…]["“)]?\s+(?=[A-ZÄÖÜ„<(0-9])/g; let m;
    while ((m = re.exec(h))) {
      const before = h.slice(0, m.index).replace(/<[^>]+>/g, '');
      const tok = (before.match(/(\S+)$/) || ['', ''])[1];
      if (/^\d+$/.test(tok) || /^[A-Za-z]$/.test(tok) || /^(bzw|ca|usw|vgl|Nr|evtl|bzw\.|d\.h)$/i.test(tok)) continue;
      out.push(h.slice(last, m.index + m[0].length).trim()); last = m.index + m[0].length;
    }
    out.push(h.slice(last).trim());
    return out.filter(Boolean);
  }
  const pts = (h) => { const ss = sents(h); return ss.length < 2 ? '<p class="mh-lead">' + h + '</p>' : '<ul class="mh-pts">' + ss.map(x => '<li>' + x + '</li>').join('') + '</ul>'; };
  const ask = (b) => b.replace(/^((?:Wer|Wen|Wem|Wessen|Was|Wann|Wo|Wohin|Woher|Wie|Warum)[^?.:]{0,30}\?)/, '<span class="mh-ask">$1</span>');
  function autoBody(m) {
    const { intro, cards, extra } = parse(m);
    if (cards.length < 2) return pts(m);
    // Hat nur die letzte Karte mehrere Sätze, sind die übrigen Sätze allgemeine Hinweise
    const lastS = sents(cards[cards.length - 1].body);
    if (lastS.length > 1 && cards.slice(0, -1).every(c => sents(c.body).length === 1)) { cards[cards.length - 1].body = lastS[0]; extra.unshift(lastS.slice(1).join(' ')); }
    const maxLen = Math.max(...cards.map(c => strip(c.body).length + c.term.length));
    const cls = maxLen <= 150 ? 'mh-cards two' : 'mh-cards list';
    return (intro ? pts(intro) : '') +
      '<div class="' + cls + '">' + cards.map(c => '<div class="mh-card"><div class="mh-term">' + c.term + (c.sub ? ' <small>' + c.sub + '</small>' : '') + '</div><div class="mh-def">' + ask(c.body) + '</div></div>').join('') + '</div>' +
      extra.map(e => sents(e).map(x => '<p class="mh-note">' + x + '</p>').join('')).join('');
  }

  // ---------------------------------------------------------------- Bausteine für kuratierte Seiten
  const T = (head, rows, cls) => '<table class="mh-tb' + (cls ? ' ' + cls : '') + '">' + (head ? '<tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr>' : '') +
    rows.map(r => '<tr>' + r.map((c, i) => (i === 0 && !head ? '<th>' : '<td>') + c + (i === 0 && !head ? '</th>' : '</td>')).join('') + '</tr>').join('') + '</table>';
  const Th = (head, rows, cls) => '<table class="mh-tb rowhead' + (cls ? ' ' + cls : '') + '"><tr>' + head.map(h => '<th>' + h + '</th>').join('') + '</tr>' +
    rows.map(r => '<tr>' + r.map((c, i) => i === 0 ? '<th>' + c + '</th>' : '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';
  const F = (items, cls) => '<div class="mh-flow' + (cls ? ' ' + cls : '') + '">' + items.map(x => '<span class="mh-step">' + x + '</span>').join('<span class="mh-arr">→</span>') + '</div>';
  const C = (items) => '<span class="mh-chips">' + items.map(x => '<span class="mh-chip">' + x + '</span>').join('') + '</span>';
  const N = (h) => '<p class="mh-note">' + h + '</p>';
  const X = (h) => '<div class="mh-ex">' + h + '</div>';
  const L = (h) => '<p class="mh-lead">' + h + '</p>';
  const H = (h) => '<span class="hl">' + h + '</span>';
  const G = (cols, cls) => '<div class="mh-grid' + (cls ? ' ' + cls : '') + '">' + cols.map(c => '<div class="mh-card">' + c + '</div>').join('') + '</div>';
  const K = (term, def) => '<div class="mh-term">' + term + '</div><div class="mh-def">' + def + '</div>';
  const S = (w, vb, inner) => '<svg class="mh-svg" style="width:' + w + 'mm" viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg">' + inner + '</svg>';
  const tx = (x, y, s, cls, anchor) => '<text x="' + x + '" y="' + y + '" class="' + (cls || '') + '" text-anchor="' + (anchor || 'middle') + '">' + s + '</text>';
  const sg = (parts) => '<div class="sg-row mh-sg">' + parts.map(([t, l]) => '<span class="sg"><span class="sg-t">' + t + '</span><span class="sg-l">' + l + '</span></span>').join('') + '<span class="sg-dot">.</span></div>';

  const M = {};

  // ================================================================ DEUTSCH
  M['zeitformen'] = { html: Th(['Zeitform', 'Beispiel', 'Bildung / Verwendung'], [['Gegenwart <small>Präsens</small>', 'ich spiele', ''], ['Mitvergangenheit <small>Präteritum</small>', 'ich spielte, ich ging', 'Erzählzeit'],
    ['Vergangenheit <small>Perfekt</small>', 'ich habe gespielt, ich bin gegangen', 'haben/sein + 2. Mittelwort'], ['Vorvergangenheit <small>Plusquamperfekt</small>', 'ich hatte gespielt, ich war gegangen', 'geschah vor etwas anderem Vergangenem'],
    ['Zukunft <small>Futur I</small>', 'ich werde spielen', 'werden + Nennform'], ['vollendete Zukunft <small>Futur II</small>', 'ich werde gespielt haben', '']], 'compact') + '<div class="mh-time">' +
    [['Vorvergangenheit', 'ich hatte gespielt'], ['Vergangenheit / Mitvergangenheit', 'ich habe gespielt / ich spielte'], ['Gegenwart', 'ich spiele'], ['Zukunft', 'ich werde spielen']]
      .map((x, i) => '<div class="mh-tp' + (i === 2 ? ' now' : '') + '"><b>' + x[0] + '</b><span>' + x[1] + '</span></div>').join('') + '</div>' +
    N('<b>Stammformen</b>: Nennform – Mitvergangenheit – 2. Mittelwort (gehen – ging – gegangen).') };
  M['faelle'] = { html: Th(['Fall', 'Frage', 'männlich', 'weiblich', 'sächlich', 'Mehrzahl'], [
    ['1. Fall <small>Nominativ</small>', 'Wer oder was?', 'der Hund', 'die Katze', 'das Pferd', 'die Tiere'],
    ['2. Fall <small>Genitiv</small>', 'Wessen?', 'des Hundes', 'der Katze', 'des Pferdes', 'der Tiere'],
    ['3. Fall <small>Dativ</small>', 'Wem?', 'dem Hund', 'der Katze', 'dem Pferd', 'den Tieren'],
    ['4. Fall <small>Akkusativ</small>', 'Wen oder was?', 'den Hund', 'die Katze', 'das Pferd', 'die Tiere']]) +
    N('Frage immer mit dem ganzen Satz: <i>Wem</i> hilft Max? – seinem Freund → 3. Fall.') };
  M['satzglieder'] = { after: sg([['Am Montag', 'ZE'], ['schenkt', 'P'], ['Lena', 'S'], ['ihrer Oma', 'O3'], ['einen Blumenstrauß', 'O4']]) };
  M['das-dass'] = { html: '<div class="mh-dec"><div class="mh-qbox">Kann ich <b>dieses</b>, <b>welches</b> oder <b>ein</b> einsetzen?</div>' +
    '<div class="mh-yn"><div class="mh-card"><div class="mh-term">ja → das</div><div class="mh-def">Artikel: <i>das</i> Buch (ein Buch)<br>hinweisend: <i>Das</i> glaube ich nicht. (Dieses …)<br>bezüglich: das Buch, <i>das</i> ich lese (welches)</div></div>' +
    '<div class="mh-card"><div class="mh-term">nein → dass</div><div class="mh-def">Bindewort (Konjunktion):<br>Ich hoffe, <i>dass</i> du kommst.<br>Vor „dass“ steht ein Beistrich.</div></div></div></div>' };
  M['direkte-rede'] = { html: L('Die wörtliche Rede steht in Anführungszeichen. Der <b>Begleitsatz</b> sagt, wer spricht.') + Th(['Begleitsatz', 'Beispiel', 'Achte auf'], [
    ['vorne', 'Lena ruft<b class="pz">:</b> <b class="pz">„</b>Hilfe!<b class="pz">“</b>', 'Doppelpunkt, Satzzeichen vor dem Schlusszeichen'],
    ['hinten', '<b class="pz">„</b>Ich komme<b class="pz">“,</b> sagt Lena.<br><b class="pz">„</b>Hilfe!<b class="pz">“,</b> ruft Lena.', 'Beistrich nach dem Schlusszeichen; der Punkt im Redesatz fällt weg'],
    ['in der Mitte', '<b class="pz">„</b>Ich komme<b class="pz">“,</b> sagt Lena<b class="pz">, „</b>aber erst später.<b class="pz">“</b>', 'zwei Beistriche, die Rede geht klein weiter']]) +
    N('Statt „sagte“: flüsterte, rief, fragte, antwortete, jammerte …') };
  M['aktiv-passiv'] = { html: G([K('Aktiv', 'Wer handelt, steht im Mittelpunkt.<br><i><u>Der Koch</u> bereitet <u class="o">die Suppe</u> zu.</i>'), K('Passiv', 'Die Handlung steht im Mittelpunkt.<br><i><u class="o">Die Suppe</u> wird (vom Koch) zubereitet.</i>')]) +
    N('Das Objekt im 4. Fall des Aktivsatzes wird zum Subjekt des Passivsatzes. Bildung: <b>werden + 2. Mittelwort</b>.') +
    Th(['Zeit', 'Passiv'], [['Präsens', 'wird gerettet'], ['Präteritum', 'wurde gerettet'], ['Perfekt', 'ist gerettet worden']], 'narrow') };
  M['wortarten'] = { html: Th(['Wortart', 'Erkennung', 'Beispiele'], [['Nomen', 'groß geschrieben, mit Artikel', 'der Hund, die Freude'], ['Verb', 'was jemand tut oder was geschieht', 'laufen, ist, regnet'], ['Adjektiv', 'wie etwas ist', 'groß, leise, rot'],
    ['Artikel', 'Begleiter des Nomens', 'der, die, das, ein, eine'], ['Pronomen', 'steht für ein Nomen', 'ich, du, er, mein …'], ['Präposition', 'zeigt Verhältnisse', 'auf, unter, mit, wegen …'],
    ['Konjunktion', 'verbindet', 'und, oder, aber, weil, dass …'], ['Adverb', 'sagt wann, wo, wie', 'heute, dort, gern …']], 'compact') };
  M['nomen'] = { after: X(C(['der Tisch <small>männlich</small>', 'die Lampe <small>weiblich</small>', 'das Buch <small>sächlich</small>']) + ' &nbsp; das Haus + die Tür = <b>die</b> Haustür') };
  M['adjektive'] = { after: F(['Grundstufe<br><i>schnell</i>', 'Vergleichsstufe<br><i>schneller</i>', 'Höchststufe<br><i>am schnellsten</i>']) };
  M['satzarten'] = { html: '<div class="mh-cards four">' + [['.', 'Aussagesatz', 'teilt etwas mit', 'Heute ist Montag.'], ['?', 'Fragesatz', 'W-Frage oder Ja/Nein-Frage', 'Wann kommst du? Kommst du?'], ['!', 'Aufforderungssatz', 'bittet oder befiehlt', 'Bitte setz dich!'], ['!', 'Ausrufesatz', 'zeigt ein Gefühl', 'Das ist ja toll!']]
    .map(x => '<div class="mh-card center"><div class="mh-big">' + x[0] + '</div><div class="mh-term">' + x[1] + '</div><div class="mh-def">' + x[2] + '<br><i>' + x[3] + '</i></div></div>').join('') + '</div>' +
    N('W-Fragen beginnen mit einem Fragewort (Wer? Wann? Warum?), Entscheidungsfragen mit dem Verb – Antwort: Ja oder Nein.') };
  M['praepositionen'] = { html: L('Präpositionen (Verhältniswörter) bestimmen den <b>Fall</b> des folgenden Nomens.') + T(['mit dem 3. Fall', 'mit dem 4. Fall', 'mit dem 2. Fall', 'Wechselpräpositionen'], [
    ['aus, bei, mit, nach, seit, von, zu', 'durch, für, gegen, ohne, um', 'wegen, während, trotz, statt', 'an, auf, hinter, in, neben, über, unter, vor, zwischen']]) +
    G([K('Wo? → 3. Fall', 'Die Katze liegt <u>auf dem Sofa</u>.'), K('Wohin? → 4. Fall', 'Die Katze springt <u>auf das Sofa</u>.')]) };
  M['wortbildung'] = { after: X('<b>Wortfamilie</b> „fahr“: ' + C(['fahren', 'der Fahrer', 'die Abfahrt', 'das Fahrrad', 'erfahren'])) };
  M['satzgefuege'] = { html: '<div class="mh-sent"><span class="hs">Wir bleiben drinnen</span><b>,</b> <span class="ns">weil es <u>regnet</u></span><b>.</b></div>' +
    G([K('Hauptsatz', 'Das gebeugte Verb steht an <b>2. Stelle</b>. Er kann allein stehen.'), K('Nebensatz', 'Das gebeugte Verb steht am <b>Ende</b>. Beginnt oft mit weil, dass, wenn, obwohl, als, damit oder der/die/das.')]) +
    G([K('Satzreihe', 'Hauptsatz + Hauptsatz (und, oder, aber, denn, sondern)'), K('Satzgefüge', 'Hauptsatz + Nebensatz – immer mit Beistrich')]) };
  M['gross-klein'] = { after: X('Signalwörter für Nominalisierungen: ' + C(['das', 'beim', 'zum', 'im', 'etwas', 'viel', 'nichts', 'alles'])) };
  M['s-ss-sz'] = { html: F(['Selbstlaut <b>kurz</b> → <b>ss</b><br><i>Fluss, essen</i>', 'Selbstlaut <b>lang</b> oder ei/au/eu, s klingt <b>scharf</b> → <b>ß</b><br><i>Straße, heißen</i>', 's klingt <b>weich</b> → <b>s</b><br><i>Rose, lesen</i>'], 'nogap') +
    N('Am Wortende hilft die <b>Verlängerungsprobe</b>: Gras – Gräser (s), Fuß – Füße (ß), Kuss – küssen (ss).') };
  M['dehnung-schaerfung'] = { html: G([K('kurzer Selbstlaut (Schärfung)', 'Danach folgen meist zwei Mitlaute; hört man nur einen, wird er verdoppelt: Son<b>n</b>e, Mut<b>t</b>er.<br>Statt kk → <b>ck</b> (Zucker), statt zz → <b>tz</b> (Katze).'),
    K('langer Selbstlaut (Dehnung)', 'Meist unmarkiert: Ofen, Hase.<br>Langes i meist <b>ie</b>: Biene.<br><b>Dehnungs-h</b> vor l, m, n, r: Zahn, Stuhl.<br>Doppelter Selbstlaut: Meer, Haar, Boot.')]) };
  M['gleich-klingend'] = {};
  M['beistrich'] = { html: Th(['', 'Ein Beistrich steht …', 'Beispiel'], [
    ['1', 'bei <b>Aufzählungen</b> (nicht vor und/oder)', 'Äpfel, Birnen und Bananen'], ['2', 'vor <b>aber, sondern, doch</b>', 'klein, aber stark'],
    ['3', 'nach <b>Anreden und Ausrufen</b>', 'Lena, komm her! Ach, wie schade!'], ['4', 'zwischen <b>Haupt- und Nebensatz</b>', 'Ich weiß, dass du recht hast.'],
    ['5', 'bei <b>Einschüben</b> – vorne und hinten', 'Tom, mein Freund, kommt.'], ['6', 'vor <b>Infinitivgruppen</b> mit um, ohne, statt, außer, als', 'Ich lerne, um gute Noten zu bekommen.'],
    ['7', 'bei der <b>direkten Rede</b> nach dem Redesatz', '„Komm her“, rief Mama.']], 'num') };
  M['verwechslung'] = { html: '<div class="mh-pairs">' + [['seit', 'Zeit: seit Montag', 'seid', 'ihr seid'], ['wieder', 'noch einmal', 'wider', 'gegen'], ['tot', 'Adjektiv', 'der Tod', 'Nomen'], ['statt', 'anstatt', 'die Stadt', 'Ort'], ['viel', 'Menge', 'fiel', 'fallen'], ['war', 'sein', 'wahr', 'richtig'],
    ['mal', 'einmal', 'das Mal', 'zum ersten Mal'], ['malen', 'Bild', 'mahlen', 'Mühle'], ['die Seite', 'Buch', 'die Saite', 'Gitarre'], ['das Lied', 'singen', 'das Lid', 'Auge'], ['ist', 'sein', 'isst', 'essen']]
    .map(p => '<div class="mh-pair"><span><b>' + p[0] + '</b><small>' + p[1] + '</small></span><i>≠</i><span><b>' + p[2] + '</b><small>' + p[3] + '</small></span></div>').join('') + '</div>' };
  M['fremdwoerter'] = {};

  const curve = S(54, '0 0 140 62', '<path d="M6 52 L40 46 Q78 34 96 10 L104 10 Q112 30 134 50" class="ln"/>' + '<circle cx="100" cy="9" r="3" class="dotf"/>' +
    tx(20, 60, 'Einleitung', 'sm') + tx(68, 60, 'Hauptteil', 'sm') + tx(100, 4.5, 'Höhepunkt', 'sm b') + tx(124, 60, 'Schluss', 'sm'));
  M['erzaehlung'] = { side: curve };
  M['gegenstandsbeschreibung'] = { html: L('<b>Beschreibung</b>: im Präsens, sachlich und genau, damit sich andere den Gegenstand oder das Tier vorstellen können.') + F(['Einleitung<br><small>Was ist es? Gesamteindruck</small>', 'Hauptteil<br><small>Einzelheiten der Reihe nach</small>', 'Schluss<br><small>Besonderheiten, Verwendung</small>']) +
    N('Reihenfolge im Hauptteil: von oben nach unten oder von außen nach innen.') + N('Genaue Adjektive (dunkelblau, rechteckig, aus Leder) und treffende Verben (befindet sich, besteht aus, ist verziert mit).') };
  M['personenbeschreibung'] = { html: L('<b>Personenbeschreibung</b>: Präsens, sachlich, keine Bewertungen.') + F(['Gesamteindruck<br><small>Geschlecht, Alter, Größe, Gestalt</small>', 'Kopf<br><small>Gesicht, Haare, Augen …</small>', 'Kleidung<br><small>von oben nach unten</small>', 'besondere Merkmale<br><small>Brille, Narbe, Gang</small>']) +
    N('Genaue Adjektive: schulterlange, gewellte Haare; schmale, leicht gebogene Nase.') };
  M['vorgangsbeschreibung'] = { after: X('Verbindungswörter: ' + C(['zuerst', 'danach', 'anschließend', 'sobald', 'zum Schluss'])) };
  M['brief'] = { side: '<div class="mh-letter"><div class="r">Graz, 12. 5. 2026</div><div>Liebe Oma,</div><div class="ln"></div><div class="ln"></div><div class="ln s"></div><div>Liebe Grüße</div><div class="sig">Lena</div></div>' };
  M['nacherzaehlung'] = {};
  M['bericht'] = { before: '<div class="mh-w">' + ['Wer?', 'Was?', 'Wann?', 'Wo?', 'Wie?', 'Warum?', 'Welche Folgen?'].map(w => '<span>' + w + '</span>').join('') + '</div>' };
  M['inhaltsangabe'] = { after: X('Einleitungssatz: <i>In der Kurzgeschichte „…“ von … geht es um …</i>') };
  M['argumentieren'] = { html: F(['<b>Behauptung</b><br><small>Was meine ich?</small>', '<b>Begründung</b><br><small>Warum? (weil, denn)</small>', '<b>Beispiel</b><br><small>Woran sieht man das?</small>']) +
    X('Handys sollten in der Pause erlaubt sein, <b>weil</b> man sich dann mit Freunden verabreden kann. <b>Zum Beispiel</b> …') +
    N('<b>Leserbrief/Stellungnahme</b>: Bezug auf das Thema – Meinung – Argumente – Schluss mit Forderung oder Wunsch. Verbindungswörter: außerdem, deshalb, allerdings, erstens, schließlich. Bleib sachlich!') };
  M['eroerterung'] = { after: F(['Gegenseite<br><small>schwächstes → stärkstes</small>', 'eigene Seite<br><small>schwächstes → stärkstes</small>', 'Schluss<br><small>Abwägung, Meinung</small>']) };
  M['bewerbung'] = {};

  // ================================================================ MATHE
  M['m-zahlen'] = { after: T(['M', 'HT', 'ZT', 'T', 'H', 'Z', 'E'], [['2', '4', '5', '0', '3', '0', '0']], 'stellen') + N('2 450 300 – zwei Millionen vierhundertfünfzigtausenddreihundert') };
  M['m-addsub'] = { html: '<div class="mh-fx">' + ['<span>Summand</span> + <span>Summand</span> = <b>Summe</b>', '<span>Minuend</span> − <span>Subtrahend</span> = <b>Differenz</b>'].map(x => '<div>' + x + '</div>').join('') + '</div>' +
    N('Schriftlich: Zahlen stellengerecht untereinander (Einer unter Einer …), bei den Einern beginnen.') + N('Überschlag vorher: 487 + 316 ≈ 500 + 300 = 800.') + N('Probe: Differenz + Subtrahend = Minuend.') };
  M['m-multdiv'] = { html: '<div class="mh-fx">' + ['<span>Faktor</span> · <span>Faktor</span> = <b>Produkt</b>', '<span>Dividend</span> : <span>Divisor</span> = <b>Quotient</b>'].map(x => '<div>' + x + '</div>').join('') + '</div>' +
    N('Schriftlich multiplizieren: mit jeder Ziffer des zweiten Faktors rechnen, jede Zeile eine Stelle nach rechts rücken.') + N('Dividieren von links nach rechts; was übrig bleibt, ist der <b>Rest</b>. Probe: Quotient · Divisor + Rest = Dividend.') + N('Durch 0 kann man nicht dividieren.') };
  M['m-rechenregeln'] = { html: F(['<b>1.</b> Klammern zuerst<br><small>( ) vor [ ]</small>', '<b>2.</b> Punkt vor Strich<br><small>· und : vor + und −</small>', '<b>3.</b> von links<br>nach rechts']) +
    '<div class="mh-fx"><div>20 − <span>3 · 4</span> = 20 − 12 = <b>8</b></div><div><span>(20 − 3)</span> · 4 = 17 · 4 = <b>68</b></div></div>' };
  M['m-teilbarkeit'] = { html: G([K('Teiler von 12', '1, 2, 3, 4, 6, 12'), K('Vielfache von 4', '4, 8, 12, 16, 20 …')]) +
    Th(['teilbar durch', 'wenn …'], [['2', 'die letzte Ziffer gerade ist'], ['5', 'die letzte Ziffer 0 oder 5 ist'], ['10', 'die letzte Ziffer 0 ist'], ['3 / 9', 'die Ziffernsumme durch 3 / 9 teilbar ist']], 'narrow') +
    N('<b>Primzahlen</b> haben genau zwei Teiler: 2, 3, 5, 7, 11, 13 … <b>ggT</b> = größter gemeinsamer Teiler, <b>kgV</b> = kleinstes gemeinsames Vielfaches.') };
  const stair = (u, f) => '<div class="mh-stair">' + u.map((x, i) => '<span class="u">' + x + '</span>' + (i < f.length ? '<span class="f">· ' + f[i] + '<br>→</span>' : '')).join('') + '</div>';
  M['m-masse'] = { html: stair(['km', 'm', 'dm', 'cm', 'mm'], ['1 000', '10', '10', '10']) + stair(['t', 'kg', 'dag', 'g'], ['1 000', '100', '10']) + stair(['hl', 'l', 'dl', 'cl', 'ml'], ['100', '10', '10', '10']) +
    N('<b>Zeit</b>: 1 d = 24 h, 1 h = 60 min, 1 min = 60 s. <b>Geld</b>: 1 € = 100 c. Von der größeren zur kleineren Einheit: <b>mal</b>, umgekehrt: <b>durch</b>. 3,5 m = 3 m 50 cm = 350 cm.') };
  M['m-flaechen'] = { side: S(48, '0 0 100 62', '<rect x="14" y="8" width="70" height="40" class="shape"/>' + tx(49, 58, 'a', 'it') + tx(90, 31, 'b', 'it', 'start') + tx(49, 32, 'A = a · b', 'sm')) };
  M['m-koerper'] = { side: S(46, '0 0 100 74', '<path d="M10 28 L62 28 L62 66 L10 66 Z M10 28 L30 10 L82 10 L62 28 M82 10 L82 48 L62 66" class="shape"/><path d="M10 66 L30 48 L82 48 M30 48 L30 10" class="dash"/>' +
    tx(36, 73, 'a', 'it') + tx(76, 62, 'b', 'it') + tx(88, 32, 'c', 'it', 'start')) };
  M['m-dezimal'] = { before: T(['E', ',', 'z', 'h', 't'], [['3', ',', '4', '7', '5']], 'stellen') };
  const pie = (n, z, r) => { let p = ''; for (let i = 0; i < n; i++) { const a0 = -Math.PI / 2 + i * 2 * Math.PI / n, a1 = a0 + 2 * Math.PI / n; p += '<path d="M50 50 L' + (50 + r * Math.cos(a0)).toFixed(1) + ' ' + (50 + r * Math.sin(a0)).toFixed(1) + ' A' + r + ' ' + r + ' 0 0 1 ' + (50 + r * Math.cos(a1)).toFixed(1) + ' ' + (50 + r * Math.sin(a1)).toFixed(1) + ' Z" class="' + (i < z ? 'fill' : 'shape') + '"/>'; } return p; };
  M['m-brueche'] = { side: S(52, '0 0 150 100', pie(4, 3, 40) + '<text x="112" y="44" class="big">3</text><line x1="103" y1="52" x2="121" y2="52" class="ln"/><text x="112" y="74" class="big">4</text>' +
    tx(130, 42, 'Zähler', 'sm', 'start') + tx(130, 72, 'Nenner', 'sm', 'start')) };
  const ang = (x, deg, lab) => { const r = 26, a = deg * Math.PI / 180; const ex = x + r * Math.cos(a), ey = 40 - r * Math.sin(a); const ar = 9, ax = x + ar * Math.cos(a), ay = 40 - ar * Math.sin(a);
    return '<path d="M' + x + ' 40 L' + (x + r) + ' 40 M' + x + ' 40 L' + ex.toFixed(1) + ' ' + ey.toFixed(1) + '" class="ln"/>' + (deg === 90 ? '<path d="M' + (x + 8) + ' 40 A8 8 0 0 0 ' + x + ' 32" class="arc"/><circle cx="' + (x + 3) + '" cy="37" r="1" class="dotf"/>' :
      '<path d="M' + (x + ar) + ' 40 A' + ar + ' ' + ar + ' 0 ' + (deg > 180 ? 1 : 0) + ' 0 ' + ax.toFixed(1) + ' ' + ay.toFixed(1) + '" class="arc"/>') + tx(x + 6, 58, lab, 'sm'); };
  M['m-winkel'] = { after: S(135, '0 0 300 62', ang(12, 45, 'spitz') + ang(72, 90, 'recht') + ang(124, 135, 'stumpf') + ang(190, 180, 'gestreckt') + ang(262, 250, 'erhaben')) };
  M['m-prozent'] = { after: '<div class="mh-fx"><div><b>A</b> = G · p : 100</div><div><b>p</b> = A : G · 100</div><div><b>G</b> = A · 100 : p</div></div>' + X(C(['1 % = 0,01', '10 % = <span class="fr"><span>1</span><span>10</span></span>', '25 % = <span class="fr"><span>1</span><span>4</span></span>', '50 % = <span class="fr"><span>1</span><span>2</span></span>', '100 % = das Ganze'])) };
  M['m-schlussrechnung'] = { html: G([K('direkt proportional', 'je mehr, desto mehr<br><small>3 Hefte 6 € → 1 Heft 2 € → 5 Hefte 10 €</small>'), K('indirekt proportional', 'je mehr, desto weniger<br><small>2 Maler 6 h → 1 Maler 12 h → 3 Maler 4 h</small>')]) +
    F(['1. Was weiß ich?', '2. Schluss auf die Einheit<br><small>direkt : / indirekt ·</small>', '3. Schluss auf die Menge<br><small>direkt · / indirekt :</small>']) };
  M['m-gleichungen'] = { side: S(52, '0 0 110 64', '<path d="M55 12 L55 54 M38 58 L72 58 M12 16 L98 16" class="ln"/><path d="M12 16 L4 34 L20 34 Z M98 16 L90 34 L106 34 Z" class="shape"/><circle cx="55" cy="12" r="2.5" class="dotf"/>' + tx(12, 46, '3x + 5', 'sm') + tx(98, 46, '20', 'sm')),
    after: '<div class="mh-fx col"><div>3x + 5 = 20 <span>| − 5</span></div><div>3x = 15 <span>| : 3</span></div><div><b>x = 5</b> &nbsp; Probe: 3 · 5 + 5 = 20 ✓</div></div>' };
  M['m-vierecke'] = { html: '<div class="mh-figs">' + [
    ['<path d="M8 50 L72 50 L50 10 Z" class="shape"/><path d="M50 10 L50 50" class="dash"/>' + tx(40, 60, 'g', 'it') + tx(54, 34, 'h', 'it', 'start'), 'Dreieck', 'A = g · h : 2'],
    ['<path d="M8 50 L60 50 L74 12 L22 12 Z" class="shape"/><path d="M22 12 L22 50" class="dash"/>' + tx(34, 60, 'g', 'it') + tx(26, 34, 'h', 'it', 'start'), 'Parallelogramm', 'A = g · h'],
    ['<path d="M6 50 L76 50 L58 12 L24 12 Z" class="shape"/><path d="M24 12 L24 50" class="dash"/>' + tx(41, 60, 'a', 'it') + tx(41, 8, 'c', 'it') + tx(28, 34, 'h', 'it', 'start'), 'Trapez', 'A = (a + c) · h : 2'],
    ['<path d="M40 4 L70 30 L40 56 L10 30 Z" class="shape"/><path d="M10 30 L70 30 M40 4 L40 56" class="dash"/>' + tx(56, 27, 'e', 'it') + tx(44, 46, 'f', 'it', 'start'), 'Raute, Deltoid', 'A = e · f : 2']]
    .map(f => '<div>' + S(30, '0 0 80 62', f[0]) + '<b>' + f[1] + '</b><span>' + f[2] + '</span></div>').join('') + '</div>' + N('Die Höhe h steht immer normal (im rechten Winkel) auf der Grundlinie.') };
  M['m-statistik'] = { after: X('Werte: 3, 5, 5, 7, 10 → Mittelwert (3 + 5 + 5 + 7 + 10) : 5 = <b>6</b>, Median <b>5</b>, Spannweite 10 − 3 = <b>7</b>, Modalwert <b>5</b>') };
  let nl = '<path d="M4 20 L196 20" class="ln"/><path d="M196 20 l-5 -3 v6 z" class="dotf"/>';
  for (let i = -5; i <= 5; i++) { const x = 100 + i * 17; nl += '<path d="M' + x + ' 16 L' + x + ' 24" class="ln"/>' + tx(x, 34, i < 0 ? '−' + (-i) : i, 'sm'); }
  M['m-negative'] = { before: S(120, '0 0 200 38', nl + '<path d="M66 12 Q83 2 100 12" class="arc"/>' + tx(83, 6, '|−2| = 2', 'xs')) };
  M['m-potenzen'] = {};
  M['m-terme'] = {};
  M['m-pythagoras'] = { side: S(44, '0 0 100 70', '<path d="M10 60 L90 60 L90 10 Z" class="shape"/><path d="M82 60 L82 52 L90 52" class="ln"/>' + tx(50, 69, 'b', 'it') + tx(96, 38, 'a', 'it', 'start') + tx(44, 30, 'c', 'it b')) };
  M['m-kreis'] = { side: S(40, '0 0 90 80', '<circle cx="45" cy="40" r="34" class="shape"/><path d="M11 40 L79 40" class="dash"/><path d="M45 40 L69 16" class="ln"/><circle cx="45" cy="40" r="2" class="dotf"/>' + tx(60, 24, 'r', 'it', 'end') + tx(28, 50, 'd', 'it') + tx(45, 50, 'M', 'sm')) };
  M['m-zinsen'] = {};
  let ks = '<path d="M8 76 L108 76 M28 92 L28 4" class="ln"/><path d="M108 76 l-5 -3 v6 z M28 4 l-3 5 h6 z" class="dotf"/>';
  for (let i = 1; i <= 3; i++) ks += '<path d="M' + (28 + i * 18) + ' 74 L' + (28 + i * 18) + ' 78 M26 ' + (76 - i * 18) + ' L30 ' + (76 - i * 18) + '" class="ln"/>' + tx(28 + i * 18, 86, i, 'xs') + tx(22, 79 - i * 18, i, 'xs');
  M['m-koordinaten'] = { side: S(42, '0 0 112 96', ks + '<path d="M82 76 L82 40 L28 40" class="dash"/><circle cx="82" cy="40" r="2.6" class="dotf"/>' + tx(86, 36, 'P(3 | 2)', 'sm', 'start') + tx(110, 80, 'x', 'it') + tx(36, 6, 'y', 'it')) };
  M['m-funktionen'] = { side: S(44, '0 0 110 96', ks.replace(/86|79/g, m => m) + '<path d="M28 58 L100 22" class="ln acc"/><circle cx="28" cy="58" r="2.4" class="dotf"/><path d="M64 40 L82 40 L82 31" class="dash"/>' + tx(73, 47, '1', 'xs') + tx(86, 38, 'k', 'it', 'start') + tx(20, 60, 'd', 'it')) };
  M['m-grundbegriffe'] = { before: S(150, '0 0 300 30', '<path d="M10 14 L80 14" class="ln"/><circle cx="10" cy="14" r="2.2" class="dotf"/><circle cx="80" cy="14" r="2.2" class="dotf"/>' + tx(45, 27, 'Strecke AB', 'sm') +
    '<path d="M110 14 L190 14" class="ln"/><circle cx="110" cy="14" r="2.2" class="dotf"/><path d="M190 14 l-5 -3 v6 z" class="dotf"/>' + tx(150, 27, 'Strahl', 'sm') +
    '<path d="M215 14 L292 14" class="ln"/><path d="M292 14 l-5 -3 v6 z M215 14 l5 -3 v6 z" class="dotf"/>' + tx(253, 27, 'Gerade', 'sm')) };
  M['m-massstab'] = { before: '<div class="mh-fx"><div>Plan <span>· Maßstabszahl</span> → Wirklichkeit</div><div>Wirklichkeit <span>: Maßstabszahl</span> → Plan</div></div>' };
  M['m-zahlensysteme'] = { before: T(['I', 'V', 'X', 'L', 'C', 'D', 'M'], [['1', '5', '10', '50', '100', '500', '1000']], 'stellen') };
  M['m-symmetrie'] = { side: S(44, '0 0 100 70', '<path d="M50 4 L50 66" class="dash"/><path d="M14 54 L38 54 L30 18 Z" class="shape"/><path d="M86 54 L62 54 L70 18 Z" class="fill"/><path d="M30 18 L70 18" class="dash"/>' + tx(26, 15, 'A', 'sm') + tx(76, 15, 'A′', 'sm')) };
  M['m-kombinatorik'] = { side: S(52, '0 0 120 84', '<circle cx="8" cy="40" r="3" class="dotf"/>' + [[20, 'Hose 1'], [60, 'Hose 2']].map(([y, h]) => '<path d="M8 40 L44 ' + y + '" class="ln"/><circle cx="46" cy="' + y + '" r="2.4" class="dotf"/>' + tx(38, y < 40 ? y - 5 : y + 9, h, 'xs') +
    [[-12, 'rot'], [0, 'blau'], [12, 'grün']].map(([d, c]) => '<path d="M46 ' + y + ' L84 ' + (y + d) + '" class="ln"/>' + tx(88, y + d + 2.5, c, 'xs', 'start')).join('')).join('') + tx(60, 82, '2 · 3 = 6 Möglichkeiten', 'xs b')) };
  M['m-dreiecke'] = {};
  M['m-funktionen2'] = { side: S(46, '0 0 100 92', '<path d="M8 80 L96 80 M20 90 L20 4" class="ln"/><path d="M20 70 L92 26" class="ln acc"/><path d="M30 6 Q44 64 92 72" class="dash"/><path d="M36 12 Q48 100 60 12" class="ln"/>' +
    tx(86, 22, 'linear', 'xs b') + tx(80, 66, 'indirekt', 'xs') + tx(48, 8, 'Parabel', 'xs')) };
  M['m-haeufigkeiten'] = {};
  M['m-formeln'] = { after: X('Taxi: Grundgebühr 4 € + 2 € pro km → <b>K = 4 + 2 · x</b> &nbsp; (x = 5 km: K = 4 + 2 · 5 = 14 €)') };
  M['m-statistik2'] = { after: S(150, '0 0 300 46', '<path d="M30 20 L90 20 M200 20 L270 20 M30 12 L30 28 M270 12 L270 28" class="ln"/><rect x="90" y="8" width="110" height="24" class="fill"/><path d="M140 8 L140 32" class="ln acc"/>' +
    tx(30, 43, 'Min', 'xs') + tx(90, 43, 'q₁', 'xs') + tx(140, 43, 'Median', 'xs') + tx(200, 43, 'q₃', 'xs') + tx(270, 43, 'Max', 'xs')) };
  M['m-kreisteile'] = { side: S(40, '0 0 90 80', '<circle cx="45" cy="44" r="32" class="shape"/><path d="M45 44 L77 44 A32 32 0 0 0 22.4 21.4 Z" class="fill"/>' + tx(58, 38, 'α', 'it') + tx(60, 52, 'r', 'it')) };
  M['m-wahrscheinlichkeit'] = { after: X('P = <span class="fr"><span>günstige Fälle</span><span>mögliche Fälle</span></span> &nbsp; Würfel: P(gerade Zahl) = <span class="fr"><span>3</span><span>6</span></span> = <span class="fr"><span>1</span><span>2</span></span> = 50 %') };
  M['m-netze'] = { side: S(38, '0 0 80 62', [[20, 2], [2, 20], [20, 20], [38, 20], [56, 20], [20, 40]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="18" height="18" class="shape"/>').join('')) };
  M['m-prisma'] = {};
  M['m-aehnlichkeit'] = {};

  // ================================================================ ENGLISCH
  M['e-be'] = { html: '<div class="mh-two">' + Th(['', 'to be'], [['I', '<b>am</b> (I\'m)'], ['you', '<b>are</b> (you\'re)'], ['he / she / it', '<b>is</b> (he\'s)'], ['we / you / they', '<b>are</b> (we\'re)']]) +
    '<div>' + G([K('Verneinung', 'I\'m <b>not</b> · he <b>isn\'t</b> · they <b>aren\'t</b>'), K('Frage', '<b>Are</b> you ready? – Yes, I am. / No, I\'m not.<br><b>Is</b> she twelve? – Yes, she is.')], 'one') + '</div></div>' };
  M['e-havegot'] = { html: '<div class="mh-two">' + Th(['', 'have got'], [['I / you / we / they', '<b>have got</b> (\'ve got)'], ['he / she / it', '<b>has got</b> (\'s got)']]) +
    '<div>' + G([K('Verneinung', 'I <b>haven\'t got</b> a dog. He <b>hasn\'t got</b> a bike.'), K('Frage', '<b>Have</b> you <b>got</b> a pet? – Yes, I have.<br><b>Has</b> she <b>got</b> a phone? – No, she hasn\'t.')], 'one') + '</div></div>' };
  M['e-pronouns'] = { html: Th(['Subjekt', 'Objekt', 'Begleiter', 'allein', 'Reflexiv'], [
    ['I', 'me', 'my', 'mine', 'myself'], ['you', 'you', 'your', 'yours', 'yourself'], ['he', 'him', 'his', 'his', 'himself'], ['she', 'her', 'her', 'hers', 'herself'], ['it', 'it', 'its', '–', 'itself'],
    ['we', 'us', 'our', 'ours', 'ourselves'], ['you', 'you', 'your', 'yours', 'yourselves'], ['they', 'them', 'their', 'theirs', 'themselves']], 'compact') +
    X('<b>She</b> likes <b>him</b>. – This is <b>my</b> bag. – The bag is <b>mine</b>. – She hurt <b>herself</b>. – <b>each other</b> = einander') };
  M['e-nouns'] = {};
  M['e-thereis'] = { html: G([K('there is <small>(Einzahl)</small>', 'There\'s a cat in the garden.<br>Is there a …? – Yes, there is. / No, there isn\'t.'), K('there are <small>(Mehrzahl)</small>', 'There are two books on the desk.<br>Are there any …? – Yes, there are. / No, there aren\'t.')]) +
    G([K('some', 'in bejahten Sätzen und bei Angeboten/Bitten:<br>Would you like <b>some</b> tea?'), K('any', 'in verneinten Sätzen und Fragen:<br>There aren\'t <b>any</b> apples. Are there <b>any</b> eggs?')]) };
  M['e-presentsimple'] = { html: L('<b>Present simple</b> für Gewohnheiten, Regelmäßiges und Tatsachen: I play football every Monday.') +
    '<div class="mh-s">he / she / it – das <b>s</b> muss mit! &nbsp; she play<b>s</b> · he watch<b>es</b> · it fl<b>ies</b> · he go<b>es</b> · she ha<b>s</b></div>' +
    G([K('Verneinung', 'I / you / we / they <b>don\'t</b> play<br>he / she / it <b>doesn\'t</b> play (ohne s!)'), K('Frage', '<b>Do</b> you play …? – Yes, I do.<br><b>Does</b> she play …? – No, she doesn\'t.')]) +
    X('Signalwörter: ' + C(['always', 'usually', 'often', 'sometimes', 'never', 'every day', 'on Mondays'])) + N('Häufigkeitswörter stehen vor dem Verb, aber nach am/is/are: I often play. She is always late.') };
  M['e-progressive'] = { html: L('<b>Present progressive</b>: Was passiert <b>gerade jetzt</b>? &nbsp; <b>am / is / are + Verb-ing</b>') +
    T(['', 'present simple', 'present progressive'], [['wann?', 'Gewohnheit, regelmäßig', 'gerade jetzt'], ['Signalwörter', 'every day, often, never', 'now, at the moment, Look!, Listen!'], ['Beispiel', 'I <b>play</b> football every Monday.', 'Look! It <b>is raining</b>.']]) +
    N('Schreibung: make → making, swim → swimming, sit → sitting, lie → lying. Verneinung: I\'m not reading. Frage: Are you listening? – Yes, I am.') };
  M['e-wordorder'] = { html: '<div class="mh-wo">' + [['S', 'Subject', 'We'], ['V', 'Verb', 'play'], ['O', 'Object', 'football'], ['P', 'Place', 'in the park'], ['T', 'Time', 'every day']].map(x => '<div><b>' + x[0] + '</b><small>' + x[1] + '</small><span>' + x[2] + '</span></div>').join('') + '</div>' +
    N('Merke: <b>Ort vor Zeit</b> (place before time). Häufigkeitswörter stehen <b>vor</b> dem Vollverb, aber <b>nach</b> am/is/are: I often play. He is never late.') + X('Deutsch: „Am Montag spiele ich Fußball.“ → Englisch: <b>I play football on Monday.</b>') };
  M['e-questions'] = { before: '<div class="mh-wo q">' + [['?', 'question word', 'Where'], ['A', 'do / does / did', 'do'], ['S', 'subject', 'you'], ['V', 'verb', 'live?']].map(x => '<div><b>' + x[0] + '</b><small>' + x[1] + '</small><span>' + x[2] + '</span></div>').join('') + '</div>' };
  M['e-prepositions'] = { html: '<div class="mh-two">' + Th(['Zeit', '', ''], [['<b>at</b>', 'Uhrzeit, Feiertage', 'at 7 o\'clock, at night, at the weekend, at Christmas'], ['<b>on</b>', 'Tag, Datum', 'on Monday, on 3rd May, on my birthday'], ['<b>in</b>', 'Monat, Jahreszeit, Jahr, Tageszeit', 'in July, in winter, in 2025, in the morning']]) + '</div>' +
    G([K('Ort', 'in · on · under · next to · behind · in front of · between · opposite · above<br>at home, at school, at the station'), K('Verkehrsmittel', 'by bus, by car, by bike – aber <b>on foot</b>')]) };
  M['e-modals'] = { html: L('Modalverben: <b>kein s</b> bei he/she/it, danach die Grundform: She can swim.') + Th(['', 'bedeutet', 'Beispiel'], [
    ['can / can\'t', 'können, dürfen / nicht können', 'I can ride a bike. Can I go out?'], ['must', 'müssen', 'I must go now.'], ['<b>mustn\'t</b>', '<b>nicht dürfen!</b>', 'You mustn\'t run here.'],
    ['have to / has to', 'müssen', 'He has to help at home.'], ['<b>don\'t have to</b>', '<b>nicht müssen</b>', 'I don\'t have to get up early.'], ['should', 'sollte – Ratschlag', 'You should go to bed.'],
    ['could', 'konnte, könnte', 'Could you help me?'], ['may / might', 'vielleicht', 'It might rain.']], 'compact') };
  M['e-irregular'] = { after: Th(['Grundform', 'past simple', 'past participle'], [['go', 'went', 'gone'], ['see', 'saw', 'seen'], ['buy', 'bought', 'bought'], ['take', 'took', 'taken'], ['write', 'wrote', 'written']], 'compact narrow') };
  M['e-pastsimple'] = { html: L('<b>Past simple</b>: abgeschlossen in der Vergangenheit – yesterday, last week, two days ago, in 2020.') +
    G([K('regelmäßig: + ed', 'play – played · live – lived<br>stop – stopped · study – studied'), K('unregelmäßig: lernen!', 'go – went · see – saw · have – had<br>to be: I/he/she/it <b>was</b>, we/you/they <b>were</b>')]) +
    G([K('Verneinung', '<b>didn\'t</b> + Grundform: I didn\'t go.'), K('Frage', '<b>Did</b> + Grundform: Did you see it? – Yes, I did.')]) + N('Nach did steht nie die past-Form!') };
  M['e-pastprogressive'] = { side: S(56, '0 0 130 50', '<path d="M6 30 L124 30" class="ln"/><rect x="16" y="22" width="92" height="16" class="fill"/>' + tx(62, 34, 'was having a shower', 'xs') + '<path d="M80 6 L80 44" class="ln acc"/>' + tx(80, 50, 'the phone rang', 'xs b')) };
  M['e-future'] = { html: Th(['', 'wann?', 'Beispiel'], [['<b>going to</b>', 'Pläne, Absichten; man sieht es schon', 'I\'m going to visit my aunt. Look! It\'s going to rain.'], ['<b>will</b>', 'Vermutung, spontane Entscheidung, Angebot, Versprechen', 'I think it will be sunny. I\'ll get it! I\'ll help you.'], ['<b>present progressive</b>', 'fest vereinbarter Termin', 'I\'m meeting Tom at 3 tomorrow.']]) +
    N('Verneinung: won\'t. Signalwörter: tomorrow, next week, soon, in 2030.') };
  M['e-presentperfect'] = { after: G([K('for + Zeitdauer', 'for two years, for an hour'), K('since + Zeitpunkt', 'since 2020, since Monday')]) };
  M['e-pastperfect'] = { side: S(60, '0 0 140 44', '<path d="M6 22 L134 22" class="ln"/><path d="M134 22 l-5 -3 v6 z" class="dotf"/><circle cx="40" cy="22" r="3.5" class="dotf"/><circle cx="92" cy="22" r="3.5" class="dot"/>' + tx(40, 12, 'had left', 'xs b') + tx(40, 38, 'früher', 'xs') + tx(92, 12, 'arrived', 'xs') + tx(124, 38, 'now', 'xs')) };
  M['e-comparison'] = { html: Th(['', 'Grundform', 'Komparativ', 'Superlativ'], [['kurz', 'small', 'small<b>er</b>', 'the small<b>est</b>'], ['', 'big · happy', 'bi<b>gg</b>er · happ<b>i</b>er', 'the biggest · the happiest'], ['lang', 'interesting', '<b>more</b> interesting', 'the <b>most</b> interesting'],
    ['unregelmäßig', 'good · bad', 'better · worse', 'the best · the worst'], ['', 'many/much · little', 'more · less', 'the most · the least']], 'compact') +
    X('Tom is taller <b>than</b> Ben. · Lisa is <b>as</b> tall <b>as</b> Mia. · The film is <b>not as</b> good <b>as</b> the book.') };
  M['e-quantity'] = { html: G([K('zählbar (countable)', 'apples, friends<br><b>many</b> · <b>a few</b> · how many?'), K('nicht zählbar (uncountable)', 'water, money, time, homework, information<br><b>much</b> · <b>a little</b> · how much?')]) +
    N('<b>a lot of / lots of</b> geht immer.') + Th(['', 'some-', 'any-', 'no-', 'every-'], [['Person', 'somebody', 'anybody', 'nobody', 'everybody'], ['Ding', 'something', 'anything', 'nothing', 'everything'], ['Ort', 'somewhere', 'anywhere', 'nowhere', 'everywhere']], 'compact') +
    N('some- in bejahten Sätzen, any- in Fragen und Verneinungen. Nach nobody/nothing kein not!') };
  M['e-adverbs'] = { before: G([K('adjective → Nomen', 'a <b>quick</b> runner'), K('adverb → Verb', 'She runs <b>quickly</b>.')]) };
  M['e-relative'] = { html: Th(['', 'für', 'Beispiel'], [['who', 'Personen', 'the girl <b>who</b> lives next door'], ['which', 'Dinge, Tiere', 'the book <b>which</b> I bought'], ['that', 'Personen und Dinge', 'the bike <b>that</b> was stolen'], ['whose', 'dessen / deren', 'the boy <b>whose</b> dog is lost'], ['where', 'Orte', 'the town <b>where</b> I was born']], 'compact') +
    N('Ist das Relativpronomen <b>Objekt</b>, kann es wegfallen: the book (that) I read. <b>Zusatzinformation</b> zwischen Beistrichen – nur who/which, nie that: My sister, who lives in Graz, is a nurse.') };
  M['e-conditionals'] = { html: Th(['', 'if-Satz', 'Hauptsatz', 'Beispiel'], [['Typ 1 <small>gut möglich</small>', 'present simple', 'will + Grundform', 'If it rains, we will stay at home.'], ['Typ 2 <small>nur vorgestellt</small>', 'past simple', 'would + Grundform', 'If I had a million euros, I would buy a house.'], ['Typ 3 <small>vorbei</small>', 'past perfect', 'would have + 3. Form', 'If you had studied, you would have passed.']], 'compact') +
    N('Im if-Satz steht <b>nie will oder would</b>! <b>unless</b> = wenn … nicht. Beistrich, wenn der if-Satz vorne steht.') };
  M['e-passive'] = { html: L('Passiv: Wichtig ist, <b>was passiert</b>. Bildung: <b>be</b> in der passenden Zeit + <b>past participle</b>.') + Th(['Zeit', 'Beispiel'], [['present', 'English <b>is spoken</b> here.'], ['past', 'The bridge <b>was built</b> in 1900.'], ['future', 'The results <b>will be announced</b> tomorrow.'], ['present perfect', 'My bike <b>has been stolen</b>!'], ['mit Modalverb', 'It <b>can be done</b>.']], 'compact') +
    N('Wer es tut, steht mit <b>by</b>: The book was written by J. K. Rowling.') };
  M['e-reported'] = { html: L('Nach said/told rückt die Zeit meist <b>eine Stufe zurück</b>:') + '<div class="mh-two">' + Th(['direkt', 'indirekt'], [['am / is', 'was'], ['are', 'were'], ['present simple', 'past simple'], ['will / can', 'would / could'], ['past simple, present perfect', 'past perfect']], 'compact') +
    Th(['direkt', 'indirekt'], [['I / my', 'he, she / his, her'], ['here', 'there'], ['today', 'that day'], ['tomorrow', 'the next day'], ['yesterday', 'the day before']], 'compact') + '</div>' +
    N('<b>say</b> something, aber <b>tell</b> somebody. Fragen: He asked <b>if</b> I was ready. Aufforderungen: She told me <b>to</b> sit down / <b>not to</b> be late.') };
  M['e-gerund'] = { html: G([K('-ing (gerund)', 'like, love, hate, enjoy, finish, stop, mind, avoid, practise, can\'t stand<br><i>I enjoy <b>reading</b>.</i><br>nach Präpositionen: good at <b>drawing</b>'), K('to + Grundform', 'want, decide, hope, plan, need, learn, forget, promise, would like<br><i>I want <b>to go</b> home.</i>')]) + N('Als Subjekt oft -ing: <b>Swimming</b> is healthy.') };
  M['e-numbers'] = { side: S(40, '0 0 90 90', '<circle cx="45" cy="45" r="38" class="shape"/><path d="M45 7 L45 83" class="dash"/>' + tx(66, 48, 'past', 'sm b') + tx(24, 48, 'to', 'sm b') + tx(45, 20, "o'clock", 'xs') + tx(45, 78, 'half past', 'xs') + '<circle cx="45" cy="45" r="2" class="dotf"/>') };
  M['e-w-email'] = { html: '<div class="mh-two">' + Th(['', 'informal'], [['Anrede', 'Hi Tom, / Dear Lisa,'], ['Einstieg', 'Thanks for your email!'], ['Schluss', 'Write soon! / See you soon!'], ['Gruß', 'Love, / Best wishes,']], 'compact') +
    Th(['', 'formal'], [['Anrede', 'Dear Sir or Madam, / Dear Mr Brown,'], ['Einstieg', 'I am writing to …'], ['Schluss', 'I look forward to hearing from you.'], ['Gruß', 'Yours faithfully, / Yours sincerely,']], 'compact') + '</div>' +
    N('Informal: Kurzformen erlaubt (I\'m, don\'t). Formal: keine Kurzformen! Name unbekannt → Yours faithfully, Name bekannt → Yours sincerely.') };
  M['e-w-story'] = { side: curve.replace('Einleitung', 'beginning').replace('Hauptteil', 'middle').replace('Höhepunkt', 'climax').replace('Schluss', 'end') };
  M['e-w-opinion'] = { after: F(['introduction<br><small>topic, opinion</small>', 'arguments<br><small>+ examples</small>', 'counter-argument', 'conclusion']) };


  // ---------------------------------------------------------------- weitere Skizzen und Tabellen
  M['pronomen'] = { html: L('<b>Pronomen</b> (Fürwörter) stehen für ein Nomen oder begleiten es.') + Th(['Art', 'Wozu?', 'Beispiele'], [['Personalpronomen', 'steht für eine Person/Sache', 'ich, du, er, sie, es, wir, ihr, sie (mich, dir, ihm …)'], ['Possessivpronomen', 'wem gehört etwas?', 'mein, dein, sein, ihr, unser, euer'],
    ['Reflexivpronomen', 'bezieht sich auf das Subjekt', 'ich wasche <b>mich</b>'], ['Demonstrativpronomen', 'weist hin', 'dieser, jener, der da'], ['Relativpronomen', 'leitet einen Relativsatz ein', 'der, die, das, welcher']], 'compact') };
  M['indirekte-rede'] = { before: '<div class="mh-fx col"><div>Tom sagt: „Ich <b>bin</b> müde.“ <span>→</span> Tom sagt, er <b>sei</b> müde.</div><div>Lea fragt: „Kommst du mit?“ <span>→</span> Lea fragt, <b>ob</b> er mitkomme.</div></div>' };
  M['konjunktiv-2'] = { after: Th(['Mitvergangenheit', 'Konjunktiv II'], [['hatte', 'hätte'], ['war', 'wäre'], ['kam', 'käme'], ['konnte', 'könnte'], ['spielte', 'würde spielen']], 'compact narrow') };
  M['m-koerper2'] = { side: S(56, '0 0 150 70', '<ellipse cx="22" cy="12" rx="16" ry="5" class="shape"/><path d="M6 12 L6 56 M38 12 L38 56" class="ln"/><path d="M6 56 A16 5 0 0 0 38 56" class="ln"/><path d="M6 56 A16 5 0 0 1 38 56" class="dash"/>' +
    '<path d="M75 8 L59 56 M75 8 L91 56" class="ln"/><path d="M59 56 A16 5 0 0 0 91 56" class="ln"/><path d="M59 56 A16 5 0 0 1 91 56" class="dash"/><path d="M75 8 L75 56" class="dash"/>' +
    '<circle cx="126" cy="34" r="20" class="shape"/><path d="M106 34 A20 6 0 0 0 146 34" class="ln"/><path d="M126 34 L146 34" class="dash"/>' + tx(22, 68, 'Zylinder', 'xs') + tx(75, 68, 'Kegel', 'xs') + tx(126, 68, 'Kugel', 'xs') + tx(136, 31, 'r', 'it')) };
  M['m-dreieckkonstruktion'] = { side: S(46, '0 0 100 74', '<path d="M8 62 L92 62 L60 12 Z" class="shape"/>' + tx(5, 70, 'A', 'sm') + tx(96, 70, 'B', 'sm') + tx(60, 8, 'C', 'sm') + tx(50, 71, 'c', 'it') + tx(81, 36, 'a', 'it') + tx(28, 34, 'b', 'it') +
    tx(19, 59, 'α', 'xs') + tx(83, 59, 'β', 'xs') + tx(60, 24, 'γ', 'xs')) };
  M['m-viereckkonstruktion'] = { side: S(46, '0 0 100 74', '<path d="M8 62 L84 62 L94 14 L22 18 Z" class="shape"/><path d="M8 62 L94 14 M84 62 L22 18" class="dash"/>' + tx(5, 70, 'A', 'sm') + tx(88, 70, 'B', 'sm') + tx(97, 12, 'C', 'sm', 'start') + tx(18, 14, 'D', 'sm') +
    tx(46, 71, 'a', 'it') + tx(94, 40, 'b', 'it', 'start') + tx(58, 12, 'c', 'it') + tx(10, 40, 'd', 'it')) };
  M['m-wachstum'] = { before: '<div class="mh-fx"><div>+20 % <span>→</span> <b>· 1,2</b></div><div>−15 % <span>→</span> <b>· 0,85</b></div><div>+10 %, dann −10 % <span>→</span> 1,1 · 0,9 = <b>0,99</b></div></div>' };
  M['e-confusing'] = { html: '<div class="mh-two">' + Th(['make', 'do'], [['a cake, a mistake', 'homework, sport'], ['friends, a noise', 'the shopping, your best']], 'compact') +
    Th(['', ''], [['say', 'something'], ['tell', 'somebody something'], ['borrow / lend', 'ausborgen / verleihen'], ['bring / take', 'herbringen / mitnehmen'], ['learn / teach', 'lernen / unterrichten'], ['win / earn', 'gewinnen / verdienen']], 'compact') + '</div>' +
    '<p class="mh-lead"><b>False friends</b> – sehen deutsch aus, bedeuten aber etwas anderes:</p><div class="mh-pairs">' +
    [['become', 'werden', 'bekommen = get'], ['handy', 'praktisch', 'Handy = mobile'], ['chef', 'Koch', 'Chef = boss'], ['gift', 'Geschenk', 'Gift = poison'], ['also', 'auch', 'also = so'], ['actually', 'eigentlich', 'aktuell = current']]
      .map(p => '<div class="mh-pair"><span><b>' + p[0] + '</b><small>= ' + p[1] + '</small></span><i>≠</i><span><small>' + p[2] + '</small></span></div>').join('') + '</div>' };
  M['e-linking'] = { html: Th(['wozu?', 'linking words'], [['verbinden', 'and, but, or'], ['Grund / Folge', 'because (weil) · so (deshalb)'], ['Zeit', 'when, before, after, while'], ['Bedingung / Gegensatz', 'if (falls) · although (obwohl) · however (jedoch)'],
    ['Reihenfolge', 'first, then, after that, finally'], ['Meinung, Schluss', 'for example · on the one hand … on the other hand · in my opinion · in conclusion']], 'compact') + N('<b>However</b> steht oft am Satzanfang, danach ein Beistrich.') };


  // ---------------------------------------------------------------- Englisch 3. Klasse (Buch)
  M['e-revision3'] = { html: T(['', 'present simple', 'past simple'], [['wann?', 'Gewohnheit, Tatsache', 'abgeschlossen in der Vergangenheit'], ['Signalwörter', 'every day, usually, often, never', 'yesterday, last week, ago, in 2020'],
    ['bejaht', 'I play – she play<b>s</b>', 'I play<b>ed</b> – I <b>went</b>'], ['verneint', 'I <b>don\'t</b> play – she <b>doesn\'t</b> play', 'I <b>didn\'t</b> play / go'], ['Frage', '<b>Do</b> you play? <b>Does</b> she play?', '<b>Did</b> you play / go?']], 'compact') +
    N('Nach <b>does</b> und <b>did</b> steht immer die Grundform: Did you <u>go</u>? – nicht: Did you went?') };
  M['e-cond12'] = { html: Th(['', 'if-Satz', 'Hauptsatz', 'Beispiel'], [['Typ 1 <small>gut möglich</small>', 'present simple', 'will + Grundform', 'If it rains, we will stay at home.'], ['Typ 2 <small>nur vorgestellt</small>', 'past simple', 'would + Grundform', 'If I had a dog, I would walk it every day.']], 'compact') +
    G([K('unless = if … not', 'Unless you hurry, you will miss the bus.<br><small>= If you don\'t hurry, …</small>'), K('If I were you …', 'An deiner Stelle …<br>If I were you, I would say sorry.')]) +
    N('Im if-Satz steht <b>nie will oder would</b>! Steht der if-Satz vorne, kommt ein Beistrich.') };
  M['e-permission'] = { html: Th(['', 'dürfen', 'können'], [['jetzt', 'I <b>am allowed to</b> … / My parents <b>let</b> me …', 'I <b>can</b> …'], ['früher', 'I <b>was allowed to</b> …', 'I <b>could</b> … / I <b>was able to</b> …'],
    ['Zukunft', 'I <b>will be allowed to</b> …', 'I <b>will be able to</b> …'], ['present perfect', 'I <b>have been allowed to</b> …', 'I <b>have been able to</b> …']], 'compact') +
    N('<b>could</b> = konnte (allgemein), <b>was able to</b> = hat es in einer bestimmten Situation geschafft.') + N('Nach can, could und let steht die Grundform ohne to: My mum lets me <u>go</u>.') };
  M['e-ppcont'] = { html: L('<b>have / has been + -ing</b>: Etwas hat früher begonnen und dauert noch an.') +
    S(120, '0 0 240 40', '<path d="M6 22 L232 22" class="ln"/><path d="M232 22 l-5 -3 v6 z" class="dotf"/><circle cx="50" cy="22" r="3.5" class="dotf"/><rect x="50" y="15" width="140" height="14" class="fill"/><path d="M190 8 L190 36" class="ln acc"/>' +
      tx(50, 10, 'since 9 o\'clock', 'xs') + tx(120, 25, 'I have been waiting …', 'xs') + tx(190, 6, 'now', 'xs b') + tx(120, 39, 'for three hours', 'xs')) +
    G([K('present perfect continuous', 'Wie lange schon? Dauer:<br>I have been reading for two hours.'), K('present perfect', 'Ergebnis, wie viele:<br>I have read three books.')]) +
    N('<b>for</b> + Zeitdauer, <b>since</b> + Zeitpunkt. Frage: <b>How long</b> have you been …?') };
  M['e-passive3'] = { html: L('Im Passiv ist wichtig, <b>was passiert</b>. Bildung: <b>be + 3. Form</b> (past participle).') + Th(['', 'Passiv', 'Beispiel'], [['present', 'am / is / are + 3. Form', 'Cheese <b>is made</b> from milk.'], ['past', 'was / were + 3. Form', 'The bridge <b>was built</b> in 1900.']], 'compact') +
    '<div class="mh-fx col"><div>Aktiv: <span>Shakespeare</span> wrote <b>Romeo and Juliet</b>.</div><div>Passiv: <b>Romeo and Juliet</b> was written <span>by Shakespeare</span>.</div></div>' + N('Verneinung: isn\'t / wasn\'t made. Frage: Is it made …? Was it built …?') };

  // ---------------------------------------------------------------- Zusammenbau
  UB.MERK = M;
  UB.merkBody = function (t) {
    const e = M[t.id] || {};
    if (e.html) return e.html;
    const auto = autoBody(t.merk);
    const main = (e.before || '') + auto + (e.after || '');
    return e.side ? '<div class="mh-split"><div>' + main + '</div><div class="mh-side">' + e.side + '</div></div>' : main;
  };
})();
