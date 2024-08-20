import { CloakerResponse } from "../../interfaces/CloakerResponse";

export const response0: CloakerResponse = {
    vturbAcelerador: `<link rel="preload" href="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66be33897036e1000bbf0f0e/player.js" as="script">
<link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script">
<link rel="preload" href="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66be33897036e1000bbf0f0e/thumbnail.jpg" as="image">
<link rel="preload" href="https://cdn.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/66be3371b81514000b53a258/main.m3u8" as="fetch">
<link rel="dns-prefetch" href="https://cdn.converteai.net">
<link rel="dns-prefetch" href="https://scripts.converteai.net">
<link rel="dns-prefetch" href="https://images.converteai.net">
<link rel="dns-prefetch" href="https://api.vturb.com.br">`,
    facebookPixel: `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1044536483287813');
    fbq('track', 'PageView');`,
    facebookPixelNoScript: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1044536483287813&ev=PageView&noscript=1"/>`,
    vsl: `<div class="video-headline">
                <i class="bi bi-volume-up-fill"></i>
                <small>Ative o som! (Por favor, espere até o vídeo estar completamente carregado)</small>
            </div>
            <div id="vid_66be33897036e1000bbf0f0e" style="position:relative;width:100%;padding: 100% 0 0;"> <img id="thumb_66be33897036e1000bbf0f0e" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66be33897036e1000bbf0f0e/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_66be33897036e1000bbf0f0e" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>  <style> .elementor-element:has(#smartplayer) { width: 100%; } </style>`,
    vturbScriptId: `scr_66be33897036e1000bbf0f0e`,
    vturbScript: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66be33897036e1000bbf0f0e/player.js", s.async=!0,document.head.appendChild(s);`,
    headline: `<div class="headline">
            <img src="assets/topsecret-br.webp" class="headline-image" loading="lazy">
            <p class="headline-text">Operação secreta revela como destravar <span style="background-color:rgba(157, 113, 12, 0.67);">"Três Estranhos Cadeados"</span> que bloqueiam suas manifestações de se tornarem realidade</p>
        </div>`,
    customScript: `let queryParams = location.search; if (!queryParams || !queryParams.includes('?src=')) queryParams = '?src=nao_identificado'; history.pushState({}, '', '/' + queryParams); addEventListener('popstate', (event) => { const downsell01 = localStorage.getItem('downsell01'); if (downsell01) location.href = '/downsell/downsell01/' + queryParams + '|downsell_01'; else location.href = '/backredirect.html' + queryParams + '|back_redirect'; }); const vturbId = '66be33897036e1000bbf0f0e'; const timeToReleaseTheDownsellInSeconds = 2563; const myInterval = setInterval(() => { const currentVslTimeInSeconds = localStorage.getItem(vturbId); if (currentVslTimeInSeconds) { const currentVslTimeInSecondsParsed = parseInt(currentVslTimeInSeconds); if (currentVslTimeInSecondsParsed >= timeToReleaseTheDownsellInSeconds) { localStorage.setItem('downsell01', 'downsell01'); clearInterval(myInterval); }; }; }, 1000);`,
    customCss: `main { background-image: url("./assets/fundo.webp"); }`,
    footer: `<div class="footer-container">
        <div class="footer">
            <div class="first-line">
                <div class="privacy-policy">
                    <a href="./termos-e-politica-de-privacidade/index.html">Política de Privacidade</a>
                </div>
                <div class="terms-and-conditions">
                    <a href="./termos-e-politica-de-privacidade/index.html#terms">Termos & Condições</a>
                </div>
            </div>
            <div class="second-line">
                <span>Copyright © 2024 Sincronia Neural</span>
                <span>Todos os direitos reservados.</span>
            </div>
        </div>
    </div>`
}