import ConsumoAgua from "./model/consumo_agua.js";

let dailyGoal = parseInt(localStorage.getItem("goal")) || 3000;
let measure = localStorage.getItem("measure") || "ml";

document.getElementById("daily-goal").value = dailyGoal;

if (measure === "L") {dailyGoal = dailyGoal / 1000;}
document.getElementById("current-measure").innerText = measure;
document.getElementById("daily-goal-span").innerText = dailyGoal + measure;

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  let quantidade = document.getElementById("quantidade").value;
  quantidade = parseInt(quantidade);
  
  ConsumoAgua.salvar(quantidade);
  printRegistersDaily();
  printHistory();
  document.getElementById("quantidade").value = "";
});

document.getElementById("form-config").addEventListener("submit", (event) => {
  event.preventDefault();
  
  dailyGoal = document.getElementById("daily-goal").value;
  measure = document.querySelector('input[name="unidade-de-medida"]:checked').value;
  
  localStorage.setItem("goal", dailyGoal);
  localStorage.setItem("measure", measure);
  
  document.getElementById("daily-goal").value = dailyGoal;
  
  if (measure === "L") {dailyGoal = dailyGoal / 1000;}
  document.getElementById("current-measure").innerText = measure;
  document.getElementById("daily-goal-span").innerText = dailyGoal + measure;
  
  printRegistersDaily();
  printHistory();
});

async function printRegistersDaily() {
  let registers = await ConsumoAgua.getAll();
  let registersToday = registers.filter((element) => {
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    return (
      day === new Date(element.timestamp).getDay() &&
      month === new Date(element.timestamp).getMonth() &&
      year === new Date(element.timestamp).getFullYear()
    );
  });
  registersToday.reverse();

  const list = document.getElementById("lista");
  list.innerHTML = " ";
  registersToday.forEach((element) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent =
      new Date(element.timestamp).toLocaleString("pt-BR") +
      " - " +
      element.quantidade +
      measure;

    list.append(li);
    progress();
  });
}

async function printHistory() {
  let registers = await ConsumoAgua.getAll();
  registers.reverse();

  const listHistory = document.getElementById("lista-historico");

  registers.forEach((element) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent =
      new Date(element.timestamp).toLocaleString("pt-BR") +
      " - " +
      element.quantidade +
      measure;

    listHistory.append(li);
  });
}

async function progress() {
  let progressValue = 0;
  const registers = await ConsumoAgua.getAll();
  const currentConsumption = document.getElementById("quantity-current-consumption");
  const progressBar = document.getElementById("progress-bar");

  registers.forEach((element) => {
    progressValue += element.quantidade;
  });

  currentConsumption.innerText = progressValue;
  console.log(progressValue);

  let progressPorcentagem = parseInt((progressValue / dailyGoal) * 100);

  if (progressPorcentagem > 100) {
    progressPorcentagem = 100;
  }

  progressBar.style = "width: " + progressPorcentagem + "%";
  progressBar.innerText = progressPorcentagem + "%";
}

printRegistersDaily();
printHistory();
