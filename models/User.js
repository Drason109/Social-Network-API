const {Schema, model } = require('mongoose');

//user schema for someone that logs in, creates a thought or reacts to a post
const userSchema = new Schema(
    {
        username: {type: String, unique: true, required: 'Please Enter an Username', trim: true}
    },
    {
        email: {type: String,unique:true, required: 'Please Enter an Email address', 
            validate: {validator(validEmail){ return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/.test(validEmail);
                },
            message: "Please enter a valid Email Address",
            },
        }
    },{
         thoughts: [{
            type: Schema.Types.ObjectId,
            ref:'Thought'
    }]},
    {
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

//adds counts for every user thats added to friends catergory
userSchema
    .virtual('friendCount')
    .get(function() {
        return this.friends.length
    });

    //export the user schema as a model
    const User = model('User', userSchema);

    module.exports = User;
