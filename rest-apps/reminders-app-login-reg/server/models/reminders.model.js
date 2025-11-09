const mongoose = require('mongoose');

const RemindersSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        min: [3, "Min title length is 3 chars."]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        min: [5, "Min description length is 3 chars."],
        max: [500, "Max description length is 500 chars."]

    },
    isDone: {
        type: Boolean

    },
    days: {
        type: Date
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reminders:  [ RemindersSchema ]
})

module.exports.User = mongoose.model('User', UserSchema );
module.exports.Reminders = mongoose.model('Reminders', RemindersSchema );

