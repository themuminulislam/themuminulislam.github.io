/* Shared mouse & scroll effects. Remove the <script src=fx.js> line from a page to switch them off there. */
(()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const d=document,tc=matchMedia('(hover:none)').matches;

const cv=d.createElement('canvas'),g2=cv.getContext('2d'),S=30,R=120;cv.id='dots';d.body.prepend(cv);d.body.classList.add('dc');
let W,H,P=[],mx=-999,my=-999,col='rgba(255,255,255,.1)',ac='#2ee6c0',fr=0,still=false;
const init=()=>{const r=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*r;cv.height=H*r;cv.style.width=W+'px';cv.style.height=H+'px';g2.setTransform(r,0,0,r,0,0);P=[];for(let y=S/2;y<H+S;y+=S)for(let x=S/2;x<W+S;x+=S)P.push({x,y,hx:x,hy:y,vx:0,vy:0});still=false};
init();addEventListener('resize',init);
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;still=false});
const away=()=>{mx=my=-999;still=false};d.documentElement.addEventListener('mouseleave',away);addEventListener('blur',away);addEventListener('pointerup',e=>{if(e.pointerType=='touch')away()});
(function f(){if(fr++%40==0){const cs=getComputedStyle(d.documentElement),c1=cs.getPropertyValue('--dot').trim()||col;if(c1!=col){col=c1;still=false}ac=cs.getPropertyValue('--ac').trim()||ac}
if(still){requestAnimationFrame(f);return}
g2.clearRect(0,0,W,H);let mv=0;
for(const p of P){const dx=p.x-mx,dy=p.y-my,dd=dx*dx+dy*dy;if(dd<R*R&&dd>.1){const di=Math.sqrt(dd),k=(1-di/R)**2*3.4;p.vx+=dx/di*k;p.vy+=dy/di*k}
p.vx+=(p.hx-p.x)*.07;p.vy+=(p.hy-p.y)*.07;p.vx*=.82;p.vy*=.82;p.x+=p.vx;p.y+=p.vy;mv+=Math.abs(p.vx)+Math.abs(p.vy);
const off=Math.abs(p.x-p.hx)+Math.abs(p.y-p.hy),hot=off>3;g2.globalAlpha=hot?Math.min(1,.4+off/40):1;g2.fillStyle=hot?ac:col;g2.beginPath();g2.arc(p.x,p.y,hot?1.8:1.2,0,6.283);g2.fill()}
if(mv<.05&&mx<0)still=true;requestAnimationFrame(f)})();
const g=d.createElement('div');g.id='dot';d.body.appendChild(g);let px=0,py=0,tx=0,ty=0;addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY});(function f(){px+=(tx-px)*.2;py+=(ty-py)*.2;g.style.transform=`translate(${px}px,${py}px)`;requestAnimationFrame(f)})();
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
const acc=()=>d.querySelectorAll('h2:not([data-w])').forEach(h=>{const w=h.textContent.trim().split(' ');if(!h.textContent.trim()||h.children.length)return;h.dataset.w=1;if(w.length>1){const l=w.pop(),s=d.createElement('span');s.className='gt';s.textContent=l;h.textContent=w.join(' ')+' ';h.append(s)}});
const scan=()=>acc()||d.querySelectorAll('.card,h2,.rv').forEach(el=>{if(!el.dataset.r){el.dataset.r=1;el.classList.add('rv');io.observe(el)}});
d.addEventListener('pointermove',e=>{const c=e.target.closest('.card'),b=e.target.closest('.btn');
if(c&&!tc){const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg) translateY(-4px)`}
if(b&&!tc){const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`}});
d.addEventListener('pointerout',e=>{const c=e.target.closest('.card,.btn');if(c&&!c.contains(e.relatedTarget))c.style.transform=''});
new MutationObserver(scan).observe(d.body,{childList:true,subtree:true});scan()})();
