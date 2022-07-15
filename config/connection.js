const { mongo } = require('mongoose')
const state={
    db:null
}

const mongoClient=require('mongodb').MongoClient

module.exports.connect=function(done){
    const url='mongodb+srv://userone:userone@cluster0.cidjqus.mongodb.net/emp_db?retryWrites=true&w=majority'
    const dbname='shopping'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })

  
}
module.exports.get=function(){
    return state.db
}