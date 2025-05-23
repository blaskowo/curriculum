// Initialize EmailJS with your user ID
(function() {
    // Initialize with your EmailJS user ID
    emailjs.init("lYIQT4ye8Wt1FF8PU");
})();

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Show loading indicator or disable submit button
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Prepare template parameters
            const templateParams = {
                title: "Nuevo mensaje de contacto",
                from_name: name,
                from_email: email,
                message: message
            };
            
            // Log for debugging
            console.log("Sending email with params:", templateParams);
            
            // Send email using EmailJS with your service ID and template ID
            emailjs.send("service_sjbnmn4", "template_mgod0ul", templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    alert('¡Tu mensaje ha sido enviado correctamente!');
                    
                    // Restore button state
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                    
                    // Show error message with more details
                    alert('No se pudo enviar el mensaje: ' + error.text);
                    
                    // Restore button state
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});