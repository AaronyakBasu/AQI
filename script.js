const heroButton = document.querySelector(".hero-button");
window.addEventListener("scroll", () => {
if (window.pageYOffset > 100) {
heroButton.classList.add("active");
} else {
heroButton.classList.remove("active");
}
});