const express = require('express');
const { handleGenerateNewShortURL } = require('../controlers/url');
const router = express.Router();
const URL = require('../models/urls');

router.post('/', handleGenerateNewShortURL);

exports.router = router;