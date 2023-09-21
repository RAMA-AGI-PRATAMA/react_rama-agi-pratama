const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    alert('Username: ' + fname + lname + '\nEmail: ' + email + '\nPhone: ' + phone +  '\nMessage: ' + message);
  });