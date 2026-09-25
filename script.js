function showScreen(id) {
    var screens = document.getElementsByClassName("screen");

    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove("active");
    }

    var nextScreen = document.getElementById(id);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }
}

