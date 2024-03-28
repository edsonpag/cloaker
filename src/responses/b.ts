import { CloackerResponse } from "../interfaces/cloackerResponse.interface";

export const responseB: CloackerResponse = {
    headline: `<h2>Descubra cómo un simple truco con la piña hizo que mi marido recuperara la visión</h2>`,
    tituloPagina: 'Truco de Piña',
    vturb: `<script src="https://cdn.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="6605fd1c3aea810007af09ff"></script> <div id="ifr_6605fd1c3aea810007af09ff_wrapper" style="margin: 0 auto; width: 100%"> <div style="padding:56.25% 0 0 0;position:relative;" id="ifr_6605fd1c3aea810007af09ff_aspect"> <iframe frameborder="0" allowfullscreen src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/6605fd1c3aea810007af09ff/embed.html" id="ifr_6605fd1c3aea810007af09ff" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin"></iframe> </div> </div>`,
    pixelFacebook: `<script>
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1044536483287813');
    fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1044536483287813&ev=PageView&noscript=1" /></noscript>`
}