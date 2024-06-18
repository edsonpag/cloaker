import { CloackerResponseLegacy } from "../../interfaces/cloakerResponseLegacy.interface";

export const responseAViverBemComSaude: CloackerResponseLegacy = {
    headline: `<h2>Juste ces <span class="green-highlight">3 ingrédients</span> dans de l'eau pendant 2 jours, et je me suis réveillé sans aucun problème de vision... <span class="green-highlight">( regarde ci-dessous !)</span></h2>`,
    vturb: `<div id="vid_660378d8995c33000904c331" style="position:relative;width:100%;padding: 56.25% 0 0;"> <img id="thumb_660378d8995c33000904c331" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/660378d8995c33000904c331/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_660378d8995c33000904c331" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>`,
    vturbScriptId: 'scr_660378d8995c33000904c331',
    vturbScriptSrc: 'var s = document.createElement("script"); s.src = "https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/660378d8995c33000904c331/player.js", s.async = !0, document.head.appendChild(s);',
    customScript: `(function () {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("comentarios-facebook").innerHTML = xhr.responseText
            }
        };
        xhr.open("GET", "facebook-comentarios.html", true)
        xhr.send()
    })()`
}