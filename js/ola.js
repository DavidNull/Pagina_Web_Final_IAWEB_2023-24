const header = document.getElementById("header");

header.addEventListener("mousemove", function(e) {
  const wave = document.createElement("div");
  wave.classList.add("wave");
  header.appendChild(wave);

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  wave.style.left = mouseX + "px";
  wave.style.top = mouseY + "px";

  setTimeout(() => {
    wave.remove();
  }, 1000); 
});
