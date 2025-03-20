function subMenuOpen(){
let openThis = document.getElementsByClassName("submenu");
let elementNav = openThis[0];
elementNav.classList.remove("closed");
elementNav.classList.add("opened");
}
function subMenuClose(){
let closeThis = document.getElementsByClassName("submenu");
let elementNav = closeThis[0];
elementNav.classlist.remove("opened");
elementNav.classlist.add("closed");
}
