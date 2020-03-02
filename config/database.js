if(process.env.NODE_ENV === 'production'){
  module.exports = { mongoURI: 'mongodb+srv://adan:adan@cluster0-kmqfm.mongodb.net/test?retryWrites=true&w=majority' }
} else {  
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }
}