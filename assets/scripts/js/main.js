// Déclaration des variables

const colorSwitch = document.getElementById("colorSwitch")
const btnCv = document.getElementById("cv_btn");
const modalCv = document.getElementById("modal_cv");
const backDrop = document.getElementById("backdrop");
const closeModalBtn = document.getElementById("closemodal");

colorSwitch.addEventListener("click", ()=>{
    let themeDeBase = document.documentElement.getAttribute("data-theme");
    let themeSelect = "light";

    if (themeDeBase === "dark"){
        themeSelect = "light";
    } else {
        themeSelect = "dark";
    }

    document.documentElement.setAttribute("data-theme", themeSelect)
})

btnCv.addEventListener("click", ()=>{
    afficherModalCv();
})

closeModalBtn.addEventListener("click", ()=>{
    retirerModalCv();
})

function afficherModalCv(){
    backDrop.style.display = "block";
    modalCv.style.display = "block";
}

function retirerModalCv(){
    backDrop.style.display = "none";
    modalCv.style.display = "none";
}