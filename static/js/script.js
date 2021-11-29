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


// MODAL
// Code from www.w3schools.com
// Prevent the calculator from opening modal without appropriate form submission
// Source https://codepen.io/hanapiers/pen/EXNrGP
$("#contactForm").on("submit", function(e) {
  $("#myModal").modal("show");
  e.preventDefault();
});


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("about-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

