var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    category: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});
schema.post('remove', function (dream) {
    User.findById(category1_item.user, function (err, user) {
        user.category1_items.pull(category1_item);
        user.save();
    });
});
module.exports = mongoose.model('Category1_item', schema);