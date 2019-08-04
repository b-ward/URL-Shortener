//LongURL = URL provided by user that needs to be shortened
//ShortURL = LongURL that has been shortened
//BaseURL = See config

const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');
const config = require('config');

const Url = require('../models/url')

// POST /api/url/shorten
// Create short URL
router.post('/shorten', async (req,res) => {
    const { longUrl } = req.body;
    const baseUrl = config.get('baseUrl');

    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL')
    }

    //Create short URL
    const urlCode = shortId.generate();

    //Check long URL
    if(validUrl.isUri(longUrl)) {
        try{
            let url = await Url.findOne({ longUrl })

            if (url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();

                res.json(url);
            }
        } catch(err){
            console.error(err);
            res.status(500).json('Server error')
        }
    } else {
        res.status(401).json('Invalid long URL')
    }
})

module.exports = router;