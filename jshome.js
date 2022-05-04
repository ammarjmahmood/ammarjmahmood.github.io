let slideIndex = 0;
    showSlides();
    
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

function startTime() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    let y = today.getFullYear()
    let mn = months[today.getMonth()];
    let dn = days[today.getDay()];
    let d = today.getDate()
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = dn + " " + mn + " " + d + " " + y + " " + "-" + " " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

function dayontimetable() {
    const todayDate = new Date();
    const timetableday = todayDate % 2
    if (timetableday == 0) {
        document.getElementById('timetabledayprint').innerHTML = "Day 1";
        } else {
        document.getElementById('timetabledayprint').innerHTML = "Day 2";
        }
            
}
