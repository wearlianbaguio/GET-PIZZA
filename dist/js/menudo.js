const atabs = document.querySelectorAll(".menu__tab h5");
const menucontents = document.querySelectorAll(".menu__details");

atabs.forEach((atab) => {
  atab.addEventListener("click", () => {
    removeActiveTab();
    atab.classList.add("active");
    const activeContent = document.querySelector(`#${atab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveTab() {
  atabs.forEach((atab) => {
    atab.classList.remove("active");
  });
}

function removeActiveContent() {
  menucontents.forEach((menucontent) => {
    menucontent.classList.remove("active");
  });
}
