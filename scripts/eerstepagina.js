// functie die naam opvraagd uit invoerveld
// class maken voor gebruiker
// object opslaan in localStorage
//

function gebruikerAanmaken(){
    var gebruikerNaam = document.getElementById("naamInvullen").value; // ID TOEVOEGEN
    var speler = new Gebruiker(gebruikerNaam);
    var currentUser = JSON.stringify(speler);
    localStorage.setItem("currentUser", currentUser);
    console.log(speler.naam);
    window.location.href='index.html';
}



class Gebruiker{
naam;
score;
    constructor(ingevoerdeNaam){
        this.naam = ingevoerdeNaam;
        this.score = 0;
}
}