require('../models/pet')
const mongoose = require('mongoose'),
    Pet = mongoose.model('Pet');

module.exports ={
    index: (req,res) => {
        Pet.find().sort({type: 1})
        .then(result => res.json({results: result}))
        .catch(err => res.json({errors: err.errors}));
    },
    create:(req,res) => {
        Pet.create(req.body)
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req,res) => {
        Pet.findById({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json({errors: err.errors}));
    },
    destroy: (req,res) => {
        Pet.findOneAndDelete({_id: req.params.id})
        .then (result=> res.json({results: result}))
        .catch(err=> res.json({errors: err.errors}));
    },
    update: (req,res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, context:'query', useFindAndModify:true})
            .then ( result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    }
}
