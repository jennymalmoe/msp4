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

// Toasts
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
C