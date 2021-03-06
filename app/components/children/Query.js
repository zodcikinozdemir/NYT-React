 //import react 
import React from "react";

//define class
class Query extends React.Component {
	
	constructor(props) {
	    super(props);

	    this.state = {
	      topic:"",
	      startDate:"",
	      endDate: ""
	    };  
	 	this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}


  handleChange(event) {
    var newId = event.target.id;
    switch (newId){
    	case "topic":
    		this.setState({ topic : event.target.value } );
    		break;
    	case "startDate":
    		this.setState({ startDate : event.target.value } );
    	case "endDate":
    		this.setState({ endDate : event.target.value } );
    }
    this.setState({ newid : event.target.value } );
    
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setQuery(this.state.topic, this.state.startDate, this.state.endDate);
  }

render() {
	    return (	    	
  		<div className="row">
		<div className="col-sm-12">
			<div className="panel panel-primary">
				<div className="panel-heading">
					<strong><i className="fa  fa-list-alt"></i>Search </strong>
				</div>
				<div className="panel-body">
					<form onClick={this.handleSubmit}>

					  <div className="form-group">
					    <label>Search Term:</label>
					    <input type="text" className="form-control-sm" id="topic" 
						    value={this.state.topic} onChange={this.handleChange}
							required />	
					  </div>

					  <div className="form-group">
					    <label>Start Year (Optional):</label>
					    <input type="text" className="form-control-sm" id="startDate" 
						value={this.state.startDate}
                		onChange={this.handleChange}
                			required/>
                	  </div>

					  <div className="form-group">
					    <label>End Year (Optional):</label>
					    <input type="text" className="form-control-sm" id= "endDate" 
						value={this.state.endDate} 
						onChange={this.handleChange}
						required/>
					  </div>
					  
					  <div className="form-group">
					  	<button className="search btn btn-default">Search</button>
					  </div>

					</form>
				</div>
			</div>
		</div>
	</div>

	    );
	}//render

}//React.Component


// Export the componen back for use in other files
export default Query;