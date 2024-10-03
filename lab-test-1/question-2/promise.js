// Question 2: Promises

// Using just the resolve part of the promise
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'Resolved: Delayed Resolve!' }); 
        }, 500); // we can change the time based on when we want the output
    });
}

// Using just the reject part of the promise exculding
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Rejected: Delayed Reject!'));
        }, 500); // we can change the time based on when we want the output
    });
}

// Handling the resolved and rejected promies using then and catch
resolvedPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));

rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.log(error));