// Obtener la ventana de login
var modal = document.getElementById('abrirLogin');

// Cuando el usuario hace clic en cualquier lugar fuera del modal, se cierra la ventana
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//function login
function login(){
    let user = document.getElementById('usuario').value;
    let pass = document.getElementById('pass').value;
    
    if(user=='Nico' && pass=='1234'){
        window.location=".//Perfil-iniciado/index-profile.html";
    }
    else{
        alert("Usuario o contraseña incorrecta")
    }
}


function submitForm() {
    const title = document.getElementById('title').value;
    const files = document.getElementById('fileUpload').files;

    if (title === "") {
        alert("Por favor, ingrese un título.");
        return;
    }

    if (files.length === 0) {
        alert("Por favor, suba al menos un archivo.");
        return;
    }

    alert(`Título: ${title}\nArchivos subidos: ${files.length}`);
}
