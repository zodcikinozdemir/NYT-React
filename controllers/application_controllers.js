var express = require('express');
var path = require('path');

var Article = require("../models/article.js");

var router  = express.Router();


router.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

router.get('/api/saved',function(req,res){
	Article.find({}).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(doc);
    }
  });

});

router.post("/api/saved", function(req, res) {
  var articleItem= {}

	articleItem.title = req.body.title;
	articleItem.url= req.body.url;
	articleItem.pub_date= req.body.pub_date;
  var entry = new Article(articleItem);
  
   Article.create(articleItem, function(err,data) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(data);
    }
  });
})

router.delete("/api/saved/:id", function(req, res) {
 
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