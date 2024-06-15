import { CloackerResponse } from "../../interfaces/cloackerResponse.interface";

export const responseABuenaSalud: CloackerResponse = {
    headline: `<h2>Solo estos <span class="green-highlight">3 ingredientes</span> en agua durante 2 días, y me desperté
    sin ningún problema en la vista... <span class="green-highlight">(¡mira abajo!)</span></h2>`,
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