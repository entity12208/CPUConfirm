document.getElementById('optimizeButton').addEventListener('click', () => {
    const { execFile } = require('child_process');
    const path = require('path');

    const executablePath = path.join(__dirname, 'cpp', 'optimize');
    execFile(executablePath, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
});

