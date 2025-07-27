let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

userInputEl.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let inputValue = userInputEl.value;

        if (inputValue === "") {
            alert("Please enter a number");
            return
        } else {
            let url = "https://apis.ccbp.in/numbers-fact?number=" + inputValue;
            let options = {
                method: "GET"
            };
            spinnerEl.classList.remove("d-none");
            factEl.classList.add("d-none");
            factEl.textContent = "";


            // Fetch number fact
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    // Hide spinner and show fact

                    spinnerEl.classList.add("d-none");
                    factEl.classList.remove("d-none")
                    factEl.textContent = jsonData.fact;
                });
        }
    }
});