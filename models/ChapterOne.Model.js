'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterOneScheme = new Schema({}, {
    collection: 'Chapter_1'
});

module.exports = mongoose.model('ChapterOneModel', ChapterOneScheme);