var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var  _ = require('underscore')
var Movie = require('./models/movie')
var port = process.env.PORT || 3000
var bodyParser = require('body-parser')


var app = express()

mongoose.connect(' mongodb://localhost:27017/imooc')

app.set('views','./views/pages')
app.set('view engine','jade')
//app.use(express.bodyParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'bower_components')))
//app.locals.moment = require('moment')
app.listen(port)

console.log('imooc started on port ' + port)

//index.page
/*app.get('/',function (req,res) {
 Movie.fetch(function (err,movies) {
 if(err){
 console.log(err)
 }
 res.render('index',{
 title:'imooc 首页',
 movies: movies
 })
 })

 })

 //index.page
 app.get('/movie/:id',function (req,res) {
 var id = req.params.id
 Movie.findById(id,function (err,movie) {
 res.render('detail',{
 title:'imooc' + movie.title,
 movie:movie
 })
 })
 })
 //index.page
 app.get('/admin/movie',function (req,res) {
 res.render('admin',{
 title:'imooc 后台录入页',
 movie:{
 doctor:'',
 country:'',
 title:'',
 year:'',
 poster:'',
 falsh:'',
 summary:'',
 language:''
 }
 })
 })


 //admin update movie
 app.get('/admin/update/:id',function (req,res) {
 var id = req.params.id
 if(id){
 Movie.findById(id,function(err,movie){
 res.render('admin',{
 title:'imooc 后台更新页',
 movie:movie
 })
 })
 }
 })



 //admin post movie
 app.post('/admin/movie/new',function (req,res) {
 var id = req.body.movie._id
 var movieObj = req.body.movie
 var _movie = null

 if(id !== 'undefined'){
 Movie.findById(id,function (err, movie) {
 if(err){
 console.log(err)
 }
 _movie = _.extend(movie,movieObj)
 _movie.save(function (err, movie) {
 if(err){
 console.log(err)
 }
 res.redirect('/movie/' + movie._id)
 })
 })

 }
 else{
 _movie = new Movie({
 doctor:movieObj.doctor,
 title:movieObj.title,
 country:movieObj.country,
 language:movieObj.language,
 year:movieObj.year,
 poster:movieObj.poster,
 summary:movieObj.summary,
 flash:movieObj.falsh
 })

 _movie.save(function (err, movie) {
 if(err){
 console.log(err)
 }
 console.log(movie._id)
 res.redirect('/movie/' + movie._id)
 })
 }
 })



 //index.page
 app.get('/admin/list',function (req,res) {
 Movie.fetch(function (err,movies) {
 if(err){
 console.log(err)
 }
 res.render('list',{
 title:'imooc 列表页',
 movies: movies
 })
 })
 })*/

/*app.get('/',function (req,res) {

        res.render('index',{
            title:'imooc 首页',
            movies: [{
                title:'机械战警',
                _id:1,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title:'机械战警',
                _id:2,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title:'机械战警',
                _id:3,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title:'机械战警',
                _id:4,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title:'机械战警',
                _id:5,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            },{
                title:'机械战警',
                _id:6,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
            }]
        })


})
//index.page
app.get('/movie/:id',function (req,res) {
        res.render('detail',{
            title:'imooc 详情页',
            movie:{
                doctor:'吴莎莉',
                country:'美国',
                title:'机械战警',
                year:2014,
                poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
                language:'英语',
                flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
                summary:'经典科幻片'
            }
        })
})
//index.page
app.get('/admin/movie',function (req,res) {
    res.render('admin',{
        title:'imooc 后台录入页',
        movie:{
            doctor:'',
            country:'',
            title:'',
            year:'',
            poster:'',
            falsh:'',
            summary:'',
            language:''
        }
    })
})
//index.page
app.get('/admin/list',function (req,res) {

        res.render('list',{
            title:'imooc 列表页',
            movies: [{
                title:'机械战警',
                _id:1,
                doctor:'吴莎莉',
                country:'美国',
                year:2014,
                language:'英语',
                flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'

            }]
        })
})*/

app.get('/',function (req,res) {
    Movie.fetch(function(err,movies){
        if(err){
            console.log(err)
        }
        res.render('index',{
            title:'imooc 首页',
            movies: movies
        })
    })



})
//detail.page
app.get('/movie/:id',function (req,res) {
    var id = req.params.id
    Movie.findById(id,function(err,movie){
        res.render('detail',{
            title:'imooc' + movie.title,
            movie:movie
        })
    })

})

//admin updata movie
app.get('/admin/update/:id',function (req,res) {
    var id = req.params.id

    if(id){
        Movie.findById(id,function(err,movie){
            res.render('admin',{
                title:'imooc 后台更新页',
                movie:movie
            })
        })
    }
})

//admin post movie
app.post('admin/movie/new',function(req,res){
    var id = req.body.movie._id
    var movieObj = req.body.movie
    var _movie

    if(id !== 'undefined'){
        Movie.findById(id,function(err,movie) {
            if (err) {
                console.log(err)
            }
            _movie = _.extend(movie,movieObj)
            _movie.save(function(err,movie){
                if(err){
                    console.log(err)
                }
                res.redirect('/movie/' + movie._id)
            })
        })
    }
    else{
        _movie = new Movie({
            doctor:movieObj.doctor,
            title:movieObj.title,
            country:movieObj.country,
            language:movieObj.language,
            year:movieObj.year,
            poster:movieObj.poster,
            summary:movieObj.summary,
            flash:movieObj.flash
        })
        _movie.save(function(err,movie){
            if(err){
                console.log(err)
            }
            res.redirect('/movie/' + movie._id)
        })
    }
})

//admin.page
app.get('/admin/movie',function (req,res) {
    res.render('admin',{
        title:'imooc 后台录入页',
        movie:{
            doctor:'',
            country:'',
            title:'',
            year:'',
            poster:'',
            falsh:'',
            summary:'',
            language:''
        }
    })
})
//index.page
app.get('/admin/list',function (req,res) {
    Movie.fetch(function (err,movies) {
        if(err){
            console.log(err)
        }
        res.render('list',{
            title:'imooc 列表页',
            movies: movies
        })
    })

})
