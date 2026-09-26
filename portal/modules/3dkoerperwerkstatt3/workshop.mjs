import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {makePart,validate,name,measure,bounds,onFloor,turn,world,add,sub,mul,norm,unit,cross,dot,overlap,calculate,makeTask,checkTask} from './geometry.mjs';

const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];
const format=n=>new Intl.NumberFormat('de-AT',{maximumFractionDigits:2,minimumFractionDigits:2}).format(n);
const short=n=>new Intl.NumberFormat('de-AT',{maximumFractionDigits:2}).format(n);
const palette=['#3b82c4','#329580','#a265ae','#cc8043','#5d73c9','#b95574'];
const color=p=>palette[(Number(p.id)-1)%palette.length]||palette[0];
let parts=[makePart()],selected='1',nextId=2,mode='free',task=null,history=[],future=[],result=calculate(parts),viewMode='iso';
const current=()=>parts.find(p=>p.id===selected);
const snapshot=()=>structuredClone({parts,selected});
function message(text){$('#message').textContent=text;}
function record(before){history.push(before);if(history.length>60)history.shift();future=[];}
function change(action,text){
 const before=snapshot();try{action();parts.forEach(validate);record(before);$('#task-feedback').textContent='';$('#answer-feedback').textContent='';refresh();if(text)message(text);}
 catch(error){parts=before.parts;selected=before.selected;refresh();message(error.message);}
}
function dimensions(p){return p.shape==='box'?`a = ${short(p.a)}, b = ${short(p.b)}, h = ${short(p.h)} cm`:`${['cone','cylinder'].includes(p.shape)?'r':'a'} = ${short(p.a)}, h = ${short(p.h)} cm`;}
function formPart(id){const p=makePart($('#shape').value,Number($('#a').value),Number($('#b').value),Number($('#h').value),id);validate(p);return p;}
function updateLabels(){const shape=$('#shape').value;$('#label-a').textContent=['cone','cylinder'].includes(shape)?'Radius r':shape==='pyramid'?'Grundkante a':'Breite a';$('#b-field').hidden=shape!=='box';$('#b').disabled=shape!=='box';}
function fillDimensions(p){$('#shape').value=p.shape;$('#a').value=p.a;$('#b').value=p.b;$('#h').value=p.h;updateLabels();}
function select(id){selected=id;refresh();}

// Rendering uses the same part dimensions and orthogonal rotation matrices as the maths.
const mount=$('#view'),scene=new THREE.Scene();scene.background=new THREE.Color('#eff4fa');
const camera=new THREE.PerspectiveCamera(42,1,.01,800);
let renderer;
try{renderer=new THREE.WebGLRenderer({antialias:true});}
catch(error){$('#loading').textContent='Die 3D-Ansicht konnte nicht starten. Bitte WebGL im Browser aktivieren oder einen anderen Browser verwenden.';throw error;}
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;mount.appendChild(renderer.domElement);$('#loading').remove();
scene.add(new THREE.HemisphereLight(0xffffff,0x64748b,2));
const sunlight=new THREE.DirectionalLight(0xffffff,2.4);sunlight.position.set(10,20,12);sunlight.castShadow=true;sunlight.shadow.mapSize.set(1024,1024);scene.add(sunlight);
const grid=new THREE.GridHelper(100,100,0x94aec8,0xd4e0ec);scene.add(grid);
const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.08}));floor.rotation.x=-Math.PI/2;floor.position.y=-.002;floor.receiveShadow=true;scene.add(floor);
const meshes=new THREE.Group(),annotations=new THREE.Group(),contactGroup=new THREE.Group();scene.add(meshes,annotations,contactGroup);
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.maxPolarAngle=Math.PI*.94;controls.minDistance=1;controls.maxDistance=300;
function dispose(group){while(group.children.length){const item=group.children[0];group.remove(item);item.traverse(obj=>{obj.geometry?.dispose();if(obj.material){for(const m of Array.isArray(obj.material)?obj.material:[obj.material]){m.map?.dispose();m.dispose();}}});}}
function geometry(p){
 if(p.shape==='box')return new THREE.BoxGeometry(p.a,p.h,p.b);
 if(p.shape==='cylinder')return new THREE.CylinderGeometry(p.a,p.a,p.h,96);
 if(p.shape==='cone')return new THREE.ConeGeometry(p.a,p.h,96);
 const g=new THREE.ConeGeometry(p.a/Math.SQRT2,p.h,4);g.rotateY(Math.PI/4);return g;
}
function drawParts(){
 dispose(meshes);const bad=new Set([...result.collisions,...result.uncertain].flat());
 for(const p of parts){
  const mat=new THREE.MeshStandardMaterial({color:bad.has(p.id)?'#de4560':color(p),roughness:.65,metalness:0,transparent:bad.has(p.id),opacity:bad.has(p.id)?.55:1,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1});
  if(p.id===selected){mat.emissive=new THREE.Color(color(p));mat.emissiveIntensity=.16;}
  const mesh=new THREE.Mesh(geometry(p),mat),r=p.rot;
  const matrix=new THREE.Matrix4().set(r[0],r[1],r[2],0,r[3],r[4],r[5],0,r[6],r[7],r[8],0,0,0,0,1);
  mesh.setRotationFromMatrix(matrix);mesh.position.fromArray(p.pos);mesh.userData.id=p.id;mesh.castShadow=true;mesh.receiveShadow=true;
  mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry,25),new THREE.LineBasicMaterial({color:p.id===selected?0x123958:0x36576c,transparent:true,opacity:.75})));
  meshes.add(mesh);
 }
}
function label(text,position,background='#ffffff',ink='#173852',scale=1){
 const canvas=document.createElement('canvas');canvas.width=640;canvas.height=96;const ctx=canvas.getContext('2d');ctx.font='600 34px Arial';const w=Math.min(620,ctx.measureText(text).width+28);ctx.fillStyle=background;ctx.fillRect((640-w)/2,6,w,84);ctx.fillStyle=ink;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,320,48);
 const texture=new THREE.CanvasTexture(canvas),sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,depthTest:false,transparent:true}));sprite.position.fromArray(position);sprite.onBeforeRender=()=>{const pixels=2*camera.position.distanceTo(sprite.position)*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))/Math.max(1,mount.clientHeight);sprite.scale.set(320*pixels,48*pixels,1);};sprite.renderOrder=10;annotations.add(sprite);
}
function line(points,col=0x385a7d){const l=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(v=>new THREE.Vector3(...v))),new THREE.LineBasicMaterial({color:col,depthTest:false}));l.renderOrder=9;annotations.add(l);}
function dimension(p,start,end,text,offset){
 const a=world(p,start),b=world(p,end),c=world(p,add(start,offset)),d=world(p,add(end,offset));line([a,c,d,b]);
 const dir=unit(sub(d,c)),side=unit(cross(dir,[0,1,.01]));const size=Math.min(norm(sub(d,c))*.12,.14);
 for(const [point,toward] of [[c,dir],[d,mul(dir,-1)]]){line([add(point,add(mul(toward,size),mul(side,size*.5))),point,add(point,sub(mul(toward,size),mul(side,size*.5)))]);}
 label(text,mul(add(c,d),.5),'#fff','#163a5b',Math.min(1.5,Math.max(.65,p.h/9)));
}
function drawAnnotations(){
 dispose(annotations);dispose(contactGroup);const p=current();
 if(p&&$('#show-dimensions').checked){
  const z=p.shape==='box'?p.b/2:['cone','cylinder'].includes(p.shape)?p.a:p.a/2,x=['cone','cylinder'].includes(p.shape)?p.a:p.a/2;
  dimension(p,[x,-p.h/2,z],[x,p.h/2,z],`h = ${short(p.h)} cm`,[.65,0,.3]);
  if(['cone','cylinder'].includes(p.shape))dimension(p,[0,-p.h/2,0],[p.a,-p.h/2,0],`r = ${short(p.a)} cm`,[0,-.03,z+.6]);
  else{dimension(p,[-x,-p.h/2,z],[x,-p.h/2,z],`a = ${short(p.a)} cm`,[0,0,.65]);if(p.shape==='box')dimension(p,[-x,-p.h/2,-z],[-x,-p.h/2,z],`b = ${short(p.b)} cm`,[-.65,0,0]);}
 }
 if($('#show-contacts').checked)for(const c of result.contacts){
  if(c.points.length<3)continue;const vertices=[];for(let i=1;i<c.points.length-1;i++)vertices.push(...c.points[0],...c.points[i],...c.points[i+1]);
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
  const m=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color:0xe89712,side:THREE.DoubleSide,transparent:true,opacity:.65,depthTest:false,depthWrite:false}));m.renderOrder=5;contactGroup.add(m);
 }
}
function fit(kind=viewMode){
 viewMode=kind;const bs=parts.map(bounds),min=[0,1,2].map(i=>bs.length?Math.min(...bs.map(b=>b.min[i])):-2),max=[0,1,2].map(i=>bs.length?Math.max(...bs.map(b=>b.max[i])):2),center=mul(add(min,max),.5),span=Math.max(4,...sub(max,min));
 const distance=span/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)))*1.6/Math.min(1,camera.aspect);
 const dir=unit(kind==='front'?[0,.03,1]:kind==='top'?[0,1,.001]:kind==='side'?[1,.03,0]:[1,.85,1.15]);controls.target.fromArray(center);camera.position.fromArray(add(center,mul(dir,distance)));camera.up.set(0,1,0);controls.update();
}
function resize(){const w=mount.clientWidth,h=mount.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);}
new ResizeObserver(resize).observe(mount);
function mathHTML(items,c){
 const terms=items.map(p=>`<div class="formula"><strong>${name(p)} · ${dimensions(p)}</strong><p>V = ${measure(p).vFormula} = ${format(measure(p).v)} cm³</p><p>O = ${measure(p).oFormula} = ${format(measure(p).o)} cm²</p>${measure(p).s?`<p>${measure(p).sFormula} = ${format(measure(p).s)} cm (Seitenhöhe)</p>`:''}</div>`).join('');
 const contacts=c.contacts.map(k=>`Bauteil ${items.findIndex(p=>p.id===k.ids[0])+1} + ${items.findIndex(p=>p.id===k.ids[1])+1}: ${format(k.area)} cm²`).join('<br>');
 return `${terms}<div class="contact-note"><strong>${c.contacts.length?'Kontaktflächen':'Keine flächigen Kontakte'}</strong><p>${contacts||'Getrennte Körper sowie reine Punkt- oder Linienkontakte haben keine gemeinsame Fläche.'}</p><p>Eine Kontaktfläche liegt an zwei Bauteilen im Inneren. Deshalb wird sie <strong>zweimal</strong> von der Summe der Oberflächen abgezogen.</p></div>${c.valid?`<p class="formula">V = ${items.map(p=>format(measure(p).v)).join(' + ')||'0'} = <strong>${format(c.v)} cm³</strong><br>O = ${format(c.rawO)} − 2 · ${format(c.area)} = <strong>${format(c.o)} cm²</strong></p>`:''}`;
}
function renderMath(){
 const reveal=mode==='free'||$('#reveal').checked;$('#reveal-label').hidden=mode==='free';$('#answer-form').hidden=mode==='free'||!task;
 const invalid=$('#invalid');invalid.hidden=result.valid;
 invalid.textContent=result.collisions.length?'Rot markierte Bauteile durchdringen sich. Bewege sie auseinander oder nutze „Darauf setzen“. Für dieses Bauwerk werden keine Gesamtwerte ausgegeben.':'Die Lage ist numerisch nicht eindeutig. Verschiebe das betreffende Bauteil etwas und lasse es erneut einrasten.';
 $('#totals').innerHTML=`<div class="total"><span>Gesamtvolumen</span><strong>${!result.valid?'—':reveal?format(result.v)+' cm³':'? cm³'}</strong></div><div class="total"><span>Äußere Oberfläche</span><strong>${!result.valid?'—':reveal?format(result.o)+' cm²':'? cm²'}</strong></div>`;
 $('#calculation-body').innerHTML=reveal?mathHTML(parts,result):'<p class="explain">Berechne zuerst selbst. Du kannst die Ergebnisse einblenden oder die Musterlösung deiner Aufgabe öffnen.</p>';
 if($('#show-contacts').checked&&result.contacts.length)$('#calculation-body').insertAdjacentHTML('afterbegin','<p class="explain">Orange markiert die gemeinsamen Flächen – auch wenn sie im Inneren des Bauwerks liegen.</p>');
}
function refresh(){
 result=calculate(parts);$('#part-count').textContent=`(${parts.length})`;
 $('#parts-list').innerHTML=parts.map((p,i)=>`<button class="part-button" data-select="${p.id}" aria-pressed="${p.id===selected}"><span class="swatch" style="background:${color(p)}"></span><span>${i+1}. ${name(p)}<br><small>${dimensions(p)}</small></span></button>`).join('')||'<p class="hint">Noch keine Bauteile. Füge oben eines hinzu.</p>';
 const p=current();$('#selection-tools').hidden=!p;
 if(p){const b=bounds(p);$('#selection-info').textContent=`Ausgewählt: ${name(p)} · X ${short(p.pos[0])} / Z ${short(p.pos[2])} / Unterkante ${short(b.min[1])} cm`;}
 const oldTarget=$('#stack-target').value;$('#stack-target').innerHTML=parts.filter(p=>p.id!==selected).map(p=>`<option value="${p.id}">${parts.indexOf(p)+1}. ${name(p)} · ${dimensions(p)}</option>`).join('');
 if(parts.some(p=>p.id===oldTarget&&p.id!==selected))$('#stack-target').value=oldTarget;
 $('#stack').disabled=parts.length<2;$('#undo').disabled=!history.length;$('#redo').disabled=!future.length;
 drawParts();drawAnnotations();renderMath();
}
function snap(p){
 const initial=[...p.pos],a=bounds(p),candidates=[];
 for(const q of parts){if(q.id===p.id)continue;const b=bounds(q);
  for(let axis=0;axis<3;axis++)for(const sign of [-1,1]){
   const delta=sign>0?b.max[axis]-a.min[axis]:b.min[axis]-a.max[axis];if(Math.abs(delta)>.35)continue;
   if([0,1,2].filter(i=>i!==axis).some(i=>Math.min(a.max[i],b.max[i])-Math.max(a.min[i],b.min[i])<.05))continue;
   const pos=[...initial];pos[axis]+=delta;candidates.push({pos,distance:Math.abs(delta)});
  }
 }
 candidates.sort((a,b)=>a.distance-b.distance);
 for(const c of candidates){p.pos=c.pos;if(bounds(p).min[1]>=-1e-7&&parts.every(q=>q===p||overlap(p,q)===false))return true;}
 p.pos=initial;return false;
}
function move(axis,amount){const p=current();if(!p)return;change(()=>{p.pos[axis]+=amount;onFloor(p);},'Bauteil verschoben.');}
function rotate(axis){const p=current();if(!p)return;change(()=>{p.rot=turn(p.rot,axis);onFloor(p);},'Bauteil um 90° gedreht.');}
$('#shape').addEventListener('change',updateLabels);
$('#builder').addEventListener('submit',event=>{event.preventDefault();change(()=>{if(parts.length>=20)throw new Error('Maximal 20 Bauteile. Entferne zuerst ein Bauteil.');const p=formPart(String(nextId++));if(parts.length)p.pos[0]=Math.max(...parts.map(q=>bounds(q).max[0]))-bounds(p).min[0]+1;parts.push(p);selected=p.id;},'Bauteil mit deinen eingegebenen Maßen hinzugefügt.');fit();});
$('#parts-list').addEventListener('click',e=>{const button=e.target.closest('[data-select]');if(button)select(button.dataset.select);});
$('#copy-dimensions').addEventListener('click',()=>{if(current()){fillDimensions(current());message('Die Maße der Auswahl stehen jetzt in den Eingabefeldern.');}});
$('#apply-dimensions').addEventListener('click',()=>{if(!current()||!$('#builder').reportValidity())return;change(()=>{const old=current(),p=formPart(old.id),bottom=bounds(old).min[1];p.rot=[...old.rot];p.pos=[...old.pos];p.pos[1]+=bottom-bounds(p).min[1];parts[parts.indexOf(old)]=p;},'Ausgewähltes Bauteil angepasst.');fit();});
all('[data-move]').forEach(b=>b.addEventListener('click',()=>{const [axis,sign]=b.dataset.move.split(':');move('xyz'.indexOf(axis),Number(sign)*Number($('#step').value));}));
all('[data-turn]').forEach(b=>b.addEventListener('click',()=>rotate(b.dataset.turn)));
$('#floor').addEventListener('click',()=>{if(current())change(()=>{current().pos[1]-=bounds(current()).min[1];},'Bauteil auf den Boden gesetzt.');});
$('#stack').addEventListener('click',()=>{const p=current(),q=parts.find(p=>p.id===$('#stack-target').value);if(!p||!q)return;change(()=>{const pb=bounds(p),qb=bounds(q),midA=mul(add(pb.min,pb.max),.5),midB=mul(add(qb.min,qb.max),.5);p.pos[0]+=midB[0]-midA[0];p.pos[2]+=midB[2]-midA[2];p.pos[1]+=qb.max[1]-pb.min[1];},'Bauteil mittig aufgesetzt. Kontaktflächen sind orange markiert.');fit();});
$('#delete').addEventListener('click',()=>{if(current())change(()=>{parts=parts.filter(p=>p.id!==selected);selected=parts.at(-1)?.id||null;},'Bauteil entfernt. Mit Rückgängig wiederherstellbar.');});
$('#clear').addEventListener('click',()=>change(()=>{parts=[];selected=null;},'Baufläche geleert. Mit Rückgängig wiederherstellbar.'));
$('#undo').addEventListener('click',()=>{if(!history.length)return;future.push(snapshot());const s=history.pop();parts=s.parts;selected=s.selected;$('#task-feedback').textContent='';$('#answer-feedback').textContent='';refresh();message('Letzte Änderung rückgängig gemacht.');});
$('#redo').addEventListener('click',()=>{if(!future.length)return;history.push(snapshot());const s=future.pop();parts=s.parts;selected=s.selected;$('#task-feedback').textContent='';$('#answer-feedback').textContent='';refresh();message('Änderung wiederholt.');});
all('[data-view]').forEach(b=>b.addEventListener('click',()=>fit(b.dataset.view)));$('#fit').addEventListener('click',()=>fit());
for(const id of ['show-dimensions','show-contacts','reveal'])$('#'+id).addEventListener('change',()=>{drawAnnotations();renderMath();});
function newTask(){
 task=makeTask($('#difficulty').value);parts=[];selected=null;history=[];future=[];$('#solution').open=false;$('#task-feedback').textContent='';$('#answer-feedback').textContent='';$('#answer-v').value='';$('#answer-o').value='';$('#reveal').checked=false;
 $('#task-description').innerHTML=`<p>Baue die Teile <strong>von unten nach oben</strong> mittig aufeinander. Die Grundflächen sind waagrecht. Alle Maße in cm.</p><ol class="task-parts">${task.parts.map((p,i)=>`<li><strong>${i+1}. ${name(p)}</strong><br>${dimensions(p)}<br><button data-prepare="${i}">Maße in die Eingabe übernehmen</button></li>`).join('')}</ol>`;
 $('#solution-body').innerHTML='<p>Diese Lösung gehört zur Aufgaben-Vorlage, unabhängig von deinem Bauwerk.</p>'+mathHTML(task.parts,calculate(task.parts));
 refresh();fit();message('Neue Aufgabe. Die Teileliste gibt die Reihenfolge von unten nach oben an.');
}
function setMode(value){mode=value;$('#free-mode').setAttribute('aria-pressed',value==='free');$('#task-mode').setAttribute('aria-pressed',value==='task');$('#task-panel').hidden=value==='free';if(value==='task'&&!task)newTask();else refresh();}
$('#free-mode').addEventListener('click',()=>setMode('free'));$('#task-mode').addEventListener('click',()=>setMode('task'));$('#new-task').addEventListener('click',newTask);
$('#task-description').addEventListener('click',e=>{const b=e.target.closest('[data-prepare]');if(b){fillDimensions(task.parts[Number(b.dataset.prepare)]);message('Die Maße dieses Aufgabenteils sind eingetragen. Klicke auf „Bauteil hinzufügen“.');}});
$('#check-task').addEventListener('click',()=>{const check=checkTask(parts,task);$('#task-feedback').textContent=check.message;$('#task-feedback').className=check.ok?'ok':'error';});
$('#answer-form').addEventListener('submit',e=>{e.preventDefault();const read=id=>{const s=$(id).value.trim();return /^\d+(?:[.,]\d+)?$/.test(s)?Number(s.replace(',','.')):NaN;};const v=read('#answer-v'),o=read('#answer-o');if(!Number.isFinite(v)||!Number.isFinite(o)){$('#answer-feedback').textContent='Gib zwei nichtnegative Zahlen ein. Komma oder Punkt sind möglich.';return;}const target=calculate(task.parts),vOK=Math.abs(v-target.v)<=.011,oOK=Math.abs(o-target.o)<=.011;$('#answer-feedback').textContent=vOK&&oOK?'Beide Ergebnisse stimmen (auf zwei Nachkommastellen gerundet).':`${vOK?'Das Volumen stimmt.':'Prüfe das Volumen: Addiere die Einzelvolumina.'} ${oOK?'Die Oberfläche stimmt.':'Prüfe die Oberfläche: Ziehe jede Kontaktfläche zweimal ab.'}`;$('#answer-feedback').className=vOK&&oOK?'ok':'error';});

// Pointer capture also ends a drag correctly outside the canvas; controls are explicit for touch.
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let drag=null;
function ray(event){const r=renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);}
renderer.domElement.addEventListener('pointerdown',e=>{
 if(drag||$('#drag-tool').value==='camera')return;
 ray(e);const hit=raycaster.intersectObjects(meshes.children,false)[0];if(!hit)return;
 select(hit.object.userData.id);const p=current();controls.enabled=false;
 const lift=e.button===2||$('#drag-tool').value==='lift';let normal=new THREE.Vector3(0,1,0);
 if(lift){camera.getWorldDirection(normal);normal.y=0;if(normal.length()<.01)normal.set(0,0,1);normal.normalize();}
 const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(normal,new THREE.Vector3(...p.pos)),point=new THREE.Vector3();
 if(!raycaster.ray.intersectPlane(plane,point)){controls.enabled=true;return;}
 drag={id:p.id,before:snapshot(),plane,offset:new THREE.Vector3(...p.pos).sub(point),lift,pointer:e.pointerId};renderer.domElement.setPointerCapture(e.pointerId);e.stopImmediatePropagation();
},true);
renderer.domElement.addEventListener('pointermove',e=>{
 if(!drag||e.pointerId!==drag.pointer)return;ray(e);const point=new THREE.Vector3();if(!raycaster.ray.intersectPlane(drag.plane,point))return;
 const p=parts.find(p=>p.id===drag.id);point.add(drag.offset);if(drag.lift)p.pos[1]=point.y;else{p.pos[0]=point.x;p.pos[2]=point.z;}
 p.pos=p.pos.map(v=>Math.max(-95,Math.min(95,v)));onFloor(p);refresh();
});
function endDrag(e){if(!drag||e.pointerId!==drag.pointer)return;const p=current();if(e.type==='pointercancel'){parts=drag.before.parts;selected=drag.before.selected;}else{if($('#snap').checked)snap(p);if(JSON.stringify(parts)!==JSON.stringify(drag.before.parts))record(drag.before);}if(renderer.domElement.hasPointerCapture(e.pointerId))renderer.domElement.releasePointerCapture(e.pointerId);drag=null;controls.enabled=true;$('#task-feedback').textContent='';$('#answer-feedback').textContent='';refresh();}
renderer.domElement.addEventListener('pointerup',endDrag);renderer.domElement.addEventListener('pointercancel',endDrag);renderer.domElement.addEventListener('lostpointercapture',e=>{if(drag)endDrag(e);});renderer.domElement.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;if(['q','e'].includes(e.key.toLowerCase())){e.preventDefault();rotate(e.key.toLowerCase()==='q'?'x':'z');}});
renderer.domElement.addEventListener('webglcontextlost',()=>message('Die 3D-Anzeige wurde unterbrochen. Lade die Seite neu, wenn sie nicht wieder erscheint.'));
updateLabels();refresh();resize();fit();renderer.setAnimationLoop(()=>{controls.update();renderer.render(scene,camera);});
