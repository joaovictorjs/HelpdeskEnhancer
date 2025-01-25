let elements = document.getElementsByTagName("a");

for (el of elements) {
  if (el.innerText === "Sair") {
    el.addEventListener("click", function (event) {
      if (!confirm("Tem certeza que deseja sair?")) {
        event.preventDefault();
      }
    });
  }
}

setTimeout(() => {
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  rows.splice(0, 1);

  for (r of rows) {
    const id = r.children.item(0).innerText;
    const person = r.children.item(2).innerText;
    const status = r.children.item(5).innerText;

    if (status !== "Aberto") {
      continue;
    }

    if (sessionStorage.getItem(id) === "") {
      continue;
    }

    if (Notification.permission === "granted") {
      new Notification(`Ticket aberto para ${person}!`);
      sessionStorage.setItem(id, "");
    }
  }
}, 1000);

setInterval(() => {
  window.location.reload(true);
}, 10000);
