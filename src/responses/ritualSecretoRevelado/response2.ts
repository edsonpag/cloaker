import { CloakerResponse } from "../../interfaces/CloakerResponse";

export const response2: CloakerResponse = {
    vturbAcelerador: `<link rel="preload" href="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66c02f9dda5246000c28ed24/player.js" as="script">
<link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script">
<link rel="preload" href="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66c02f9dda5246000c28ed24/thumbnail.jpg" as="image">
<link rel="preload" href="https://cdn.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/66c02f99b241fe000bf5f5c6/main.m3u8" as="fetch">
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
    fbq('init', '1090680255602617');
    fbq('track', 'PageView');`,
    facebookPixelNoScript: `<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1090680255602617&ev=PageView&noscript=1"
    />`,
    vsl: `<div class="vturb-container"><div id="vid_66c02f9dda5246000c28ed24" style="position:relative;width:100%;padding: 56.25% 0 0;"> <img id="thumb_66c02f9dda5246000c28ed24" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66c02f9dda5246000c28ed24/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_66c02f9dda5246000c28ed24" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>  <style> .elementor-element:has(#smartplayer) { width: 100%; } </style></div>`,
    vturbScriptId: `scr_66c02f9dda5246000c28ed24`,
    vturbScript: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/66c02f9dda5246000c28ed24/player.js", s.async=!0,document.head.appendChild(s);`,
    headline: `<div class="headline">
            <p class="headline-text">Escute essa frequência sonora para atrair coisas boas em sua vida</p>
        </div>`,
    customScript: `console.log("ok")`,
    customCss: `main { background-color: black; }`,
    footer: `<footer></footer>`
}