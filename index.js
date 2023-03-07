function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const values = Object.fromEntries(data.entries());
  values["complex-topics"] = data.getAll("complex-topics");
  console.log(values);
}

function main() {
  const formEl = document.querySelector(".opinion-form");
  formEl.addEventListener("submit", handleSubmit);
}

main();
