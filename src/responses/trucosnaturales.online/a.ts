import { CloackerResponse } from "../../interfaces/cloackerResponse.interface";

export const responseA: CloackerResponse = {
    headline: `<h2>Solo estos <span class="green-highlight">3 ingredientes</span> en agua durante 2 días, y me desperté
    sin ningún problema en la vista... <span class="green-highlight">(¡mira abajo!)</span></h2>`,
    vturb: `<div id="vid_6611a20f2aa8f900081262d6" style="position:relative;width:100%;padding: 56.25% 0 0;"> <img id="thumb_6611a20f2aa8f900081262d6" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6611a20f2aa8f900081262d6/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_6611a20f2aa8f900081262d6" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>`,
    vturbScriptId: 'scr_6611a20f2aa8f900081262d6',
    vturbScriptSrc: 'var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6611a20f2aa8f900081262d6/player.js", s.async=!0,document.head.appendChild(s);',
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