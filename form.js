function validar(){
  var form = document.form;
  if(form.nombre.value==0){
    alert("EL CAMPO NOMBRE ESTA VACIO ");
    form.nombre.value="";
    form.nombre.focus();
    return false; 
  }
 
  if(form.correo.value==0){
    alert("EL CAMPO EMAIL ESTA VACIO ");
    form.correo.value="";
    form.correo.focus();
    return false; 
  }
  if(form.telefono.value==0){
    alert("EL CAMPO TELEFONO ESTA VACIO ");
    form.telefono.value="";
    form.telefono.focus();
    return false; 
  }
 
  if(form.mensaje.value==0){
    alert("EL CAMPO MENSAJE ESTA VACIO ");
    form.mensaje.value="";
    form.mensaje.focus();
    return false; 
  }
  alert("Datos enviados con exito ");
  form.submit();
}