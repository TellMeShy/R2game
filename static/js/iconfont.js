(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-iconfont303" viewBox="0 0 1024 1024">'+""+'<path d="M192 320l640 0c35.392 0 64-28.672 64-64s-28.608-64-64-64L192 192C156.608 192 128 220.672 128 256S156.608 320 192 320z"  ></path>'+""+'<path d="M832 448 192 448C156.608 448 128 476.672 128 512c0 35.392 28.608 64 64 64l640 0c35.392 0 64-28.608 64-64C896 476.672 867.392 448 832 448z"  ></path>'+""+'<path d="M832 704 192 704c-35.392 0-64 28.608-64 64s28.608 64 64 64l640 0c35.392 0 64-28.608 64-64S867.392 704 832 704z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)