// Leaderboard
const containers = document.querySelectorAll(".kontener");
containers.forEach((kontener) => {
  kontener.addEventListener("click", () => {
    kontener.querySelector(".content").classList.toggle("expanded");
  });
});