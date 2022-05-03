// Déclaration des variables

const colorSwitch = document.getElementById("colorSwicth")
const btnCv = document.getElementById("cv_btn");
const modalCv = document.getElementById("modal_cv");
const backDrop = document.getElementById("backdrop");
const closeModalBtn = document.getElementById("closemodal");


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