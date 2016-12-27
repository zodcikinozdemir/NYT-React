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
		<br/>
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>Search </strong></h3>
				</div>
				<div className="panel-body">
					<form onClick={this.handleSubmit}>

					  <div className="form-group">
					    <label>Search Term:</label>
					    <input type="text" id="topic" 
						value={this.state.topic} onChange={this.handleChange}
							required />
					  </div>

					  <div className="form-group">
					    <label>Start Year (Optional):</label>
					    <input type="text" id="startDate" 
						value={this.state.startDate}
                		onChange={this.handleChange}
                			required />
					  </div>

				  
					  <div className="form-group">
					    <label>End Year (Optional):</label>
					    <input type="text" id= "endDate" 
						value={this.state.endDate} 
						onChange={this.handleChange}
						required/>
					  </div>

					  <button type="submit" class="btn btn-default" id="runSearch"><i className="fa fa-search"></i> Search</button>
                      
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