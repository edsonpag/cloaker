import { CloackerResponse } from "../interfaces/cloackerResponse.interface";

const html = `<style>
.checkout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
}

.checkout-link {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1ad219;
  border: none;
  outline: none;
  height: 74px;
  width: 90%;
  max-width: 425px;
  font-size: 18px;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 0.6rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  text-decoration: none;
}

.checkout-internacional {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
}
</style>

<div class="checkout-container">
<a class="checkout-link" href="https://pay.hotmart.com/F92003910E?off=q843q2cd&checkoutMode=10">QUIERO RECUPERAR MI VISIÓN!</a>
<span class="checkout-internacional">Aceptamos pagos de todos los países y monedas. La conversión se realiza automáticamente.</span>
</div>`

export const responseA: CloackerResponse = {
    headline: `<h2>Solo estos <span class="green-highlight">3 ingredientes</span> en agua durante 2 días, y me desperté
    sin ningún problema en la vista... <span class="green-highlight">(¡mira abajo!)</span></h2>`,
    tituloPagina: 'Buena Salud',
    vturb: `<script src="https://cdn.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="660378d8995c33000904c331"></script> <div id="ifr_660378d8995c33000904c331_wrapper" style="margin: 0 auto; width: 100%"> <div style="padding:56.25% 0 0 0;position:relative;" id="ifr_660378d8995c33000904c331_aspect"> <iframe frameborder="0" allowfullscreen src="https://scripts.converteai.net/85ae2223-1273-4cb2-9ea3-6d8b322fbfe8/players/660378d8995c33000904c331/embed.html" id="ifr_660378d8995c33000904c331" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin"></iframe> </div> </div>
    <script>
  const myInterval = setInterval(() => {
    const vturbId = '660378d8995c33000904c331'
    const time = localStorage.getItem(vturbId)
    if (time) {
      const timeInSeconds = time.split('.')[0]
      const timeInSecondsNumber = parseInt(timeInSeconds)
      if (timeInSecondsNumber > 843) {
        document.querySelector('.vturb-container').insertAdjacentHTML("beforeend", ${html})
        clearInterval(myInterval)
      }
    }
  }, 1000)
</script>
    `
}