document.querySelector(".vypocet").addEventListener("click", function () {
  let suma = 0;
  let procenta = 0;
  let dny = 0;
  const cena = [500, 200, 1500, 2500];

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const numbers = document.querySelectorAll('input[type="number"]');
  const rdGroup = document.querySelectorAll('input[name="nosic"]');
  const options = document.getElementById("vyber").options;
  const zmenaCeny = document.querySelector(".cena");

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      let mnozstvi = parseInt(numbers[i].value);
      if (!isNaN(mnozstvi)) {
        suma += cena[i] * mnozstvi;
      }
    }
  }

  dny = parseInt(options[options.selectedIndex].value);
  if (!isNaN(dny)) {
    let celkemBezProcent = suma * dny;

    for (let i = 0; i < rdGroup.length; i++) {
      if (rdGroup[i].checked) {
        procenta = (celkemBezProcent / 100) * parseInt(rdGroup[i].value);
        break;
      }
    }

    let totalPrice = celkemBezProcent + procenta;
    console.log("Celková cena:", totalPrice);
    zmenaCeny.textContent = `cena ${totalPrice}`;

    let sumaZakaznik = parseInt(document.querySelector(".vypocet").value);
    if (sumaZakaznik < suma) {
      document.querySelector(".pomer").textContent =
        "Celkova suma je vyssi na nakup nemate";
    } else {
      document.querySelector(".pomer").textContent =
        "Castka kterou nabizite je vyssi";
    }
  }
});

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  let email = document.getElementById("mail").value;

  if (email.includes("@")) {
    alert("Emailová adresa je platná.");
  } else {
    alert("Zadejte platnou emailovou adresu.");
  }
});
