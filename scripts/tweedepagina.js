

//onload om gebruiker object op te krijgen


function spelerLaden(){
    var opgevraagd = localStorage.getItem("currentUser");
    var objectjson = JSON.parse(opgevraagd);
    document.getElementById("hiernaam").innerHTML += objectjson.naam;

    console.log(objectjson.naam);
}