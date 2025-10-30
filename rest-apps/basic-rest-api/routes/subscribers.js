// Require express throughout the app
const express = require('express')
// Use the Router tool in express
const router = express.Router()
// Require the subscriber model in the routes
const Subscriber = require('../models/subscriber')
// const subscriber = require('../models/subscriber')



// GET all
router.get('/', async(req, res)=>{
// res.send('Hello World')
try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
} catch (err) {
    res.status(500).json({ message: err.message})
}

})

// GET one
router.get('/:id', getSubscriber,(req, res)=>{
    res.send(res.subscriber.name)
})

// CREATE one
router.post('/', async(req, res)=>{
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message})
    }
})

// UPDATE one
router.patch('/:id', (req, res)=>{
    
})
// DELETE one
router.delete('/:id', (req, res)=>{
    
})

async function getSubscriber(req,res,next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber ===null){
            return res.status(400).json({ message: "Not in this database"})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.subscriber = subscriber
    next()
}


// Make the router accessable to other parts of the app
module.exports = router