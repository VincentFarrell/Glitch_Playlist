'use strict';

const logger = require('../utils/logger');
const bookmarkStore = require('../models/bookmark-store');

const bookmarkDashboard = {
  index(request, response) {
    logger.info('bookmarkDashboard rendering');
    const viewData = {
      title: 'Bookmark Dashboard',
      bookmarks: bookmarkStore.getAllBookmarks(),
    };
    logger.info('about to render', bookmarkStore.getAllBookmarks());
    response.render('bookmarkDashboard', viewData);
  },
      
    deleteBookmark(request, response) {
    const bookmarkId = request.params.id;
    logger.debug(`Deleting Bookmark ${bookmarkId}`);
    bookmarkStore.removeBookmark(bookmarkId);
    response.redirect('/bookmarkDashboard');
  },
  

};

module.exports = bookmarkDashboard;