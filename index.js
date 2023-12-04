var numberNotes = document.querySelectorAll(".note").length;
var teams = document.querySelectorAll(".team-score").length;
console.log(numberNotes);

function Question(price,category,content,answer){
  this.price = price;
  this.category = category;
  this.content = content;
  this.answer = answer;
}

var question = new Question(0,"X","X","X");
var timeleft = 10;

var qa2 = new Question(200,"peliculas","Nombre de la película navideña protagonizada por Macaulay Culkin", "Home Alone / Mi Pobre Angelito");
//var qa2 = new Question(200,"peliculas","Segundo apellido de Lorena Novo", "Avalos"); // Pregunta prueba
var qa4 = new Question(400,"peliculas","Nombre del actor de la película de el 'Grinch (2000)'", "Jim Carrey");
var qa6 = new Question(600,"peliculas","Director de la película de Disney 'El Extraño Mundo de Jack' / The Nightmare Before Christmas", "Tim Burton");
var qa8 = new Question(800,"peliculas","Nombre del personaje de Cameron Diaz en 'The Holiday'", "Amanda Woods");
var qa10 = new Question(1000,"peliculas","Nombre del personaje de Will Ferrell en 'Elf'", "Buddy Hobbs");

var qb2 = new Question(200,"musica","Nombre de la cantante que interpreta 'All I Want For Christmas Is You'", "Mariah Carey");
var qb4 = new Question(400,"musica","Nombre del cantante canadiense que comunmente se asocia con canciones navideñas", "Michael Buble");
var qb6 = new Question(600,"musica","Nombre de la canción navideña del grupo de los 80s 'Wham!'", "Last Christmas");
var qb8 = new Question(800,"musica","Nombre de la canción navideña que bailan en 'Chicas Pesadas'", "Jingle Bell Rock");
var qb10 = new Question(1000,"musica","Completa la frase en la canción Noche de Paz 'Ni los ángeles quieren cantar para...'", "no despertar al Señor");

var qc2 = new Question(200,"baby","Lugar de nacimiento de Jesus", "Belen");
var qc4 = new Question(400,"baby","Nombre de los tres Reyes Magos", "Melchor, Gaspar y Baltasar");
var qc6 = new Question(600,"baby","Nombre del recipiente en el que pusieron a Jesús al nacer, donde también comen los animales", "Pesebre");
var qc8 = new Question(800,"baby","Nombre del tiempo de oración y de reflexión caracterizado por la espera vigilante", "Adviento");
var qc10 = new Question(1000,"baby","Día y mes en que se celebra la Epifanía del Señor", "6 de enero");

var qd2 = new Question(200,"comida","Bebida caliente tradicional mexicana que se sirve en las posadas", "Ponche");
var qd4 = new Question(400,"comida","Ingrediente especial para las galletas icónicas navideñas", "Jengibre");
var qd6 = new Question(600,"comida","Sabor principal del bastón navideño (candy cane)", "Menta");
var qd8 = new Question(800,"comida","Ave que se utiliza especialmente para el platillo principal navideño", "Pavo");
var qd10 = new Question(1000,"comida","Nombre de la plantaq que es el ingrediente principal del 'revoltijo'", "Romeritos");

var qe2 = new Question(200,"cultura","Objeto que se prende cuando 'se pide Posada'", "Velas");
var qe4 = new Question(400,"cultura","Lugar de residencia de Santa Claus", "Polo Norte");
var qe6 = new Question(600,"cultura","Cantidad de picos que tiene la piñata tradicional en las posadas", "Siete");
var qe8 = new Question(800,"cultura","Nombre del Santo que originario de la historia de Santa Claus", "San Nicolás de Bari");
var qe10 = new Question(1000,"cultura","Nombra uno de los renos de Santa que no sea Rodolfo", "Brioso/Danzarín/Saltarín/Bromista/Cometa/Cupido/Trueno/Relámpago");

var qf2 = new Question(200,"geo","Estación del año en la que se celebra Navidad en Brasil", "Verano");
var qf4 = new Question(400,"geo","Ubicación de la residencia de Santa Claus", "Polo Norte");
var qf6 = new Question(600,"geo","País donde comenzó la tradición de los Mercados Navideños", "Alemania");
var qf8 = new Question(800,"geo","País donde se ubica Belén", "Cisjordania (Palestina)/Israel");
var qf10 = new Question(1000,"geo","Ciudad francesa donde se celebra la Fete de Lumieres, para iluminar el paso de María en su peregrinación", "Lyon");

for (var i = 0; i < numberNotes; i++) {

    document.querySelectorAll(".note")[i].addEventListener("click", function() {

      console.log(this.id);
  
      var elementId = this.id;
      document.getElementById(this.id).style.visibility = "hidden";
  
      buttonAnimation(elementId);
  
    });
  
  }

  for (var i = 0; i < teams; i++) {

    document.querySelectorAll(".team-score")[i].addEventListener("click", function() {

      console.log(question.price);
      console.log(this.id);
      timeleft=0;

      var currentScore = document.getElementById(this.id).innerHTML.substring(1);
      var total = parseInt(currentScore) + question.price;

      document.getElementById(this.id).innerHTML = "$" + total.toString();

      document.getElementById("question").style.visibility = "hidden";
      document.getElementById("ap").style.visibility = "hidden";

    });
  }

  document.getElementById("qp").addEventListener("click",function(){

    document.getElementById("ap").style.visibility = "visible";
    timeleft = 0;

  });

  function buttonAnimation(currentKey) {
    timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "____";
  } else {
    document.getElementById("timer").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);

    var activeButton = document.getElementById(currentKey);

    question = eval("q"+currentKey);
    console.log(question);
  
    activeButton.classList.add("pressed");


    document.getElementById("qp").innerHTML = question.content;
    document.getElementById("ap").style.visibility = "hidden";
    document.getElementById("ap").innerHTML = question.answer;
    document.getElementById("question").style.visibility = "visible";
    
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 250);

  
  }

/*var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
*/