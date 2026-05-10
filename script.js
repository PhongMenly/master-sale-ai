// NAVBAR SCROLL
const nav=document.getElementById('nav'),fb=document.getElementById('floatBtn');
window.addEventListener('scroll',()=>{
 nav.classList.toggle('scrolled',scrollY>50);
 fb.classList.toggle('show',scrollY>500);
});

// MOBILE MENU
const mb=document.getElementById('navMb'),mn=document.getElementById('mobNav');
if(mb)mb.onclick=()=>mn.classList.toggle('on');
mn.querySelectorAll('a').forEach(a=>a.onclick=()=>mn.classList.remove('on'));

// COUNTDOWN
function cd(){
 const now=new Date(),end=new Date('2025-05-25T23:59:59+07:00');
 if(now>end)end.setDate(end.getDate()+7);
 const u=()=>{
  const d=end-new Date();if(d<=0)return;
  document.getElementById('cdD').textContent=String(Math.floor(d/864e5)).padStart(2,'0');
  document.getElementById('cdH').textContent=String(Math.floor(d%864e5/36e5)).padStart(2,'0');
  document.getElementById('cdM').textContent=String(Math.floor(d%36e5/6e4)).padStart(2,'0');
  document.getElementById('cdS').textContent=String(Math.floor(d%6e4/1e3)).padStart(2,'0');
 };
 u();setInterval(u,1000);
}
cd();

// SCROLL REVEAL
const obs=new IntersectionObserver((es)=>{
 es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}});
},{threshold:.1});
document.querySelectorAll('.fadeIn').forEach((el,i)=>{
 el.classList.add('d'+(i%3+1));obs.observe(el);
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.onclick=function(e){
  const t=document.querySelector(this.getAttribute('href'));
  if(t){e.preventDefault();scrollTo({top:t.offsetTop-72,behavior:'smooth'})}
 };
});

console.log('Master Sale AI - Loaded');
