import React from "react";
import Header  from "./children/Header";
import Search from "./children/Search";
import Saved from "./children/Saved";


//define class
class Main extends React.Component {
constructor(props) {
	super(props);

    this.state = {
    	isDatabaseChanged:false
    };
    this.databaseChanged = this.databaseChanged.bind(this);
}

	databaseChanged() {
		var isChange = -(this.state.isDatabaseChanged);
		this.setState({ isDatabaseChanged : isChange });
	}

 render() {
    return (
      <div>
        <div > 
          <Header />
        </div>
        <div className="row">
          <div className = "col-md-1"></div>
          <div className = "col-md-10">
            <Search databaseChanged = {this.databaseChanged}/>
          
            <Saved isDatabaseChanged ={this.state.isDatabaseChanged}/>
          </div>
          <div className = "col-md-1"></div>
        </div>  
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;



