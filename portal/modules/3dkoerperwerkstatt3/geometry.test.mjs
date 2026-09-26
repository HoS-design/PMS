import test from 'node:test';
import assert from 'node:assert/strict';
import {makePart,measure,calculate,overlap,contact,turn,IDENTITY,makeTask,checkTask,circlePolygonArea,circleCircleArea} from './geometry.mjs';
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-6,`${actual} ≠ ${expected}`);
const box=(id,pos,a=2,b=2,h=2)=>({...makePart('box',a,b,h,id),pos});
test('single solids and inputs',()=>{
 near(measure(makePart('box',3,4,5)).v,60);near(measure(makePart('box',3,4,5)).o,94);
 near(measure(makePart('cylinder',2,0,3)).v,12*Math.PI);
 near(measure(makePart('cone',3,0,4)).o,24*Math.PI);
 near(measure(makePart('pyramid',6,0,4)).o,96);
 assert.throws(()=>calculate([makePart('box',NaN,2,2)]));
});
test('two cubes touching on every axis; partial contact; gap',()=>{
 const a=box('a',[0,1,0]);
 for(const pos of [[2,1,0],[-2,1,0],[0,3,0],[0,-1,0],[0,1,2],[0,1,-2]]){
  const c=calculate([a,box('b',pos)]);assert.equal(c.valid,true);near(c.area,4);near(c.o,40);near(c.v,16);
 }
 const shifted=calculate([a,box('b',[1,3,0])]);near(shifted.area,2);near(shifted.o,44);
 const gap=calculate([a,box('b',[0,3.01,0])]);near(gap.area,0);near(gap.o,48);
});
test('analytic overlap distinguishes penetration and contact',()=>{
 assert.equal(overlap(box('a',[0,1,0]),box('b',[0,1,0])),true);
 assert.equal(overlap(box('a',[0,1,0]),box('b',[1.99,1,0])),true);
 for(const s of ['box','cylinder','cone','pyramid'])for(const t of ['box','cylinder','cone','pyramid']){
  const p=makePart(s,2,2,3,'a'),q=makePart(t,2,2,3,'b');assert.equal(overlap(p,q),true,`${s}/${t}`);
  q.pos=[10,1.5,0];assert.equal(overlap(p,q),false);
 }
 const cyl=makePart('cylinder',1,0,2,'c');cyl.pos=[2,1,0];assert.equal(overlap(box('b',[0,1,0]),cyl),false);
 cyl.pos[0]=1.99;assert.equal(overlap(box('b',[0,1,0]),cyl),true);
 const invalid=calculate([box('a',[0,1,0]),box('b',[1,1,0])]);assert.equal(invalid.valid,false);assert.equal(invalid.v,null);
});
test('circle intersections including partial circles and rectangles',()=>{
 near(circleCircleArea([0,0],1,[0,0],2),Math.PI);
 near(circleCircleArea([0,0],1,[1,0],1),2*Math.PI/3-Math.sqrt(3)/2);
 near(circlePolygonArea([0,0],1,[[0,-2],[2,-2],[2,2],[0,2]]),Math.PI/2);
 near(circlePolygonArea([0,0],2,[[-1,-1],[1,-1],[1,1],[-1,1]]),4);
 near(circlePolygonArea([0,0],1,[[3,3],[4,3],[4,4],[3,4]]),0);
 const c=makePart('cylinder',1,0,2,'c');c.pos=[0,3,0];near(calculate([box('b',[0,1,0]),c]).area,Math.PI);
 c.pos[0]=1;near(calculate([box('b',[0,1,0]),c]).area,Math.PI/2);
});
test('rotation and tip contacts do not subtract a fictitious base',()=>{
 let m=[...IDENTITY];for(let i=0;i<4;i++)m=turn(m,'x');assert.deepEqual(m,IDENTITY);
 const cyl=makePart('cylinder',1,0,4,'c');cyl.rot=turn(IDENTITY,'z');cyl.pos=[0,1,0];
 const b=box('b',[3,1,0]);near(calculate([cyl,b]).area,Math.PI);
 for(const s of ['cone','pyramid']){const p=makePart(s,2,2,2,'p');near(calculate([p,box('b',[0,3,0])]).area,0);}
 const p=makePart('pyramid',2,2,2,'p');p.rot=turn(turn(IDENTITY,'x'),'x');p.pos=[0,3,0];near(calculate([p,box('b',[0,1,0])]).area,0);
});
test('random axis-aligned box overlap against independent interval oracle',()=>{
 let seed=6;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<300;i++){
  const a=box('a',[rand()*5,rand()*5,rand()*5]),b=box('b',[rand()*5,rand()*5,rand()*5]);
  const expected=a.pos.every((x,j)=>Math.abs(x-b.pos[j])<2);assert.equal(overlap(a,b),expected);
 }
});
test('task solution validates parts and placement, not aggregate numbers',()=>{
 const task={parts:[box('t1',[0,1,0]),box('t2',[0,3,0])]};
 assert.equal(checkTask([box('a',[0,1,0]),box('b',[0,3,0])],task).ok,true);
 assert.equal(checkTask([box('a',[0,1,0]),box('b',[2,1,0])],task).ok,false); // same V and O
 assert.equal(checkTask([box('a',[0,1,0]),box('b',[0,3.05,0])],task).ok,false);
 for(let i=0;i<30;i++){const t=makeTask(i%2?'easy':'expert');assert.equal(calculate(t.parts).valid,true);assert.equal(checkTask(t.parts,t).ok,true);}
});
