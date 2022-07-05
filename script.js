let selectedButton = document.querySelectorAll(".numbers")
let submitButton = document.querySelector(".main-button")
let cardSubmitted = document.querySelector(".submit-content")
let lastCard = document.querySelector(".last-content")

selectedButton.forEach(btn => {
    btn.addEventListener("click", turnActive)
})

submitButton.addEventListener("click", submitAction)



function turnActive(e) {
    selectedButton.forEach(btn => {
        btn.classList.remove("numbers-active")
        btn.classList.add("numbers-normal")
        btn.classList.add("hover")
    })


    if (e.target.classList.contains("numbers-normal")) {
        e.target.classList.remove("numbers-normal")
        e.target.classList.remove("hover")
        e.target.classList.add("numbers-active")
    }
}

function submitAction() {
    let rating = document.querySelector(".numbers-active").textContent
    let ratingInt = parseInt(rating, 10)
    cardSubmitted.classList.add("hide-item")
    lastCard.classList.toggle("hide-item")
    document.getElementById("rating").innerHTML = `You selected ${ratingInt} out of 5`
    console.log(ratingInt)
}