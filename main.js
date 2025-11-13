
async function loadProps() {
  const res = await fetch("/data/demoData.json");
  const data = await res.json();
  renderCards(data);
}

function renderCards(props) {
  const container = document.getElementById("cards");
  container.innerHTML = "";
  props.sort((a,b)=> b.confidence - a.confidence);

  props.forEach(p=>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
      <div class="card-player">${p.player}</div>
      <div class="card-team">${p.team}</div>
      <div class="card-prop">${p.prop} — Line ${p.line}</div>
      <div class="card-pick ${p.pick === "OVER" ? "over":"under"}">Pick: ${p.pick}</div>
      <div class="card-conf">Confidence: ${p.confidence}%</div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadProps);
