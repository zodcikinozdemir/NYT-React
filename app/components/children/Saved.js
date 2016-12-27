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
    var that = this;
    helpers.deleteSaved(idToDelete).then(function(){
      helpers.getSaved().then(function(response) {
        that.setState({ saved: response.data });
      });
    });
  }

render() {
  var that = this;
	   return (
      <div className="row">
        <div className="col-sm-12">
          <br/>
            <div className="panel panel-primary">
              <div className="panel-heading text-center">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>Saved Articles</strong></h3>
              </div>

              <div className="panel-body" id="wellSection">
                {/* Here we use a map function to loop through an array in JSX */}
                {this.state.saved.map(function(search, i){
                  return(
                    <div className="well" key={i}>
                      <h5> {search.title} </h5>
                      <h5> Url : {search.url} </h5>
                      <h6> Date published: {search.pub_date} </h6>
                      <button 
                        className="btn btn-danger" type="submit" id={search._id}
                        onClick = { that.handleChange }>Remove</button>
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