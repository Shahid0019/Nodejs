const {nanoid} = require('nanoid');
const URL = require('../models/urls');
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
    if (!body.redirectUrl) {
        return res.status(400).json({ error: 'URL is required' }); }
   const shortID= nanoid(8);
   await URL.create({
      shortId: shortID,
      redirectUrl: req.body.redirectUrl,
      visitHistory: [],
   }); 
   return res.status(201).json({ id: shortID });
}

exports.handleGenerateNewShortURL = {handleGenerateNewShortURL};