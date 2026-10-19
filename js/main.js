(function(){
var C=window.SITE_CONFIG;
var EN={nav_services:"Services",nav_why:"Why us",nav_process:"Process",nav_gallery:"Gallery",nav_faq:"FAQ",nav_quote:"Free quote",
hero_eyebrow:"Athens and Attica",hero_title:"Painting and Plastering Services in Athens",hero_sub:"Professional painting, external thermal insulation and plastering for homes and buildings, with clean work and a flawless finish.",cta_quote:"Get a free quote",hp1:"Free inspection",hp2:"Written quote",hp3:"Clean-up after the job",
svc_eyebrow:"Services",svc_title:"What we do",svc_sub:"Complete solutions for the inside and outside of your property.",
s1_t:"Painting",s1_d:"Interior and exterior painting with careful preparation and quality materials.",s1_1:"Interior walls",s1_2:"Exterior walls and facades",s1_3:"Ceilings",s1_4:"Clean, even finishing",
s2_t:"External thermal insulation",s2_d:"External wall insulation that keeps your home cooler in summer and warmer in winter.",s2_1:"Insulation board installation",s2_2:"Reinforcement mesh and plaster",s2_3:"Smooth, durable finish",s2_4:"Energy savings",s2_note:"External insulation may be an eligible upgrade under Greek energy-efficiency programs such as \"Exoikonomo\". Terms vary by program, so please check the current requirements.",
s3_t:"Plastering & wall repairs",s3_d:"Restoring walls so they are level, sound and ready for paint.",s3_1:"Surface leveling",s3_2:"Crack repair",s3_3:"Damp treatment",s3_4:"New plastering",
why_eyebrow:"Why us",why_title:"Work you can trust",w1_t:"Clean work",w1_d:"We protect floors and furniture and leave your space clean.",w2_t:"On time",w2_d:"We agree on a schedule up front and stick to it.",w3_t:"Free inspection & quote",w3_d:"We visit, assess the space and give you a quote with no obligation.",w4_t:"Clear pricing",w4_d:"A detailed written quote with no hidden charges.",
pr_eyebrow:"Process",pr_title:"How it works",p1_t:"Contact",p1_d:"Call us or send a WhatsApp message.",p2_t:"Free inspection",p2_d:"We visit the property and discuss your needs.",p3_t:"Written quote",p3_d:"You get a detailed quote with cost and timeline.",p4_t:"Work done",p4_d:"We complete the job with attention to detail.",p5_t:"Final clean",p5_d:"We hand over the space clean and ready.",
g_eyebrow:"Gallery",g_title:"Photos and videos",g_sub:"The types of work we take on: painting, thermal facades and plastering.",g_note:"Indicative photos",gf_all:"All",gf_plaster:"Plastering",gf_video:"Videos",ba_title:"Before and after",ba_before:"Before",ba_after:"After",sample:"Δείγμα / Sample",
f_eyebrow:"FAQ",f_title:"Have questions?",q1:"Do you charge for the inspection and quote?",a1:"No. The inspection and written quote are free and without obligation.",q2:"Which areas do you cover?",a2:"We work in Athens and the surrounding areas of Attica. Get in touch to confirm your area.",q3:"How long does it take to paint an apartment?",a3:"It depends on the size and the condition of the walls. After the inspection we give you a specific timeline.",q4:"Is external insulation subsidized?",a4:"External insulation is often included in energy upgrade programs such as \"Exoikonomo\". Terms and amounts are set by each program, so we recommend checking the current requirements.",q5:"Do I need to empty the room?",a5:"Not necessarily. We carefully move and cover furniture and floors before we start.",
c_eyebrow:"Contact",c_title:"Request a free quote",c_sub:"Fill in the form and WhatsApp will open with your message ready to send.",addr:"Germanikou 14, Athina 104 36, Greece",
f_name:"Full name",f_phone:"Phone",f_area:"Area",f_area_ph:"e.g. Kypseli",f_service:"Service",f_other:"Other",f_msg:"Message",f_msg_ph:"Briefly describe the job",f_err:"Please enter your name and phone.",f_send:"Send via WhatsApp",
ft_d:"Painting, external thermal insulation and plastering in Athens.",ft_r:"All rights reserved."};
var EL={},PH={};
document.querySelectorAll("[data-i18n]").forEach(function(e){EL[e.dataset.i18n]=e.textContent});
document.querySelectorAll("[data-i18n-ph]").forEach(function(e){PH[e.dataset.i18nPh]=e.placeholder});
window.getLang=function(){return lang};var lang=localStorage.getItem("lang")||"el";
function setLang(l){lang=l;localStorage.setItem("lang",l);document.documentElement.lang=l;document.dispatchEvent(new CustomEvent("langchange",{detail:l}));
 document.querySelectorAll("[data-i18n]").forEach(function(e){var k=e.dataset.i18n;e.textContent=l==="en"?(EN[k]||EL[k]):EL[k]});
 document.querySelectorAll("[data-i18n-ph]").forEach(function(e){var k=e.dataset.i18nPh;e.placeholder=l==="en"?EN[k]:PH[k]});
 document.querySelectorAll(".lang button").forEach(function(b){b.classList.toggle("active",b.dataset.lang===l)});}
document.querySelectorAll(".lang button").forEach(function(b){b.onclick=function(){setLang(b.dataset.lang)}});
setLang(lang);
document.querySelectorAll(".js-phone").forEach(function(e){e.textContent=C.PHONE_DISPLAY});
document.querySelectorAll(".js-tel").forEach(function(e){e.href="tel:+"+C.PHONE_E164});
document.querySelectorAll(".js-wa").forEach(function(e){e.href="https://wa.me/"+C.PHONE_E164;e.target="_blank";e.rel="noopener"});
document.getElementById("yr").textContent=new Date().getFullYear();
var bg=document.getElementById("burger"),menu=document.getElementById("menu");
bg.onclick=function(){var o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
menu.querySelectorAll("a").forEach(function(a){a.onclick=function(){menu.classList.remove("open");bg.setAttribute("aria-expanded",false)}});
var hd=document.querySelector(".header");addEventListener("scroll",function(){hd.classList.toggle("scrolled",scrollY>10)});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(function(e){io.observe(e)});
document.getElementById("quote").onsubmit=function(ev){ev.preventDefault();var f=ev.target,g=function(n){return f[n].value.trim()};
 var err=document.getElementById("err");if(!g("name")||!g("phone")){err.hidden=false;return}err.hidden=true;
 var L=lang==="en"?["Hello, I would like a free quote.","Name","Phone","Area","Service","Message"]:["Γεια σας, θα ήθελα μια δωρεάν προσφορά.","Όνομα","Τηλέφωνο","Περιοχή","Υπηρεσία","Μήνυμα"];
 var msg=L[0]+"\n"+L[1]+": "+g("name")+"\n"+L[2]+": "+g("phone")+"\n"+L[3]+": "+g("area")+"\n"+L[4]+": "+f.service.value+"\n"+L[5]+": "+g("message");
 window.open("https://wa.me/"+C.PHONE_E164+"?text="+encodeURIComponent(msg),"_blank","noopener");};
})();
