(function(){
var items=window.GALLERY_ITEMS||[],grid=document.getElementById("gallery-grid"),filter="all",visible=[],cur=0;
var L=function(){return window.getLang?window.getLang():"el"};
var cap=function(it){return L()==="en"?it.caption_en:it.caption_el};
var PLAY='<svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z"/></svg>';
function esc(t){var d=document.createElement("div");d.textContent=t;return d.innerHTML}
function render(){
 visible=items.filter(function(it){return filter==="all"||(filter==="video"?it.type==="video":it.category===filter)});
 grid.innerHTML=visible.map(function(it,i){var img=it.type==="video"?it.poster:it.src;
  return '<button class="gcard'+(it.type==="video"?" is-video":"")+'" data-i="'+i+'"><span class="gthumb"><img src="'+img+'" alt="'+esc(cap(it))+'" loading="lazy" decoding="async">'+
  (it.type==="video"?'<span class="play">'+PLAY+'</span>':'')+'</span><span class="gcap">'+esc(cap(it))+'</span></button>'}).join("");
}
document.querySelectorAll(".filters button").forEach(function(b){b.onclick=function(){filter=b.dataset.filter;
 document.querySelectorAll(".filters button").forEach(function(x){x.classList.toggle("active",x===b)});render()}});
grid.onclick=function(e){var c=e.target.closest(".gcard");if(c)open(+c.dataset.i)};
var lb=document.getElementById("lb"),media=document.getElementById("lb-media"),lcap=document.getElementById("lb-cap");
function show(){var it=visible[cur];
 media.innerHTML=it.type==="video"?'<video controls playsinline preload="metadata" poster="'+it.poster+'" src="'+it.src+'"></video>':'<img src="'+it.src+'" alt="">';
 media.querySelector("img")&&(media.querySelector("img").alt=cap(it));
 lcap.textContent=cap(it)+"  ("+(cur+1)+" / "+visible.length+")";}
function open(i){cur=i;show();lb.hidden=false;document.body.classList.add("lb-open");lb.querySelector(".lb-close").focus()}
function close(){lb.hidden=true;media.innerHTML="";document.body.classList.remove("lb-open")}
function step(d){cur=(cur+d+visible.length)%visible.length;show()}
lb.querySelector(".lb-close").onclick=close;lb.querySelector(".prev").onclick=function(){step(-1)};lb.querySelector(".next").onclick=function(){step(1)};
lb.onclick=function(e){if(e.target===lb)close()};
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")step(-1);if(e.key==="ArrowRight")step(1)});
var x0=null;lb.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)step(dx<0?1:-1);x0=null});
// before/after
var BA=window.BEFORE_AFTER,ba=document.getElementById("ba");
if(BA&&ba){ba.querySelector(".ba-after").src=BA.after;ba.querySelector(".ba-before img").src=BA.before;
 var r=ba.querySelector(".ba-range");var upd=function(){ba.style.setProperty("--pos",r.value+"%")};r.oninput=upd;upd();
}
function setCaps(){render();if(BA)document.getElementById("ba-cap").textContent=L()==="en"?BA.caption_en:BA.caption_el;
 if(!lb.hidden)show();}
document.addEventListener("langchange",setCaps);setCaps();
})();
