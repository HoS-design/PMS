const {generateTask}=require('./generator.js');
const assert=require('node:assert/strict');
let seed=12345;const random=()=>((seed=(Math.imul(seed,1664525)+1013904223)>>>0)/4294967296);
function coefficients(text) {const sums={a:0,b:0};for(const part of text.split(' + ')){const match=part.match(/^(\d*)([ab])$/);assert(match,part);sums[match[2]]+=Number(match[1]||1);}return sums;}
for(let area=0;area<4;area++)for(let i=0;i<2000;i++){
 const t=generateTask(area,random), answer=t.options[t.answer];assert.equal(new Set(t.options).size,t.options.length);assert(t.hint&&t.explain);
 if(area===0)assert.equal(answer.includes('='),t.prompt.includes('Gleichung'));
 if(area===1){if(t.prompt.startsWith('Enthält'))assert.equal(answer==='Ja',/[ab]/.test(t.expression));else assert.deepEqual(coefficients(t.expression),coefficients(answer));}
 if(area===2){const letters=t.expression.match(/[ab]/g);assert.equal(answer==='Ja',letters[0]===letters[1]);}
 if(area===3){const sums=coefficients(t.expression);assert.deepEqual(coefficients(answer),sums);assert(sums.a<=10&&sums.b<=10);for(let j=0;j<t.options.length;j++)if(j!==t.answer)assert.notDeepEqual(coefficients(t.options[j]),sums);}
}
console.log('PASS: 8000 seeded generator cases, independent mathematical checks, unique choices and coefficient bounds.');

