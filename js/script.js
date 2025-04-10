const modeSwitch = document.getElementById("modeSwitch");
const langSwitch = document.getElementById("langSwitch");
const body = document.body;
const background = document.querySelector(".background");
let isNight = false;
let isDutch = true;

// 🌞🌙 Dag/Nacht Switch
modeSwitch.addEventListener("click", () => {
    isNight = !isNight;
    if (isNight) {
        body.classList.add("night-mode");
        modeSwitch.textContent = "🌙 ";
    } else {
        body.classList.remove("night-mode");
        modeSwitch.textContent = "🌞";
    }
});

// 🇳🇱🇬🇧 Taalwissel (NL <-> EN)
langSwitch.addEventListener("click", () => {
    isDutch = !isDutch;
    if (isDutch) {
        langSwitch.textContent = "Nederlands";
        document.getElementById("about").textContent = "Over mij";
         } else {
        langSwitch.textContent = "English";
        document.getElementById("about").textContent = "About me";
         }
});
