var imageDir = '/photos/';
let btnGo = document.getElementById("btn");

function go() {
  const fileInput = document.getElementById("file");
  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener("load", () => {
      const dataURL = reader.result;
      guardarImagen(dataURL);
    });
  }
}

function mostrarImagenes() {
  const finalDT = JSON.parse(localStorage.getItem('my-image')) || [];
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = '';
  finalDT.forEach(dataURL => {
    let nuevoEl = document.createElement("img");

    nuevoEl.classList.add('item');
    console.log(nuevoEl.className);

    nuevoEl.src = dataURL;
 
    outputDiv.appendChild(nuevoEl);
  });
}

function guardarImagen(dataURL) {
  let imGuardada = JSON.parse(localStorage.getItem('my-image')) || [];
  imGuardada.push(dataURL);
  localStorage.setItem('my-image', JSON.stringify(imGuardada));
  mostrarImagenes();
}


//POP UP DE LAS FOTOS
let image =document.querySelectorAll(".item")
  console.log(image)

  image.onclick=() =>{
     document.querySelector('.popup-imag').style.display='block';
     document.querySelector('.popup-imag img').src =image.getAttribut('src')
  }
 



