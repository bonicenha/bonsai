const planCheckbox = document.querySelector("#plan-toggle")

planCheckbox.addEventListener('change', function() {
    const monthly = document.querySelector("#monthly")
    const yearly = document.querySelector("#yearly")
    var isYearly = document.querySelectorAll(".is-yearly")
    const starterPrice = document.querySelector("#starter-price")
    const professionalPrice = document.querySelector("#professional-price")
    const businessPrice = document.querySelector("#business-price")

    if (this.checked) {
        monthly.classList.remove("toggle-selected")
        yearly.classList.add("toggle-selected")
        isYearly.forEach(element => element.classList.add("visible"))
        starterPrice.innerText = "17"
        professionalPrice.innerText = "32"
        businessPrice.innerText = "52"
    } else {
        yearly.classList.remove("toggle-selected")
        monthly.classList.add("toggle-selected")
        isYearly.forEach(element => element.classList.remove("visible"))
        starterPrice.innerText = "24"
        professionalPrice.innerText = "39"
        businessPrice.innerText = "79"
    }
  })

// Disparar o evento manualmente na primeira carga da página
planCheckbox.dispatchEvent(new Event('change'))