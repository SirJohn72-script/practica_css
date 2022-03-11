document
  .querySelector(".mobile-menu")
  .addEventListener("click", (e) => {
    const menu = document.querySelector(".menu")
    if (menu.classList.contains("menu-hidden")) {
      menu.classList = "menu menu-normal"
    } else {
      menu.classList = "menu menu-hidden"
    }
  })
