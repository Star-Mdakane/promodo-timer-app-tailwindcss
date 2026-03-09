
const circle = document.querySelector(".progress-circle")
const settings = document.getElementById("settings");
const settingsClose = document.getElementById("close-settings");
const svgCircle = document.getElementById("svg-circle");
const applyBtn = document.getElementById("apply-btn");
const reset = document.getElementById("pomodoro");
const time = document.getElementById("time");
const timer = document.getElementById("timer");
const form = document.getElementById("form");
const shortBreak = document.getElementById("short-break");
const longBreak = document.getElementById("long-break");
const timerBtn = document.getElementById("toggle-start-btn");
const timerSelect = document.querySelectorAll("#timer-btns button");
const fonts = document.querySelectorAll("#fonts button");
const colors = document.querySelectorAll("#colors button");


// Open settings
settings.addEventListener("click", (e) => {
    const settingsGroup = e.target.closest(".group\\/settings");
    settingsGroup.classList.add("isOpen");
});

// close settings
settingsClose.addEventListener("click", (e) => {
    const settingsGroup = e.target.closest(".group\\/settings");
    settingsGroup.classList.remove("isOpen");
});

// Select font for application
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

// Select color scheme for app
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


// Timer logic

let minutes = parseInt(timer.value) || 25;
let seconds = 0;
let timerRunning = false;
let intervalId;
let shortBreakTime;
let longBreakTime;
// let remainingSeconds;
let totalSeconds = minutes * 60;
let remainingSeconds = minutes * 60;

const getTotalSeconds = () => minutes * 60;

const circumference = 282.74;

function updateProgress() {
    const progress = remainingSeconds / getTotalSeconds();
    const offset = circumference * (1 - progress);
    svgCircle.style.strokeDashoffset = offset;
}

//Logic to update timer display
const updateDisplay = () => {
    time.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

//function to countdown timer
const timerRun = () => {
    if (remainingSeconds > 0) {
        remainingSeconds--;

        // Convert total remaining seconds back to Min:Sec for display
        minutes = Math.floor(remainingSeconds / 60);
        seconds = remainingSeconds % 60;

        updateDisplay();
        updateProgress();
    } else {
        // Timer Finished
        clearInterval(intervalId);
        timerBtn.textContent = 'restart';
        timerRunning = false;
        minutes = parseInt(timer.value) || 25;
        seconds = 0;
        remainingSeconds = getTotalSeconds();
    }
};

const startTimer = () => {
    timerBtn.textContent = 'pause';
    timerRunning = true;
    remainingSeconds = getTotalSeconds();
    intervalId = setInterval(timerRun, 1000);
    updateProgress();
}

const pauseTimer = () => {
    timerBtn.textContent = 'start';
    clearInterval(intervalId);
    timerRunning = false;
}

// start and pause the timer
timerBtn.addEventListener("click", () => {
    if (!timerRunning) {
        startTimer();
    } else {
        pauseTimer();
    }
});

reset.addEventListener("click", () => {
    clearInterval(intervalId);
    timerBtn.textContent = 'start';

    minutes = 25;
    seconds = 0;
    updateDisplay();
    updateProgress();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const settingsGroup = e.target.closest(".group\\/settings");


    // let isValid = false;

    taskTime = timer.value;
    shortBreakTime = shortBreak.value;
    longBreakTime = longBreak.value;

    updateTimerValues(taskTime, shortBreakTime, longBreakTime);

    settingsGroup.classList.remove("isOpen")
});

const updateTimerValues = (min, short, long) => {
    // Show active timer button
    timerSelect.forEach(select => {
        select.addEventListener("click", () => {
            // select timer buttons, remove classes and add new ui class
            timerSelect.forEach(btn => btn.classList.remove("isActive"));
            select.classList.add("isActive");

            console.log(select.id);
            if (select.id === "timer-btn") {
                console.log(`${select.id} clicked: value:${min}`);
                clearInterval(intervalId);
                timerBtn.textContent = 'start';
                minutes = min;
                seconds = 0;
                updateDisplay();
                updateProgress();

            } else if (select.id === "short-break-btn") {
                console.log(`${select.id} clicked: value:${short}`);
                clearInterval(intervalId);
                timerBtn.textContent = 'start';
                minutes = short;
                seconds = 0;
                updateDisplay();
                updateProgress();

            } else if (select.id === "long-break-btn") {
                console.log(`${select.id} clicked: value:${long}`);
                clearInterval(intervalId);
                timerBtn.textContent = 'start';
                minutes = long;
                seconds = 0;
                updateDisplay();
                updateProgress()
            }
        })
    })
}
