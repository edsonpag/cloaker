import { CloackerResponse } from "../../interfaces/cloackerResponse.interface";

export const responseARitualSecretoRevelado: CloackerResponse = {
    headline: `<h2>Nobel em Neurociência Alerta: Escutar essa <span class="green-highlight">Onda Sonora</span> durante 7 segundos por dia é a Chave Para <span class="green-highlight">Desbloquear</span> a Riqueza, Prosperidade e Atrair Dinheiro.</h2>`,
    vturb: `<div id="vid_661992a01d0bc00009fa1095" style="position:relative;width:100%;padding: 56.25% 0 0;"> <img id="thumb_661992a01d0bc00009fa1095" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/661992a01d0bc00009fa1095/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_661992a01d0bc00009fa1095" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>`,
    vturbScriptId: 'scr_661992a01d0bc00009fa1095',
    vturbScriptSrc: 'var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/661992a01d0bc00009fa1095/player.js", s.async=!0,document.head.appendChild(s);',
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