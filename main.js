let titleClicked = false
let homeClicked = false
let mainTitle = document.getElementById("main")
let loginLink = document.getElementById("login")
let usernameEncoded = "cHl0aG9uUnVsZXMyMQ=="
let passwordEncoded = "V2Vsb3ZlY29tcHV0ZXJzYW5kcHl0aG9uITIx"


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

function login() {
    let usernameInputed = prompt("Username: ")
    let passwordInputed = prompt("Password: ")
    if (atob(usernameEncoded) == usernameInputed) {
        console.log("username is correct")
        if (atob(passwordEncoded) == passwordInputed) {
          console.log("logged in")
          location.replace("dash.html")
        }
    }
}

//pythonRules21
//Welovecomputersandpython!21