import { Persona, Casa } from "./clases.js";

let inpsDCas = 1;
const $d = document,
  $inpDNom = $d.querySelector(".inp-d-nom"),
  $inpDAp = $d.querySelector(".inp-d-ap"),
  $inpDCi = $d.querySelector(".inp-d-ci"),
  $inpDEd = $d.querySelector(".inp-d-ed"),
  $contDivsDCas = $d.querySelector(".cont-divs-d-cas"),
  $btnReInpDCas = $d.querySelector(".re-inp-d-cas"),
  arrDPe = [];

$d.addEventListener("DOMContentLoaded", () => {
  $d.addEventListener("click", e => {
    if (e.target.matches(".ad-inp-d-cas")) {
      $btnReInpDCas.classList.remove("display");
      inpsDCas++;
      $contDivsDCas.insertAdjacentHTML(
        "beforeend",
        `<div class="div-d-cas">
          <input
            type="text"
            placeholder="Calle..."
            class="nom-de-uni"
          />
          <input
            type="text"
            placeholder="Numero de la Casa..."
            class="num-de-cas"
            required
          />
          <input
            type="text"
            placeholder="Total de agua consumida en litros..."
            class="to-de-ag"
            title="Solo se permiten numeros"
            pattern="[0-9]{1,}"
            required
          />
          <input
            type="date"
            class="fec"
            min="2000-01-01"
            max="2022-01-01"
            title="Solo fechas superiores al 01/01/2000"
            required
            />
        </div>`
      );
    }
    if (e.target.matches(".re-inp-d-cas")) {
      inpsDCas--;
      $contDivsDCas.removeChild($contDivsDCas.lastElementChild);
      if (inpsDCas === 1) e.target.classList.add("display");
    }
  });
  //---------------------------------------------------------------------------
  $d.addEventListener("submit", e => {
    e.preventDefault();
    let valImpDCas = [];
    $d.querySelectorAll(".div-d-cas").forEach(divDCas =>
      valImpDCas.push([
        divDCas.children[0].value,
        divDCas.children[1].value,
        divDCas.children[2].value,
        divDCas.children[3].value
      ])
    );
    arrDPe.push(new Persona());
    arrDPe[arrDPe.length - 1].setCarDat = [
      $inpDNom.value,
      $inpDAp.value,
      $inpDCi.value,
      $inpDEd.value,
      valImpDCas
    ];
    e.target.reset();
    inpsDCas = 1;
    $btnReInpDCas.classList.add("display");
    $d.querySelectorAll(".div-d-cas").forEach((divDCas, index) => {
      if (index > 0) $contDivsDCas.removeChild(divDCas);
    });

    console.log(arrDPe);
  });
});

//Lo unico que falta es imprimir los datos pero nah que ladilla, lo importante
//ya esta echo, para eso es el ultimo console.log()
