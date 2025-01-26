let saveButton = document.querySelector("#save");

saveButton.onclick = () => {
  new Notification("Helpdesk Enhancer", {
    body: "Configuraçoes salvar com sucesso!",
  });
};
