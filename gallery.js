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
mostrarImagenes();

//POP UP DE LAS FOTOS
window.addEventListener("load", () => {
  let imagine = document.querySelectorAll("img")
  console.log(imagine);
  imagine.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      document.querySelector('.popup-imag').style.display = 'block';
      document.querySelector('.popup-imag img').src = elemento.getAttribute('src')
    })
  })
})


function cerrar() {
  document.querySelector('.popup-imag').style.display = 'none';
}
//----------------------------------------------------------------------------------------------
