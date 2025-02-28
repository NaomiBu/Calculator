document.querySelector(".toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const display = document.querySelector(".display input");

document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        display.value += key;
    } 
    
    else if (key === "Enter") {
        event.preventDefault(); 
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    else if (key === "Escape") {
        display.value = "";
    }
});

