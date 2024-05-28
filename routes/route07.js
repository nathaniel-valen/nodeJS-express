const express = require('express');

const router = express.Router();

const path = require('path')

router.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'form.html'))
})

router.post('/page2', (req, res) => {
    const { nrp, name, course } = req.body;
    res.redirect(`/result.html?nrp=${encodeURIComponent(nrp)}&name=${encodeURIComponent(name)}&course=${encodeURIComponent(course)}`);})

router.get('/result.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'result.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'home.html'))
})

module.exports = router;