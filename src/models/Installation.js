const mongoose = require('mongoose');

const installationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    officeVersion: {
        type: String,
        required: true
    },
    installationDate: {
        type: Date,
        default: Date.now
    },
    licenseKey: {
        type: String,
        required: true
    },
    deviceId: {
        type: String,
        required: true
    }
});

const Installation = mongoose.model('Installation', installationSchema);

module.exports = Installation;