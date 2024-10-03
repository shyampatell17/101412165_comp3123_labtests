// Importing File System Module to work with creating and deleting log files
const fs = require('fs');
const path = require('path');

// Directory path, in which __dirname stands for current directory name,
// and then the directory we have to create, "Logs".
const logDir = path.join(__dirname, 'Logs'); 

// Create Log Files
function createLogs() {
    // Checks if the directory exists, if not, creates it.
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    // After checking or making the directory it changes the current working directoiry to Logs by using "chdier"
    process.chdir(logDir);

    // Using for loop to create 10 log files
    for (let i = 1; i <= 10; i++) {
        const fileName = `log_${i}.txt`;
        fs.writeFileSync(fileName, `Log file Number: ${i}`);
        console.log(`File Created: ${fileName}`);
    }
}

createLogs();