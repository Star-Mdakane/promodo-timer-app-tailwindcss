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
        // select timer buttons, remove classes and add new ui class
        timerSelect.forEach(btn => btn.classList.remove("isActive"));
        select.classList.add("isActive");
    })
})

fonts.forEach(select => {
    select.addEventListener("click", (e) => {
        // select body tag
        const settingsGroup = e.target.closest(".group\\/settings");
        const targetId = select.getAttribute("data-font");
        console.log(targetId);

        // remove current font and add selected
        settingsGroup.classList.remove("font-kumbh", "font-roboto", "font-space");
        settingsGroup.classList.add(targetId);


        // select fonts, remove classes and add new ui class
        fonts.forEach(btn => btn.classList.remove("isActive"));
        select.classList.add("isActive");
    })
})

colors.forEach(select => {
    select.addEventListener("click", (e) => {


        // select colors, remove classes and add new ui class
        colors.forEach(btn => btn.classList.remove("isActive"));
        select.classList.add("isActive");
    })
})