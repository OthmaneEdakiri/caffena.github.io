let navBar=document.querySelector(".navbar")
let bar = document.querySelector(".fa-bars")

function navbarAction(){
    navBar.classList.toggle("activenavbar")
}

bar.addEventListener("click",navbarAction)

// window.onscroll=()=>{
//     if (navBar.classList.contains("activenavbar")===true){
//         navBar.classList.remove("activenavbar")
//     }
// }