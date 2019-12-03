// Basic operation/planning of the sorting algorithms:
// - GenerateRandom() will generate a random number between 1 and 100 and return that number
// - The sorting algorithms will accept an array and sort the array, not returning a value but rather performing a specific action everytime an element is selected, compared and moved within the array (so that I can visualize the sorting using DOM elements)

// Function to generate a random number between 1 and 100
function generateRandom() {
    randomNumber = Math.ceil(Math.random() * 100);
    return randomNumber;
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