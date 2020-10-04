
function ValidarCorreo(email){
    valor = document.getElementById("correo").value;
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)){
        mensajeModal('success','Exito','Validado con exito');
       } else {
        mensajeModal('error','Error','Ingrese correctamente los campos');
       }
}

function ValidarDUI(DUI){
    valor = document.getElementById("dui").value;
    if (/^\d{8}[-][0-9]$/.test(valor)){
        mensajeModal('success','Exito','Validado con exito');
       } else {
        mensajeModal('error','Error','Ingrese correctamente los campos');
       }
}

function ValidarTelefono(tel){
    valor = document.getElementById("tel").value;
    if (/^\d{4}[-]\d{4}$/.test(valor)){
        mensajeModal('success','Exito','Validado con exito');
       } else {
        mensajeModal('error','Error','Ingrese correctamente los campos');
       }
}

function ValidarMatricula(Matricula){
    valor = document.getElementById("matricula").value;
    if (/^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){2,3}$/.test(valor)){
        mensajeModal('success','Exito','Validado con exito');
       } else {
        mensajeModal('error','Error','Ingrese correctamente los campos');
       }
}

function ValidarNumeros(numeros){
    valor = document.getElementById("numeros").value;
    if (/^-?(?:\d+(?:.\d*)?)$/.test(valor)){
        mensajeModal('success','Exito','Validado con exito');
       } else {
        mensajeModal('error','Error','Ingrese correctamente los campos');
       }
}

function ValidarURL(url){
    valor = document.getElementById("url").value;
    if (/^(ftp|http|https):\/\/[^ "]+$/.test(valor)){
        mensajeModal('success','Exito','Validado con exito');
       } else {
        mensajeModal('error','Error','Ingrese correctamente los campos');
       }
}

function ValidarCarnet(carnet){
    valor = document.getElementById("carnet").value;
    if (/^['A-Z']{2}\d{8}$/.test(valor)){
        mensajeModal('success','Exito','Validado con exito');
       } else {
        mensajeModal('error','Error','Ingrese correctamente los campos');
       }
}

function mensajeModal(icon,title,text){
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
      })
}