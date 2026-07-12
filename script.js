(function () {
  const loader = document.getElementById("loader");
  let running = false;

  loader.addEventListener("click", () => {
    if (running) return;
    running = true;
    loader.classList.add("busy");
    loader.textContent = "Deleting";
    loader.classList.add("active");
  });

  loader.addEventListener("animationend", (e) => {
    if (e.animationName === "disposePaper") {
      loader.classList.remove("active");
      loader.classList.remove("busy");
      loader.textContent = "Delete";
      running = false;
    }
  });
})();
