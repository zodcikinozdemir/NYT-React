 //import react 
import React from "react";

//define class
class Results extends React.Component {
	
	constructor(props) {
    super(props);
     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var idToSave = event.target.value;
    this.props.updateDataBase(idToSave);
  }

render() {
  var self = this;
	   return (
      <div className="row">
        <div className="col-sm-12">
          <br/>
            <div className="panel panel-primary">
              <div className="panel-heading text-center">
                <strong><i className="fa fa-table"></i>Articles</strong>
              </div>

              <div className="panel-body" id="wellSection">
                {this.props.results.map(function(article, index){
                  return(
                    <div className="well" key={index}>
                      <a href={article.web_url}> {article.headline.main} </a>
                      <h6> Date published: {article.pub_date} </h6>
                      <button className="save btn btn-primary" value={index}
                        onClick = { self.handleChange }>Save</button>
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


// Export the componen back for use in other files
export default Results;