import { CloackerResponseLegacy } from "../../interfaces/cloakerResponseLegacy.interface";

export const responseAViverBemComSaude: CloackerResponseLegacy = {
    headline: `<h2>Juste ces <span class="green-highlight">3 ingrédients</span> dans de l'eau pendant 2 jours, et je me suis réveillé sans aucun problème de vision... <span class="green-highlight">( regarde ci-dessous !)</span></h2>`,
    vturb: `<div id="vid_6678c5bd44d9b4000b6fadd8" style="position:relative;width:100%;padding: 56.20608899297424% 0 0;"> <img id="thumb_6678c5bd44d9b4000b6fadd8" src="https://images.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6678c5bd44d9b4000b6fadd8/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"> <div id="backdrop_6678c5bd44d9b4000b6fadd8" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div> </div> <style> .elementor-element:has(#smartplayer) { width: 100%; } </style>`,
    vturbScriptId: 'scr_6678c5bd44d9b4000b6fadd8',
    vturbScriptSrc: 'var s=document.createElement("script"); s.src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6678c5bd44d9b4000b6fadd8/player.js", s.async=!0,document.head.appendChild(s);',
    customScript: `(function () {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("comentarios-facebook").innerHTML = xhr.responseText
            }
        };
        xhr.open("GET", "facebook-comentarios.html", true)
        xhr.send()
    })()`,
    customScript2: `
    (function () {
        let queryParams = location.search
        if (!queryParams || !queryParams.includes('?src='))
            queryParams = '?src=nao_identificado'

        history.replaceState({ page: 'backredirect' }, '', '/backredirect.html')
        history.pushState({ page: 'front' }, '', '/' + queryParams)

        addEventListener('popstate', (event) => {
            const state = event.state
            if (state && state.page === 'backredirect')
                location.href = '/backredirect.html' + queryParams + '|back_redirect'
            else if (state && state.page === 'downsell01')
                location.href = '/downsell/downsell01/' + queryParams + '|downsell_01'
        })

        const vturbId = '6678c5bd44d9b4000b6fadd8'
        const timeToReleaseTheDownsellInSeconds = 910
        const myInterval = setInterval(() => {
            const currentVslTimeInSeconds = localStorage.getItem(vturbId)
            if (currentVslTimeInSeconds) {
                const currentVslTimeInSecondsParsed = parseInt(currentVslTimeInSeconds)
                if (currentVslTimeInSecondsParsed >= timeToReleaseTheDownsellInSeconds) {
                    history.replaceState({ page: 'downsell01' }, '', '/downsell/downsell01/')
                    history.pushState({ page: 'front' }, '', '/' + queryParams)
                    clearInterval(myInterval)
                }
            }
        }, 1000)
    })()`,
    customScript3: `
    (function () {
        addEventListener('popstate', (event) => {
            const state = event.state
            if (state && state.page === 'backredirect')
                location.href = '/backredirect.html' + queryParams + '|back_redirect'
            else if (state && state.page === 'downsell01')
                location.href = '/downsell/downsell01/' + queryParams + '|downsell_01'
        })

        const vturbId = '6678c5bd44d9b4000b6fadd8'
        const timeToReleaseTheDownsellInSeconds = 910
        const myInterval = setInterval(() => {
            const currentVslTimeInSeconds = localStorage.getItem(vturbId)
            if (currentVslTimeInSeconds) {
                const currentVslTimeInSecondsParsed = parseInt(currentVslTimeInSeconds)
                if (currentVslTimeInSecondsParsed >= timeToReleaseTheDownsellInSeconds) {
                    history.replaceState({ page: 'downsell01' }, '', '/downsell/downsell01/')
                    history.pushState({ page: 'front' }, '', '/' + queryParams)
                    clearInterval(myInterval)
                }
            }
        }, 1000)
    })()
    `
}