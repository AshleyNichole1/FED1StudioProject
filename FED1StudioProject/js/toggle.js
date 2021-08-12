

function toggleTheme() {
   
    let currentTheme = document.getElementById("main");
    console.log(currentTheme.getAttribute("href"));


    if (currentTheme.getAttribute("href").includes("Main")) {
     
        currentTheme.setAttribute("href", "../stylesheet/Backup.css");
    }
    else {
        currentTheme.setAttribute("href", "../stylesheet/Main.css");
    }
}


function toggleClass() {
    let navList = document.getElementById('topnav');
    navList.classList.toggle('expanded');

    let btn = document.getElementById('menu-btn');

    if (navList.classList.contains('expanded')) {
        btn.innerHTML = "&times;"
    }
    else {
        btn.innerHTML = "&#9776;";
    }

}
