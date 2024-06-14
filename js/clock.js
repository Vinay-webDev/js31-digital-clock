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


clock();



























