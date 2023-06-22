import { header } from "./components/header/header";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Tariffs } from "./components/Tariffs/Tariffs";
import { Contacts } from "./components/Contacts/Contacts";
import { More } from "./components/More/More";
import { footer } from "./components/footer/footer";


const Main_Header = document.getElementById("header")
Main_Header.innerHTML = `${header}`

const Main_Section = document.getElementById("Main")
Main_Section.innerHTML = `${Main}`

const About_Section = document.getElementById("About")
About_Section.innerHTML = `${About}`

const Tariffs_Section = document.getElementById("Tariffs")
Tariffs_Section.innerHTML = `${Tariffs}`

const Contacts_Section = document.getElementById("Contacts")
Contacts_Section.innerHTML = `${Contacts}`

const More_Header = document.getElementById("More")
More_Header.innerHTML = `${More}`

const Main_Footer = document.getElementById("footer")
Main_Footer.innerHTML = `${footer}`


function TotalCalculate() {
  const Tariff1 = parseInt(document.getElementById("Tariff1").value);
  const Tariff2 = parseInt(document.getElementById("Tariff2").value);

  let Total = 0;

  if (Tariff1 >= 1) {
    if (Tariff2 <= 3) {
      Total = Tariff2 * 2000 * Tariff1;
    } else if (Tariff2 <= 5) {
      Total = Tariff2 * 1800 * Tariff1;
    } else {
      Total = Tariff2 * 1680 * Tariff1;
    }
  }

  document.getElementById("Total").value = Total + "₸";
}

  document.addEventListener("click", function() {
  const Tariff1 = document.getElementById("Tariff1");
  const Tariff2 = document.getElementById("Tariff2");

  Tariff1.addEventListener("input", function() {
    if (parseInt(Tariff1.value) > 3) {
      Tariff1.value = "3";
    }
    TotalCalculate();
  });

  Tariff2.addEventListener("input", function() {
    if (parseInt(Tariff2.value) > 5) {
      Tariff2.value = "5";
    }
    TotalCalculate();
  });
});

const EmailButton = document.getElementById("Email")
const TelegramButton = document.getElementById("Telegram")
const EmailContent = document.querySelector(".frame-13")
const TelegramContent = document.querySelector(".frame-17")

EmailButton.addEventListener("click", function(){
  EmailContent.classList.remove("active")
  TelegramContent.classList.add("active")
})

TelegramButton.addEventListener("click", function(){
  TelegramContent.classList.remove("active")
  EmailContent.classList.add("active")
})