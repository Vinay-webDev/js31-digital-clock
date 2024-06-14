// digital clock🕛🕛🕛

function clock() {
    const time = new Date();
    // to make zero padding before digits we have toString() then  padStart()
    const hours = time.getHours().toString().padStart(2, 0);
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

/* we have one problem we need to update time for every second but clock(); only call it one time inorder to update for every second we have setInterval() method */
setInterval(clock, 1000);


























