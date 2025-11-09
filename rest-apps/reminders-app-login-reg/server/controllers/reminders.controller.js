const { Reminders, User } = require("../models/reminders.model.js");
const bcrypt = require("bcrypt");
const passport = require("passport")

module.exports = {

    index: ( req, res ) => {
        Reminders.find()
            .then(data => res.json({ 
                results: data }))
            .catch(err => res.json('Error: ' + err))
    },

    findOne: (req, res) => {
        Reminders.findById({ _id: req.params._id })
            .then(oneReminder => res.json( oneReminder ))
            .catch(err => res.json( err ))
    },

    create: ( req, res ) => {
        Reminders.create( req.body )
            .then(data => {
                User.findOne({_id: req.user._id})
                    .then(aUser => {
                        // console.log(aUser)
                        aUser.reminders.push(data);
                        // console.log(aUser)
                        aUser.save()
                        res.json(aUser)
                    })
            })
            .catch(err => res.json('Error: ' + err))
    },

    update: ( req, res ) => {
        Reminders.findOneAndUpdate({_id: req.params._id}, req.body, { new: true, runValidators: true} )
            .then(data => res.json({ data }))
            .catch(err => res.json('Error: ' + err))
    },

    delete: (req , res ) => {
        Reminders.deleteOne({_id: req.params._id})
            .then(result => res.json(result))
            .catch(err => console.log(err))
    },




    register: (req, res) => {
        User.findOne({ username: req.body.username })
            .then(doc => {
                if (doc) res.json({msg: "Error", Error: "User already exists."});
                else {
                    const hash = bcrypt.hashSync(req.body.password, 10)
                    const newUser = new User({
                        username: req.body.username,
                        password: hash
                    });
                    newUser.save()
                    res.json({msg: "Success", user: newUser})
                }
            })
            .catch(err => res.json({ msg: "Error", Error: err }))
    },

    login: ( req, res, next ) => {
        passport.authenticate("local", (err, user, info) => {
            if ( err ) res.json({msg: "Error", Error: err });
            if ( !user ) res.json({msg: "Error", Error: "No such user exists."})
            else {
                req.login(user, (err) => {
                    if (err) throw err;
                    else {
                        res.json({ msg: "Authenticated" });
                        console.log(req.user)
                    }
                })
            }
        }) (req, res, next)
    },

    auth: (req, res) => {
        if ( !req.user ) return res.json({msg: "Error", Error: "Unable to auth user."});
        else {
            // console.log(req.user)
            res.json({ user: req.user })
        }
    }
}