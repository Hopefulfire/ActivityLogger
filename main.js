function subMenuOpen(){
let openThis = document.getElementsByClassName("submenu");
for(i = 0; i < openThis.length; i++){
    openThis[i].classList.remove("closed")
    openThis[i].classList.add("opened");
    console.log(openThis[i])
}
}
function subMenuClose(){
let closeThis = document.getElementsByClassName("submenu");
for(i = 0; i < closeThis.length; i++){
    closeThis[i].classList.remove("opened")
    closeThis[i].classList.add("closed");
}
}
