document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! Thank you for reaching out.');
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcon = document.getElementsByClassName("tabcon");
let tablink
let tabco

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabco of tabcon) {
        tablink.classList.remove("activet");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("activet")
}
