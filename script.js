// scripts.js — lecture, calcul, tracé


async function fetchText(path){
const res = await fetch(path);
if(!res.ok) throw new Error('Impossible de charger '+path+' (status '+res.status+')');
return res.text();
}


function parseData(txt){
const lines = txt.split(/\r?\n/).filter(l=>l.trim()&&!l.trim().startsWith('#'));
const arr = lines.map(l=>{
const parts = l.trim().split(/\s+/);
return parts.map(Number);
});
return arr;
}


// simple linear regression y = a*x + b
function linreg(x,y){
const n=x.length;
const sx=x.reduce((s,v)=>s+v,0);
const sy=y.reduce((s,v)=>s+v,0);
const sxx=x.reduce((s,v)=>s+v*v,0);
const sxy=x.reduce((s,v,i)=>s+v*y[i],0);
const denom = n*sxx - sx*sx;
const a = (n*sxy - sx*sy)/denom;
const b = (sy - a*sx)/n;
return {a,b};
}


// polynomial fit degree 2 via normal equations
function polyfit2(x,y){
const n = x.length;
let S0=n, S1=0, S2=0, S3=0, S4=0, T0=0, T1=0, T2=0;
for(let i=0;i<n;i++){
const xi=x[i], yi=y[i];
const xi2=xi*xi, xi3=xi2*xi, xi4=xi3*xi;
S1 += xi; S2 += xi2; S3 += xi3; S4 += xi4;
T0 += yi; T1 += yi*xi; T2 += yi*xi2;
}
// Matrix [[S0,S1,S2],[S1,S2,S3],[S2,S3,S4]] * [c0,c1,c2] = [T0,T1,T2]
const M = [[S0,S1,S2],[S1,S2,S3],[S2,S3,S4]];
const B = [T0,T1,T2];
// Solve via Cramer's rule
function det3(m){
return m[0][0]*(m[1][1]*m[2][2]-m[1][2]*m[2][1]) - m[0][1]*(m[1][0]*m[2][2]-m[1][2]*m[2][0]) + m[0][2]*(m[1][0]*m[2][1]-m[1][1]*m[2][0]);
}
const D = det3(M);
if(Math.abs(D) < 1e-12) return null;
function replaceCol(mat,col,vec){
const m = mat.map(r=>r.slice());
for(let i=0;i<3;i++) m[i][col]=vec[i];
return m;
}
const Dx = det3(replaceCol(M,0,B));
const Dy = det3(replaceCol(M,1,B));
const Dz = det3(replaceCol(M,2,B));
const c0 = Dx/D, c1 = Dy/D, c2 = Dz/D;
// returns c0 + c1*x + c2*x^2
readAndRender();
