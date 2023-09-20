/* 
Evan Jacobson
File Name: script.js
Date: 09/19/2023
*/

//Hamburger Menu Function
function hamburger {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}