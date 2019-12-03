// Basic operation/planning of the sorting algorithms:
// - GenerateRandom() will generate a random number between 1 and 100 and return that number
// - The sorting algorithms will accept an array and sort the array, not returning a value but rather performing a specific action everytime an element is selected, compared and moved within the array (so that I can visualize the sorting using DOM elements)

// Function to generate a random number between 1 and 100
function generateRandom() {
    randomNumber = Math.ceil(Math.random() * 100);
    return randomNumber;
}

// Converting from percentages to numbers
function convertPercentageToInt(percentage) {
    return parseInt(percentage.substring(0, percentage.length - 1));
}

// Selection Sort
function selectionSort(inputArray) {
    var i = 0;
    while (i < inputArray.length) {
        // Select Action
        var minimum = i;
        var j = i + 1;
        while (j < inputArray.length) {
            // Compare Action
            if (convertPercentageToInt(inputArray[minimum].style.height) > convertPercentageToInt(inputArray[j].style.height)) {
                minimum = j;
            }
            j++;
        }
        if (minimum !== i) {
            // Swap Action
            var temp = inputArray[i].style.height;
            inputArray[i].style.height = inputArray[minimum].style.height;
            inputArray[minimum].style.height = temp;
        }
        i++;
    }
}

window.onload = () => {

    var barSlider = document.getElementById("numBars");
    var barContainer = document.getElementById("Bars");
    var barCounter = document.getElementById("barCounter");
    var barArray = document.getElementsByClassName("bar");

    // Setting initial number of bars
    barCounter.innerText = 50;
    for (let i = 0; i < 50; i++) {
        var bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = generateRandom() + "%";
        barContainer.appendChild(bar);
    }

    // Setting number of bars on page based on slider
    barSlider.addEventListener("change", () => {
        var barCount = barSlider.value;
        barCounter.innerText = barCount;
        var lengths = generateRandom(barCount);
        while (barContainer.firstChild) {
            barContainer.removeChild(barContainer.firstChild);
        }

        for (let index = 0; index < barCount; index++) {
            var bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.height = generateRandom() + "%";
            barContainer.appendChild(bar);
        }

        barArray = document.getElementsByClassName("bar");
    });

    // Clicking "Sort" button
    var sortButton = document.getElementById("Sort");
    sortButton.addEventListener("click", () => {
        selectionSort(barArray);
    });
}