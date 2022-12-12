function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkTheme() {
    let theme = getCookie("theTheme");
    if (theme != "") {
        console.log("theme " + theme);
        if (theme == "0") {
            darkmode()
        } else if (theme == "1") {
            lightmode()
        }
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            setCookie("theTheme", theme, 30);
            darkmode()
        } else {
            // blind mode
            lightmode()
        }
    }
}

checkTheme()
console.log("idk")

function darkmode() {
    console.log("darkmode")
    setCookie("theTheme", 0, 30);
    document.getElementById('themelightdark').outerHTML = '<link rel="stylesheet" href="css/darkmode.css" id="themelightdark">'
}

function lightmode() {
    console.log("ohh im blinded by the light")
    setCookie("theTheme", 1, 30);
    document.getElementById('themelightdark').outerHTML = '<link rel="stylesheet" href="css/style.css" id="themelightdark">'
}

function toggleTheme() {
    console.log("toggle theme")
    let theme = getCookie("theTheme")
    if (theme == 0) {
        lightmode()
    } else {
        darkmode()
    }
}

// Get all elements with the "char" class
var chars = document.querySelectorAll('.char');

// Calculate the maximum height for the images
var maxHeight = window.innerHeight - 50;

// Loop through each element
chars.forEach(function(char) {
    // Generate a random number between 0 and the maximum height
    var randomHeight = Math.random() * maxHeight;
    // Set the initial right position to -100%

    // Set the initial right position to 0 and the top position to the random number
    char.style.top = randomHeight + 'px';

    // Use setInterval to move the element to the left over 2 seconds
    setInterval(function() {
        char.style.right = '100%';
    }, 2000);
});