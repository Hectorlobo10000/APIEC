'use strict';

const Themes = require('../models/ChapterOne.Model');

module.exports = {
    find(request, reply){
        Themes.find({'sub_theme_id': Number(request.params.idTheme)}, (err, themes) => {
            if(err){
                reply(err.message).code(404);
            }
            return reply(themes);
        });
    }
};