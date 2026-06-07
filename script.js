const briefButton = document.querySelector("#briefButton");
const form = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

if (briefButton) {
  briefButton.addEventListener("click", () => {
    const expanded = briefButton.dataset.expanded === "true";
    briefButton.dataset.expanded = String(!expanded);
    briefButton.textContent = expanded ? "View brief" : "Brief viewed";
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    formNote.textContent = name
      ? `Thanks, ${name}. Faith Health will follow up about pilot access.`
      : "Thanks. Faith Health will follow up about pilot access.";
    form.reset();
  });
}
