let anchors = document.getElementsByTagName("a");

for (tag of anchors) {
  if (tag.innerText === "Sair") {
    tag.addEventListener("click", function (event) {
      if (!confirm("Tem certeza que deseja sair?")) {
        event.preventDefault();
      }
    });
  }
}

setTimeout(() => {
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  rows.splice(0, 1);

  for (tag of rows) {
    const id = tag.children.item(0).innerText;
    const person = tag.children.item(2).innerText;
    const status = tag.children.item(5).innerText;

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
