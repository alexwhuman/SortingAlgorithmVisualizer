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