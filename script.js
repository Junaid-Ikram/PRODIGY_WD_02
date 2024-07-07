let timer; // Variable to hold the interval
let time = 0; // Time in milliseconds
let running = false; // Flag to track if the stopwatch is running
let lapCount = 1; // Counter for lap times

function startStop() {
    if (!running) {
        startTimer();
        document.getElementById("startStop").textContent = "Stop";
        running = true;
    } else {
        stopTimer();
        document.getElementById("startStop").textContent = "Start";
        running = false;
    }
}

function startTimer() {
    timer = setInterval(updateDisplay, 10); // Update display every 10ms
}

function stopTimer() {
    clearInterval(timer); // Clear interval to stop the timer
}

function reset() {
    stopTimer();
    time = 0;
    lapCount = 1;
    updateDisplay();
    document.getElementById("startStop").textContent = "Start";
    running = false;
    clearLaps();
}

function updateDisplay() {
    let display = document.getElementById("display");
    let centiseconds = Math.floor((time / 10) % 100);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    // Format the time as HH:MM:SS
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatCentiseconds(centiseconds)}`;

    time += 10; // Increment time by 10ms
}

function formatTime(time) {
    return (time < 10 ? `0${time}` : time);
}

function formatCentiseconds(centiseconds) {
    return (centiseconds < 10 ? `0${centiseconds}` : centiseconds);
}

function lap() {
    let lapsList = document.getElementById("laps");
    let lapTime = document.getElementById("display").textContent;
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsList.prepend(lapItem); // Add lap time to the beginning of the list
    lapCount++;
}

function clearLaps() {
    let lapsList = document.getElementById("laps");
    lapsList.innerHTML = ""; // Clear all lap times from the list
}
