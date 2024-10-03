// Question 1: lowerCaseWords Function   
function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject("Invalid Input : It is not an Array");
        } 
        else {
            const result = array.filter(item => typeof item === 'string')
                                .map(word => word.toLowerCase());
            resolve(result);
        }
    });
}

// Showing the desired output
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const notAnArray = "String"

// Prmoise handling ouput using then and catch
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));