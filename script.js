const days = document.getElementsByClassName("days");
const hours = document.getElementsByClassName("hours");
const mins = document.getElementsByClassName("mins");
const secs = document.getElementsByClassName("secs");
const targetDate = new Date("April 20, 2025 11:30"); //milliseconds


function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minsLeft = Math.floor((diff / (1000 * 60)) % 60);
    const secsLeft = Math.floor((diff / 1000) % 60);

    days[0].innerHTML = daysLeft;
    hours[0].innerHTML = hoursLeft;
    mins[0].innerHTML = minsLeft;
    secs[0].innerHTML = secsLeft;
}

updateCountdown();
setInterval(updateCountdown, 1000);