// Geometry is independent of rendering. Lengths: cm; areas: cm²; volumes: cm³.
export const EPS = 1e-7;
export const add=(a,b)=>a.map((v,i)=>v+b[i]);
export const sub=(a,b)=>a.map((v,i)=>v-b[i]);
export const mul=(a,k)=>a.map(v=>v*k);
export const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
export const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
export const norm=a=>Math.hypot(...a);
export const unit=a=>mul(a,1/(norm(a)||1));
export const IDENTITY=[1,0,0,0,1,0,0,0,1];
export function transform(m,v){return [dot(m.slice(0,3),v),dot(m.slice(3,6),v),dot(m.slice(6,9),v)];}
export function transpose(m){return [m[0],m[3],m[6],m[1],m[4],m[7],m[2],m[5],m[8]];}
export function turn(matrix,axis){
 const rot=axis==='x'?[1,0,0,0,0,-1,0,1,0]:axis==='y'?[0,0,1,0,1,0,-1,0,0]:[0,-1,0,1,0,0,0,0,1];
 const columns=transpose(matrix);return rot.flatMap((_,i)=>i%3?[]:columns.reduce((r,__,j)=>j%3?r:[...r,dot(rot.slice(i,i+3),columns.slice(j,j+3))],[]));
}
export const world=(p,v)=>add(p.pos,transform(p.rot,v));
export const name=p=>({box:Math.abs(p.a-p.b)<EPS&&Math.abs(p.a-p.h)<EPS?'Würfel':'Quader',cylinder:'Zylinder',cone:'Kegel',pyramid:'Pyramide'})[p.shape];
export function validate(p){
 if(!['box','cylinder','cone','pyramid'].includes(p.shape))throw new Error('Unbekannte Form.');
 for(const k of ['a','h',...(p.shape==='box'?['b']:[])])if(!Number.isFinite(p[k])||p[k]<0.2||p[k]>30)throw new Error('Maße müssen zwischen 0,2 und 30 cm liegen.');
 if(p.pos.length!==3||p.pos.some(x=>!Number.isFinite(x)||Math.abs(x)>100))throw new Error('Position außerhalb des Baubereichs.');
}
export function measure(p){
 const {a,b,h}=p;
 if(p.shape==='box')return {v:a*b*h,o:2*(a*b+a*h+b*h),vFormula:'a · b · h',oFormula:'2 · (a·b + a·h + b·h)'};
 if(p.shape==='cylinder')return {v:Math.PI*a*a*h,o:2*Math.PI*a*(a+h),vFormula:'π · r² · h',oFormula:'2 · π · r · (r + h)'};
 if(p.shape==='cone'){const s=Math.hypot(a,h);return {v:Math.PI*a*a*h/3,o:Math.PI*a*(a+s),s,vFormula:'π · r² · h / 3',oFormula:'π · r · (r + s)',sFormula:'s = √(r² + h²)'};}
 const s=Math.hypot(a/2,h);return {v:a*a*h/3,o:a*a+2*a*s,s,vFormula:'a² · h / 3',oFormula:'a² + 2 · a · s',sFormula:'s = √((a/2)² + h²)'};
}
function localSupport(p,d){
 const {a,b,h}=p;
 if(p.shape==='box')return [d[0]>=0?a/2:-a/2,d[1]>=0?h/2:-h/2,d[2]>=0?b/2:-b/2];
 if(p.shape==='pyramid'){
  const base=[d[0]>=0?a/2:-a/2,-h/2,d[2]>=0?a/2:-a/2],tip=[0,h/2,0];return dot(base,d)>dot(tip,d)?base:tip;
 }
 const n=Math.hypot(d[0],d[2]),v=[n?a*d[0]/n:0,-h/2,n?a*d[2]/n:0];
 if(p.shape==='cylinder'){v[1]=d[1]>=0?h/2:-h/2;return v;}
 const tip=[0,h/2,0];return dot(v,d)>dot(tip,d)?v:tip;
}
export function support(p,d,shrink=1){return add(p.pos,mul(transform(p.rot,localSupport(p,transform(transpose(p.rot),d))),shrink));}
export function bounds(p){return {min:[0,1,2].map(i=>support(p,[0,1,2].map(j=>i===j?-1:0))[i]),max:[0,1,2].map(i=>support(p,[0,1,2].map(j=>i===j?1:0))[i])};}
export function onFloor(p){const b=bounds(p);if(b.min[1]<0)p.pos[1]-=b.min[1];return p;}
// GJK uses analytic support mappings, including round bodies (no mesh approximation).
// A microscopic inset separates real intersections from harmless tangency.
export function overlap(a,b){
 const ba=bounds(a),bb=bounds(b);
 if([0,1,2].some(i=>ba.max[i]<=bb.min[i]+EPS||bb.max[i]<=ba.min[i]+EPS))return false;
 const ms=d=>sub(support(a,d,1-1e-8),support(b,mul(d,-1),1-1e-8));
 let d=sub(b.pos,a.pos);if(norm(d)<EPS)d=[1,0,0];
 let simplex=[ms(d)];d=mul(simplex[0],-1);
 const perpendicular=v=>unit(cross(v,Math.abs(v[0])<Math.abs(v[1])?[1,0,0]:[0,1,0]));
 for(let iteration=0;iteration<150;iteration++){
  if(norm(d)<1e-12)d=[0,0,1];d=unit(d);
  const A=ms(d);if(dot(A,d)<1e-10)return false;
  simplex.unshift(A);const AO=mul(A,-1),B=simplex[1],AB=sub(B,A);
  if(simplex.length===2){
   if(dot(AB,AO)>0){d=cross(cross(AB,AO),AB);if(norm(d)<1e-12)d=perpendicular(AB);}else{simplex=[A];d=AO;}
  }else if(simplex.length===3){
   const C=simplex[2],AC=sub(C,A),ABC=cross(AB,AC);
   if(dot(cross(ABC,AC),AO)>0){
    if(dot(AC,AO)>0){simplex=[A,C];d=cross(cross(AC,AO),AC);}else{simplex=[A,B];d=cross(cross(AB,AO),AB);}
   }else if(dot(cross(AB,ABC),AO)>0){simplex=[A,B];d=cross(cross(AB,AO),AB);}
   else if(dot(ABC,AO)>0)d=ABC;else{simplex=[A,C,B];d=mul(ABC,-1);}
  }else{
   const C=simplex[2],D=simplex[3];let outside=null;
   for(const [P,Q,R] of [[B,C,D],[C,D,B],[D,B,C]]){
    let normal=cross(sub(P,A),sub(Q,A));if(dot(normal,sub(R,A))>0)normal=mul(normal,-1);
    if(dot(normal,AO)>1e-12){outside={points:[A,P,Q],normal};break;}
   }
   if(!outside)return true;simplex=outside.points;d=outside.normal;
  }
 }
 // Unresolved near-degenerate cases must not silently produce a "correct" result.
 return null;
}
function polygonFace(p,vertices,normal){return {kind:'polygon',points:vertices.map(v=>world(p,v)),normal:transform(p.rot,normal)};}
export function faces(p){
 const {a,b,h}=p,x=a/2,y=h/2,z=(p.shape==='box'?b:a)/2;
 const base=[[-x,-y,-z],[-x,-y,z],[x,-y,z],[x,-y,-z]];
 if(p.shape==='cylinder'||p.shape==='cone'){
  const circle=v=>({kind:'circle',center:world(p,[0,v,0]),radius:a,normal:transform(p.rot,[0,v>0?1:-1,0])});
  return p.shape==='cone'?[circle(-y)]:[circle(-y),circle(y)];
 }
 if(p.shape==='pyramid')return [polygonFace(p,base,[0,-1,0]),...base.map((v,i)=>{const next=base[(i+1)%4],points=[v,[0,y,0],next];let n=unit(cross(sub(points[1],v),sub(next,v)));const mid=mul(add(add(v,next),[0,y,0]),1/3);if(dot(n,mid)<0)n=mul(n,-1);return polygonFace(p,points,n);})];
 return [polygonFace(p,base,[0,-1,0]),polygonFace(p,base.map(v=>[v[0],y,v[2]]),[0,1,0]),...[-1,1].flatMap(s=>[
  polygonFace(p,[[s*x,-y,-z],[s*x,y,-z],[s*x,y,z],[s*x,-y,z]],[s,0,0]),
  polygonFace(p,[[-x,-y,s*z],[-x,y,s*z],[x,y,s*z],[x,-y,s*z]],[0,0,s])])];
}
const cross2=(a,b)=>a[0]*b[1]-a[1]*b[0];
const sub2=(a,b)=>[a[0]-b[0],a[1]-b[1]];
const areaSigned=poly=>poly.reduce((s,p,i)=>s+cross2(p,poly[(i+1)%poly.length]),0)/2;
const ccw=poly=>areaSigned(poly)<0?[...poly].reverse():poly;
export function clipPolygon(subject,clip){
 let output=ccw(subject);clip=ccw(clip);
 for(let i=0;i<clip.length;i++){
  const A=clip[i],B=clip[(i+1)%clip.length],edge=sub2(B,A),input=output;output=[];if(!input.length)break;
  for(let j=0;j<input.length;j++){
   const P=input[j],Q=input[(j+1)%input.length],dp=cross2(edge,sub2(P,A)),dq=cross2(edge,sub2(Q,A));
   if(dp>=-EPS)output.push(P);
   if((dp>=-EPS)!==(dq>=-EPS)){const t=dp/(dp-dq);output.push([P[0]+t*(Q[0]-P[0]),P[1]+t*(Q[1]-P[1])]);}
  }
 }
 return output;
}
// Exact circle/polygon intersection: split each edge at circle crossings;
// sum oriented triangles inside the circle and sectors outside it.
export function circlePolygonArea(center,r,polygon){
 const poly=ccw(polygon).map(p=>sub2(p,center));let total=0;
 for(let i=0;i<poly.length;i++){
  const A=poly[i],B=poly[(i+1)%poly.length],D=sub2(B,A),aa=dot(D,D),bb=2*dot(A,D),c=dot(A,A)-r*r;
  const ts=[0,1],disc=bb*bb-4*aa*c;
  if(aa>EPS&&disc>0){for(const t of [(-bb-Math.sqrt(disc))/(2*aa),(-bb+Math.sqrt(disc))/(2*aa)])if(t>0&&t<1)ts.push(t);}
  ts.sort((a,b)=>a-b);
  for(let k=0;k<ts.length-1;k++){
   const P=add(A,mul(D,ts[k])),Q=add(A,mul(D,ts[k+1])),M=mul(add(P,Q),.5);
   total+=dot(M,M)<r*r-EPS?cross2(P,Q)/2:r*r*Math.atan2(cross2(P,Q),dot(P,Q))/2;
  }
 }
 return Math.abs(total);
}
export function circleCircleArea(c1,r1,c2,r2){
 const d=norm(sub(c1,c2));if(d>=r1+r2)return 0;if(d<=Math.abs(r1-r2))return Math.PI*Math.min(r1,r2)**2;
 const clamp=v=>Math.max(-1,Math.min(1,v));
 return r1*r1*Math.acos(clamp((d*d+r1*r1-r2*r2)/(2*d*r1)))+r2*r2*Math.acos(clamp((d*d+r2*r2-r1*r1)/(2*d*r2)))-.5*Math.sqrt(Math.max(0,(-d+r1+r2)*(d+r1-r2)*(d-r1+r2)*(d+r1+r2)));
}
export function contact(a,b){
 const results=[];
 for(const fa of faces(a))for(const fb of faces(b)){
  if(dot(fa.normal,fb.normal)>-1+EPS)continue;
  const origin=fa.center||fa.points[0],other=fb.center||fb.points[0];if(Math.abs(dot(sub(other,origin),fa.normal))>EPS)continue;
  const u=unit(cross(fa.normal,Math.abs(fa.normal[0])<.8?[1,0,0]:[0,1,0])),v=cross(fa.normal,u);
  const project=P=>[dot(sub(P,origin),u),dot(sub(P,origin),v)];
  const pa=fa.points?.map(project),pb=fb.points?.map(project),ca=fa.center&&project(fa.center),cb=fb.center&&project(fb.center);
  let area;
  if(pa&&pb)area=Math.abs(areaSigned(clipPolygon(pa,pb)));
  else if(ca&&cb)area=circleCircleArea(ca,fa.radius,cb,fb.radius);
  else area=ca?circlePolygonArea(ca,fa.radius,pb):circlePolygonArea(cb,fb.radius,pa);
  if(area>EPS){
   const samples=f=>f.points?.map(project)||Array.from({length:128},(_,i)=>add(project(f.center),[f.radius*Math.cos(i*Math.PI/64),f.radius*Math.sin(i*Math.PI/64)]));
   results.push({area,normal:fa.normal,points:clipPolygon(samples(fa),samples(fb)).map(P=>add(origin,add(mul(u,P[0]),mul(v,P[1]))))});
  }
 }
 return results;
}
export function calculate(parts){
 const contacts=[],collisions=[],uncertain=[];let v=0,o=0;
 for(const p of parts){validate(p);const m=measure(p);v+=m.v;o+=m.o;}
 for(let i=0;i<parts.length;i++)for(let j=i+1;j<parts.length;j++){
  const state=overlap(parts[i],parts[j]);
  if(state===true)collisions.push([parts[i].id,parts[j].id]);
  else if(state===null)uncertain.push([parts[i].id,parts[j].id]);
  else for(const c of contact(parts[i],parts[j]))contacts.push({...c,ids:[parts[i].id,parts[j].id]});
 }
 const area=contacts.reduce((s,c)=>s+c.area,0),valid=!collisions.length&&!uncertain.length;
 return {valid,v:valid?v:null,o:valid?Math.max(0,o-2*area):null,rawV:v,rawO:o,area,contacts,collisions,uncertain};
}
export function makePart(shape='box',a=2,b=2,h=2,id='1'){return {id,shape,a,b,h,pos:[0,h/2,0],rot:[...IDENTITY]};}
export function makeTask(level='easy',random=Math.random){
 const pick=a=>a[Math.floor(random()*a.length)],size=pick([2,3,4]);
 const combo=level==='easy'?pick([['box','box'],['box','pyramid'],['cylinder','cone'],['box','cylinder'],['cylinder','box']]):pick([['box','cylinder','cone'],['cylinder','box','pyramid'],['box','box','cylinder']]);
 let floor=0;const parts=combo.map((s,i)=>{const p=makePart(s,['cylinder','cone'].includes(s)?size/2:size,size,pick([2,3,4]),`target-${i}`);p.pos[1]=floor+p.h/2;floor+=p.h;return p;});
 return {level,parts};
}
function sameSize(p,q){return p.shape===q.shape&&Math.abs(p.a-q.a)<EPS&&Math.abs(p.h-q.h)<EPS&&(p.shape!=='box'||Math.abs(p.b-q.b)<EPS);}
function sameOrientation(p,q){
 if(p.shape==='box'){const a=bounds(p),b=bounds(q);return [0,1,2].every(i=>Math.abs(a.max[i]-a.min[i]-b.max[i]+b.min[i])<EPS);}
 const d=dot(transform(p.rot,[0,1,0]),transform(q.rot,[0,1,0]));
 return p.shape==='cylinder'?Math.abs(d)>1-EPS:d>1-EPS;
}
export function checkTask(parts,task){
 if(!task)return {ok:false,message:'Wähle zuerst eine Aufgabe.'};
 if(parts.length!==task.parts.length)return {ok:false,message:`Du brauchst ${task.parts.length} Bauteile. Im Bauwerk sind ${parts.length}.`};
 const calc=calculate(parts);if(!calc.valid)return {ok:false,message:'Bauteile durchdringen sich oder liegen zu ungenau. Trenne sie und lasse ihre Flächen einrasten.'};
 const needed=task.parts;let best=0;
 function match(i,used,pairs){
  if(i===needed.length){
   const offset=sub(pairs[0].pos,needed[0].pos);
   if(pairs.every((p,j)=>norm(sub(sub(p.pos,needed[j].pos),offset))<1e-5))return true;
   best=Math.max(best,3);return false;
  }
  for(const p of parts)if(!used.has(p.id)&&p.shape===needed[i].shape){
   best=Math.max(best,1);if(!sameSize(p,needed[i]))continue;best=Math.max(best,2);if(!sameOrientation(p,needed[i]))continue;
   used.add(p.id);if(match(i+1,used,[...pairs,p]))return true;used.delete(p.id);
  }
  return false;
 }
 const ok=match(0,new Set(),[]);
 return {ok,message:ok?'Richtig gebaut! Formen, Einzelmaße und Anordnung stimmen.':best===3?'Die Teile passen. Prüfe die Reihenfolge von unten nach oben und setze sie mittig ohne Abstand aufeinander.':best===2?'Prüfe die Ausrichtung und die Maße aller Bauteile. Die Vorlage steht aufrecht.':best===1?'Prüfe die Einzelmaße: Radius ist nicht Durchmesser. Bei Quadern sind a, b und h angegeben.':'Die Formen passen noch nicht zur Teileliste.'};
}
