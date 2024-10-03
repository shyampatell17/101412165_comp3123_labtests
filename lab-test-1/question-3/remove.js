// Importing File System Module, same as add file to work with reading and deleting log files
const fs = require('fs');
const path = require('path');


const logDir = path.join(__dirname, 'Logs');

// Remove Log Files
function removeLogs() {
    // Checking for log directory
    if (fs.existsSync(logDir)) {
        // Reading each file in log directory through loop
        fs.readdirSync(logDir).forEach(file => {
            console.log(`Deleting file: ${file}`);
            // Deleting each file using "unlikeSync"
            fs.unlinkSync(path.join(logDir, file));
        });

        // After deleting all the files, removing Logs directory
        fs.rmdirSync(logDir);
        console.log(`Logs directory deleted.`);
    } else {
        console.log(`Logs directory does not exist.`);
    }
}

removeLogs();