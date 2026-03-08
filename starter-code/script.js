const circle = document.querySelector(".progress-circle")
const circumference = 282.74;

function setProgress(percent) {
    const offset = circumference - (percent / 100 * circumference);
    circle.style.strokeDashoffset = offset;
}

setProgress(60)

const settings = document.getElementById("settings");
const settingsClose = document.getElementById("close-settings");
const svgCircle = document.getElementById("svg-circle");
const applyBtn = document.getElementById("apply-btn");
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
        // select every element with theme color 
        const targetId = select.getAttribute("data-color");
        console.log(targetId);

        // Change color of timer buttons
        timerSelect.forEach(timerS => {
            timerS.classList.remove("[.isActive]:bg-red-400", "[.isActive]:bg-cyan-300", "[.isActive]:bg-purple-400");
            timerS.classList.add(`[.isActive]:bg-${targetId}`);
        })

        // change color of svg
        svgCircle.classList.remove("text-red-400", "text-cyan-300", "text-purple-400");
        svgCircle.classList.add(`text-${targetId}`);

        // Change color of apply button
        applyBtn.classList.remove("bg-red-400", "bg-cyan-300", "bg-purple-400");
        applyBtn.classList.add(`bg-${targetId}`);

        // select colors, remove classes and add new ui class
        colors.forEach(btn => btn.classList.remove("isActive"));
        select.classList.add("isActive");
    })
})