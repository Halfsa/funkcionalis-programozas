import './style.css'
import lista from "./dolgozok.json";
/*
//document.addEventListener("DOMContentLoaded",fv);

function init() {
  
}

const fv = init;
const fv2 = function(){
  fv();
};
document.addEventListener("DOMContentLoaded",function() {
  console.log("Anonim függvény")
});

const arrowFunction = (parameter1,parameter2,parameterN) => {
  console.log(parameter1);
  console.log(parameter2);
  console.log(parameterN);
};

document.addEventListener("DOMContentLoaded",() => {
  arrowFunction(1,2,3);
  obj.logThis1();
  obj.logThis2();
})

const obj = {
  logThis1 : function() {
    console.log(this);
  }
  ,
  logThis2 : () => {
    console.log(this);
}


}
document.addEventListener("DOMContentLoaded", () => {
  const gomb = document.getElementById("button");
  gomb.addEventListener("click",() =>{
    alert("Hello WOrdslakmsc")
  })
});
const lista = [];

lista.push({
  vezetekNev: "Gipsz",
  keresztNev: "Jakab",
  eletkor: 21,
});
lista.push({
  vezetekNev: "Orokke",
  keresztNev: "Elek",
  eletkor: 2431,
});
lista.push({
  vezetekNev: "Gwda",
  keresztNev: "Jakawb",
  eletkor: 2,
});
lista.push({
  vezetekNev: "Gipsz",
  keresztNev: "Jakab",
  eletkor: 21,
});
lista.push({
  vezetekNev: "Gipwaddwasz",
  keresztNev: "Jakasafdfab",
  eletkor: 221,
});
lista.push({
  vezetekNev: "Gidawcapsz",
  keresztNev: "Jacxyckab",
  eletkor: 241,
});

const indosebbMint = lista.filter((szemely) => {
  return szemely.eletkor>20
});
const Gipszidosebb = lista.filter((szemely) => {
  return szemely.eletkor>20 && szemely.vezetekNev == "Gipsz"
});
const nevek = lista.map(szemely => {
  return szemely.vezetekNev + " " + szemely.keresztNev;
});
console.log(indosebbMint)
console.log(Gipszidosebb)
console.log(nevek)

*/

const list = [];
const ferfiak = lista.filter((szemely) =>  szemely.nem == "férfi").length;
const nok = lista.filter((szemely) => szemely.nem == "nő").length;
const gazdagok = lista.filter((szemely) => szemely.fizetes >150000);
const nagyok = lista.filter((szemely) => szemely.nev.split(' ')[0] == "Nagy");
const illegals = lista.filter((szemely) => {
  if (szemely.kor<18) {
    list.push({
      nev : szemely.nev,
      fizetes : szemely.fizetes,
    });
  };
  
});

console.log(ferfiak);
console.log(nok);
console.log(gazdagok);
console.log(nagyok);
console.log(list);
