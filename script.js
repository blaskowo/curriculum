// Initialize EmailJS with your user ID
(function() {
    // You'll need to replace this with your actual EmailJS user ID after signing up
    emailjs.init("YOUR_USER_ID");
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
                to_email: "blasko.artist@gmail.com",
                from_name: name,
                from_email: email,
                message: message
            };
            
            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual values
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    alert('¡Tu mensaje ha sido enviado correctamente!');
                    
                    // Restore button state
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    alert('No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                    
                    // Restore button state
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});