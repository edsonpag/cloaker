import { CloackerResponseLegacy } from "../../interfaces/cloakerResponseLegacy.interface";

export const responseCViverBemComSaude: CloackerResponseLegacy = {
    headline: `<h2> <span style="color: red;">URGENT :</span> Un expert révèle le véritable Thé Anti-Lunettes pour restaurer votre vision en 7 jours</h2>`,
    vturb: `<div id="vid_6680bf9258521d000b18e6fc" style="position:relative;width:100%;padding: 56.36743215031316% 0 0;"> <img id="thumb_6680bf9258521d000b18e6fc" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6680bf9258521d000b18e6fc/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_6680bf9258521d000b18e6fc" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>  <style> .elementor-element:has(#smartplayer) { width: 100%; } </style>`,
    vturbScriptId: 'scr_6680bf9258521d000b18e6fc',
    vturbScriptSrc: 'var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6680bf9258521d000b18e6fc/player.js", s.async=!0,document.head.appendChild(s);',
    customScript: `(function () {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("comentarios-facebook").innerHTML = xhr.responseText
            }
        };
        xhr.open("GET", "facebook-comments.html", true)
        xhr.send()
    })()`,
    customScript2: `(function () {
        let customScript = true
    })()`,
    customScript3: `(function () {
        let customScript = true
    })()`
}