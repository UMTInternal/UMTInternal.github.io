/* ==========================================
   BACK TO TOP
   The button lives in the footer component, which is fetched after
   DOMContentLoaded — so look it up on every scroll and use a delegated
   click handler instead of binding to it once at startup.
========================================== */

function backToTop(){

if(window.__backToTopReady) return;

window.__backToTopReady=true;

window.addEventListener("scroll",()=>{

const btn=document.querySelector(".back-to-top");

if(btn) btn.classList.toggle("show",window.scrollY>400);

},{passive:true});

document.addEventListener("click",e=>{

if(!e.target.closest(".back-to-top")) return;

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

backToTop();
