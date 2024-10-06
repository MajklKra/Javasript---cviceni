"use strict";

function vypocet() {
  const flight = parseFloat(document.querySelector("#let").value);
  const Person = parseInt(document.querySelector("#person").value);
  const back = document.querySelector("#backFlight").checked;
  const selectedClass = document.querySelector('input[name="class"]:checked');

  let trida = 0;
  let celkovaCena = flight * Person;

  if (selectedClass) {
    trida = parseFloat(selectedClass.value);
  }

  if (back) {
    celkovaCena *= 2;
  }
  celkovaCena += celkovaCena * trida;
  return celkovaCena;
}

function rozpocet() {
  const celaCena = vypocet();
  const amountInput = document.querySelector("#amount").value;
  const kontrolniCena = parseFloat(amountInput);
  const resultDiv = document.querySelector("#result");

  if (amountInput === "" || isNaN(kontrolniCena)) {
    resultDiv.textContent = "Nezadali jste částku.";
    return;
  }

  if (kontrolniCena >= celaCena) {
    resultDiv.textContent = `Celková cena: ${celaCena.toFixed(
      2
    )} Kč. Vaše částka je dostatečná.`;
    resultDiv.style.color = "blue";
    resultDiv.style.fontWeight = "bold"
  } else {
    resultDiv.textContent = `Celková cena: ${celaCena.toFixed(
      2
    )} Kč. Vaše částka nestačí.`;
    resultDiv.style.color = "red";
    resultDiv.style.fontWeight = "bold"
  }
}

document.querySelector(".resultBtn").addEventListener("click", function () {
  let celkem = vypocet();
  document.querySelector(
    "#result"
  ).textContent = `Celková cena: ${celkem.toFixed(2)} Kč`;
});

document.querySelector("#checkBtn").addEventListener("click", rozpocet);

function validuj(event) {
  const povolene = /^[\p{L}\p{N}\s]*$/u;
  const textArea = document.querySelector("#notes");
  const input = textArea.value;

  if (!povolene.test(input)) {
    textArea.value = input.replace(/[^\p{L}\p{N}\s]/gu, "");
  }
}

document.querySelector("#notes").addEventListener("input", validuj);

/* document.getElementById("sendOut").addEventListener("click", function () {
  document.getElementById("message").textContent = "Zpráva byla odeslána!";
  document.getElementById("message").style.color="green";
  document.getElementById("notes").value = "";
  // Po 10 sekundách odstraní zprávu
  setTimeout(function () {
    document.getElementById("message").textContent = "";
  }, 10000);
}); */

document.getElementById("sendOut").addEventListener("click", function () {
  const messageElement = document.getElementById("message");
  const notesValue = document.getElementById("notes").value.trim();

  if (notesValue === "") {
    // Zobrazí zprávu, pokud je text-area prázdná
    messageElement.textContent = "Zadejte zprávu !";
    messageElement.style.color = "red";
  } else {
    // Zobrazí zprávu o odeslání
    messageElement.textContent = "Zpráva byla odeslána!";
    document.getElementById("message").style.color = "green";
    
    // Vymaže obsah text-area
    document.getElementById("notes").value = "";

    // Po 10 sekundách odstraní zprávu
    setTimeout(function () {
      messageElement.textContent = "";
    }, 10000);
  }
});