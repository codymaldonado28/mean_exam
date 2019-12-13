const mongoose= require('mongoose');
const uniqueValidator= require ('mongoose-unique-validator');

mongoose.connect("mongodb://localhost/mean_exam2_database", { useNewUrlParser: true, useUnifiedTopology: true });
const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "A author must have a name"],
        minlength: [3, "a pets name must be over 3 characters"],
        maxlength: [100, "A name cant be over 100 characters"],
        unique: [true, 'must be a unique name']
    },
    type:{
        type: String,
        required: [true, "a author must have 1 book to be an author"],
        maxlength: [20, "title less then 20 characters"],
        minlength: [3, " the type of animal must be at least 3 characters"],
    },
    description:{
        type: String,
        required: [true, "a pet must have a description"],
        minlength: [3, " a description must be over 3 characters long"],
        maxlength: [200, "tell me less then 200 characters"]
    },
    skill1:{
        type: String,
        required:[false],
        maxlength: [200, "tell me less then 200 characters"]
    },
    skill2:{
        type: String,
        required:[false],
        maxlength: [200, "tell me less then 200 characters"]
    },
    skill3:{
        type: String,
        required:[false],
        maxlength: [200, "tell me less then 200 characters"]
    },
    likes:{
        type: Number,
        default: 0
    }
},{timestamps:true} )

PetSchema.plugin(uniqueValidator);
mongoose.model('Pet', PetSchema);