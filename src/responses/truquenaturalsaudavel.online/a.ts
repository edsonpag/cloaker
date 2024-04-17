import { CloackerResponse } from "../../interfaces/cloackerResponse.interface";

export const responseATruqueNaturalSaudavel: CloackerResponse = {
    headline: `<h2>Só esses <span class="green-highlight">3 ingredientes</span> na água por 2 dias, e acordei sem nenhum problema na vista... <span class="green-highlight">(assista abaixo!)</span></h2>`,
    vturb: `<div id="vid_65d3d5aa73a79a0007c15c45" style="position:relative;width:100%;padding: 56.25% 0 0;"> <img id="thumb_65d3d5aa73a79a0007c15c45" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/65d3d5aa73a79a0007c15c45/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_65d3d5aa73a79a0007c15c45" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div>`,
    vturbScriptId: 'scr_65d3d5aa73a79a0007c15c45',
    vturbScriptSrc: 'var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/65d3d5aa73a79a0007c15c45/player.js", s.async=!0,document.head.appendChild(s);',
    customScript: `(function () {
        // comentarios
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("comentarios-facebook").innerHTML = xhr.responseText
            }
        };
        xhr.open("GET", "facebook-comentarios.html", true)
        xhr.send()

        //downsell
        addEventListener('popstate', (event) => {
            const state = event.state
            if (state && state.page === 'downsell')
                location.href = '/downsell/d.html'
            else if (state && state.page === 'front')
                location.href = '/'
        })

        const vturbId = '65d3d5aa73a79a0007c15c45'
        const timeToReleaseTheDownsellInSeconds = 912
        const myInterval = setInterval(() => {
            const currentVslTimeInSeconds = localStorage.getItem(vturbId)
            if (currentVslTimeInSeconds) {
                const currentVslTimeInSecondsParsed = parseInt(currentVslTimeInSeconds)
                if (currentVslTimeInSecondsParsed >= timeToReleaseTheDownsellInSeconds) {
                    history.replaceState({ page: 'downsell' }, '', '/downsell/d.html')
                    history.pushState({ page: 'front' }, '', '/index.html')
                    clearInterval(myInterval)
                }
            }
        }, 1000)
    })()`
}