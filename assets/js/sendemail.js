(function () {
  emailjs.init('user_cXJ8spAqcA7Mv0Q6XhEjF');
})();
window.onload = function () {
  document
    .getElementById('contact_form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_czojdgl', 'contact_form', this).then(
        function () {
          console.log('SUCCESS!');
          document.getElementById('contact_form').reset();
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    });
};
