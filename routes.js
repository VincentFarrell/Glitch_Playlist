'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start');
const bookmarkDashboard = require('./controllers/bookmarkDashboard.js');
const bookmark = require('./controllers/bookmark.js');
const about = require('./controllers/about.js');
       
router.get('/', start.index);
router.get('/bookmarkDashboard', bookmarkDashboard.index);
router.get('/bookmark/:id', bookmark.index);
router.get('/bookmarkDashboard/deleteBookmark/:id', bookmarkDashboard.deleteBookmark);
router.get('/bookmark/:id/deletelink/:linkid', bookmark.deleteLink);
router.get('/about', about.index);

module.exports = router;
