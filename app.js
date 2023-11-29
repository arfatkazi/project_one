const date = (document.getElementById("date").innerHTML =
	new Date().getFullYear())

const navBtn = document.querySelector(".nav-btn")
const navBar = document.querySelector(".navbar")
const navClose = document.querySelector(".nav-close")

navBtn.addEventListener("click", function () {
	navBar.classList.toggle("showNav")
})

navClose.addEventListener("click", function () {
	navBar.classList.toggle("showNav")
})
