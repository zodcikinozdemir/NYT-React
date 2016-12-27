//include mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title:{
		type: String,
		trim: true,
		required: true
	},
	pub_date: {
		type: Date,
		trim: true,
	},
	url:{
		type: String,
	}
});
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;