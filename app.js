window.onload = function() {
    const loadpage = new Audio("assets/yametekudasi.flac");
    loadpage.play();
}

const button = document.getElementById("button");

const ohmygod = new Audio("assets/ohmygah.flac");

button.addEventListener('click', () => {
    ohmygod.play();
    button.textContent = "OhMyGah";
    button.style.color = "#161616";
});

ohmygod.addEventListener("ended", () => {
     button.textContent = "Ur Mom";
     button.style.color = "#FFFFFF";
});
