//import react 
import React from "react";

import Query from "./Query";
import Results from "./Result";
import helper from "../utils/Helpers";

//define class
class Search extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      searchTopic:"",
      searchStartDate: Date.now(),
      searchEndDate: Date.now(),
      results:[]
    };

    this.setQuery = this.setQuery.bind(this);
    this.updateDataBase = this.updateDataBase.bind(this);
  }

componentDidUpdate(prevProps, prevState) {

  if(this.state.searchTopic != prevState.searchTopic){
    helper.runQuery(this.state.searchTopic, this.state.searchStartDate, this.state.searchEndDate)
      .then((response) => {
        this.setState({ results: response });
      });
  }

}


  setQuery(topic,startDate,endDate) {
    this.setState({
      searchTopic:topic,
      searchStartDate: startDate,
      searchEndDate: endDate
    });
  }

  updateDataBase(saveId){
    var topic = this.state.results[saveId].headline.main;
    var url = this.state.results[saveId].web_url;
    var pub_date = this.state.results[saveId].pub_date;
    
    helper.postSaved(topic,url,pub_date).then(function(data){
       this.props.databaseChanged();
       var tempResult = this.state.results;
       tempResult.splice(saveId,1);
       this.setState({ result : tempResult})

    }.bind(this))

  }


	//render the function
	render() {
    return (	    	
  		<div>
        <Query setQuery = {this.setQuery}/> 
        <Results results = {this.state.results}
                 updateDataBase = {this.updateDataBase}/>
      </div> 
    )
	}//render
}//React.Component


// Export the componen back for use in other files
export default Search;