// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

var ApiKey = "5aa79c02ea5840d28aa684eed86fe61c";
var queryUrlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" 
                   + ApiKey + "&fl=pub_date,headline,web_url&q=";


const helpers = {
  runQuery: (topic,startYear,endYear) => {
    topic=topic.trim();
    startYear=startYear.trim();
    endYear=endYear.trim();

    var queryURL = queryUrlBase+topic;

    if (parseInt(startYear)) {
      queryURL = queryURL + "&begin_date=" + startYear + "0101";
    }

    if (parseInt(endYear)) {
      queryURL = queryURL + "&end_date=" + endYear + "0101";
    }

    return axios.get(queryURL).then((response) => {
      var docs=[];
      for(var i =0; i <5; i++){
        docs.push(response.data.response.docs[i])
      }
      return docs;
    });
  },

  postSaved: (title, url, pub_date) => {
    return axios.post("/api/saved", { title: title, url: url, pub_date: pub_date });
  },

  deleteSaved: (id) => {
    return axios.delete("/api/saved/"+id);
  },

  getSaved: () => {
    return axios.get("/api/saved");
  }

}

// We export the API helper
module.exports = helpers;
