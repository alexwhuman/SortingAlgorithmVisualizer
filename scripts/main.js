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

// Selection Animation
function select(element) {
    element.classList.add("bar-selected-1");
}

// Deselecting Animation 
function deselect(element) {
    element.classList.remove("bar-selected-1");
}

// Comparison Animation
function compare(element) {
    element.classList.add("bar-selected-2");
}

// Uncompare Animation
function uncompare(element) {
    element.classList.remove("bar-selected-2");
}

// Swap Animation
function swap(element) {
    element.classList.add("bar-selected-3");
}

// Unswap Animation
function unswap(element) {
    element.classList.remove("bar-selected-3");
}

// Setting default sort algorithm
var algorithm = "Selection Sort";

// Selection Sort
function selectionSort(inputArray, numBars) {
    var i = 0;
    var intervalID = setInterval(() => {
        if (i < inputArray.length) {
            // Select Action
            if (i !== 0) {
                deselect(inputArray[i - 1]);
            }

            select(inputArray[i]);
            var minimum = i;
            var j = i + 1;
            var innerIntervalID = setInterval(() => {
                if (j < inputArray.length) {
                    // Compare Action
                    uncompare(inputArray[j - 1]);
                    compare(inputArray[j]);
                    if (convertPercentageToInt(inputArray[minimum].style.height) > convertPercentageToInt(inputArray[j].style.height)) {
                        unswap(inputArray[minimum]);
                        minimum = j;
                        swap(inputArray[minimum]);
                    }
                }
                else {
                    uncompare(inputArray[j - 1]);
                    clearInterval(innerIntervalID);
                }
                j++;
            }, (200 / numBars) - 1);
            setTimeout(() => {
                if (minimum !== i) {
                    // Swap Action
                    var temp = inputArray[i].style.height;
                    inputArray[i].style.height = inputArray[minimum].style.height;
                    inputArray[minimum].style.height = temp;
                    unswap(inputArray[minimum]);
                    swap(inputArray[i]);
                }
                setTimeout(() => {
                    unswap(inputArray[i - 1]);
                }, 300);
                i++;
            }, 500);
        } else {
            deselect(inputArray[i - 1]);
            clearInterval(intervalID);
        }
    }, 1000);
}

window.onload = () => {

    var barSlider = document.getElementById("numBars");
    var barContainer = document.getElementById("Bars");
    var barCounter = document.getElementById("barCounter");
    var barArray = document.getElementsByClassName("bar");
    var algorithmSelected = document.getElementById("Selected-Algorithm");
    var selectionSortButton = document.getElementById("Selection-Sort-Button");
    var BubbleSortButton = document.getElementById("Bubble-Sort-Button");
    var algorithmButtonArray = [selectionSortButton, BubbleSortButton];

    // Setting default algorithm
    algorithmSelected.innerText = algorithm;

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

    // Changing sorting method
    for (let i = 0; i < algorithmButtonArray.length; i++) {
        algorithmButtonArray[i].addEventListener("click", () => {
            algorithm = algorithmButtonArray[i].innerText;
            algorithmSelected.innerText = algorithm;
        });
    }

    // Clicking "Sort" button
    var sortButton = document.getElementById("Sort");
    sortButton.addEventListener("click", () => {
        selectionSort(barArray, barArray.length);
    });


}