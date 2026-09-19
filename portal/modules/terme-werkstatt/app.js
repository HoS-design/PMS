'use strict';
const lessons = [
  {title:'Was ist ein Term?', text:'<p>Ein <strong>Term</strong> ist ein mathematischer Ausdruck.</p><p>Eine Zahl, ein Buchstabe oder eine Rechnung können ein Term sein.</p><div class="example">5<br>a<br>a + 2</div><p>Ein Term enthält <strong>kein Gleichheitszeichen</strong>.</p><p>Ein Buchstabe ist eine <strong>Variable</strong>. Er steht für eine Zahl.</p>'},
  {title:'Terme unterscheiden', text:'<p>Manche Terme bestehen nur aus Zahlen. Andere enthalten Variablen.</p><div class="example">3 + 2 → nur Zahlen<br>3 + a → mit Variable</div><p><strong>2a</strong> bedeutet <strong>2 · a</strong>, also a + a.</p><p>Die Zahl davor sagt, wie oft a vorkommt.</p>'},
  {title:'Gleichartige Terme', text:'<p>Schau auf den <strong>Buchstaben</strong>.</p><div class="example">2a und 3a passen.<br>2a und 3b passen nicht.</div><p>2a und 3a sind <strong>gleichartig</strong>. Die Zahlen davor dürfen verschieden sein.</p><p>In unseren Aufgaben passt a zu a und b zu b.</p>'},
  {title:'Terme zusammenführen', text:'<p>Gleichartige Terme kannst du <strong>zusammenzählen</strong>.</p><div class="example">2a + 3a = 5a</div><p>Addiere die Zahlen davor. Der Buchstabe bleibt gleich.</p><p><strong>a = 1a</strong>. Bei a ist die 1 nicht geschrieben.</p><p>a und b bleiben getrennt:<br><strong>2a + b + a = 3a + b</strong>.</p>'}
];
const q = (prompt,expression,options,answer,explain,hint,tiles=[]) => ({prompt,expression,options,answer,explain,hint,tiles});
const banks = [
 [q('Welcher Ausdruck ist ein Term?','',['a + 2','a + 2 = 5'],0,'a + 2 ist ein Term. a + 2 = 5 ist eine Gleichung.','Suche den Ausdruck ohne Gleichheitszeichen.'),
 q('Ist auch eine einzelne Zahl ein Term?','7',['Ja','Nein'],0,'Auch eine einzelne Zahl ist ein Term.','Ein Term muss keine Rechnung enthalten.'),
 q('Ist auch ein einzelner Buchstabe ein Term?','b',['Ja','Nein'],0,'b ist ein Term. Der Buchstabe steht für eine Zahl.','Auch eine Variable allein kann ein Term sein.'),
 q('Was bedeutet die Variable a?','a',['Eine noch unbekannte Zahl','Immer die Zahl 1'],0,'a steht für eine Zahl. Diese Zahl ist hier noch nicht festgelegt.','Eine Variable ist ein Platzhalter für eine Zahl.'),
 q('Welcher Ausdruck ist eine Gleichung?','',['3 + b','3 + b = 8'],1,'Das Gleichheitszeichen verbindet hier zwei Terme zu einer Gleichung.','Achte auf das Zeichen =.'),
 q('Welcher Ausdruck ist vollständig und ein Term?','',['a +','a + b'],1,'a + b ist ein vollständiger Term. Bei a + fehlt noch etwas.','Nach einem Pluszeichen muss noch eine Zahl oder ein Term folgen.')],
 [q('Enthält dieser Term eine Variable?','4 + 3',['Ja','Nein'],1,'4 + 3 enthält nur Zahlen.','Suche einen Buchstaben.'),
 q('Enthält dieser Term eine Variable?','2 + b',['Ja','Nein'],0,'b ist die Variable in diesem Term.','a und b sind unsere Variablen.'),
 q('Welche Variable siehst du?','3a',['a','b'],0,'Die Variable heißt a. Die 3 ist die Zahl davor.','Schau nur auf den Buchstaben.'),
 q('Was bedeutet 2a?','2a',['a + a','2 + a'],0,'2a bedeutet zweimal a: a + a.','Die Zahl davor sagt, wie oft a vorkommt.',['aa']),
 q('Wie oft kommt b hier vor?','3b',['2-mal','3-mal'],1,'3b bedeutet b + b + b.','Zähle die b-Plättchen.',['bbb']),
 q('Welcher Term enthält beide Variablen?','',['2a + a','a + b'],1,'a + b enthält a und b. In 2a + a kommt nur a vor.','Suche a und b im selben Term.')],
 [q('Welcher Term passt zu 2a?','2a',['3a','3b'],0,'2a und 3a haben denselben Buchstaben: a.','Vergleiche die Buchstaben.'),
 q('Welcher Term passt zu b?','b',['4a','4b'],1,'b und 4b sind gleichartig. b bedeutet 1b.','Die Zahl davor muss nicht gleich sein.'),
 q('Sind diese Terme gleichartig?','3a und 3b',['Ja','Nein'],1,'Die Zahlen sind gleich, aber die Buchstaben sind verschieden.','Entscheidend ist der Buchstabe.'),
 q('Sind diese Terme gleichartig?','a und 5a',['Ja','Nein'],0,'Beide haben den Buchstaben a.','a bedeutet 1a.'),
 q('Welche beiden Terme kannst du zusammenzählen?','',['2b und 3b','2a und 3b'],0,'2b und 3b sind beide b-Terme.','Gleiche Buchstaben gehören zusammen.'),
 q('Welcher Term passt NICHT zu 4a?','4a',['a','4b'],1,'4b hat einen anderen Buchstaben. Er passt nicht zu 4a.','Lies genau: Gesucht ist der Term mit einem anderen Buchstaben.')],
 [q('Führe die Terme zusammen.','a + a',['2a','2b','a'],0,'Ein a und ein a ergeben 2a.','Zähle die a-Plättchen.',['a','a']),
 q('Führe die Terme zusammen.','2b + b',['2b','3b','3a'],1,'2b + 1b = 3b. Der Buchstabe bleibt b.','b bedeutet 1b.',['bb','b']),
 q('Führe die Terme zusammen.','2a + 3a',['5a','5b','6a'],0,'2 + 3 = 5. Deshalb gilt: 2a + 3a = 5a.','Addiere nur die Zahlen davor.',['aa','aaa']),
 q('Kannst du diese Terme zusammenzählen?','2a + 3b',['Ja, zu 5a','Nein, es bleibt 2a + 3b'],1,'a und b sind nicht gleichartig. Beide Anteile bleiben stehen.','Prüfe zuerst die Buchstaben.',['aa','bbb']),
 q('Fasse die a-Terme zusammen.','2a + b + a',['3a + b','4a','2a + 2b'],0,'2a + a = 3a. Das b bleibt stehen: 3a + b.','Suche zuerst alle a-Plättchen.',['aa','b','a']),
 q('Fasse beide Sorten getrennt zusammen.','a + 2b + 2a + b',['5a + b','3a + 3b','6b'],1,'a + 2a = 3a und 2b + b = 3b. Zusammen: 3a + 3b.','Zähle zuerst a. Zähle danach b.',['a','bb','aa','b'])]
];
let active = 0;
const state = lessons.map(() => ({index:0, solved:false, complete:false}));
let endless=false;
const practice=lessons.map(()=>({index:0,solved:false,complete:false,task:null}));
function currentState() { return (endless?practice:state)[active]; }
function currentTask() {
  const s=currentState();
  if(!endless) return banks[active][s.index];
  if(!s.task) s.task=generateTask(active);
  return s.task;
}
function newPracticeTask(s) {
  const previous=s.task;
  for(let attempt=0;attempt<20;attempt++) {
    s.task=generateTask(active);
    if(!previous || s.task.prompt!==previous.prompt || s.task.expression!==previous.expression || s.task.options[s.task.answer]!==previous.options[previous.answer]) break;
  }
}
const $ = id => document.getElementById(id);
function renderNav() {
  $('steps').replaceChildren();
  lessons.forEach((lesson,i) => {
    const button = document.createElement('button');
    button.innerHTML = `<small>${endless ? '∞ Übungsbereich '+(i+1) : state[i].complete ? '✓ Geschafft' : 'Schritt '+(i+1)}</small>${lesson.title}`;
    if(i===active) button.setAttribute('aria-current','step');
    button.onclick = () => {active=i; render(); $('question').focus();};
    $('steps').append(button);
  });
}
function render() {
  renderNav();
  const s=currentState(), task=currentTask();
  $('guided-mode').setAttribute('aria-pressed',String(!endless));
  $('endless-mode').setAttribute('aria-pressed',String(endless));
  $('mode-description').textContent=endless?'Immer neue Aufgaben. Wähle oben deinen Übungsbereich. Du kannst jederzeit zurückwechseln.':'Sechs Aufgaben je Bereich. Wähle deinen Lernbereich.';
  $('progress').hidden=endless;
  $('restart').textContent=endless?'Übungszähler in diesem Bereich neu starten':'Diesen Bereich neu beginnen';
  $('lesson-title').textContent=lessons[active].title;
  $('lesson').innerHTML=lessons[active].text;
  $('counter').textContent=endless?`Unendlich üben · Aufgabe ${s.index+1}`:`Aufgabe ${s.index+1} von 6`;
  $('progress-label').textContent=`${s.index+(s.solved?1:0)} geschafft`;
  $('progress').value=s.index+(s.solved?1:0);
  $('question').textContent=task.prompt;
  $('expression').textContent=task.expression;
  $('visual').replaceChildren();
  task.tiles.forEach((group,i) => {
    if(i) $('visual').append(' + ');
    const wrap=document.createElement('span'); wrap.className='group';
    for(const letter of group) {const tile=document.createElement('span'); tile.className='tile '+letter; tile.textContent=letter; wrap.append(tile);}
    $('visual').append(wrap);
  });
  $('answers').replaceChildren();
  task.options.forEach((label,i) => {
    const button=document.createElement('button'); button.textContent=label;
    button.disabled=s.solved;
    if(s.solved && i===task.answer) button.className='correct';
    button.onclick=()=>answer(i,button);
    $('answers').append(button);
  });
  $('feedback').textContent=s.solved ? 'Richtig! '+task.explain+(s.complete?' Bereich geschafft!':'') : '';
  $('hint-text').hidden=true; $('hint-text').textContent=task.hint;
  $('hint').hidden=s.solved;
  $('next').hidden=!s.solved;
  $('next').textContent=endless?'Neue Aufgabe →':s.index===5 ? (active===3?'Zum Lernüberblick →':'Zum nächsten Bereich →'):'Nächste Aufgabe →';
}
function answer(choice,button) {
  const s=currentState(),task=currentTask();
  if(s.solved) return;
  if(choice!==task.answer) {
    button.classList.add('incorrect');
    $('feedback').textContent='Noch nicht. '+task.hint+' Versuch es noch einmal.';
    return;
  }
  s.solved=true; s.complete=!endless && s.index===5;
  render(); $('next').focus();
}
$('hint').onclick=()=>{$('hint-text').hidden=false;};
$('next').onclick=()=>{
  const s=currentState();
  if(!s.solved) return;
  if(endless) {s.index++;s.solved=false;newPracticeTask(s);render();$('question').focus();return;}
  if(s.index<5) {s.index++;s.solved=false;}
  else if(active<3) active++;
  else {
    $('question').textContent='Dein Lernüberblick';
    $('expression').textContent=state.every(s=>s.complete)?'Alle vier Bereiche geschafft!':'Du machst Fortschritte!';
    $('visual').replaceChildren(); $('answers').replaceChildren();
    $('feedback').textContent=`${state.filter(s=>s.complete).length} von 4 Bereichen abgeschlossen. Wähle oben einen Bereich zum Weiterlernen oder Wiederholen.`;
    $('next').hidden=true; $('hint').hidden=true; $('hint-text').hidden=true;
    $('question').focus(); return;
  }
  render(); $('question').focus();
};
$('restart').onclick=()=>{(endless?practice:state)[active]={index:0,solved:false,complete:false,task:null};render();$('question').focus();};
$('guided-mode').onclick=()=>{endless=false;render();$('question').focus();};
$('endless-mode').onclick=()=>{endless=true;render();$('question').focus();};
render();
