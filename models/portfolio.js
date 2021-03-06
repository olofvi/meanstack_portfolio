const mongoose = require('mongoose');

const BucketlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        education: ['Diploma','Post-grad', 'Under-grad', 'High school']
    }
});