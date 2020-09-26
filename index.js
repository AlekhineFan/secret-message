document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  document.querySelector("#link-input").value = encrypted;
});
