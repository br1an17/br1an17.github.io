let imagen = document.getElementById("miImagen");
let angulo = document.getElementById("angulo");
let anguloInferior = document.getElementById("anguloI");
let apellido = document.getElementById("apellido");
let dark =document.getElementById("dark")
let main_body = document.getElementById("right-section");
let linea =document.getElementById("total")

function cambiarATech() {
  document.getElementById("tech").style.display = "block";
  document.getElementById("clasico").style.display = "none";
  document.getElementById("oficio").innerText = "Desarrollador Full-Stack";
  anguloInferior.style.background = "#6f000c"
  angulo.style.background = "#a42500";
  imagen.src = "../cv/img/mias/mia1.jpg";
  apellido.style.color= "#a42500"
  main_body =document.getElementById("right-section2")

}

function cambiarAClass() {
  document.getElementById("tech").style.display = "none";
  document.getElementById("clasico").style.display = "block";
  document.getElementById("oficio").innerText = "DEDICADO Y PERSEVERANTE";
  imagen.src = "../cv/img/mias/brian.jpg";
  anguloInferior.style.background = "#3d3f42"
  angulo.style.background = "#2fb7fe"
  apellido.style.color=  "#2fb7fe"
  main_body =document.getElementById("right-section")
}

function darkMode(){
  if(
  main_body.classList.toggle("dark-mode"))
  linea.style.background = ("#252525")
  else( linea.style.background = ("#f4f7ff"))
}
