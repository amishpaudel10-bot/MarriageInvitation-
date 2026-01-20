// Set the date we're counting down to
const weddingDate = new Date("Jan 2, 2030 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Display the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hours remaining`;

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "The Celebration has Begun!";
    }
}, 1000);
