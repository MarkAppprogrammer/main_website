let titleClicked = false
let homeClicked = false
let mainTitle = document.getElementById("main")
let loginLink = document.getElementById("login")


function setHomeClicked() {
    homeClicked = true
    showLogin()
}



function setValTitle() {
    titleClicked = true
    showLogin()
}

function showLogin() {
    if (titleClicked == true) {
        mainTitle.addEventListener("copy", setHomeClicked)

        if (homeClicked == true) {
            console.log("all clicked up")
            document.getElementById("login").style.display = 'block';
        }
    }
    else {
        console.log("")
    }
}