const express = require('express');
const router = express.Router();

const Url = require('../models/url')

// GET /:code
// Redirect to the long/original URL
router.get('/:code', async (req,res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code })

        if(url) {
            return res.redirect(url.longUrl)
        } else {
            res.status(404).json('No URL found');
        }
    } catch(err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

module.exports = router;