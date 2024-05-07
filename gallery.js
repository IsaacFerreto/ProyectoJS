

var imageDir = '/photos/';
let btnGo = document.getElementById("btnGo")


// Funtion attemp
function go() {
  
  
  const fileInput = document.getElementById("file");
  let gen =document.getElementById("imgf")
  let nuevoEl=document.createElement("img")
nuevoEl.style.width="30%"

  let cont = document.getElementById("output")
  const logfile=fileInput.files[0];
  console.log(fileInput.value);
  nuevoEl.src = URL.createObjectURL(logfile);
  cont.appendChild(nuevoEl)


 const reader= new FileReader();
   
   
 
 reader.addEventListener("load", ()=>{

  reader.readAsDataURL(this.files[0]);
  console.log(reader.result)
});

  

}

/*
function go() {
    const fileInput = document.getElementById('file');
    const outputDiv = document.getElementById('output');
    let html = '';
    for (const file of fileInput.files) {
      html += '<img src="/photos/' + file.name + ' />';
    }
    outputDiv.textContent = html;
  }
  btnGo.addEventListener("click",()=>{
    go()
  })*/


  //THIRD TRY
  //---------------------------------------------------------------------------------------------------------------------------------------------


(
  function () {
  var rotator = document.getElementById('rotator'); // change to match image ID
 
  var delayInSeconds = 5;
  // set number of seconds delay
  // list image names
  var num = 0;
  //rotor
 /* var changeImage = function () {
      var len = images.length;
      rotator.src =  + images[num++];
      //cuando llegue al borde reinicie
      if (num == len) {
          num = 0;
      }
  };*/
/*
let imagen=document.getElementById("imgCTN")

let magen =document.getElementById("magen")
let btn= document.getElementById("btn")
btn.addEventListener("click",function () {
  console.log(imagen.value);
  magen.innerHTML=imagen.value
})
let lista=[];



  let contenedor=document.getElementById("contenedor")
   localStorage.setItem("miGato", "ricardo");

  let gato = localStorage.getItem("miGato");
contenedor.innerHTML=gato
*/
  let currentIndex = 0;
const totalImages = 5;
const changeImage = function () {
    num +=1 % totalImages;
    rotator.src = imageDir + num + '.jpg';
    if (num==totalImages)
      num=0
};


  setInterval(changeImage, delayInSeconds * 1000);
})();