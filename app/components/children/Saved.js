//import react 
import React from "react";

// Import sub-components
import helpers from "../utils/Helpers";

//define class
class Results extends React.Component {
	
	constructor(props) {
    super(props);
       
    this.state = {
      saved : []
    },

     this.handleChange = this.handleChange.bind(this);
     this.componentDidMount =this.componentDidMount.bind(this);
  }

  // The moment the page renders get the History
  componentDidMount() {
    // Get the latest history.
    helpers.getSaved().then(function(response) {
      this.setState({ saved: response.data });
    }.bind(this));
  }

  //Will activate if new props come in
  componentWillReceiveProps(nextProps) {
    helpers.getSaved().then(function(response) {
      this.setState({ saved: response.data });
    }.bind(this));

  }

  handleChange(event) {
    var idToDelete = event.target.id;
    var self = this;
    helpers.deleteSaved(idToDelete).then(function(){
      helpers.getSaved().then(function(response) {
        self.setState({ saved: response.data });
      });
    });
  }

render() {
  var self = this;
	   return (
      <div className="row">
        <div className="col-sm-12">
          <br/>
            <div className="panel panel-primary">
              <div className="panel-heading text-center">
                <strong><i className="fa fa-table"></i>Saved Articles</strong>
              </div>

              <div className="panel-body" id="wellSection">
                {/* Here we use a map function to loop through an array in JSX */}
                {this.state.saved.map(function(article, index){
                  return(
                    <div className="well" key={index}>
                      <a href={article.url} target="_blank"> {article.title} </a>
                      <h6> Date published: {article.pub_date} </h6>
                      <button className="remove btn btn-danger" id={article._id}
                        onClick = {self.handleChange }>Remove</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    );
	}//render

}//React.Component

export default Results;