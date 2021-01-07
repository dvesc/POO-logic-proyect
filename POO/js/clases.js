class Cuenta {
  constructor() {
    this.dd = null;
    this.mm = null;
    this.aa = null;
    this.pagDAgBl = null;
    this.pagDAgNe = null;
    this.pagDImp = null;
    this.pagTo = null;
  } 
  set setCarFe(fe) {
    [this.aa, this.mm, this.dd] = fe.split("-");
  } 
  /** 
   * @param { string } toDAg
    * Si posee 3 o mas caracteres se obviaran los 2 ultimos, si solo
      *  posee 2 se usara '1' para el calculo
   */
  set setCuTo(toDAg) {
    let numDRe = parseInt(toDAg.slice(0, toDAg.length - 2) || "1"),
      pagDAgBl = 1200 * numDRe,
      pagDAgNe = 1000 * numDRe,
      pagDImp;
    if (
      (new Date(`${this.aa},${this.mm},${this.dd}`) -
        new Date(`${this.aa},01,01`)) /
        86400000 <= 200
    ) {
      pagDAgBl -= pagDAgBl * (10 / 100);
      pagDAgNe -= pagDAgNe * (10 / 100);
    }
    pagDImp = Math.floor(((pagDAgBl + pagDAgNe) * 2) / 100);

    this.pagDAgBl = pagDAgBl;
    this.pagDAgNe = pagDAgNe;
    this.pagDImp = pagDImp;
    this.pagTo = pagDAgBl + pagDAgNe + pagDImp;
  } 
  calFeDFa() {
    return (
      new Date().getTime() -
      new Date(`${this.aa},${this.mm},${this.dd}`) / 86400000
    );
  }
} //---------------------------------------------------------------------------
class Casa {
  constructor() {
    this.ca = null;
    this.numDCas = null;
    this.toDAg = null;
    this.cuenta = new Cuenta();
  } 
  /**
   * @param {[ca,numDCas,totDAg,fe]} dat
    * Ir el metodo 'setCarDat()' de la class Persona para ver como se va 
      * transmitiendo 
   */
  set setCarCas(dat) {
    [this.ca, this.numDCas, this.toDAg, this.cuenta.setCarFe] = dat;
  } 
  calCueCas() {
    this.cuenta.setCuTo = this.toDAg;
  } 
  mosCueDe() {
    console.log(
      `Pago de Aguas Blancas: ${this.cuenta.pagDAgBl}.
      Pago de Aguas Negras : ${this.cuenta.pagDAgNe}.
      Pago de Impuestos : ${this.cuenta.pagDImp}.
      total: ${this.cuenta.pagTo}`
    );
  } 
  mosCas() {
    console.log(
      `Calle: ${this.ca}.
      N. de Casa: ${this.numDCas}.
      Total de Agua consumida: ${this.toDAg}.
      Monto a pagar: ${this.cuenta.pagTo}`
    );
  }
} //---------------------------------------------------------------------------
export class Persona {
  constructor() {
    this.nom = null;
    this.ap = null;
    this.ci = null;
    this.ed = null;
    this.canDCas = null;
    this.totDCas = [];
  } 
  /**
   * @param {[nom,ap,ci,ed,totDCas[...datDCas[ca,numDCas,totDAg,fe]]] } dat
    * Este parametro contiene todos los datos a usar en los diferentes
      * constructores Persona, Casa y Cuenta
   */
  set setCarDat(dat) {
    [this.nom, this.ap, this.ci, this.ed] = dat;
    this.canDCas = dat[4].length;

    dat[4].forEach((datDCas, index) => {
      this.totDCas.push(new Casa());
      this.totDCas[index].setCarCas = datDCas;
      this.totDCas[index].calCueCas();
    });
  } 
  calCueTo() {
    let to = 0;
    this.totDCas.forEach(cas => (to += cas.cuenta.pagTo));
    return to;
  }
}
