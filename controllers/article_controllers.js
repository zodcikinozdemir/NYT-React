//require express , path, models 

var express = require('express');
var path = require('path');

var Article = require("../models/article.js");


var router  = express.Router();



router.get('/',function(req,res){
	Article.find({}).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(doc);
    }
  });

});

router.post("/", function(req, res) {
  console.log("BODY: " + req.body.title + "   "+ req.body.url+"  "+req.body.pub_date);
  var newNews= {}

	newNews.title = req.body.title;
	newNews.url= req.body.url;
	newNews.pub_date= req.body.pub_date;
  var entry = new Article(newNews);
  
   Article.create(newNews, function(err,data) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data);
    }
  });
})

 // This is the route we will send POST requests to save each search.
router.delete("/:id", function(req, res) {
 
    Article.remove({_id : req.params.id }, function(err,data) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data);
    }
  });
})

module.exports = router;