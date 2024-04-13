import { CloackerResponse } from "../../interfaces/cloackerResponse.interface";

export const responseBRitualSecretoRevelado: CloackerResponse = {
    headline: `<h2>Nobel em Neurociência Alerta: Escutar essa <span class="green-highlight">Onda Sonora</span> durante 7 segundos por dia é a Chave Para <span class="green-highlight">Desbloquear</span> a Riqueza, Prosperidade e Atrair Dinheiro.</h2>`,
    vturb: `<div id="vid_6619e45b6828fe00083d5643" style="position:relative;width:100%;padding: 56.25% 0 0;"> <img id="thumb_6619e45b6828fe00083d5643" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6619e45b6828fe00083d5643/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_6619e45b6828fe00083d5643" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>`,
    vturbScriptId: 'scr_6619e45b6828fe00083d5643',
    vturbScriptSrc: 'var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6619e45b6828fe00083d5643/player.js", s.async=!0,document.head.appendChild(s);',
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