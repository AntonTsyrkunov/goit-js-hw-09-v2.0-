const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");let d;e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,d=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,clearInterval(d)})),t.disabled=!0,console.log(o.style.backgroundColor);
//# sourceMappingURL=01-color-switcher.cbaa1038.js.map
