const botao = document.querySelector("button")

botao.addEventListener("click", buscarCidade)

async function buscarCidade() {

  const cidade = document.querySelector("#cidade").value

  const chave = "9b1143a7aacc99cba3d02c7319c1233d"

  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`
  ).then(resposta => resposta.json())

  console.log(dados)

  document.querySelector(".cidade").innerHTML = dados.name

document.querySelector(".temp").innerHTML =
  Math.floor(dados.main.temp) + "°C"

document.querySelector(".description").innerHTML =
  dados.weather[0].description

document.querySelector(".umidade").innerHTML =
  "💧 Umidade: " + dados.main.humidity + "%"

document.querySelector(".vento").innerHTML =
  "🌬️ Vento: " + dados.wind.speed + " km/h"
}