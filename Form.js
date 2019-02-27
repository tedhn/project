import React , {Component} from 'react';

class Form extends Component {

	constructor(props){
		super(props);

		this.initialState = {
			characters : [
				{
				'name': 'Charlie',
				'job': 'Janitor'
				},
				{
				'name': 'Mac',
				'job': 'Bouncer'
				},
				{
				'name': 'Dee',
				'job': 'Aspring actress'
				},
				{
				'name': 'Dennis',
				'job': 'Bartender'
				}
			]
		};

		this.state = this.initialState ;
	}

	
	handleChange = event => {
		const {name , value} = event.target;

		this.setState({
			[name] : value 

		});
	}

	render(){
		const {name , job} = this.state;

		return(
			<form>
				<label>Name</label>
				<br></br>
				<input 
				type="text" 
				name="name" 
				value={name} 
				onChange={this.handleChange} />
				<br></br>
				<label>Job</label>
				<br></br>
				<input 
				type="text" 
				name="job" 
				value={job} 
				onChange={this.handleChange}/>
			</form>
		)
	}

}

export default Form;