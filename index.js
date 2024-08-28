function encriptar() {
    let textoIntroducido = document.getElementById("texto").value;

    let caracteresEspeciales =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;

    let tildes = /^[a-zA-Z\u00C0-\u017F]+$/

    if (textoIntroducido === "") {
        alert("Por favor, introduce un texto.");
        return;
    } else if (textoIntroducido != textoIntroducido.toLowerCase()){
        return alert("No se admiten Mayúsculas");
    } else if (caracteresEspeciales.test(textoIntroducido)== true){
        return alert("No se admiten caracteres especiales");
    } else if(tildes.test(textoIntroducido) == true){
        return alert("No se admiten palabras con acentos/tildes");
    } else{

    let encriptarTexto = textoIntroducido
        .replace(/a/g, "ai")    
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("resultado").value = encriptarTexto;

    // Mostrar el botón de copiar    
    document.getElementById("botonCopiar").classList.add("mostrar");

        //Ocultar los valores iniciales
        mostrarOcultarContenidoInicial();

        ajustarAlturaContenedor();
}}

function desencriptar(){
    let textoIntroducido = document.getElementById("texto").value;

    if (textoIntroducido === "") {
        alert("Por favor, introduce un texto.");
        return;
    }

    let desencriptarTexto = textoIntroducido
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultado").value = desencriptarTexto;

    // Mostrar el botón de copiar
    document.getElementById("botonCopiar").classList.add("mostrar");

        //Ocultar los valores iniciales
        mostrarOcultarContenidoInicial();

        ajustarAlturaContenedor();
}

function copiarTexto() {
    let textoResultado = document.getElementById("resultado");
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

//mostrar el resultado y ocultar los valores iniciales
document.getElementById('resultado').addEventListener('input', function() {
    mostrarOcultarContenidoInicial();
});

function mostrarOcultarContenidoInicial() {
    var contenidoInicial = document.querySelector('.contenido_textoresultado_contenidoInicial');
    var textoResultado = document.getElementById('resultado').value.trim();

    if (textoResultado) {
        contenidoInicial.style.opacity = '0';
        setTimeout(function() {
            contenidoInicial.style.display = 'none';
        }, 300); // Espera a que la transición termine antes de ocultar el elemento
        
        // Mostrar el área de resultado con transición
        document.getElementById('resultado').style.opacity = '1';
    } else {
        contenidoInicial.style.display = 'flex';
    }
}


// Función para verificar el texto y ajustar el tamaño del contenedor
function ajustarAlturaContenedor() {
    let textoResultado = document.getElementById("resultado").value.trim();
    let contenedorResultado = document.querySelector(".contenido_textoresultado");

    if (textoResultado) {
        contenedorResultado.classList.add("expandido");
    } else {
        contenedorResultado.classList.remove("expandido");
    }
}

// Llama a la función cuando se carga la página para volver al stado original
ajustarAlturaContenedor();

//Oculta la imagen cuando se muestra el resultado

function ocultarImagen (){
    let picto = document.getElementById("place");
    let text = document.getElementById("resultado");

    if(text != ""){
        picto.style.display = none;
    } 
}

ocultarImagen();