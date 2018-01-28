'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterTwoSchema = new Schema({}, {
	collection: 'Chapter_2'
});

module.exports = mongoose.model('ChapterTwoModel', ChapterTwoSchema);