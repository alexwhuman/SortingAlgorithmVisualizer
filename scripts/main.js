// Basic operation/planning of the sorting algorithms:
// - GenerateRandom(int n) will generate an array of values ranging from 1 - 100, the size of the array will depend on input n
// - The sorting algorithms will accept an array and sort the array, not returning a value but rather performing a specific action everytime an element is selected, compared and moved within the array (so that I can visualize the sorting using DOM elements)

// Function to generate an array of specified size, containing random numbers between 1 - 100
function generateRandom(n) {
    var randomArray = new Array(n);
    for (let index = 0; index < randomArray.length; index++) {
        randomArray[index] = Math.ceil(Math.random() * 100);
        console.log(randomArray[index]);
    }
    return randomArray;
}

// Selection Sort
function selectionSort(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        // Select Action
        var minimum = i;
        for (let j = i + 1; j < inputArray.length; j++) {
            // Compare Action
            if (inputArray[minimum] > inputArray[j]) {
                minimum = j;
            }
        }
        if (minimum !== i) {
            // Swap Action
            var temp = inputArray[i];
            inputArray[i] = inputArray[minimum];
            inputArray[minimum] = temp;
        }
    }
}

window.onload = () => {

    var barSlider = document.getElementById("numBars");
    var barContainer = document.getElementById("Bars");

    // Setting number of bars on page based on slider
    barSlider.addEventListener("change", () => {
        var barCount = barSlider.value;
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
    });
}