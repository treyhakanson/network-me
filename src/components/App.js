import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>{this.props.children}</div>	
			</MuiThemeProvider>
		)		
	}
}

export default App;