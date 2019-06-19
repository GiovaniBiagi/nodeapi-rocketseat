const mongoose = require('mongoose')

mongoose.connect('mongodb://Giovani:Le201201..@200.219.149.206:27017/noderest', { useNewUrlParser : true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = mongoose