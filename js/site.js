const v=document.getElementById('viewer'),stage=v.querySelector('.stage'),cap=v.querySelector('.cap');
document.addEventListener('click',e=>{
const a=e.target.closest('a.pic,a.vidlink');
if(!a||!v.showModal)return;
e.preventDefault();
stage.replaceChildren();
if(a.classList.contains('vidlink')){const m=document.createElement('video');m.src=a.href;m.controls=true;m.autoplay=true;stage.append(m);cap.textContent='';}
else{const i=a.querySelector('img'),b=document.createElement('img');b.src=a.href;b.alt=i?i.alt:'';stage.append(b);cap.textContent=i?i.alt:'';}
v.showModal();
});
v.addEventListener('click',e=>{if(e.target===v||e.target.closest('.close'))v.close()});
v.addEventListener('close',()=>stage.replaceChildren());
