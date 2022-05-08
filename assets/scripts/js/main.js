// Déclaration des variables

const colorSwitch = document.getElementById("colorSwitch")
const btnCv = document.getElementById("cv_btn");
const modalCv = document.getElementById("modal_cv");
const backDrop = document.getElementById("backdrop");
const closeModalBtn = document.getElementById("closemodal");
const html = document.querySelector("html");
const barreScroll = document.querySelector(".scroll");

// Barre de progression en haut de l'écran 

window.addEventListener("scroll", ()=>{
    const nbrPixelsHaut = html.scrollTop; // On détecte le nombre de pixels caché en haut de l'écran lorsqu'on scroll
    
    const nbrPixelsTotal = html.scrollHeight ; // On détecte le nombre de pixels total de notre page
    
    const nbrPixelsEcran = html.clientHeight; // On détecte le nombre de pixels de l'écran .

    if (nbrPixelsHaut === 0){  // Si on ne scroll pas, la barre n'apparait pas
        barreScroll.style.width = "0%"
    } else { /* Sinon, on déclare une variable pourcentage qui équivaut au nombre de pixels caché et de l'écran divisé par le nombre de pixels total*/
        let pourcentage = (nbrPixelsHaut + nbrPixelsEcran) / nbrPixelsTotal * 100;
        barreScroll.style.width = `${parseInt(pourcentage)}%`; //On change la largeur en fonction du pourcentage, on utilise parseInt pour n'avoir que des nombres entiers
    }
})


// Swicth du dark mode au light mode et inversement

colorSwitch.addEventListener("click", ()=>{  //Au clic de l'icone
    let themeDeBase = document.documentElement.getAttribute("data-theme"); // On récupère l'attribut data-theme dans l'HTML
    let themeSelect = "light"; // On déclare une variable themeSelect

    if (themeDeBase === "dark"){ // Si l'attribut data theme est en dark
        themeSelect = "light"; // On attribue "light" à la variable themeSelect 
    } else {  // Sinon
        themeSelect = "dark"; // On attribue "dark" à la variable themeSelect 
    }

    document.documentElement.setAttribute("data-theme", themeSelect) // On affecte la valeur de themeSelect à l'attribut data theme  
})

btnCv.addEventListener("click", ()=>{ // Au clic du bouton, on affiche la modal
    afficherModalCv();
})

closeModalBtn.addEventListener("click", ()=>{ // Au clic de la croix sur la modal, on retire la modal
    retirerModalCv();
})

backDrop.addEventListener("click", () =>{ // Lorsqu'on clique à l'éxterieur de la modal 
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