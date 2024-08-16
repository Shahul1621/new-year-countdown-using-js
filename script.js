function updateCountdown() {
    const now = new Date();
    const newYear = new Date(`January 1, ${now.getFullYear() + 1} 00:00:00`);
    const timeDifference = newYear - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `<div>${days}</div> Days`;
    document.getElementById('hours').innerHTML = `<div>${hours}</div> Hours`;
    document.getElementById('minutes').innerHTML = `<div>${minutes}</div> Minutes`;
    document.getElementById('seconds').innerHTML = `<div>${seconds}</div> Seconds`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately
updateCountdown();
