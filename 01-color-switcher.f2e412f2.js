let t=t=>document.querySelector(t);const e=document.querySelector("body"),a=t("[data-start]"),r=t("[data-stop]");t("[data-start]").addEventListener("click",(function(){a.setAttribute("disabled",!0),r.removeAttribute("disabled"),d=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t("[data-stop]").addEventListener("click",(function(){a.removeAttribute("disabled"),r.setAttribute("disabled",!0),clearInterval(d)}));let d=null;
//# sourceMappingURL=01-color-switcher.f2e412f2.js.map
