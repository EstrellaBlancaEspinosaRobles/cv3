document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("load", () => {
  const bloques = document.querySelectorAll(".bloque");
  bloques.forEach((b, i) => {
    b.style.opacity = "0";
    b.style.transform = "translateY(20px)";
    b.style.transition = "all 0.6s ease";

    setTimeout(() => {
      b.style.opacity = "1";
      b.style.transform = "translateY(0)";
    }, i * 150);
  });
});
