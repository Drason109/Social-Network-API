const {Schema, Types, model} = require('mongoose');
const {format_date} = require('../utils/format_date');
//reaction Schema for the thought schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username:{
            type: String,
            required: true,
            trim: true
        },
        createAt: {
            type: Date,
            default: Date.now,
            get:(time) => format_date(time)
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);
//Thought schema with the reaction schema included
const thoughtSchema = new Schema({
    
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxlength: 280,
    },
    createAt:{
        type: Date,
        default: Date.now,
        get: (time) => format_date(time)
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
        virtual: true
    },
    id: false,
});

//adds a reaction count when someone reacts to the thought
thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    });

//exports the thought schema as a model 
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;