var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    category: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});
schema.post('remove', function (dream) {
    User.findById(category4_item.user, function (err, user) {
        user.category4_items.pull(category4_item);
        user.save();
    });
});
module.exports = mongoose.model('Category4_item', schema);