const circle = document.querySelector(".progress-circle")
const circumference = 282.74;

function setProgress(percent) {
    const offset = circumference - (percent / 100 * circumference);
    circle.style.strokeDashoffset = offset;
}

setProgress(60)