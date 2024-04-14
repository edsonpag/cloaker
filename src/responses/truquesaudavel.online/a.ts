import { CloackerResponse } from "../../interfaces/cloackerResponse.interface";

export const responseATruqueSaudavel: CloackerResponse = {
    headline: `<h2><span class="green-highlight">URGENTE: </span>Especialista revela os 3 ingredientes da receita da banana para queimar 7kg em 10 dias</h2>`,
    vturb: `<div id="vid_661b12a7de47080007ed2257" style="position:relative;width:100%;padding: 56.25% 0 0;"> <img id="thumb_661b12a7de47080007ed2257" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/661b12a7de47080007ed2257/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_661b12a7de47080007ed2257" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>`,
    vturbScriptId: 'scr_661b12a7de47080007ed2257',
    vturbScriptSrc: 'var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/661b12a7de47080007ed2257/player.js", s.async=!0,document.head.appendChild(s);',
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