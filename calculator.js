// let b;
let cnzero= document.getElementById('cnzero')
let customiser= document.getElementById('customiser');
customiser.addEventListener("input",calculer)
let reset =document.getElementById('RESETT');
const buttons= document.querySelectorAll('.button');
const additions= document.getElementById('addition');
const personnes= document.getElementById('personne');
let pTipAmount= document.getElementById('phraseTipAmount');
let pTotal= document.getElementById('phraseTotal');
buttons.forEach((element) => {
  element.originalColor = element.style.backgroundColor="#00474b";
  element.colorText=element.style.color="white";
  element.addEventListener("click", calculer);
});

function cleanning(){
    document.location.reload()
}


function calculer() {
    let R;
    let RPrime;
    let total;
    let tipAmount;
    buttons.forEach((element) => {
        element.style.backgroundColor = element.originalColor;
        element.style.color = element.colorText;
      });
      this.style.backgroundColor = "#27c2ad";
      this.style.color = "black";
      
    let button = Number(this.value) ;
    let addition=Number(additions.value) ; 
    let personne=Number(personnes.value) ; 
    if (isNaN(addition) || addition =="") {
additions.value= "";
additions.parentNode.className += " border  border-danger"
        
    }else if(isNaN(personne)){
        personnes.parentNode.className += " border  border-danger"
        additions.parentNode.classList.remove("border-danger");
    }else if(personne == 0){
cnzero.classList.remove("d-none")
    }
    else{

        additions.parentNode.classList.remove("border-danger");
        personnes.parentNode.classList.remove("border-danger");
        cnzero.classList.add("d-none");

    console.log(button);
    console.log(addition);
    console.log(personne);
    R= addition / personne;
    RPrime=(R * button) / 100;
    total= R + RPrime;
    tipAmount= RPrime;
    
    
    
    console.log(tipAmount);
    console.log(total);

    console.log(`tip amount ${parseFloat(RPrime.toFixed(2))}`);
    console.log(` total person ${parseFloat(total.toFixed(2))}`);
    pTipAmount.innerHTML= `$ ${parseFloat(RPrime.toFixed(2))}`;
    pTotal.innerHTML=` $ ${parseFloat(total.toFixed(2))}`
    reset.style.backgroundColor='hsl(172, 67%, 45%)';
    reset.addEventListener("click", cleanning)
}  
}


