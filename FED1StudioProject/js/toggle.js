

function toggleTheme() {
    //Find the bootstrap link tag
    let currentTheme = document.getElementById("main");
    console.log(currentTheme.getAttribute("href"));

    //Check if flatly is being used currently (currentTheme)

    if (currentTheme.getAttribute("href").includes("Main")) {
        //If so, replace the href with the theme of our choice (darkly)
        currentTheme.setAttribute("href", "../stylesheet/Backup.css");
    }
    else {
        currentTheme.setAttribute("href", "../stylesheet/Main.css");
    }
}


function toggleClass() {
    let navList = document.getElementById('topnav');
    navList.classList.toggle('expanded');

    //Toggle Hamburger button/Close button
    let btn = document.getElementById('menu-btn');

    if (navList.classList.contains('expanded')) {
        btn.innerHTML = "&times;"
    }
    else {
        btn.innerHTML = "&#9776;";
    }

}

//function toggleTheme() {
//    let currentTheme = document.getElementsByClassName('switch');



//}

//const toggleSwitch = document.querySelector('.theme-switch input[type="check"]');
//const currentTheme = localStorage.GetItem('main')

//if (currentTheme) {
//    document.documentElement.setAttribute('data-theme', currentTheme);

//    if (currentTheme === 'main') {
//        toggleSwitch.c

//    }

//}

//if (localStorage.getItem("jspgtheme") != null) {

//    setTheme(localStorage.getItem("jspgtheme"));
//}


//determine what theme i am on
//1) Accsess the switch from html
//2) determine if it is switched right or left
//3) apply the correct theme to each side