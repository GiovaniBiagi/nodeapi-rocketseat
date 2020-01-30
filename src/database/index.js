const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0-rmgsv.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = mongoose