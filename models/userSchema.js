const mongoose = require('mongoose')

const userSchema = mongoose.Schema({ 


created_by:{
    type: String,
     required: true
},

    created_at: {
        type: Date,
        required: true
    },

    blog_title: {
        type: String,
         required: true
        },

    blog_content: {
        type: String,
        required: true
        
    }
    
})

    module.exports = mongoose.model('user', userSchema)