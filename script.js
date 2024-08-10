function startCountdown() {
    const dateInput = document.getElementById('date-input').value;
    const countdownDate = new Date(dateInput).getTime();

    if (countdownDate < Date.now()) {
        alert("Date is Expired");
        return;
    }

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const deciseconds = Math.floor((distance % 1000) / 100); 

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
        document.getElementById('deciseconds').innerHTML = deciseconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "Date is Expired";
        }
    }, 100); 
}