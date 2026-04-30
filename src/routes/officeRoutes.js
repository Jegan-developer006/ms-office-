const express = require('express');
const router = express.Router();

// Mock data for office products
const officeProducts = [
    { id: 1, name: 'Office 365', price: 69.99 },
    { id: 2, name: 'Office 2021', price: 149.99 },
];

// Endpoint to get office products
router.get('/office-products', (req, res) => {
    res.json(officeProducts);
});

// Endpoint to initiate installation
router.post('/install', (req, res) => {
    const { productId } = req.body;
    // Logic for initiating installation (mock response)
    if (officeProducts.find(product => product.id === productId)) {
        return res.status(200).json({ message: 'Installation initiated successfully.' });
    }
    return res.status(404).json({ message: 'Product not found.' });
});

// Endpoint to check installation status
router.get('/status/:productId', (req, res) => {
    const { productId } = req.params;
    // Logic for checking status (mock response)
    return res.status(200).json({ productId, status: 'Installation in progress...' });
});

module.exports = router;