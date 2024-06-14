// digital clock🕛🕛🕛

function clock() {
    const time = new Date();
    // to make zero padding before digits we have toString() then  padStart()
    // to add AM or PM 
    // we need to re-assgin the hours variable to do that we need to make const ===> let (for re-assginment);
    let hours = time.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

/* we have one problem we need to update time for every second but clock(); only call it one time inorder to update for every second we have setInterval() method */
setInterval(clock, 1000);


























