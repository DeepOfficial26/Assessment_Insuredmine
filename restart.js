const os = require('os');
const { exec } = require('child_process');

setInterval(() => {
    const cpus = os.cpus();
    let idle = 0;
    let total = 0;

    cpus.forEach((cpu) => {
        for (type in cpu.times) {
            total += cpu.times[type];
        }
        idle += cpu.times.idle;
    });

    const cpuUsage = 1 - idle / total;

    console.log(`CPU Usage: ${(cpuUsage * 100).toFixed(2)}%`);

    if (cpuUsage > 0.7) {
        console.log('CPU usage is above 70%, restarting the server...');
        exec('pm2 restart all', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error restarting the server: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                return;
            }
            console.log(`Server restarted successfully: ${stdout}`);
        });
    }
}, 5000);
