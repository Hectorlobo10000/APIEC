'use strict';

const ThemeController = require('../controllers/theme.controller');
module.exports = [
    {
        method:'GET',
        path:'/api/chapter/{idChapter}/theme/{idTheme}',
        handler: ThemeController.findOne
    }
];