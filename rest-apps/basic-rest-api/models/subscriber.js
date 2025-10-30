// Include mongoose to create model
const mongoose = require('mongoose')


// create the app model by creating a schema or object that holds how it will be formed.  With keys for all of the properties of the subscriber
const subscribersSchema = new mongoose.Schema({
name:{
    type: String,
    required: true
},
subscribedToChannel: {
    type: String,
    required: true
},
subscriberDate:{
    type: Date,
    required: true,
    default: Date.now
}
})

// model function allows us to interact with the model using this schema (hover over schema variable to see intellitype notes)
module.exports = mongoose.model('Subscriber', subscribersSchema)