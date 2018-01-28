'use strict';

const Themes = require('../models/ChapterTwo.Model');

module.exports = {
	find(request, reply){
		Themes.find({}, (err, themes) => {
			if(err){
				reply(err.message).code(404);
			}
			return reply(themes);
		})
	}
}