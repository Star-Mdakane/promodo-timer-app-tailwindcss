const circle = document.querySelector(".progress-circle")
const circumference = 282.74;

function setProgress(percent) {
    const offset = circumference - (percent / 100 * circumference);
    circle.style.strokeDashoffset = offset;
}

setProgress(60)

const settings = document.getElementById("settings");
const settingsClose = document.getElementById("close-settings");
const timerSelect = document.querySelectorAll("#timer-btns button");
const fonts = document.querySelectorAll("#fonts button");
const colors = document.querySelectorAll("#colors button");

settings.addEventListener("click", (e) => {
    const settingsGroup = e.target.closest(".group\\/settings");
    settingsGroup.classList.add("isOpen");
});

settingsClose.addEventListener("click", (e) => {
    const settingsGroup = e.target.closest(".group\\/settings");
    settingsGroup.classList.remove("isOpen");
});

timerSelect.forEach(select => {
    select.addEventListener("click", () => {
        timerSelect.forEach(btn => btn.classList.remove("isActive"));
        select.classList.add("isActive");
    })
})

fonts.forEach(select => {
    select.addEventListener("click", () => {
        fonts.forEach(btn => btn.classList.remove("isActive"));
        select.classList.add("isActive");
    })
})

colors.forEach(select => {
    select.addEventListener("click", () => {
        colors.forEach(btn => btn.classList.remove("isActive"));
        select.classList.add("isActive");
    })
})