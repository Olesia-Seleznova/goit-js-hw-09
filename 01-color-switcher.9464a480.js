let t=t=>document.querySelector(t);const e=document.querySelector("body");t("[data-start]").addEventListener("click",(function(){n=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t("[data-stop]").addEventListener("click",(function(){clearInterval(n)}));let n=null;
//# sourceMappingURL=01-color-switcher.9464a480.js.map
