"use strict";

function saveInsuree() {
  // ziskani dat z formuláře
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const age = document.getElementById("age").value;

  // vytvoření nového objektu pojistence*/
  const insuree = new Insuree(firstName, lastName, phoneNumber, age);

  //  ziskat existujici data z local storage a pridat je do pole insurees.
  const insurees = JSON.parse(localStorage.getItem("insurees")) || [];

  //pridani noveho pojistence do pole
  insurees.push(insuree);

  // ulozit zmenena data o pojistencich to local storage
  localStorage.setItem("insurees", JSON.stringify(insurees));

  // zobrazit updatovana data do tabulky
  displayInsurees();
}

function displayInsurees() {
  // ziskam data z local storage
  const insurees = JSON.parse(localStorage.getItem("insurees")) || [];

  // vytvorim element tabulky
  const table = document.getElementById("table");

  // // vycistit existujici radky tabulky
  table.innerHTML = "";

  //  projet pojistence a vytvorit nove radky tabulky
  insurees.forEach(function (insuree) {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = insuree.firstName;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = insuree.lastName;
    row.appendChild(lastNameCell);

    const phoneNumberCell = document.createElement("td");
    phoneNumberCell.textContent = insuree.phoneNumber;
    row.appendChild(phoneNumberCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = insuree.age;
    row.appendChild(ageCell);

    table.appendChild(row);
  });
}

//vymazat pojistence z tabulky a local storage
function removeInsurees() {
  //vycistit table body
  document.getElementById("table").innerHTML = "";

  //vycistit  local storage
  localStorage.removeItem("insurees");

  //pridat event listener k tlacitku
  document
    .getElementById("delete-button")
    .addEventListener("click", removeInsurees);
}

// zavolat displayInsurees kdyz se nacte stranka
window.addEventListener("load", displayInsurees);

