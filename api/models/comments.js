const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    movieId: { type: Schema.Types.ObjectId, ref: 'Movies' },
    comment: String
});

module.exports = mongoose.model('Comment', CommentSchema);