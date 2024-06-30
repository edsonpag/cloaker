import { CloackerResponseLegacy } from "../../interfaces/cloakerResponseLegacy.interface";

export const responseCViverBemComSaude: CloackerResponseLegacy = {
    headline: `<h2> <span style="color: red;">URGENT :</span> Un expert révèle le véritable Thé Anti-Lunettes pour restaurer votre vision en 7 jours</h2>`,
    vturb: ``,
    vturbScriptId: '',
    vturbScriptSrc: '',
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