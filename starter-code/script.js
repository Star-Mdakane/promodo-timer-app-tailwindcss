const circle = document.querySelector(".progress-circle")
const circumference = 2 * Math.PI * 105;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = offset;
}

setProgress(30)