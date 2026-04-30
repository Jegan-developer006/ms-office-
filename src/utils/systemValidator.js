// src/utils/systemValidator.js

/**
 * System Validator Module
 * This module provides functions to check system requirements, OS compatibility, and disk space.
 */

/**
 * Check if the operating system is compatible with the software.
 * @returns {boolean} - True if compatible, false otherwise.
 */
function checkOSCompatibility() {
    const os = require('os');
    const compatibleOS = ['win32', 'linux', 'darwin']; // Windows, Linux, macOS
    return compatibleOS.includes(os.platform());
}

/**
 * Check the required disk space.
 * @param {number} requiredSpace - Space required in MB.
 * @returns {Promise<boolean>} - Promise resolving to true if enough space, false otherwise.
 */
async function checkDiskSpace(requiredSpace) {
    const { exec } = require('child_process');
    return new Promise((resolve, reject) => {
        exec('df -m --output=avail /', (error, stdout) => {
            if (error) {
                return reject(error);
            }
            const availableSpace = parseInt(stdout.split('\n')[1]);
            resolve(availableSpace >= requiredSpace);
        });
    });
}

/**
 * Check if the system meets the defined requirements.
 * @returns {Promise<object>} - Promise resolving to an object with checks results.
 */
async function checkSystemRequirements() {
    const osCompatible = checkOSCompatibility();
    const diskSpaceCheck = await checkDiskSpace(500); // Check for 500 MB required space
    return {
        osCompatible,
        diskSpaceCheck
    };
}

module.exports = { checkOSCompatibility, checkDiskSpace, checkSystemRequirements };