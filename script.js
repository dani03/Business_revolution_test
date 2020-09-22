//declarations des variables 
var form = document.getElementById('formulaire');
var nb_input = form.getElementsByTagName('input').length;
var progress_bar = document.getElementById('progress_bar');
var formulaire = document.getElementById('formulaire');
var reset = document.getElementById('reset');

var actualWidth = document.getElementById('progress_status').offsetWidth;
var pourcentage_de_base = 0;

//function permettant de recupérer l'id precis d'une tâche
// et traitement des checkbox
function getId(element){
 var la_tache = element.getAttribute('id');
 var l_id = document.getElementById(la_tache);
 
 if(l_id.checked){
    //on divise la width par le nombre d'input  soit 100% de la width
    var pourcentage = Math.trunc(100 / nb_input);
    pourcentage_de_base += pourcentage; 
    var widthToAdd = Math.trunc(actualWidth / nb_input);  
    progress_bar.style.width = progress_bar.offsetWidth + widthToAdd+ "px";
    var pourcentage_fait = pourcentage_de_base >= 98 ? 100 : pourcentage_de_base;
    progress_bar.innerHTML = pourcentage_fait +" %";
    if(pourcentage_fait == 100){
      document.getElementById('message').style.display = "block";
      document.getElementById('message').innerHTML = "<h2>Félicitations toutes les tâches sont faites.</h2>";
    }  
 } else {
    alert("pas cochez");
 }

}
// reset button 
reset.addEventListener("click", () => {
  var btn = "";
    for (var i = 0; i < formulaire.children.length; i++) {
      if(formulaire.children[i].tagName == "INPUT"){
        btn = formulaire.children[i];
        btn.checked = (btn.checked) ? false : "";
        progress_bar.style.width = "0px";
        progress_bar.innerHTML ="0%";
        pourcentage_de_base = 0;
        document.getElementById('message').style.display = "none";
      }
        
    }
  
})



