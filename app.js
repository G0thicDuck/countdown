const Months = document.getElementById("months");
const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const finalDate = new Date("January 1 2026 00:00:00");

function timer() {
    const now = new Date();

    let years = finalDate.getFullYear() - now.getFullYear();
    let months = finalDate.getMonth() - now.getMonth();
    let days = finalDate.getDate() - now.getDate();
    let hours = finalDate.getHours() - now.getHours();
    let minutes = finalDate.getMinutes() - now.getMinutes();
    let seconds = finalDate.getSeconds() - now.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    const totalMonths = years * 12 + months;

    Months.innerHTML = totalMonths.toString().padStart(2, '0');
    Days.innerHTML = days.toString().padStart(2, '0');
    Hours.innerHTML = hours.toString().padStart(2, '0');
    Minutes.innerHTML = minutes.toString().padStart(2, '0');
    Seconds.innerHTML = seconds.toString().padStart(2, '0');

    // Optional: Stop countdown at 0
    if (finalDate - now <= 0) {
        Months.innerHTML = Days.innerHTML = Hours.innerHTML = Minutes.innerHTML = Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);
    