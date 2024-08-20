import { CloakerResponse } from "../../interfaces/CloakerResponse";

export const response0: CloakerResponse = {
    vsl: `<div id="vid_66be33897036e1000bbf0f0e" style="position:relative;width:100%;padding: 100% 0 0;"> <img id="thumb_66be33897036e1000bbf0f0e" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66be33897036e1000bbf0f0e/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_66be33897036e1000bbf0f0e" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>  <style> .elementor-element:has(#smartplayer) { width: 100%; } </style>`,
    vturbScriptId: `scr_66be33897036e1000bbf0f0e`,
    vturbScript: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66be33897036e1000bbf0f0e/player.js", s.async=!0,document.head.appendChild(s);`,
    headline: `Operação secreta revela como destravar <span>"Três Estranhos Cadeados"</span> que bloqueiam suas manifestações de se tornarem realidade`,
    customScript: `let queryParams = location.search; if (!queryParams || !queryParams.includes('?src=')) queryParams = '?src=nao_identificado'; history.pushState({}, '', '/' + queryParams); addEventListener('popstate', (event) => { const downsell01 = localStorage.getItem('downsell01'); if (downsell01) location.href = '/downsell/downsell01/' + queryParams + '&downsell_01=sim'; else location.href = '/backredirect.html' + queryParams + '&back_redirect=sim'; }); const vturbId = '66be33897036e1000bbf0f0e'; const timeToReleaseTheDownsellInSeconds = 2563; const myInterval = setInterval(() => { const currentVslTimeInSeconds = localStorage.getItem(vturbId); if (currentVslTimeInSeconds) { const currentVslTimeInSecondsParsed = parseInt(currentVslTimeInSeconds); if (currentVslTimeInSecondsParsed >= timeToReleaseTheDownsellInSeconds) { localStorage.setItem('downsell01', 'downsell01'); clearInterval(myInterval); }; }; }, 1000);`
}