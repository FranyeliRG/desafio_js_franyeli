const precio = document.querySelector(".precio-inicial")
precio.innerHTML = 500

let cantidad = document.querySelector("#cantidad")
let mas = document.querySelector("#mas")
let menos = document.querySelector("#menos")
let total = document.querySelector("#total")

mas.addEventListener("click", function() {
   cantidad.innerHTML = parseInt(cantidad.innerHTML) +1
   total.innerHTML = parseInt(cantidad.innerHTML) * precio.innerHTML
})

menos.addEventListener("click", function() {
   cantidad.innerHTML = parseInt(cantidad.innerHTML) -1
   total.innerHTML = parseInt(cantidad.innerHTML) * precio.innerHTML
})
