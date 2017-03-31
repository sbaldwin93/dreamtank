var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    category: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});
schema.post('remove', function (dream) {
    User.findById(category3_item.user, function (err, user) {
        user.category3_items.pull(category3_item);
        user.save();
    });
});
module.exports = mongoose.model('Category3_item', schema);