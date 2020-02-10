"use strict";

// 1. (Globale) Variabelen bovenaan declareren 

var txtNaam, txtVoornaam, txtGoesting;
var divResponse;
var naam, voorNaam, goesting, samenvatting;
var btnNaam, btnVoornaam, btnGoesting, btnVatSamen;

// OEF :Wijzig de declaratie naar de juiste plaats en soort variabele 

// 2. Bij volledig inladen van de pagina worden de variabelen gelinkt aan de DOM
window.addEventListener('load', Initieer);

function Initieer() {
  // 3.  Elementen ophalen 
  txtNaam = document.getElementById("txtNaam");
  txtVoornaam = document.getElementById("txtVoornaam");
  txtGoesting = document.getElementById("txtGoesting");
  btnNaam = document.querySelector("#btnNaam");
  btnVoornaam = document.querySelector("#btnVoornaam");
  btnGoesting = document.querySelector("#btnGoesting");
  
  naam = txtNaam.value;
  voorNaam = txtVoornaam.value;
  goesting = txtGoesting.value;

  // 4. Eventlisteners toevoegen

  btnNaam.addEventListener("click", WijzigOpschrift);
  btnVoornaam.addEventListener("click", WijzigOpschrift);
  btnGoesting.addEventListener("click", WijzigOpschrift);

  //OEF : sla de div met id divResponse op in de variabele divResponse

  //OEF :Koppel function GeefFeedback aan btnVatSamen
}

function WijzigOpschrift(e) {
  console.log(`Welkeentje : ${e.target.id}`);
  e.target.innerHTML = 'Bedankt';

}

function GeefFeedback() {
  samenvatting = "Test";
  //Geef de ingetikte info weer in divResponse
  divResponse.innerHTML = samenvatting;
}



