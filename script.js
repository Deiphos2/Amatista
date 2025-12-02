// Inicializar EmailJS
(function() {
  emailjs.init("TU_PUBLIC_KEY_AQUI");
})();

function enviarFormulario(form, serviceId, templateId, mensaje) {
  emailjs.sendForm(serviceId, templateId, form)
    .then(() => {
      alert(mensaje);
      form.reset();
    })
    .catch(err => {
      console.error("Error al enviar:", err);
      alert("Ocurrió un error al enviar el formulario 😔");
    });
}

// TURNOS
document.getElementById("form-turno").addEventListener("submit", e => {
  e.preventDefault();
  enviarFormulario(e.target, "TU_SERVICE_ID", "TU_TEMPLATE_ID_TURNO", "Tu solicitud fue enviada 💜");
});

// CONTACTO
document.getElementById("form-contacto").addEventListener("submit", e => {
  e.preventDefault();
  enviarFormulario(e.target, "TU_SERVICE_ID", "TU_TEMPLATE_ID_CONTACTO", "Tu mensaje fue enviado 💌");
});
