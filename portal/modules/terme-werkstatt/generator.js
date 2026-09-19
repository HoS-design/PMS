'use strict';
// All answers are derived from the same coefficients as the displayed task.
function generateTask(area, random = Math.random) {
  const number = () => 1 + Math.floor(random() * 5);
  const pick = values => values[Math.floor(random() * values.length)];
  const term = (n,v) => (n === 1 ? '' : n) + v;
  const n=number(), m=number(), v=pick(['a','b']), w=v==='a'?'b':'a';
  let prompt,expression='',correct,wrong,explain,hint,tiles=[];
  if(area===0) {
    const expressionTerm=pick([String(n),v,`${n} + ${v}`,`${term(n,v)} + ${term(m,w)}`]);
    const equation=random()<.5;
    prompt=equation?'Welcher Ausdruck ist eine Gleichung?':'Welcher Ausdruck ist ein Term?';
    const equality=`${expressionTerm} = ${n+m}`;
    correct=equation?equality:expressionTerm; wrong=[equation?expressionTerm:equality];
    explain=equation?'Eine Gleichung verbindet zwei Terme mit einem Gleichheitszeichen.':'Ein Term enthält kein Gleichheitszeichen. Auch eine einzelne Zahl oder Variable ist ein Term.';
    hint=equation?'Suche das Gleichheitszeichen.':'Suche den Ausdruck ohne Gleichheitszeichen.';
  } else if(area===1) {
    if(random()<.5) {
      prompt='Was bedeutet dieser Term?'; expression=term(n,v);
      correct=Array(n).fill(v).join(' + ');wrong=[`${n} + ${v}`];
      explain=`${term(n,v)} bedeutet ${n}-mal ${v}.`;hint='Die Zahl davor sagt, wie oft der Buchstabe vorkommt.';tiles=[v.repeat(n)];
    } else {
      const variable=random()<.5;
      prompt='Enthält dieser Term eine Variable?';expression=variable?`${n} + ${v}`:`${n} + ${m}`;
      correct=variable?'Ja':'Nein';wrong=[variable?'Nein':'Ja'];
      explain=variable?`${v} ist hier die Variable.`:'Dieser Term enthält nur Zahlen.';hint='Suche einen Buchstaben.';
    }
  } else if(area===2) {
    const same=random()<.5;
    prompt='Sind diese Terme gleichartig?';expression=`${term(n,v)} und ${term(m,same?v:w)}`;
    correct=same?'Ja':'Nein';wrong=[same?'Nein':'Ja'];
    explain=same?`Beide Terme haben den Buchstaben ${v}. Die Zahlen davor dürfen verschieden sein.`:'Die Buchstaben sind verschieden. Diese Terme sind nicht gleichartig.';
    hint='Vergleiche die Buchstaben, nicht die Zahlen davor.';
  } else {
    const mixed=random()<.5;
    prompt=mixed?'Fasse die gleichen Buchstaben zusammen.':'Führe die Terme zusammen.';
    if(mixed) {
      const k=number();expression=`${term(n,v)} + ${term(k,w)} + ${term(m,v)}`;
      correct=`${term(n+m,v)} + ${term(k,w)}`;
      wrong=[term(n+m+k,v),`${term(n+m,v)} + ${term(k+1,w)}`];
      explain=`${term(n,v)} + ${term(m,v)} = ${term(n+m,v)}. ${term(k,w)} bleibt stehen.`;
      tiles=[v.repeat(n),w.repeat(k),v.repeat(m)];
    } else {
      expression=`${term(n,v)} + ${term(m,v)}`;correct=term(n+m,v);
      wrong=[term(n+m,w),term(n+m+1,v)];
      explain=`${n} + ${m} = ${n+m}. Der Buchstabe ${v} bleibt gleich.`;tiles=[v.repeat(n),v.repeat(m)];
    }
    hint='Addiere die Zahlen vor gleichen Buchstaben. Verschiedene Buchstaben bleiben getrennt.';
  }
  const options=[correct,...wrong];
  for(let i=options.length-1;i>0;i--) {const j=Math.floor(random()*(i+1));[options[i],options[j]]=[options[j],options[i]];}
  return {prompt,expression,options,answer:options.indexOf(correct),explain,hint,tiles};
}
if(typeof module!=='undefined') module.exports={generateTask};
