//BACK TO TOP BTN
//Get the button:
mybutton = document.getElementById("myBtn");

// When user scrolls down 20px from the top of document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When user clicks on the button, scroll to top of document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// TOASTS
// Bootstrap 5 toast initialisation
let toastElList = [].slice.call(document.querySelectorAll('.toast'))
let toastList = toastElList.map(function (toastEl) {
    let option = {
        animation: true,
        autohide: true,
        delay: 5000,
    }
  let bsToast = new bootstrap.Toast(toastEl, option)
  bsToast.show();
})


// ALERT

//EmailJs used to send email from contact form

/* Checking if form is valid 
Sourced from https://codepen.io/tetnuc/pen/gRqOEO */
$('#contactForm').validate({
    rules: {
        uname: {
            required: true
        },
        uemail: {
            required: true
        },
        umessage: {
            required: true
        }
    },
    messages: {
        uname: {
            required: "Please complete all fields"
        },
        uemail: {
            required: "Please complete all fields"
        },
        umessage: {
            required: "Please complete all fields"
        }
    },

});

// EmailJs Function
$('#contactFormSubmit').click(function (event) {
    event.preventDefault();
    if($('#contactForm').valid()) {
        Swal.fire({
            icon: 'success',
            title: 'Thank You!',
            text: 'Your message has been received by BOHO Team',
            showConfirmButton: false,
            timer: 3000
        });
        sendMail();
    }
});

function sendMail(){
    // from https://www.youtube.com/watch?v=x7Ewtay0Q78 
    let tempParams = {
        user_name: document.getElementById("uname").value,
        user_email: document.getElementById("uemail").value,
        user_msg: document.getElementById("umessage").value,
    };
    emailjs.send('service_5olt1k2', 'msp4', tempParams)
	.then(function(res){
		console.log("success", res.status);
	})
} 

//document.contact-form.reset(); to reset input?